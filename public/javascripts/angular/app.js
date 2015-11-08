var app = angular.module('driftApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : '/views/index',
			controller  : 'MainController'
		})
		.when('/suggestion', {
			templateUrl : '/views/suggestions-view.ejs',
			controller : 'SuggestionsViewController'
		})
		.otherwise({redirectTo: "/"});
}])

	.service('GetResult', ['$http', function($http){
		return{
			"retrieveData": function(){
				$http({
					method: 'GET',
					url: ''
				}).then(callback, function errorCallback(response) { console.log('Failure');
				});
			}
		}
	}]);
/*
 app.directive('suggestionsView', function(){
 return {
 restrict: 'E',
 templateUrl: '/views/suggestions-view.ejs',
 controller: function(){
 $scope.suggestion2 = "test";
 }
 };

 });
 */
app.controller('MainController', ['$scope', 'GetResult', function($scope,GetResult){
	$scope.name = "Main Controller";

}]);

app.controller('CategoriesViewController', ['$scope', function($scope){

}]);

app.controller('SuggestionsModalController', ['$scope', function($scope){
	$scope.isModalVisible = false;
	$scope.data = {title: "Maroon 5 with Tove Lo & Phrases",
		date: "16 Oct",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "https://rocktotick.com/wp-content/uploads/2015/02/Maroon-5-Bio.jpg"};
	$scope.closeModal = function(){
		$scope.isModalVisible = false;
	}
	$scope.showModal = function(){
		$scope.isModalVisible = true;
	}

}]);

app.controller('SuggestionsViewController', ['$scope', function($scope){
	$scope.header = "Suggestions View";
	$scope.cities = ['NY', 'SF', 'LA', 'LV'];

	//Tabs functionality
	$scope.currentTab = 1;
	$scope.tabPressed = function(tabNum){
		switch(tabNum) {
			case 1:
				console.log("All tab pressed");
				$scope.currentTab = 1;
				break;
			case 2:
				console.log("Timed tab pressed");
				$scope.currentTab = 2;
				break;
			case 3:
				console.log("Free tab pressed");
				$scope.currentTab = 3;
				break;
		}
	};
}]);

