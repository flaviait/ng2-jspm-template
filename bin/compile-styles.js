"use strict";

const program = require("commander");
const logger = require("log4js").getLogger("global-styles");

const compileStyles = require("../dev/styles").compile;

program
  .usage('[options] <entry> <output>')
  .option("-w, --watch <glob>", "Watch the styles")
  .option("-m, --minify", "Minify the styles")
  .parse(process.argv);

program.entry = program.args[0];
program.output = program.args[1];

compileStyles(program.entry, program.output, {minify: program.minify})
  .then(
    () => logger.info(`Global styles written to ${program.output}`),
    err => {
      logger.error("Error processing global styles:", err);
      if (!program.watch) {
        process.exit(1);
      }
    }
  );

if (program.watch) {
  const watch = require("../dev/watch");
  watch(program.watch, () => {
    compileStyles(program.entry, program.output, {minify: program.minify}).then(
      () => logger.info(`Global styles written to ${program.output}`),
      err => logger.error("Error processing global styles:", err)
    );
  });
}