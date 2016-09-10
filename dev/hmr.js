"use strict";

const logger = require("log4js").getLogger("hmr");

const server = require("chokidar-socket-emitter")({
  port: require("../server/config.json").port.hmr,
  path: "src",
  quiet: true,
  chokidar: {
    ignored: /___jb.*$/ // IntelliJ Idea creates and removes a temporary file on each save
  }
});

module.exports = server.watcher.on("all", (event, file) => {
  logger.debug(`${file} (${event})`);
});