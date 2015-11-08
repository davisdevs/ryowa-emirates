/*jslint white:true */
/*global angular */

var app = angular.module("myApp", []);
app.controller("ItemCtrl", function ($scope, $http) {
	"use strict";
	$http.get("http://localhost:3000/api/events/categories")
	.success(function(response) {
		console.log(response);
	})
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
			name: "Outdoors & Nature",
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

              
