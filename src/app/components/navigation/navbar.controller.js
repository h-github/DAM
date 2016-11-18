(function() {
    'use strict';
    angular.module('navigation')
        .controller('NavbarCtrl', 
        [
            '$rootScope', 
            '$mdSidenav', 
            '$mdMedia', 
            '$log', 
            'UserService', 
            '$state', 
            NavbarCtrl
            ]);

    function NavbarCtrl($rootScope, $mdSidenav, $mdMedia, $log, UserService, $state) {
        var vm = this;
        vm.user = null;

        vm.openSidebar = openSidebar;
        vm.show = show;
        vm.useLogout = useLogout;
        vm.activation = activation;

        vm.activation();

        function activation($timeout) {}

        function openSidebar(navID) {
            $mdSidenav(navID)
                .open()
                .then(function() {
                    $log.debug('opened');
                });
        }

        function show() {
            return $mdMedia('max-width: 1280px');
        }

        function useLogout() {
            $state.transitionTo('login');
        }

    }

}());