"use strict";

const {generateProductionConfig} = require("../dev/prod-config");

generateProductionConfig()
  .then(() => process.exit(0));