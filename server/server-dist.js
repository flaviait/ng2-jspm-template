var express = require("express");
var path = require("path");
var config = require("./config.json");

var app = express();

config.appRoutes.forEach(route =>
  app.get(route, (req, res) =>
    res.sendFile(path.resolve("dist/index.html"))));

app.use(express.static("./dist"));
app.use(require("./proxy"));

app.listen(config.port.dist, () => console.log(`Listening on http://localhost:${config.port.dist}...`));