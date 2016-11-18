angular.module("ngDam").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"main__container\" layout=\"row\" flex layout-fill>\r\n    <div class=\"main__container-sidebar\" layout=\"column\">\r\n        <div class=\"sidebar\" layout=\"column\" layout-fill ui-view=\"sidebar\">\r\n        </div>\r\n    </div>\r\n    <div class=\"main__container-navbar\" layout=\"column\" flex>\r\n        <div class=\"navbar\" ui-view=\"navbar\"></div>\r\n        <div flex class=\"main__container-content md-accent\" role=\"main\" ui-view=\"main\" layout-padding></div>\r\n    </div>\r\n</div>");
$templateCache.put("app/components/account/account.view.html","<div>{{vm.test}}</div>");
$templateCache.put("app/components/signin/login.view.html","<div class=\"login__container\" layout=\"row\" layout-align=\"center start\" ng-cloak layout-fill layout-margin>\r\n    <md-content layout-padding flex-xs=\"100\" flex-sm=\"80\" flex-md=\"60\" flex-lg=\"40\" flex-xl=\"20\">\r\n        <form name=\"loginForm\" ng-submit=\"vm.login()\">\r\n            <div layout=\"column\">\r\n                <md-input-container>\r\n                    <label>Username</label>\r\n                    <input required name=\"clientUsername\" ng-model=\"vm.username\">\r\n                    <div ng-messages=\"loginForm.clientUsername.$error\">\r\n                        <div ng-message=\"required\">Username is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n\r\n                <md-input-container>\r\n                    <label>Password</label>\r\n                    <input type=\"password\" required name=\"clientPassword\" ng-model=\"vm.password\">\r\n                    <div ng-messages=\"loginForm.clientPassword.$error\">\r\n                        <div ng-message=\"required\">Password is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n            </div>\r\n            <div>\r\n                <md-button class=\"md-accent\" type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\">Login</md-button>\r\n                <md-button class=\"md-primary\" ui-sref=\"register\">Register</md-button>\r\n            </div>\r\n        </form>\r\n    </md-content>\r\n</div>");
$templateCache.put("app/components/signin/register.view.html","<div class=\"register__container\" layout=\"row\" layout-align=\"center start\" ng-cloak layout-fill layout-margin>\r\n    <md-content layout-padding flex-xs=\"100\" flex-sm=\"80\" flex-md=\"60\" flex-lg=\"40\" flex-xl=\"20\">\r\n        <form name=\"registerForm\" ng-submit=\"vm.register()\" role=\"form\">\r\n            <div layout=\"column\">\r\n                <md-input-container>\r\n                    <label>First name</label>\r\n                    <input type=\"text\" name=\"clientFirstName\" ng-model=\"vm.user.firstName\" required>\r\n                    <div ng-messages=\"registerForm.clientFirstName.$error\">\r\n                        <div ng-message=\"required\">First name is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n                <md-input-container>\r\n                    <label>Last name</label>\r\n                    <input type=\"text\" name=\"clientLastName\" ng-model=\"vm.user.lastName\" required>\r\n                    <div ng-messages=\"registerForm.clientLastName.$error\">\r\n                        <div ng-message=\"required\">Last name is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n                <md-input-container>\r\n                    <label>Username</label>\r\n                    <input type=\"text\" name=\"clientUsername\" ng-model=\"vm.user.username\" required>\r\n                    <div ng-messages=\"registerForm.clientUsername.$error\">\r\n                        <div ng-message=\"required\">Username is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n                <md-input-container>\r\n                    <label>Password</label>\r\n                    <input type=\"password\" name=\"clientPassword\" ng-model=\"vm.user.password\" required>\r\n                    <div ng-messages=\"registerForm.clientPassword.$error\">\r\n                        <div ng-message=\"required\">Password is required!</div>\r\n                    </div>\r\n                </md-input-container>\r\n            </div>\r\n            <div>\r\n                <md-button class=\"md-accent\" type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\">Register</md-button>\r\n                <md-button class=\"md-primary\" ui-sref=\"login\">Cancel</md-button>\r\n            </div>\r\n        </form>\r\n    </md-content>\r\n</div>");
$templateCache.put("app/components/navigation/navbar.view.html","<md-toolbar class=\"md-whiteframe-z2\">\r\n    <div flex layout=\"row\">\r\n        <div flex layout=\"row\" layout-align=\"start center\">\r\n            <md-button class=\"md-fab md-mini md-icon-button\" ng-click=\"vm.openSidebar(\'left\')\" aria-label=\"Show Sidebar\" ng-if=\"vm.show()\">\r\n                <md-icon class=\"material-icons\">menu</md-icon>\r\n            </md-button>\r\n        </div>\r\n        <div flex layout=\"row\" layout-align=\"end center\">\r\n            <md-button class=\"md-fab md-mini md-icon-button\" aria-label=\"More\" ng-click=\"vm.useLogout()\">\r\n                <md-tooltip md-direction=\"left\">\r\n                    User Logout\r\n                </md-tooltip>\r\n                <md-icon class=\"material-icons\">person_outline</md-icon>\r\n            </md-button>\r\n        </div>\r\n    </div>\r\n</md-toolbar>\r\n<md-progress-linear md-mode=\"determinate\" value=\"40\"></md-progress-linear>");
$templateCache.put("app/components/navigation/sidebar.view.html","<md-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia(\'gt-md\')\" flex>\r\n    <md-toolbar class=\"md-theme-indigo\" layout=\"row\" layout-align=\"center center\">\r\n        <div flex=\"50\" layout=\"row\" layout-align=\"start center\">\r\n            <h1 class=\"md-toolbar-tools\">DAM</h1>\r\n        </div>\r\n        <div flex=\"50\" layout=\"row\" layout-align=\"end center\" layout-padding>\r\n            <md-button class=\"md-fab md-mini md-icon-button\" aria-label=\"More\">\r\n                <md-icon class=\"material-icons\">apps</md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-list>\r\n        <md-list-item ui-sref=\"app.account\" ui-sref-active=\"active\">\r\n            <md-icon>account_box</md-icon>\r\n            <p> Accounts </p>\r\n        </md-list-item>\r\n    </md-list>\r\n</md-sidenav>");}]);