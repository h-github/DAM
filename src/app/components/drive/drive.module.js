(function() {
    'use strict';

    angular.module('drive', ['ui.router']);

    angular.module('drive')
        .config(['$stateProvider', routeConfig]);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('app.folders', {
                url: '/folders',
                views: {
                    'main@app': {
                        templateUrl: 'app/components/drive/account/account.view.html',
                        controller: 'AccountsController as vm'
                    }
                }
            }).state('app.folders.folder', {
                url: '/{folderId}',
                views: {
                    'main@app': {
                        templateUrl: 'app/components/drive/account/folder/folder.view.html',
                        controller: 'FolderController as vm'
                    }
                }
            });
    }
}());