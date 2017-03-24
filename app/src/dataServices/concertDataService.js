'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.service:ConcertDataService
 * @description
 * # ConcertDataService
 * Service with the responsibility of comunicating with folkcert-api and manage the Concert entity.
 */
module.exports = [
    'ApiService',
    'Concert',

    function(ApiService, Concert)
    {
        var getAll = function() {
            return ApiService.executeGet('concert').then(Concert.apiResponseTransformer);
        };

        var getOne = function(id) {
            return ApiService.executeGet('concert', id).then(Concert.apiResponseTransformer)
        };

        return {
            getAll: getAll,
            getOne: getOne
        };
    }
];
