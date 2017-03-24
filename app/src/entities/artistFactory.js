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
    function Artist(id, name, picture, relatedNames) {
      this.id = id;
      this.name = name;
      this.picture = picture;
      this.relatedNames = relatedNames;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Artist.prototype.getName = function() {
      return this.name;
    };

    Artist.prototype.getPicture = function() {
      return this.picture;
    };

    Artist.prototype.getRelatedNames = function() {
      return this.relatedNames;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Artist.build = function(data) {
      return new Artist(
        data.id,
        data.name,
        data.picture,
        data.relatedNames
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