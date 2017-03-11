const gulp = require('gulp');
const needle = require('needle');
const gutil = require('gulp-util');
const jsonfile = require('jsonfile');
const yargs = require('yargs');
const argv = yargs.argv;

yargs.alias('resource', 'res');

let file = argv.file? argv.file : './tmp/localVars.json';
let id = argv.access? argv.access : null;
let jsonObj = argv.json? argv.json : null;
let resource = argv.resource? argv.resource : '/websites';




const loginSys = gulp.task('loginSys', function(){
  //eslint-disable-next-line
  gutil.log("Logging in default system administrator.");
  login();

});

const logoutSys = gulp.task('logoutSys', function(){
  //eslint-disable-next-line
  gutil.log("Logging out the system administrator.");
  let accessT = getId();
  gutil.log(`Debug Reference:\nfile: ${file}, id: ${accessT} `);
  logout(accessT);
});

const getRes = gulp.task('getRes', function(){
  getResource(resource);
});


function getResource(resourceName){
  let aId = getId();
  printSep();
  if(aId == null){//eslint-disable-next-line
    console.error("Not Logged In.");
    printSep();
    return;
  }
  let resourcePath = `192.168.1.118:5858${resourceName}?access_token=${aId}`;
  needle.get(resourcePath, function(err, res, body){
    if(err) return console.error(`Error getting resource: ${resourceName}. \nDetails: ${err}`);
    //eslint-disable-next-line
    console.log("Request Details:\n" + `\tCODE: ${res.statusCode}\n\tMESSAGE:${res.statusMessage}\n`);
    for (let k in body){
      console.log(`${k} --> ${body[k]}`);
    }
    printSep();
  });
}



function printSep(){
  let s = sep();
  let i = 3;
  while(i--);
  {
    console.log(s);
  }
}

function sep(){
  let i = 20,
      s='';
  while(i--){
    s+='_';
  }
  return s;};

function setId(aId){  //eslint-disable-next-line
  jsonfile.writeFile(file, {"id": aId}, function(err){
    if(err) console.error(err);
    console.log(`Wrote token: ${aId} to ${file}`);
  });
}

function getId(){
  //file = './tmp/localVars.json';
  let jsonObj = jsonfile.readFileSync(file);
  let aId = jsonObj.id;
  return aId;
}



function login(){
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
      let aId = body.id;
      setId(aId);
    }
  });
}


//eslint-disable-next-line
function logout(aId){
  needle.post(`192.168.1.118:5858/systemAdmins/logout?access_token=${aId}`, `access_token=${aId}`, function(err, res, body){
    if(err) {
      console.log(`Error logging out of SystemAdmins. Details:\n${err}`);
    }
  });

  setId(null);
}


module.exports = function(){
  return( {
    'loginSys': loginSys,
    'logoutSys': logoutSys,
    'setId': setId,
    'getId': getId,
    'getRes': getRes
  });
};
