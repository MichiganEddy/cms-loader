'use strict';
let loopback = require('loopback');
module.exports = function(app){
  app.use(loopback.token({
    model: app.models.SystemAccessToken
  }));
};
