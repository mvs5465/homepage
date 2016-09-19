(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.controller('TitleController', function ($scope) {
        $scope.greeting = "Hello World How's it going";
        $scope.title = title;
    });
    var title = {
        heading: "The Brewhause"
        , description: " - Home -"
    };
}());