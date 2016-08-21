var sass = require("node-sass");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var postcss = require("postcss");
var program = require("commander");
var fs = require("fs");
var _ = require("lodash");

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

program
  .usage('[options] <entry> <output>')
  .option("-m, --minify", "Minify the styles")
  .parse(process.argv);

program.entry = program.args[0];
program.output = program.args[1];

var preprocess = file => new Promise((resolve, reject) =>
  sass.render(_.assign({file: file}, SASS_OPTIONS), (error, result) => {
    if (error) {
      console.error(`${error.line}:${error.column} ${error.message}`);
      reject(error);
    } else {
      resolve(result);
    }
  })
);

var postprocess = input => new Promise((resolve, reject) => {
  var processors = [autoprefixer(AUTOPREFIXER_OPTIONS)];
  if (program.minify) {
    processors.push(cssnano(CSSNANO_OPTIONS));
  }
  postcss(processors)
    .process(input.css, {map: {inline: false}, to: program.output})
    .then(
      result => resolve(result),
      reject
    );
});

var writeFile = (target, content) =>
  new Promise((resolve, reject) =>
    fs.writeFile(target, content, err =>
      err ? reject(err) : resolve()));

var writeStyles = result =>
  Promise.all([
    writeFile(program.output, result.css),
    writeFile(`${program.output}.map`, result.map)
  ]);

var processStyles = () => preprocess(program.entry)
  .then(postprocess)
  .then(writeStyles);

processStyles()
  .catch(err => {
    console.error("Error processing styles:", err);
    process.exit(1);
  });