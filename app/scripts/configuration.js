'use strict';

/**
 * @ngdoc constant
 * @name ConcertApp.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 * Is used inside /services/ApiService.js to generate correct endpoint dynamically
 */


angular.module('ConcertApp')

  // development
  .constant('API_ENDPOINT', {
    host: 'http://local.folkcert-api.com/app_dev.php/',
    port: null,
    path: '',
    needsAuth: false,
    credential: 'notTheRealOne'
  });


  // live example with HTTP Basic Auth
  /*
  .constant('API_ENDPOINT', {
    host: 'http://yourserver.com',
    path: '/api/v2',
    needsAuth: true,
    username: 'whatever',
    password: 'foobar'
  });
  */

