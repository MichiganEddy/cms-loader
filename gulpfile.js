

const gulp = require('gulp');
const gutil = require('gulp-util');
const conn = require('./scripts/gulp_connection.js');
const utils = require('./scripts/gulp_utils.js');

gulp.task('default', function(){
  return gutil.log('Gulp is running');
});
