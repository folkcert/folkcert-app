'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:ArtistFactory
 * @description
 * # ArtistFactory
 * Artist Entity
 */
module.exports = [
  function() {
 
    /**
     * Constructor, with class name
     */
    function Artist(id, name) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.name = name;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Artist.prototype.getName = function() {
      return this.name;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Artist.build = function(data) {
      return new Artist(
        data.id,
        data.name
      );
    };

    Artist.apiResponseTransformer = function(responseData) {
      if (angular.isArray(responseData)) {
        return responseData
          .map(Artist.build)
          .filter(Boolean);
      }
      return Artist.build(responseData);
    };
   
    /**
     * Return the constructor function
     */
    return Artist;
  }
];