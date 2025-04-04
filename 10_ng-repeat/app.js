(function() {
    'use strict';

    var shoppingList1 = [
        'Milk', 'Donuts', 'Cookies', 'Chocolate', 'Peanut Butter', 'Pepto Bismol', 'Pepto Bismol (Chocolate Flavor)',
        'Pepto Bismol (Cookie Flavor)'
    ];

    var shoppingList2 = [
        {
            name: 'Milk', 
            quantity: '2'
        },
        {
            name: 'Donuts', 
            quantity: '200'
        },
        {
            name: 'Cookies', 
            quantity: '300'
        },
        {
            name: 'Chocolate', 
            quantity: '5'
        }
    ];

    angular
        .module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function() {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        };

        $scope.removeFromList = function(index) {
            var item = $scope.shoppingList2.splice(index, 1)[0];
            console.log('Removed item: ', item);
        };
    }
})();