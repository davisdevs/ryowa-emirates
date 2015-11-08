/*jslint white:true */
/*global angular */

var app = angular.module("myApp", []);
app.controller("ItemCtrl", function ($scope) {
	"use strict";
    $scope.categories = [
		{ name: "Arts & Architecture" },
		{ name: "Food" },
		{ name: "Culture" },
		{ name: "Fashion"},
		{ name: "Technology"},
		{ name: "how are you"}
    ];
});

              
