(function() {
    'use strict';

    angular.module('ngDam')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController as vm'
                    },
                    'navbar@app': {
                        templateUrl: 'app/components/navigation/navbar.view.html',
                        controller: 'NavbarCtrl as vm'
                    },
                    'sidebar@app': {
                        templateUrl: 'app/components/navigation/sidebar.view.html',
                        controller: 'SidebarCtrl as vm'
                    }
                }
            });

        $stateProvider
            .state('login', {
                url: '/login',
                public: true,
                views: {
                    '': {
                        templateUrl: 'app/components/signin/login.view.html',
                        controller: 'LoginController as vm',
                    },
                    'register@login': {
                        templateUrl: 'app/components/signin/register.view.html',
                        controller: 'RegisterController as vm'
                    }
                }
            });
        $stateProvider
            .state('register', {
                url: '/register',
                public: true,
                views: {
                    '': {
                        templateUrl: 'app/components/signin/register.view.html',
                        controller: 'RegisterController as vm'
                    }
                }
            });
        $urlRouterProvider.otherwise('/login');

        //$httpProvider.interceptors.push('APIInterceptor');
    }
}());