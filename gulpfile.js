const gulp = require('gulp');
const run = require('gulp-run');
const execSync = require('child_process').execSync;
const replace = require('gulp-replace');
const inlinesource = require('gulp-inline-source');
const fs = require('fs-promise');
const del = require('del');
const Promise = require('bluebird');
const _ = require('lodash');

gulp.task('clean', function (cb) {
  return del([
    './build'
  ]);
});

gulp.task('build-compiler', async function () {
  await del('./src/antlrGenerated');
  execSync('java org.antlr.v4.Tool -Dlanguage=JavaScript -o ./src/antlrGenerated -visitor ./src/COOL.g4');
});

gulp.task('build-js', ['clean'], function () {
  return run('npm run build').exec();
});

gulp.task('inline', ['build-js'], function () {
  return gulp.src('./src/COOLRuner.html')
    // .pipe(replace('.js"></script>', '.js" inline></script>'))
    // .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(inlinesource())
    .pipe(gulp.dest('./build'));
});

gulp.task('inline-fast', [ 'clean' ], function () {
  return gulp.src('./src/COOLRuner.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['inline']);
