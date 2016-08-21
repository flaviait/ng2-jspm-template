"use strict";

const sass = require("node-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("postcss");
const _ = require("lodash");
const utils = require("../dev/utils");

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

const preprocess = file =>
  new Promise((resolve, reject) =>
    sass.render(_.assign({file: file}, SASS_OPTIONS), (error, result) => {
      if (error) {
        console.error(`${error.line}:${error.column} ${error.message}`);
        reject(error);
      } else {
        resolve(result);
      }
    }));

const postprocess = opts =>
  input =>
    new Promise((resolve, reject) => {
      const processors = [autoprefixer(AUTOPREFIXER_OPTIONS)];
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

const writeStyles = output =>
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