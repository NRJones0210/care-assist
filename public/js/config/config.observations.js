// // OBSERVATIONS CONFIG

// app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
//   $urlRouterProvider.otherwise('/');

//   $stateProvider
//     .state('observations', {
//       url: '^/client/:client_id/observations',
//       templateUrl: 'partials/observations/observations.html',
//       controller: 'ObservationsCtrl'
//     })
//     .state('observations.new', {
//       url: '^/client/:client_id/observation/new',
//       views: {
//         '@': {
//           templateUrl: 'partials/observations/observations.new.html',
//           controller: 'ObservationsNewCtrl'
//         }
//       }
//     })
//     .state('observations.showAll', {
//       url: '^/client/:client_id/observationsAll',
//       views: {
//         '@': {
//           templateUrl: 'partials/observations/observations.showAll.html',
//           controller: 'ObservationsShowAllCtrl'
//         }
//       }
//     })
//     // .state('observations.update', {
//     //   url: '^/observation/edit/:id',
//     //   views: {
//     //     '@': {
//     //       templateUrl: 'partials/observations/observations.update.html',
//     //       controller: 'ObservationsUpdateCtrl'
//     //     }
//     //   }
//     // })
//     $locationProvider.html5Mode(true);
// }])