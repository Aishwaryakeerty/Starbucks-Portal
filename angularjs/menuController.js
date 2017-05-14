starbucks.controller('menuController', function ($scope,$http,$rootScope) {
	$scope.qty0 = "s1";
	$scope.milk0 = "whole";
	$scope.size0 = "large";
	$scope.qty1 = "s1";
	$scope.milk1 = "whole";
	$scope.size1 = "large";
	$scope.qty2 = "s1";
	$scope.milk2 = "whole";
	$scope.size2 = "large";
	$scope.qty3 = "s1";
	$scope.milk3 = "whole";
	$scope.size3 = "large";
	$scope.menu = 
	[[
		{"name":"Caffee Americano","img":"images/products/caffe_americano.jpg"},
		{"name":"Caffee Latte","img":"images/products/caffe_latte.jpg"},
		{"name":"Caffee Mocha","img":"images/products/caffe_mocha.jpg"},
		{"name":"Cappuccino","img":"images/products/cappuccino.jpg"}
	]];
	$scope.menu.push([
		{"name":"Caramel Macchiato","img":"images/products/caramel_macchiato.jpg"},
		{"name":"Caffee Latte","img":"images/products/caffe_latte.jpg"},
		{"name":"Espresso","img":"images/products/espresso.jpg"	},
		{"name":"Espresso con Panna","img":"images/products/espresso_con_panna.jpg"}
		]);
	$scope.menu.push([
		{"name":"Espresso Macchiato","img":"images/products/espresso_macchiato.jpg"},
		{"name":"Flavored Latte","img":"images/products/flavored_latte.jpg"},
		{"name":"Iced Caffee Americano","img":"images/products/iced_caffee_americano.jpg"	},
		{"name":"Iced Caffee Latte","img":"images/products/iced_caffee_latte.jpg"}
		]);
	$scope.menu.push([
		{"name":"Iced Caffee Mocha","img":"images/products/iced_caffee_mocha.jpg"},
		{"name":"Iced Caramel Macchiato","img":"images/products/iced_caramel_macchiato.jpg"},
		{"name":"Iced Flavored Latte","img":"images/products/iced_flavored_latte.jpg"},
		{"name":"Iced Peppermint Mocha","img":"images/products/iced_peppermint_mocha.jpg"}
		]);
	$scope.menu.push([
		{"name":"Chocolate Mocha","img":"images/products/iced_peppermint_white_chocolate_mocha.jpg"},
		{"name":"Iced Salted Caramel Mocha","img":"images/products/iced_salted_caramel_mocha.jpg"},
		{"name":"Iced Skinny Flavored Latte","img":"images/products/iced_skinny_flavored_latte.jpg"},
		{"name":"Iced White Chocolate Mocha","img":"images/products/iced_white_chocolate_mocha.jpg"}
		]);
	$scope.menu.push([
		{"name":"Peppermint Mocha","img":"images/products/peppermint_mocha.jpg"},
		{"name":"Salted Caramel Mocha","img":"images/products/salted_caramel_mocha.jpg"},
		{"name":"Iced Cinnamon Dolce Latte","img":"images/products/starbucks_iced_cinnamon_dolce_latte.jpg"},
		{"name":"Pumpkin Spice Latte","img":"images/products/pumpkin_spice_latte.png"}
		]);
	$scope.menu.push([
		{"name":"Pumpkin Spice Creme","img":"images/products/pupmkin_spice_creme.png"},
		{"name":"Caffee Misto","img":"images/products/caffe_misto.jpg"},
		{"name":"Coffee Traveler","img":"images/products/coffee_traveler.jpg"},
		{"name":"Decaf Pike Place Roast","img":"images/products/decaf_pike_place_roast.jpg"}
		]);
	$scope.menu.push([
		{"name":"Iced Coffee","img":"images/products/iced_coffee_brewed_coffee.jpg"},
		{"name":"Iced Coffee with Milk","img":"images/products/iced_coffee_with_milk_brewed_coffee.jpg"},
		{"name":"Pike Place Roast","img":"images/products/pike_place_roast.jpg"},
		{"name":"Clover Brewed Coffee","img":"images/products/clover_brewed_coffee.jpg"}
		]);
	$scope.addCart = function(name,size,milk,qty)
	{
	    if ($rootScope.cart == null || $rootScope.cart == {}) {
	        $rootScope.cart = [{ "qty": qty.charAt(1), "name": name, "milk": milk, "size": size }];
	    }
	    else
	        $rootScope.cart.push({ "qty": qty.charAt(1), "name": name, "milk": milk, "size": size });
	    alert('Item added to cart.');
	};

	$scope.order = function(name,size,milk,qty)
	{
	    $http({
			method: "POST",
			url: "http://ec2-54-186-173-97.us-west-2.compute.amazonaws.com:8000/"+$rootScope.store+"/order",
			data:{
				"location":"take-out",
				"items":[{"qty":qty.charAt(1),"name":name,"milk":milk,"size":size}]
			}
		}).success(function (data) {
			alert('Your order placed successfully.')
		}).error(function (error) {
			alert('error');
		});
	};
});
