"use strict";

const express = require("express");
const path = require("path");
const logger = require("log4js").getLogger("server");

const config = require("./config.json");

const app = express();

app.use(require("./proxy"));
app.use(express.static("./dist"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("dist/index.html")));

app.listen(config.port.dist, () => logger.info(`Listening on http://localhost:${config.port.dist} ...`));