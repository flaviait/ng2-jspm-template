var fs = require("fs");
var mkdirp = require("mkdirp");

generateTypings = require("./generate-typings");

new Promise((resolve, reject) =>
  mkdirp(".tmp", err =>
    err ? reject(err) : resolve(generateTypings()
      .then(typings =>
        new Promise((resolve, reject) =>
          fs.writeFile("src/generated-typings.d.ts", typings, err => err ? reject(err) : resolve())))
      .catch(error => {
        console.error(error.stack);
        process.exit(1);
      }))
  )
);

