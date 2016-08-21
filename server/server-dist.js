"use strict";

const express = require("express");
const path = require("path");
const config = require("./config.json");

const app = express();

app.use(require("./proxy"));
app.use(express.static("./dist"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("dist/index.html")));

app.listen(config.port.dist, () => console.log(`Listening on http://localhost:${config.port.dist}...`));