// OBSERVATIONS CONTROLLERS

app.controller("ObservationsCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Observation Logs Page"
}])

app.controller("ObservationsNewCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "New Observation Log Page"
}])