(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../home/home.module": [
		"./src/app/ms-back-office/modules/home/home.module.ts",
		"default~dashboard-dashboard-module~home-home-module",
		"common",
		"home-home-module"
	],
	"../ms-brands/ms-brands.module": [
		"./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-brands-ms-brands-module"
	],
	"../ms-categories/ms-categories.module": [
		"./src/app/ms-back-office/modules/ms-categories/ms-categories.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-categories-ms-categories-module"
	],
	"../ms-collections/ms-collections.module": [
		"./src/app/ms-back-office/modules/ms-collections/ms-collections.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-collections-ms-collections-module"
	],
	"../ms-releases/ms-releases.module": [
		"./src/app/ms-back-office/modules/ms-releases/ms-releases.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-releases-ms-releases-module"
	],
	"../ms-shops/ms-shops.module": [
		"./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-shops-ms-shops-module"
	],
	"../ms-style/ms-style.module": [
		"./src/app/ms-back-office/modules/ms-style/ms-style.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-style-ms-style-module"
	],
	"../ms-users/ms-users.module": [
		"./src/app/ms-back-office/modules/ms-users/ms-users.module.ts",
		"default~ms-brands-ms-brands-module~ms-categories-ms-categories-module~ms-collections-ms-collections-~5768e601",
		"common",
		"ms-users-ms-users-module"
	],
	"./blank-page/blank-page.module": [
		"./src/app/layout/blank-page/blank-page.module.ts",
		"blank-page-blank-page-module"
	],
	"./charts/charts.module": [
		"./src/app/layout/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"default~dashboard-dashboard-module~home-home-module",
		"common",
		"dashboard-dashboard-module"
	],
	"./forms/forms.module": [
		"./src/app/layout/forms/forms.module.ts",
		"forms-forms-module"
	],
	"./grid/grid.module": [
		"./src/app/layout/grid/grid.module.ts",
		"grid-grid-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"layout-layout-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./material-components/material-components.module": [
		"./src/app/layout/material-components/material-components.module.ts",
		"material-components-material-components-module"
	],
	"./ms-back-office/ms-back-office.module": [
		"./src/app/ms-back-office/ms-back-office.module.ts",
		"ms-back-office-ms-back-office-module"
	],
	"./tables/tables.module": [
		"./src/app/layout/tables/tables.module.ts",
		"tables-tables-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/components/logout/logout.component */ "./src/app/authentication/components/logout/logout.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/services/auth-guard.service */ "./src/app/authentication/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: '/backoffice/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [_authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'backoffice',
        loadChildren: './ms-back-office/ms-back-office.module#MsBackOfficeModule',
        canActivate: [_authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__["ConfigResolveService"]
        }
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__["ConfigResolveService"]
        }
    },
    {
        path: 'logout',
        component: _authentication_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__["ConfigResolveService"]
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [
                _authentication_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//

var AppComponent = /** @class */ (function () {
    function AppComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        translate.setDefaultLang('en');
        this.authService.loginCommands = ['/login'];
        this.authService.afterLoginCommands = ['/backoffice'];
        this.authService.logoutCommands = ['/logout'];
        this.authService.changePasswordCommands = ['/change-password'];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-handling/error-handling.module */ "./src/app/error-handling/error-handling.module.ts");
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-request-indicator/components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _validation_validation_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validation/validation.module */ "./src/app/validation/validation.module.ts");
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ngrx/ngrx.module */ "./src/app/ngrx/ngrx.module.ts");
/* harmony import */ var _error_handling_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//












// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    // for development
    /*return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                //
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_9__["ConfigModule"],
                _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_11__["HttpRequestIndicatorModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_13__["UiModule"],
                _validation_validation_module__WEBPACK_IMPORTED_MODULE_15__["ValidationModule"],
                _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_16__["NgrxModule"],
            ],
            providers: [],
            entryComponents: [
                _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmDialogComponent"],
                _error_handling_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_17__["CustomSnackbarComponent"],
                _http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/modules/error-messages/error-messages.module */ "./src/app/ui/modules/error-messages/error-messages.module.ts");
/* harmony import */ var _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error-handling/error-handling.module */ "./src/app/error-handling/error-handling.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ngrx/ngrx.module */ "./src/app/ngrx/ngrx.module.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/authentication/components/change-password/change-password.component.ts");
/* harmony import */ var _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/change-password-form/change-password-form.component */ "./src/app/authentication/components/change-password-form/change-password-form.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/authentication/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/authentication/components/logout/logout.component.ts");
/* harmony import */ var _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manage-session/manage-session.component */ "./src/app/authentication/components/manage-session/manage-session.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/authentication/components/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//






//import { ToastrModule } from 'ngx-toastr';

//
/*import {
  AppHeaderModule,
  AskBeforeRefreshModule,
  CapsLockModule,
  CustomSnackbarModule,
  ErrorMessagesModule,
  InputFocusModule,
  SmsImageModule,
  SpinnerIndicator200Module,
} from '@c/ui';*/






/*import { NgxTranslateModule } from '@c/ngx-translate';
import { ValidationModule } from '@c/validation';*/
//






var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                //InputFocusModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                //ToastrModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                //AppHeaderModule,
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__["AskBeforeRefreshModule"],
                //CapsLockModule,
                //CustomSnackbarModule,
                _config_config_module__WEBPACK_IMPORTED_MODULE_13__["ConfigModule"],
                _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlingModule"],
                _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_11__["ErrorMessagesModule"],
                //InputFocusModule,
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_14__["HttpRequestIndicatorModule"],
                _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__["NgrxModule"],
            ],
            declarations: [
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"]
            ],
            exports: [
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/components/change-password-form/change-password-form.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password-form/change-password-form.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {    \r\n    overflow-y: auto; /* Safari */\r\n    display: flex; /* Safari */\r\n    flex-direction: column; /* Safari */    \r\n    flex-grow: 1;\r\n\r\n    padding: 25px 0 25px 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQtZm9ybS9jaGFuZ2UtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCLENBRU0sWUFBWTtJQUNuQyxjQUFjLENBRWtCLFlBQVk7SUFDNUMsdUJBQXVCLENBRUQsWUFBWTtJQUNsQyxhQUFhOztJQUViLHlCQUF5QjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkLWZvcm0vY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgICAgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU2FmYXJpICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxOyAvKiBTYWZhcmkgKi8gICAgXHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgcGFkZGluZzogMjVweCAwIDI1cHggMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/components/change-password-form/change-password-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password-form/change-password-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\"\r\n    [askBeforeRefresh]=\"formGroup.dirty\"\r\n    [formGroup]=\"formGroup\"\r\n    novalidate role=\"form\"\r\n    (ngSubmit)=\"submitClicked()\"\r\n    capsLock (capsLock)=\"capsLockOn=$event\"\r\n    inputFocus\r\n    autocomplete=\"off\">\r\n\r\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n            \r\n            <mat-form-field appearance=\"fill\">\r\n\r\n                <mat-label>{{ '@c/Old password' | translate }}</mat-label>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <input matInput type=\"password\" formControlName=\"old_password\" required>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <mat-icon *ngIf=\"capsLockOn\" matSuffix color=\"warn\" class=\"cursor-default\" matTooltip=\"{{'@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!' | translate}}\">warning</mat-icon>\r\n\r\n                <error-messages matSuffix for=\"old_password\" [validationErrorMessages]=\"validationErrorMessages\"></error-messages>\r\n\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"fill\">\r\n\r\n                <mat-label>{{ '@c/New password' | translate }}</mat-label>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <input matInput type=\"password\" formControlName=\"password\" required autofocus>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <mat-icon *ngIf=\"capsLockOn\" matSuffix color=\"warn\" class=\"cursor-default\" matTooltip=\"{{'@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!' | translate}}\">warning</mat-icon>\r\n\r\n                <error-messages matSuffix for=\"password\" [validationErrorMessages]=\"validationErrorMessages\"></error-messages>\r\n\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"fill\">\r\n\r\n                <mat-label>{{ '@c/authentication/ChangePasswordFormComponent/Confirm new password' | translate }}</mat-label>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <input matInput type=\"password\" formControlName=\"confirm_password\" required>\r\n\r\n                <input type=\"password\" class=\"no-save-password\" tabindex=\"-1\" style=\"left: 0; margin: 0; max-height: 1px; max-width: 1px; opacity: 0; outline: none; overflow: hidden; pointer-events: none; position: absolute; top: 0; z-index: -1;\">\r\n\r\n                <mat-icon *ngIf=\"capsLockOn\" matSuffix color=\"warn\" class=\"cursor-default\" matTooltip=\"{{'@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!' | translate}}\">warning</mat-icon>\r\n\r\n                <error-messages matSuffix for=\"confirm_password\" [validationErrorMessages]=\"validationErrorMessages\"></error-messages>\r\n\r\n            </mat-form-field>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{'@c/authentication/ChangePasswordFormComponent/Save' | translate }}</button>\r\n\r\n        <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'@c/authentication/ChangePasswordFormComponent/Cancel' | translate }}</button>\r\n\r\n    </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/authentication/components/change-password-form/change-password-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password-form/change-password-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangePasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return ChangePasswordFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _validation_helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validation/helpers/digits-count-validator */ "./src/app/validation/helpers/digits-count-validator.ts");
/* harmony import */ var _validation_helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validation/helpers/lowercase-validator */ "./src/app/validation/helpers/lowercase-validator.ts");
/* harmony import */ var _validation_helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validation/helpers/same-password-validator */ "./src/app/validation/helpers/same-password-validator.ts");
/* harmony import */ var _validation_helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/helpers/special-chars-validator */ "./src/app/validation/helpers/special-chars-validator.ts");
/* harmony import */ var _validation_helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/helpers/uppercase-validator */ "./src/app/validation/helpers/uppercase-validator.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//






//import { setTranslations } from '@c/ngx-translate';

