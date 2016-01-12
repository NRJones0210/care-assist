// DEPARTMENTS CONTROLLERS

app.controller("DepartmentsCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.message = "Departments Page"
  $scope.departmentData = {};
  // Get all departments
  $http.get('/api/v1/departments')
    .success(function(data) {
      $scope.departmentData = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
}])

app.controller("DepartmentsNewCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
  $scope.message = "New Department Page";
  $scope.newDepartmentForm = {};
  $scope.departmentData = {};
  // Create a new department
  $scope.createDepartment = function(departmentID) {
    $http.post('/api/v1/departments', $scope.newDepartmentForm)
      .success(function(data) {
        $scope.newDepartmentForm = {};
        $scope.departmentData = data;
        console.log('data: ' + data)
        console.log($scope.departmentData.slice(-1)[0].department_id);
        $location.path('/department/' + $scope.departmentData.slice(-1)[0].department_id);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
}])

app.controller("DepartmentsShowCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Show Department Page";
  $scope.departmentData = {};
  // Get ONE department
  $http.get('/api/v1/departments/' + $stateParams.department_id)
    .success(function(data) {
      console.log(data);
      $scope.departmentData = data[0];
      console.log($scope.departmentData);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Delete ONE department
  $scope.deleteDepartment = function(departmentID) {
    $http.delete('/api/v1/departments/' + $stateParams.department_id)
      .success(function(data) {
        $scope.departmentData = data;
        console.log(data);
        $location.path('/departments')
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])

app.controller("DepartmentsUpdateCtrl", ["$scope", "$http", "$stateParams", "$location", function ($scope, $http, $stateParams, $location) {
  $scope.message = "Edit Department Page";
  $scope.updateDepartmentForm = {};
  $scope.departmentData = {};
  // Get ONE department
  $http.get('/api/v1/departments/' + $stateParams.department_id)
    .success(function(data) {
      console.log(data);
      $scope.departmentData = data[0];
      console.log($scope.departmentData)
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });
  // Update ONE department
  $scope.updateDepartment = function(departmentID) {
    $http.put('/api/v1/departments/' + $stateParams.department_id, $scope.updateDepartmentForm)
      .success(function(data) {
        $scope.departmentData = data;
        console.log(data);
        $location.path('/department/' + $stateParams.department_id)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}])

