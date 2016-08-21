var glob = require("glob");
var yaml = require("js-yaml");
var _ = require("lodash");
var fs = require("fs");
var program = require("commander");
var mkdirp = require("mkdirp");
var path = require("path");

program
  .usage('[options] <files-glob> <output>')
  .option("-v, --verbose", "Log some additional information")
  .option("-d, --duplicate-threshold <threshold>", "Limit the allowed translation duplication (in percent)")
  .parse(process.argv);

program.files = program.args[0];
program.output = program.args[1];

var getFiles = src =>
  new Promise((resolve, reject) =>
    glob(src, (e, files) =>
      e ? reject(e) : resolve(files)))
    .then(files => _.reject(files, f => _.includes(f, "*")));

var readFile = src =>
  new Promise((resolve, reject) =>
    fs.readFile(src, "utf-8", (e, content) =>
      e ? reject(e) : resolve(content)));

var parseYaml = (file) => {
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

var mapLeaves = (obj, iteratee, path) => {
  path = path || [];
  return _.flatMap(obj, (value, key) => {
    if (_.isObject(value)) {
      return mapLeaves(value, iteratee, path.concat(key));
    } else {
      return iteratee(value, path.concat(key));
    }
  })
};

var setValueAt = (obj, path, value) => {
  var next = path.shift();
  if (path.length === 0) {
    obj[next] = value;
  } else {
    obj[next] = obj[next] || {};
    setValueAt(obj[next], path, value);
  }
};

var statistics = partials => {
  var translations = _.flatMap(partials, partial =>
    mapLeaves(partial.translations, (value, path) =>
      ({value, key: path.join("."), file: partial.path, lang: _.last(path)})));

  var duplicatedValues = _.chain(translations)
    .filter(translation => _.filter(translations, t => translation.value === t.value && translation.lang === t.lang).length > 1)
    .groupBy("value")
    .value();

  var duplicatedKeys = _.filter(translations, translation =>
  _.filter(translations, t => translation.key === t.key).length > 1);

  var conflictingKeys = _.chain(duplicatedKeys)
    .filter(translation => _.some(duplicatedKeys, t => translation.key === t.key && translation.value !== t.value))
    .groupBy("key")
    .value();
  duplicatedKeys = _.groupBy(duplicatedKeys, "key");

  var maxFileNameLength = _.maxBy(translations, t => t.file.length).file.length;

  if (_.size(conflictingKeys) > 0) {
    _.each(conflictingKeys, (translations, key) => {
      console.error(`Conflict for "${key}":`);
      _.each(translations, t => {
        console.error(`${_.padEnd(`${t.file} `, maxFileNameLength + 2, "-")}> ${t.value}`)
      });
    });
    return Promise.reject(new Error(`Translation failed: Conflicting translations.`));
  }
  if (program.verbose) {
    _.each(duplicatedValues, (translations, value) => {
      console.log(`Duplicated value for "${value}":`);
      _.each(translations, t => {
        console.log(`${_.padEnd(`${t.file} `, maxFileNameLength + 2, "-")}> ${t.key}`)
      });
    });
  }

  var duplicatedValuesPercent = _.size(duplicatedValues) / translations.length * 100;
  if (!_.isUndefined(program.duplicateThreshold)) {
    if (duplicatedValuesPercent > program.duplicateThreshold) {
      return Promise.reject(new Error(`Translation failed: Too may duplicates: ${_.size(duplicatedValues)} (${(duplicatedValuesPercent).toFixed(1)}%)`))
    }
  }
  console.log(`Translation duplicates: ${_.size(duplicatedValues)} (${(duplicatedValuesPercent).toFixed(1)}%)`);
  return partials;
};

var byLanguage = translations => {
  var result = {};
  mapLeaves(translations, (value, path) => {
    setValueAt(result, [path.pop()].concat(path), value);
  });
  return result;
};

var writeFile = (content, dest) =>
  new Promise((resolve, reject) =>
    mkdirp(path.dirname(dest), e =>
      e ? reject(e) : fs.writeFile(dest, content, e =>
        e ? reject(e) : resolve())));

var processTranslations = (src, dest) =>
  getFiles(src)
    .then(paths => Promise.all(paths.map(path =>
      readFile(path).then(contents => ({contents, path})))))
    .then(files => Promise.all(files.map(file =>
      ({path: file.path, translations: parseYaml(file)}))))
    .then(statistics)
    .then(partials => _.defaultsDeep.apply(_, _.map(partials, "translations")))
    .then(byLanguage)
    .then(translations => `export default ${JSON.stringify(translations, null, 4)};`)
    .then(content => writeFile(content, dest));

processTranslations(program.files, program.output)
  .catch(e => {
    console.error(e);
    process.exit(1);
  });