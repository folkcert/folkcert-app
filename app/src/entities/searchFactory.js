'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:SearchFactory
 * @description
 * # SearchFactory
 * Search Entity
 */
module.exports = [
  'Concert',
  'Artist',
  function(Concert, Artist) {
 
    /**
     * Constructor, with class name
     */
    function Search(artists, concerts) {
      // Public properties, assigned to the instance ('this')
      this.artists = {
        count: artists.count,
        data: artists.data
      };
      this.concerts = {
        count: concerts.count,
        data: concerts.data
      };
    }

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Search.buildConcert = function(concertData) {
      return {
        relevance: concertData.relevance,
        entry: Concert.build(concertData.entry)
      };
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Search.buildArtist = function(artistData) {
      return {
        relevance: artistData.relevance,
        entry: Artist.build(artistData.entry)
      };
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Search.build = function(artistsData, concertsData) {
      return new Search(
        artistsData,
        concertsData
      );
    };

    Search.apiResponseTransformer = function(responseData) {
      var searchData = responseData.data;

      var artistsData = {
        count: searchData.artists.count,
        data: searchData.artists.data.map(Search.buildArtist).filter(Boolean)
      };

      var concertsData = {
        count: searchData.concerts.count,
        data: searchData.concerts.data.map(Search.buildConcert).filter(Boolean)
      };

      return Search.build(artistsData, concertsData);
    };
   
    /**
     * Return the constructor function
     */
    return Search;
  }
];