var ChangePasswordFormComponent = /** @class */ (function (_super) {
    __extends(ChangePasswordFormComponent, _super);
    function ChangePasswordFormComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        _this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        this.validationErrorMessages = [
            {
                type: 'required',
                key: '@c/authentication/ChangePasswordFormComponent/Required Field',
                params: null,
                translation: ''
            },
            {
                type: 'passwordStrength',
                key: '@c/authentication/ChangePasswordFormComponent/Password Strength',
                params: {
                    numberCount: this.digitsCount,
                    uppercase: this.uppercase,
                    lowercase: this.lowercase,
                    minSize: this.passwordSize,
                    specialCharacters: this.specialCharsCount
                }, translation: ''
            },
            {
                type: 'matchPassword',
                key: '@c/authentication/ChangePasswordFormComponent/Password Match',
                params: null,
                translation: ''
            }
        ];
        this.createFormGroup();
    };
    ChangePasswordFormComponent.prototype.createFormGroup = function () {
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.password, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(28),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.passwordSize),
            Object(_validation_helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_4__["lowercase"])(this.lowercase),
            Object(_validation_helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_7__["uppercase"])(this.uppercase),
            Object(_validation_helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_3__["digitsCount"])(this.digitsCount),
            Object(_validation_helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_6__["specialChars"])(this.specialCharsCount),
        ]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.old_password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.password,
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.confirmPassword, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(_validation_helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_5__["samePassword"])(this.password)
            ]),
        });
    };
    ChangePasswordFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordFormComponent.prototype, "passwordSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordFormComponent.prototype, "uppercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordFormComponent.prototype, "lowercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordFormComponent.prototype, "specialCharsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordFormComponent.prototype, "digitsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChangePasswordFormComponent.prototype, "cancel", void 0);
    ChangePasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'change-password-form',
            template: __webpack_require__(/*! ./change-password-form.component.html */ "./src/app/authentication/components/change-password-form/change-password-form.component.html"),
            styles: [__webpack_require__(/*! ./change-password-form.component.css */ "./src/app/authentication/components/change-password-form/change-password-form.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], ChangePasswordFormComponent);
    return ChangePasswordFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/authentication/components/change-password/change-password.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password/change-password.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {    \r\n    overflow-y: auto; /* Safari */\r\n    display: flex; /* Safari */\r\n    flex-direction: column; /* Safari */\r\n    flex-grow: 1;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUIsQ0FFTSxZQUFZO0lBQ25DLGNBQWMsQ0FFa0IsWUFBWTtJQUM1Qyx1QkFBdUIsQ0FFRCxZQUFZO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgICAgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU2FmYXJpICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxOyAvKiBTYWZhcmkgKi9cclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/components/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"margin-top-0\">{{ '@c/authentication/ChangePasswordComponent/Change password' | translate }}</h3>\r\n<!--change-password-form\r\n                      [data]=\"data\"\r\n                      [digitsCount]=\"digitsCount\"\r\n                      [uppercase]=\"uppercase\"\r\n                      [lowercase]=\"lowercase\"\r\n                      [passwordSize]=\"passwordSize\"\r\n                      [specialCharsCount]=\"specialCharsCount\"\r\n                      [validationErrors]=\"validationErrors\"\r\n                      (dataChange)=\"dataChanged()\"\r\n                      (accept)=\"submit($event)\"\r\n                      (cancel)=\"cancel()\">\r\n</change-password-form-->\r\n"

/***/ }),

/***/ "./src/app/authentication/components/change-password/change-password.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/components/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change-password-form/change-password-form.component */ "./src/app/authentication/components/change-password-form/change-password-form.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//

//




//import { TRANSLATIONS } from './i18n/change-password.component.translations';




var errorTitleKey = '@c/authentication/ChangePasswordComponent/ErrorTitle';
var updatedPasswordMessageKey = '@c/authentication/ChangePasswordComponent/Updated Password Message';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, dialog, errorHandlingService, translateService, snackBar, toastTr) {
        this.authService = authService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.translateService = translateService;
        this.snackBar = snackBar;
        this.toastTr = toastTr;
        this.data = {
            old_password: '',
            password: '',
            confirmPassword: ''
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'ChangePasswordRouteComponent/No';
        this.okBtnKey = 'ChangePasswordRouteComponent/Yes';
        this.saveTitleKey = 'ChangePasswordRouteComponent/Discard Title';
        this.saveMessageKey = 'ChangePasswordRouteComponent/Discard Message';
        // end
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    ChangePasswordComponent.prototype.submit = function (data) {
        this.changePassword(data);
    };
    ChangePasswordComponent.prototype.changePassword = function (data) {
        var _this = this;
        this.authService.changePassword(data.old_password, data.password).subscribe(function () {
            _this.unsavedChanges = false;
            _this.translateService.get(updatedPasswordMessageKey).subscribe(function (value) {
                return _this.toastTr.success(value);
            });
            _this.close.emit();
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorTitleKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    ChangePasswordComponent.prototype.cancel = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordFormComponent"]),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "formComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "passwordSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "uppercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "lowercase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "specialCharsCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "digitsCount", void 0);
    ChangePasswordComponent = __decorate([
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateMixin"]]),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/authentication/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/authentication/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"content\">\r\n        <form class=\"login-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" capsLock (capsLock)=\"capsLockOn=$event\" inputFocus>\r\n\r\n            <div class=\"text-center\">\r\n\r\n                <h2 class=\"app-name\">More Sneakers</h2>\r\n\r\n            </div>\r\n\r\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div fxFlexFill>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n\r\n                        <input matInput type=\"email\" formControlName=\"userName\" placeholder=\"Email\">\r\n\r\n                        <error-messages matSuffix for=\"userName\" [validationErrorMessages]=\"validationErrorMessages\"></error-messages>\r\n\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div fxFlexFill>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n\r\n                        <input matInput type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n\r\n                        <error-messages matSuffix for=\"password\" [validationErrorMessages]=\"validationErrorMessages\"></error-messages>\r\n\r\n                        <mat-icon *ngIf=\"capsLockOn\" matSuffix color=\"warn\" class=\"cursor-default\" matTooltip=\"The Caps Lock key is activated!\">warning</mat-icon>\r\n\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" style=\"margin: 20px 0 30px 0\">\r\n\r\n                <!--div fxFlex>\r\n\r\n                    <mat-checkbox color=\"primary\">Remember Me</mat-checkbox>\r\n\r\n                </div>\r\n\r\n                <div fxFlex fxLayoutAlign=\"end\">\r\n\r\n                    <a href=\"javascript:void(0)\">Forget Password</a>\r\n\r\n                </div-->\r\n\r\n            </div>\r\n\r\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div fxFlexFill>\r\n\r\n                    <button mat-raised-button color=\"primary\" class=\"w-100\" type=\"submit\" id=\"loginSubmit\">Login</button>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"flex-grow-1\"></div>\r\n\r\n<div class=\"flex-grow-1\"></div>\r\n\r\n<http-request-indicator [urlExpressions]=\"[configService.config?.apiConfigs.authentication.loginUser.apiEndpoint + '.*']\">\r\n\r\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  /*&:after {\r\n        content: '';\r\n        background: #fff;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        bottom: 50%;\r\n        right: 0;\r\n    }\r\n    &:before {\r\n        content: '';\r\n        background: #3f51b5;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n    }*/ }\n  .login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n  .login-page .content .login-form {\n      padding: 40px;\n      background: #fff;\n      width: 300px;\n      box-shadow: 0 0 10px #ddd; }\n  .login-page .content .login-form input:-webkit-autofill {\n        -webkit-box-shadow: 0 0 0 30px white inset; }\n  .text-center {\n  text-align: center; }\n  .w-100 {\n  width: 100%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osbUJBQWtCO0VBc0JsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkcsRUFDTjtFQTdDRDtJQU9RLFdBQVU7SUFDVixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QixFQWUxQjtFQXpCTDtNQVlZLGdCQUFlO01BQ2YscUJBQW9CO01BQ3BCLGdCQUFlLEVBQ2xCO0VBZlQ7TUFpQlksY0FBYTtNQUNiLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osMEJBQXlCLEVBSTVCO0VBeEJUO1FBc0JnQiwyQ0FBMEMsRUFDN0M7RUF1QmI7RUFDSSxtQkFBa0IsRUFDckI7RUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5hcHAtbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkZGQ7XHJcbiAgICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9Ki9cclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53LTEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var errorKey = 'LoginComponent/Error';
var requiredUserandPasswordKey = 'Required Username and Password';
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(route, router, configService, authService, translateService, toastr, errorHandlingService, snackBar) {
        var _this = _super.call(this, translateService) || this;
        _this.route = route;
        _this.router = router;
        _this.configService = configService;
        _this.authService = authService;
        _this.translateService = translateService;
        _this.toastr = toastr;
        _this.errorHandlingService = errorHandlingService;
        _this.snackBar = snackBar;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.data = {
            userName: '',
            password: '',
        };
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
            this.authService.loginNavigationExtras = undefined;
        }
        this.createFormGroup();
    };
    LoginComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userName = this.formGroup.get('userName').value;
        var password = this.formGroup.get('password').value;
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            if (userName && password) {
                this.authService.loginUser(userName, password)
                    .subscribe(function (resp) {
                    //this.rootActions.setState(this.authService.userPreferences);
                    if (_this.returnUrl && _this.returnUrl.length > 0) {
                        _this.router.navigateByUrl(_this.returnUrl);
                    }
                    else {
                        _this.router.navigate(_this.authService.afterLoginCommands, _this.authService.afterLoginNavigationExtras);
                    }
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
            else {
                console.log("mensaje");
                this.translateService.get([requiredUserandPasswordKey, errorKey]).subscribe(function (translations) {
                    _this.toastr.success(requiredUserandPasswordKey);
                });
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/authentication/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host { /* Safari */\r\n    display: flex; /* Safari */\r\n    flex-direction:         column; /* Safari */\r\n    flex-grow:         1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFDMkIsWUFBWTtJQUNuQyxjQUFjLENBRWtCLFlBQVk7SUFDNUMsK0JBQStCLENBRVQsWUFBWTtJQUNsQyxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgICAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IC8qIFNhZmFyaSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFNhZmFyaSAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICAgICAgICAgY29sdW1uO1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxOyAvKiBTYWZhcmkgKi9cclxuICAgIGZsZXgtZ3JvdzogICAgICAgICAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<http-request-indicator\r\n    [urlExpressions]=\"[configService.config?.apiConfigs.authentication.revokeUser.apiEndpoint]\">\r\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/authentication/components/logout/logout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/logout/logout.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_services_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/services/title.service */ "./src/app/ui/services/title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, authService, configService, translate, titleService, errorHandlingService) {
        this.router = router;
        this.authService = authService;
        this.configService = configService;
        this.translate = translate;
        this.titleService = titleService;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    LogoutComponent.prototype.ngAfterViewInit = function () {
        this.authService.logout();
        this.titleService.setTitle(null);
        this.router.navigate(this.authService.loginCommands, this.authService.loginNavigationExtras);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/authentication/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ui_services_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/manage-session/manage-session.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/components/manage-session/manage-session.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManageSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSessionComponent", function() { return ManageSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/authentication/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageSessionComponent = /** @class */ (function () {
    function ManageSessionComponent(authService) {
        this.authService = authService;
    }
    ManageSessionComponent.prototype.manageSession = function (addOrRemoveCounter) {
        var sessionCounterString = localStorage.getItem('tabCount');
        var sessionCounterActual = sessionCounterString !== undefined && sessionCounterString ? parseInt(localStorage.getItem('tabCount')) : 0;
        if (addOrRemoveCounter) {
            localStorage.setItem('tabCount', (sessionCounterActual + 1).toString());
        }
        else {
            sessionCounterActual = (sessionCounterActual - 1) >= 0 ? (sessionCounterActual - 1) : 0;
            localStorage.setItem('tabCount', sessionCounterActual.toString());
            if (sessionCounterActual === 0) {
                return this.updateExpirationTime();
            }
        }
        return true;
    };
    ManageSessionComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    ManageSessionComponent.prototype.beforeUnloadHandler = function ($event) {
        this.manageSession(false);
        return true;
    };
    ManageSessionComponent.prototype.updateExpirationTime = function () {
        if (this.authService.currentUser) {
            this.authService.updateExpirationTime({ userActive: 0 }).subscribe(function () {
            });
            this.sleep(300);
            return false;
        }
        return true;
    };
    ManageSessionComponent.prototype.ngOnInit = function () {
        this.manageSession(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ManageSessionComponent.prototype, "beforeUnloadHandler", null);
    ManageSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-session',
            template: ""
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ManageSessionComponent);
    return ManageSessionComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/test/test.component.html":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/authentication/components/test/test.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/components/test/test.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication/components/test/test.component.ts ***!
  \******************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/authentication/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/authentication/components/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/authentication/services/auth-guard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/services/auth-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/services/auth.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, toastr, location, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.location = location;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        this.authService.loginNavigationExtras = { queryParams: { returnUrl: this.location.path() } };
        this.router.navigate(this.authService.logoutCommands);
        return false;
    };
    AuthGuardService.prototype.canLoad = function () {
        if (this.authService.isAuthenticated) {
            return true;
        }
        this.authService.loginNavigationExtras = { queryParams: { returnUrl: this.location.path() } };
        this.router.navigate(this.authService.logoutCommands);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication/services/auth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//



//



var AuthService = /** @class */ (function () {
    function AuthService(http, errorHandlingService, router, configService, translate, activatedRoute) {
        this.http = http;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.configService = configService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.userData = this.userSource.asObservable();
        this.userFullName$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalNavigation$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        //setTranslations(this.translate, TRANSLATIONS);
        /*this.localService.getCurrentValue().subscribe(lang => {
            this.currentLang = lang;
        });*/
    }
    Object.defineProperty(AuthService.prototype, "logoutCommands", {
        get: function () {
            return this.errorHandlingService.logoutCommands;
        },
        set: function (value) {
            this.errorHandlingService.logoutCommands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this.errorHandlingService.logoutNavigationExtras;
        },
        set: function (value) {
            this.errorHandlingService.logoutNavigationExtras = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getHeaders = function (addUserOauth, isForm, addAuthorization) {
        if (addUserOauth === void 0) { addUserOauth = false; }
        if (isForm === void 0) { isForm = false; }
        if (addAuthorization === void 0) { addAuthorization = true; }
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept-Language': this.currentLang,
            'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
        });
        if (addAuthorization) {
            requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
        }
        if (addUserOauth) {
            requestOptions = requestOptions.append('useroauth', this.userToken);
        }
        return requestOptions;
    };
    Object.defineProperty(AuthService.prototype, "userToken", {
        get: function () {
            return this.http.userToken;
        },
        set: function (value) {
            this.http.userToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentLang", {
        get: function () {
            return this.http.currentLanguage;
        },
        set: function (value) {
            this.http.currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var localStorageUser = localStorage.getItem('currentUser');
            if (localStorageUser && localStorageUser !== 'null') {
                return JSON.parse(localStorageUser);
            }
            return null;
        },
        set: function (value) {
            localStorage.setItem('currentUser', value ? JSON.stringify(value) : null);
            this.userFullName$.next(this.loggedUserInfo());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return this.userToken && this.userToken !== 'null' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loggedUserInfo = function () {
        var value = this.currentUser;
        var userFullname = null;
        if (value) {
            userFullname = value.first_name && value.last_name ? value.first_name + " " + value.last_name : null;
            if (!userFullname) {
                userFullname = value.first_name ? value.first_name : value.last_name;
                userFullname = userFullname ? userFullname : value.username;
            }
        }
        return userFullname;
    };
    AuthService.prototype.loginUser = function (email, password, code) {
        var _this = this;
        // TEMPORARY HACK. SEE https://github.com/angular/angular/issues/18261
        password = password.replace("+", "%2B");
        //
        var headers = this.getHeaders(false, false, false);
        var credentials = {
            "email": email,
            "password": password
        };
        return this.http.post(this.configService.config.apiConfigs.authentication.loginUser.apiEndpoint, credentials, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var token = response.data.access_token;
            if (!token || token.length === 0) {
                throw new Error();
            }
            _this.userToken = token;
            //const { user } = response; TODO
            if (response) {
                //this.currentUser = user;
                _this.userToken = token;
                _this.userPreferences = response.preferences && response.preferences.length ?
                    JSON.parse(response.preferences) : {};
            }
            else {
                _this.currentUser = null;
                throw new Error();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        }));
    };
    AuthService.prototype.logout = function () {
        /*let headers = this.getHeaders(false, true, false);
        let credentials = 'grant_type=password'
            + '&token=' + this.userToken;
        // Using the builtin Http of angular for prevent handling the errors and showing messages to the user
        this.http.httpClient.post(this.configService.config.apiConfigs.authentication.revokeUser.apiEndpoint,
            credentials, { headers: headers }).subscribe();*/
        this.logoutSpa();
    };
    AuthService.prototype.postUserPreferences = function (preferences) {
        var headers = this.getHeaders(true);
        return this.http.post(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, preferences);
    };
    AuthService.prototype.getUserPreferences = function () {
        var _this = this;
        var headers = this.getHeaders(true);
        return this.http.get(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.userPreferences = JSON.parse(response.preferences);
            //this.rootActions.setState(this.userPreferences);TODO
            return _this.userPreferences;
        }));
    };
    AuthService.prototype.logoutSpa = function () {
        this.userToken = null;
        this.currentUser = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    };
    AuthService.prototype.updateExpirationTime = function (data) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.tokenExpirationTime.apiEndpoint, data, { headers: this.getHeaders(true) });
    };
    AuthService.prototype.changePassword = function (currentPassword, newPassword) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.changePassword.apiEndpoint, {
            old_password: currentPassword,
            new_password: newPassword
        }, { headers: this.getHeaders() });
    };
    AuthService.prototype.patchUser = function (data, userId) {
        return this.http.patch(this.configService.config.apiConfigs.users.apiEndpoint + userId + '/', JSON.stringify(data));
    };
    AuthService.prototype.passUserData = function (user) {
        this.userSource.next(user);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingHttpService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/config/services/config-resolve.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/config/services/config-resolve.service.ts ***!
  \***********************************************************/
/*! exports provided: ConfigResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigResolveService", function() { return ConfigResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { setTranslations } from '@c/ngx-translate';
//import { ErrorHandlingService } from '@c/error-handling';
//import { TRANSLATIONS } from './i18n/config-resolve.service.translations';

var ConfigResolveService = /** @class */ (function () {
    function ConfigResolveService(/*private errorHandlinService: ErrorHandlingService,*/ configService, translate) {
        this.configService = configService;
        this.translate = translate;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ConfigResolveService.prototype.resolve = function (route) {
        if (this.configService.config) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.configService.config);
        }
        return this.configService.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            //this.errorHandlinService.handleUiError('@c/config/ConfigResolveService/Error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    };
    ConfigResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ConfigResolveService);
    return ConfigResolveService;
}());



/***/ }),

/***/ "./src/app/config/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/config/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ErrorHandlingHttpService } from '@c/error-handling';


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getConfig = function () {
        var _this = this;
        return this.http.get('assets/data/config.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.config = response;
        }));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/error-handling/error-handling.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/error-handling/error-handling.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorHandlingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingModule", function() { return ErrorHandlingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/http-headers-interceptor.service */ "./src/app/error-handling/interceptors/http-headers-interceptor.service.ts");
/* harmony import */ var _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/error-handling-interceptor.service */ "./src/app/error-handling/interceptors/error-handling-interceptor.service.ts");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/custom-snackbar/custom-snackbar.module */ "./src/app/error-handling/modules/custom-snackbar/custom-snackbar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//


//
//import { NgxTranslateModule } from '../../ngx-translate';TODO




var ErrorHandlingModule = /** @class */ (function () {
    function ErrorHandlingModule() {
    }
    ErrorHandlingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                //NgxTranslateModule,TODO
                _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarModule"],
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["HttpHeadersInterceptorService"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingInterceptorService"], multi: true },
                _services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]],
            declarations: [],
            exports: []
        })
    ], ErrorHandlingModule);
    return ErrorHandlingModule;
}());



/***/ }),

