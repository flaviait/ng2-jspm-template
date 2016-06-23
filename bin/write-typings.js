var glob = require("glob");
var fs = require("fs");
var program = require("commander");
var _ = require("lodash");
var mkdirp = require("mkdirp");
var path = require("path");

var writeFile = (content, dest) =>
  new Promise((resolve, reject) =>
    mkdirp(path.dirname(dest), e =>
      e ? reject(e) : fs.writeFile(dest, content, e =>
        e ? reject(e) : resolve())));

var updateTypings = (src, dest) =>
  new Promise((resolve, reject) =>
    glob(src, (err, files) =>
      err ? reject(err) : resolve(writeFile(files
          .map(file => `declare module "${file}" {let _: string; export default _;}`)
          .join("\n"),
        dest))));

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
      updateTypings(program.files, program.output)
        .catch(err => console.error(`Error generating typings for ${file}:`, err)))
    .on("unlink", file =>
      updateTypings(program.files, program.output)
        .catch(err => console.error(`Error removing typings ${file}:`, err)));
}