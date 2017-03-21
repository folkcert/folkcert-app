'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:SongFactory
 * @description
 * # SongFactory
 * Song Entity
 */
module.exports = [
  'Album',
  function(Album) {
 
    /**
     * Constructor, with class name
     */
    function Song(id, title, duration, link, pauses, album) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.title = title;
      this.duration = duration;
      this.link = link;
      this.pauses = pauses;
      this.album = album;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Song.prototype.getTitle = function() {
      return this.title;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Song.build = function(data) {
      return new Song(
        data.id,
        data.title,
        data.duration,
        data.link,
        data.pauses || [],
        Album.build(data.album)
      );
    };

    Song.apiResponseTransformer = function(responseData) {
      var data = responseData.data;
      if (angular.isArray(data)) {
        return data
          .map(Song.build)
          .filter(Boolean);
      }
      return Song.build(data);
    };
   
    /**
     * Return the constructor function
     */
    return Song;
  }
];