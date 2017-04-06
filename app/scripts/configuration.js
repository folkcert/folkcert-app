'use strict';

angular.module('ConcertApp')
  .constant('API_ENDPOINT', {
    host: 'http://local.folkcert-api.com/app_dev.php/',
    port: null,
    path: '',
    needsAuth: false,
    credential: 'f796fde1bae170ee9dcecb1c3034a62e17383c01d0776d825158763c7ff325f2'
  });
