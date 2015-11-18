(function() {
	'use strict';

	var typeAhead = angular.module('typeAhead',["ui.router", "ui.bootstrap"]);
typeAhead.config(function($stateProvider, $urlRouterProvider,$compileProvider){
	
	//$compileProvider.debugInfoEnabled(false);
	$stateProvider.state("typeAhead", {
		url: "/typeAhead",
		templateUrl:'type-ahead.html',
		controller:'typeAheadCtrl'
			
	})
	$urlRouterProvider.otherwise("/typeAhead");

	}).controller('typeAheadCtrl',  function($scope){
	$scope.name = 'typeAhead';
	$scope.categories = ['Mobiles','Electronics','Appliances'];
	// $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
	// 				 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
	// 				  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
	// 				   'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
	// 				    'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma',
	// 				     'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
	// 				      'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	$scope.products = [];
	$scope.items = [{cat:"Electronics",item:"item1"},{cat:"Appliances",item:"item5"},
					{cat:"Mobiles",item:"item2"},{cat:"Electronics",item:"item6"},
					{cat:"Electronics",item:"item3"},{cat:"Appliances",item:"item7"},
					{cat:"Mobiles",item:"item4"},{cat:"Mobiles",item:"item8"}];
					
					$scope.catSelected = function(cat,matched){
						console.log(cat,matched);
						var matchData = _.filter(matched,function(item){
							return item.model.cat === cat;
						});
						$scope.products = _.map(matchData,function(match){
							return match.model;
						})
					}
					$scope.getProducts = function(){
						console.log('xxxx')
						if($scope.selected.length<2){
							return;
						}
						if(!$scope.selected1){
							$scope.products = $scope.items;
							return;
						}
						var filtered  = _.filter($scope.items,(function(item){
							return item.cat === $scope.selected1;
						}))
						console.log(filtered);
						$scope.products = filtered;
					}
					$scope.getItem = function(match){
						console.log(match);
						$scope.products = [match.model];
					}
})

})();