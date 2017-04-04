'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.directive:SearchResultArtistDirective
 * @description
 * # SearchResultArtist
 * Directive to show an artist as a result of a search
 */
module.exports = [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/search-result-artist.html',
            scope: {
                artist: '='
            },
        };
    }
];