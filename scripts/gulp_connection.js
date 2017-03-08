const gulp = require('gulp');
const http = require('http');
const net = require('net');
const fs = require('fs');
const qs = require('querystring');


gulp.tasc('loginSys', function(){



    function getQuery(codeDate){
      return( qs.stringify({
          'compilation_level': 'ADVANCED_OPTIMIZATIONS',
          'output_format': 'json',
          'output_info': 'compiled_code',
          'warning_level': 'QUIET',
          'js_code' : opts
        }));
      }


      path: '/api/systemAdmins/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': size
      }}}
    let q = getQuery({"username":"CS","password":"password"});
    let size = Buffer.byteLength(q);


  function getOpts(size) {
    return { port: 5858,
    host: '192.168.1.118',
    method: 'POST',

    let size = Buffer.byteLength(getOpts(123));
}

    http.
});
