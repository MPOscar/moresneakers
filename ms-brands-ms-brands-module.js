(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-brands-ms-brands-module"],{

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\" novalidate role=\"form\" (ngSubmit)=\"submitClicked()\"\n  autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <mat-form-field class=\"width-100pc margin-left-16px\">\n\n        <mat-label>Brand Name</mat-label>\n\n        <input matInput type=\"text\" formControlName=\"name\" required>\n\n      </mat-form-field>\n\n      <mat-form-field class=\"width-100pc margin-left-16px\">\n\n        <mat-label>Description</mat-label>\n\n        <textarea matInput formControlName=\"description\"></textarea>\n\n      </mat-form-field>\n\n      <mat-form-field class=\"width-100pc margin-left-16px\">\n\n        <mat-label>Image</mat-label>\n\n        <textarea matInput formControlName=\"imgUrl\"></textarea>\n\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9icmFuZC1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJyYW5kc1xcY29tcG9uZW50c1xcYnJhbmQtZm9ybVxcYnJhbmQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9icmFuZC1mb3JtL2JyYW5kLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BrandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandFormComponent", function() { return BrandFormComponent; });
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

var BrandFormComponent = /** @class */ (function (_super) {
    __extends(BrandFormComponent, _super);
    function BrandFormComponent(translateService) {
        return _super.call(this, translateService) || this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    BrandFormComponent.prototype.ngOnInit = function () {
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
    BrandFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            imgUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.imgUrl, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    BrandFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    BrandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-form',
            template: __webpack_require__(/*! ./brand-form.component.html */ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.html"),
            styles: [__webpack_require__(/*! ./brand-form.component.scss */ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], BrandFormComponent);
    return BrandFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Brands Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Collection</mat-label>\n    <mat-select placeholder=\"Collection\" formControlName=\"collection\">\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n          {{collection.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A BRAND</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"brands\" matSort [matSortActive]=\"brandsService.previousSortColumn\"\n    [matSortDirection]=\"brandsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Name\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Description\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"imgUrl\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Image\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.imgUrl }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>  \n      </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n            <mat-icon>edit</mat-icon>\n          </button>\n          <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n            <mat-icon>delete</mat-icon>\n          </button>        \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9icmFuZHMtdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtYnJhbmRzXFxjb21wb25lbnRzXFxicmFuZHMtdGFibGVcXGJyYW5kcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWJyYW5kcy9jb21wb25lbnRzL2JyYW5kcy10YWJsZS9icmFuZHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BrandsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsTableComponent", function() { return BrandsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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

//

var errorKey = 'Error';
var BrandsTableComponent = /** @class */ (function () {
    function BrandsTableComponent(activatedRoute, brandsService, errorHandlingService) {
        this.activatedRoute = activatedRoute;
        this.brandsService = brandsService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'name', 'description', 'imgUrl', 'actions'
        ];
        this.totalLength = 0;
        this.brands = [];
    }
    BrandsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.collections = this.activatedRoute.snapshot.data.collections;
        // Begin observing style list changes.
        this.brandsList = this.brandsService.brandsList.subscribe(function (brandsList) {
            _this.totalLength = brandsList.dataCount;
            _this.brands = brandsList.data;
            if (_this.brands.length === 0 && _this.totalLength > 0 && _this.brandsService.previousPageSize > 0) {
                _this.brandsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.brandsService.previousPageSize) - 1;
                _this.brandsService.reloadBrands().subscribe(function (response) {
                    _this.brandsService.brandsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    BrandsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    BrandsTableComponent.prototype.ngOnDestroy = function () {
        this.brandsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    BrandsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['collection'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    BrandsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.brandsService.getBrands(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.brandsService.brandsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    BrandsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    BrandsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    BrandsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BrandsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BrandsTableComponent.prototype, "sort", void 0);
    BrandsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brands-table',
            template: __webpack_require__(/*! ./brands-table.component.html */ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.html"),
            styles: [__webpack_require__(/*! ./brands-table.component.scss */ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_brands_service__WEBPACK_IMPORTED_MODULE_6__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], BrandsTableComponent);
    return BrandsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYnJhbmRzL2NvbXBvbmVudHMvZGVsZXRlLWJyYW5kL2RlbGV0ZS1icmFuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeleteBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBrandComponent", function() { return DeleteBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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




var titleKey = 'Title Delete Brand';
var deleteBtnKey = 'Delete Brand';
var messageKey = 'Delete Brand Message';
var errorKey = 'Error';
var deletedBrandMessageKey = 'Deleted Brand Message';
var DeleteBrandComponent = /** @class */ (function () {
    function DeleteBrandComponent(activatedRoute, dialog, brandsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.brandsService = brandsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteBrandComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteBrandComponent.prototype.ngOnInit = function () {
        this.brandId = this.activatedRoute.snapshot.data.brandId;
    };
    DeleteBrandComponent.prototype.getCollection = function () {
        var _this = this;
        this.brandsService.getBrand(this.brandId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteBrand();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteBrandComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteBrandComponent.prototype.confirmDeleteBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: this.data.name }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteBrand();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteBrandComponent.prototype.deleteBrand = function () {
        var _this = this;
        this.brandsService.deleteBrand(this.data.id).subscribe(function (response) {
            _this.brandsService.reloadBrands().subscribe(function (response) {
                _this.brandsService.brandsList.next(response);
                _this.toastr.success(deletedBrandMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteBrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-brand',
            template: __webpack_require__(/*! ./delete-brand.component.html */ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.html"),
            styles: [__webpack_require__(/*! ./delete-brand.component.scss */ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_brands_service__WEBPACK_IMPORTED_MODULE_7__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteBrandComponent);
    return DeleteBrandComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT BRAND</h1>\n\n<brand-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</brand-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9lZGl0LWJyYW5kL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJyYW5kc1xcY29tcG9uZW50c1xcZWRpdC1icmFuZFxcZWRpdC1icmFuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9lZGl0LWJyYW5kL2VkaXQtYnJhbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandComponent", function() { return EditBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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
var errorKey = 'Error';
var updatedBrandMessageKey = 'Updated';
var EditBrandComponent = /** @class */ (function () {
    function EditBrandComponent(activatedRoute, dialog, brandsService, errorHandlingService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.brandsService = brandsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard';
        this.saveMessageKey = 'Discard ';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditBrandComponent.prototype.ngOnInit = function () {
        this.brandId = this.activatedRoute.snapshot.data.styleId;
    };
    EditBrandComponent.prototype.ngAfterViewInit = function () {
        this.getBrand();
    };
    EditBrandComponent.prototype.getBrand = function () {
        var _this = this;
        this.brandsService.getBrand(this.brandId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditBrandComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateBrand(data);
    };
    EditBrandComponent.prototype.cancel = function () {
        this.close();
    };
    EditBrandComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditBrandComponent.prototype.updateBrand = function (data) {
        var _this = this;
        this.brandsService.putBrand(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedBrandMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditBrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-brand',
            template: __webpack_require__(/*! ./edit-brand.component.html */ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.html"),
            styles: [__webpack_require__(/*! ./edit-brand.component.scss */ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_brands_service__WEBPACK_IMPORTED_MODULE_8__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EditBrandComponent);
    return EditBrandComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>BRAND CREATOR</h1>\n<brand-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</brand-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9uZXctYnJhbmQvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtYnJhbmRzXFxjb21wb25lbnRzXFxuZXctYnJhbmRcXG5ldy1icmFuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1icmFuZHMvY29tcG9uZW50cy9uZXctYnJhbmQvbmV3LWJyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBrandComponent", function() { return NewBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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





var errorKey = 'Error';
var savedStyleMessageKey = 'Saved Style Message';
var NewBrandComponent = /** @class */ (function () {
    function NewBrandComponent(activatedRoute, brandsService, errorHandlingService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.brandsService = brandsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: "",
            description: ""
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewBrandComponent.prototype.submit = function (data) {
        this.createUser(data);
    };
    NewBrandComponent.prototype.cancel = function () {
        this.close();
    };
    NewBrandComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewBrandComponent.prototype.createUser = function (data) {
        var _this = this;
        this.brandsService.postBrand(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            //this.close.emit();TODO
            _this.close();
            _this.toastr.success(savedStyleMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewBrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-brand',
            template: __webpack_require__(/*! ./new-brand.component.html */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.html"),
            styles: [__webpack_require__(/*! ./new-brand.component.scss */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_brands_service__WEBPACK_IMPORTED_MODULE_8__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewBrandComponent);
    return NewBrandComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/ms-brands-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/ms-brands-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MsBrandsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBrandsRoutingModule", function() { return MsBrandsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_brands_table_brands_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/brands-table/brands-table.component */ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.ts");
/* harmony import */ var _components_delete_brand_delete_brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-brand/delete-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.ts");
/* harmony import */ var _components_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-brand/edit-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.ts");
/* harmony import */ var _components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//




//





var routes = [
    {
        path: '',
        component: _components_brands_table_brands_table_component__WEBPACK_IMPORTED_MODULE_2__["BrandsTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_5__["NewBrandComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["EditBrandComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_brand_delete_brand_component__WEBPACK_IMPORTED_MODULE_3__["DeleteBrandComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brandId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsBrandsRoutingModule = /** @class */ (function () {
    function MsBrandsRoutingModule() {
    }
    MsBrandsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsBrandsRoutingModule);
    return MsBrandsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts ***!
  \**********************************************************************/
/*! exports provided: MsBrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBrandsModule", function() { return MsBrandsModule; });
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
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_brands_table_brands_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/brands-table/brands-table.component */ "./src/app/ms-back-office/modules/ms-brands/components/brands-table/brands-table.component.ts");
/* harmony import */ var _ms_brands_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ms-brands-routing.module */ "./src/app/ms-back-office/modules/ms-brands/ms-brands-routing.module.ts");
/* harmony import */ var _components_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/brand-form/brand-form.component */ "./src/app/ms-back-office/modules/ms-brands/components/brand-form/brand-form.component.ts");
/* harmony import */ var _components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _components_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-brand/edit-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/edit-brand/edit-brand.component.ts");
/* harmony import */ var _components_delete_brand_delete_brand_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-brand/delete-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/delete-brand/delete-brand.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//







var MsBrandsModule = /** @class */ (function () {
    function MsBrandsModule() {
    }
    MsBrandsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_brands_routing_module__WEBPACK_IMPORTED_MODULE_16__["MsBrandsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"]
            ],
            declarations: [
                _components_brands_table_brands_table_component__WEBPACK_IMPORTED_MODULE_15__["BrandsTableComponent"],
                _components_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_17__["BrandFormComponent"],
                _components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_18__["NewBrandComponent"],
                _components_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_19__["EditBrandComponent"],
                _components_delete_brand_delete_brand_component__WEBPACK_IMPORTED_MODULE_20__["DeleteBrandComponent"]
            ],
            exports: [
                _components_brands_table_brands_table_component__WEBPACK_IMPORTED_MODULE_15__["BrandsTableComponent"],
                _components_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_17__["BrandFormComponent"],
                _components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_18__["NewBrandComponent"],
                _components_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_19__["EditBrandComponent"],
                _components_delete_brand_delete_brand_component__WEBPACK_IMPORTED_MODULE_20__["DeleteBrandComponent"]
            ]
        })
    ], MsBrandsModule);
    return MsBrandsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ms-brands-ms-brands-module.js.map