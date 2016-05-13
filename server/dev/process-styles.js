var sass = require("node-sass");
var autoprefixer = require("autoprefixer");
var postcss = require("postcss");

module.exports = entry => new Promise((resolve, reject) =>
  sass.render({
    sourceMapEmbed: true,
    sourceMapContents: true,
    file: entry
  }, (error, result) => {
    if (error) {
      console.error(`${error.line}:${error.column} ${error.message}`);
      reject(error);
    } else {
      postcss([autoprefixer({browsers: ["last 2 versions"]})])
        .process(result.css)
        .then(
          result => resolve(result.css),
          reject
        );
    }
  })
);