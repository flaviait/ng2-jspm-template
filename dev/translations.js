"use strict";

const yaml = require("js-yaml");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const logger = require("log4js").getLogger("translations");

const utils = require("./utils");

const parseYaml = (file) => {
  try {
    return yaml.safeLoad(file.contents);
  } catch (e) {
    if (e.name === "YAMLException") {
      throw new Error(`Error parsing ${file.path}: [${e.mark.line}:${e.mark.column}] ${e.reason}`);
    } else {
      throw e;
    }
  }
};

const mapLeaves = (obj, iteratee, path) => {
  path = path || [];
  return _.flatMap(obj, (value, key) => {
    if (_.isObject(value)) {
      return mapLeaves(value, iteratee, path.concat(key));
    } else {
      return iteratee(value, path.concat(key));
    }
  })
};

const setValueAt = (obj, path, value) => {
  const next = path.shift();
  if (path.length === 0) {
    obj[next] = value;
  } else {
    obj[next] = obj[next] || {};
    setValueAt(obj[next], path, value);
  }
};

const statistics = (opts) =>
  partials => {
    const translations = _.flatMap(partials, partial =>
      mapLeaves(partial.translations, (value, path) =>
        ({value, key: path.join("."), file: partial.path, lang: _.last(path)})));

    const duplicatedValues = _.chain(translations)
      .filter(translation => _.filter(translations, t => translation.value === t.value && translation.lang === t.lang).length > 1)
      .groupBy("value")
      .value();

    let duplicatedKeys = _.filter(translations, translation =>
    _.filter(translations, t => translation.key === t.key).length > 1);

    const conflictingKeys = _.chain(duplicatedKeys)
      .filter(translation => _.some(duplicatedKeys, t => translation.key === t.key && translation.value !== t.value))
      .groupBy("key")
      .value();
    duplicatedKeys = _.groupBy(duplicatedKeys, "key");

    const maxFileNameLength = _.maxBy(translations, t => t.file.length).file.length;

    if (_.size(conflictingKeys) > 0) {
      _.each(conflictingKeys, (translations, key) => {
        logger.error(`Conflict for "${key}":`);
        _.each(translations, t => {
          logger.error(`${_.padEnd(`${t.file} `, maxFileNameLength + 2, "-")}> ${t.value}`)
        });
      });
      return Promise.reject(new Error(`Translation failed: Conflicting translations.`));
    }
    if (opts.verbose) {
      _.each(duplicatedValues, (translations, value) => {
        logger.debug(`Duplicated value for "${value}":`);
        _.each(translations, t => {
          logger.debug(`${_.padEnd(`${t.file} `, maxFileNameLength + 2, "-")}> ${t.key}`)
        });
      });
    }

    const duplicatedValuesPercent = _.size(duplicatedValues) / translations.length * 100;
    if (!_.isUndefined(opts.duplicateThreshold)) {
      if (duplicatedValuesPercent > opts.duplicateThreshold) {
        return Promise.reject(new Error(`Translation failed: Too may duplicates: ${_.size(duplicatedValues)} (${(duplicatedValuesPercent).toFixed(1)}%)`))
      }
    }
    logger.debug(`Translation duplicates: ${_.size(duplicatedValues)} (${(duplicatedValuesPercent).toFixed(1)}%)`);
    return partials;
  };

const byLanguage = translations => {
  const result = {};
  mapLeaves(translations, (value, path) => {
    setValueAt(result, [path.pop()].concat(path), value);
  });
  return result;
};

exports.compile = (src, dest, opts) =>
  utils.getFiles(src)
    .then(paths => Promise.all(paths.map(path =>
      utils.readFile(path).then(contents => ({contents, path})))))
    .then(files => Promise.all(files.map(file =>
      ({path: file.path, translations: parseYaml(file)}))))
    .then(statistics(_.pick(opts, "verbose", "duplicateThreshold")))
    .then(partials => _.defaultsDeep.apply(_, _.map(partials, "translations")))
    .then(byLanguage)
    .then(translations => `export default ${JSON.stringify(translations, null, 4)};`)
    .then(content => utils.writeFile(dest, content));