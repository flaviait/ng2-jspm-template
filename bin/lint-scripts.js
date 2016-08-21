"use strict";

const _ = require("lodash");
const program = require("commander");

const utils = require("../dev/utils");
const lintScripts = require("../dev/scripts").lint;

program
  .usage('[options] <files-glob>')
  .option("-w, --watch", "Watch the scripts")
  .option("-e, --exclude <files-glob>", "Exclude pattern")
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

utils.getFiles(program.files, {ignore: program.exclude})
  .then(lintScripts)
  .then(
    () => console.log("There are no linting errors in the scripts of this project\n"),
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
    lintScripts(files).then(
      () => console.log("There are no linting errors in the scripts of this project\n"),
      printError
    )
  }, {events: ["change", "unlink"]});
}