starbucks.controller('homeController', function ($scope,$http,$rootScope) {
	if($rootScope.login == null)
		$rootScope.login = "Login";
	$scope.OnItemClick = function(event) {
		 	alert(event);
		 };
});
