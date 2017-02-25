// Code goes here
(function(angular) {
  angular.module('app').controller('CascadeController', ['$scope', '$http', 'AREAS',CascadeController]);
  
  function CascadeController($scope, $http, AREAS){
    var vm = $scope.vm = {};
    AREAS.then(function(data) {
      vm.provinces = data.provinces;
      if (vm.provinces && vm.provinces.length > 0) {
        vm.province = vm.provinces[0];
      }
    });
    // 更换省的时候清空城市
    $scope.$watch('vm.province', function(province) {
      if (province && province.cities && province.cities.length > 0) {
        vm.city = province.cities[0];
      }
    });
  }
})(angular);