/***/ "./src/app/error-handling/interceptors/error-handling-interceptor.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/error-handling/interceptors/error-handling-interceptor.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ErrorHandlingInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingInterceptorService", function() { return ErrorHandlingInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//


//

var ErrorHandlingInterceptorService = /** @class */ (function () {
    function ErrorHandlingInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
    }
    ErrorHandlingInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (request) {
            if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.errorHandlingService.serverOnline.next(true);
            }
            return request;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_this.errorHandlingService.handleServiceError(error));
        }));
    };
    ErrorHandlingInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ErrorHandlingInterceptorService);
    return ErrorHandlingInterceptorService;
}());



/***/ }),

/***/ "./src/app/error-handling/interceptors/http-headers-interceptor.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/error-handling/interceptors/http-headers-interceptor.service.ts ***!
  \*********************************************************************************/
/*! exports provided: HttpHeadersInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptorService", function() { return HttpHeadersInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//

var HttpHeadersInterceptorService = /** @class */ (function () {
    function HttpHeadersInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
    }
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('userToken');
        },
        set: function (value) {
            localStorage.setItem('userToken', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    HttpHeadersInterceptorService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
            'Authorization': this.userToken ? 'Bearer ' + this.userToken : '',
        });
        return requestOptions;
    };
    HttpHeadersInterceptorService.prototype.getRequestOptionArgs = function (request) {
        if (request.headers.keys().length === 0) {
            var headers = this.getHeaders();
            var req = request.clone({
                setHeaders: {
                    'Accept-Language': headers.get('Accept-Language'),
                    'Content-Type': headers.get('Content-Type'),
                    'Authorization': headers.get('Authorization'),
                }
            });
            return req;
        }
        else {
            return request;
        }
    };
    HttpHeadersInterceptorService.prototype.intercept = function (request, next) {
        request = this.getRequestOptionArgs(request);
        return next.handle(request);
    };
    HttpHeadersInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"]])
    ], HttpHeadersInterceptorService);
    return HttpHeadersInterceptorService;
}());



/***/ }),

/***/ "./src/app/error-handling/models/handled-error.ts":
/*!********************************************************!*\
  !*** ./src/app/error-handling/models/handled-error.ts ***!
  \********************************************************/
/*! exports provided: HandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandledError", function() { return HandledError; });
var HandledError = /** @class */ (function () {
    function HandledError() {
        this.message = '';
        this.error = new Error();
    }
    return HandledError;
}());



/***/ }),

/***/ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-200px{\r\nwidth: 200px;\r\n}\r\n\r\n.width-20px{\r\nwidth: 20px;\r\n}\r\n\r\n.margin-auto-5px-auto-5px{\r\n    margin: auto 5px auto 5px !important;\r\n}\r\n\r\n.text-align-justify{\r\n    text-align: justify\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItaGFuZGxpbmcvbW9kdWxlcy9jdXN0b20tc25hY2tiYXIvY29tcG9uZW50cy9jdXN0b20tc25hY2tiYXIvY3VzdG9tLXNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0NBQ1o7O0FBRUQ7QUFDQSxZQUFZO0NBQ1g7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1oYW5kbGluZy9tb2R1bGVzL2N1c3RvbS1zbmFja2Jhci9jb21wb25lbnRzL2N1c3RvbS1zbmFja2Jhci9jdXN0b20tc25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aC0yMDBweHtcclxud2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ud2lkdGgtMjBweHtcclxud2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYXV0by01cHgtYXV0by01cHh7XHJcbiAgICBtYXJnaW46IGF1dG8gNXB4IGF1dG8gNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWp1c3RpZnl7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-flex\" *ngIf=\"data.messageType == 'Error'\">\r\n        <div class=\"margin-auto-5px-auto-5px\">\r\n            <mat-icon class=\"margin-right-10px\">cancel</mat-icon>\r\n        </div>\r\n        <div class=\"display-flex width-200px\">\r\n            <div class=\"text-align-justify\">\r\n    \r\n                <div *ngIf=\"data.messageTitle; else elseTitle\">\r\n                    <p>\r\n                        <b>{{ data.messageTitle | translate }}</b>\r\n                    </p>\r\n                </div>\r\n                <ng-template #elseTitle>\r\n                    <p>\r\n                        <b>{{ 'Error' | translate }}</b>\r\n                    </p>\r\n                </ng-template>    \r\n                {{ data.messageData | translate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"display-flex\" *ngIf=\"data.messageType == 'Success'\">\r\n        <div class=\"margin-auto-5px-auto-5px\">\r\n            <mat-icon class=\"margin-right-10px\">check</mat-icon>\r\n        </div>\r\n        <div class=\"display-flex width-200px\">\r\n            <div class=\"text-align-justify\">    \r\n                <div *ngIf=\"data.messageTitle\">\r\n                    <p>\r\n                        <b>{{ data.messageTitle | translate }}</b>\r\n                    </p>\r\n                </div>    \r\n                {{ data.messageData | translate }}\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CustomSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarComponent", function() { return CustomSnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//

//
var CustomSnackbarComponent = /** @class */ (function () {
    function CustomSnackbarComponent(translate, data) {
        this.translate = translate;
        this.data = data;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    CustomSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-snackbar',
            template: __webpack_require__(/*! ./custom-snackbar.component.html */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.html"),
            styles: [__webpack_require__(/*! ./custom-snackbar.component.css */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], Object])
    ], CustomSnackbarComponent);
    return CustomSnackbarComponent;
}());



/***/ }),

/***/ "./src/app/error-handling/modules/custom-snackbar/custom-snackbar.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/error-handling/modules/custom-snackbar/custom-snackbar.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomSnackbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarModule", function() { return CustomSnackbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-snackbar/custom-snackbar.component */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//


//

var CustomSnackbarModule = /** @class */ (function () {
    function CustomSnackbarModule() {
    }
    CustomSnackbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ],
            declarations: [
                _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]
            ],
            exports: [
                _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]
            ]
        })
    ], CustomSnackbarModule);
    return CustomSnackbarModule;
}());



/***/ }),

/***/ "./src/app/error-handling/services/error-handling-http.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/error-handling/services/error-handling-http.service.ts ***!
  \************************************************************************/
/*! exports provided: RequestType, ErrorHandlingHttpService, errorHandlingServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingHttpService", function() { return ErrorHandlingHttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandlingServiceFactory", function() { return errorHandlingServiceFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestType;
(function (RequestType) {
    RequestType[RequestType["Get"] = 0] = "Get";
    RequestType[RequestType["Post"] = 1] = "Post";
    RequestType[RequestType["Delete"] = 2] = "Delete";
    RequestType[RequestType["Patch"] = 3] = "Patch";
    RequestType[RequestType["Put"] = 4] = "Put";
    RequestType[RequestType["Request"] = 5] = "Request";
})(RequestType || (RequestType = {}));
var ErrorHandlingHttpService = /** @class */ (function () {
    function ErrorHandlingHttpService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
        this.showDialogTime = 70 * 1000;
        this.countDown = 60;
        this._expire_in = 0;
    }
    Object.defineProperty(ErrorHandlingHttpService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('userToken');
        },
        set: function (value) {
            localStorage.setItem('userToken', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingHttpService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorHandlingHttpService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
            'Authorization': this.userToken ? 'Bearer ' + this.userToken : '',
        });
        return requestOptions;
    };
    ErrorHandlingHttpService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = {
                headers: this.getHeaders(),
            };
        }
        else {
            if (options.headers == null) {
                options.headers = this.getHeaders();
            }
        }
        return options;
    };
    ErrorHandlingHttpService.prototype.requestInterceptor = function (type, url, body, options) {
        var _this = this;
        var request = null;
        switch (type) {
            case RequestType.Get: {
                request = this.httpClient.get(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Post: {
                request = this.httpClient.post(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Delete: {
                request = this.httpClient.delete(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Patch: {
                request = this.httpClient.patch(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Put: {
                request = this.httpClient.put(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Request: {
                request = this.httpClient.request(url);
                break;
            }
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) {
            if (value) {
                var expires_in = value.expires_in;
                // handle remaining time
                if (expires_in && expires_in > 0) {
                    _this._expire_in = expires_in;
                    if (_this._sessionExpire$) {
                        _this._sessionExpire$.unsubscribe();
                    }
                    // Checking if the expiration time is less than X count of seconds and
                    // if it's then start a counter for the remaining time between expiration time and notification time
                    // X count of seconds before expiration.If isn't, then show the notification immediately
                    var timeToShowDialog = _this._expire_in * 1000;
                    var countDown_1 = _this.countDown;
                    if (_this.showDialogTime < timeToShowDialog) {
                        timeToShowDialog -= _this.showDialogTime;
                        // Send a notification 70 seconds before session expire
                        _this._sessionExpire$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(timeToShowDialog).subscribe(function (here) {
                            _this.errorHandlingService.showExpireNotification.next(countDown_1);
                        });
                    }
                    else {
                        if (_this._expire_in <= _this.countDown) {
                            countDown_1 = _this._expire_in;
                        }
                        _this.errorHandlingService.showExpireNotification.next(countDown_1);
                    }
                }
            }
            // Common place where put code we want to execute for all the request when are success
            _this.errorHandlingService.serverOnline.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_this.errorHandlingService.handleServiceError(error));
        }));
    };
    ErrorHandlingHttpService.prototype.request = function (req) {
        return this.requestInterceptor(RequestType.Request, req, null);
    };
    ErrorHandlingHttpService.prototype.get = function (url, options) {
        return this.requestInterceptor(RequestType.Get, url, null, options);
    };
    ErrorHandlingHttpService.prototype.post = function (url, body, options) {
        return this.requestInterceptor(RequestType.Post, url, body, options);
    };
    ErrorHandlingHttpService.prototype.put = function (url, body, options) {
        return this.requestInterceptor(RequestType.Put, url, body, options);
    };
    ErrorHandlingHttpService.prototype.delete = function (url, options) {
        return this.requestInterceptor(RequestType.Delete, url, null, options);
    };
    ErrorHandlingHttpService.prototype.patch = function (url, body, options) {
        return this.requestInterceptor(RequestType.Patch, url, body, options);
    };
    ErrorHandlingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ErrorHandlingHttpService);
    return ErrorHandlingHttpService;
}());

function errorHandlingServiceFactory(errorHandlingService, httpClient) {
    return new ErrorHandlingHttpService(httpClient, errorHandlingService);
}


/***/ }),

/***/ "./src/app/error-handling/services/error-handling.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/error-handling/services/error-handling.service.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _models_handled_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/handled-error */ "./src/app/error-handling/models/handled-error.ts");
/* harmony import */ var _modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//




//


var errorClientKey = 'Bad request';
var errorServerKey = 'The server encountered an internal error.';
var errorServerDownKey = 'The requested server is unavailable. Please try again later.';
var errorTitle = 'Error';
var ErrorHandlingService = /** @class */ (function () {
    function ErrorHandlingService(snackBar, translate, router) {
        this.snackBar = snackBar;
        this.translate = translate;
        this.router = router;
        this.serverOnline = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this.showExpireNotification = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showNotificationObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.timeBeforeEmmitTheSameError = 1000;
        //setTranslations(translate, TRANSLATIONS);
        this.onServerUp();
        this.subscriptionToNotification();
    }
    ErrorHandlingService.prototype.subscriptionToNotification = function () {
        var _this = this;
        this.showNotificationObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (error) {
            // Preventing shows more than one time the token expiration error
            if (_this.lastEmittedNotification && _this.lastEmittedNotification.errorMessage === error.errorMessage) {
                var differenceInMilliSeconds = error.date.getTime() - _this.lastEmittedNotification.date.getTime();
                if ((differenceInMilliSeconds <= _this.timeBeforeEmmitTheSameError)) {
                    return false;
                }
            }
            return true;
        })).subscribe(function (value) {
            _this.lastEmittedNotification = value;
            _this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarComponent"], {
                data: { messageData: value.errorMessage, messageType: "Error" },
                duration: 2000,
                horizontalPosition: 'right',
                panelClass: ['background-color-accent'],
            });
            //  });
        });
    };
    Object.defineProperty(ErrorHandlingService.prototype, "logoutCommands", {
        get: function () {
            return this._logoutCommands;
        },
        set: function (value) {
            this._logoutCommands = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this._logoutNavigationExtras;
        },
        set: function (value) {
            this._logoutNavigationExtras = value;
        },
        enumerable: true,
        configurable: true
    });
    ErrorHandlingService.prototype.onServerUp = function () {
        var _this = this;
        this.serverOnline.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value === true) {
                // Removing timeOutClient threat if it was provided
                if (_this.timeOutClient$) {
                    _this.timeOutClient$.unsubscribe();
                    _this.timeOutClient$ = null;
                }
                // Removing timeOutServer threat if it was provided
                if (_this.timeOutServer$) {
                    _this.timeOutServer$.unsubscribe();
                    _this.timeOutServer$ = null;
                }
                if (_this.toastOfServerDown !== undefined && _this.toastOfServerDown !== null) {
                    _this.toastOfServerDown.dismiss();
                }
            }
        });
    };
    ErrorHandlingService.prototype.handleServiceError = function (err) {
        var handledError = new _models_handled_error__WEBPACK_IMPORTED_MODULE_7__["HandledError"]();
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // If the request have status code equal to 0 is that the spa can't reach the api
            if (err.status === 0) {
                // Setting the state of the server to down and emitting the new state
                if (this.serverOnline.getValue() === true) {
                    // Returning error code 410 corresponding to "Gone" response that means the the resource you want not exist right now
                    handledError.errorCode = 410;
                    //this.translate.get([errorServerDownKey, errorTitle]).subscribe(text => {TODO
                    this.toastOfServerDown = this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarComponent"], {
                        data: { messageData: errorServerDownKey, messageTitle: errorTitle, messageType: "Error" },
                        horizontalPosition: 'right',
                        panelClass: ['background-color-accent'],
                    });
                    //});
                    this.serverOnline.next(false);
                }
                return handledError;
            }
            // Setting the state of the server to up if the error is not "server down"
            this.serverOnline.next(true);
            try {
                // handledError.message = err.statusText;
                var errObj = err.error;
                console.log(err);
                // Managing error from client request
                if (err.status >= 400 && err.status < 500) {
                    return this.handlingClientErrors(err, errObj, handledError);
                }
                else {
                    // Handling errors in the server side
                    return this.handlingServerErrors(err, errObj, handledError);
                }
            }
            catch (exception) {
                /* If this code is executed is because the response from the api doesn't have a valid json format that means
                 is returning some kind of html or something else*/
                if (err.status >= 400 && err.status < 500) {
                    this.translate.get(errorClientKey).subscribe(function (text) {
                        handledError.message = text;
                    });
                }
                else {
                    this.translate.get(errorServerKey).subscribe(function (text) {
                        handledError.message = text;
                    });
                }
                return handledError;
            }
        }
        else {
            handledError.error = err;
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handlingClientErrors = function (err, errObj, handledError) {
        // Managing authentication errors 
        if (err.status === 401) {
            // Checking if the authentication error is caused by token expiration
            if (errObj == "Unauthorized") {
                // redirecting the user to login page if the error is caused by token expiration               
                handledError.errorCode = errObj.error_code;
                handledError.logoutCommands = this.logoutCommands;
                handledError.logoutNavigationExtras = this.logoutNavigationExtras;
                handledError.message = errObj;
            }
            else {
                // Checking if the error is caused by trying to authenticate with a wrong password
                if (errObj.detail && errObj.detail[0] && errObj.detail[0].error_description) {
                    handledError.message = errObj.detail[0].error_description;
                }
                else {
                    this.buildingErrorMessage(errObj, handledError);
                }
            }
            /*if (errObj.error_code && errObj.error_code >= 0) {
                // redirecting the user to login page if the error is caused by token expiration
                if (errObj.error_code === 1402) {
                    handledError.errorCode = errObj.error_code;
                    handledError.logoutCommands = this.logoutCommands;
                    handledError.logoutNavigationExtras = this.logoutNavigationExtras;
                }
                handledError.message = errObj.detail[0].toString();
            } else {
                // Checking if the error is caused by trying to authenticate with a wrong password
                if (errObj.detail && errObj.detail[0] && errObj.detail[0].error_description) {
                    handledError.message = errObj.detail[0].error_description;
                } else {
                    this.buildingErrorMessage(errObj, handledError);
                }
            }*/
            return handledError;
        }
        else {
            // If the error comes without a error code then is possible that is a kind of form validation error
            if (errObj.error_code) {
                handledError.errorCode = errObj.error_code;
                return handledError;
            }
            else {
                handledError.errorCode = -1;
                // If the request has the detail field is because is a error throw for some kind of validation
                if (errObj.detail) {
                    if (errObj.detail[0]) {
                        this.buildingErrorMessage(errObj, handledError);
                        return handledError;
                    }
                    // if the error don't have a error detail key means that haven't managed by the api so show a client error
                    this.translate.get(errorClientKey).subscribe(function (text) {
                        handledError.message = text;
                    });
                    return handledError;
                }
                // if the error don't have a error detail key means that haven't managed by the api so show a client error
                this.translate.get(errorClientKey).subscribe(function (text) {
                    handledError.message = text;
                });
                return handledError;
            }
        }
    };
    ErrorHandlingService.prototype.handlingServerErrors = function (err, errObj, handledError) {
        if (errObj.detail) {
            handledError.message = errObj.detail[0];
            return handledError;
        }
        else {
            // Managing all the remaining errors as a server side errors
            this.translate.get(errorServerKey).subscribe(function (text) {
                handledError.message = text;
            });
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handleUiError = function (key, err) {
        var serverState = this.serverOnline.getValue();
        var error = err.error;
        // If server state is online then continues managing the error
        console.log(error);
        if (serverState) {
            // Displaying the error if it really contains a message
            if (error.message) {
                this.showNotificationObservable.next({
                    key: key,
                    errorMessage: error.message,
                    errorCode: error.errorCode,
                    date: new Date()
                });
            }
            if (error.logoutCommands) {
                this.router.navigate(error.logoutCommands, error.logoutNavigationExtras);
            }
        }
    };
    ErrorHandlingService.prototype.errorDaemon = function (path, error, handledError) {
        var _this = this;
        if (error.constructor === Object) {
            Object.keys(error).forEach(function (key) {
                path.push(key);
                _this.errorDaemon(path, error[key], handledError);
                path.pop();
            });
        }
        else {
            var pathStr = this.capitalizeWord(path.join('.'));
            var errorStr = this.capitalizeWord(error.constructor === Array ? error.join(' ') : error);
            if (handledError.message === '' || handledError.message === undefined) {
                handledError.message = pathStr + ': ' + errorStr + '\n';
            }
            else {
                handledError.message = handledError.message + pathStr + ': ' + ' ' + errorStr + '\n';
            }
        }
    };
    ErrorHandlingService.prototype.buildingErrorMessage = function (error, handledError) {
        // Checking if the error comes with more than one validation error
        if (error.detail[0].constructor === Object) {
            var path = [];
            this.errorDaemon(path, error.detail[0], handledError);
            // sending the form validations errors to the component where are the fields
            handledError.formErrors = error.detail[0];
        }
        else {
            handledError.message = error.detail[0];
        }
    };
    ErrorHandlingService.prototype.capitalizeWord = function (word) {
        return typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    };
    ErrorHandlingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "./src/app/error-handling/services/toastr.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/error-handling/services/toastr.service.ts ***!
  \***********************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "./src/app/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastrService = /** @class */ (function () {
    function ToastrService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastrService.prototype.success = function (message, title) {
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: "Success", messageData: message, messageTitle: title },
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['background-color-primary'],
        });
    };
    ToastrService.prototype.error = function (message, title) {
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: "Error", messageData: message, messageTitle: title },
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['background-color-accent'],
        });
    };
    ToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h0dHAtcmVxdWVzdC1pbmRpY2F0b3IvY29tcG9uZW50cy9odHRwLXJlcXVlc3QtaW5kaWNhdG9yL2h0dHAtcmVxdWVzdC1pbmRpY2F0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HttpRequestIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorComponent", function() { return HttpRequestIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-request-indicators.service */ "./src/app/http-request-indicator/services/http-request-indicators.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/http-request-indicator/services/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// "@types/lodash": "ts2.0",
