"use strict";

const fs = require("fs");
const _ = require("lodash");
const mkdirp = require("mkdirp");
const glob = require("glob");
const path = require("path");

module.exports = {
  getFiles (src, options) {
    return new Promise((resolve, reject) =>
      glob(src, options || {}, (e, files) =>
        e ? reject(e) : resolve(files)))
      .then(files => _.reject(files, f => _.includes(f, "*")));
  },
  readFile (src) {
    return new Promise((resolve, reject) =>
      fs.readFile(src, "utf-8", (e, content) =>
        e ? reject(e) : resolve(content)));
  },
  writeFile (dest, content, options) {
    return new Promise((resolve, reject) =>
      mkdirp(path.dirname(dest), e =>
        e ? reject(e) : fs.writeFile(dest, content, options || {}, e =>
          e ? reject(e) : resolve())));
  }
};