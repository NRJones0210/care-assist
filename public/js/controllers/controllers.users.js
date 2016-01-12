// USERS CONTROLLERS
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
        console.log($scope.userData.slice(-1)[0].user_id);
        $location.path('/user/' + $scope.userData.slice(-1)[0].user_id);
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
  $http.get('/api/v1/users/' + $stateParams.user_id)
    .success(function(data) {
      console.log(data);
      $scope.userData = data[0];
      console.log($scope.userData);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Delete ONE user
  $scope.deleteUser = function(user_ID) {
    $http.delete('/api/v1/users/' + $stateParams.user_id)
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
  $http.get('/api/v1/users/' + $stateParams.user_id)
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
    $http.put('/api/v1/users/' + $stateParams.user_id, $scope.updateUserForm)
      .success(function(data) {
        $scope.userData = data;
        console.log(data);
        $location.path('/user/' + $stateParams.user_id)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])

