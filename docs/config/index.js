let path = require('canonical-path');
let Package = require('degni').package;
let packagePath = __dirname;


module.exports = new Package('cms-factory_doc', [
  require('dgeni-packages/ngdoc'),
  require('dgeni-packages/nunjucks')
])
.config(function(log, readFilesProcessor, writeFilesProcessor) {

  log.level = 'info';

  readFilesProcessor.basePath = path.resolve(packagePath, '../..');

  readFilesProcessor.sourceFiles = [
    { include: 'server/**/*.js', basePath: 'server'},
    {include: 'client/js/**/*.js', basePath: 'client'}
  ];
  writeFilesProcessor.outputFolder = 'docs/build';
})
.config(function(templateFinder) {
  templateFinder.templateFolder.unshift(path.resolve(packagePath, 'templates'));
})
.config(function(computePathsProcessor) {


  computePathsProcessor.pathTemplates.push({
    docTypes: ['module]'],
    pathTemplate: '${area}/${name}',
    outputPathTemplate: 'partials/${area}/${name}.html'
  });

  computePathsProcessor.pathTemplates.push({
    docTypes: ['componentGroup'],
    pathTemplate: '${area}/${moduleName}/${groupType}',
    outputPathTemplate: 'partials/${area}/${moduleName}/${groupType}.html'
  });
});
