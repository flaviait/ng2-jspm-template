generateTypings = require("./../server/dev/generate-typings");

generateTypings("src/app/**/*.scss", "src/generated-typings.d.ts").catch(error => {
  console.error(error.stack);
  process.exit(1);
});

