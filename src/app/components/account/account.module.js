(function() {
    'use strict';

    angular.module('account', ['ui.router']);

    angular.module('account')
        .config(['$stateProvider', routeConfig]);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('app.account', {
                url: '/account',
                views: {
                    'main@app': {
                        templateUrl: 'app/components/account/account.view.html',
                        controller: 'AccountsController as vm'
                    }
                }
            });
    }
}());