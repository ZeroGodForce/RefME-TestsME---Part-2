(function() {
	var app = angular.module('refStore', []);
	
	app.controller('StoreController', function(){
		this.products = items;

	});
	
 	app.controller('CartController', function(){
		this.cart = {};
		
		this.addToCart = function(product) {
			
		};
	});

var items = [
		{
			name: 'Proton Pack',
			price: 2.95,
			description: '...',
			image:'http://placehold.it/250x100'
		},
		{
			name: 'PKE Meter',
			price: 5.95,
			description: '...',
			image:'http://placehold.it/250x100'
		},
	{
			name: 'Ghost Trap',
			price: 2.95,
			description: '...',
			image:'http://placehold.it/250x100'
		},
		{
			name: 'Ecto Goggles',
			price: 5.95,
			description: '...',
			image:'http://placehold.it/250x100'
		},
	{
			name: 'Slime Blower',
			price: 2.95,
			description: '...',
			image:'http://placehold.it/250x100'
		}
	];
	

})();