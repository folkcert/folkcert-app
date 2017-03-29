'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:GenreFactory
 * @description
 * # GenreFactory
 * Genre Entity
 */
module.exports = [
  function() {
 
    /**
     * Constructor, with class name
     */
    function Genre(id, name, logo) {
      this.id = id;
      this.name = name;
      this.logo = logo;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Genre.prototype.getName = function() {
      return this.name;
    };

    Genre.prototype.getLogo = function() {
      return this.logo;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Genre.build = function(data) {
      return new Genre(
        data.id,
        data.name,
        data.logo
      );
    };

    Genre.apiResponseTransformer = function(responseData) {
      if (angular.isArray(responseData)) {
        return responseData
          .map(Genre.build)
          .filter(Boolean);
      }
      return Genre.build(responseData);
    };
   
    /**
     * Return the constructor function
     */
    return Genre;
  }
];