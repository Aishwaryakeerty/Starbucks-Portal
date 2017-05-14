starbucks.controller('loginController', function ($scope, $rootScope) {
    	$scope.login = function()
		{
			if($scope.username == "bhavan@bhavan.com" && $scope.password == "bhavan")
			{
				$rootScope.login_name = "Bhavan";
				alert('Login successful.');
				window.location = "/index.html#/";
			}
		}
});
