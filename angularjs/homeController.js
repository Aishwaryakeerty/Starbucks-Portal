starbucks.controller('homeController', function ($scope, $http, $rootScope) {
    if ($rootScope.login_name == null)
        $rootScope.login_name = "Login";
    $scope.login1 = $rootScope.login_name;
	if($rootScope.login == null)
		$rootScope.login = "Login";
	$rootScope.store = "sf";
	$scope.OnItemClick = function(event) {
	    $rootScope.store = event;
		 };
});
