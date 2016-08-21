"use strict";

const program = require("commander");

const utils = require("../dev/utils");
const lintStyles = require("../dev/styles").lint;

program
  .usage('[options] <files-glob>')
  .option("-w, --watch", "Watch the styles")
  .parse(process.argv);

program.files = program.args[0];

const printError = e => {
  if (e.code === "ELINT") {
    console.error(`There are ${e.count} linting errors:`);
    console.error(e.output);
  } else {
    console.error(e.stack);
  }
};

utils.getFiles(program.files)
  .then(lintStyles)
  .then(
    () => console.log("No style linting errors"),
    e => {
      printError(e);
      if (!program.watch) {
        process.exit(1);
      }
    }
  );

if (program.watch) {
  const watch = require("../dev/watch");
  watch(program.files, files => {
    lintStyles(files).then(
      () => console.log("No style linting errors"),
      printError
    )
  });
}