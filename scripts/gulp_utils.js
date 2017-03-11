const gulp = require('gulp');
const gutil = require('gulp-util');
const yargs = require('yargs');
const spawn = require('child_process').spawn;
const alias = yargs.alias;
const argv = yargs.argv;
const logoutSys = require('./gulp_connection.js').logoutSys;


let milis = argv.milis? argv.milis : 1000;
let func = argv.func? argv.func : 'logoutSys';
alias('milis', 'm');
alias('func', 'f');

// if(typeof(func) !== 'function'){
//   let newFunc = function(){
//     return func;
//   };
//   newFunc.name = func.name;
//   func = newFunc;
// }

const andCall = gulp.task('andCall', ['delay'], function(){
  console.log(`Timer finished.`);
  let tasks = gulp.tasks;
  for (let task in tasks){
    console.log(task);
    if(task === 'logoutSys'){
      console.log("Found Logout Sys. Running.");
      gulp.start(task);
    }
  }
});

const delay = gulp.task('delay', function(){
  console.log(`Setting timeout for ${milis} ms, then calling gulp task ${func.name}`);
  setTimeout(function(){console.log("Delay Done.");gulp.start('andCall');}, milis);
});


const delayAndCall = gulp.task('delayAndCall', ['delay', 'andCall'], function(){
  console.log("In Delay And Call");
});
