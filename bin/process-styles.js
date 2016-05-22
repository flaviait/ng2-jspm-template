var sass = require("node-sass");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var postcss = require("postcss");
var program = require("commander");
var fs = require("fs");
var _ = require("lodash");

var AUTOPREFIXER_OPTIONS = {
  browsers: ["last 2 versions"]
};
var CSSNANO_OPTIONS = {
  zindex: false
};

program
  .usage('[options] <entry> <output>')
  .option("-w, --watch <glob>", "Watch the styles")
  .option("-m, --minify", "Minify the styles")
  .parse(process.argv);

program.entry = program.args[0];
program.output = program.args[1];

var preprocess = file => new Promise((resolve, reject) =>
  sass.render({
    sourceMapEmbed: true,
    sourceMapContents: true,
    file: file
  }, (error, result) => {
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
    fs.writeFile(target, content, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  );

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

if (program.watch) {
  var chokidar = require("chokidar");
  console.log(`Watching for changes in ${program.watch}`);
  chokidar.watch(program.watch)
    .on("change", _.debounce(file => {
      console.log(`${file} changed. Reprocessing styles ...`);
      processStyles()
        .then(
          () => console.log(`Styles written to ${program.output}`),
          err => console.error("Error processing styles:", err)
        );
    }, 100));
}