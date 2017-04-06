'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:ArtistController
 * @description
 * # ArtistController
 */
module.exports = [
    '$scope',
    'artist',
    'concerts',

    function($scope, artist, concerts)
    {
        $scope.artist = artist;
        $scope.concerts = concerts;
    }
];
