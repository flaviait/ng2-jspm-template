var glob = require("glob");

var toStringDefinitions = files =>
  files.map(file => `declare module "${file}" {let _: string; export default _;}`).join("\n");

module.exports = () => new Promise((resolve, reject) =>
  glob("src/app/**/*.scss", (err, files) =>
    err ? reject(err) : resolve(toStringDefinitions(files))
  )
);