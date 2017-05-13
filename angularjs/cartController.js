starbucks.controller('cartController', function ($scope,$http,$rootScope) {
	$scope.lcart = $rootScope.cart;
	alert($rootScope.cart);
});