(function () {
    'use strict';
    console.log("[INFO] national page scripts loaded")
    var mainApp = angular.module('MainApp');
    mainApp.controller('ParkController', ['$scope', function ($scope) {
        $scope.parks = parks;
        $scope.selectedPark = $scope.parks[0];
        $scope.index = 0;
        $scope.setPark = function (index) {
            $scope.selectedPark = $scope.parks[index];
            $scope.index = index;
        };
        $scope.getPark = function () {
            return $scope.selectedPark;
        };
    }]);
    var parks = [{
        name: "Acadia"
        , state: "Maine"
        , image: "acadia.jpg"
        , visited: true
    }, {
        name: "American Samoa"
        , state: "American Samoa"
        , image: "americansamoa.jpg"
        , visited: false
    }, {
        name: "Arches"
        , state: "Utah"
        , image: "arches.jpg"
        , visited: true
    }, {
        name: "Badlands"
        , state: "South Dakota"
        , image: "badlands.jpg"
        , visited: true
    }];
}());