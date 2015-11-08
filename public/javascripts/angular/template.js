/*jslint white:true */
/*global angular */

var app = angular.module("myApp", []);
app.controller("cityCtrl", function ($scope) {
		"use strict";
	$scope.cities = [
		{ name: "San Francisco"},
		{ name: "New York"},
		{ name: "Chicago"},
		{ name: "Salt Lake City"},
		{ name: "Miami"}
	];
});