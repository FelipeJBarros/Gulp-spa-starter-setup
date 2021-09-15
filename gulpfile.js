const gulp = require("gulp");
const { series, parallel } = require("gulp");

const { appHTML, appCSS, appJS, appIMG } = require("./src/gulpTasks/app");
const { server, watchFiles } = require("./src/gulpTasks/server");

module.exports.default = series(
  series(appHTML, appCSS, appJS, appIMG),
  server,
  watchFiles
);
