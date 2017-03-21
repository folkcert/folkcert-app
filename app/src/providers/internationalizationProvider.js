'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.provider:InternazionalizationProvider
 * @description
 * # InternazionalizationProvider
 */
module.exports = [
    '$translateProvider',

    function($translateProvider)
    {
        $translateProvider.translations('en', {
            APP_TITLE: 'Folkcert',
        });

        $translateProvider.translations('es', {
            APP_TITLE: 'Folkcert',
        });

        $translateProvider.preferredLanguage('en');
    }
];