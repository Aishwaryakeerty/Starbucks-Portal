starbucks.controller('testController', function ($scope,$http) {
	$http({
			method: "GET",
			url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/sf/orders",
		}).success(function (data) {
			alert('success');
		}).error(function (error) {
			alert("Error "+error);
		});
});
