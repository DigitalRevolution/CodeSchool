(function(){
  var app = angular.module('gemStore', []);
	
	var gems = [
	{
		name: 'Diamond',
		price: 2.95, 
		description: '...', 
		canPurchase: true, 
		soldOut: true, 
	}, 
	{
		name: 'Pentagon',
		price: 5.95, 
		description: '...', 
		canPurchase: true, 
		soldOut: false, 
	}
	];
	
	app.controller('StoreController', function(){
		this.product = gems; 
    }); 

})();