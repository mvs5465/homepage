(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.directive('tabHome', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-home.html'
        };
    });
    app.directive('tabParks', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-parks-new.html'
        };
    });
    app.directive('tabRecipes', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-recipes.html'
        };
    });
    app.directive('tabCode', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-code.html'
        };
    });
    app.directive('tabApi', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-api.html'
        };
    });
}());