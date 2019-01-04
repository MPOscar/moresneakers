(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>More Snakers Admin</h1>\n\n<div class=\"mb-20 margin-right-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"65\">\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h2>Page Manager</h2>\n                </div>\n                <div class=\"justify-content-space-around width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/styles']\">\n                            <h2>Style</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/releases']\">\n                            <h2>Release</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\">\n                            <h2>Offer</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/brands']\">\n                            <h2>Brand</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/categories']\">\n                            <h2>Category</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/shops']\">\n                            <h2>Shop</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\">\n                            <h2>Blog</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\">\n                            <h2>Layout</h2>\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\">\n                            <h2>URL</h2>\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"justify-content-space-around padding-top-20px width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home box-shadow-none\" [routerLink]=\"['/backoffice/collections']\">\n                            <h2>Collection</h2>\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h2>Configuration Panel</h2>\n                </div>\n                <div class=\"width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>Contact Details</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>Privacy Policy</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>Social Networks</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button class=\"border-radius-5px border-2px-solid-black\" mat-stroked-button>GDPR</button>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"border-2px-solid-black margin-top-25px margin-bottom-25px\">\n            <pending-tasks-table></pending-tasks-table>\n        </div>\n    </div>\n    <span class=\"flex-grow-1\"></span>\n    <div [fxFlex]=\"30\" class=\"border-2px-solid-black\">\n        <mat-card fxFlexFill fxLayout=\"column\">\n            <h2>Control Sheet</h2>\n            <div [fxFlex]=\"100\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\" class=\"border-2px-solid-black box-shadow-none\">\n                    Traked Links\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\" class=\"border-2px-solid-black box-shadow-none\">\n                    Releases Out of Date\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\" class=\"border-2px-solid-black box-shadow-none\">\n                    Google\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\" class=\"border-2px-solid-black box-shadow-none\">\n                    Deeplink Generator\n                </mat-card>\n            </div>\n        </mat-card>\n    </div>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    function HomeComponent() {
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
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/ms-back-office/modules/home/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/ms-back-office/modules/home/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
            users: _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_4__["UsersResolveService"]
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









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
                _ms_tasks_ms_tasks_module__WEBPACK_IMPORTED_MODULE_8__["MsTasksModule"]
            ],
            declarations: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map