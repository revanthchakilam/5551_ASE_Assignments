
var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.controller('nutrition', function($scope,$http) {
    $scope.quantity = 1;
    $scope.searchFood= function () {
        var food_name=document.getElementById("food_name").value;
        $http.get('http://localhost:8081/getdata/'+food_name).success(function(data) {
            console.log(data);

            //$scope.foodItems = {};
            //$scope.foodItems = data.search_details[0].food_nutrition;

            $scope.foodDetails = data.search_details[0];

            console.log($scope.foodDetails);

            document.getElementById('nutrition_body').style.display = 'block';
        });
    }
});