var starbucks = angular.module('starbucks', ['ngRoute']);

starbucks.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../starbucks_portal.html"
    })
    .when("/home", {
        templateUrl : "../starbucks_portal.html"
    })
    .when("/login", {
        templateUrl : "../login.html"
    })
    .when("/signup", {
        templateUrl : "../signup.html"
    })
    .when("/menu", {
        templateUrl : "../menu.html"
    })
    .when("/orders", {
        templateUrl : "../order_history.html"
    })
    .when("/cart", {
        templateUrl : "../cart.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});

starbucks.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
   $httpProvider.defaults.headers.post = {};    
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.delete = {};
});