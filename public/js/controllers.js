app.controller("HomeCtrl", ["$scope", function ($scope) {
  $scope.message = "Home Page"
}])

app.controller("LoginCtrl", ["$scope", function ($scope) {
  $scope.message = "Login Page"
}])

// CLIENTS
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

// USERS
app.controller("UsersCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Users Page"
  $scope.userData = {};
  // Get all users
  $http.get('/api/v1/users')
    .success(function(data) {
      $scope.userData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
}])

app.controller("UsersNewCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
  $scope.message = "New Users Page";
  $scope.newUserForm = {};
  $scope.userData = {};
  // Create a new user
  $scope.createUser = function(userID) {
    $http.post('/api/v1/users', $scope.newUserForm)
      .success(function(data) {
        $scope.newUserForm = {};
        $scope.userData = data;
        console.log('data: ' + data)
        console.log($scope.userData.slice(-1)[0].id);
        $location.path('/user/' + $scope.userData.slice(-1)[0].id);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
}])

app.controller("UsersShowCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Show User Page";
  $scope.userData = {};
  // Get ONE user
  $http.get('/api/v1/users/' + $stateParams.id)
    .success(function(data) {
      console.log(data);
      $scope.userData = data[0];
      console.log($scope.userData);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Delete ONE user
  $scope.deleteUser = function(userID) {
    $http.delete('/api/v1/users/' + $stateParams.id)
      .success(function(data) {
        $scope.userData = data;
        console.log(data);
        $location.path('/users')
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])

app.controller("UsersUpdateCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Edit User Page";
  $scope.updateUserForm = {};
  $scope.userData = {};
  // Get ONE user
  $http.get('/api/v1/users/' + $stateParams.id)
    .success(function(data) {
      console.log(data);
      $scope.userData = data[0];
      console.log($scope.userData)
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Update ONE user
  $scope.updateUser = function(userID) {
    $http.put('/api/v1/users/' + $stateParams.id, $scope.updateUserForm)
      .success(function(data) {
        $scope.userData = data;
        console.log(data);
        $location.path('/user/' + $stateParams.id)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])