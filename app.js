(function() {
    'use strict';

    angular
        .module('myFirstApp', [])
        .controller('MyFirstController', function($scope) {
            $scope.name = "Yeah boi!";
            $scope.sayHello = function() {
                return "Hello boi!";
            };
        });

})();