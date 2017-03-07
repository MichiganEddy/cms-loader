'use strict';

module.exports = function(app){
  let sysAdmin = app.models.sysAdmin;
  let siteAdmin = app.models.siteAdmin;

  app.get('admin/login', function(req, res){
    res.sendFile('../client/views/login.html');
  });

  app.get('sys/login', function(req, res){
    res.sendFile('../client/views/login.html');
  });

  app.post('admin/login', 'user', function(req, res){
    siteAdmin.login({
      username: req.body.username,
      password: req.body.password
    }, function(err, token){
      if(err) {
        res.render('response', {
          title: 'Login failed',
          content: err,
          redirectTo: '/login',
          linkText: 'Retry Login'
        });
        return;
      }
      res.render('admin/:user.username', {
        userName: token.user.username,
        firstName: token.user.firstName,
        lastName: token.user.lastName,
        email: token.user.email,
        accessToken: token.id
      });
    });
  });

};
