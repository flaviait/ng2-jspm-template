require("livereload")
  .createServer({
    port: require("../config.json").port.livereload
  })
  .watch([".tmp/main.css", "src/dev/index.dev.html"]);