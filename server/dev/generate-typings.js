var glob = require("glob");
var fs = require("fs");

module.exports = (src, dest) =>
  new Promise((resolve, reject) =>
    glob(src, (err, files) => {
      if(err) {
        reject(err);
      } else {
        var definitions = files
          .map(file => `declare module "${file}" {let _: string; export default _;}`)
          .join("\n");
        fs.writeFile(dest, definitions, err => {
          if(err) {
            reject(err);
          } else {
            resolve();
          }
        })
      }
    })
  );