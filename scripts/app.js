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
	
	
	$scope.addProduct = function() {
        console.log("this contains " + this.product.name);
    };
		
		$scope.addItem = function(product) {
        console.log("you have added " + this.product.name);
			
		

/* 		angular.forEach($scope.invoice.items, function(item){   
			for(var i = 0; i < $scope.invoice.items.length; i++){
				console.log($scope.invoice.items[i]);
				if(item.name.search($scope.invoice.items[i]) >= 0) {

					console.log("found a match!");
				}
			}
		}); */



			$scope.invoice.items.push({
				name: this.product.name,
				qty: 1,
				price: this.product.price
			});
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
	
	

})();