// OBSERVATIONS CONTROLLERS

// app.controller("ObservationsCtrl", ["$scope", "$http", function ($scope, $http) {
//   $scope.message = "Observation Logs Page"
// }])

// app.controller("ObservationsNewCtrl", ["$scope", "$http", function ($scope, $http) {
//   $scope.message = "New Observation Log Page"
// }])

// app.controller("ObservationsShowAllCtrl", ["$scope", "$http", function ($scope, $http) {
//   $scope.message = "Show All Observation Logs Page"
//   $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//   $scope.series = ['Series A', 'Series B'];
//   $scope.data = [
//     [65, 59, 80, 81, 56, 55, 40],
//     [28, 48, 40, 19, 86, 27, 90]
//   ];
//   $scope.onClick = function (points, evt) {
//     console.log(points, evt);
//   };
// }])



// app.controller("ClientsShowCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
//   $scope.message = "Show Client Page";
//   $scope.clientData = {};
//   // Get ONE client
//   $http.get('/api/v1/clients/' + $stateParams.client_id)
//     .success(function(data) {
//       console.log(data);
//       $scope.clientData = data[0];
//       console.log($scope.clientData);
//     })
//     .error(function(error) {
//       console.log('Error: ' + error);
//     });
// }])