"use strict";

const _ = require("lodash");

// We want to keep track of all linting errors, but don't want to lint all files on each change.
// Because of this we simply store all errors in this object.
const lintingErrors = {};

exports.lint = (files) => {
  const Linter = require("tslint");
  const utils = require("./utils");
  const configuration = require("../tslint.json");
  const lintOptions = {configuration, formatter: "verbose"};

  return Promise
    .all(files.map(file => utils.readFile(file).then(content => ({file, content}))))
    .then(fileObjs =>
      new Promise((resolve, reject) => {
        for (let fileObj of fileObjs) {
          const lintingResult = new Linter(fileObj.file, fileObj.content, lintOptions).lint();
          if(lintingResult.failureCount > 0) {
            lintingErrors[fileObj.file] = lintingResult;
          } else {
            delete lintingErrors[fileObj.file];
          }
        }
        if (Object.keys(lintingErrors).length > 0) {
          const err = new Error("There are linting errors in the project");
          err.code = "ELINT";
          err.output = _.values(lintingErrors).map(result => {
            return result.failures.map((failure) => {
              const pos = failure.startPosition.lineAndCharacter
              return `${failure.fileName}[${pos.line + 1}, ${pos.character}]: ${failure.failure} (${failure.ruleName})`
            }).join("\n");
          }).join("\n");
          err.count = _.values(lintingErrors).reduce((count, result) => result.failureCount + count, 0);
          reject(err);
        } else {
          resolve();
        }
      }));
};