'use strict';

module.exports = function(app) {
  let Role = app.models.Role;

  Role.registerResolver('systemAdmin', function(role, context, cb){
    // Object.keys(context).forEach(function(key){console.log(`Key ${key} = ${context[key]}`);});
    console.log(`Access Token: ${context.accessToken}`);
    let userId = context.accessToken.userId || null;
    if(!userId){
      return process.nextTick(() => cb(null, false));
    }
    app.models.SystemAdmin.findById(userId, function(err, usr){
      if(err) return cb(null, false);
      cb(null, true);
    });
  });
};