// "lodash": "4.17.4",
// "lodash.uniqueid": "4.0.1"



var HttpRequestIndicatorComponent = /** @class */ (function () {
    function HttpRequestIndicatorComponent(httpRequestIndicators, loadingService) {
        this.httpRequestIndicators = httpRequestIndicators;
        this.loadingService = loadingService;
        this.uid = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]();
    }
    HttpRequestIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.httpRequestIndicators
            .registerIndicator(this.uid, this.urlExpressions)
            .subscribe(function (visible) {
            _this.loadingService.loading$.next(visible);
        });
    };
    HttpRequestIndicatorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.httpRequestIndicators.unregisterIndicator(this.uid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HttpRequestIndicatorComponent.prototype, "urlExpressions", void 0);
    HttpRequestIndicatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'http-request-indicator',
            template: __webpack_require__(/*! ./http-request-indicator.component.html */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.html"),
            styles: [__webpack_require__(/*! ./http-request-indicator.component.css */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestIndicatorsService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], HttpRequestIndicatorComponent);
    return HttpRequestIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHR0cC1yZXF1ZXN0LWluZGljYXRvci9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9odHRwLXJlcXVlc3QtaW5kaWNhdG9yL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"loading\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: none;\">\r\n    <g transform=\"rotate(0 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(30 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(60 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(90 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(120 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(150 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(180 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(210 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(240 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(270 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(300 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n    <g transform=\"rotate(330 50 50)\">\r\n        <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\">\r\n          <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"/>\r\n        </rect>\r\n    </g>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/http-request-indicator/components/loading/loading.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/http-request-indicator/components/loading/loading.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/http-request-indicator/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/http-request-indicator/components/loading/loading.component.css")]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/http-request-indicator.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/http-request-indicator/http-request-indicator.module.ts ***!
  \*************************************************************************/
/*! exports provided: HttpRequestIndicatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorModule", function() { return HttpRequestIndicatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/http-request-indicator/http-request-indicator.component */ "./src/app/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts");
/* harmony import */ var _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/indicated-interceptor.service */ "./src/app/http-request-indicator/services/indicated-interceptor.service.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//



var HttpRequestIndicatorModule = /** @class */ (function () {
    function HttpRequestIndicatorModule() {
    }
    HttpRequestIndicatorModule_1 = HttpRequestIndicatorModule;
    HttpRequestIndicatorModule.forRoot = function () {
        return {
            ngModule: HttpRequestIndicatorModule_1,
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["IndicatedInterceptor"], multi: true }
            ]
        };
    };
    HttpRequestIndicatorModule = HttpRequestIndicatorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]],
            exports: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]]
        })
    ], HttpRequestIndicatorModule);
    return HttpRequestIndicatorModule;
    var HttpRequestIndicatorModule_1;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/models/http-request-indicator.ts":
/*!*************************************************************************!*\
  !*** ./src/app/http-request-indicator/models/http-request-indicator.ts ***!
  \*************************************************************************/
/*! exports provided: HttpRequestIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicator", function() { return HttpRequestIndicator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var HttpRequestIndicator = /** @class */ (function () {
    function HttpRequestIndicator(uid, urlExpressions) {
        this.uid = uid;
        this.urlExpressions = urlExpressions;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    return HttpRequestIndicator;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/http-request-indicators.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/http-request-indicator/services/http-request-indicators.service.ts ***!
  \************************************************************************************/
/*! exports provided: HttpRequestIndicatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorsService", function() { return HttpRequestIndicatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/http-request-indicator */ "./src/app/http-request-indicator/models/http-request-indicator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequestIndicatorsService = /** @class */ (function () {
    function HttpRequestIndicatorsService() {
        this.indicators = [];
    }
    HttpRequestIndicatorsService.prototype.registerIndicator = function (uid, urlExpressions) {
        var indicator = new _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicator"](uid, urlExpressions);
        this.indicators.push(indicator);
        return indicator.show;
    };
    HttpRequestIndicatorsService.prototype.unregisterIndicator = function (uid) {
        this.indicators.splice(this.indicators.map(function (indicator) { return indicator.uid; }).indexOf(uid), 1);
    };
    HttpRequestIndicatorsService.prototype.findIndicators = function (url) {
        var indicators = [];
        for (var i = 0; i < this.indicators.length; i++) {
            var indicator = this.indicators[i];
            for (var j = 0; j < indicator.urlExpressions.length; j++) {
                var expression = indicator.urlExpressions[j];
                var pattern = new RegExp(expression);
                if (pattern.test(url)) {
                    indicators.push(indicator);
                    break;
                }
            }
        }
        return indicators;
    };
    HttpRequestIndicatorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpRequestIndicatorsService);
    return HttpRequestIndicatorsService;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/indicated-interceptor.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/http-request-indicator/services/indicated-interceptor.service.ts ***!
  \**********************************************************************************/
/*! exports provided: IndicatedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatedInterceptor", function() { return IndicatedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-request-indicators.service */ "./src/app/http-request-indicator/services/http-request-indicators.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndicatedInterceptor = /** @class */ (function () {
    function IndicatedInterceptor(httpRequestIndicatorsService) {
        this.httpRequestIndicatorsService = httpRequestIndicatorsService;
    }
    IndicatedInterceptor.prototype.intercept = function (req, next) {
        var indicators = this.httpRequestIndicatorsService.findIndicators(req.url.toString());
        indicators.forEach(function (indicator) { return indicator.show.next(true); });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (error) { }, function () {
            indicators.forEach(function (indicator) { return indicator.show.next(false); });
        }));
    };
    IndicatedInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicatorsService"]])
    ], IndicatedInterceptor);
    return IndicatedInterceptor;
}());



/***/ }),

/***/ "./src/app/http-request-indicator/services/loading.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/http-request-indicator/services/loading.service.ts ***!
  \********************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading/loading.component */ "./src/app/http-request-indicator/components/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'loading-overlay-backdrop',
    panelClass: 'loading-overlay-panel'
};
var LoadingService = /** @class */ (function () {
    function LoadingService(router, overlay) {
        var _this = this;
        this.router = router;
        this.overlay = overlay;
        this.counter = 0;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loading$.subscribe(function (loading) {
            if (loading) {
                _this.counter++;
                if (_this.counter > 0 && !_this.overlayRef) {
                    _this.overlayRef = _this.createOverlay(DEFAULT_CONFIG);
                    var loadingPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]);
                    _this.overlayRef.attach(loadingPortal);
                }
            }
            else {
                _this.counter--;
                _this.counter = _this.counter < 0 ? 0 : _this.counter;
                if (_this.counter === 0) {
                    if (_this.overlayRef) {
                        _this.overlayRef.dispose();
                        _this.overlayRef = null;
                    }
                }
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.loading$.next(true);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.loading$.next(false);
            }
        });
    }
    LoadingService.prototype.getOverlayConfig = function (config) {
        var positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    LoadingService.prototype.createOverlay = function (config) {
        // Returns an OverlayConfig
        var overlayConfig = this.getOverlayConfig(config);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/ngrx/ngrx.module.ts":
/*!*************************************!*\
  !*** ./src/app/ngrx/ngrx.module.ts ***!
  \*************************************/
/*! exports provided: NgrxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxModule", function() { return NgrxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/root-actions.service */ "./src/app/ngrx/services/root-actions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//


var NgrxModule = /** @class */ (function () {
    function NgrxModule() {
    }
    NgrxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]
            ],
            declarations: [],
            exports: [],
            providers: [
                _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__["RootActionsService"]
            ]
        })
    ], NgrxModule);
    return NgrxModule;
}());



/***/ }),

/***/ "./src/app/ngrx/services/root-actions.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngrx/services/root-actions.service.ts ***!
  \*******************************************************/
/*! exports provided: RootActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootActionsService", function() { return RootActionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootActionsService = /** @class */ (function () {
    function RootActionsService(store) {
        this.store = store;
    }
    RootActionsService.prototype.setState = function (state) {
        //this.store.dispatch(createAction(RootActionsService.SET_STATE, state));
    };
    RootActionsService.SET_STATE = 'SET_STATE';
    RootActionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], RootActionsService);
    return RootActionsService;
}());



/***/ }),

/***/ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts ***!
  \**********************************************************************************/
