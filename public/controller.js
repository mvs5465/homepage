var app = angular.module('mainApp', []);
app.controller('mainController', function ($scope) {
    $scope.greeting = "Hello World How's it going";
    $scope.title = title;
});
var title = {
    heading: "Matt's Recipes"
    , description: "A place for me to share meals I have made or want to make."
    , body: "Here is where we will place our recipes."
};