// DEPARTMENTS CONFIG

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('departments', {
      url: '/departments',
      templateUrl: 'partials/departments/departments.html',
      controller: 'DepartmentsCtrl'
    })
    .state('departments.new', {
      url: '^/department/new',
      views: {
        '@': {
          templateUrl: 'partials/departments/departments.new.html',
          controller: 'DepartmentsNewCtrl'
        }
      }
    })
    .state('departments.show', {
      url: '^/department/:department_id',
      views: {
        '@': {
          templateUrl: 'partials/departments/departments.show.html',
          controller: 'DepartmentsShowCtrl'
        }
      }
    })
    .state('departments.update', {
      url: '^/department/edit/:department_id',
      views: {
        '@': {
          templateUrl: 'partials/departments/departments.update.html',
          controller: 'DepartmentsUpdateCtrl'
        }
      }
    })
    $locationProvider.html5Mode(true);
}])