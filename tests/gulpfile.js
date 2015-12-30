var gulp = require('gulp');
var webserver = require('gulp-webserver');
var casperJs = require('gulp-casperjs');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port: 5000,
      open: false
    }));
});

gulp.task('test', ['webserver'], function () {
  gulp.src('test.js')
    .pipe(casperJs()); //run casperjs test
});

gulp.task('default', ['test']);
