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

    function($scope, artist)
    {
        console.log(artist);
    }
];
