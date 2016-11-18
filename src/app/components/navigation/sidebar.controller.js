(function() {
    'use strict';

    angular.module('navigation')
        .controller('SidebarCtrl', ['$mdMedia', SidebarCtrl]);

    function SidebarCtrl($mdSidenav, $mdMedia) {
        var vm = this;
        vm.test = 'Here is sidebar!';
        // vm.openLeftMenu = openLeftMenu;
        vm.isLocked = isLocked;

        // function openLeftMenu() {
        //     $mdSidenav('left').toggle();
        // };

        function isLocked() {
            return $mdMedia('gt-sm');
        }
    }
}());