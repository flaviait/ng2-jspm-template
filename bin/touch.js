"use strict";

const program = require("commander");
const logger = require("log4js").getLogger("touch");

const utils = require("../dev/utils");

program
  .usage('<file>')
  .parse(process.argv);

utils.writeFile(program.args[0], "", {flag: "wx"}).catch(error => {
  if (error.code !== "EEXIST") {
    logger.error(error.stack);
    process.exit(1);
  }
});