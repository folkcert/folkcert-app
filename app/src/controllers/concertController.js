'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.controller:ConcertController
 * @description
 * # ConcertController
 */
module.exports = [
    '$scope',
    '$sce',
    'concert',

    function($scope, $sce, concert)
    {
        $scope.concert = concert;
        $scope.currentLink = $scope.concert.getLinks()[0];

        $scope.videoTemplate = 'templates/views/partials/embed-' +
            $scope.currentLink.getLinkType().getName().toLowerCase() +
            '.html';
    }
];
