(function() {
    'use strict';

    angular.module('drive')
        .controller('FolderController', FolderController);

    function FolderController($window, $log, $scope, $state) {
        var vm = this;

        vm.test = $state.params.folderId;

    }
}());