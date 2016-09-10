"use strict";

const program = require("commander");
const logger = require("log4js").getLogger("lint-styles");

const utils = require("../dev/utils");
const lintStyles = require("../dev/styles").lint;

program
  .usage('[options] <files-glob>')
  .option("-w, --watch", "Watch the styles")
  .parse(process.argv);

program.files = program.args[0];

const printError = e => {
  if (e.code === "ELINT") {
    logger.error(`There are ${e.count} linting errors:`);
    logger.error(e.output);
  } else {
    logger.error(e.stack);
  }
};

utils.getFiles(program.files)
  .then(lintStyles)
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
    lintStyles(files).then(
      () => logger.info("No linting errors"),
      printError
    )
  });
}