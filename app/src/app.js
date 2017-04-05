'use strict';

/**
 * @ngdoc overview
 * @name ConcertApp
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

// Example to require lodash
// This is resolved and bundled by browserify
//
// var _ = require( 'lodash' );

angular.module('ConcertApp', [
  'ngResource',
  'pascalprecht.translate',
  'youtube-embed',
  'ui.router',
  'vimeoEmbed'
])
.config( [
  '$httpProvider',
  '$stateProvider',
  '$urlRouterProvider',

  function($httpProvider, $stateProvider, $urlRouterProvider)
  {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/views/home.html',
        controller: 'HomeController'
      })
      .state('concert', {
        url: '/concert/:concertId',
        templateUrl: 'templates/views/concert.html',
        controller: 'ConcertController',
        resolve: {
            concert: ['$stateParams', 'ConcertDataService', function($stateParams, ConcertDataService) {
              return ConcertDataService.getOne($stateParams.concertId);
            }]
        }
      })
      .state('artist', {
        url: '/artist/:artistId',
        templateUrl: 'templates/views/artist.html',
        controller: 'ArtistController',
        resolve: {
            concert: ['$stateParams', 'ArtistDataService', function($stateParams, ArtistDataService) {
              return ArtistDataService.getOne($stateParams.artistId);
            }]
        }
      })
      ;

    $urlRouterProvider.otherwise('/home');
  }
])

/* Controllers */
.controller('HomeController',            require('./controllers/homeController'))
.controller('ConcertController',         require('./controllers/concertController'))
.controller('ArtistController',          require('./controllers/artistController'))

/* Services */
.factory('ApiService',                   require('./services/apiService'))

/* Entities */
.factory('Artist',                       require('./entities/artistFactory'))
.factory('Genre',                        require('./entities/genreFactory'))
.factory('LinkType',                     require('./entities/linkTypeFactory'))
.factory('Link',                         require('./entities/linkFactory'))
.factory('Concert',                      require('./entities/concertFactory'))
.factory('Search',                       require('./entities/searchFactory'))

/* Data Services */
.factory('ConcertDataService',           require('./dataServices/concertDataService'))
.factory('ArtistDataService',            require('./dataServices/artistDataService'))
.factory('SearchDataService',            require('./dataServices/searchDataService'))

/* Directives */
.directive('searchResultConcert',        require('./directives/searchResultConcertDirective'))
.directive('searchResultArtist',         require('./directives/searchResultArtistDirective'))

/* Configs */
.config(require('./providers/internationalizationProvider'))
;
