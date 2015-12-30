var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cucumber = require('gulp-cucumber');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      port: 5000,
      open: false
    }));
});

gulp.task('test', ['webserver'], function () {
  return gulp.src('features/*').pipe(cucumber({
      'steps': '*features/steps/input.js',
      'support': '*features/support/*.js'
  }));
});

gulp.task('default', ['test']);
