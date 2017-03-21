'use strict';

/**
 * @ngdoc service
 * @name ConcertApp.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /scripts/configuration.js
 *
 */
module.exports = [
    '$http',
    'API_ENDPOINT',

    function($http, API_ENDPOINT)
    {
        /* Return object */
        var factory = {};

        factory.executeGet = function(url, id, params) {
            var endpoint = factory.getEndpoint(url);
            if (id) {
                endpoint += '/' + id;
            }
            var req = {
                method: 'GET',
                url: endpoint,
                cache: false,
                headers: factory.getHeaders(),
                data: {}
            };

            return $http(req);
        };

        factory.executePost = function(url, data) {
            var endpoint = factory.getEndpoint(url);
            var req = {
                method: 'POST',
                url: endpoint,
                headers: factory.getHeaders(),
                data: data
            };

            return $http(req);
        };

        factory.getEndpoint = function(suffix) {
            var _api = API_ENDPOINT;
            var endpoint = _api.port ?
                (_api.host + ':' + _api.port + _api.path) :
                (_api.host + _api.path);

            return endpoint + suffix;
        };

        factory.getHeaders = function() {
            return {
                'x-app-credentials': API_ENDPOINT.credential
            };
        };

        return factory;
    }
];
