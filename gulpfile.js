var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var jasmineBrowser = require('gulp-jasmine-browser');
var UglifyJsPlugin = webpackStream.webpack.optimize.UglifyJsPlugin;

gulp.task('test', function () {
  return gulp.src('./index-spec.js')
    .pipe(webpackStream({ output: { filename: 'spec.js' } }))
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless());
});

gulp.task('build', function () {
  return gulp.src('./index-template.js')
    .pipe(webpackStream({
      output: { filename: 'index-template.js' },
      plugins: [new UglifyJsPlugin({ minimize: true })]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['test', 'build']);
