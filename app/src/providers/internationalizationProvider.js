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
            APP_MENU_SEARCH: 'Search',
            APP_MENU_ABOUT: 'About',
        });

        $translateProvider.translations('es', {
            APP_TITLE: 'Beetho',
        });

        $translateProvider.preferredLanguage('en');

        $translateProvider.useSanitizeValueStrategy('escape');
    }
];