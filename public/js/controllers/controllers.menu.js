// MENU CONTROLLER

app.controller('MenuCtrl', ['$scope','$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.menu = [
    {
      link : 'home',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : 'clients',
      title: 'Clients',
      icon: 'people'
    },
    {
      link : 'departments',
      title: 'Departments',
      icon: 'home'
    },
    {
      link : 'home',
      title: 'Employees',
      icon: 'people'
    },
    {
      link : 'home',
      title: 'Parents',
      icon: 'people'
    }
  ];
}]);
