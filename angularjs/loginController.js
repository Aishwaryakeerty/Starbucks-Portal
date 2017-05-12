starbucks.controller('loginController', function ($scope) {
		$scope.login = function()
		{
			if($scope.username == "bhavan@bhavan.com" && $scope.password == "bhavan")
			{
				alert('Login successful.');
				window.location = "starbucks-portal.html";
			}
		}
});
