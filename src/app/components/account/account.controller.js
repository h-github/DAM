(function() {
    'use strict';

    angular.module('account')
        .controller('AccountsController', accountsController);

    function accountsController() {
        var vm = this;

        vm.test = 'This is a test account!';
    }
}());