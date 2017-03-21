'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:AlbumFactory
 * @description
 * # AlbumFactory
 * Album Entity
 */
module.exports = [
  'Artist',
  function(Artist) {
 
    /**
     * Constructor, with class name
     */
    function Album(id, name, year, imageUrl, artist) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.name = name;
      this.year = year;
      this.imageUrl = imageUrl;
      this.artist = artist;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Album.prototype.getName = function() {
      return this.name;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Album.build = function(data) {
      return new Album(
        data.id,
        data.name,
        data.year,
        data.imageUrl,
        Artist.build(data.artist)
      );
    };

    Album.apiResponseTransformer = function(responseData) {
      if (angular.isArray(responseData)) {
        return responseData
          .map(Album.build)
          .filter(Boolean);
      }
      return Album.build(responseData);
    };
   
    /**
     * Return the constructor function
     */
    return Album;
  }
];