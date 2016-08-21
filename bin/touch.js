var program = require("commander");
var utils = require("../dev/utils");

program
  .usage('<file>')
  .parse(process.argv);

utils.writeFile(program.args[0], "", {flag: "wx"}).catch(error => {
  if (error.code !== "EEXIST") {
    console.error(error.stack);
    process.exit(1);
  }
});