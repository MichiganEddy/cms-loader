const gulp = require('gulp');
const gutil = require('gulp-util');
const yargs = require('yargs');
const spawn = require('child_process').spawn;
const alias = yargs.alias;
const argv = yargs.argv;
const logoutSys = require('./gulp_connection.js').logoutSys;
