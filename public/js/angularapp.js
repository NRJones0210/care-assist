var app = angular.module('trinityApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/admin', {
        templateUrl: 'partials/admin/dashboard.html',
        controller: 'DashboardController'
      })
      .otherwise({
        redirect: '/'
      });
    $locationProvider.html5Mode(true);
});