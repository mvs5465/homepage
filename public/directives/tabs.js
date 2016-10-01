(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.directive('tabHome', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-home.html'
        };
    });
    app.directive('tabParks1', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-parks.html'
        };
    });
    app.directive('tabParks2', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-parks-new.html'
        };
    });
    app.directive('tabParks3', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-parks-search.html'
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
    app.directive('tabLog', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tabs/tab-log.html'
        };
    });
}());