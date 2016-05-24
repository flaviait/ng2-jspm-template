var glob = require("glob");
var fs = require("fs");
var program = require("commander");
var _ = require("lodash");

var updateTypings = (src, dest) =>
  new Promise((resolve, reject) =>
    glob(src, (err, files) => {
      if (err) {
        reject(err);
      } else {
        var definitions = files
          .map(file => `declare module "${file}" {let _: string; export default _;}`)
          .join("\n");
        fs.writeFile(dest, definitions, err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
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
  var updateDebounced = _.debounce(file => {
    console.log(`${file} changed. Updating typings ...`);
    updateTypings(program.files, program.output)
      .then(
        () => console.log(`Typings written to ${program.output}`),
        err => console.error("Error generating typings:", err)
      );
  }, 100);

  console.log(`Watching for changes in ${program.args[0]}`);
  chokidar.watch(program.files)
    .on("add", updateDebounced)
    .on("unlink", updateDebounced);
}