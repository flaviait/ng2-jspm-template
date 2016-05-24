var glob = require("glob");
var fs = require("fs");
var program = require("commander");
var _ = require("lodash");

var addDummyFile = file =>
  new Promise((resolve, reject) =>
    fs.writeFile(`${file}.ts`, `export default "";`, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  );

var removeDummyFile = file =>
  new Promise((resolve, reject) =>
    fs.unlink(`${file}.ts`, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  );

var updateTypings = (src, dest) =>
  new Promise((resolve, reject) =>
    glob(src, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(Promise.all(_.map(files, addDummyFile)));
      }
    })
  );

program
  .usage('[options] <files-glob> <output>')
  .option("-w, --watch", "Watch the files")
  .parse(process.argv);

program.files = program.args[0];
program.output = program.args[1];

updateTypings(program.files, program.output).catch(error => {
  console.error(error.stack);
  process.exit(1);
});

if (program.watch) {
  var chokidar = require("chokidar");
  console.log(`Watching for changes in ${program.args[0]}`);
  chokidar.watch(program.files)
    .on("add", file =>
      addDummyFile(file)
        .catch(err => console.error(`Error generating typings for ${file}:`, err)))
    .on("unlink", file =>
      removeDummyFile(file)
        .catch(err => console.error(`Error removing typings ${file}:`, err)));
}