var app = angular.module('driftApp', ['ngRoute']);
var data = [
	{title: "Maroon 5 with Tove Lo & Phrases",
	date: "16 Oct",
	text: "DescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
	"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
	img: "https://rocktotick.com/wp-content/uploads/2015/02/Maroon-5-Bio.jpg"},
	{title: "Avril Lavigne: What the F**K was I thinking?",
		date: "22 Nov",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://resources1.news.com.au/images/2013/05/02/1226632/958569-avril-lavigne.jpg"},
	{title: "Kodaline: South East Asian Tour",
		date: "03 Nov",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://i.telegraph.co.uk/multimedia/archive/02473/kodaline_2473544b.jpg"},
	{title: "Jay Chou",
		date: "17 Nov",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://i1213.photobucket.com/albums/cc478/Crazy4you93/jaychou.jpg"},
	{title: "Sara Bareilles",
		date: "24 Dec",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://www.elliottbaybook.com/sites/elliottbaybook.com/files/sara-bareilles-2013-650-430.jpg"},
	{title: "Linkin Park: Rage and War",
		date: "28 Dec",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://static1.gamespot.com/uploads/original/1539/15391776/2550913-4650940812-linki.jpg"},
	{title: "Lakers Game @ McGraw Sports Stadium",
		date: "31 Dec",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://cdnstatic.visualizeus.com/thumbs/a0/44/basketball,dunk,lakers,nba-a044ccfd2cebddbafb96e6861c845fbd_h.jpg"},
	{title: "Manchester United vs. West Brom",
		date: "Old Trafford Stadium",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://static01.nyt.com/images/2011/08/24/sports/soccer/24iht-soccer24/24iht-soccer24-articleLarge-v2.jpg"},
	{title: "US Rugby Big League",
		date: "1 Jan",
		text: "DescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription" +
		"DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
		img: "http://golivesportscast.com/wp-content/uploads/2015/08/USARugby.jpg"}
];

var savedSuggestions = [];

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
	$scope.data;
	$scope.closeModal = function(){
		$scope.isModalVisible = false;
	};
	$scope.showModal = function(suggestionObj){
		$scope.data = suggestionObj;
		$scope.isModalVisible = true;
	};

	//Toggle select/unselect drift button
	var unselectedButtonUrl = "../assets/internal-modal-unclicked.png";
	var selectedButtonUrl = "../assets/internal-modal-clicked.png";
	$scope.driftSaveButtonUrl = unselectedButtonUrl;
	$scope.saveButtonClicked = function(){
		if($scope.driftSaveButtonUrl !== selectedButtonUrl) {
			//Save event
			$scope.driftSaveButtonUrl = selectedButtonUrl;
			$scope.data['isSaved'] = true;
			//Add to saved array
			savedSuggestions.push($scope.data['isSaved']);


		} else {
			//Unsave event
			$scope.driftSaveButtonUrl = unselectedButtonUrl;
			$scope.data['isSaved'] = false;
			//Removed from saved array
			savedSuggestions.filter(function(obj){
				return obj.title !== $scope.data.title;
			});
		}
	};
}]);

app.controller('SuggestionsViewController', ['$scope', function($scope){
	$scope.header = "Suggestions View";
	$scope.cities = ['NY', 'SF', 'LA', 'LV'];
	$scope.suggestions = data;
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

app.controller("ItemCtrl", function ($scope, $http) {
	"use strict";
	$http.get("http://localhost:3000/api/events/categories")
		.success(function(response) {
			console.log(response);
		})
	$scope.categories = [
		{
			name: "Food",
			path: "../assets/Food.jpg",
			include: false
		},
		{
			name: "Live Sports",
			path: "../assets/Live Sports.jpg",
			include: false
		},
		{
			name: "Festival",
			path: "../assets/Festival.jpg",
			include: false
		},
		{
			name: "Outdoors & Nature",
			path: "../assets/Outdoors & Nature.jpg",
			include: false
		},
		{
			name: "Concerts",
			path: "../assets/Concerts.jpg",
			include: false
		},
		{
			name: "Arts & Architecture",
			path: "../assets/Arts & Architecture.jpg",
			include: false
		},
		{
			name: "Summits",
			path: "../assets/Summits.jpg",
			include: false
		},
		{
			name: "Culture & History",
			path: "../assets/Culture & History.jpg",
			include: false
		},
		{
			name: "Movie & Photography",
			path: "../assets/Movie & Photography.jpg",
			include: false
		},
		{
			name: "Theatre & Comedy",
			path: "../assets/Theatre & Comedy.jpg",
			include: false
		},
		{
			name: "Volunteering",
			path: "../assets/Volunteering.jpg",
			include: false
		},
		{
			name: "Walking Tours",
			path: "../assets/Walking Tours.jpg",
			include: false
		}
	];

	$scope.selected_cats = function(index) {
		if($scope.categories[index].include === false){
			$scope.categories[index].include = true;
		}
		else{
			$scope.categories[index].include = false;
		};
	};

	$scope.next_button_click = function() {
		$http.get("http://localhost:3000/api/events/categories")
			.success(function(response) {
				console.log(response);
			})
	};

});

app.controller('cityController', ['$scope', function ($scope) {
	$scope.cities = [
		/*		{ name: "San Francisco", num:"16 Events", pricing: "Flights from $47", img:"SF" }, */
		{ name: "New York", num:"8 Events",  pricing: "Flights from $247", img:"NYC"},
		/*	{ name: "Chicago", num:"9 Events",  pricing: "Flights from $156", img:""}, */
		{ name: "Los Angeles", num:"6 Events",  pricing: "Flights from $84", img:"LA"},
		{ name: "Miami", num:"12 Events",  pricing: "Flights from $322", img:"M"},
		{ name: "Vegas", num:"10 Events",  pricing: "Flights from $154", img:"V"},
		{ name: "Houston", num:"5 Events",  pricing: "Flights from $98", img:"H"}
		/*	{ name: "Atlantic City", num:"7 Events",  pricing: "Flights from $376", img:""} */
	];
}]);