module.exports = () => {
  var livereload = require("livereload");
  var chokidar = require("chokidar");
  var server = livereload.createServer({
    port: require("../config.json").port.livereload
  });
  chokidar
    .watch("src/main.scss")
    .on("change", file => server.refresh("main.css"));
  chokidar
    .watch("src/dev/index.dev.html")
    .on("change", file => server.refresh(file));
  return server;
};