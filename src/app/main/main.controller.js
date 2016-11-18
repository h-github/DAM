(function() {
    'use strict';

    angular.module('ngDam').controller('MainController', MainController);


    function MainController() {
        var vm = this;

        vm.test = 'Here is main!';
    }

}());