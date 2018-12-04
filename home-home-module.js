(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>More Snakers Admin</h1>\n\n<div class=\"mb-20 margin-right-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n    <div [fxFlex]=\"65\">\n        <div [fxFlex]=\"100\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h3>Page Manager</h3>\n                </div>\n                <div class=\"width-100-pc\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\">\n                            Shoe\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\" [routerLink]=\"['/backoffice/releases']\">\n                            Release\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\">\n                            Offer\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"width-100-pc padding-top-20px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\" [routerLink]=\"['/backoffice/brands']\">\n                            Brand\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\" [routerLink]=\"['/backoffice/categories']\">\n                            Category\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\" [routerLink]=\"['/backoffice/shops']\">\n                            Shop\n                        </mat-card>\n                    </div>\n                </div>\n                <div class=\"width-100-pc padding-top-20px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\">\n                            Blog\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\">\n                            Layout\n                        </mat-card>\n                    </div>\n                    <div [fxFlex]=\"33.33\">\n                        <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"cursor-pointer mat-card-home\">\n                            URL\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h3>Configuration Panel</h3>\n                </div>\n                <div class=\"width-100-pc padding-top-20px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <div [fxFlex]=\"25\">\n                        <button mat-stroked-button>Contact Details</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button mat-stroked-button>Privacy Policy</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button mat-stroked-button>Social Networks</button>\n                    </div>\n                    <div [fxFlex]=\"25\">\n                        <button mat-stroked-button>GDPR</button>\n                    </div>\n                </div>\n            </mat-card>\n        </div>\n        <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n            <mat-card fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <div [fxFlex]=\"100\" class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                    <h3>Pending Task</h3>\n                </div>\n                <div class=\"width-100-pc padding-top-20px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                        <ng-container matColumnDef=\"position\">\n                            <th mat-header-cell *matHeaderCellDef> No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"name\">\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"weight\">\n                            <th mat-header-cell *matHeaderCellDef> Weight </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"symbol\">\n                            <th mat-header-cell *matHeaderCellDef> Symbol </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </mat-card>\n        </div>\n    </div>\n    <span class=\"flex-grow-1\"></span>\n    <div [fxFlex]=\"30\">\n        <mat-card fxFlexFill fxLayout=\"column\">\n            <h1>Control Sheet</h1>\n            <div [fxFlex]=\"100\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\" >\n                    Traked Link\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\">\n                    Release Out of Date\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\">\n                    Google\n                </mat-card>\n            </div>\n            <div [fxFlex]=\"100\" class=\"padding-top-20px\">\n                <mat-card fxFlexFill fxLayoutAlign=\"\">\n                    Deeplink Generator\n                </mat-card>\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/home/components/home/home.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/home/components/home/home.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mat-table {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.mat-card-home {\n  background-color: #616161;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 0 3px 1px -2px black, 0 2px 2px 0 black, 0 1px 5px 0 black !important; }\n\nmat-card {\n  box-shadow: 0 3px 1px -2px black, 0 3px 1px -2px black, 0 2px 2px 0 black, 0 1px 5px 0 black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaG9tZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxob21lXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFLckI7O0FBTkQ7SUFHUSxtQkFBa0I7SUFDbEIsa0JBQWlCLEVBQ3BCOztBQUVMO0VBQ0ksZ0hBQ21DLEVBQ3RDOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsa0ZBQXNHLEVBQ3pHOztBQUVEO0VBQ0ksd0dBQW1JLEVBQ3RJIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgfVxufVxuLm1hdC10YWJsZSB7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWItMjAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYXQtY2FyZC1ob21leyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYigwLCAwLCAwKSwgMCAycHggMnB4IDAgcmdiKDAsIDAsIDApLCAwIDFweCA1cHggMCByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmR7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiKDAsIDAsIDApLCAwIDNweCAxcHggLTJweCByZ2IoMCwgMCwgMCksIDAgMnB4IDJweCAwIHJnYigwLCAwLCAwKSwgMCAxcHggNXB4IDAgcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
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