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
    function Link(id, linkCode, linkType) {
      // Public properties, assigned to the instance ('this')
      this.id = id;
      this.linkCode = linkCode;
      this.linkType = linkType;
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

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Link.build = function(data) {
      return new Link(
        data.id,
        data.linkCode,
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