'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:LinkTypeFactory
 * @description
 * # LinkTypeFactory
 * LinkType Entity
 */
module.exports = [
  function() {
 
    /**
     * Constructor, with class name
     */
    function LinkType(id, name, logo, baseUrl) {
      this.id = id;
      this.name = name;
      this.logo = logo;
      this.baseUrl = baseUrl;
    }
   
    /**
     * Public method, assigned to prototype
     */
    LinkType.prototype.getName = function() {
      return this.name;
    };

    LinkType.prototype.getLogo = function() {
      return this.logo;
    };

    LinkType.prototype.getBaseUrl = function() {
      return this.baseUrl;
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    LinkType.build = function(data) {
      return new LinkType(
        data.id,
        data.name,
        data.logo,
        data.baseUrl
      );
    };

    LinkType.apiResponseTransformer = function(responseData) {
      if (angular.isArray(responseData)) {
        return responseData
          .map(LinkType.build)
          .filter(Boolean);
      }
      return LinkType.build(responseData);
    };
   
    /**
     * Return the constructor function
     */
    return LinkType;
  }
];