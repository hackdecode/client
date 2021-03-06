'use strict';

angular.module('myApp.final', ['ngRoute', 'ui.bootstrap'])

  // .config(['$routeProvider', function ($routeProvider) {
  //   $routeProvider.when('/final', {
  //     templateUrl: 'final/final.html',
  //     controller: 'FinalCtrl'
  //   });
  // }])

  .controller('FinalCtrl', ['$scope', '$location', 'nomadService', function ($scope, $location, nomadService) {
    $scope.go = function (path) {
      $location.path(path);
    };
    const id = nomadService.passenger.id
    nomadService.getTrip({ id }).$promise.then((trip) => {
      $scope.trip = trip;
      console.log(trip);
    })
  }]);