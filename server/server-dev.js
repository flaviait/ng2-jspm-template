var express = require("express");
var path = require("path");
var processStyles = require("./dev/process-styles");
var generateTypings = require("./dev/generate-typings");
var config = require("./config.json");

var app = express();

require("./dev/hmr")();
require("./dev/livereload")();

config.appRoutes.forEach(route =>
  app.get(route, (req, res) =>
    res.sendFile(path.resolve("src/dev/index.dev.html"))));
app.get("/ports", (req, res) => res.send(require("./config.json").port));
app.get("/main.css", (req, res) =>
  processStyles(path.resolve("src/main.scss")).then(
    css => res.set("Content-Type", "text/css").end(css),
    err => res.status(500).send(err)
  ));
app.get("/.tmp/generated-typings.d.ts", (req, res) => generateTypings().then(
  typings => res.end(typings),
  err => res.status(500).send(err)
));

app.use(express.static("."));
app.use(require("./proxy"));

app.listen(config.port.dev, () => console.log(`Listening on http://localhost:${config.port.dev}...`));