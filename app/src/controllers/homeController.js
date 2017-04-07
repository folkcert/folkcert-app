'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:HomeController
 * @description
 * # HomeController
 */
module.exports = [
    '$rootScope',
    '$scope',
    '$timeout',
    'SearchDataService',

    function($rootScope, $scope, $timeout, $searchDataService)
    {
        $scope.searchKeyword = $rootScope.searchKeyword || '';
        $scope.searchResults = $rootScope.searchResults || null;
        $scope.showLoading = false;

        var searchDelayTimeout;

        $scope.$watch('searchKeyword', function (val, oldval) {
            if (val === oldval) {
                return;
            }
            if (searchDelayTimeout) {
                $timeout.cancel(searchDelayTimeout);
            }

            searchDelayTimeout = $timeout(function() {
                $scope.showLoading = true;
                $scope.executeSearch();
            }, 500);
        });

        $scope.executeSearch = function() {
            if ($scope.searchKeyword.length >= 3) {
                $scope.searchResults = [];
                $searchDataService.search($scope.searchKeyword).then(function(data) {
                    $scope.searchResults = data;
                    $scope.showLoading = false;

                    $rootScope.searchKeyword = $scope.searchKeyword;
                    $rootScope.searchResults = $scope.searchResults;
                });
            } else {
                $scope.searchResults = null;
            }
        };
    }
];
