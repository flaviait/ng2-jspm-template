"use strict";

const router = require("express").Router();
const httpProxy = require('http-proxy');

module.exports = router;

const proxy = httpProxy.createProxyServer();

// Enter your proxy rules here.