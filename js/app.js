var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.w1 = document.getElementById("w1");
    $scope.w2 = document.getElementById("w2");
    $scope.w3 = document.getElementById("w3");
    $scope.w4 = document.getElementById("w4");
    
    $scope.generate = function(x) {
    	if (x=='w3') {
    		keepW3();
    	} else if (x=='w2') {
    		keepW2();
    	} else {
    		keepW4();
    	}
    }
});