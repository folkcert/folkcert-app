'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$scope',
    '$timeout',
    'SearchDataService',

    function($scope, $timeout, $searchDataService)
    {
        $scope.searchKeyword = '';
        $scope.searchResults = null;

        var searchDelayTimeout;

        $scope.$watch('searchKeyword', function (val) {

            if (searchDelayTimeout) {
                $timeout.cancel(searchDelayTimeout)
            }

            searchDelayTimeout = $timeout(function() {
                $scope.executeSearch();
            }, 500);
        })

        $scope.executeSearch = function() {
            $searchDataService.search($scope.searchKeyword).then(function(data) {
                $scope.searchResults = data;
            });
        }
    }
];
