var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('test', function () {
  gulp.src('./index-spec.js')
    .pipe(webpackStream({ output: { filename: 'spec.js' } }))
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless());
});
