'use strict';

const async = require('async');
const ctMap = new WeakMap();
module.exports = function(app){
  ctMap['app'] = app;
  ctMap['this'] = this;
  ctMap['mysqlD'] = app.dataSources.mysqlD;
  async.parallel({
    systemAdmin: async.apply(createSysAdmin),
    siteAdmin: async.apply(createSiteAdmin),
    lbModels: async.apply(createLoopbackBuiltInModels)
  },
    function(err, results){
      if(err) throw err;
      ctMap['sysAdmin'] = results.systemAdmin[0];
      ctMap['siteAdmin'] = results.siteAdmin[0];
      console.log(`Returned from async calls createSysAdmin and createSiteAdmin. \nSystem Admin {ID: ${ctMap['sysAdmin'].id} UID: ${ctMap['sysAdmin'].username}},\nSiteAdmin {ID: ${ctMap['siteAdmin'].id} UID: ${ctMap['siteAdmin'].username}}`);
      createWebsite(function(err) {
        if(err) return console.error(err);
        console.log('> models created successfully');
      });
    });



  function createSysAdmin(cb) {
    ctMap['mysqlD'].automigrate('systemAdmin', function(err) {
      if(err){
        console.log('Error automigrating systemAdmin.');
        return cb(err, null);
      }else {
        console.log('Automigration for SysAdmin successful');
        app.models.systemAdmin.create([{
          firstName: 'chris',
          lastName: 'carlson',
          username: 'CS',
          email: 'chris@cta.cloud',
          password: 'password',
          created: Date.now()
        }], cb);
      }
    });
  }

  function createSiteAdmin(cb) {
    ctMap['mysqlD'].automigrate('siteAdmin', function(err){
      if(err){
        return cb(err, null);
      }else{
        console.log('Automigration for SiteAdmin successful');
        let siteAdmin = ctMap['app'].models.siteAdmin;
        siteAdmin.create([{
          firstName: 'adam',
          lastName: 'slate',
          email: 'testing@test.com',
          username: 'ASL',
          password: 'password',
          created: Date.now()
        }], cb);
      }
    });
  }

  function createWebsite(cb) {
    ctMap['mysqlD'].automigrate('website', function(err){
      if(err) return cb(err);
      console.log('Automigration for website successful');
      let website = ctMap['app'].models.website;
      website.create([{
        siteName: 'Slate Law',
        siteURL: 'https://slate.law',
        admin_id: 1,
        systemAdmin_id: 1
      }], function(err, site){
        if(err) return cb(err);
        ctMap['site'] = site[0];
        console.log(`Successfully created website: ${site[0].siteName} for ${site[0].siteURL}.`);
        createWebPage(cb);
      });
    });
  }

  function createWebPage(cb) {
    ctMap['mysqlD'].automigrate('webPage', function(err){
      if(err) return cb(err);
      console.log('Automigration for webPage successful.');
      let webPage = ctMap['app'].models.webPage;
      webPage.create([{
        pageName: 'definitions',
        pageURL: 'https://slate.law/definnitions',
        website_id: 1,
        systemAdmin_id: 1

      }], function(err, page){
        if(err) return cb(err);
        console.log(`Success Creating Webpage: ${page[0].pageName}, at ${page[0].pageURL}.`);
        ctMap['page'] = page[0];
        createEditableField(cb);
      });
    });
  }

  function createEditableField(cb) {
    ctMap['mysqlD'].automigrate('editableField', function(err){
      if(err) return cb(err);
      console.log('Automigration for Editable Field successful.');
      let editable = ctMap['app'].models.editableField;
      editable.create([{
        name: 'termDefinition',
        mediaType: 'text',
        localURL: 'definitions',
        textContents: 'some text',
        webPage_id: 1,
        systemAdmin_id: 1
      },
      {
        name: 'defintionGroup',
        mediaType: 'heading',
        localURL: 'definitions',
        textContents: 'Related Defs',
        webPage_id: 1,
        systemAdmin_id: 1
      }], cb);
    });
  }

  function createLoopbackBuiltInModels(cb){
    let lbtables = ['User', 'SystemAccessToken', 'ACL', 'RoleMapping', 'Role'];
    ctMap['mysqlD'].automigrate(lbtables, function(err, tables){
      if(err) return cb(err, null);
      console.log('Automigrate successful for loopback built in  models.');
      return cb(null, tables);
    });
  }

  // function findCB(err, result){
  //   console.log(`Find Callback handling err: ${err}, result: ${Object.prototype.values(result)}`);
  //   return(err, result);
  // }
  //
  // function createCB(err, result, cb){
  //   if(err) return cb(err, null);
  //   console.log('CreateCB. Results:\n');
  //   for (let k in result){
  //     console.log(k, result[k]);
  //   }
  //   return cb(null, result);
  // }
};
