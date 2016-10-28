# ng2-jspm-template

[![Build Status](https://travis-ci.org/flaviait/ng2-jspm-template.svg?branch=master)](https://travis-ci.org/flaviait/ng2-jspm-template)

This project provides a template for an [angular 2](https://angular.io/) project setup with [JSPM](http://jspm.io/).
You can copy or use it as an inspiration for your own projects.

## Setup

Clone this repo

    git clone https://github.com/flaviait/ng2-jspm-template.git

You need to install a node.js version >= 6.9, since this project uses ES2015 language features, and we only support node versions from the most recent LTS upwards.
Things might work from 4.x upwards, but we do not provide any official support for this.

For users of [nvm](https://github.com/creationix/nvm), we're providing a `.nvmrc` file, so that you only need to execute:
```
nvm install
nvm use
```
We strongly recommend to use nvm (or any other node version manager of your choice).

At the moment of writing this, [WEB-18904](https://youtrack.jetbrains.com/issue/WEB-18904)
for the JetBrains IDE has not yet been implemented. If you use it, please vote for it :)

Because of this we have our jspm dependencies duplicated in the npm configuration (this
should not be too much overhead, since npm caches the deps).

## Project structure

All the source files are placed inside the `src` directory.
There are three important entry points:

* `src/styles/main.scss` contains the global styles. This is the place to put css frameworks and global font settings for example.
* `src/main.ts` is the entry point for the application in production mode.
* `src/main.dev.ts` is the entry point for development mode.

## Development

To install the development dependencies, simply run

    npm run dev-install

To start the dev server, run

    npm start

### Say goodbye to page reloads!

The development mode of this template is optimized to support frontend
developers with a fast workflow.

It makes use of the following technologies:

* The [JSPM development bundling](http://jspm.io/0.17-beta-guide/development-bundling.html) watches the bundled source files
and incrementally rebundles the application on change. This speeds up the page load, since the client does not have to trigger
a bunch of HTTP requests during dependency resolution and transpilation.
* The [hot-module-reloading](http://jspm.io/0.17-beta-guide/hot-reloading.html) watches the source files for changes
and reloads only the modules affected by a change. This is much faster than reloading the whole page.
With `@ngrx/store` the global application state is kept across module reloads.
* A [livereload](http://livereload.com/) server is watching the `src/main.scss` file and triggers a reload of the corresponding css.

## Distribution

To install only the production dependencies, run

    npm i --production

To create a distribution build (should be run on the ci system), run

    npm run dist

To launch a dist server which provides the processed files, run

    npm run dist-start

To create a build and then launch the server, simply run

    npm run dist-server