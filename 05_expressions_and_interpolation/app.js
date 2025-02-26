(function() {
    'use strict';

    angular
        .module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Dennis";
        $scope.stateOfBeing = "hungry";
        $scope.sayMessage = function() {
            return 'Dennis likes to eat healthy snacks at night!';
        };
        $scope.feedDennis = function() {
            $scope.stateOfBeing = 'fed';
        };
    }
})();