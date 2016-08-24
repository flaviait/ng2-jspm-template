module.exports = config =>
  config.set({
    basePath: "",
    frameworks: ["jspm", "jasmine"],
    files: [".tmp/dev-bundle.js", "jspm_packages/system-polyfills.js"],
    jspm: {
      config: "jspm.config.js",
      browser: "jspm.test.js",
      loadFiles: [
        "src/test-setup.ts",
        {pattern: "src/**/*.spec.ts", watched: false, served: false}
      ]
    },
    preprocessors: {
      ".tmp/dev-bundle.js": ["sourcemap"]
    },
    reporters: ["mocha"],
    mochaReporter: {
      output: 'minimal'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  });