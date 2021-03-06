'use strict';

angular.module('forzaLeagueApp')
  .controller('DriverCtrl', function ($scope, $routeParams, driverService, trackService) {
    $scope.driver = driverService.getDriverWithAllStats($routeParams.id);
    trackService.getTracks().then(function(data){
      $scope.tracks = data;
    });
  });
