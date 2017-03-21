'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'ApiService',

    function($scope, $apiService)
    {
        $scope.randomVar = 'Hello World';
        console.log($apiService.executeGet('search', null, {'filters[keyword]': 'Patricio Rey'}));
    }
];
