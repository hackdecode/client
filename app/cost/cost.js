'use strict';

angular.module('myApp.cost', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cost', {
      templateUrl: 'cost/cost.html',
      controller: 'CostCtrl'
    });
  }])

  .controller('CostCtrl', ['$scope', '$location', 'nomadService', function ($scope, $location, nomadService) {
    $scope.origin = nomadService.passenger.origin;
    $scope.destination = nomadService.passenger.destination;
    $scope.go = function (path) {
      $location.path(path);
    };
  }]);