starbucks.controller('cartController', function ($scope, $http, $rootScope) {
    $scope.lcart = $rootScope.cart;

    $scope.checkout = function () {
        $http({
            method: "POST",
            url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/" + $rootScope.store + "/order",
            data: {
                "location": "take-out",
                "items": $rootScope.cart
            }
        }).success(function (data) {
            alert('Your order placed successfully.')
        }).error(function (error) {
            alert('error');
        });
    };
    
    $scope.deleteItem = function (index)
    {
        $rootScope.cart.splice(index, 1);
        alert('Item deleted');
    };
});