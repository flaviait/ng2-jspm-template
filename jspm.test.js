SystemJS.config({
  baseURL: "/",
  typescriptOptions: {
    // TODO: Enable as soon as https://github.com/frankwallis/plugin-typescript/issues/102 is resolved.
    // typeCheck: "strict"
  },
  packages: {
    "/base/src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  paths: {
    "github:*": "base/jspm_packages/github/*",
    "npm:*": "base/jspm_packages/npm/*",
    "src/*": "base/src/*",
    "tsconfig.json": "base/tsconfig.json"
  }
});