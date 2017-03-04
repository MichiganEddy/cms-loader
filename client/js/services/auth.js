// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .factory('AuthService', ['SiteAdmin', '$q', '$rootScope', '$state', function(
      User, $q, $rootScope, $state) {
    function login(email, username, password) {
      if(email || username){
        if(username){
          return User
            .login({username: username, password: password})
            .$promise
            .then(function(response) {
              $rootScope.currentUser = {
                id: response.user.id,
                tokenId: response.id,
                email: response.email,
                username: username
              };
            });
        }else {
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email,
            username: response.username
          };
        });
      }
    }else return $q.reject();
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(firstN, lastN, userN, email, password) {
      return User
        .create({
          firstName: firstN,
          lastName: lastN,
          userName: userN,
          email: email,
          password: password
       })
       .$promise;
    }

    function refresh(accessTokenId) {
      return User
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email
          };
        });
    }
    return {
      login: login,
      logout: logout,
      register: register,
      refresh: refresh
    };
  }]);
