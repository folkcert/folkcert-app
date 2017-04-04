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
            APP_TITLE: 'Beetho',
            APP_SLOGAN: 'All the concerts you want to listen, for free',
        });

        $translateProvider.translations('es', {
            APP_TITLE: 'Folkcert',
        });

        $translateProvider.preferredLanguage('en');

        $translateProvider.useSanitizeValueStrategy('escape');
    }
];