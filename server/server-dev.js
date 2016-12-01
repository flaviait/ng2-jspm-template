"use strict";

const express = require("express");
const path = require("path");

const {config, getLogger} = require("ng2-template-libs");

const logger = getLogger("server-dev");

const app = express();

app.get("/ports", (req, res) => res.send(config.devPorts));

app.use(require("./proxy"));
app.use(express.static("."));
app.use(express.static(".tmp"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("src/index.dev.html")));

app.listen(config.server.dev.port, () => logger.info(`Listening on http://localhost:${config.server.dev.port} ...`));