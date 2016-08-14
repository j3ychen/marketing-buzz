var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
//    $scope.w1 = w1;
    $scope.generate = function(x) {
    	$scope.x = x;
    	makePhrase();
    }
});