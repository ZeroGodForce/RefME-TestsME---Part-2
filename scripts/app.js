(function() {
	var app = angular.module('refStore', []);
	
	app.controller('StoreController', function($scope){
		this.products = items;
		
 		$scope.invoice = {
			items: [{
				name: 'Slime Blower',
				qty: 2,
				price: 2.95,
				image:'http://placehold.it/250x100'
			}]
		};	 
		
/* 		$scope.invoice = {
			items: [{}]
		};	 */
	
		
		$scope.addItem = function(product) {
		
		var item = this.product;
			
		var exists = 0;

/* 	angular.forEach($scope.invoice.items, function(item){ */
			for(var i = 0; i < $scope.invoice.items.length; i++){
				
 					if(isEquivalent($scope.invoice.items[i].name, item.name)){
/* 						console.log("TRUE - item.name is: " + item.name);
						console.log("TRUE - $scope.invoice.items[" + i + "].name is: " + $scope.invoice.items[i].name); */
						console.log("TRUE - incrementing qty of " + $scope.invoice.items[i].name + " by 1");
						$scope.invoice.items[i].qty++;
						exists = 1;
						break;
					}

			}
			
			
			if(exists === 0)
				{
/*  						console.log("FALSE - item.name is: " + item.name);
						console.log("FALSE - $scope.invoice.items[" + i + "].name is: " + $scope.invoice.items[i].name); */
						console.log("FALSE - Adding "+ this.product.name +" to cart");
						
						$scope.invoice.items.push({
							name: this.product.name,
							qty: 1,
							price: this.product.price
						});
					}
			
			
/* 		}); */



			
		};
	
	
	
	
	
	});
	
	
	
	app.controller('CartController', function($scope){
    

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    };

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.price;
        });

        return total;
    };
});
	
	
	

var items = [
		{
			name: 'Proton Pack',
			price: 2.95,
			image:'http://placehold.it/250x100'
		},
		{
			name: 'PKE Meter',
			price: 5.95,
			image:'http://placehold.it/250x100'
		},
	{
			name: 'Ghost Trap',
			price: 2.95,
			image:'http://placehold.it/250x100'
		},
		{
			name: 'Ecto Goggles',
			price: 5.95,
			image:'http://placehold.it/250x100'
		},
	{
			name: 'Slime Blower',
			price: 2.95,
			image:'http://placehold.it/250x100'
		}
	];
	
	
	
	function isEquivalent(a, b) {
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
	

})();