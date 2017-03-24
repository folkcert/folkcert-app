'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    'ConcertDataService',

    function($scope, $concertDataService)
    {
        $scope.randomVar = 'Hello World';
        var concerts = $concertDataService.getAll();
        console.log('relol');
        concerts.then(function(data) {
            console.log(data)
        });
    }
];
