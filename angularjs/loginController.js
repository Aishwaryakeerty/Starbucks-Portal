starbucks.controller('loginController', function ($scope,$rootScope) {
		$scope.login = function()
		{
			if($scope.username == "bhavan@bhavan.com" && $scope.password == "bhavan")
			{
				$rootScope.login = "Bhavan";
				alert('Login successful.');
				window.location = "/";
			}
		}
});
