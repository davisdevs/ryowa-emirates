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
		{ name: "Arts & Architecture" },
		{ name: "Food" },
		{ name: "Culture" },
		{ name: "Fashion"},
		{ name: "Technology"},
		{ name: "how are you"}
    ];
});

              
