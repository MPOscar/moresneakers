(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>More Snakers Admin</h1>\n\n<div class=\"mb-20 margin-right-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"65\">\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h2>Page Manager</h2>\n                </div>\n                <div class=\"justify-content-space-around width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/styles']\">\n                            <h2>Style</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/releases']\">\n                            <h2>Release</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\">\n                            <h2>Offer</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/brands']\">\n                            <h2>Brand</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/categories']\">\n                            <h2>Category</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/shops']\">\n                            <h2>Shop</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/blogs']\">\n                            <h2>Blog</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/layouts']\">\n                            <h2>Layout</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/urls']\">\n                            <h2>URL</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/collections']\">\n                            <h2>Collection</h2>\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h2>Configuration Panel</h2>\n                </div>\n                <div class=\"width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>Contact Details</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button (click)=\"editPrivacyModal()\">Privacy Policy</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>Social Networks</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button (click)=\"editGDPRModal()\">GDPR</button>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px margin-bottom-25px\">\n            <pending-tasks-table></pending-tasks-table>\n        </div>\n    </div>\n    <span class=\"flex-grow-1\"></span>\n    <div [fxFlex]=\"30\" class=\"border-2px-solid-black padding-10px height-100-pc\">\n        <div fxFlexFill fxLayout=\"column\" class=\"padding-10px\">\n            <h2>Control Sheet</h2>\n            <div [fxFlex]=\"100\" class=\"border-2px-solid-black padding-10px\">\n                Traked Links\n            </div>\n\n            <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px padding-10px\">\n                <releases-out-of-date></releases-out-of-date>\n            </div>\n\n            <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px padding-10px\">\n                Google\n            </div>\n\n            <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px padding-10px\">\n                Deeplink Generator\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.box-shadow-none {\n  box-shadow: none !important; }\n\n.mat-card-home {\n  border-radius: 5px;\n  color: white;\n  background-color: #6f6f6f; }\n\n.border-radius-5px {\n  border-radius: 5px !important; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\ntr.mat-header-row {\n  background-color: #f1f1f1; }\n\n.max-height-200px {\n  max-height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaG9tZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxob21lXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFLckI7O0FBTkQ7SUFHUSxtQkFBa0I7SUFDbEIsa0JBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWiwwQkFBeUIsRUFFNUI7O0FBRUQ7RUFDSSw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICB9XG59XG5cbi5tYi0yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJveC1zaGFkb3ctbm9uZXtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2FyZC1ob21lIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjZmNmY7XG5cbn1cblxuLmJvcmRlci1yYWRpdXMtNXB4IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGwge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgXG59XG5cbi5tYXgtaGVpZ2h0LTIwMHB4e1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ms_privacy_components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ms-privacy/components/edit-privacy/edit-privacy.component */ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.ts");
/* harmony import */ var _ms_gdpr_components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ms-gdpr/components/edit-gdpr/edit-gdpr.component */ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.ts");
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


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
];
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.places = [];
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }
    HomeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.editPrivacyModal = function () {
        this.modalRef = this.dialog.open(_ms_privacy_components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_2__["EditPrivacyComponent"], {
            height: '90%',
            data: {}
        });
        this.modalRef.afterClosed().subscribe(function () {
        });
    };
    HomeComponent.prototype.editGDPRModal = function () {
        this.modalRef = this.dialog.open(_ms_gdpr_components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_3__["EditGDPRComponent"], {
            height: '90%',
            data: {}
        });
        this.modalRef.afterClosed().subscribe(function () {
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/ms-back-office/modules/home/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/ms-back-office/modules/home/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/home/home-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/home-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/ms-back-office/modules/home/components/home/home.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ms-users/services/users-resolve.service */ "./src/app/ms-back-office/modules/ms-users/services/users-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-releases/services/releases-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_3__["ConfigResolveService"],
            users: _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_4__["UsersResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_5__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_8__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ShopsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_10__["ReleasesResolveService"],
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/home/home.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/home.module.ts ***!
  \************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/ms-back-office/modules/home/home-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/ms-back-office/modules/home/components/home/home.component.ts");
/* harmony import */ var _ms_tasks_ms_tasks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-tasks/ms-tasks.module */ "./src/app/ms-back-office/modules/ms-tasks/ms-tasks.module.ts");
/* harmony import */ var _ms_releases_ms_releases_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-releases/ms-releases.module */ "./src/app/ms-back-office/modules/ms-releases/ms-releases.module.ts");
/* harmony import */ var _ms_gdpr_ms_gdpr_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-gdpr/ms-gdpr.module */ "./src/app/ms-back-office/modules/ms-gdpr/ms-gdpr.module.ts");
/* harmony import */ var _ms_privacy_ms_privacy_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-privacy/ms-privacy.module */ "./src/app/ms-back-office/modules/ms-privacy/ms-privacy.module.ts");
/* harmony import */ var _ms_privacy_components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ms-privacy/components/edit-privacy/edit-privacy.component */ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.ts");
/* harmony import */ var _ms_gdpr_components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ms-gdpr/components/edit-gdpr/edit-gdpr.component */ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//










