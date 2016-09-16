"use strict";

const fs = require("fs");
const _ = require("lodash");

const sass = require("node-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("postcss");
const styleLint = require("stylelint");

const utils = require("../dev/utils");

const lintingConfiguration = JSON.parse(fs.readFileSync(".stylelintrc", "utf8"));

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
// We want to keep track of all linting errors, but don't want to lint all files on each change.
// Because of this we simply store all errors in this object.
const lintingErrors = {};

const preprocess = file =>
  new Promise((resolve, reject) =>
    sass.render(_.assign({file: file}, SASS_OPTIONS), (error, result) => {
      if (error) {
        error.message = `${error.line}:${error.column} ${error.message}`;
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

exports.compile = (entry, output, opts) =>
  preprocess(entry)
    .then(postprocess({
      minify: opts.minify,
      output
    }))
    .then(writeStyles(output));

exports.lint = files =>
  Promise
    .all(files.map(file => utils.readFile(file).then(content => ({file, content}))))
    .then(fileObjs =>
      Promise.all(fileObjs.map(fileObj =>
        styleLint.lint({
          codeFilename: fileObj.file,
          code: fileObj.content,
          config: lintingConfiguration
        }).then(result => {
          if (result.errored) {
            lintingErrors[fileObj.file] = result;
          } else {
            delete lintingErrors[fileObj.file];
          }
        })))
        .then(() => {
          if (Object.keys(lintingErrors).length > 0) {
            const err = new Error("There are linting errors in the project");
            err.code = "ELINT";
            err.count = 0;
            err.output = _.map(lintingErrors, (result, file) => {
              const res = result.results[0];
              err.count += res.warnings.length;
              return res.warnings.map(warn => `${file}[${warn.line}, ${warn.column}]: ${warn.text}`).join("\n");
            }).join("\n");
            //err.count = _.values(lintingErrors).reduce((count, result) => result.failureCount + count, 0);
            throw err;
          }
        }));
