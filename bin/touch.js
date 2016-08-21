var fs = require("fs");
var program = require("commander");
var mkdirp = require("mkdirp");
var path = require("path");

var touchFile = (dest) =>
  new Promise((resolve, reject) =>
    mkdirp(path.dirname(dest), e =>
      e ? reject(e) : fs.writeFile(dest, "", {flag: "wx"}, e =>
        e ? reject(e) : resolve())));

program
  .usage('<file>')
  .parse(process.argv);

touchFile(program.args[0]).catch(error => {
  if (error.code !== "EEXIST") {
    console.error(error.stack);
    process.exit(1);
  }
});