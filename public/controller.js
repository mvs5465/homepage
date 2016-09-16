(function () {
    'use strict';
    var app = angular.module('mainApp', []);
    app.controller('mainController', function ($scope) {
        $scope.greeting = "Hello World How's it going";
        $scope.title = title;
    });
    app.controller('tabController', function ($scope) {
        $scope.tab = 0;
        $scope.setTabIndex = function (tabNum) {
            $scope.tab = tabNum;
        }
        $scope.tabActive = function (num) {
            return ($scope.tab === num);
        }
    });
    app.directive('tabHome', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tab-home.html'
        };
    });
    app.directive('tabParks', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tab-parks.html'
        };
    });
    app.directive('tabRecipes', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tab-recipes.html'
        };
    });
    var title = {
        heading: "The Brewhause"
        , description: " - Home -"
    };
})();