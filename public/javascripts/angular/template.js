/*jslint white:true */
/*global angular */

var app = angular.module("myApp", []);
app.controller("cityCtrl", function ($scope) {
		"use strict";
	$scope.cities = [
/*		{ name: "San Francisco", num:"16 Events", pricing: "Flights from $47", img:"SF" }, */
		{ name: "New York", num:"8 Events",  pricing: "Flights from $247", img:"NYC"},
	/*	{ name: "Chicago", num:"9 Events",  pricing: "Flights from $156", img:""}, */
		{ name: "Los Angeles", num:"6 Events",  pricing: "Flights from $84", img:"LA"}, 
		{ name: "Miami", num:"12 Events",  pricing: "Flights from $322", img:"M"},
		{ name: "Vegas", num:"10 Events",  pricing: "Flights from $154", img:"V"},
		{ name: "Houston", num:"5 Events",  pricing: "Flights from $98", img:"H"},
	/*	{ name: "Atlantic City", num:"7 Events",  pricing: "Flights from $376", img:""} */
	];
});