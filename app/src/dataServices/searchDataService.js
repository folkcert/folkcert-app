'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.service:SearchDataService
 * @description
 * # SearchDataService
 * Service with the responsibility of comunicating with folkcert-api and manage a Search.
 */
module.exports = [
    'ApiService',
    'Search',

    function(ApiService, Search)
    {
        var search = function(keyword) {
            var filters = {
                'filters[keyword]': keyword
            };

            return ApiService.executeGet('search', null, filters).then(Search.apiResponseTransformer)
        };

        return {
            search: search
        };
    }
];
