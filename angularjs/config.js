var starbucks = angular.module('starbucks', ['ngRoute']);

starbucks.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../starbucks_portal.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});