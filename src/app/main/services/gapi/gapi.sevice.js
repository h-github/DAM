(function () {
  'use strict';

  angular
    .module('ngDam')
    .factory('GoogleAPI', ['$http', GoogleAPI]);

  function GoogleAPI($http) {
    var gapi;
    $http.get('https://apis.google.com/js/client.js?onload=checkAuth').then(function(res){
      gapi = res;
    }) 
    // Your Client ID can be retrieved from your project in the Google
    // Developer Console, https://console.developers.google.com
    var CLIENT_ID = '15013000340-rvtq4s4fop2gdcg2sh7del3nqo77352c.apps.googleusercontent.com';

    var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

    var authResult = {};

    var service = {
      checkAuth: checkAuth,
      handleAuthResult: handleAuthResult,
      handleAuthClick: handleAuthClick,
      loadDriveApi: loadDriveApi,
      listFiles: listFiles,
      getAuthResult:getAuthResult
    };
    return service;

    /**
     * Check if current user has authorized this application.
     */
    function checkAuth() {
      gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    function handleAuthResult(authRes) {
      authResult = authRes;
    }

    function getAuthResult() {
      return authResult;
    }
    /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    function handleAuthClick(event) {
      gapi.auth.authorize({
          client_id: CLIENT_ID,
          scope: SCOPES,
          immediate: false
        },
        handleAuthResult);
      return false;
    }

    /**
     * Load Drive API client library.
     */
    function loadDriveApi() {
      gapi.client.load('drive', 'v3', listFiles);
    }

    /**
     * Print files.
     */
    function listFiles() {
      var request = gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': 'nextPageToken, files(id, name)'
      });

      request.execute(function (resp) {
        return resp;
      });
    }
  }
}());