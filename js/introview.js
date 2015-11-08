/*jslint white:true */
/*global angular */

var app = angular.module("myApp", []);

app.controller("ItemCtrl", ["$scope", "$http"], function ($scope, $http) {
	"use strict";
	$scope.getCategories = function()
	{
		// Simple GET request example:
		$http({
		method: 'GET',
		url: 'http://localhost:3000/events/categories'
		}).then(function successCallback(response) {
			//console.log(response);
			// this callback will be called asynchronously
			// when the response is available
			}, function errorCallback(response) {
			// console.log(response);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};
	
    $scope.categories = [
		{ 
			name: "Food",
			path: "images/Food.jpg",
			include: false
		},
		{ 
			name: "Live Sports",
			path: "images/Live Sports.jpg",
			include: false
		},
		{ 
			name: "Festival",
			path: "images/Festival.jpg",
			include: false
		},
		{ 
			name: "Outdoor & Nature",
			path: "images/Outdoors & Nature.jpg",
			include: false
		},
		{ 
			name: "Concerts",
			path: "images/Concerts.jpg",
			include: false
		},
		{ 
			name: "Arts & Architecture",
			path: "images/Arts & Architecture.jpg",
			include: false
		},
		{ 
			name: "Summits",
			path: "images/Summits.jpg",
			include: false
		},
		{ 
			name: "Culture & History",
			path: "images/Culture & History.jpg",
			include: false
		},
		{ 
			name: "Movie & Photography",
			path: "images/Movie & Photography.jpg",
			include: false
		},
		{ 
			name: "Theatre & Comedy",
			path: "images/Theatre & Comedy.jpg",
			include: false
		},
		{ 
			name: "Volunteering",
			path: "images/Volunteering.jpg",
			include: false
		},
		{ 
			name: "Walking Tours",
			path: "images/Walking Tours.jpg",
			include: false
		}
    ];

    $scope.clicked = function(index) {
    	if($scope.categories[index].include === false){
    		$scope.categories[index].include = true;
    	}
    	else{
    		$scope.categories[index].include = false;    		
    	};
    };

});

              
