starbucks.controller('orderController', function ($scope, $http, $rootScope) {
    $http({
        method: "GET",
        url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/" + $rootScope.store + "/orders",
    }).success(function (data) {
        $scope.orders = data;
    }).error(function (error) {
        alert('error');
    });
    $scope.myqty = true;
    $scope.mymilk = true;
    $scope.mysize = true;

    $scope.updateOrder = function (index, index1) {
        if ($scope.mymilk == true) {
            $scope.myqty = false;
            $scope.mymilk = false;
            $scope.mysize = false;
        }
        else {
            if ($scope.orders[index].status == "PLACED")
                alert("Update Successful");
            else
                alert('Update Can\'t be performed');
            /*
            $http({
                method: "PUT",
                url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/" + $rootScope.store + "/order" + $scope.orders[index].id,
                data: {
                    "location": "take-out",
                    "items": $rootScope.cart
                }
            }).success(function (data) {
                alert('Your order placed successfully.')
            }).error(function (error) {
                alert('error');
            });*/
            $scope.myqty = true;
            $scope.mymilk = true;
            $scope.mysize = true;
        }
    };
    $scope.deleteOrder = function (index) {
        if ($scope.orders[index].status == "PLACED") {
            $scope.orders.splice(index, 1);
            alert('Order Deleted Successfully');
        }
        else
            alert("Order Can't be deleted");
        /*
        $http({
            method: "DELETE",
            headers: {'X-Custom-Header':'value'},
            url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/" + $rootScope.store + "/order/" + $scope.orders[index].id,
            data:""
        }).success(function (data) {
            $scope.orders.splice(index, 1);
            alert('Order Deleted Successfully');
        }).error(function (error) {
            alert('error');
        });*/
    };

    $scope.pay = function (index) {
        $http({
            method: "POST",
            url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/" + $rootScope.store + "/order/" + $scope.orders[index].id + "/pay"
        }).success(function (data) {
            $scope.orders[index].status = "PAID";
            alert('Paid Successfully');
        }).error(function (error) {
            alert('Already Paid');
        });
    };
});