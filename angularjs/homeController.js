starbucks.controller('homeController', function ($scope,$http,$rootScope) {
	if($rootScope.login == null)
		$rootScope.login = "Login";
});
