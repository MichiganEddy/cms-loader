'use strict';

const async = require('async');
let ap;
let models;

module.exports = function(app){
  ap = app.bind(this);
  models = app.models.bind(this);
  this.app = ap;
  this.modles = models;
  const mysqlD = ap.dataSources.mysqlD;
  this.mysqlD = mysqlD;
  async.parallel({
    systemAdmin: async.apply(createSysAdmin.bind(this, createCB)),
    siteAdmin: async.apply(createSiteAdmin.bind(this, createCB))
  },
    function(err, results){
      if(err) throw err;
      console.log(`Returned from async calls createSysAdmin and createSiteAdmin. They returned with values: SysAdmin = ${results.systemAdmin.toString()}, SiteAdmin = ${results.siteAdmin.toString()}`);
      createWebsite(results.systemAdmin, results.siteAdmin, function(err) {
        if(err) return console.error(err);
        console.log('> models created successfully');
      });
    });



  function createSysAdmin(cb) {
    this.mysqlD.automigrate('systemAdmin', function(err) {
      if(err) return cb(err);
      console.log('Automigration for SysAdmin successful');
      let systemAdmin = app.models.systemAdmin;
      this.sysAdminFindOne = systemAdmin.findOne.bind(systemAdmin).bind(this);
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
    this.mysqlD.automigrate('siteAdmin', function(err){
      if(err) return cb(err, null);
      console.log('Automigration for SiteAdmin successful');
      let siteAdmin = app.models.siteAdmin;
      this.siteAdminFindOne = siteAdmin.findOne.bind(siteAdmin).bind(this);
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
    this.mysqlD.automigrate('webPage', function(err){
      if(err) return cb(err);
      console.log('Automigration for webPage successful.');
      let webPage = app.models.webPage;
      this.webPage = webPage.bind(this);
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
    this.mysqlD.automigrate('editableField', function(err){
      if(err) return cb(err);
      console.log('Automigration for Editable Field successful.');
      let editable = app.models.editableField;
      this.editable = editable.bind(this);
      editable.create([{
        name: 'termDefinition',
        mediaType: 'text',
        localUrl: 'definitions',
        textContents: 'some text',
        webPage_id: this.page.id,
        systemAdmin_id: this.sysAdmin.id
      },
      {
        name: 'defintionGroup',
        mediaType: 'heading',
        localUrl: 'definitions',
        textContents: 'Related Defs',
        webPage_id: this.page.id,
        systeAdmin_id: this.sysAdmin.id
      }], cb);
    });
  }

  function createWebsite(sysAdmin, siteAdmin, cb) {
    this.mysqlD.automigrate('website', function(err){
      if(err) return cb(err);
      console.log('Automigration for website successful');
      async.parallel({
        sysAd: async.apply(this.sysAdminFindOne(findCB)),
        siteAd: async.apply(this.siteAdminFindOne(findCB))
      }, function(err, results){
        if(err) return cb(err);
        let website = app.models.website;
        this.website = website.bind(this);
        website.create([{
          siteName: 'Slate Law',
          siteURL: 'https://slate.law',
          admin_id: results.sysAd.id,
          systemAdmin_id: results.siteAd.id
        }], function(err, site){
          if(err) return cb(err);
          this.site = site;
          createWebPage(this, cb);
        });
      });
    });
  }

  function findCB(err, result){
    console.log(`Find Callback handling err: ${err}, result: ${Object.prototype.values(result)}`);
    return(err, result);
  }

  function createCB(err, result){
    console.log(`Create Callback handling err: ${err}, results: ${result.forEach(function(res){console.log(res);})}`);
    return(err, result);
  }
};
