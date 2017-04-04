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

angular.module( 'ConcertApp', [
  'ngResource',
  'pascalprecht.translate',
  'youtube-embed',
  'ui.router'
] )
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
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/views/home.html',
        controller: 'HomeController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      ;

    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  }
] )

/* Controllers */
.controller('HomeController',            require('./controllers/homeController'))

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
.factory('SearchDataService',            require('./dataServices/searchDataService'))

/* Directives */
.directive('searchResultConcert',        require('./directives/searchResultConcertDirective'))
.directive('searchResultArtist',         require('./directives/searchResultArtistDirective'))

/* Configs */
.config(require('./providers/internationalizationProvider'))
;
