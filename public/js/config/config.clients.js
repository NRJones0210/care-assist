// CLIENTS CONFIG

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('clients', {
      url: '/clients',
      templateUrl: 'partials/clients/clients.html',
      controller: 'ClientsCtrl'
    })
    .state('clients.new', {
      url: '^/client/new',
      views: {
        '@': {
          templateUrl: 'partials/clients/clients.new.html',
          controller: 'ClientsNewCtrl'
        }
      }
    })
    .state('clients.show', {
      url: '^/client/:client_id',
      views: {
        '@': {
          templateUrl: 'partials/clients/clients.show.html',
          controller: 'ClientsShowCtrl'
        }
      }
    })
    .state('clients.update', {
      url: '^/client/edit/:client_id',
      views: {
        '@': {
          templateUrl: 'partials/clients/clients.update.html',
          controller: 'ClientsUpdateCtrl'
        }
      }
    })
    $locationProvider.html5Mode(true);
}])