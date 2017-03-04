
angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        component: 'signUp'
      })
      .state('siteAdmin', {
        url: '/users/:username',
        component: 'siteAdmin'
      })
      .state('siteAdmin.websites', {
        url: '/administrators/:username/websites',
        component: 'adminSites'
      })
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('login');
  }]);
