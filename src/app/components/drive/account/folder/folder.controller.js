(function() {
    'use strict';

    angular.module('drive')
        .controller('FolderController', FolderController);

    function FolderController($window, $log, $scope, $state) {
        var vm = this;

        vm.folderId = $state.params.folderId;
        vm.folder = {};

        vm.gapi = $window.gapi;

        vm.getListFiles = getListFiles;
        vm.loadDriveApi = loadDriveApi;
        vm.getFileDetails = getFileDetails;
        vm.getFileThumbnailLink = getFileThumbnailLink;

        vm.fileList = [];
        vm.selectedFile = {};
        vm.activate = activate;


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
                $scope.$apply(function() {
                    vm.folder = _.find(files, function(file) {
                        return file.id === vm.folderId;
                    });
                    vm.fileList = _.filter(files, function(file) {
                        return file.mimeType === 'image/jpeg' && _.includes(file.parents, vm.folderId);
                    });

                }, true);
            });

        }

        function getFileThumbnailLink(id) {
            var request = vm.gapi.client.drive.files.get({
                'fileId': id,
                'fields': "appProperties, capabilities, contentHints, createdTime, description, explicitlyTrashed, fileExtension, folderColorRgb, fullFileExtension, headRevisionId, iconLink, id, imageMediaMetadata, isAppAuthorized, kind, lastModifyingUser, md5Checksum, mimeType, modifiedByMe, modifiedByMeTime, modifiedTime, name, originalFilename, ownedByMe, owners, parents, permissions, properties, quotaBytesUsed, shared, sharedWithMeTime, sharingUser, size, spaces, starred, thumbnailLink, trashed, version, videoMediaMetadata, viewedByMe, viewedByMeTime, viewersCanCopyContent, webContentLink, webViewLink, writersCanShare"
            });

            request.execute(function(resp) {
                var file = resp || {};
                $scope.$apply(function() {
                    vm.selectedFileThumbnailLink = file.webViewLink;
                }, true);
            });
        }

        function getFileDetails(index) {
            vm.selectedFile = vm.fileList[index];
            vm.getFileThumbnailLink(vm.selectedFile.id);
        }
    }
}());