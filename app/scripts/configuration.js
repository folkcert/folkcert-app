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
    host: 'http://ec2-13-55-149-115.ap-southeast-2.compute.amazonaws.com/',
    port: null,
    path: '',
    needsAuth: false,
    credential: 'G9jRPRX/0hJ8qCMXxIvQYJoamoOFjyJsUEWef4cAqYZ6SQ+t4M4pjN7RM/lmzpYo0dfSTbOeQALr6tHU/DDawFwJF/RsmyttcKTnqrJPPui1t/8hEoUMeWSstIMQGV7dpkU8xw=='
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

