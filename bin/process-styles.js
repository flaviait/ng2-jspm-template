"use strict";

const program = require("commander");
const processStyles = require("../dev/styles");

program
  .usage('[options] <entry> <output>')
  .option("-w, --watch <glob>", "Watch the styles")
  .option("-m, --minify", "Minify the styles")
  .parse(process.argv);

program.entry = program.args[0];
program.output = program.args[1];

processStyles(program.entry, program.output, {minify: program.minify})
  .then(
    () => console.log(`Global styles written to ${program.output}`),
    err => {
      console.error("Error processing global styles:", err);
      if (!program.watch) {
        process.exit(1);
      }
    }
  );

if (program.watch) {
  const watch = require("../dev/watch");
  watch(program.watch, () => {
    processStyles(program.entry, program.output, {minify: program.minify}).then(
      () => console.log(`Global styles written to ${program.output}`),
      err => console.error("Error processing global styles:", err)
    );
  });
}