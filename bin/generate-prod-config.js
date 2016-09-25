const _    = require("lodash"),
      fs   = require("fs"),
      path = require("path");

var browserConfig = {};

function removeNonBundleEntries() {
  browserConfig = _.pick(browserConfig, ["bundles"]);
}

function isLazyModuleRoute(routeName) {
  var parts = routeName.split("/");
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
const fd   = fs.openSync(path.resolve(__dirname, "..", "jspm.prod.js"), "w");
const data = `SystemJS.config(
  ${JSON.stringify(browserConfig)}
  );`;

fs.writeFileSync(fd, data, {encoding: "utf8"});
fs.closeSync(fd);