// USERS CONFIG

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'partials/users/users.html',
      controller: 'UsersCtrl'
    })
    .state('users.new', {
      url: '^/user/new',
      views: {
        '@': {
          templateUrl: 'partials/users/users.new.html',
          controller: 'UsersNewCtrl'
        }
      }
    })
    .state('users.show', {
      url: '^/user/:user_id',
      views: {
        '@': {
          templateUrl: 'partials/users/users.show.html',
          controller: 'UsersShowCtrl'
        }
      }
    })
    .state('users.update', {
      url: '^/user/edit/:user_id',
      views: {
        '@': {
          templateUrl: 'partials/users/users.update.html',
          controller: 'UsersUpdateCtrl'
        }
      }
    })
    $locationProvider.html5Mode(true);
}])
