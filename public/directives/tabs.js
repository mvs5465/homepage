(function () {
    var app = angular.module('MainApp');
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
    app.directive('tabCode', function () {
        return {
            restrict: 'E'
            , templateUrl: 'tab-code.html'
        };
    });
}());