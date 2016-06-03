var glob = require("glob");
var yaml = require("js-yaml");
var _ = require("lodash");
var fs = require("fs");
var program = require("commander");
var mkdirp = require("mkdirp");
var path = require("path");

program
  .usage('[options] <files-glob> <output>')
  .option("-w, --watch", "Watch the translation files")
  .parse(process.argv);

program.files = program.args[0];
program.output = program.args[1];

var getFiles = src =>
  new Promise((resolve, reject) =>
    glob(src, (e, files) =>
      e ? reject(e) : resolve(files)));

var readFile = src =>
  new Promise((resolve, reject) =>
    fs.readFile(src, "utf-8", (e, content) =>
      e ? reject(e) : resolve(content)));

var parseYaml = (file) => {
  try {
    return yaml.safeLoad(file.contents);
  } catch (e) {
    if(e.name === "YAMLException") {
      throw new Error(`Error parsing ${file.path}: [${e.mark.line}:${e.mark.column}] ${e.reason}`);
    } else {
      throw e;
    }
  }
};

var eachLeaves = (obj, iteratee, path) => {
  path = path || [];
  _.each(obj, (value, key) => {
    if(_.isObject(value)) {
      eachLeaves(value, iteratee, path.concat(key));
    } else {
      iteratee(value, path.concat(key));
    }
  })
};

var setValueAt = (obj, path, value) => {
  var next = path.shift();
  if(path.length === 0) {
    obj[next] = value;
  } else {
    obj[next] = obj[next] || {};
    setValueAt(obj[next], path, value);
  }
};

var byLanguage = translations => {
  var result = {};
  eachLeaves(translations, (value, path) => {
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
    .then(paths => Promise.all(paths.map(path => readFile(path).then(contents => ({contents, path})))))
    .then(files => Promise.all(files.map(parseYaml)))
    .then(partials => _.defaultsDeep.apply(_, partials))
    .then(byLanguage)
    .then(translations => `export default ${JSON.stringify(translations)};`)
    .then(content => writeFile(content, dest));

processTranslations(program.files, program.output)
  .catch(e => console.error(e));

if (program.watch) {
  var chokidar = require("chokidar");
  console.log(`Watching for changes in ${program.files}`);
  var debouncedProcessing = _.debounce(file => {
    console.log(`${file} changed. Reprocessing translations ...`);
    processTranslations(program.files, program.output)
      .then(
        () => console.log(`Translations written to ${program.output}`),
        err => console.error("Error processing translation:", err)
      );
  }, 100);
  chokidar.watch(program.files)
    .on("change", debouncedProcessing)
    .on("unlink", debouncedProcessing);
}