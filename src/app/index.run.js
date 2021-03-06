(function() {
    'use strict';

    angular
        .module('ngDam')
        .run(runBlock);


    function runBlock($rootScope, $location, $cookieStore, $http, $mdSidenav, $mdComponentRegistry) {
        $rootScope.$on('$stateChangeSuccess',
            function() {
                if ($mdComponentRegistry.get('left')) {
                    $mdSidenav('left').close();
                }
            });

        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
})();