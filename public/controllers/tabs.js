(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.controller('TabController', function ($scope) {
        $scope.tab = 2;
        $scope.setTabIndex = function (tabNum) {
            $scope.tab = tabNum;
        }
        $scope.tabActive = function (num) {
            return ($scope.tab === num);
        }
    });
}());