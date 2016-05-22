var express = require("express");
var path = require("path");
var config = require("./config.json");

var app = express();

app.use(require("./proxy"));
app.use(express.static("./dist"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("dist/index.html")));

app.listen(config.port.dist, () => console.log(`Listening on http://localhost:${config.port.dist}...`));