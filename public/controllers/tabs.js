var TAB_HOME = 0;
var TAB_RECIPES = 1;
var TAB_PARKS = 2;
var TAB_CODE = 3;
(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.controller('TabController', function ($scope) {
        $scope.tab = TAB_PARKS;
        $scope.setTabIndex = function (tabNum) {
            $scope.tab = tabNum;
        }
        $scope.tabActive = function (num) {
            return ($scope.tab === num);
        }
    });
}());