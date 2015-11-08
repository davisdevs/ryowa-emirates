var app = angular.module("dataView",[]);
app.controller("itemCtrl", function ($scope) {
               $scope.categories = [
                   { name: "Food" },
                   { name: "Concerts" },
                   { name: "Performing Arts"},
                   { name: "Fashion" },
                   { name: "Sports" },
                   { name: "Technology" },
                   { name: "Outdoors" },            
               ];
           })
              
