const gulp = require('gulp');
const needle = require('needle');
const gutil = require('gulp-util');

let id;

const loginSys = gulp.task('loginSys', function(){
  //eslint-disable-next-line
  gutil.log("Logging in default system administrator.");
  login();

});

const logoutSys = gulp.task('logoutSys', function(){
  //eslint-disable-next-line
  gutil.log("Logging out the system administrator.");
  logout();

});


let login = function(){
  //eslint-disable-next-line
  needle.post('192.168.1.118:5858/systemAdmins/login', {"username":"CS", "password":"password"}, function(err, res, body){
    if(err) {
      console.error(`Error logging into SystemAdmins. Details:\n${err}`);
      return null;
    }
    if(res.statusCode == 200)
    {
      console.log('Login Successful. Got response code 200');
      console.log(`Session Access Token set to: ${body.id}`);
      id = body.id;
    }
  });
};


//eslint-disable-next-line
let logout = function(){
  needle.post(`192.168.1.118:5858/systemAdmins/logout?access_token=${id}&access_token=${id}`, function(err, res, body){
    if(err) {
      console.log(`Error logging out of SystemAdmins. Details:\n${err}`);
    }
  });
};


module.exports = function(){
  return( {
    'id': id,
    'loginSys': loginSys,
    'logoutSys': logoutSys
  });
};
