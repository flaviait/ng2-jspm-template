"use strict";

require("livereload")
  .createServer({
    port: require("../server/config.json").port.livereload
  })
  .watch([".tmp/main.css", "src/dev/index.dev.html"]);