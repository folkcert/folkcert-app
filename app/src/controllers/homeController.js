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
        $scope.showLoading = false;

        var searchDelayTimeout;

        $scope.$watch('searchKeyword', function (val) {

            if (searchDelayTimeout) {
                $timeout.cancel(searchDelayTimeout)
            }

            searchDelayTimeout = $timeout(function() {
                $scope.showLoading = true;
                $scope.executeSearch();
            }, 500);
        })

        $scope.executeSearch = function() {
            if ($scope.searchKeyword.length >= 3) {
                $scope.searchResults = [];
                $searchDataService.search($scope.searchKeyword).then(function(data) {
                    $scope.searchResults = data;
                    $scope.showLoading = false;
                });
            } else {
                $scope.searchResults = null;
            }
        }
    }
];
