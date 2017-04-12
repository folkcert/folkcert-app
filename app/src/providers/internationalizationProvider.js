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
            APP_SLOGAN: 'All the concerts you want to watch, for free',
            APP_MENU_SEARCH: 'Search',
            APP_MENU_ABOUT: 'About',
            APP_SEARCH_PLACEHOLDER: 'Enter the name of the concert or the artist',
            APP_SEARCH_RESULTS_CONCERTS: 'Concerts',
            APP_SEARCH_RESULTS_ARTISTS: 'Artists',
            APP_ARTIST_CONCERTS_SUFFIX: 'Concerts'
        });

        $translateProvider.translations('es', {
            APP_TITLE: 'Beetho',
            APP_SLOGAN: 'Todos los conciertos que quieras ver, gratis',
            APP_MENU_SEARCH: 'Buscar',
            APP_MENU_ABOUT: 'Beetho',
            APP_SEARCH_PLACEHOLDER: 'Escribe el nombre del artista o concierto',
            APP_SEARCH_RESULTS_CONCERTS: 'Conciertos',
            APP_SEARCH_RESULTS_ARTISTS: 'Artistas',
            APP_ARTIST_CONCERTS_SUFFIX: 'Conciertos',
        });

        var currentLanguage = navigator.languages
            ? navigator.languages[0]
            : (navigator.language || navigator.userLanguage);

        var preferredLanguage = 'en';

        if (currentLanguage.indexOf('es') >= 0) {
            preferredLanguage = 'es';
        }

        $translateProvider.preferredLanguage(preferredLanguage);

        $translateProvider.useSanitizeValueStrategy('escape');
    }
];