/*! exports provided: BaseReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReactiveFormComponent", function() { return BaseReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseReactiveFormComponent = /** @class */ (function () {
    function BaseReactiveFormComponent(translateService) {
        var _this = this;
        this.translateService = translateService;
        this.showValidationError = true;
        this._validationErrorMessages = [];
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLangChange$ = this.translateService.onLangChange.subscribe(function () {
            _this.translateValidationErrorMessages();
            _this.onLanguageChange();
        });
    }
    Object.defineProperty(BaseReactiveFormComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReactiveFormComponent.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        set: function (validationErrors) {
            this._validationErrors = validationErrors;
            this.updateValidationAndValidity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReactiveFormComponent.prototype, "validationErrorMessages", {
        get: function () {
            return this._validationErrorMessages;
        },
        set: function (value) {
            this._validationErrorMessages = value;
            this.translateValidationErrorMessages();
        },
        enumerable: true,
        configurable: true
    });
    BaseReactiveFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this._data);
        }
        else {
            this.triggerValidation();
        }
    };
    BaseReactiveFormComponent.prototype.cancelClicked = function () {
        this.cancel.emit();
    };
    BaseReactiveFormComponent.prototype.triggerValidation = function () {
        this.executeInAllFormControls(function (path, formControl) {
            formControl.markAsTouched();
            formControl.updateValueAndValidity();
        });
    };
    BaseReactiveFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.formGroupValueChanges$ = this.formGroup.valueChanges.subscribe(function (values) {
            if (_this.formGroup.dirty) {
                _this.data = Object.assign(_this.data, _this.formGroup.value);
                _this.dataChange.emit();
            }
        });
        this.onAfterViewInit();
    };
    BaseReactiveFormComponent.prototype.ngOnDestroy = function () {
        if (this.formGroupValueChanges$) {
            this.formGroupValueChanges$.unsubscribe();
        }
        if (this.onLangChange$) {
            this.onLangChange$.unsubscribe();
        }
        this.onDestroy();
    };
    BaseReactiveFormComponent.prototype.updateValidationAndValidity = function () {
        if (this.validationErrors) {
            this.executeInAllFormControls(function (path, formControl, data) {
                console.log("controlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                var control = data;
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var key = path_1[_i];
                    if (control[key]) {
                        if (typeof control[key] === 'string' || control[key].length > 0) {
                            formControl.setErrors({ message: control[key] });
                        }
                        else {
                            control = control[key];
                        }
                    }
                }
            }, this.validationErrors);
        }
    };
    BaseReactiveFormComponent.prototype.executeInAllFormControls = function (actionToExecute, data) {
        var _this = this;
        Object.keys(this.formGroup.controls).forEach(function (field) {
            var item = _this.formGroup.controls[field];
            var path = [];
            path.push(field);
            _this.executeInControl(path, item, actionToExecute, data);
        });
    };
    BaseReactiveFormComponent.prototype.executeInControl = function (path, item, actionToExecute, data) {
        var _this = this;
        if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            actionToExecute(path, item, data);
            path.pop();
        }
        else if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"] || item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
            Object.keys(item.controls).forEach(function (field) {
                var control = item.controls[field];
                path.push(field);
                _this.executeInControl(path, control, actionToExecute, data);
            });
        }
        else {
            return;
        }
    };
    BaseReactiveFormComponent.prototype.translateValidationErrorMessages = function () {
        var _this = this;
        var newTranslations = [];
        this.validationErrorMessages.forEach(function (value) {
            newTranslations.push({
                type: value.type,
                key: value.key,
                params: value.params,
                translation: _this.translateService.instant(value.key, value.params)
            });
        });
        this._validationErrorMessages = newTranslations;
    };
    BaseReactiveFormComponent.prototype.onLanguageChange = function () {
    };
    BaseReactiveFormComponent.prototype.onDestroy = function () {
    };
    BaseReactiveFormComponent.prototype.onAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReactiveFormComponent.prototype, "accept", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReactiveFormComponent.prototype, "cancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReactiveFormComponent.prototype, "dataChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BaseReactiveFormComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BaseReactiveFormComponent.prototype, "validationErrors", null);
    return BaseReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/ui/helpers/component-can-deactivate.ts":
/*!********************************************************!*\
  !*** ./src/app/ui/helpers/component-can-deactivate.ts ***!
  \********************************************************/
/*! exports provided: CanDeactivateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateMixin", function() { return CanDeactivateMixin; });
/* harmony import */ var _modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");

var CanDeactivateMixin = /** @class */ (function () {
    function CanDeactivateMixin(dialog) {
        this.dialog = dialog;
        this.unsavedChanges = false;
    }
    CanDeactivateMixin.prototype.canDeactivate = function () {
        if (this.unsavedChanges) {
            this.modalRef = this.dialog.open(_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"], {
                data: {
                    titleKey: this.saveTitleKey,
                    messageKey: this.saveMessageKey,
                    okBtnKey: this.okBtnKey,
                    cancelBtnKey: this.cancelBtnKey,
                    okBtnColor: 'primary'
                }
            });
            return this.modalRef.afterClosed();
        }
        else {
            return true;
        }
    };
    CanDeactivateMixin.prototype.dataChanged = function () {
        this.unsavedChanges = true;
    };
    return CanDeactivateMixin;
}());



/***/ }),

/***/ "./src/app/ui/helpers/mixin-decorator.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/helpers/mixin-decorator.ts ***!
  \***********************************************/
/*! exports provided: Mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixin", function() { return Mixin; });
function Mixin(baseCtors) {
    return function (derivedCtor) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                var descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                if (name === 'constructor')
                    return;
                if (descriptor && (!descriptor.writable || !descriptor.configurable || !descriptor.enumerable || descriptor.get || descriptor.set)) {
                    Object.defineProperty(derivedCtor.prototype, name, descriptor);
                }
                else {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                }
            });
        });
    };
}


/***/ }),

/***/ "./src/app/ui/modules/alert-dialog/alert-dialog.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui/modules/alert-dialog/alert-dialog.module.ts ***!
  \****************************************************************/
/*! exports provided: AlertDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogModule", function() { return AlertDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

//


var AlertDialogModule = /** @class */ (function () {
    function AlertDialogModule() {
    }
    AlertDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            ],
            declarations: [
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]
            ],
            exports: [
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]
            ]
        })
    ], AlertDialogModule);
    return AlertDialogModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21vZHVsZXMvYWxlcnQtZGlhbG9nL2NvbXBvbmVudHMvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{((data && data.titleKey) ? data.titleKey : titleKey) | translate}}</h1>\r\n<div mat-dialog-content>\r\n  {{((data && data.messageKey) ? data.messageKey : messageKey) | translate:((data && data.messageParam) ? data.messageParam : messageParam)}}\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" (click)=\"accept()\">{{((data && data.okBtnKey) ? data.okBtnKey : okBtnKey) | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleKey = '@c/ui/AlertDialogComponent/Title';
        this.messageKey = '@c/ui/AlertDialogComponent/Message';
        this.okBtnKey = '@c/ui/AlertDialogComponent/OK';
        this.messageParam = {};
        //setTranslations(this.translate, TRANSLATIONS);
    }
    AlertDialogComponent.prototype.accept = function () {
        this.dialogRef.close(true);
    };
    AlertDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert-dialog',
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.html"),
            styles: [__webpack_require__(/*! ./alert-dialog.component.css */ "./src/app/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AlertDialogComponent);
    return AlertDialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/modules/ask-before-cancel/ask-before-cancel.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/modules/ask-before-cancel/ask-before-cancel.module.ts ***!
  \**************************************************************************/
/*! exports provided: AskBeforeCancelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeCancelModule", function() { return AskBeforeCancelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ask-before-cancel.directive */ "./src/app/ui/modules/ask-before-cancel/directives/ask-before-cancel.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AskBeforeCancelModule = /** @class */ (function () {
    function AskBeforeCancelModule() {
    }
    AskBeforeCancelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]
            ],
            exports: [
                _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]
            ],
        })
    ], AskBeforeCancelModule);
    return AskBeforeCancelModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/ask-before-cancel/directives/ask-before-cancel.directive.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ui/modules/ask-before-cancel/directives/ask-before-cancel.directive.ts ***!
  \****************************************************************************************/
/*! exports provided: AskBeforeCancelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeCancelDirective", function() { return AskBeforeCancelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AskBeforeCancelDirective = /** @class */ (function () {
    function AskBeforeCancelDirective(el) {
        this.answer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AskBeforeCancelDirective.prototype.onMouseEnter = function () {
        if (this.form && this.form.dirty) {
            this.answer.next(confirm(this.message));
        }
        else {
            this.answer.next(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AskBeforeCancelDirective.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AskBeforeCancelDirective.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AskBeforeCancelDirective.prototype, "answer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AskBeforeCancelDirective.prototype, "onMouseEnter", null);
    AskBeforeCancelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[askBeforeCancel]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AskBeforeCancelDirective);
    return AskBeforeCancelDirective;
}());



/***/ }),

/***/ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts ***!
  \****************************************************************************/
/*! exports provided: AskBeforeRefreshModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeRefreshModule", function() { return AskBeforeRefreshModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ask-before-refresh.directive */ "./src/app/ui/modules/ask-before-refresh/directives/ask-before-refresh.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AskBeforeRefreshModule = /** @class */ (function () {
    function AskBeforeRefreshModule() {
    }
    AskBeforeRefreshModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]
            ],
            exports: [
                _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]
            ],
        })
    ], AskBeforeRefreshModule);
    return AskBeforeRefreshModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/ask-before-refresh/directives/ask-before-refresh.directive.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ui/modules/ask-before-refresh/directives/ask-before-refresh.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: AskBeforeRefreshDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeRefreshDirective", function() { return AskBeforeRefreshDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AskBeforeRefreshDirective = /** @class */ (function () {
    function AskBeforeRefreshDirective(el) {
        var _this = this;
        this.askBeforeRefresh = function (event) {
            var confirmationMessage = 'show';
            if (!_this.isDirtyForm) {
                return true;
            }
            event.returnValue = confirmationMessage;
            return confirmationMessage;
        };
    }
    AskBeforeRefreshDirective.prototype.ngOnInit = function () {
        window.addEventListener('beforeunload', this.askBeforeRefresh);
    };
    AskBeforeRefreshDirective.prototype.ngOnDestroy = function () {
        window.removeEventListener('beforeunload', this.askBeforeRefresh);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('askBeforeRefresh'),
        __metadata("design:type", Boolean)
    ], AskBeforeRefreshDirective.prototype, "isDirtyForm", void 0);
    AskBeforeRefreshDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[askBeforeRefresh]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AskBeforeRefreshDirective);
    return AskBeforeRefreshDirective;
}());



/***/ }),

/***/ "./src/app/ui/modules/capitalize-word/capitalize-word.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui/modules/capitalize-word/capitalize-word.module.ts ***!
  \**********************************************************************/
/*! exports provided: CapitalizeWordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeWordModule", function() { return CapitalizeWordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/capitalize-word.pipe */ "./src/app/ui/modules/capitalize-word/pipes/capitalize-word.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

var CapitalizeWordModule = /** @class */ (function () {
    function CapitalizeWordModule() {
    }
    CapitalizeWordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
            ],
            exports: [
                _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
            ],
            providers: [
                _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
            ]
        })
    ], CapitalizeWordModule);
    return CapitalizeWordModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/capitalize-word/pipes/capitalize-word.pipe.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/modules/capitalize-word/pipes/capitalize-word.pipe.ts ***!
  \**************************************************************************/
/*! exports provided: CapitalizeWordPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeWordPipe", function() { return CapitalizeWordPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizeWordPipe = /** @class */ (function () {
    function CapitalizeWordPipe() {
    }
    CapitalizeWordPipe.prototype.transform = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    CapitalizeWordPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalizeWord'
        })
    ], CapitalizeWordPipe);
    return CapitalizeWordPipe;
}());



/***/ }),

/***/ "./src/app/ui/modules/caps-lock/caps-lock.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui/modules/caps-lock/caps-lock.module.ts ***!
  \**********************************************************/
/*! exports provided: CapsLockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapsLockModule", function() { return CapsLockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/caps-lock.directive */ "./src/app/ui/modules/caps-lock/directives/caps-lock.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

var CapsLockModule = /** @class */ (function () {
    function CapsLockModule() {
    }
    CapsLockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]
            ],
            exports: [
                _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]
            ]
        })
    ], CapsLockModule);
    return CapsLockModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/caps-lock/directives/caps-lock.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/modules/caps-lock/directives/caps-lock.directive.ts ***!
  \************************************************************************/
/*! exports provided: CapsLockDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapsLockDirective", function() { return CapsLockDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapsLockDirective = /** @class */ (function () {
    function CapsLockDirective() {
        this.capsLockEnabled = false;
        this.capsLock = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CapsLockDirective.prototype.onKeyDown = function (event) {
        if (event.which == 20 && this.capsLockEnabled !== null) {
            this.capsLockEnabled = !this.capsLockEnabled;
            // console.log("Keydown. CapsLock enabled: " + this.capsLockEnabled.toString());
            this.capsLock.emit(this.capsLockEnabled);
        }
        else if (event.which == 20) {
            // console.log("Keydown. Initial state not set.");
        }
    };
    CapsLockDirective.prototype.onKeyPress = function (event) {
        var str = String.fromCharCode(event.which);
        if (!str || str.toLowerCase() === str.toUpperCase()) {
            // console.log("Keypress. Some control key pressed.");
            return;
        }
        this.capsLockEnabled = (str.toLowerCase() === str && event.shiftKey) || (str.toUpperCase() === str && !event.shiftKey);
        // console.log("Keypress. CapsLock enabled: " + this.capsLockEnabled.toString());
        this.capsLock.emit(this.capsLockEnabled);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('capsLock'),
        __metadata("design:type", Object)
    ], CapsLockDirective.prototype, "capsLock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CapsLockDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CapsLockDirective.prototype, "onKeyPress", null);
    CapsLockDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[capsLock]'
        })
    ], CapsLockDirective);
    return CapsLockDirective;
}());



/***/ }),

/***/ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .panel .panel-body {\r\n    word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbW9kdWxlcy9jb25maXJtLWRpYWxvZy9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC91aS9tb2R1bGVzL2NvbmZpcm0tZGlhbG9nL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC5wYW5lbCAucGFuZWwtYm9keSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{((data && data.titleKey) ? data.titleKey : titleKey) | translate}}</h1>\r\n<div mat-dialog-content [ngStyle]=\"data.contentStyle ? data.contentStyle : null\">{{((data && data.messageKey) ? data.messageKey : messageKey) | translate:((data && data.messageParam) ? data.messageParam : messageParam)}}</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button [color]=\"data.okBtnColor ? data.okBtnColor : 'warn'\" (click)=\"accept()\">{{((data && data.okBtnKey) ? data.okBtnKey : okBtnKey) | translate }}</button>\r\n  <button mat-raised-button (click)=\"cancel()\">{{ ((data && data.cancelBtnKey) ? data.cancelBtnKey : cancelBtnKey) | translate}}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleKey = 'Title';
        this.messageKey = 'Message';
        this.messageParam = {};
        this.okBtnKey = 'Accept';
        this.cancelBtnKey = 'Cancel';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ConfirmDialogComponent.prototype.accept = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/modules/confirm-dialog/confirm-dialog.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/modules/confirm-dialog/confirm-dialog.module.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

//


var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            ],
            declarations: [
                _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]
            ],
            exports: [
                _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]
            ]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host.ng-invalid.ng-untouched {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbW9kdWxlcy9lcnJvci1tZXNzYWdlcy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2VzL2Vycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdWkvbW9kdWxlcy9lcnJvci1tZXNzYWdlcy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2VzL2Vycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC5uZy1pbnZhbGlkLm5nLXVudG91Y2hlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon *ngIf=\"errorToDisplay !== '' && displayError\"\r\n    class=\"cursor-default\"\r\n    color=\"warn\"\r\n    matTooltip=\"{{errorToDisplay}}\">error</mat-icon>"

/***/ }),

