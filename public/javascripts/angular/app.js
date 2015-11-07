var app = angular.module('driftApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
   $routeProvider
      .when('/', {
         templateUrl : '/views/index',
         controller  : 'mainController'
      })
      .otherwise({redirectTo: "/"});
}])

app.controller('mainController', ['$scope', 'GetResult', function($scope,GetResult){


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
}])
