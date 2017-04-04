'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.directive:SearchResultConcertDirective
 * @description
 * # SearchResultConcert
 * Directive to show a concert as a result of a search
 */
module.exports = [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/search-result-concert.html',
            scope: {
                concert: '='
            },
        };
    }
];