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
            APP_ARTIST_CONCERTS_SUFFIX: 'Concerts',

            APP_ABOUT_1_TITLE: 'The APP',
            APP_ABOUT_1_TEXT: 'Beetho is a free-for-all application, that works as a hub for all the media distributed for free in the internet. Beetho does not own any of the videos published, and don\'t have authority over its availability. All the media used can be found in the internet as free material.',

            APP_ABOUT_2_TITLE: 'Open Source',
            APP_ABOUT_2_TEXT: 'Beetho was developed using open source technlogies, and its code can be found on Github\'s repository "Folkcert". If you are a developer, feel free to search through the code, and if you find any security weakness, I would appreciate to report it, or if you are brave enough you can fork it and make your fix (don\'t be an asshole, don\'t break it).',

            APP_ABOUT_3_TITLE: 'No Ads',
            APP_ABOUT_3_TEXT: 'Our objective is to survive without annoying ads, but as you may know, there are bills to pay when maintaining a website. We will really appreciate your help with a donation if you think is worth enough.',

            APP_ABOUT_4_TITLE: 'API',
            APP_ABOUT_4_TEXT: 'We have a public API with the data used by Beetho, there is a wiki on the Github\'s repository in which you can dig more. Please write me if you think this API will be helpful for your project, we can get to an agreement and you will be able to use it for your own purposes.',

            APP_ABOUT_5_TITLE: 'Images',
            APP_ABOUT_5_TEXT: 'All the images of the Artists used in the website are under the Creative Commons Licence, free to reuse. I do not own them, and you can get to their original author by checking the URL of each image.',

            APP_ABOUT_6_TITLE: 'Contact',
            APP_ABOUT_6_TEXT: 'If there\'s anything else you would like to know, please do not hesitate on writing an e-mail to me to my personal address:',

            APP_ABOUT_7_TITLE: 'List of thanks',
            APP_ABOUT_7_1_TEXT: 'HTML5 UP, for the template used for the website. Give them a visit, they have cool resources!',
            APP_ABOUT_7_2_TEXT: 'GitHub, for the free space.',
            APP_ABOUT_7_3_TEXT: 'Youtube, Vimeo, DailyMotion, for the free sharing of the videos.',
            APP_ABOUT_7_4_TEXT: 'To the guys that made the development easier sharing his own code.',

            APP_ABOUT_8_TITLE: 'Useful Links',
            APP_ABOUT_8_1_TEXT: 'Folkcert Repository',
            APP_ABOUT_8_2_TEXT: 'HTML5 UP',
            APP_ABOUT_8_3_TEXT: 'Angular Vimeo-embed plugin',
            APP_ABOUT_8_4_TEXT: 'Angular Youtube-embed plugin',
            APP_ABOUT_8_5_TEXT: 'PHP Search Algorithm',
            APP_ABOUT_8_6_TEXT: 'Creative Commons',
            APP_ABOUT_8_7_TEXT: 'Favicon Generator'

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

            APP_ABOUT_1_TITLE: 'Acerca de',
            APP_ABOUT_1_TEXT: 'Beetho es una aplicacion gratuita que funciona como una libreria de todos los conciertos gratuitamente distrubuidos en Internet. Beetho no almacena, produce, crea o distribuye ninguno de los videos publicados, y no posee autoria sobre los mismos. Todos los videos pueden ser encontrados en internet como material gratuito.',

            APP_ABOUT_2_TITLE: 'Open Source',
            APP_ABOUT_2_TEXT: 'Beetho fue desarrollado usando herramientas libres, y su codigo fuente puede ser encontrado en el repositorio de GitHub "Folkcert". Si eres un desarrollador, puedes revisar el codigo fuente, y si encuentras alguna debilidad u oportunidad de mejora, me encantaria que te sientas libre de hacer Fork y proponer tus cambios. Por favor, no lo rompas!',

            APP_ABOUT_3_TITLE: 'Sin publicidad',
            APP_ABOUT_3_TEXT: 'Our objective is to survive without annoying ads, but as you may know, there are bills to pay when maintaining a website. We will really appreciate your help with a donation if you think is worth enough.',
            APP_ABOUT_3_TEXT: 'Nuestro objetivo es sobrevivir en la red sin publicidades molestas, pero como ya sabes, hay cuentas que pagar cuando se mantiene un sitio web. Apreciaremos tu ayuda con una donacion y si consideras que vale la pena.',

            APP_ABOUT_4_TITLE: 'API',
            APP_ABOUT_4_TEXT: 'Disponemos de una API publica con la informacion utilizada en Beetho. Existe uan wiki en el repositorio de GitHub en la que puedes encontrar mas informacion. No dudes en escribirme si crees que la API puede serte de utilidad y podemos llegar a un acuerdo.',

            APP_ABOUT_5_TITLE: 'Imagenes',
            APP_ABOUT_5_TEXT: 'Todas las imagenes de los Artistas usadas en este sitio estan bajo la licencia Creative Commons, de gratis reutilizacions. Yo no soy dueño de ellas, y puedes encontrar su autor original checkeando la URL de las mismas.',

            APP_ABOUT_6_TITLE: 'Contacto',
            APP_ABOUT_6_TEXT: 'Si hay algo mas que te gustaria saber, no dudes en escribirme a mi casilla personal:',

            APP_ABOUT_7_TITLE: 'Agradecimientos',
            APP_ABOUT_7_1_TEXT: 'HTML5 UP, por el template utilizado en Beetho. Visita su sitio, tienen recursos muy buenos!',
            APP_ABOUT_7_2_TEXT: 'GitHub, for el espacio.',
            APP_ABOUT_7_3_TEXT: 'Youtube, Vimeo, DailyMotion, por compartir gratuitamente los videos.',
            APP_ABOUT_7_4_TEXT: 'Para todos los desarrolladores que hicieron posible esto compartiendo su codigo.',

            APP_ABOUT_8_TITLE: 'Links utiles',
            APP_ABOUT_8_1_TEXT: 'Repositorio de Folkcert',
            APP_ABOUT_8_2_TEXT: 'HTML5 UP',
            APP_ABOUT_8_3_TEXT: 'Angular Vimeo-embed plugin',
            APP_ABOUT_8_4_TEXT: 'Angular Youtube-embed plugin',
            APP_ABOUT_8_5_TEXT: 'PHP Search Algorithm',
            APP_ABOUT_8_6_TEXT: 'Creative Commons',
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