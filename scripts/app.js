(function() {
	var app = angular.module('refStore', []);
	
	app.controller('StoreController', function($scope){
		this.products = items;
		
		// example value
 		$scope.invoice = {
			items: [{
				name: 'Proton Pack',
				qty: 1,
				price: 12.50,
			}]
		};	 
		
		$scope.addItem = function(product) {
		var item = this.product;
		var exists = 0;

			for(var i = 0; i < $scope.invoice.items.length; i++){
				// Check to see if the item has already been added to the cart. If it has, increase the quantity by 1
				if(isEquivalent($scope.invoice.items[i].name, item.name)){
					console.log("TRUE - incrementing qty of " + $scope.invoice.items[i].name + " by 1");
					$scope.invoice.items[i].qty++;
					exists = 1;
					break;
				}
			}
			if(exists === 0) {
				// If the item isn't already in the cart, add it
				console.log("FALSE - Adding "+ this.product.name +" to cart");
				$scope.invoice.items.push({
					name: this.product.name,
					qty: 1,
					price: this.product.price
				});
			}
		};
	});
	

	app.controller('CartController', function($scope){
		// Remove the item from the cart
		$scope.removeItem = function(index) {
			$scope.invoice.items.splice(index, 1);
		};
		
		// Calculate the total cost based on quantities of each item
		$scope.total = function() {
			var total = 0;
			angular.forEach($scope.invoice.items, function(item) {
				total += item.qty * item.price;
			});
			return total;
		};
	});
	

	function isEquivalent(a, b) {
		// function to check whether the selected item "actually" has the same value in the cart
		
		// Create arrays of property names
		var aProps = Object.getOwnPropertyNames(a);
		var bProps = Object.getOwnPropertyNames(b);

		// If number of properties is different,
		// objects are not equivalent
		if (aProps.length != bProps.length) {
			return false;
		}

		for (var i = 0; i < aProps.length; i++) {
			var propName = aProps[i];

			// If values of same property are not equal,
			// objects are not equivalent
			if (a[propName] !== b[propName]) {
				return false;
			}
		}

		// If we made it this far, objects
		// are considered equivalent
		return true;
	}

	// Items for the shop
	var items = [
		{
			name: 'Proton Pack',
			price: 12.50,
			image:'http://placehold.it/100x100'
		},
		{
			name: 'PKE Meter',
			price: 5.95,
			image:'http://placehold.it/100x100'
		},
		{
			name: 'Ghost Trap',
			price: 7.50,
			image:'http://placehold.it/100x100'
		},
		{
			name: 'Ecto Goggles',
			price: 2.95,
			image:'http://placehold.it/100x100'
		},
		{
			name: 'Slime Blower',
			price: 10.95,
			image:'http://placehold.it/100x100'
		}
	];

})();