// CLIENT_OBSERVATIONS CONFIG

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('client_observations', {
      url: '^/client/:client_id/observations',
      templateUrl: 'partials/client_observations/client_observations.html',
      controller: 'ClientObservationsCtrl'
    })
    .state('client_observations.new', {
      url: '^/client/:client_id/observation/new',
      views: {
        '@': {
          templateUrl: 'partials/client_observations/client_observations.new.html',
          controller: 'ClientObservationsNewCtrl'
        }
      }
    })
    .state('client_observations.showAll', {
      url: '^/client/:client_id/observations/all',
      views: {
        '@': {
          templateUrl: 'partials/client_observations/client_observations.showAll.html',
          controller: 'ClientObservationsShowAllCtrl'
        }
      }
    })
    .state('client_observations.showOne', {
      url: '^/client/:client_id/observations/:client_observation_id',
      views: {
        '@': {
          templateUrl: 'partials/client_observations/client_observations.showAll.html',
          controller: 'ClientObservationsShowAllCtrl'
        }
      }
    })
    // .state('observations.update', {
    //   url: '^/observation/edit/:id',
    //   views: {
    //     '@': {
    //       templateUrl: 'partials/observations/observations.update.html',
    //       controller: 'ObservationsUpdateCtrl'
    //     }
    //   }
    // })
    $locationProvider.html5Mode(true);
}])