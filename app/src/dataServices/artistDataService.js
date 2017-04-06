'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.service:ArtistDataService
 * @description
 * # ArtistDataService
 * Service with the responsibility of comunicating with folkcert-api and manage the Concert entity.
 */
module.exports = [
    'ApiService',
    'Artist',

    function(ApiService, Artist)
    {
        var getAll = function() {
            return ApiService.executeGet('artist').then(Artist.apiResponseTransformer);
        };

        var getOne = function(id) {
            return ApiService.executeGet('artist', id).then(Artist.apiResponseTransformer);
        };

        return {
            getAll: getAll,
            getOne: getOne
        };
    }
];
