// CLIENTS CONTROLLERS

app.controller("ClientsCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Clients"
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
    console.log($scope.newClientForm)
    $http.post('/api/v1/clients', $scope.newClientForm)
      .success(function(data) {
        $scope.newClientForm = {};
        $scope.clientData = data;
        console.log('data: ' + data)
        console.log($scope.clientData.slice(-1)[0].client_id);
        $location.path('/client/' + $scope.clientData.slice(-1)[0].client_id);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };

  // GROUPS CHECKBOX
     $scope.checkboxModel = {
      value1 : false,
      value2 : false
    };

  // ADD-REMOVE EMERGENCY CONTACTS
  $scope.emergencyContacts = [];
  $scope.addNewEmergencyContact = function() {
    var newItemNo = $scope.emergencyContacts.length+1;
    $scope.emergencyContacts.push({'id':'emergencyContact'+newItemNo});
  };
  $scope.removeEmergencyContact = function() {
    var lastItem = $scope.emergencyContacts.length-1;
    $scope.emergencyContacts.splice(lastItem);
  };

  // ADD-REMOVE DOCTORS
  $scope.doctors = [];
  $scope.addNewDoctor = function() {
    var newItemNo = $scope.doctors.length+1;
    $scope.doctors.push({'id':'doctor'+newItemNo});
  };
  $scope.removeDoctor = function() {
    var lastItem = $scope.doctors.length-1;
    $scope.doctors.splice(lastItem);
  };

}])

app.controller("ClientsShowCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Show Client Page";
  $scope.clientData = {};
  // Get ONE client
  $http.get('/api/v1/clients/' + $stateParams.client_id)
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
    $http.delete('/api/v1/clients/' + $stateParams.client_id)
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
  $http.get('/api/v1/clients/' + $stateParams.client_id)
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
    $http.put('/api/v1/clients/' + $stateParams.client_id, $scope.updateClientForm)
      .success(function(data) {
        $scope.clientData = data;
        console.log(data);
        $location.path('/client/' + $stateParams.client_id)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])