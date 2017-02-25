(function(angular) {
  angular.module('app').factory('AREAS',['$http',DataFactory]);
  
  function DataFactory($http){
    var getData = function(){
      return $http.get('area.json').then(function(response) {
      return response.data;
    })
    };
    return getData();
  }
})(angular);