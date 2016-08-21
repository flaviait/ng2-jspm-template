var _ = require("lodash");
var program = require("commander");

var processTranslations = require("../dev/translations");

program
  .usage('[options] <files-glob> <output>')
  .option("-w, --watch", "Watch the translation files")
  .option("-v, --verbose", "Log some additional information")
  .option("-d, --duplicate-threshold <threshold>", "Limit the allowed translation duplication (in percent)")
  .parse(process.argv);

program.files = program.args[0];
program.output = program.args[1];

processTranslations(program.files, program.output)
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

if (program.watch) {
  var watch = require("../dev/watch");
  watch(program.files, () => {
    processTranslations(program.files, program.output).then(
      () => console.log(`Translations written to ${program.output}`),
      err => console.error("Error processing translation:", err)
    );
  }, {events: ["change", "unlink"]});
}