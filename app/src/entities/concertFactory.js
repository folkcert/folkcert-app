'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:ConcertFactory
 * @description
 * # ConcertFactory
 * Concert Entity
 */
module.exports = [
  'Genre',
  'Artist',
  'Link',
  function(Genre, Artist, Link) {
 
    /**
     * Constructor, with class name
     */
    function Concert(id, name, description, date, location, genre, artist, links) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.name = name;
      this.description = description;
      this.date = date;
      this.location = location;
      this.genre = genre;
      this.artist = artist;
      this.links = links;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Concert.prototype.getName = function() {
      return this.name;
    };

    Concert.prototype.getDescription = function() {
      return this.description;
    };

    Concert.prototype.getDate = function() {
      return this.date;
    };

    Concert.prototype.getLocation = function() {
      return this.location;
    };

    Concert.prototype.getGenre = function() {
      return this.genre;
    };

    Concert.prototype.getArtist = function() {
      return this.artist;
    };

    Concert.prototype.getLinks = function() {
      return this.links;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Concert.build = function(data) {
      return new Concert(
        data.id,
        data.name,
        data.description,
        data.date,
        data.location,
        Genre.build(data.genre),
        Artist.build(data.artist),
        data.links.map(Link.build).filter(Boolean)
      );
    };

    Concert.apiResponseTransformer = function(responseData) {
      var data = responseData.data;
      if (angular.isArray(data)) {
        return data
          .map(Concert.build)
          .filter(Boolean);
      }
      return Concert.build(data);
    };
   
    /**
     * Return the constructor function
     */
    return Concert;
  }
];