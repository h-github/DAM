(function() {
    'use strict';

    angular.module('drive')
        .controller('UserController', UserController);

    function UserController($window, $log, $scope) {
        var vm = this;

        vm.gapi = $window.gapi;

        vm.getAbout = getAbout;
        vm.loadDriveApi = loadDriveApi;
        vm.user = {};
        vm.activate = activate;

        vm.activate();

        function activate() {
            vm.loadDriveApi();
        }

        function loadDriveApi() {
            vm.gapi.client.load('drive', 'v3', getAbout);
        }

        function getAbout() {
            var request = vm.gapi.client.drive.about.get({
                'pageSize': 10,
                'fields': "nextPageToken"
            });

            request.execute(function(resp) {
                var about = resp.user || {};
                $scope.$apply(function() {
                    vm.fileList = about;
                }, true);
            });

        }
    }
}());