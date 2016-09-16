"use strict";

const _ = require("lodash");
const program = require("commander");
const logger = require("log4js").getLogger("lint-scripts");

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
    logger.error(`There are ${e.count} linting errors:` + "\n" + e.output);
  } else {
    logger.error(e.stack);
  }
};

utils.getFiles(program.files, {ignore: program.exclude})
  .then(lintScripts)
  .then(
    () => logger.info("No linting errors"),
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
      () => logger.info("No linting errors"),
      printError
    )
  }, {events: ["change", "unlink"]});
}