//


var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _ms_gdpr_ms_gdpr_module__WEBPACK_IMPORTED_MODULE_10__["MsGDPRModule"],
                _ms_privacy_ms_privacy_module__WEBPACK_IMPORTED_MODULE_11__["MsPrivacyModule"],
                _ms_releases_ms_releases_module__WEBPACK_IMPORTED_MODULE_9__["MsReleasesModule"],
                _ms_tasks_ms_tasks_module__WEBPACK_IMPORTED_MODULE_8__["MsTasksModule"],
            ],
            declarations: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            entryComponents: [
                _ms_gdpr_components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_13__["EditGDPRComponent"],
                _ms_privacy_components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_12__["EditPrivacyComponent"],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>GDPR</h1>\n<gdpr-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</gdpr-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px 25px 25px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1nZHByL2NvbXBvbmVudHMvZWRpdC1nZHByL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWdkcHJcXGNvbXBvbmVudHNcXGVkaXQtZ2RwclxcZWRpdC1nZHByLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNJLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtZ2Rwci9jb21wb25lbnRzL2VkaXQtZ2Rwci9lZGl0LWdkcHIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTYwLXBjdHtcclxuICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweCAyNXB4IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditGDPRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGDPRComponent", function() { return EditGDPRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_gdpr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gdpr.service */ "./src/app/ms-back-office/modules/ms-gdpr/services/gdpr.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
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










var errorKey = 'Error';
var updatedPrivacyMessageKey = 'Updated';
var EditGDPRComponent = /** @class */ (function () {
    function EditGDPRComponent(activatedRoute, dialog, gdprService, errorHandlingService, imagesService, router, translate, toastr, dialogRef, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.gdprService = gdprService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        this.faceList = [];
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditGDPRComponent.prototype.ngOnInit = function () {
        this.blogId = this.activatedRoute.snapshot.data.blogId;
        this.brands = this.activatedRoute.snapshot.data.brands;
    };
    EditGDPRComponent.prototype.ngAfterViewInit = function () {
        this.getBlog();
    };
    EditGDPRComponent.prototype.getBlog = function () {
        var _this = this;
        this.gdprService.getGDPR().subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditGDPRComponent.prototype.submit = function (data) {
        var privacy = {
            value: data.value,
        };
        this.updatePrivacy(privacy);
    };
    EditGDPRComponent.prototype.cancel = function () {
        this.close();
    };
    EditGDPRComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditGDPRComponent.prototype.updatePrivacy = function (privacy) {
        var _this = this;
        this.gdprService.putGDPR(privacy).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedPrivacyMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditGDPRComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-gdpr',
            template: __webpack_require__(/*! ./edit-gdpr.component.html */ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.html"),
            styles: [__webpack_require__(/*! ./edit-gdpr.component.scss */ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_gdpr_service__WEBPACK_IMPORTED_MODULE_4__["GDPRService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EditGDPRComponent);
    return EditGDPRComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n\r\n        <div [fxFlex]=\"50\" class=\"width-100pc padding-right-25px\">\r\n\r\n          <div>\r\n\r\n            <div [froalaEditor] formControlName=\"value\"></div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.padding-right-25px {\n  padding-right: 25px !important; }\n\n.width-70pc {\n  width: 70% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1nZHByL2NvbXBvbmVudHMvZ2Rwci1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWdkcHJcXGNvbXBvbmVudHNcXGdkcHItZm9ybVxcZ2Rwci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWdkcHIvY29tcG9uZW50cy9nZHByLWZvcm0vZ2Rwci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQtMjVweCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC03MHBje1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GDPRFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GDPRFormComponent", function() { return GDPRFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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

//

var GDPRFormComponent = /** @class */ (function (_super) {
    __extends(GDPRFormComponent, _super);
    function GDPRFormComponent(formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.AngularEditorConfig = {
            editable: true,
            spellcheck: true,
            height: '25rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'http://localhost:4000/api/v1/image/',
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    GDPRFormComponent.prototype.ngOnInit = function () {
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
    };
    GDPRFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    GDPRFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    GDPRFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gdpr-form',
            template: __webpack_require__(/*! ./gdpr-form.component.html */ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gdpr-form.component.scss */ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], GDPRFormComponent);
    return GDPRFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-shrink-0 display-flex justify-content-end close-mat-dialog-buttom\">\r\n    <span class=\"mat-button-wrapper cursor-pointer\" (click)=\"close()\">\r\n    <mat-icon>clear</mat-icon>\r\n    </span>\r\n</div>\r\n<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <mat-radio-group formControlName=\"type\">\r\n\r\n        <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\r\n\r\n          <div class=\"display-flex margin-right-25px\">\r\n\r\n            <mat-radio-button value=\"Article\" class=\"margin-top-10px\" matTooltip=\"{{ 'Article' | translate }}\" [disabled]=\"true\">Article</mat-radio-button>\r\n\r\n          </div>\r\n\r\n          <div class=\"display-flex\">\r\n\r\n            <mat-radio-button value=\"Focus\" class=\"margin-top-10px\" matTooltip=\"{{ 'Focus' | translate }}\" [disabled]=\"true\">Focus</mat-radio-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-radio-group>\r\n\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div [fxFlex]=\"50\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" class=\"max-width-480px\">\r\n\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Author</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"author\" required readonly>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\" panelOpen=\"true\" required [disabled]=\"true\">\r\n                  <mat-option>...</mat-option>\r\n                  <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\">\r\n                    {{brand.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Title</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"title\" required readonly>\r\n\r\n          </mat-form-field>\r\n          <div class=\"padding-top-25px max-width-480px\">\r\n            <div class=\"padding-bottom-25px\">\r\n              <mat-label>Body</mat-label>\r\n            </div>\r\n            <!--p-editor [style]=\"{'height':'320px'}\" formControlName=\"body\" [readonly]=\"true\"></p-editor-->\r\n            <div [froalaEditor] formControlName=\"body\" [disabled]=\"true\"></div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"max-width-480px\">\r\n\r\n          <div class=\"display-flex justify-content-center\">\r\n            <h3>Image</h3>\r\n          </div>\r\n\r\n          <image-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\" [disabled]=\"true\"></image-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px 25px 25px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1nZHByL2NvbXBvbmVudHMvc2VlLWdkcHIvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtZ2RwclxcY29tcG9uZW50c1xcc2VlLWdkcHJcXHNlZS1nZHByLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDRCQUEyQixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtZ2Rwci9jb21wb25lbnRzL3NlZS1nZHByL3NlZS1nZHByLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SeeGDPRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeGDPRComponent", function() { return SeeGDPRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _services_gdpr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/gdpr.service */ "./src/app/ms-back-office/modules/ms-gdpr/services/gdpr.service.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//


//




var errorKey = 'Error';
var SeeGDPRComponent = /** @class */ (function (_super) {
    __extends(SeeGDPRComponent, _super);
    function SeeGDPRComponent(formBuilder, gdprService, errorHandlingService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.gdprService = gdprService;
        _this.errorHandlingService = errorHandlingService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeeGDPRComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
        this.gdprService.getGDPR().subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    SeeGDPRComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.dialogData.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.author),
            brandId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brandId),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.body),
            faces: this.faces,
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.title),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.type),
        });
    };
    SeeGDPRComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    SeeGDPRComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeGDPRComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Face"])
    ], SeeGDPRComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeGDPRComponent.prototype, "brands", void 0);
    SeeGDPRComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-gdpr',
            template: __webpack_require__(/*! ./see-gdpr.component.html */ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./see-gdpr.component.scss */ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_gdpr_service__WEBPACK_IMPORTED_MODULE_6__["GDPRService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SeeGDPRComponent);
    return SeeGDPRComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/ms-gdpr.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/ms-gdpr.module.ts ***!
  \******************************************************************/
/*! exports provided: MsGDPRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsGDPRModule", function() { return MsGDPRModule; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_gdpr_form_gdpr_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/gdpr-form/gdpr-form.component */ "./src/app/ms-back-office/modules/ms-gdpr/components/gdpr-form/gdpr-form.component.ts");
/* harmony import */ var _components_see_gdpr_see_gdpr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/see-gdpr/see-gdpr.component */ "./src/app/ms-back-office/modules/ms-gdpr/components/see-gdpr/see-gdpr.component.ts");
/* harmony import */ var _components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-gdpr/edit-gdpr.component */ "./src/app/ms-back-office/modules/ms-gdpr/components/edit-gdpr/edit-gdpr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//


















//


//



var MsGDPRModule = /** @class */ (function () {
    function MsGDPRModule() {
    }
    MsGDPRModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__["FroalaViewModule"].forRoot(),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_18__["ImageCardModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"],
            ],
            declarations: [
                _components_gdpr_form_gdpr_form_component__WEBPACK_IMPORTED_MODULE_20__["GDPRFormComponent"],
                _components_see_gdpr_see_gdpr_component__WEBPACK_IMPORTED_MODULE_21__["SeeGDPRComponent"],
                _components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_22__["EditGDPRComponent"],
            ],
            exports: [
                _components_gdpr_form_gdpr_form_component__WEBPACK_IMPORTED_MODULE_20__["GDPRFormComponent"],
                _components_see_gdpr_see_gdpr_component__WEBPACK_IMPORTED_MODULE_21__["SeeGDPRComponent"],
                _components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_22__["EditGDPRComponent"],
            ],
            entryComponents: [
                _components_see_gdpr_see_gdpr_component__WEBPACK_IMPORTED_MODULE_21__["SeeGDPRComponent"],
                _components_edit_gdpr_edit_gdpr_component__WEBPACK_IMPORTED_MODULE_22__["EditGDPRComponent"],
            ]
        })
    ], MsGDPRModule);
    return MsGDPRModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-gdpr/services/gdpr.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-gdpr/services/gdpr.service.ts ***!
  \*************************************************************************/
/*! exports provided: ASCENDING, GDPRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GDPRService", function() { return GDPRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
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

var ASCENDING = 'asc';
var GDPRService = /** @class */ (function () {
    function GDPRService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'title';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.apiEndpoint = this.configService.config.apiConfigs.settings.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    GDPRService.prototype.putGDPR = function (data) {
        return this.http.put(this.apiEndpoint + 'gdpr/', JSON.stringify(data));
    };
    GDPRService.prototype.getGDPR = function () {
        return this.http.get(this.apiEndpoint + 'gdpr/');
    };
    GDPRService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], GDPRService);
    return GDPRService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>PRIVACY</h1>\n<privacy-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</privacy-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px 25px 25px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1wcml2YWN5L2NvbXBvbmVudHMvZWRpdC1wcml2YWN5L0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXByaXZhY3lcXGNvbXBvbmVudHNcXGVkaXQtcHJpdmFjeVxcZWRpdC1wcml2YWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFSDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNJLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcHJpdmFjeS9jb21wb25lbnRzL2VkaXQtcHJpdmFjeS9lZGl0LXByaXZhY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTYwLXBjdHtcclxuICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjVweCAyNXB4IDI1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPrivacyComponent", function() { return EditPrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_privacy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/privacy.service */ "./src/app/ms-back-office/modules/ms-privacy/services/privacy.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
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










var errorKey = 'Error';
var updatedPrivacyMessageKey = 'Updated';
var EditPrivacyComponent = /** @class */ (function () {
    function EditPrivacyComponent(activatedRoute, dialog, privacyService, errorHandlingService, imagesService, router, translate, toastr, dialogRef, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.privacyService = privacyService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        this.faceList = [];
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditPrivacyComponent.prototype.ngOnInit = function () {
        this.blogId = this.activatedRoute.snapshot.data.blogId;
        this.brands = this.activatedRoute.snapshot.data.brands;
    };
    EditPrivacyComponent.prototype.ngAfterViewInit = function () {
        this.getBlog();
    };
    EditPrivacyComponent.prototype.getBlog = function () {
        var _this = this;
        this.privacyService.getPrivacy().subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditPrivacyComponent.prototype.submit = function (data) {
        var privacy = {
            value: data.value,
        };
        this.updatePrivacy(privacy);
    };
    EditPrivacyComponent.prototype.cancel = function () {
        this.close();
    };
    EditPrivacyComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditPrivacyComponent.prototype.updatePrivacy = function (privacy) {
        var _this = this;
        this.privacyService.putPrivacy(privacy).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedPrivacyMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditPrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-privacy',
            template: __webpack_require__(/*! ./edit-privacy.component.html */ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.html"),
            styles: [__webpack_require__(/*! ./edit-privacy.component.scss */ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_privacy_service__WEBPACK_IMPORTED_MODULE_4__["PrivacyService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EditPrivacyComponent);
    return EditPrivacyComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n\r\n        <div [fxFlex]=\"50\" class=\"width-100pc padding-right-25px\">\r\n\r\n          <div>\r\n\r\n            <div [froalaEditor] formControlName=\"value\"></div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.padding-right-25px {\n  padding-right: 25px !important; }\n\n.width-70pc {\n  width: 70% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1wcml2YWN5L2NvbXBvbmVudHMvcHJpdmFjeS1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXByaXZhY3lcXGNvbXBvbmVudHNcXHByaXZhY3ktZm9ybVxccHJpdmFjeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXByaXZhY3kvY29tcG9uZW50cy9wcml2YWN5LWZvcm0vcHJpdmFjeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQtMjVweCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC03MHBje1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PrivacyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyFormComponent", function() { return PrivacyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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

//


var PrivacyFormComponent = /** @class */ (function (_super) {
    __extends(PrivacyFormComponent, _super);
    function PrivacyFormComponent(formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.AngularEditorConfig = {
            editable: true,
            spellcheck: true,
            height: '25rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'http://localhost:4000/api/v1/image/',
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    PrivacyFormComponent.prototype.ngOnInit = function () {
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
    };
    PrivacyFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    PrivacyFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PrivacyFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__["Face"])
    ], PrivacyFormComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PrivacyFormComponent.prototype, "brands", void 0);
    PrivacyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'privacy-form',
            template: __webpack_require__(/*! ./privacy-form.component.html */ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./privacy-form.component.scss */ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], PrivacyFormComponent);
    return PrivacyFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-shrink-0 display-flex justify-content-end close-mat-dialog-buttom\">\r\n    <span class=\"mat-button-wrapper cursor-pointer\" (click)=\"close()\">\r\n    <mat-icon>clear</mat-icon>\r\n    </span>\r\n</div>\r\n<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <mat-radio-group formControlName=\"type\">\r\n\r\n        <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\r\n\r\n          <div class=\"display-flex margin-right-25px\">\r\n\r\n            <mat-radio-button value=\"Article\" class=\"margin-top-10px\" matTooltip=\"{{ 'Article' | translate }}\" [disabled]=\"true\">Article</mat-radio-button>\r\n\r\n          </div>\r\n\r\n          <div class=\"display-flex\">\r\n\r\n            <mat-radio-button value=\"Focus\" class=\"margin-top-10px\" matTooltip=\"{{ 'Focus' | translate }}\" [disabled]=\"true\">Focus</mat-radio-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-radio-group>\r\n\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div [fxFlex]=\"50\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" class=\"max-width-480px\">\r\n\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Author</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"author\" required readonly>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\" panelOpen=\"true\" required [disabled]=\"true\">\r\n                  <mat-option>...</mat-option>\r\n                  <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\">\r\n                    {{brand.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Title</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"title\" required readonly>\r\n\r\n          </mat-form-field>\r\n          <div class=\"padding-top-25px max-width-480px\">\r\n            <div class=\"padding-bottom-25px\">\r\n              <mat-label>Body</mat-label>\r\n            </div>\r\n            <!--p-editor [style]=\"{'height':'320px'}\" formControlName=\"body\" [readonly]=\"true\"></p-editor-->\r\n            <div [froalaEditor] formControlName=\"body\" [disabled]=\"true\"></div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"max-width-480px\">\r\n\r\n          <div class=\"display-flex justify-content-center\">\r\n            <h3>Image</h3>\r\n          </div>\r\n\r\n          <image-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\" [disabled]=\"true\"></image-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px 25px 25px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1wcml2YWN5L2NvbXBvbmVudHMvc2VlLXByaXZhY3kvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtcHJpdmFjeVxcY29tcG9uZW50c1xcc2VlLXByaXZhY3lcXHNlZS1wcml2YWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDRCQUEyQixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcHJpdmFjeS9jb21wb25lbnRzL3NlZS1wcml2YWN5L3NlZS1wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SeePrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeePrivacyComponent", function() { return SeePrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _services_privacy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/privacy.service */ "./src/app/ms-back-office/modules/ms-privacy/services/privacy.service.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//


//




var errorKey = 'Error';
var SeePrivacyComponent = /** @class */ (function (_super) {
    __extends(SeePrivacyComponent, _super);
    function SeePrivacyComponent(formBuilder, privacyService, errorHandlingService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.privacyService = privacyService;
        _this.errorHandlingService = errorHandlingService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeePrivacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
        this.privacyService.getPrivacy().subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    SeePrivacyComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.dialogData.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.author),
            brandId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brandId),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.body),
            faces: this.faces,
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.title),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.type),
        });
    };
    SeePrivacyComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    SeePrivacyComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeePrivacyComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Face"])
    ], SeePrivacyComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeePrivacyComponent.prototype, "brands", void 0);
    SeePrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-privacy',
            template: __webpack_require__(/*! ./see-privacy.component.html */ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./see-privacy.component.scss */ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_privacy_service__WEBPACK_IMPORTED_MODULE_6__["PrivacyService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SeePrivacyComponent);
    return SeePrivacyComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/ms-privacy.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/ms-privacy.module.ts ***!
  \************************************************************************/
/*! exports provided: MsPrivacyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsPrivacyModule", function() { return MsPrivacyModule; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_privacy_form_privacy_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/privacy-form/privacy-form.component */ "./src/app/ms-back-office/modules/ms-privacy/components/privacy-form/privacy-form.component.ts");
/* harmony import */ var _components_see_privacy_see_privacy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/see-privacy/see-privacy.component */ "./src/app/ms-back-office/modules/ms-privacy/components/see-privacy/see-privacy.component.ts");
/* harmony import */ var _components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-privacy/edit-privacy.component */ "./src/app/ms-back-office/modules/ms-privacy/components/edit-privacy/edit-privacy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//


















//


//



var MsPrivacyModule = /** @class */ (function () {
    function MsPrivacyModule() {
    }
    MsPrivacyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_17__["FroalaViewModule"].forRoot(),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_18__["ImageCardModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"],
            ],
            declarations: [
                _components_privacy_form_privacy_form_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyFormComponent"],
                _components_see_privacy_see_privacy_component__WEBPACK_IMPORTED_MODULE_21__["SeePrivacyComponent"],
                _components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_22__["EditPrivacyComponent"],
            ],
            exports: [
                _components_privacy_form_privacy_form_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyFormComponent"],
                _components_see_privacy_see_privacy_component__WEBPACK_IMPORTED_MODULE_21__["SeePrivacyComponent"],
                _components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_22__["EditPrivacyComponent"],
            ],
            entryComponents: [
                _components_see_privacy_see_privacy_component__WEBPACK_IMPORTED_MODULE_21__["SeePrivacyComponent"],
                _components_edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_22__["EditPrivacyComponent"],
            ]
        })
    ], MsPrivacyModule);
    return MsPrivacyModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-privacy/services/privacy.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-privacy/services/privacy.service.ts ***!
  \*******************************************************************************/
/*! exports provided: ASCENDING, PrivacyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyService", function() { return PrivacyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
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

var ASCENDING = 'asc';
var PrivacyService = /** @class */ (function () {
    function PrivacyService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'title';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.apiEndpoint = this.configService.config.apiConfigs.settings.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    PrivacyService.prototype.putPrivacy = function (data) {
        return this.http.put(this.apiEndpoint + 'privacy/', JSON.stringify(data));
    };
    PrivacyService.prototype.getPrivacy = function () {
        return this.http.get(this.apiEndpoint + 'privacy/');
    };
    PrivacyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], PrivacyService);
    return PrivacyService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/services/styles.service.ts ***!
  \****************************************************************************/
/*! exports provided: ASCENDING, StylesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesService", function() { return StylesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
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


//import { User, UsersListResponse, UsersListItem } from '../models/user';
var ASCENDING = 'asc';
var StylesService = /** @class */ (function () {
    function StylesService(configService, http) {
        this.configService = configService;
        this.http = http;
        //selectedStyles = new BehaviorSubject<Array<UsersListItem>>([]);TODO
        this.previousFilter = {};
        this.previousSortColumn = 'updatedAt';
        this.previousSortDirection = 'desc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.stylesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.styles.apiEndpoint;
    }
    StylesService.prototype.getStyles = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    StylesService.prototype.reloadStyles = function () {
        console.log("reload");
        return this.getStyles(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    StylesService.prototype.postStyle = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    StylesService.prototype.postStyleLinkedShops = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/shops/', JSON.stringify(data));
    };
    StylesService.prototype.getStyleLinkedShops = function (id) {
        return this.http.get(this.apiEndpoint + id + '/shops/');
    };
    StylesService.prototype.getStyle = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    StylesService.prototype.putStyle = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    StylesService.prototype.deleteStyle = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    StylesService.prototype.getPopularStyle = function (brandId) {
        return this.http.get(this.apiEndpoint + 'popular/?brandId=' + brandId);
    };
    StylesService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (sortColumn) {
            var ordering = '';
            if (sortDirection === 'desc') {
                ordering = '-';
            }
            ordering += sortColumn;
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "ordering=" + ordering;
        }
        if (pageIndex !== undefined) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "offset=" + pageIndex * pageSize;
        }
        if (pageSize !== undefined) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "limit=" + pageSize;
        }
        if (filter.sku && filter.sku.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "sku=" + filter.sku;
        }
        if (filter.name && filter.name.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "name=" + filter.name;
        }
        if (filter.brand && filter.brand.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "brand=" + filter.brand;
        }
        if (filter.collection && filter.collection.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "collection=" + filter.collection;
        }
        if (filter.category && filter.category.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "category=" + filter.category;
        }
        return queryParams;
    };
    StylesService.prototype.getAllStyles = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.data;
        }));
    };
    StylesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingHttpService"]])
    ], StylesService);
    return StylesService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map