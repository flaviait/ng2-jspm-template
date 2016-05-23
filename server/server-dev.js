var express = require("express");
var path = require("path");
var processStyles = require("./dev/process-styles");
var config = require("./config.json");

var app = express();

require("./dev/hmr")();
require("./dev/watch")();

app.get("/ports", (req, res) => res.send(require("./config.json").port));
app.get("/main.css", (req, res) =>
  processStyles(path.resolve("src/main.scss")).then(
    css => res.set("Content-Type", "text/css").end(css),
    err => res.status(500).send(err)
  ));

app.use(require("./proxy"));
app.use(express.static("."));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("src/dev/index.dev.html")));

app.listen(config.port.dev, () => console.log(`Listening on http://localhost:${config.port.dev}...`));