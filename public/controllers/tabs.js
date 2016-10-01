var TAB_HOME = 0;
var TAB_RECIPES = 1;
var DEFAULT_TAB = 4;
var TAB_CODE = 3;
(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.controller('TabController', function ($scope) {
        $scope.tab = DEFAULT_TAB;
        $scope.setTabIndex = function (tabNum) {
            $scope.tab = tabNum;
        }
        $scope.tabActive = function (num) {
            return ($scope.tab === num);
        }
    });
}());