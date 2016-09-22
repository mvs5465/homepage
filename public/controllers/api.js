(function () {
    'use strict';
    var app = angular.module('MainApp');
    app.controller('ApiController', function ($scope) {
        $scope.getApiHello = function (divId) {
            $.get('/api/hello', function (req, res) {
                $('#' + divId).html(req);
                console.log("[INFO] GETing hello world test request to div id = (%s), content=(%s)", divId, req);
            });
        };
    });
}());