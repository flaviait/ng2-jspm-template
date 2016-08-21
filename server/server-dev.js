var express = require("express");
var path = require("path");
var config = require("./config.json");

var app = express();

require("./../dev/hmr");
require("./../dev/livereload");

app.get("/ports", (req, res) => res.send(require("./config.json").port));

app.use(require("./proxy"));
app.use(express.static("."));
app.use(express.static(".tmp"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("src/index.dev.html")));

app.listen(config.port.dev, () => console.log(`Listening on http://localhost:${config.port.dev}...`));