module.exports = config =>
  config.set({
    basePath: "",
    frameworks: ["jspm", "jasmine"],
    files: [".tmp/test-bundle.js", "jspm_packages/system-polyfills.js"],
    jspm: {
      config: "jspm.config.js",
      browser: "jspm.test.js",
      loadFiles: [
        "src/test-setup.ts",
        "src/**/*.spec.ts"
      ]
    },
    preprocessors: {
      ".tmp/test-bundle.js": ["sourcemap"]
    },
    reporters: ["mocha", "junit"],
    junitReporter: {
      outputDir: "test-results"
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["PhantomJS"],
    singleRun: true
  });