/***/ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesComponent", function() { return ErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _capitalize_word_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../capitalize-word/pipes/capitalize-word.pipe */ "./src/app/ui/modules/capitalize-word/pipes/capitalize-word.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//


var ErrorMessagesComponent = /** @class */ (function () {
    function ErrorMessagesComponent(controlContainer, capitalizeWordPipe) {
        this.controlContainer = controlContainer;
        this.capitalizeWordPipe = capitalizeWordPipe;
        this.errorToDisplay = '';
        this.displayError = true;
    }
    Object.defineProperty(ErrorMessagesComponent.prototype, "validationErrorMessages", {
        get: function () {
            return this._validationErrorMessages;
        },
        set: function (value) {
            this._validationErrorMessages = value;
            this.checkAndBuildErrorMessage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessagesComponent.prototype, "hostClasses", {
        get: function () {
            return [
                this.formControl.dirty ? 'ng-dirty' : '',
                this.formControl.invalid ? 'ng-invalid' : '',
                this.formControl.pristine ? 'ng-pristine' : '',
                this.formControl.touched ? 'ng-touched' : '',
                this.formControl.untouched ? 'ng-untouched' : '',
                this.formControl.valid ? 'ng-valid' : ''
            ].join(' ');
        },
        enumerable: true,
        configurable: true
    });
    ErrorMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formControl = this.controlContainer.control.get(this.for);
        this.formControlChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.formControl.valueChanges, this.formControl.statusChanges).subscribe(function () {
            _this.checkAndBuildErrorMessage();
        });
        this.checkAndBuildErrorMessage();
    };
    ErrorMessagesComponent.prototype.ngOnDestroy = function () {
        if (this.formControlChanges) {
            this.formControlChanges.unsubscribe();
        }
    };
    ErrorMessagesComponent.prototype.checkAndBuildErrorMessage = function () {
        var errors = '';
        if (this.formControl) {
            if (this.formControl.errors && this.formControl.errors.message && this.formControl.errors.message !== '') {
                this.errorToDisplay = this.capitalizeWordPipe.transform(this.formControl.errors.message.constructor === Array ?
                    this.formControl.errors.message.join(' ') : this.formControl.errors.message);
            }
            else {
                for (var key in Object.keys(this._validationErrorMessages)) {
                    if (key ? (this.formControl.errors && this.formControl.errors[this._validationErrorMessages[key].type]) :
                        (this.formControl.errors && this.formControl.errors[this._validationErrorMessages[key].type])) {
                        errors = this.capitalizeWordPipe.transform(this._validationErrorMessages[key].translation);
                        break;
                    }
                }
                this.errorToDisplay = errors;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ErrorMessagesComponent.prototype, "validationErrorMessages", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorMessagesComponent.prototype, "displayError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessagesComponent.prototype, "for", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ErrorMessagesComponent.prototype, "hostClasses", null);
    ErrorMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error-messages',
            template: __webpack_require__(/*! ./error-messages.component.html */ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.html"),
            styles: [__webpack_require__(/*! ./error-messages.component.css */ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
            _capitalize_word_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeWordPipe"]])
    ], ErrorMessagesComponent);
    return ErrorMessagesComponent;
}());



/***/ }),

/***/ "./src/app/ui/modules/error-messages/error-messages.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/modules/error-messages/error-messages.module.ts ***!
  \********************************************************************/
/*! exports provided: ErrorMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesModule", function() { return ErrorMessagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-messages/error-messages.component */ "./src/app/ui/modules/error-messages/components/error-messages/error-messages.component.ts");
/* harmony import */ var _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../capitalize-word/capitalize-word.module */ "./src/app/ui/modules/capitalize-word/capitalize-word.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//


//


var ErrorMessagesModule = /** @class */ (function () {
    function ErrorMessagesModule() {
    }
    ErrorMessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__["CapitalizeWordModule"]
            ],
            declarations: [
                _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]
            ],
            exports: [
                _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]
            ]
        })
    ], ErrorMessagesModule);
    return ErrorMessagesModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/images-card/components/images-card/images-card.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/components/images-card/images-card.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host { /* Safari */\r\n  display: flex; /* Safari */\r\n  flex-direction: column;\r\n}\r\n\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n\r\n.card-container {\r\n  flex-wrap: wrap;\r\n  margin-top: 25px;\r\n}\r\n\r\n\r\n.image-container{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height:250px;\r\n}\r\n\r\n\r\n.image-card-btns{\r\n  justify-content: flex-end;\r\n}\r\n\r\n\r\n.img{\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n\r\n.align-items-center{\r\n  align-items: center;\r\n}\r\n\r\n\r\n.mat-radio-label {\r\n  height: 40px !important;\r\n}\r\n\r\n\r\n.width-250px{\r\n  width: 250px !important;  \r\n}\r\n\r\n\r\n.align-self-center {\r\n  align-self: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbW9kdWxlcy9pbWFnZXMtY2FyZC9jb21wb25lbnRzL2ltYWdlcy1jYXJkL2ltYWdlcy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFDeUIsWUFBWTtFQUNuQyxjQUFjLENBQ2tCLFlBQVk7RUFDNUMsdUJBQXVCO0NBQ3hCOzs7QUFHRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCOzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDs7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7OztBQUVEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7OztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOzs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC91aS9tb2R1bGVzL2ltYWdlcy1jYXJkL2NvbXBvbmVudHMvaW1hZ2VzLWNhcmQvaW1hZ2VzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IC8qIFNhZmFyaSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTYWZhcmkgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6MjUwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1jYXJkLWJ0bnN7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmltZ3tcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlcntcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWxhYmVsIHtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTI1MHB4e1xyXG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50OyAgXHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/modules/images-card/components/images-card/images-card.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/components/images-card/images-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-flex flex-grow-1 flex-shrink-1 flex-direction-column\">\r\n  <div class=\"align-self-center display-flex width-250px  flex-shrink-1 flex-direction-row card-container\">\r\n    <mat-card class=\"flex-grow-1\"  #imageContainer>\r\n      <img class=\"height-100-pc width-100-pc\" *ngIf=\"principal\" imageLoad [srcImage]=\"principal.imgUrl? principal.imgUrl : principal.file\" [container]=\"imageContainer\"\r\n        src=\"\">\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-space-between\">\r\n    <mat-card *ngFor=\"let faceItem of faceItems; index as cardIndex; trackBy:trackByFn\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n      <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n        <img class=\"img\" imageLoad [srcImage]=\"faceItem.imgUrl? faceItem.imgUrl : faceItem.file\" [container]=\"imageContainer\" src=\"\">\r\n      </div>\r\n      <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n        <mat-radio-button value=\"primary\" class=\"margin-top-10px\" (click)=\"setMainImage(faceItem)\"\r\n        matTooltip=\"{{ 'Principal' | translate }}\"\r\n        ></mat-radio-button>\r\n        <button type=\"button\" mat-icon-button class=\"margin-left-10px\" (click)=\"deleteFace(cardIndex)\">\r\n          <mat-icon mat-raised-button color=\"accent\" matTooltip=\"{{ 'Delete' | translate }}\">delete</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"display-flex justify-content-center width-100-pc\">\r\n    <button mat-raised-button color=\"primary\" class=\"add-btn\" type=\"button\" (click)=\"fileInput.click()\">\r\n      <mat-icon>add</mat-icon> {{ 'Slect File' | translate }}\r\n    </button>\r\n    <input #fileInput style=\"display:none\" type=\"file\" name=\"files\" (change)=\"addImages($event)\" class=\"file-input glyphicon glyphicon-plus\"\r\n      accept=\"image/*\" multiple/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/modules/images-card/components/images-card/images-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/components/images-card/images-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImagesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCardComponent", function() { return ImagesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/face */ "./src/app/ui/modules/images-card/models/face.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//

//import { AnnotationToolModalComponent } from '../annotation-tool-modal/annotation-tool-modal.component';

//import { ImageCardEditActionDirective } from '../../directives/images-card-edit-actions.directive';
//import { setTranslations } from 'ngx-translate';
//import { TRANSLATIONS } from './i18n/images-card.component.translations';
var imageSizeErrorMessageKey = 'Image Size Error Message';
var imageTypeErrorMessageKey = 'Image Type Error Message';
var ImagesCardComponent = /** @class */ (function () {
    function ImagesCardComponent(translate, toastr) {
        this.translate = translate;
        this.toastr = toastr;
        this.imageWidth = 100;
        this.imageHeight = 100;
        //@Input() imageCardEditAction: ImageCardEditActionDirective;
        this.deletedFace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function (_) {
        };
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ImagesCardComponent_1 = ImagesCardComponent;
    ImagesCardComponent.prototype.ngOnInit = function () {
        console.log(this._faceItems);
    };
    Object.defineProperty(ImagesCardComponent.prototype, "faceItems", {
        get: function () {
            return this._faceItems;
        },
        set: function (value) {
            this._faceItems = value;
            this.propagateChange(this._faceItems);
        },
        enumerable: true,
        configurable: true
    });
    ImagesCardComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null && value.length > 0) {
            this._faceItems = value;
        }
    };
    ImagesCardComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ImagesCardComponent.prototype.registerOnTouched = function () {
    };
    ImagesCardComponent.prototype.validateImage = function (image) {
        var result = true;
        if (image && image.size > 0 && image.size > 20971520) {
            result = false;
            this.toastr.error(imageSizeErrorMessageKey);
        }
        else {
            if (!(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/jp2' || image.type === 'image/tiff' || image.type === 'image/png' || image.type === 'image/pgm' || image.type === 'image/bmp')) {
                result = false;
                this.toastr.error(imageTypeErrorMessageKey);
            }
        }
        return result;
    };
    ImagesCardComponent.prototype.addImages = function ($event) {
        if ($event.target.files && $event.target.files.length > 0) {
            for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
                var file = _a[_i];
                if (this.validateImage(file)) {
                    var newFace = {
                        file: file,
                        state: _models_face__WEBPACK_IMPORTED_MODULE_4__["State"].New,
                        status: _models_face__WEBPACK_IMPORTED_MODULE_4__["Status"].Pending,
                        mainImage: false
                    };
                    if (this.faceItems) {
                        this.faceItems = this.faceItems.concat([newFace]);
                    }
                    else {
                        this.faceItems = [newFace];
                    }
                }
            }
            $event.target.value = '';
        }
    };
    ImagesCardComponent.prototype.checkUploadStatusUploading = function (status) {
        return status === _models_face__WEBPACK_IMPORTED_MODULE_4__["Status"].Uploading;
    };
    ImagesCardComponent.prototype.checkUploadStatusUploaded = function (status) {
        return status === undefined || status === _models_face__WEBPACK_IMPORTED_MODULE_4__["Status"].Uploaded;
    };
    ImagesCardComponent.prototype.checkUploadStatusError = function (status) {
        return status === _models_face__WEBPACK_IMPORTED_MODULE_4__["Status"].Error;
    };
    ImagesCardComponent.prototype.checkUploadStatusPending = function (status) {
        return status === _models_face__WEBPACK_IMPORTED_MODULE_4__["Status"].Pending;
    };
    ImagesCardComponent.prototype.trackByFn = function (index, data) {
        if (this.trackByKey) {
            return data[this.trackByKey] ? data[this.trackByKey] : index;
        }
        return index;
    };
    ImagesCardComponent.prototype.deleteFace = function (index) {
        var deletedItem = this.faceItems.splice(index, 1).pop();
        this.faceItems = this.faceItems.slice();
        this.deletedFace.emit(deletedItem);
    };
    ImagesCardComponent.prototype.setMainImage = function (faceItem) {
        this.principal = faceItem;
        faceItem.mainImage = true;
        this.faceItems.forEach(function (image) {
            image.mainImage = false;
        });
        faceItem.mainImage = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagesCardComponent.prototype, "caseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagesCardComponent.prototype, "trackByKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagesCardComponent.prototype, "imageWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagesCardComponent.prototype, "imageHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_face__WEBPACK_IMPORTED_MODULE_4__["Face"])
    ], ImagesCardComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagesCardComponent.prototype, "deletedFace", void 0);
    ImagesCardComponent = ImagesCardComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'images-card',
            template: __webpack_require__(/*! ./images-card.component.html */ "./src/app/ui/modules/images-card/components/images-card/images-card.component.html"),
            styles: [__webpack_require__(/*! ./images-card.component.css */ "./src/app/ui/modules/images-card/components/images-card/images-card.component.css")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ImagesCardComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ImagesCardComponent);
    return ImagesCardComponent;
    var ImagesCardComponent_1;
}());



/***/ }),

/***/ "./src/app/ui/modules/images-card/directives/image-load.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/directives/image-load.directive.ts ***!
  \***************************************************************************/
/*! exports provided: ImageLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoadDirective", function() { return ImageLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_image_proportions_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/image-proportions-helper */ "./src/app/ui/modules/images-card/helpers/image-proportions-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageLoadDirective = /** @class */ (function () {
    function ImageLoadDirective(hostElement) {
        this.hostElement = hostElement;
        this.imageBestFit = { height: null, width: null };
    }
    ImageLoadDirective.prototype.ngOnInit = function () {
        if (this.srcImage === undefined) {
            throw new Error('Please you need to provide a valid image, file or url');
        }
        if (this.container && this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
            this.container = this.container.nativeElement;
        }
    };
    ImageLoadDirective.prototype.ngOnChanges = function (changes) {
        this.initializeImage();
    };
    Object.defineProperty(ImageLoadDirective.prototype, "loadImage", {
        get: function () {
            if (this._loadImage === null || this._loadImage === undefined) {
                this._loadImage = this.hostElement.nativeElement;
            }
            return this._loadImage;
        },
        set: function (value) {
            this._loadImage = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageLoadDirective.prototype.ngAfterViewInit = function () {
        this.initializeImage();
    };
    ImageLoadDirective.prototype.initializeImage = function () {
        var _this = this;
        this.loadImage.onload = function () {
            _this.imageAspectRatio = Object(_helpers_image_proportions_helper__WEBPACK_IMPORTED_MODULE_1__["calculateAspectRatio"])(_this.loadImage.naturalHeight, _this.loadImage.naturalWidth);
            _this.imageBestFit = Object(_helpers_image_proportions_helper__WEBPACK_IMPORTED_MODULE_1__["imageBestFit"])(_this.loadImage, _this.container, _this.imageAspectRatio);
            _this.hostElement.nativeElement.width = _this.imageBestFit.width;
            _this.hostElement.nativeElement.height = _this.imageBestFit.height;
        };
        // Checking if the thumbnail is provided by a file or by a string in base 64
        if (typeof this.srcImage === 'string') {
            this.loadImage.src = this.srcImage;
        }
        else {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                _this.loadImage.src = reader_1.result;
            };
            reader_1.readAsDataURL(this.srcImage);
        }
    };
    ImageLoadDirective.prototype.imageIsBiggestThanAvailableSpace = function () {
        if (this.loadImage.naturalHeight > this.container.clientHeight && this.loadImage.naturalWidth > this.container.clientWidth) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], ImageLoadDirective.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageLoadDirective.prototype, "srcImage", void 0);
    ImageLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'img[imageLoad]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImageLoadDirective);
    return ImageLoadDirective;
}());



