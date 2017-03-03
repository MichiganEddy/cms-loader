// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Message",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Messages/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Message#greet
             * @methodOf lbServices.Message
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `msg` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `greeting` – `{string=}` -
             */
            "greet": {
              url: urlBase + "/Messages/greet",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Message#modelName
        * @propertyOf lbServices.Message
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Message`.
        */
        R.modelName = "Message";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.SiteAdmin
 * @header lbServices.SiteAdmin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SiteAdmin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "SiteAdmin",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/siteAdmins/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__findById__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__destroyById__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__updateById__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SiteAdmin.websites.findById() instead.
            "prototype$__findById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "GET",
            },

            // INTERNAL. Use SiteAdmin.websites.destroyById() instead.
            "prototype$__destroyById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SiteAdmin.websites.updateById() instead.
            "prototype$__updateById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SiteAdmin.systemAdmin() instead.
            "prototype$__get__systemAdmin": {
              url: urlBase + "/siteAdmins/:id/systemAdmin",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__get__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Queries accessTokens of siteAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/siteAdmins/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__create__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/siteAdmins/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__delete__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/siteAdmins/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$__count__accessTokens
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Counts accessTokens of siteAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/siteAdmins/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use SiteAdmin.websites() instead.
            "prototype$__get__websites": {
              isArray: true,
              url: urlBase + "/siteAdmins/:id/websites",
              method: "GET",
            },

            // INTERNAL. Use SiteAdmin.websites.create() instead.
            "prototype$__create__websites": {
              url: urlBase + "/siteAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SiteAdmin.websites.destroyAll() instead.
            "prototype$__delete__websites": {
              url: urlBase + "/siteAdmins/:id/websites",
              method: "DELETE",
            },

            // INTERNAL. Use SiteAdmin.websites.count() instead.
            "prototype$__count__websites": {
              url: urlBase + "/siteAdmins/:id/websites/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#create
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/siteAdmins",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#createMany
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/siteAdmins",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#upsert
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/siteAdmins",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#replaceOrCreate
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/siteAdmins/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#upsertWithWhere
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/siteAdmins/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#exists
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/siteAdmins/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#findById
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/siteAdmins/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#replaceById
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/siteAdmins/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#find
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/siteAdmins",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#findOne
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/siteAdmins/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#updateAll
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/siteAdmins/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#deleteById
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/siteAdmins/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#count
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/siteAdmins/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$updateAttributes
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/siteAdmins/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#createChangeStream
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/siteAdmins/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#login
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/siteAdmins/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#logout
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/siteAdmins/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#confirm
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/siteAdmins/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#resetPassword
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/siteAdmins/reset",
              method: "POST",
            },

            // INTERNAL. Use Website.siteAdmin() instead.
            "::get::Website::siteAdmin": {
              url: urlBase + "/websites/:id/siteAdmin",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.findById() instead.
            "::findById::SystemAdmin::siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.destroyById() instead.
            "::destroyById::SystemAdmin::siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.updateById() instead.
            "::updateById::SystemAdmin::siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins() instead.
            "::get::SystemAdmin::siteAdmins": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.create() instead.
            "::create::SystemAdmin::siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.createMany() instead.
            "::createMany::SystemAdmin::siteAdmins": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.destroyAll() instead.
            "::delete::SystemAdmin::siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.count() instead.
            "::count::SystemAdmin::siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#getCurrent
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/siteAdmins" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#patchOrCreate
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#updateOrCreate
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#patchOrCreateWithWhere
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#update
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#destroyById
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#removeById
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#prototype$patchAttributes
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.SiteAdmin#getCachedCurrent
         * @methodOf lbServices.SiteAdmin
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.SiteAdmin#login} or
         * {@link lbServices.SiteAdmin#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A SiteAdmin instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SiteAdmin#isAuthenticated
         * @methodOf lbServices.SiteAdmin
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SiteAdmin#getCurrentId
         * @methodOf lbServices.SiteAdmin
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.SiteAdmin#modelName
        * @propertyOf lbServices.SiteAdmin
        * @description
        * The name of the model represented by this $resource,
        * i.e. `SiteAdmin`.
        */
        R.modelName = "SiteAdmin";

    /**
     * @ngdoc object
     * @name lbServices.SiteAdmin.websites
     * @header lbServices.SiteAdmin.websites
     * @object
     * @description
     *
     * The object `SiteAdmin.websites` groups methods
     * manipulating `Website` instances related to `SiteAdmin`.
     *
     * Call {@link lbServices.SiteAdmin#websites SiteAdmin.websites()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#websites
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Queries websites of siteAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::get::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#count
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Counts websites of siteAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.websites.count = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::count::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#create
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Creates a new instance in websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.create = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::create::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#createMany
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Creates a new instance in websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.createMany = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::createMany::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#destroyAll
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Deletes all websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.websites.destroyAll = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::delete::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#destroyById
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Delete a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.websites.destroyById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::destroyById::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#findById
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Find a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.findById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::findById::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin.websites#updateById
             * @methodOf lbServices.SiteAdmin.websites
             *
             * @description
             *
             * Update a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.updateById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::updateById::SiteAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SiteAdmin#systemAdmin
             * @methodOf lbServices.SiteAdmin
             *
             * @description
             *
             * Fetches belongsTo relation systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - siteAdmin id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R.systemAdmin = function() {
          var TargetResource = $injector.get("SystemAdmin");
          var action = TargetResource["::get::SiteAdmin::systemAdmin"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Website
 * @header lbServices.Website
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Website` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Website",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/websites/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Website.siteAdmin() instead.
            "prototype$__get__siteAdmin": {
              url: urlBase + "/websites/:id/siteAdmin",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages.findById() instead.
            "prototype$__findById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages.destroyById() instead.
            "prototype$__destroyById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Website.webPages.updateById() instead.
            "prototype$__updateById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Website.systemAdmin() instead.
            "prototype$__get__systemAdmin": {
              url: urlBase + "/websites/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages() instead.
            "prototype$__get__webPages": {
              isArray: true,
              url: urlBase + "/websites/:id/webPages",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages.create() instead.
            "prototype$__create__webPages": {
              url: urlBase + "/websites/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use Website.webPages.destroyAll() instead.
            "prototype$__delete__webPages": {
              url: urlBase + "/websites/:id/webPages",
              method: "DELETE",
            },

            // INTERNAL. Use Website.webPages.count() instead.
            "prototype$__count__webPages": {
              url: urlBase + "/websites/:id/webPages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#create
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/websites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#createMany
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/websites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#upsert
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/websites",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#replaceOrCreate
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/websites/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#upsertWithWhere
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/websites/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#exists
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/websites/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#findById
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/websites/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#replaceById
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/websites/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#find
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/websites",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#findOne
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/websites/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#updateAll
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/websites/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#deleteById
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/websites/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#count
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/websites/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#prototype$updateAttributes
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/websites/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Website#createChangeStream
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/websites/change-stream",
              method: "POST",
            },

            // INTERNAL. Use SiteAdmin.websites.findById() instead.
            "::findById::SiteAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "GET",
            },

            // INTERNAL. Use SiteAdmin.websites.destroyById() instead.
            "::destroyById::SiteAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SiteAdmin.websites.updateById() instead.
            "::updateById::SiteAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/siteAdmins/:id/websites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SiteAdmin.websites() instead.
            "::get::SiteAdmin::websites": {
              isArray: true,
              url: urlBase + "/siteAdmins/:id/websites",
              method: "GET",
            },

            // INTERNAL. Use SiteAdmin.websites.create() instead.
            "::create::SiteAdmin::websites": {
              url: urlBase + "/siteAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SiteAdmin.websites.createMany() instead.
            "::createMany::SiteAdmin::websites": {
              isArray: true,
              url: urlBase + "/siteAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SiteAdmin.websites.destroyAll() instead.
            "::delete::SiteAdmin::websites": {
              url: urlBase + "/siteAdmins/:id/websites",
              method: "DELETE",
            },

            // INTERNAL. Use SiteAdmin.websites.count() instead.
            "::count::SiteAdmin::websites": {
              url: urlBase + "/siteAdmins/:id/websites/count",
              method: "GET",
            },

            // INTERNAL. Use WebPage.website() instead.
            "::get::WebPage::website": {
              url: urlBase + "/webPages/:id/website",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites.findById() instead.
            "::findById::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites.destroyById() instead.
            "::destroyById::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.updateById() instead.
            "::updateById::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.websites.link() instead.
            "::link::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.websites.unlink() instead.
            "::unlink::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.exists() instead.
            "::exists::SystemAdmin::websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use SystemAdmin.websites() instead.
            "::get::SystemAdmin::websites": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/websites",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites.create() instead.
            "::create::SystemAdmin::websites": {
              url: urlBase + "/systemAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.websites.createMany() instead.
            "::createMany::SystemAdmin::websites": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.websites.destroyAll() instead.
            "::delete::SystemAdmin::websites": {
              url: urlBase + "/systemAdmins/:id/websites",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.count() instead.
            "::count::SystemAdmin::websites": {
              url: urlBase + "/systemAdmins/:id/websites/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Website#patchOrCreate
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Website#updateOrCreate
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Website#patchOrCreateWithWhere
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Website#update
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Website#destroyById
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Website#removeById
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Website#prototype$patchAttributes
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Website#modelName
        * @propertyOf lbServices.Website
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Website`.
        */
        R.modelName = "Website";


            /**
             * @ngdoc method
             * @name lbServices.Website#siteAdmin
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Fetches belongsTo relation siteAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmin = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::get::Website::siteAdmin"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Website.webPages
     * @header lbServices.Website.webPages
     * @object
     * @description
     *
     * The object `Website.webPages` groups methods
     * manipulating `WebPage` instances related to `Website`.
     *
     * Call {@link lbServices.Website#webPages Website.webPages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Website#webPages
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Queries webPages of website.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::get::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#count
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Counts webPages of website.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.webPages.count = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::count::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#create
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Creates a new instance in webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.create = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::create::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#createMany
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Creates a new instance in webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.createMany = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::createMany::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#destroyAll
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Deletes all webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.webPages.destroyAll = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::delete::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#destroyById
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Delete a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.webPages.destroyById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::destroyById::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#findById
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Find a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.findById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::findById::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website.webPages#updateById
             * @methodOf lbServices.Website.webPages
             *
             * @description
             *
             * Update a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.updateById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::updateById::Website::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Website#systemAdmin
             * @methodOf lbServices.Website
             *
             * @description
             *
             * Fetches belongsTo relation systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - website id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R.systemAdmin = function() {
          var TargetResource = $injector.get("SystemAdmin");
          var action = TargetResource["::get::Website::systemAdmin"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.WebPage
 * @header lbServices.WebPage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WebPage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "WebPage",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/webPages/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use WebPage.website() instead.
            "prototype$__get__website": {
              url: urlBase + "/webPages/:id/website",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields.findById() instead.
            "prototype$__findById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields.destroyById() instead.
            "prototype$__destroyById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use WebPage.editableFields.updateById() instead.
            "prototype$__updateById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use WebPage.systemAdmin() instead.
            "prototype$__get__systemAdmin": {
              url: urlBase + "/webPages/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields() instead.
            "prototype$__get__editableFields": {
              isArray: true,
              url: urlBase + "/webPages/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields.create() instead.
            "prototype$__create__editableFields": {
              url: urlBase + "/webPages/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use WebPage.editableFields.destroyAll() instead.
            "prototype$__delete__editableFields": {
              url: urlBase + "/webPages/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use WebPage.editableFields.count() instead.
            "prototype$__count__editableFields": {
              url: urlBase + "/webPages/:id/editableFields/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#create
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/webPages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#createMany
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/webPages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#upsert
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/webPages",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#replaceOrCreate
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/webPages/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#upsertWithWhere
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/webPages/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#exists
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/webPages/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#findById
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/webPages/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#replaceById
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/webPages/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#find
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/webPages",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#findOne
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/webPages/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#updateAll
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/webPages/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#deleteById
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/webPages/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#count
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/webPages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#prototype$updateAttributes
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/webPages/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.WebPage#createChangeStream
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/webPages/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Website.webPages.findById() instead.
            "::findById::Website::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages.destroyById() instead.
            "::destroyById::Website::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Website.webPages.updateById() instead.
            "::updateById::Website::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/websites/:id/webPages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Website.webPages() instead.
            "::get::Website::webPages": {
              isArray: true,
              url: urlBase + "/websites/:id/webPages",
              method: "GET",
            },

            // INTERNAL. Use Website.webPages.create() instead.
            "::create::Website::webPages": {
              url: urlBase + "/websites/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use Website.webPages.createMany() instead.
            "::createMany::Website::webPages": {
              isArray: true,
              url: urlBase + "/websites/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use Website.webPages.destroyAll() instead.
            "::delete::Website::webPages": {
              url: urlBase + "/websites/:id/webPages",
              method: "DELETE",
            },

            // INTERNAL. Use Website.webPages.count() instead.
            "::count::Website::webPages": {
              url: urlBase + "/websites/:id/webPages/count",
              method: "GET",
            },

            // INTERNAL. Use EditableField.webPage() instead.
            "::get::EditableField::webPage": {
              url: urlBase + "/editableFields/:id/webPage",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages.findById() instead.
            "::findById::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages.destroyById() instead.
            "::destroyById::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.updateById() instead.
            "::updateById::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.webPages.link() instead.
            "::link::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.webPages.unlink() instead.
            "::unlink::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.exists() instead.
            "::exists::SystemAdmin::webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use SystemAdmin.webPages() instead.
            "::get::SystemAdmin::webPages": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages.create() instead.
            "::create::SystemAdmin::webPages": {
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.webPages.createMany() instead.
            "::createMany::SystemAdmin::webPages": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.webPages.destroyAll() instead.
            "::delete::SystemAdmin::webPages": {
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.count() instead.
            "::count::SystemAdmin::webPages": {
              url: urlBase + "/systemAdmins/:id/webPages/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.WebPage#patchOrCreate
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#updateOrCreate
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#patchOrCreateWithWhere
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#update
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#destroyById
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#removeById
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.WebPage#prototype$patchAttributes
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.WebPage#modelName
        * @propertyOf lbServices.WebPage
        * @description
        * The name of the model represented by this $resource,
        * i.e. `WebPage`.
        */
        R.modelName = "WebPage";


            /**
             * @ngdoc method
             * @name lbServices.WebPage#website
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Fetches belongsTo relation website.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.website = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::get::WebPage::website"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.WebPage.editableFields
     * @header lbServices.WebPage.editableFields
     * @object
     * @description
     *
     * The object `WebPage.editableFields` groups methods
     * manipulating `EditableField` instances related to `WebPage`.
     *
     * Call {@link lbServices.WebPage#editableFields WebPage.editableFields()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.WebPage#editableFields
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Queries editableFields of webPage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::get::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#count
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Counts editableFields of webPage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.editableFields.count = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::count::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#create
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.create = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::create::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#createMany
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.createMany = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::createMany::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#destroyAll
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Deletes all editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyAll = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::delete::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#destroyById
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Delete a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::destroyById::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#findById
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Find a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.findById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::findById::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage.editableFields#updateById
             * @methodOf lbServices.WebPage.editableFields
             *
             * @description
             *
             * Update a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.updateById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::updateById::WebPage::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.WebPage#systemAdmin
             * @methodOf lbServices.WebPage
             *
             * @description
             *
             * Fetches belongsTo relation systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - webPage id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R.systemAdmin = function() {
          var TargetResource = $injector.get("SystemAdmin");
          var action = TargetResource["::get::WebPage::systemAdmin"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.EditableField
 * @header lbServices.EditableField
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EditableField` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "EditableField",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/editableFields/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use EditableField.webPage() instead.
            "prototype$__get__webPage": {
              url: urlBase + "/editableFields/:id/webPage",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.findById() instead.
            "prototype$__findById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.destroyById() instead.
            "prototype$__destroyById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.updateById() instead.
            "prototype$__updateById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EditableField.editableFields.link() instead.
            "prototype$__link__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EditableField.editableFields.unlink() instead.
            "prototype$__unlink__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.exists() instead.
            "prototype$__exists__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use EditableField.systemAdmin() instead.
            "prototype$__get__systemAdmin": {
              url: urlBase + "/editableFields/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields() instead.
            "prototype$__get__editableFields": {
              isArray: true,
              url: urlBase + "/editableFields/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.create() instead.
            "prototype$__create__editableFields": {
              url: urlBase + "/editableFields/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use EditableField.editableFields.destroyAll() instead.
            "prototype$__delete__editableFields": {
              url: urlBase + "/editableFields/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.count() instead.
            "prototype$__count__editableFields": {
              url: urlBase + "/editableFields/:id/editableFields/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#create
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/editableFields",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#createMany
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/editableFields",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#upsert
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/editableFields",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#replaceOrCreate
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/editableFields/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#upsertWithWhere
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/editableFields/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#exists
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/editableFields/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#findById
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/editableFields/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#replaceById
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/editableFields/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#find
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/editableFields",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#findOne
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/editableFields/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#updateAll
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/editableFields/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#deleteById
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/editableFields/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#count
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/editableFields/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#prototype$updateAttributes
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/editableFields/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.EditableField#createChangeStream
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/editableFields/change-stream",
              method: "POST",
            },

            // INTERNAL. Use WebPage.editableFields.findById() instead.
            "::findById::WebPage::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields.destroyById() instead.
            "::destroyById::WebPage::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use WebPage.editableFields.updateById() instead.
            "::updateById::WebPage::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/webPages/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use WebPage.editableFields() instead.
            "::get::WebPage::editableFields": {
              isArray: true,
              url: urlBase + "/webPages/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use WebPage.editableFields.create() instead.
            "::create::WebPage::editableFields": {
              url: urlBase + "/webPages/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use WebPage.editableFields.createMany() instead.
            "::createMany::WebPage::editableFields": {
              isArray: true,
              url: urlBase + "/webPages/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use WebPage.editableFields.destroyAll() instead.
            "::delete::WebPage::editableFields": {
              url: urlBase + "/webPages/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use WebPage.editableFields.count() instead.
            "::count::WebPage::editableFields": {
              url: urlBase + "/webPages/:id/editableFields/count",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.findById() instead.
            "::findById::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.destroyById() instead.
            "::destroyById::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.updateById() instead.
            "::updateById::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EditableField.editableFields.link() instead.
            "::link::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use EditableField.editableFields.unlink() instead.
            "::unlink::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.exists() instead.
            "::exists::EditableField::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/editableFields/:id/editableFields/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use EditableField.editableFields() instead.
            "::get::EditableField::editableFields": {
              isArray: true,
              url: urlBase + "/editableFields/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use EditableField.editableFields.create() instead.
            "::create::EditableField::editableFields": {
              url: urlBase + "/editableFields/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use EditableField.editableFields.createMany() instead.
            "::createMany::EditableField::editableFields": {
              isArray: true,
              url: urlBase + "/editableFields/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use EditableField.editableFields.destroyAll() instead.
            "::delete::EditableField::editableFields": {
              url: urlBase + "/editableFields/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use EditableField.editableFields.count() instead.
            "::count::EditableField::editableFields": {
              url: urlBase + "/editableFields/:id/editableFields/count",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields.findById() instead.
            "::findById::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields.destroyById() instead.
            "::destroyById::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.updateById() instead.
            "::updateById::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.editableFields.link() instead.
            "::link::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.editableFields.unlink() instead.
            "::unlink::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.exists() instead.
            "::exists::SystemAdmin::editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use SystemAdmin.editableFields() instead.
            "::get::SystemAdmin::editableFields": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields.create() instead.
            "::create::SystemAdmin::editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.editableFields.createMany() instead.
            "::createMany::SystemAdmin::editableFields": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.editableFields.destroyAll() instead.
            "::delete::SystemAdmin::editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.count() instead.
            "::count::SystemAdmin::editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.EditableField#patchOrCreate
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#updateOrCreate
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#patchOrCreateWithWhere
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#update
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#destroyById
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#removeById
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EditableField#prototype$patchAttributes
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.EditableField#modelName
        * @propertyOf lbServices.EditableField
        * @description
        * The name of the model represented by this $resource,
        * i.e. `EditableField`.
        */
        R.modelName = "EditableField";


            /**
             * @ngdoc method
             * @name lbServices.EditableField#webPage
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Fetches belongsTo relation webPage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPage = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::get::EditableField::webPage"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.EditableField.editableFields
     * @header lbServices.EditableField.editableFields
     * @object
     * @description
     *
     * The object `EditableField.editableFields` groups methods
     * manipulating `EditableField` instances related to `EditableField`.
     *
     * Call {@link lbServices.EditableField#editableFields EditableField.editableFields()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.EditableField#editableFields
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Queries editableFields of editableField.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::get::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#count
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Counts editableFields of editableField.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.editableFields.count = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::count::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#create
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.create = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::create::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#createMany
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.createMany = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::createMany::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#destroyAll
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Deletes all editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyAll = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::delete::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#destroyById
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Delete a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::destroyById::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#exists
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Check the existence of editableFields relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.exists = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::exists::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#findById
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Find a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.findById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::findById::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#link
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Add a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.link = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::link::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#unlink
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Remove the editableFields relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.unlink = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::unlink::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField.editableFields#updateById
             * @methodOf lbServices.EditableField.editableFields
             *
             * @description
             *
             * Update a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.updateById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::updateById::EditableField::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EditableField#systemAdmin
             * @methodOf lbServices.EditableField
             *
             * @description
             *
             * Fetches belongsTo relation systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - editableField id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R.systemAdmin = function() {
          var TargetResource = $injector.get("SystemAdmin");
          var action = TargetResource["::get::EditableField::systemAdmin"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.SystemAdmin
 * @header lbServices.SystemAdmin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SystemAdmin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "SystemAdmin",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/systemAdmins/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__findById__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__destroyById__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__updateById__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.findById() instead.
            "prototype$__findById__siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.destroyById() instead.
            "prototype$__destroyById__siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.updateById() instead.
            "prototype$__updateById__siteAdmins": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/siteAdmins/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.websites.findById() instead.
            "prototype$__findById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites.destroyById() instead.
            "prototype$__destroyById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.updateById() instead.
            "prototype$__updateById__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.websites.link() instead.
            "prototype$__link__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.websites.unlink() instead.
            "prototype$__unlink__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.exists() instead.
            "prototype$__exists__websites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/websites/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use SystemAdmin.webPages.findById() instead.
            "prototype$__findById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages.destroyById() instead.
            "prototype$__destroyById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.updateById() instead.
            "prototype$__updateById__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.webPages.link() instead.
            "prototype$__link__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.webPages.unlink() instead.
            "prototype$__unlink__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.exists() instead.
            "prototype$__exists__webPages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/webPages/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use SystemAdmin.editableFields.findById() instead.
            "prototype$__findById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields.destroyById() instead.
            "prototype$__destroyById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.updateById() instead.
            "prototype$__updateById__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.editableFields.link() instead.
            "prototype$__link__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use SystemAdmin.editableFields.unlink() instead.
            "prototype$__unlink__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.exists() instead.
            "prototype$__exists__editableFields": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/systemAdmins/:id/editableFields/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__get__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Queries accessTokens of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__create__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/systemAdmins/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__delete__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/systemAdmins/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$__count__accessTokens
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Counts accessTokens of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/systemAdmins/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins() instead.
            "prototype$__get__siteAdmins": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.create() instead.
            "prototype$__create__siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.destroyAll() instead.
            "prototype$__delete__siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.siteAdmins.count() instead.
            "prototype$__count__siteAdmins": {
              url: urlBase + "/systemAdmins/:id/siteAdmins/count",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites() instead.
            "prototype$__get__websites": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/websites",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.websites.create() instead.
            "prototype$__create__websites": {
              url: urlBase + "/systemAdmins/:id/websites",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.websites.destroyAll() instead.
            "prototype$__delete__websites": {
              url: urlBase + "/systemAdmins/:id/websites",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.websites.count() instead.
            "prototype$__count__websites": {
              url: urlBase + "/systemAdmins/:id/websites/count",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages() instead.
            "prototype$__get__webPages": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.webPages.create() instead.
            "prototype$__create__webPages": {
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.webPages.destroyAll() instead.
            "prototype$__delete__webPages": {
              url: urlBase + "/systemAdmins/:id/webPages",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.webPages.count() instead.
            "prototype$__count__webPages": {
              url: urlBase + "/systemAdmins/:id/webPages/count",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields() instead.
            "prototype$__get__editableFields": {
              isArray: true,
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "GET",
            },

            // INTERNAL. Use SystemAdmin.editableFields.create() instead.
            "prototype$__create__editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "POST",
            },

            // INTERNAL. Use SystemAdmin.editableFields.destroyAll() instead.
            "prototype$__delete__editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields",
              method: "DELETE",
            },

            // INTERNAL. Use SystemAdmin.editableFields.count() instead.
            "prototype$__count__editableFields": {
              url: urlBase + "/systemAdmins/:id/editableFields/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#create
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/systemAdmins",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#createMany
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/systemAdmins",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#upsert
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/systemAdmins",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#replaceOrCreate
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/systemAdmins/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#upsertWithWhere
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/systemAdmins/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#exists
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/systemAdmins/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#findById
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/systemAdmins/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#replaceById
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/systemAdmins/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#find
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/systemAdmins",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#findOne
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/systemAdmins/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#updateAll
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/systemAdmins/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#deleteById
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/systemAdmins/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#count
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/systemAdmins/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$updateAttributes
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/systemAdmins/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#createChangeStream
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/systemAdmins/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#login
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/systemAdmins/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#logout
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/systemAdmins/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#confirm
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/systemAdmins/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#resetPassword
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/systemAdmins/reset",
              method: "POST",
            },

            // INTERNAL. Use SiteAdmin.systemAdmin() instead.
            "::get::SiteAdmin::systemAdmin": {
              url: urlBase + "/siteAdmins/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use Website.systemAdmin() instead.
            "::get::Website::systemAdmin": {
              url: urlBase + "/websites/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use WebPage.systemAdmin() instead.
            "::get::WebPage::systemAdmin": {
              url: urlBase + "/webPages/:id/systemAdmin",
              method: "GET",
            },

            // INTERNAL. Use EditableField.systemAdmin() instead.
            "::get::EditableField::systemAdmin": {
              url: urlBase + "/editableFields/:id/systemAdmin",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#getCurrent
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/systemAdmins" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#patchOrCreate
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#updateOrCreate
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#patchOrCreateWithWhere
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#update
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#destroyById
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#removeById
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#prototype$patchAttributes
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SystemAdmin` object.)
             * </em>
             */
        R["prototype$patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.SystemAdmin#getCachedCurrent
         * @methodOf lbServices.SystemAdmin
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.SystemAdmin#login} or
         * {@link lbServices.SystemAdmin#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A SystemAdmin instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemAdmin#isAuthenticated
         * @methodOf lbServices.SystemAdmin
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.SystemAdmin#getCurrentId
         * @methodOf lbServices.SystemAdmin
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.SystemAdmin#modelName
        * @propertyOf lbServices.SystemAdmin
        * @description
        * The name of the model represented by this $resource,
        * i.e. `SystemAdmin`.
        */
        R.modelName = "SystemAdmin";

    /**
     * @ngdoc object
     * @name lbServices.SystemAdmin.siteAdmins
     * @header lbServices.SystemAdmin.siteAdmins
     * @object
     * @description
     *
     * The object `SystemAdmin.siteAdmins` groups methods
     * manipulating `SiteAdmin` instances related to `SystemAdmin`.
     *
     * Call {@link lbServices.SystemAdmin#siteAdmins SystemAdmin.siteAdmins()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#siteAdmins
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Queries siteAdmins of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmins = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::get::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#count
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Counts siteAdmins of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.siteAdmins.count = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::count::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#create
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Creates a new instance in siteAdmins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmins.create = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::create::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#createMany
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Creates a new instance in siteAdmins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmins.createMany = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::createMany::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#destroyAll
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Deletes all siteAdmins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.siteAdmins.destroyAll = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::delete::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#destroyById
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Delete a related item by id for siteAdmins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for siteAdmins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.siteAdmins.destroyById = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::destroyById::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#findById
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Find a related item by id for siteAdmins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for siteAdmins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmins.findById = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::findById::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.siteAdmins#updateById
             * @methodOf lbServices.SystemAdmin.siteAdmins
             *
             * @description
             *
             * Update a related item by id for siteAdmins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for siteAdmins
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SiteAdmin` object.)
             * </em>
             */
        R.siteAdmins.updateById = function() {
          var TargetResource = $injector.get("SiteAdmin");
          var action = TargetResource["::updateById::SystemAdmin::siteAdmins"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SystemAdmin.websites
     * @header lbServices.SystemAdmin.websites
     * @object
     * @description
     *
     * The object `SystemAdmin.websites` groups methods
     * manipulating `Website` instances related to `SystemAdmin`.
     *
     * Call {@link lbServices.SystemAdmin#websites SystemAdmin.websites()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#websites
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Queries websites of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::get::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#count
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Counts websites of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.websites.count = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::count::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#create
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Creates a new instance in websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.create = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::create::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#createMany
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Creates a new instance in websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.createMany = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::createMany::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#destroyAll
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Deletes all websites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.websites.destroyAll = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::delete::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#destroyById
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Delete a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.websites.destroyById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::destroyById::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#exists
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Check the existence of websites relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.exists = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::exists::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#findById
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Find a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.findById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::findById::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#link
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Add a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.link = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::link::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#unlink
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Remove the websites relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.websites.unlink = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::unlink::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.websites#updateById
             * @methodOf lbServices.SystemAdmin.websites
             *
             * @description
             *
             * Update a related item by id for websites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for websites
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Website` object.)
             * </em>
             */
        R.websites.updateById = function() {
          var TargetResource = $injector.get("Website");
          var action = TargetResource["::updateById::SystemAdmin::websites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SystemAdmin.webPages
     * @header lbServices.SystemAdmin.webPages
     * @object
     * @description
     *
     * The object `SystemAdmin.webPages` groups methods
     * manipulating `WebPage` instances related to `SystemAdmin`.
     *
     * Call {@link lbServices.SystemAdmin#webPages SystemAdmin.webPages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#webPages
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Queries webPages of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::get::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#count
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Counts webPages of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.webPages.count = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::count::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#create
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Creates a new instance in webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.create = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::create::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#createMany
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Creates a new instance in webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.createMany = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::createMany::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#destroyAll
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Deletes all webPages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.webPages.destroyAll = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::delete::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#destroyById
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Delete a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.webPages.destroyById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::destroyById::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#exists
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Check the existence of webPages relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.exists = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::exists::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#findById
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Find a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.findById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::findById::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#link
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Add a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.link = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::link::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#unlink
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Remove the webPages relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.webPages.unlink = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::unlink::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.webPages#updateById
             * @methodOf lbServices.SystemAdmin.webPages
             *
             * @description
             *
             * Update a related item by id for webPages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for webPages
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `WebPage` object.)
             * </em>
             */
        R.webPages.updateById = function() {
          var TargetResource = $injector.get("WebPage");
          var action = TargetResource["::updateById::SystemAdmin::webPages"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SystemAdmin.editableFields
     * @header lbServices.SystemAdmin.editableFields
     * @object
     * @description
     *
     * The object `SystemAdmin.editableFields` groups methods
     * manipulating `EditableField` instances related to `SystemAdmin`.
     *
     * Call {@link lbServices.SystemAdmin#editableFields SystemAdmin.editableFields()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin#editableFields
             * @methodOf lbServices.SystemAdmin
             *
             * @description
             *
             * Queries editableFields of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::get::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#count
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Counts editableFields of systemAdmin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.editableFields.count = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::count::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#create
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.create = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::create::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#createMany
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Creates a new instance in editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.createMany = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::createMany::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#destroyAll
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Deletes all editableFields of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyAll = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::delete::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#destroyById
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Delete a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.destroyById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::destroyById::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#exists
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Check the existence of editableFields relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.exists = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::exists::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#findById
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Find a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.findById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::findById::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#link
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Add a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.link = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::link::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#unlink
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Remove the editableFields relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.editableFields.unlink = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::unlink::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.SystemAdmin.editableFields#updateById
             * @methodOf lbServices.SystemAdmin.editableFields
             *
             * @description
             *
             * Update a related item by id for editableFields.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - systemAdmin id
             *
             *  - `fk` – `{*}` - Foreign key for editableFields
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EditableField` object.)
             * </em>
             */
        R.editableFields.updateById = function() {
          var TargetResource = $injector.get("EditableField");
          var action = TargetResource["::updateById::SystemAdmin::editableFields"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
