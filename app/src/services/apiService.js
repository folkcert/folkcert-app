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
            var endpoint = factory.getEndpoint(url, id, params);

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

        factory.getEndpoint = function(suffix, id, params) {
            var _api = API_ENDPOINT;
            var endpoint = _api.port ?
                (_api.host + ':' + _api.port + _api.path) :
                (_api.host + _api.path);

            endpoint += suffix;

            if (id) {
                endpoint += '/' + id;
            }

            if (params) {
                endpoint += '?';
                var paramsArray = [];
                angular.forEach(params, function(value, key) {
                    paramsArray.push(key + '=' + value);
                });
                endpoint += paramsArray.join('&');
            }
            return endpoint;
        };

        factory.getHeaders = function() {
            return {
                'x-user-token': API_ENDPOINT.credential
            };
        };

        return factory;
    }
];
