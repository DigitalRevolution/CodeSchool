(function(){
  var app = angular.module('gemStore', []);
	
	var gems = [
	{
		name: 'Diamond',
		price: 2.95, 
		description: 'Bushwick 3 wolf moon food truck tofu enim. Minim pariatur elit hashtag, pork belly twee typewriter gluten-free humblebrag keffiyeh accusamus intelligentsia.',  
		canPurchase: true, 
		soldOut: false, 
	}, 
	{
		name: 'Pentagon',
		price: 5.95, 
		description: 'Asymmetrical VHS try-hard culpa hammock, shoreditch austin reprehenderit health goth everyday carry microdosing.', 
		canPurchase: true, 
		soldOut: false, 
	}
	];
	
	app.controller('StoreController', function(){
		this.product = gems; 
    }); 

    app.controller('PanelController', function(){
    	this.tab = 1; 
    	this.selectTab = function(setTab){
    		this.tab = setTab; 
    	};
    	this.isSelected = function(checkTab){
    		return this.tab === checkTab
    	};
    });



})();