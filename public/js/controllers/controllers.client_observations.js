app.controller("ClientObservationsCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Observation Logs Page"
}])

app.controller("ClientObservationsNewCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "New Observation Log Page"
}])


app.controller("ClientObservationsShowAllCtrl", ["$scope", "$http", "$stateParams", function ($scope, $http, $stateParams) {
  $scope.message = "Show All Observation Logs Page"
  $scope.clientObservationData = {};
  $scope.labels = [];
  $scope.data = [];
  // Get ONE clients observation data
  $http.get('/api/v1/clients/' + $stateParams.client_id + '/observations/all')
    .success(function(data) {
      // console.log(data);
      $scope.clientObservationData = data;
      for (var i = 0; i < $scope.clientObservationData.length; i++) {
        $scope.labels.push($scope.clientObservationData[i].entry_date.slice(0, 10));
        $scope.data[0].push($scope.clientObservationData[i].quantity);
      }
      console.log($scope.labels);
      console.log($scope.data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });





  $scope.labels = ["2016-01-01"];
  $scope.series = ['Seizures', 'Outbursts', 'Biting'];
  $scope.data = [
    [2, 3, 4, 3, 2],
    [0, 4, 5, 2, 4, 4, 3, 3, 4],
    [null, null, null, 2]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}])
