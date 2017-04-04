'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:LinkFactory
 * @description
 * # LinkFactory
 * Link Entity
 */
module.exports = [
  'LinkType',
  function(LinkType) {
 
    /**
     * Constructor, with class name
     */
    function Link(id, linkCode, thumbnail, linkType) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.linkCode = linkCode;
      this.linkType = linkType;
      this.thumbnail = thumbnail;
    }
   
    /**
     * Public method, assigned to prototype
     */
    Link.prototype.getLinkCode = function() {
      return this.linkCode;
    };

    Link.prototype.getLinkType = function() {
      return this.linkType;
    };

    Link.prototype.getThumbnail = function() {
      return this.thumbnail;
    };

    Link.prototype.getUrl = function() {
      return this.getLinkType().getBaseUrl() + this.getLinkCode();
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Link.build = function(data) {
      return new Link(
        data.id,
        data.linkCode,
        data.thumbnail,
        LinkType.build(data.linkType)
      );
    };

    Link.apiResponseTransformer = function(responseData) {
      var data = responseData.data;
      if (angular.isArray(data)) {
        return data
          .map(Link.build)
          .filter(Boolean);
      }
      return Link.build(data);
    };
   
    /**
     * Return the constructor function
     */
    return Link;
  }
];