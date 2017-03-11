'use strict';
const path = require('path');

module.exports = function(app){
  const sysAdmin = app.models.sysAdmin;
  const siteAdmin = app.models.siteAdmin;
  const router = app.loopback.Router();
  const loopback = app.loopback;
  router.get('/', function(req, res){
    res.sendFile('../client/views/home.html', { root: __dirname });
  });

  router.get('/siteAdmins/login', function(req, res){
    res.sendFile('../client/views/login.html', { root: __dirname });
  });

  router.get('/systemAdmins/login', function(req, res){
    res.sendFile('../client/views/login.html', { root: __dirname });
  });

  router.post('/siteAdmins/login', function(req, res){
    siteAdmin.login({
      username: req.body.username,
      password: req.body.password
    }, 'user', function(err, token){
      if(err) {
        res.render('response', {
          title: 'Login failed',
          content: err,
          redirectTo: '/login',
          linkText: 'Retry Login'
        });
        return;
      }
      res.render('', {
        userName: token.user.username,
        firstName: token.user.firstName,
        lastName: token.user.lastName,
        email: token.user.email,
        accessToken: token.id
      });
    });
  });

  router.post('/systemAdmins/login', function(req, res){
    sysAdmin.login({
      username: req.body.username,
      password: req.body.password
    }, 'user', function(err, token){
      if(err) {
        res.render('response', {
          title: 'Login failed',
          content: err,
          redirectTo: '/login',
          linkText: 'Retry Login'
        });
        return;
      }
      res.render('sys', {
        userName: token.user.username,
        firstName: token.user.firstName,
        lastName: token.user.lastName,
        email: token.user.email,
        accessToken: token.id,
        redirectTo: `/systemAdmins/${token.user.id}`
      });
    });
  });

  // router.get('*', function (req, res){
  //   res.render('home', {
  //     userName: 'No User Retrieved',
  //     firstName: 'App Uninitialized.',
  //     lastName: 'Error State..',
  //     email: 'it always takes longer than expected.',
  //     accessToken: ''
  //   });
  // });

  app.use(loopback.static(path.resolve(__dirname, '../client')));
  app.use(loopback.static(path.resolve(__dirname, '../client/views')));
  app.use(loopback.static(path.resolve(__dirname, '../client/css')));
  app.use(loopback.static(path.resolve(__dirname, '../client/js')));
  app.use(loopback.static(path.resolve(__dirname, '../client/fonts')));
  // start the server if `$ node server.js`



  app.use(router);
};
