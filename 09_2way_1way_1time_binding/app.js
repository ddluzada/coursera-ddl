(function() {
    'use strict';

    angular
        .module('BindingApp', [])
        .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];

    function BindingController($scope) {
        $scope.firstName = 'Dennis';
        // $scope.fullName = '';

        $scope.showNumberOfWatchers = function() {
            console.log('# of Watchers: ', $scope.$$watchersCount);
        };

        $scope.setFullName = function() {
            $scope.fullName = $scope.firstName + ' ' + 'Luzada';
        };

        $scope.logFirstName = function() {
            console.log('First name is: ', $scope.firstName);
        };

        $scope.logFullName = function() {
            console.log('Full name is: ', $scope.fullName);
        };
    }
})();