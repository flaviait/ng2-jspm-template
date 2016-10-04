"use strict";

const express = require("express");
const path = require("path");
const logger = require("log4js").getLogger("server-dev");

const config = require("./config.json");

const app = express();

require("./../dev/hmr");
require("./../dev/livereload");

app.get("/ports", (req, res) => res.send(require("./config.json").port));

app.use(require("./proxy"));
app.use(express.static("."));
app.use(express.static(".tmp"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("src/index.dev.html")));

app.listen(config.port.dev, () => logger.info(`Listening on http://localhost:${config.port.dev} ...`));