/***/ }),

/***/ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImageCardEditActionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardEditActionDirective", function() { return ImageCardEditActionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageCardEditActionDirective = /** @class */ (function () {
    function ImageCardEditActionDirective() {
    }
    ImageCardEditActionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[imageCardEditAction]'
        })
    ], ImageCardEditActionDirective);
    return ImageCardEditActionDirective;
}());



/***/ }),

/***/ "./src/app/ui/modules/images-card/helpers/image-proportions-helper.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui/modules/images-card/helpers/image-proportions-helper.ts ***!
  \****************************************************************************/
/*! exports provided: calculateNewHeight, calculateNewWidth, figureIsBiggerThan, calculateAspectRatio, imageBestFit, isAValidSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNewHeight", function() { return calculateNewHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNewWidth", function() { return calculateNewWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "figureIsBiggerThan", function() { return figureIsBiggerThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAspectRatio", function() { return calculateAspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageBestFit", function() { return imageBestFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAValidSize", function() { return isAValidSize; });
function calculateNewHeight(fixedWidth, aspectRatio) {
    return Math.ceil(fixedWidth * aspectRatio);
}
function calculateNewWidth(fixedHeight, aspectRatio) {
    return Math.ceil(fixedHeight / aspectRatio);
}
function figureIsBiggerThan(targFigureWidth, targFigureHeight, toCompFigureWidth, toCompFigureHeight) {
    return targFigureHeight > toCompFigureHeight || targFigureWidth > toCompFigureWidth;
}
function calculateAspectRatio(height, width) {
    return (height / width);
}
function imageBestFit(image, container, aspectRatio) {
    var returnValue = { height: null, width: null };
    var imageAspectRatio = aspectRatio ? aspectRatio : calculateAspectRatio(image.naturalHeight, image.naturalWidth);
    // Fixing the width and calculating the corresponding height keeping the aspect ratio
    var heightWithFixedWidth = calculateNewHeight(container.clientWidth, imageAspectRatio);
    // Fixing the height and calculating the corresponding width keeping the aspect ratio
    var WidthWithFixedHeight = calculateNewWidth(container.clientHeight, imageAspectRatio);
    // Checking if with the fixed width and the corresponded height fit in the container
    if (!figureIsBiggerThan(container.clientWidth, heightWithFixedWidth, container.clientWidth, container.clientHeight)) {
        returnValue.height = heightWithFixedWidth;
        returnValue.width = container.clientWidth;
    }
    else {
        returnValue.height = container.clientHeight;
        returnValue.width = WidthWithFixedHeight;
    }
    return returnValue;
}
function isAValidSize(size) {
    return size.width !== undefined && size.width !== null && size.height !== undefined && size.height !== null;
}


/***/ }),

/***/ "./src/app/ui/modules/images-card/images-card.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/modules/images-card/images-card.module.ts ***!
  \**************************************************************/
/*! exports provided: ImagesCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCardModule", function() { return ImagesCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _images_card_components_images_card_images_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images-card/components/images-card/images-card.component */ "./src/app/ui/modules/images-card/components/images-card/images-card.component.ts");
/* harmony import */ var _directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/images-card-edit-actions.directive */ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts");
/* harmony import */ var _directives_image_load_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/image-load.directive */ "./src/app/ui/modules/images-card/directives/image-load.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//



var ImagesCardModule = /** @class */ (function () {
    function ImagesCardModule() {
    }
    ImagesCardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]
            ],
            declarations: [
                _images_card_components_images_card_images_card_component__WEBPACK_IMPORTED_MODULE_15__["ImagesCardComponent"],
                _directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_16__["ImageCardEditActionDirective"],
                _directives_image_load_directive__WEBPACK_IMPORTED_MODULE_17__["ImageLoadDirective"]
            ],
            exports: [
                _images_card_components_images_card_images_card_component__WEBPACK_IMPORTED_MODULE_15__["ImagesCardComponent"],
                _directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_16__["ImageCardEditActionDirective"],
                _directives_image_load_directive__WEBPACK_IMPORTED_MODULE_17__["ImageLoadDirective"]
            ]
        })
    ], ImagesCardModule);
    return ImagesCardModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/images-card/models/face.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/modules/images-card/models/face.ts ***!
  \*******************************************************/
/*! exports provided: State, Status, Face */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Face", function() { return Face; });
var State;
(function (State) {
    State[State["New"] = 0] = "New";
    State[State["Edited"] = 1] = "Edited";
    State[State["Deleted"] = 2] = "Deleted";
})(State || (State = {}));
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Uploading"] = 1] = "Uploading";
    Status[Status["Uploaded"] = 2] = "Uploaded";
    Status[Status["Error"] = 3] = "Error";
})(Status || (Status = {}));
var Face = /** @class */ (function () {
    function Face() {
    }
    return Face;
}());



/***/ }),

/***/ "./src/app/ui/modules/logo/components/logo/logo.component.css":
/*!********************************************************************!*\
  !*** ./src/app/ui/modules/logo/components/logo/logo.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbW9kdWxlcy9sb2dvL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvdWkvbW9kdWxlcy9sb2dvL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui/modules/logo/components/logo/logo.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/modules/logo/components/logo/logo.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-grow-1\"></div>\r\n<svg [attr.width]=\"width\" [attr.height]=\"height\" version=\"1.1\" id=\"Vordergrund\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\r\n  y=\"0px\" viewBox=\"0 0 431.606 157.174\" enable-background=\"new 0 0 431.606 157.174\"\r\n  xml:space=\"preserve\">\r\n  <g>\r\n    <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M21.693,76.705\r\n      C89.439,31.554,183.421,6.682,282.132,13.911c55.282,4.048,106.4,17.981,149.37,38.665C377.858,19.897,309.332,0.2,233.446,0.2\r\n      C140.734,0.2,56.914,29.7,0.308,76.254c24.214,21.494,87.447,53.859,87.447,53.859S44.013,99.8,21.693,76.705z\"/>\r\n    <g>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M120.671,129.889\r\n        c0,6.582,5.396,11.978,11.978,11.978s11.978-5.396,11.978-11.978v-8.741h-7.985v12.086h-7.985V72.156h7.985v12.086h7.985v-8.741\r\n        c0-6.583-5.396-11.978-11.978-11.978s-11.978,5.396-11.978,11.978V129.889z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M150.895,129.889\r\n        c0,6.582,5.396,11.978,11.979,11.978c6.583,0,11.978-5.396,11.978-11.978V90.825c0-6.582-5.396-11.978-11.978-11.978\r\n        c-6.583,0-11.979,5.396-11.979,11.978V129.889z M158.88,87.48h7.985v45.754h-7.985V87.48z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M184.804,156.974h14.244\r\n        c4.424,0,7.985-3.561,7.985-7.985V90.825c0-6.582-5.396-11.978-11.978-11.978s-11.978,5.396-11.978,11.978v42.409\r\n        c0,4.425,3.561,7.985,7.985,7.985h7.985v7.77h-14.244V156.974z M191.063,87.48h7.985v45.754h-7.985V87.48z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M215.259,141.219h7.986V87.48h7.984\r\n        v53.739h7.986V87.48c0-4.425-3.562-7.986-7.986-7.986h-15.97V141.219z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M255.427,79.494h-7.985v54.387\r\n        c0,2.158,0.863,4.208,2.374,5.611c1.511,1.402,3.453,2.267,5.611,2.374V79.494z M255.427,64.171h-7.985v7.985h7.985V64.171z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M279.491,79.494h-7.986V64.171h-7.984\r\n        v69.71c0,2.158,0.862,4.208,2.374,5.611c1.51,1.402,3.453,2.267,5.61,2.374V87.48h7.986V79.494z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M291.599,87.48h7.985v18.884h-7.985\r\n        V87.48z M283.613,129.889c0,6.582,5.396,11.978,11.978,11.978c6.583,0,11.979-5.396,11.979-11.978v-4.641h-7.985v7.985h-7.985\r\n        V114.35h15.971V90.825c0-6.582-5.396-11.978-11.979-11.978c-6.582,0-11.978,5.396-11.978,11.978V129.889z\"/>\r\n      <path stroke-width=\"0.4\" stroke-miterlimit=\"3.8637\" d=\"M339.752,125.249h-7.985v7.985h-7.985\r\n        V87.48h7.985v7.984h7.985v-4.64c0-6.582-5.396-11.978-11.979-11.978s-11.979,5.396-11.979,11.978v39.064\r\n        c0,6.582,5.396,11.978,11.979,11.978s11.979-5.396,11.979-11.978V125.249z\"/>\r\n    </g>\r\n  </g>\r\n</svg>\r\n<div class=\"flex-grow-1\"></div>"

/***/ }),

/***/ "./src/app/ui/modules/logo/components/logo/logo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/modules/logo/components/logo/logo.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "height", void 0);
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/ui/modules/logo/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/ui/modules/logo/components/logo/logo.component.css")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/ui/modules/logo/logo.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui/modules/logo/logo.module.ts ***!
  \************************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/ui/modules/logo/components/logo/logo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
            ],
            exports: [
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
            ]
        })
    ], LogoModule);
    return LogoModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{'@c/ui/SessionExpireDialogComponent/Title' | translate}}</h1>\r\n<div mat-dialog-content >{{'@c/ui/SessionExpireDialogComponent/Message' | translate:messageParam}}</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" (click)=\"stayLoggedIn()\">{{ '@c/ui/SessionExpireDialogComponent/StayLoggedIn' | translate }}</button>\r\n  <button mat-raised-button (click)=\"logOutNow()\">{{ '@c/ui/SessionExpireDialogComponent/LogOutNow' | translate }}</button>\r\n</div>\r\n\r\n    "

/***/ }),

/***/ "./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SessionExpireDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpireDialogComponent", function() { return SessionExpireDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionExpireDialogComponent = /** @class */ (function () {
    function SessionExpireDialogComponent(translate, dialogRef) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.remainingTime = 60;
        this.messageParam = {};
        this.sessionExpired = false;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    SessionExpireDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._countDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe(function () {
            _this.remainingTime -= 1;
            _this.messageParam = { param: _this.remainingTime };
            if (_this.remainingTime <= 0) {
                _this.logOutNow();
            }
        });
    };
    SessionExpireDialogComponent.prototype.stayLoggedIn = function () {
        this.sessionExpired = false;
        this.dialogRef.close(true);
    };
    SessionExpireDialogComponent.prototype.logOutNow = function () {
        this.sessionExpired = true;
        this.hide();
    };
    SessionExpireDialogComponent.prototype.hide = function () {
        if (this._countDown$) {
            this._countDown$.unsubscribe();
        }
        this.dialogRef.close(false);
    };
    SessionExpireDialogComponent.prototype.ngOnDestroy = function () {
        if (this._countDown$) {
            this._countDown$.unsubscribe();
        }
    };
    SessionExpireDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'session-expire-dialog',
            template: __webpack_require__(/*! ./session-expire-dialog.component.html */ "./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], SessionExpireDialogComponent);
    return SessionExpireDialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/modules/session-expire-dialog/session-expire-dialog.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/modules/session-expire-dialog/session-expire-dialog.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SessionExpireDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpireDialogModule", function() { return SessionExpireDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/session-expire-dialog/session-expire-dialog.component */ "./src/app/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//


//

var SessionExpireDialogModule = /** @class */ (function () {
    function SessionExpireDialogModule() {
    }
    SessionExpireDialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild()
            ],
            declarations: [
                _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SessionExpireDialogComponent"]
            ],
            exports: [
                _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SessionExpireDialogComponent"]
            ]
        })
    ], SessionExpireDialogModule);
    return SessionExpireDialogModule;
}());



/***/ }),

/***/ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21vZHVsZXMvc3Bpbm5lci1pbmRpY2F0b3ItMjAwL2NvbXBvbmVudHMvc3Bpbm5lci1pbmRpY2F0b3ItMjAwL3NwaW5uZXItaW5kaWNhdG9yLTIwMC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"lds-spinner\" [attr.width]=\"width\" [attr.height]=\"height\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: transparent none repeat scroll 0% 0%;\"><g transform=\"rotate(0 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(30 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(60 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(90 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(120 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(150 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(180 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(210 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(240 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(270 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(300 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g><g transform=\"rotate(330 50 50)\">\r\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#000000\">\r\n    <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"/>\r\n  </rect>\r\n</g></svg>\r\n"

/***/ }),

/***/ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SpinnerIndicator200Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerIndicator200Component", function() { return SpinnerIndicator200Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerIndicator200Component = /** @class */ (function () {
    function SpinnerIndicator200Component() {
        this.width = '200px';
        this.height = '200px';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerIndicator200Component.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerIndicator200Component.prototype, "height", void 0);
    SpinnerIndicator200Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spinner-indicator-200',
            template: __webpack_require__(/*! ./spinner-indicator-200.component.html */ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.html"),
            styles: [__webpack_require__(/*! ./spinner-indicator-200.component.css */ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.css")]
        })
    ], SpinnerIndicator200Component);
    return SpinnerIndicator200Component;
}());



/***/ }),

/***/ "./src/app/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SpinnerIndicator200Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerIndicator200Module", function() { return SpinnerIndicator200Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/spinner-indicator-200/spinner-indicator-200.component */ "./src/app/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//

var SpinnerIndicator200Module = /** @class */ (function () {
    function SpinnerIndicator200Module() {
    }
    SpinnerIndicator200Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]
            ],
            exports: [
                _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]
            ]
        })
    ], SpinnerIndicator200Module);
    return SpinnerIndicator200Module;
}());



/***/ }),

/***/ "./src/app/ui/services/title.service.ts":
/*!**********************************************!*\
  !*** ./src/app/ui/services/title.service.ts ***!
  \**********************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//

var TitleService = /** @class */ (function () {
    function TitleService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    TitleService.prototype.setTitle = function (value) {
        this.title.next(value);
    };
    TitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammer-timejs */ "./node_modules/hammer-timejs/hammer-time.js");
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammer_timejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/alert-dialog/alert-dialog.module */ "./src/app/ui/modules/alert-dialog/alert-dialog.module.ts");
/* harmony import */ var _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/ask-before-cancel/ask-before-cancel.module */ "./src/app/ui/modules/ask-before-cancel/ask-before-cancel.module.ts");
/* harmony import */ var _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/capitalize-word/capitalize-word.module */ "./src/app/ui/modules/capitalize-word/capitalize-word.module.ts");
/* harmony import */ var _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/caps-lock/caps-lock.module */ "./src/app/ui/modules/caps-lock/caps-lock.module.ts");
/* harmony import */ var _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/confirm-dialog/confirm-dialog.module */ "./src/app/ui/modules/confirm-dialog/confirm-dialog.module.ts");
/* harmony import */ var _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/error-messages/error-messages.module */ "./src/app/ui/modules/error-messages/error-messages.module.ts");
/* harmony import */ var _modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/images-card/images-card.module */ "./src/app/ui/modules/images-card/images-card.module.ts");
/* harmony import */ var _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/logo/logo.module */ "./src/app/ui/modules/logo/logo.module.ts");
/* harmony import */ var _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/session-expire-dialog/session-expire-dialog.module */ "./src/app/ui/modules/session-expire-dialog/session-expire-dialog.module.ts");
/* harmony import */ var _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/spinner-indicator-200/spinner-indicator-200.module */ "./src/app/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//



