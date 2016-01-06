app.controller("HomeCtrl", ["$scope", function ($scope) {
  $scope.message = "Home Page"
}])

app.controller("LoginCtrl", ["$scope", function ($scope) {
  $scope.message = "Login Page"
}])

app.controller("ClientsCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Clients Page"
  $scope.clientData = {};
  // Get all clients
  $http.get('/api/v1/clients')
    .success(function(data) {
      $scope.clientData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
}])

app.controller("ClientsNewCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
  $scope.message = "New Clients Page";
  $scope.newClientForm = {};
  $scope.clientData = {};
  // Create a new client
  $scope.createClient = function(clientID) {
    $http.post('/api/v1/clients', $scope.newClientForm)
      .success(function(data) {
        $scope.newClientForm = {};
        $scope.clientData = data;
        console.log('data: ' + data)
        console.log($scope.clientData.slice(-1)[0].id);

        // $location.path('/clients');
        $location.path('/client/' + $scope.clientData.slice(-1)[0].id);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
}])

app.controller("ClientsShowCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Show Client Page";
  $scope.clientData = {};
  // Get ONE client
  $http.get('/api/v1/clients/' + $stateParams.id)
    .success(function(data) {
      console.log(data);
      $scope.clientData = data[0];
      console.log($scope.clientData);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Delete ONE client
  $scope.deleteClient = function(clientID) {
    $http.delete('/api/v1/clients/' + $stateParams.id)
      .success(function(data) {
        $scope.clientData = data;
        console.log(data);
        $location.path('/clients')
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])

app.controller("ClientsUpdateCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Edit Client Page";
  $scope.updateClientForm = {};
  $scope.clientData = {};
  // Get ONE client
  $http.get('/api/v1/clients/' + $stateParams.id)
    .success(function(data) {
      console.log(data);
      $scope.clientData = data[0];
      console.log($scope.clientData)
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Update ONE client
  $scope.updateClient = function(clientID) {
    $http.put('/api/v1/clients/' + $stateParams.id, $scope.updateClientForm)
      .success(function(data) {
        $scope.clientData = data;
        console.log(data);
        $location.path('/client/' + $stateParams.id)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])
