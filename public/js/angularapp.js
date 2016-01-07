var app = angular.module('trinityApp', ['ui.router', 'ngMaterial'])

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })

    // CLIENTS
    .state('clients', {
      url: '/clients',
      templateUrl: 'partials/clients.html',
      controller: 'ClientsCtrl'
    })
    .state('clients.new', {
      url: '^/client/new',
      views: {
        '@': {
          templateUrl: 'partials/clients.new.html',
          controller: 'ClientsNewCtrl'
        }
      }
    })
    .state('clients.show', {
      url: '^/client/:id',
      views: {
        '@': {
          templateUrl: 'partials/clients.show.html',
          controller: 'ClientsShowCtrl'
        }
      }
    })
    .state('clients.update', {
      url: '^/client/edit/:id',
      views: {
        '@': {
          templateUrl: 'partials/clients.update.html',
          controller: 'ClientsUpdateCtrl'
        }
      }
    })

    // USERS
    .state('users', {
      url: '/users',
      templateUrl: 'partials/users.html',
      controller: 'UsersCtrl'
    })
    .state('users.new', {
      url: '^/user/new',
      views: {
        '@': {
          templateUrl: 'partials/users.new.html',
          controller: 'UsersNewCtrl'
        }
      }
    })
    .state('users.show', {
      url: '^/user/:id',
      views: {
        '@': {
          templateUrl: 'partials/users.show.html',
          controller: 'UsersShowCtrl'
        }
      }
    })
    .state('users.update', {
      url: '^/user/edit/:id',
      views: {
        '@': {
          templateUrl: 'partials/users.update.html',
          controller: 'UsersUpdateCtrl'
        }
      }
    })
    $locationProvider.html5Mode(true);
}])
