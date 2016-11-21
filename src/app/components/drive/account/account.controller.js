(function() {
    'use strict';

    angular.module('drive')
        .controller('AccountsController', accountsController);

    function accountsController($window, $log, $scope, $state) {
        var vm = this;

        vm.gapi = $window.gapi;

        vm.getListFiles = getListFiles;
        vm.loadDriveApi = loadDriveApi;
        vm.fileList = [];
        vm.activate = activate;
        vm.goToFolder = goToFolder;


        vm.activate();

        function activate() {
            vm.loadDriveApi();
        }

        function loadDriveApi() {
            vm.gapi.client.load('drive', 'v3', getListFiles);
        }

        function getListFiles() {
            var request = vm.gapi.client.drive.files.list({
                'pageSize': 10,
                'fields': "nextPageToken, files"
            });

            request.execute(function(resp) {
                var files = resp.files || {};
                // $log.log(JSON.stringify(files));
                $scope.$apply(function() {
                    vm.fileList = _.filter(files, function(file) {
                        return file.mimeType === 'application/vnd.google-apps.folder';
                    });
                }, true);
            });

        }

        function goToFolder(id) {
            $state.go('app.folders.folder', { folderId: id });
        }

    }
}());