"use strict";

module.exports = require("chokidar-socket-emitter")({
  port: require("../server/config.json").port.hmr,
  path: "src",
  chokidar: {
    ignored: /___jb.*$/ // IntelliJ Idea creates and removes a temporary file on each save
  }
});