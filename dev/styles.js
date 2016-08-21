var sass = require("node-sass");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var postcss = require("postcss");
var _ = require("lodash");
var utils = require("../dev/utils");

const SASS_OPTIONS = {
  sourceMapEmbed: true,
  sourceMapContents: true,
  includePaths: ["node_modules"]
};
const AUTOPREFIXER_OPTIONS = {
  browsers: ["last 2 versions"]
};
const CSSNANO_OPTIONS = {
  zindex: false
};

var preprocess = file =>
  new Promise((resolve, reject) =>
    sass.render(_.assign({file: file}, SASS_OPTIONS), (error, result) => {
      if (error) {
        console.error(`${error.line}:${error.column} ${error.message}`);
        reject(error);
      } else {
        resolve(result);
      }
    }));

var postprocess = opts =>
  input =>
    new Promise((resolve, reject) => {
      var processors = [autoprefixer(AUTOPREFIXER_OPTIONS)];
      if (opts.minify) {
        processors.push(cssnano(CSSNANO_OPTIONS));
      }
      postcss(processors)
        .process(input.css, {map: {inline: false}, to: opts.output})
        .then(
          result => resolve(result),
          reject
        );
    });

var writeStyles = output =>
  result =>
    Promise.all([
      utils.writeFile(output, result.css),
      utils.writeFile(`${output}.map`, result.map)
    ]);

module.exports = (entry, output, opts) =>
  preprocess(entry)
    .then(postprocess({
      minify: opts.minify,
      output
    }))
    .then(writeStyles(output));