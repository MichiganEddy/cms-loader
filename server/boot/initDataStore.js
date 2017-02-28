'use strict';

const async = require('async');

module.exports = function(app){
  const myslqD = app.dataSources.mysqlD;
  async.parallel({
    systemAdmin: async.apply(createSysAdmin),
    siteAdmin: async.apply(createSiteAdmin)
  },
    function(err, results){
      if(err) throw err;
      createWebsite(results.systemAdmin, results.siteAdmin, function(err) {
        if(err) return console.error(err);
        console.log('> models created successfully');
      });
    });



  function createSysAdmin(cb) {
    const mysqlD=app.dataSources.mysqlD;
    mysqlD.automigrate('systemAdmin', function(err) {
      if(err) return cb(err);
      let systemAdmin = app.models.systemAdmin;
      systemAdmin.create([{
        firstName: 'chris',
        lastName: 'carlson',
        userName: 'CS',
        email: 'chris@cta.cloud',
        password: 'password'
      }], cb);
    });
  }

  function createSiteAdmin(cb) {
    let mysqlD = app.dataSources.mysqlD;
    mysqlD.automigrate('siteAdmin', function(err){
      if(err) return cb(err);
      let siteAdmin = app.models.siteAdmin;
      siteAdmin.create([{
        firstName: 'adam',
        lastName: 'slate',
        email: 'testing@test.com',
        userName: 'ASL',
        password: 'password',
        date: Date.now()
      }], cb);
    });
  }

  function createWebPage(context, cb) {
    let mysqlD = app.dataSources.mysqlD;
    mysqlD.automigrate('webPage', function(err){
      if(err) return cb(err);
      let webPage = app.models.webPage;
      webPage.create([{
        pageName: 'definitions',
        pageUrl: 'https://slate.law/definnitions',
        website_id: this._site.id,
        systemAdmin_id: this._sa.id

      }], function(err, page){
        if(err) return cb(err);
        context._page = page;
        createEditableField(context, cb);
      });
    });
  }

  function createEditableField(context, cb) {
    let mysqlD = app.dataSources.mysqlD;
    mysqlD.automigrate('editableField', function(err){
      if(err) return cb(err);
      let editable = app.models.editableField;
      editable.create([{
        name: 'termDefinition',
        mediaType: 'text',
        localUrl: 'definitions',
        textContents: 'some text',
        webPage_id: context.page.id,
        systemAdmin_id: context.sa.id
      },
      {
        name: 'defintionGroup',
        mediaType: 'heading',
        localUrl: 'definitions',
        textContents: 'Related Defs',
        webPage_id: context.page.id,
        systeAdmin_id: context.sa.id
      }], cb);
    });
  }

  function createWebsite(sysAdmin, siteAdmin, cb) {
    let mysqlD = app.dataSources.mysqlD;
    mysqlD.automigrate('website', function(err){
      if(err) return cb(err);
      let website = app.models.website;
      let sysAdmin = app.models.systemAdmin;
      let siteAdmin = app.models.siteAdmin;

      async.parallel({
        sysAd: async.apply(sysAdmin.findOne(findCB)),
        siteAd: async.apply(siteAdmin.findOne(findCB))
      }, function(err, results){
        if(err) return cb(err);
        this._sa = results.sysAd;
        this._siteA = results.siteAd;
        website.create([{
          siteName: 'Slate Law',
          siteURL: 'https://slate.law',
          admin_id: this._siteA.id,
          systemAdmin_id: this._sa.id
        }], function(err, site){
          if(err) return cb(err);
          this._site = site;
          createWebPage(this, cb);
        });
      });
    });
  }

  function findCB(err, result){
    if(err) {
      console.error(err);
      process.exit(1);
    }
    result;
  }
};