//











var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                //
                _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__["AlertDialogModule"],
                _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__["AskBeforeCancelModule"],
                _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__["AskBeforeRefreshModule"],
                _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__["CapitalizeWordModule"],
                _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__["CapsLockModule"],
                _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__["ErrorMessagesModule"],
                _modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_13__["ImagesCardModule"],
                _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__["LogoModule"],
                _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__["SessionExpireDialogModule"],
                _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__["SpinnerIndicator200Module"]
            ],
            declarations: []
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/validation/directives/digits-count-validation-directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/validation/directives/digits-count-validation-directive.ts ***!
  \****************************************************************************/
/*! exports provided: DigitsCountValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitsCountValidationDirective", function() { return DigitsCountValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/digits-count-validator */ "./src/app/validation/helpers/digits-count-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DigitsCountValidationDirective = /** @class */ (function () {
    function DigitsCountValidationDirective() {
    }
    DigitsCountValidationDirective_1 = DigitsCountValidationDirective;
    DigitsCountValidationDirective.prototype.validate = function (control) {
        return this.digitsCount ?
            Object(_helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_2__["digitsCount"])(this.digitsCount)(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('digitsCountValidation'),
        __metadata("design:type", Number)
    ], DigitsCountValidationDirective.prototype, "digitsCount", void 0);
    DigitsCountValidationDirective = DigitsCountValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[digitsCountValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: DigitsCountValidationDirective_1, multi: true }]
        })
    ], DigitsCountValidationDirective);
    return DigitsCountValidationDirective;
    var DigitsCountValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/lowercase-validation-directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/validation/directives/lowercase-validation-directive.ts ***!
  \*************************************************************************/
/*! exports provided: LowercaseValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowercaseValidationDirective", function() { return LowercaseValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/lowercase-validator */ "./src/app/validation/helpers/lowercase-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LowercaseValidationDirective = /** @class */ (function () {
    function LowercaseValidationDirective() {
    }
    LowercaseValidationDirective_1 = LowercaseValidationDirective;
    LowercaseValidationDirective.prototype.validate = function (control) {
        return this.lowercaseCount ?
            Object(_helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_2__["lowercase"])(this.lowercaseCount)(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('lowerCaseValidation'),
        __metadata("design:type", Number)
    ], LowercaseValidationDirective.prototype, "lowercaseCount", void 0);
    LowercaseValidationDirective = LowercaseValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[lowerCaseValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: LowercaseValidationDirective_1, multi: true }]
        })
    ], LowercaseValidationDirective);
    return LowercaseValidationDirective;
    var LowercaseValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/phone-number-validation-directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/validation/directives/phone-number-validation-directive.ts ***!
  \****************************************************************************/
/*! exports provided: PhoneNumberValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberValidationDirective", function() { return PhoneNumberValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_phone_number_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/phone-number-validator */ "./src/app/validation/helpers/phone-number-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhoneNumberValidationDirective = /** @class */ (function () {
    function PhoneNumberValidationDirective() {
    }
    PhoneNumberValidationDirective_1 = PhoneNumberValidationDirective;
    PhoneNumberValidationDirective.prototype.validate = function (control) {
        return Object(_helpers_phone_number_validator__WEBPACK_IMPORTED_MODULE_2__["phoneNumber"])()(control);
    };
    PhoneNumberValidationDirective = PhoneNumberValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[phoneNumberValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PhoneNumberValidationDirective_1, multi: true }]
        })
    ], PhoneNumberValidationDirective);
    return PhoneNumberValidationDirective;
    var PhoneNumberValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/required-if-field-has-value.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/validation/directives/required-if-field-has-value.directive.ts ***!
  \********************************************************************************/
/*! exports provided: RequiredIfFieldHasValueValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredIfFieldHasValueValidationDirective", function() { return RequiredIfFieldHasValueValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_required_if_field_has_value_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/required-if-field-has-value.validator */ "./src/app/validation/helpers/required-if-field-has-value.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequiredIfFieldHasValueValidationDirective = /** @class */ (function () {
    function RequiredIfFieldHasValueValidationDirective() {
    }
    RequiredIfFieldHasValueValidationDirective_1 = RequiredIfFieldHasValueValidationDirective;
    RequiredIfFieldHasValueValidationDirective.prototype.validate = function (control) {
        return this.fieldName && this.values ?
            Object(_helpers_required_if_field_has_value_validator__WEBPACK_IMPORTED_MODULE_2__["requiredIfFieldHasValue"])(this.fieldName, this.values)(control) :
            null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('requiredIfFieldHasValueValidation'),
        __metadata("design:type", String)
    ], RequiredIfFieldHasValueValidationDirective.prototype, "fieldName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RequiredIfFieldHasValueValidationDirective.prototype, "values", void 0);
    RequiredIfFieldHasValueValidationDirective = RequiredIfFieldHasValueValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[requiredIfFieldHasValueValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: RequiredIfFieldHasValueValidationDirective_1, multi: true }]
        })
    ], RequiredIfFieldHasValueValidationDirective);
    return RequiredIfFieldHasValueValidationDirective;
    var RequiredIfFieldHasValueValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/same-password-validation-directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/validation/directives/same-password-validation-directive.ts ***!
  \*****************************************************************************/
/*! exports provided: SamePasswordValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamePasswordValidationDirective", function() { return SamePasswordValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/same-password-validator */ "./src/app/validation/helpers/same-password-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SamePasswordValidationDirective = /** @class */ (function () {
    function SamePasswordValidationDirective() {
    }
    SamePasswordValidationDirective_1 = SamePasswordValidationDirective;
    SamePasswordValidationDirective.prototype.validate = function (control) {
        return Object(_helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_2__["samePassword"])(this.passwordToCompare)(control);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('passwordToCompare'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["AbstractControl"])
    ], SamePasswordValidationDirective.prototype, "passwordToCompare", void 0);
    SamePasswordValidationDirective = SamePasswordValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[samePasswordValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: SamePasswordValidationDirective_1, multi: true }]
        })
    ], SamePasswordValidationDirective);
    return SamePasswordValidationDirective;
    var SamePasswordValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/special-chars-count-validation-directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/validation/directives/special-chars-count-validation-directive.ts ***!
  \***********************************************************************************/
/*! exports provided: SpecialCharsCountDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialCharsCountDirective", function() { return SpecialCharsCountDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/special-chars-validator */ "./src/app/validation/helpers/special-chars-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecialCharsCountDirective = /** @class */ (function () {
    function SpecialCharsCountDirective() {
    }
    SpecialCharsCountDirective_1 = SpecialCharsCountDirective;
    SpecialCharsCountDirective.prototype.validate = function (control) {
        return this.specialCharsCount ?
            Object(_helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_2__["specialChars"])(this.specialCharsCount)(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('specialCharsCountValidation'),
        __metadata("design:type", Number)
    ], SpecialCharsCountDirective.prototype, "specialCharsCount", void 0);
    SpecialCharsCountDirective = SpecialCharsCountDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[specialCharsCountValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: SpecialCharsCountDirective_1, multi: true }]
        })
    ], SpecialCharsCountDirective);
    return SpecialCharsCountDirective;
    var SpecialCharsCountDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/directives/uppercase-validation-directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/validation/directives/uppercase-validation-directive.ts ***!
  \*************************************************************************/
/*! exports provided: UppercaseValidationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseValidationDirective", function() { return UppercaseValidationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/uppercase-validator */ "./src/app/validation/helpers/uppercase-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UppercaseValidationDirective = /** @class */ (function () {
    function UppercaseValidationDirective() {
    }
    UppercaseValidationDirective_1 = UppercaseValidationDirective;
    UppercaseValidationDirective.prototype.validate = function (control) {
        return this.uppercaseCount ?
            Object(_helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_2__["uppercase"])(this.uppercaseCount)(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('uppercaseValidation'),
        __metadata("design:type", Number)
    ], UppercaseValidationDirective.prototype, "uppercaseCount", void 0);
    UppercaseValidationDirective = UppercaseValidationDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uppercaseValidation]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: UppercaseValidationDirective_1, multi: true }]
        })
    ], UppercaseValidationDirective);
    return UppercaseValidationDirective;
    var UppercaseValidationDirective_1;
}());



/***/ }),

/***/ "./src/app/validation/helpers/digits-count-validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/validation/helpers/digits-count-validator.ts ***!
  \**************************************************************/
/*! exports provided: digitsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitsCount", function() { return digitsCount; });
function digitsCount(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^0-9])/ig);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'digitsCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/lowercase-validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/validation/helpers/lowercase-validator.ts ***!
  \***********************************************************/
/*! exports provided: lowercase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
function lowercase(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^a-z])/g);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'lowercaseCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/phone-number-validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/validation/helpers/phone-number-validator.ts ***!
  \**************************************************************/
/*! exports provided: phoneNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneNumber", function() { return phoneNumber; });
function phoneNumber() {
    return function (control) {
        var inputValue = control.value;
        if (inputValue) {
            var regExp = new RegExp(/^\+?\d{7,15}$/);
            var isValid = inputValue.match(regExp) ? true : false;
            return isValid ? null : { 'phoneNumber': { value: control.value } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/required-if-field-has-value.validator.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/validation/helpers/required-if-field-has-value.validator.ts ***!
  \*****************************************************************************/
/*! exports provided: requiredIfFieldHasValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredIfFieldHasValue", function() { return requiredIfFieldHasValue; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

function requiredIfFieldHasValue(fieldName, values) {
    return function (control) {
        if (!control.root) {
            return null;
        }
        var field = control.root.get(fieldName);
        if (!field) {
            return null;
        }
        return values.indexOf(field.value) > -1 ?
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control) : null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/same-password-validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/validation/helpers/same-password-validator.ts ***!
  \***************************************************************/
/*! exports provided: samePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samePassword", function() { return samePassword; });
function samePassword(passwordToCompareControl) {
    var currentControl;
    return function (control) {
        var inputValue = control.value;
        if (!currentControl) {
            currentControl = control;
            if (!passwordToCompareControl) {
                throw new Error("samePasswordValidator(): control to compare was not found");
            }
            passwordToCompareControl.valueChanges.subscribe(function (passwordToCompareValue) {
                if (inputValue) {
                    if (passwordToCompareValue !== currentControl.value) {
                        currentControl.setErrors({ matchPassword: true });
                    }
                    else {
                        currentControl.setErrors(null);
                    }
                }
            });
        }
        if (inputValue) {
            if (passwordToCompareControl.value !== currentControl.value) {
                return {
                    matchPassword: true
                };
            }
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/special-chars-validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/validation/helpers/special-chars-validator.ts ***!
  \***************************************************************/
/*! exports provided: specialChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialChars", function() { return specialChars; });
function specialChars(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([a-z0-9])/ig);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'specialCharsCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/helpers/uppercase-validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/validation/helpers/uppercase-validator.ts ***!
  \***********************************************************/
/*! exports provided: uppercase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
function uppercase(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^A-Z])/g);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'uppercaseCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validation/validation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/validation/validation.module.ts ***!
  \*************************************************/
/*! exports provided: ValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationModule", function() { return ValidationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_uppercase_validation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/uppercase-validation-directive */ "./src/app/validation/directives/uppercase-validation-directive.ts");
/* harmony import */ var _directives_lowercase_validation_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/lowercase-validation-directive */ "./src/app/validation/directives/lowercase-validation-directive.ts");
/* harmony import */ var _directives_digits_count_validation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/digits-count-validation-directive */ "./src/app/validation/directives/digits-count-validation-directive.ts");
/* harmony import */ var _directives_special_chars_count_validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/special-chars-count-validation-directive */ "./src/app/validation/directives/special-chars-count-validation-directive.ts");
/* harmony import */ var _directives_phone_number_validation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/phone-number-validation-directive */ "./src/app/validation/directives/phone-number-validation-directive.ts");
/* harmony import */ var _directives_same_password_validation_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/same-password-validation-directive */ "./src/app/validation/directives/same-password-validation-directive.ts");
/* harmony import */ var _directives_required_if_field_has_value_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/required-if-field-has-value.directive */ "./src/app/validation/directives/required-if-field-has-value.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ValidationModule = /** @class */ (function () {
    function ValidationModule() {
    }
    ValidationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _directives_uppercase_validation_directive__WEBPACK_IMPORTED_MODULE_3__["UppercaseValidationDirective"],
                _directives_lowercase_validation_directive__WEBPACK_IMPORTED_MODULE_4__["LowercaseValidationDirective"],
                _directives_digits_count_validation_directive__WEBPACK_IMPORTED_MODULE_5__["DigitsCountValidationDirective"],
                _directives_special_chars_count_validation_directive__WEBPACK_IMPORTED_MODULE_6__["SpecialCharsCountDirective"],
                _directives_phone_number_validation_directive__WEBPACK_IMPORTED_MODULE_7__["PhoneNumberValidationDirective"],
                _directives_same_password_validation_directive__WEBPACK_IMPORTED_MODULE_8__["SamePasswordValidationDirective"],
                _directives_required_if_field_has_value_directive__WEBPACK_IMPORTED_MODULE_9__["RequiredIfFieldHasValueValidationDirective"]
            ],
            exports: [
                _directives_uppercase_validation_directive__WEBPACK_IMPORTED_MODULE_3__["UppercaseValidationDirective"],
                _directives_lowercase_validation_directive__WEBPACK_IMPORTED_MODULE_4__["LowercaseValidationDirective"],
                _directives_digits_count_validation_directive__WEBPACK_IMPORTED_MODULE_5__["DigitsCountValidationDirective"],
                _directives_special_chars_count_validation_directive__WEBPACK_IMPORTED_MODULE_6__["SpecialCharsCountDirective"],
                _directives_phone_number_validation_directive__WEBPACK_IMPORTED_MODULE_7__["PhoneNumberValidationDirective"],
                _directives_same_password_validation_directive__WEBPACK_IMPORTED_MODULE_8__["SamePasswordValidationDirective"],
                _directives_required_if_field_has_value_directive__WEBPACK_IMPORTED_MODULE_9__["RequiredIfFieldHasValueValidationDirective"]
            ]
        })
    ], ValidationModule);
    return ValidationModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PROGRAMACION III\moresneakers-backoffice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map