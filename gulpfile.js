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
    './knowledge_modules/programming-languages-and-compilers/build',
    './build'
  ]);
});

gulp.task('build-klg', ['clean'], async function () {
  const basePath = './knowledge_modules/programming-languages-and-compilers';

  await fs.mkdir(`${basePath}/build`);
  const topics = await fs.readdir(`${basePath}/src`);

  const result = await Promise.reduce(topics, async (resultObject, currentDirName) => {
    const examplePath = `${basePath}/src/${currentDirName}/example.md`;
    const example = await fs.readFile(examplePath, 'utf8').catch(() => '');

    const principlePath = `${basePath}/src/${currentDirName}/principle.md`;
    const principle = await fs.readFile(principlePath, 'utf8').catch(() => '');

    const tagPath = `${basePath}/src/${currentDirName}/tags.csv`;
    const tags = await fs.readFile(tagPath, 'utf8').catch(() => '');

    resultObject[currentDirName] = {
      title: currentDirName,
      tags: _.uniq(tags.length > 0 ? tags.split(',') : []),
      example,
      principle
    };

    return resultObject;
  }, {});

  await fs.writeFile(`${basePath}/build/main.json`, JSON.stringify(result));
});

gulp.task('build-web', ['build-klg'], function () {
  return run('npm run build').exec();
});

gulp.task('build-compiler', async function () {
  await del('./src/antlrGenerated');
  execSync('java org.antlr.v4.Tool -Dlanguage=JavaScript -o ./src/antlrGenerated ./src/COOL.g4');
});

gulp.task('inline', ['build-web'], function () {
  return gulp.src('./build/index.html')
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(inlinesource())
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['inline']);
