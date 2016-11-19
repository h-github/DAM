(function () {
  'use strict';

  angular.module('navigation')
    .controller('SidebarCtrl', ['$mdMedia', 'GoogleAPI', SidebarCtrl]);

  function SidebarCtrl ($mdSidenav, $mdMedia, GoogleAPI) {
    var vm = this;
    vm.test = 'Here is sidebar!';
    // vm.openLeftMenu = openLeftMenu
    vm.isLocked = isLocked;
    vm.handleAuthClick = handleAuthClick;
    vm.showAPIBottom = showAPIBottom;
    vm.getFiles = getFiles;

    function handleAuthClick (e) {
      return GoogleAPI.handleAuthClick(e);
    }

    function showAPIBottom () {
      var authResult = GoogleAPI.getAuthResult();
      return authResult && !authResult.error;
    }

    function isLocked () {
      return $mdMedia('gt-sm');
    }

    function getFiles () {
      return GoogleAPI.listFiles();
    }
  }
}());
