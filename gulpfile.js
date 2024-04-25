const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
   return gulp
      .src("src/styles/scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("src/styles/css"));
}

function watchSass() {
   gulp.watch("src/styles/**/*.scss", compileSass);
}

exports.default = gulp.parallel(compileSass, watchSass);
