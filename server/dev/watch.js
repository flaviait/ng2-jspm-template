var generateTypings = require("./generate-typings");
var livereload = require("livereload");
var chokidar = require("chokidar");

module.exports = () => {
  var server = livereload.createServer({
    port: require("../config.json").port.livereload
  });
  server.watch([".tmp/main.css", "src/dev/index.dev.html"]);
  chokidar
    .watch("src/**/*.scss")
    .on("add", () =>
      generateTypings("src/app/**/*.scss", "src/generated-typings.d.ts")
        .catch(error => console.warn(error.stack)))
    .on("unlink", () =>
      generateTypings("src/app/**/*.scss", "src/generated-typings.d.ts")
        .catch(error => console.warn(error.stack)));
  return server;
};