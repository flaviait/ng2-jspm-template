var router = require("express").Router();
var httpProxy = require('http-proxy');

module.exports = router;

var proxy = httpProxy.createProxyServer();

// Enter your proxy rules here.