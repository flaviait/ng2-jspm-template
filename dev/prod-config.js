"use strict";

const _           = require("lodash");
const {writeFile} = require("./utils");
const path        = require("path");

exports.generateProductionConfig = () => {

  let browserConfig = {};

  function removeNonBundleEntries() {
    browserConfig = _.pick(browserConfig, ["bundles"]);
  }

  function isLazyModuleRoute(routeName) {
    const parts = routeName.split("/");
    return !!_.find(parts, (part) => _.startsWith(part, "+"));
  }

  function pickAndTransformDistBundleEntries() {
    browserConfig.bundles = _.transform(browserConfig.bundles, (result, files, bundleName) => {
      // If the target bundle references a dist target AND at least a part of its content is marked as "lazy".
      if (_.startsWith(bundleName, "dist") && !!_.find(files, isLazyModuleRoute)) {
        const targetKey   = bundleName.replace(/^dist\//, "");
        result[targetKey] = files;
      }
    }, {});
  }

  global.SystemJS = {
    config: function (conf) {
      browserConfig = conf;
    }
  };

  require("../jspm.browser");
  // Transform config.
  removeNonBundleEntries();
  pickAndTransformDistBundleEntries();
  // Write target config.
  const data = `SystemJS.config(
  ${JSON.stringify(browserConfig)}
  );`;

  return writeFile(path.resolve(__dirname, "..", "jspm.prod.js"), data, {encoding: "utf8"})
};
