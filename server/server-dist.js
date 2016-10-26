"use strict";

const express = require("express");
const path = require("path");

const port = process.env.SERVER_PORT || 9988;

const app = express();

app.use(require("./proxy"));
app.use(express.static("./dist"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve("dist/index.html")));

app.listen(port, () => console.log(`Listening on http://localhost:${port} ...`));