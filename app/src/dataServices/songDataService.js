'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.service:SongService
 * @description
 * # SongService
 * Service with the responsibility of comunicating with Concert-rest and manage the Song entity.
 */
module.exports = [
    'ApiService',
    'Song',

    function(ApiService, Song)
    {
        var getAll = function() {
            return ApiService.executeGet('song').then(Song.apiResponseTransformer);
        };

        var getOne = function(id) {
            return ApiService.executeGet('song', id).then(Song.apiResponseTransformer)
        };

        return {
            getAll: getAll,
            getOne: getOne
        };
    }
];
