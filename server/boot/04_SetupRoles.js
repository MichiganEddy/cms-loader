'use strict';

module.exports = function(app) {
  let Role = app.models.Role;

  Role.registerREsolver('systemAdmin', function(role, context, cb){
    let userId = context.systemAccessToken.userId;
    if(!userId){
      return process.nextTick(() => cb(null, false));
    }
    app.models.SystemAdmin.findById(userId, function(err, usr){
      if(err) return cb(null, false);
      cb(null, true);
    });
  });
};
