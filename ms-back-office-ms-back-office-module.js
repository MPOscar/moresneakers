(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-back-office-ms-back-office-module"],{

/***/ "./src/app/ms-back-office/components/back-office/back-office.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ms-back-office/components/back-office/back-office.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<div class=\"main-container display-flex\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/ms-back-office/components/back-office/back-office.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ms-back-office/components/back-office/back-office.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL2NvbXBvbmVudHMvYmFjay1vZmZpY2UvYmFjay1vZmZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/components/back-office/back-office.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ms-back-office/components/back-office/back-office.component.ts ***!
  \********************************************************************************/
/*! exports provided: BackOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeComponent", function() { return BackOfficeComponent; });
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

var BackOfficeComponent = /** @class */ (function () {
    function BackOfficeComponent() {
    }
    BackOfficeComponent.prototype.ngOnInit = function () {
    };
    BackOfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-office',
            template: __webpack_require__(/*! ./back-office.component.html */ "./src/app/ms-back-office/components/back-office/back-office.component.html"),
            styles: [__webpack_require__(/*! ./back-office.component.scss */ "./src/app/ms-back-office/components/back-office/back-office.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackOfficeComponent);
    return BackOfficeComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fix-nav\">\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <div class=\"nav-brand cursor-pointer\" [routerLink]=\"['/backoffice/home']\">\n        MoreSneakers\n    </div>\n    <span class=\"nav-spacer\"></span>\n    <!--button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\n        <mat-icon>language</mat-icon>\n    </button>\n    <mat-menu #language=\"matMenu\">\n        <button mat-menu-item (click)=\"changeLang('en')\">\n            <span>{{ 'English' | translate }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLang('fr')\">\n            <span>{{ 'French' | translate }}</span>\n        </button>\n    </mat-menu-->\n    <span class=\"flex-grow-1\"></span>\n    <div class=\"marging-right-10px width-80px\">\n        <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\n            <mat-icon>account_circle</mat-icon> Admin\n        </button>\n        <mat-menu #profile=\"matMenu\">\n            <button mat-menu-item>\n                <mat-icon>person</mat-icon>\n                <span>{{ 'Profile' | translate }}</span>\n            </button>\n        </mat-menu>\n    </div>\n    <div>\n        <button mat-icon-button [routerLink]=\"['/logout']\" [queryParams]=\"\" matTooltip=\"{{ 'Exit' | translate }}\">\n            <mat-icon>exit_to_app</mat-icon>\n        </button>\n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.nav-brand {\n  width: 215px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n\n.width-80px {\n  width: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy9sYXlvdXQtdG9wbmF2L0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXGNvbXBvbmVudHNcXGxheW91dC10b3BuYXZcXGxheW91dC1zbGlkZXItdG9wbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLGdCQUFlO0VBQ2YsUUFBTztFQUNQLFNBQVE7RUFDUixPQUFNO0VBQ04sY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxzQkFBcUI7RUFDckIsY0FBYTtFQUNiLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYSxFQUNoQjs7QUFDRDtFQUNJO0lBQ0ksZUFBYyxFQUNqQixFQUFBOztBQUVMO0VBQ0k7SUFDSSxlQUFjLEVBQ2pCO0VBQ0Q7SUFDSSxZQUFXLEVBQ2QsRUFBQTs7QUFFTDtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBOztBQUdMO0VBQ0ksWUFBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy9sYXlvdXQtdG9wbmF2L2xheW91dC1zbGlkZXItdG9wbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuLm5hdi1icmFuZCB7XG4gICAgd2lkdGg6IDIxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3BuYXYtaWNvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXYtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnZpc2libGUtbWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4udmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLnZpc2libGUtbWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC52aXNpYmxlLXNtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYXYtYnJhbmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5oaWRkZW4tc20ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLndpZHRoLTgwcHh7XG4gICAgd2lkdGg6ODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LayoutSliderTopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSliderTopnavComponent", function() { return LayoutSliderTopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
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

var LayoutSliderTopnavComponent = /** @class */ (function () {
    function LayoutSliderTopnavComponent(authService, router, translate) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    LayoutSliderTopnavComponent.prototype.ngOnInit = function () { };
    LayoutSliderTopnavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    LayoutSliderTopnavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    LayoutSliderTopnavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    };
    LayoutSliderTopnavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    LayoutSliderTopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-slider-topnav',
            template: __webpack_require__(/*! ./layout-slider-topnav.component.html */ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.html"),
            styles: [__webpack_require__(/*! ./layout-slider-topnav.component.scss */ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LayoutSliderTopnavComponent);
    return LayoutSliderTopnavComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/components/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/components/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"isHandset ? 'dialog' : 'navigation'\" [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n        [opened]=\"!(isHandset | async)!.matches\">\n        <mat-toolbar color=\"primary\">SB Admin Material</mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\">\n                <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Dashbard\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/charts']\">\n                <mat-icon class=\"sidenav-icon\">bar_chart</mat-icon> Charts\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/tables']\">\n                <mat-icon class=\"sidenav-icon\">table_chart</mat-icon> Tables\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/forms']\">\n                <mat-icon class=\"sidenav-icon\">input</mat-icon> Forms\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/grid']\">\n                <mat-icon class=\"sidenav-icon\">grid_on</mat-icon> Grid\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/components']\">\n                <mat-icon class=\"sidenav-icon\">code</mat-icon> Components\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/blank-page']\">\n                <mat-icon class=\"sidenav-icon\">insert_drive_file</mat-icon> Black Page\n            </a>\n            <a mat-list-item>\n                <mat-icon class=\"sidenav-icon\">add</mat-icon> Menu\n            </a>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\" class=\"fix-nav\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"(isHandset | async)!.matches\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <mat-icon class=\"nav-icon\">menu</mat-icon>\n            <span class=\"nav-spacer\"></span>\n            <!--\n            <mat-icon class=\"nav-icon\">person</mat-icon>\n            <span class=\"nav-spacer\"></span>\n            <mat-icon class=\"nav-icon\">notifications</mat-icon>\n            <mat-icon class=\"nav-icon\">apps</mat-icon>\n            <mat-icon class=\"nav-icon\">fullscreen</mat-icon>\n            <mat-icon class=\"nav-icon\">flag</mat-icon>\n            <mat-icon class=\"nav-icon\">search</mat-icon>\n            <mat-icon class=\"nav-icon\">account_circle</mat-icon> -->\n            <a class=\"topnav-icon\" [routerLink]=\"['/login']\">\n                <mat-icon>exit_to_app</mat-icon>\n            </a>\n\n        </mat-toolbar>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/ms-back-office/components/nav/nav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/components/nav/nav.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy9uYXYvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcY29tcG9uZW50c1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMENBQXlDLEVBQzVDOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLGNBQWE7RUFDYixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4udG9wbmF2LWljb24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ubmF2LXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi8vIC5maXgtbmF2IHtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDI1MHB4O1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gfVxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/components/nav/nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ms-back-office/components/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/ms-back-office/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/ms-back-office/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/components/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ms-back-office/components/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\r\n    <mat-nav-list>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/home']\"\r\n        matTooltip=\"{{ 'Home' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">home</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/styles']\"\r\n        matTooltip=\"{{ 'Styles' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n        <mat-icon matListIcon svgIcon=\"moresneakers-style\">style</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/brands']\"\r\n        matTooltip=\"{{ 'Brands' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">library_books</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/collections']\"\r\n        matTooltip=\"{{ 'Collections' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">collections</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/shops']\"\r\n        matTooltip=\"{{ 'Shops' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">store</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/deals']\"\r\n        matTooltip=\"{{ 'Deals' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">thumb_up</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/categories']\"\r\n        matTooltip=\"{{ 'Categories' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">equalizer</mat-icon>\r\n        </a>\r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/releases']\"\r\n        matTooltip=\"{{ 'Releases' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">new_releases</mat-icon>\r\n        </a>  \r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/offers']\"\r\n        matTooltip=\"{{ 'Offers' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">business_center</mat-icon>\r\n        </a>   \r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/urls']\"\r\n        matTooltip=\"{{ 'Urls' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">computer</mat-icon>\r\n        </a>   \r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/tasks']\"\r\n        matTooltip=\"{{ 'Tasks' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">border_color</mat-icon>\r\n        </a> \r\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/backoffice/blogs']\"\r\n        matTooltip=\"{{ 'Blog' | translate }}\"\r\n        matTooltipPosition=\"right\">\r\n            <mat-icon class=\"sidenav-icon\">chat_bubble</mat-icon>\r\n        </a>             \r\n    </mat-nav-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/components/sidebar/sidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ms-back-office/components/sidebar/sidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  width: 60px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto; }\n  #sidebar .mat-nav-list {\n    width: 100%; }\n  #sidebar .mat-nav-list a {\n      display: block; }\n  #sidebar .mat-nav-list a .mat-icon {\n        margin-right: 15px; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu .submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0; }\n  .nested-menu .expand.submenu li a {\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy9zaWRlYmFyL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsVUFBUztFQUNULGlCQUFnQjtFQUNoQiwwQ0FBeUM7RUFDekMsYUFBWTtFQUNaLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFVbkI7RUFuQkQ7SUFXUSxZQUFXLEVBT2Q7RUFsQkw7TUFnQlksZUFBYyxFQUNqQjtFQWpCVDtRQWNnQixtQkFBa0IsRUFDckI7RUFLYjtFQUVRLHNCQUFxQixFQUN4QjtFQUhMO0VBS1EsY0FBYTtFQUNiLFVBQVMsRUFDWjtFQVBMO0VBVVksZUFBYztFQUNkLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osVUFBUyxFQU9aO0VBcEJUO0lBZ0JvQixjQUFhO0lBQ2IsZUFBYyxFQUNqQjtFQUtqQjtFQUNJO0lBQ0ksYUFBWSxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAtbXMtb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC5tYXQtbmF2LWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuLm5lc3RlZC1tZW51IHtcbiAgICAubmVzdGVkIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgICAuc3VibWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgJiAuZXhwYW5kIHtcbiAgICAgICAgJi5zdWJtZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgbGVmdDogLTI1MHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/components/sidebar/sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ms-back-office/components/sidebar/sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.showMenu = '';
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/ms-back-office/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/ms-back-office/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/components/topnav/topnav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ms-back-office/components/topnav/topnav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fix-nav\">\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <div class=\"nav-brand cursor-pointer\" [routerLink]=\"['/backoffice/home']\">\n        MoreSneakers\n    </div>\n    <span class=\"nav-spacer\"></span>\n    <!--button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\n        <mat-icon>language</mat-icon>\n    </button>\n    <mat-menu #language=\"matMenu\">\n        <button mat-menu-item (click)=\"changeLang('en')\">\n            <span>{{ 'English' | translate }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLang('fr')\">\n            <span>{{ 'French' | translate }}</span>\n        </button>\n    </mat-menu-->\n    <span class=\"flex-grow-1\"></span>\n    <!--div class=\"marging-right-10px width-80px\">\n        <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\n            <mat-icon>account_circle</mat-icon> Admin\n        </button>\n        <mat-menu #profile=\"matMenu\">\n            <button mat-menu-item>\n                <mat-icon>person</mat-icon>\n                <span>{{ 'Profile' | translate }}</span>\n            </button>\n        </mat-menu>\n    </div-->\n    <div class=\"marging-right-10px width-80px\">\n        <button class=\"hidden-sm\" mat-icon-button>\n            <mat-icon>account_circle</mat-icon> Admin\n        </button>\n        \n    </div>\n    <div>\n        <button mat-icon-button [routerLink]=\"['/logout']\" [queryParams]=\"\" matTooltip=\"{{ 'Exit' | translate }}\">\n            <mat-icon>exit_to_app</mat-icon>\n        </button>\n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/ms-back-office/components/topnav/topnav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ms-back-office/components/topnav/topnav.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.nav-brand {\n  width: 215px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n\n.width-80px {\n  width: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvY29tcG9uZW50cy90b3BuYXYvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcY29tcG9uZW50c1xcdG9wbmF2XFx0b3BuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixRQUFPO0VBQ1AsU0FBUTtFQUNSLE9BQU07RUFDTixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0k7SUFDSSxlQUFjLEVBQ2pCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLGVBQWMsRUFDakI7RUFDRDtJQUNJLFlBQVcsRUFDZCxFQUFBOztBQUVMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCLEVBQUE7O0FBR0w7RUFDSSxZQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ubmF2LWJyYW5kIHtcbiAgICB3aWR0aDogMjE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvcG5hdi1pY29uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdi1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudmlzaWJsZS1tZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnZpc2libGUtc20ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5hdi1icmFuZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhpZGRlbi1zbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ud2lkdGgtODBweHtcbiAgICB3aWR0aDo4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/components/topnav/topnav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ms-back-office/components/topnav/topnav.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
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

var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(authService, router, translate) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.translate = translate;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    TopnavComponent.prototype.ngOnInit = function () { };
    TopnavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    TopnavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    TopnavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    };
    TopnavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/ms-back-office/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/ms-back-office/components/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-back-office-routing/ms-back-office-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-back-office-routing/ms-back-office-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: MsBackOfficeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBackOfficeRoutingModule", function() { return MsBackOfficeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/back-office/back-office.component */ "./src/app/ms-back-office/components/back-office/back-office.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_2__["BackOfficeComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'offers',
                loadChildren: '../ms-offers/ms-offers.module#MsOffersModule'
            },
            {
                path: 'home',
                loadChildren: '../home/home.module#HomeModule'
            },
            {
                path: 'styles',
                loadChildren: '../ms-style/ms-style.module#MsStyleModule'
            },
            {
                path: 'brands',
                loadChildren: '../ms-brands/ms-brands.module#MsBrandsModule'
            },
            {
                path: 'collections',
                loadChildren: '../ms-collections/ms-collections.module#MsCollectionsModule'
            },
            {
                path: 'shops',
                loadChildren: '../ms-shops/ms-shops.module#MsShopsModule'
            },
            {
                path: 'categories',
                loadChildren: '../ms-categories/ms-categories.module#MsCategoriesModule'
            },
            {
                path: 'users',
                loadChildren: '../ms-users/ms-users.module#MsUsersModule'
            },
            {
                path: 'releases',
                loadChildren: '../ms-releases/ms-releases.module#MsReleasesModule'
            },
            {
                path: 'blogs',
                loadChildren: '../ms-blogs/ms-blogs.module#MsBlogsModule'
            },
            {
                path: 'deals',
                loadChildren: '../ms-deals/ms-deals.module#MsDealsModule'
            },
            {
                path: 'urls',
                loadChildren: '../ms-urls/ms-urls.module#MsUrlsModule'
            },
            {
                path: 'tasks',
                loadChildren: '../ms-tasks/ms-tasks.module#MsTasksModule'
            },
            {
                path: 'layouts',
                loadChildren: '../ms-layout/ms-layout.module#MsLayoutModule'
            }
        ]
    }
];
var MsBackOfficeRoutingModule = /** @class */ (function () {
    function MsBackOfficeRoutingModule() {
    }
    MsBackOfficeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsBackOfficeRoutingModule);
    return MsBackOfficeRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/ms-back-office.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ms-back-office/ms-back-office.module.ts ***!
  \*********************************************************/
/*! exports provided: MsBackOfficeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBackOfficeModule", function() { return MsBackOfficeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/back-office/back-office.component */ "./src/app/ms-back-office/components/back-office/back-office.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/ms-back-office/components/nav/nav.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/ms-back-office/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/ms-back-office/components/topnav/topnav.component.ts");
/* harmony import */ var _components_layout_topnav_layout_slider_topnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout-topnav/layout-slider-topnav.component */ "./src/app/ms-back-office/components/layout-topnav/layout-slider-topnav.component.ts");
/* harmony import */ var _modules_ms_back_office_routing_ms_back_office_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/ms-back-office-routing/ms-back-office-routing.module */ "./src/app/ms-back-office/modules/ms-back-office-routing/ms-back-office-routing.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/config.module */ "./src/app/config/config.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//



//






var MsBackOfficeModule = /** @class */ (function () {
    function MsBackOfficeModule() {
    }
    MsBackOfficeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _modules_ms_back_office_routing_ms_back_office_routing_module__WEBPACK_IMPORTED_MODULE_9__["MsBackOfficeRoutingModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_10__["ConfigModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            declarations: [
                _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_2__["BackOfficeComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__["TopnavComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_layout_topnav_layout_slider_topnav_component__WEBPACK_IMPORTED_MODULE_8__["LayoutSliderTopnavComponent"]
            ]
        })
    ], MsBackOfficeModule);
    return MsBackOfficeModule;
}());



/***/ })

}]);
//# sourceMappingURL=ms-back-office-ms-back-office-module.js.map