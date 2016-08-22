"use strict";

const _ = require("lodash");
const chokidar = require("chokidar");

module.exports = (pattern, onChange, opts) => {
  opts = opts || {};
  const watcher = chokidar.watch(pattern);
  const files = [];
  const debouncedCallback = _.debounce(() => {
    onChange(files);
    files.length = 0;
  }, opts.debounce || 100);

  for (let event of opts.events || ["change"]) {
    watcher.on(event, file => {
      files.push(file);
      debouncedCallback();
    });
  }
};