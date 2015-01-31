var gulp = require('gulp');
var connect = require('gulp-connect');
var rimraf = require('gulp-rimraf');
var morgan = require('morgan');
var logger = morgan('dev');

gulp.task('app', function() {
  gulp.src('./app/**/*')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('bower', function() {
  gulp.src('./bower_components/**/*')
    .pipe(gulp.dest('./dist/bower_components'))
    .pipe(connect.reload());
});

gulp.task('connect', ['build'], function(done) {
  connect.server({
    root: 'dist',
    livereload: true,
    middleware: function () {
      return [logger];
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('app/**/*', ['build']);
});

gulp.task('clean', function() {
  return gulp.src('dist/*')
    .pipe(rimraf());
});

gulp.task('build', ['app', 'bower']);

gulp.task('default', ['build']);
gulp.task('serve', ['connect', 'watch']);
