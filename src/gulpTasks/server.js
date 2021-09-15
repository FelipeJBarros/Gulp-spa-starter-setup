const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function server() {
  return gulp
    .src("build")
    .pipe(webserver({ port: 8080, open: true, livereload: true }));
}

function watchFiles(cb) {
  gulp.watch("src/**/*.html", () => gulp.series("appHTML")());
  gulp.watch("src/**/*.scss", () => gulp.series("appCSS")());
  gulp.watch("src/**/*.js", () => gulp.series("appJS")());
  gulp.watch("src/assets/img/**/*.*", () => gulp.series("appIMG")());

  return cb();
}

module.exports = {
  server,
  watchFiles,
};
