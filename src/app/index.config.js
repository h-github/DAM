(function() {
    'use strict';

    angular.module('ngDam')
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey', {
                    'default': '100', // by default use shade 400 from the pink palette for primary intentions
                    'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '300', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': '400' // use shade 600 for the <code>md-hue-2</code> class

                })
                // If you specify less than all of the keys, it will inherit from the
                // default shades
                .accentPalette('orange', {
                    'default': '500' // use shade 200 for default, and keep all other shades the same
                })
                .warnPalette('deep-orange')
                .backgroundPalette('grey').dark();
        })
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);
}());