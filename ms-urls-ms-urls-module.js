(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-urls-ms-urls-module"],{

/***/ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts ***!
  \*************************************************************************************/
/*! exports provided: BrandsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsResolveService", function() { return BrandsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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


//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var BrandsResolveService = /** @class */ (function () {
    function BrandsResolveService(brandsService, translate, errorHandlingService) {
        this.brandsService = brandsService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    BrandsResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.brandsService.getAllBrands().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    BrandsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], BrandsResolveService);
    return BrandsResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ASCENDING, BrandsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsService", function() { return BrandsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
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

var ASCENDING = 'asc';
var BrandsService = /** @class */ (function () {
    function BrandsService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'createdAt';
        this.previousSortDirection = 'desc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.brandsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.brands.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    BrandsService.prototype.getBrands = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    //
    // Call this function to repeat the previous query, after deleting
    // a brand for example.
    //
    BrandsService.prototype.reloadBrands = function () {
        return this.getBrands(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    BrandsService.prototype.postBrand = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    BrandsService.prototype.getBrand = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    BrandsService.prototype.postBrandLinkedShops = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/shops/', JSON.stringify(data));
    };
    BrandsService.prototype.getBrandLinkedShops = function (id) {
        return this.http.get(this.apiEndpoint + id + '/shops/');
    };
    BrandsService.prototype.putBrand = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    BrandsService.prototype.deleteBrand = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    BrandsService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.name && filter.name.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "name=" + filter.name;
        }
        /*if (filter.collection && filter.collection.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += `collection=${filter.collection}`;
        }*/
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
        return queryParams;
    };
    //
    // End functions that most services have.
    //
    //
    // Begin special functions specific to only this service.
    //
    BrandsService.prototype.getAllBrands = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    BrandsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], BrandsService);
    return BrandsService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdXJscy9jb21wb25lbnRzL2RlbGV0ZS11cmwvZGVsZXRlLXVybC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleteUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUrlComponent", function() { return DeleteUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/urls.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts");
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




var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Url?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteUrlComponent = /** @class */ (function () {
    function DeleteUrlComponent(activatedRoute, dialog, urlsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.urlsService = urlsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteUrlComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteUrlComponent.prototype.ngOnInit = function () {
        this.urlId = this.activatedRoute.snapshot.data.urlId;
    };
    DeleteUrlComponent.prototype.getCollection = function () {
        var _this = this;
        this.urlsService.getUrl(this.urlId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteUrl();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteUrlComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteUrlComponent.prototype.confirmDeleteUrl = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: this.data.id }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteUrl();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteUrlComponent.prototype.deleteUrl = function () {
        var _this = this;
        this.urlsService.deleteUrl(this.data.id).subscribe(function (response) {
            _this.urlsService.reloadUrls().subscribe(function (response) {
                _this.urlsService.urlsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-url',
            template: __webpack_require__(/*! ./delete-url.component.html */ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.html"),
            styles: [__webpack_require__(/*! ./delete-url.component.scss */ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_urls_service__WEBPACK_IMPORTED_MODULE_7__["UrlsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteUrlComponent);
    return DeleteUrlComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT URL</h1>\n<url-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</url-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy11cmxzL2NvbXBvbmVudHMvZWRpdC11cmwvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtdXJsc1xcY29tcG9uZW50c1xcZWRpdC11cmxcXGVkaXQtdXJsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdXJscy9jb21wb25lbnRzL2VkaXQtdXJsL2VkaXQtdXJsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUrlComponent", function() { return EditUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/urls.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts");
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





//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedMessageKey = 'Updated';
var EditUrlComponent = /** @class */ (function () {
    function EditUrlComponent(activatedRoute, dialog, dialogRef, urlsService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.urlsService = urlsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogData = dialogData;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditUrlComponent.prototype.ngOnInit = function () {
        this.urlId = this.dialogData.id;
    };
    EditUrlComponent.prototype.ngAfterViewInit = function () {
        this.getUrl();
    };
    EditUrlComponent.prototype.getUrl = function () {
        var _this = this;
        this.urlsService.getUrl(this.urlId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditUrlComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateStyle(data);
    };
    EditUrlComponent.prototype.cancel = function () {
        this.close();
    };
    EditUrlComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditUrlComponent.prototype.updateStyle = function (data) {
        var _this = this;
        this.urlsService.putUrl(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-url',
            template: __webpack_require__(/*! ./edit-url.component.html */ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.html"),
            styles: [__webpack_require__(/*! ./edit-url.component.scss */ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_urls_service__WEBPACK_IMPORTED_MODULE_8__["UrlsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], Object])
    ], EditUrlComponent);
    return EditUrlComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD URL</h1>\n<url-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</url-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy11cmxzL2NvbXBvbmVudHMvbmV3LXVybC9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy11cmxzXFxjb21wb25lbnRzXFxuZXctdXJsXFxuZXctdXJsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdXJscy9jb21wb25lbnRzL25ldy11cmwvbmV3LXVybC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1heC13aWR0aC02MC1wY3R7XHJcbiAgICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgdGQubWF0LWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUrlComponent", function() { return NewUrlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/urls */ "./src/app/ms-back-office/modules/ms-urls/models/urls.ts");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/urls.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts");
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
var savedMessageKey = 'Saved';
var NewUrlComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewUrlComponent(dialogRef, activatedRoute, UrlsService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.UrlsService = UrlsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogData = dialogData;
        this.data = {
            name: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewUrlComponent.prototype.submit = function (data) {
        this.createUser(data);
    };
    NewUrlComponent.prototype.cancel = function () {
        this.close();
    };
    NewUrlComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewUrlComponent.prototype.createUser = function (data) {
        var _this = this;
        this.UrlsService.postUrl(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(savedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-url',
            template: __webpack_require__(/*! ./new-url.component.html */ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.html"),
            styles: [__webpack_require__(/*! ./new-url.component.scss */ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_urls_service__WEBPACK_IMPORTED_MODULE_9__["UrlsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _models_urls__WEBPACK_IMPORTED_MODULE_8__["Url"]])
    ], NewUrlComponent);
    return NewUrlComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div [fxFlex]=\"50\">\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>URL</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"url\" required>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>VANITY URL</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"vanityUrl\" required>\n\n          </mat-form-field>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy11cmxzL2NvbXBvbmVudHMvdXJsLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtdXJsc1xcY29tcG9uZW50c1xcdXJsLWZvcm1cXHVybC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXVybHMvY29tcG9uZW50cy91cmwtZm9ybS91cmwtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UrlFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFormComponent", function() { return UrlFormComponent; });
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

var UrlFormComponent = /** @class */ (function (_super) {
    __extends(UrlFormComponent, _super);
    function UrlFormComponent(translateService) {
        return _super.call(this, translateService) || this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    UrlFormComponent.prototype.ngOnInit = function () {
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
    UrlFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            vanityUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.vanityUrl, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    UrlFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    UrlFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'url-form',
            template: __webpack_require__(/*! ./url-form.component.html */ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.html"),
            styles: [__webpack_require__(/*! ./url-form.component.scss */ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], UrlFormComponent);
    return UrlFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Urls Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"url\" placeholder=\"URL\">\n  </mat-form-field>\n  \n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addUrlModalBrand()\">ADD URL</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\"\n        mat-table [dataSource]=\"urls\"\n        matSort [matSortActive]=\"urlsService.previousSortColumn\" [matSortDirection]=\"urlsService.previousSortDirection\"\n        matSortDisableClear (matSortChange)=\"onSort()\">\n\n        <ng-container matColumnDef=\"URL\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n              URL\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"VANITY URL\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n              VANITY URL\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\n        </ng-container>        \n\n        <ng-container matColumnDef=\"ACTIONS\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>  \n          </th>\n          <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\"> \n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editUrlModalBrand(element.id)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                <mat-icon>delete</mat-icon>\n              </button>        \n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n        </tr>\n\n    </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator\n      [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons (page)=\"onPage()\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy11cmxzL2NvbXBvbmVudHMvdXJscy10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy11cmxzXFxjb21wb25lbnRzXFx1cmxzLXRhYmxlXFx1cmxzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7O0VBRUksV0FBVSxFQUNiOztBQUVEO0VBQ0kscUJBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdXJscy9jb21wb25lbnRzL3VybHMtdGFibGUvdXJscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UrlsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsTableComponent", function() { return UrlsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_urls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/urls.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts");
/* harmony import */ var _edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-url/edit-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.ts");
/* harmony import */ var _new_url_new_url_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-url/new-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.ts");
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
var UrlsTableComponent = /** @class */ (function () {
    function UrlsTableComponent(dialog, urlsService, errorHandlingService) {
        this.dialog = dialog;
        this.urlsService = urlsService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'URL',
            'VANITY URL',
            'ACTIONS'
        ];
        this.totalLength = 0;
        this.urls = [];
    }
    UrlsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        // Begin observing style list changes.
        this.urlsList = this.urlsService.urlsList.subscribe(function (urlsList) {
            _this.totalLength = urlsList.dataCount;
            _this.urls = urlsList.data;
            if (_this.urls.length === 0 && _this.totalLength > 0 && _this.urlsService.previousPageSize > 0) {
                _this.urlsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.urlsService.previousPageSize) - 1;
                _this.urlsService.reloadUrls().subscribe(function (response) {
                    _this.urlsService.urlsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    UrlsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    UrlsTableComponent.prototype.ngOnDestroy = function () {
        this.urlsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    UrlsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['url'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    UrlsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.urlsService.getUrls(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.urlsService.urlsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    UrlsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    UrlsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    UrlsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    UrlsTableComponent.prototype.addUrlModalBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_7__["NewUrlComponent"], {
            height: '50%',
            width: '50%',
            data: { dialogData: this.urls }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    UrlsTableComponent.prototype.editUrlModalBrand = function (id) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_6__["EditUrlComponent"], {
            height: '50%',
            width: '50%',
            data: { id: id }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UrlsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UrlsTableComponent.prototype, "sort", void 0);
    UrlsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'urls-table',
            template: __webpack_require__(/*! ./urls-table.component.html */ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.html"),
            styles: [__webpack_require__(/*! ./urls-table.component.scss */ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_urls_service__WEBPACK_IMPORTED_MODULE_5__["UrlsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], UrlsTableComponent);
    return UrlsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/models/urls.ts":
/*!***************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/models/urls.ts ***!
  \***************************************************************/
/*! exports provided: Url, UrlsListResponse, UrlsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsListResponse", function() { return UrlsListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsResponse", function() { return UrlsResponse; });
var Url = /** @class */ (function () {
    function Url() {
    }
    return Url;
}());

var UrlsListResponse = /** @class */ (function () {
    function UrlsListResponse() {
    }
    return UrlsListResponse;
}());

var UrlsResponse = /** @class */ (function () {
    function UrlsResponse() {
    }
    return UrlsResponse;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/ms-urls-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/ms-urls-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MsUrlsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsUrlsRoutingModule", function() { return MsUrlsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_urls_table_urls_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/urls-table/urls-table.component */ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.ts");
/* harmony import */ var _components_delete_url_delete_url_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-url/delete-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.ts");
/* harmony import */ var _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-url/edit-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.ts");
/* harmony import */ var _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-url/new-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-urls/services/urls-resolve.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
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
        component: _components_urls_table_urls_table_component__WEBPACK_IMPORTED_MODULE_2__["UrlsTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_5__["NewUrlComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UrlsResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_4__["EditUrlComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            urlId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_url_delete_url_component__WEBPACK_IMPORTED_MODULE_3__["DeleteUrlComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            urlId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsUrlsRoutingModule = /** @class */ (function () {
    function MsUrlsRoutingModule() {
    }
    MsUrlsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsUrlsRoutingModule);
    return MsUrlsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/ms-urls.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/ms-urls.module.ts ***!
  \******************************************************************/
/*! exports provided: MsUrlsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsUrlsModule", function() { return MsUrlsModule; });
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
/* harmony import */ var _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/url-form/url-form.component */ "./src/app/ms-back-office/modules/ms-urls/components/url-form/url-form.component.ts");
/* harmony import */ var _components_urls_table_urls_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/urls-table/urls-table.component */ "./src/app/ms-back-office/modules/ms-urls/components/urls-table/urls-table.component.ts");
/* harmony import */ var _components_delete_url_delete_url_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/delete-url/delete-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/delete-url/delete-url.component.ts");
/* harmony import */ var _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-url/edit-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/edit-url/edit-url.component.ts");
/* harmony import */ var _ms_urls_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ms-urls-routing.module */ "./src/app/ms-back-office/modules/ms-urls/ms-urls-routing.module.ts");
/* harmony import */ var _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/new-url/new-url.component */ "./src/app/ms-back-office/modules/ms-urls/components/new-url/new-url.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//

//






var MsUrlsModule = /** @class */ (function () {
    function MsUrlsModule() {
    }
    MsUrlsModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
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
                _ms_urls_routing_module__WEBPACK_IMPORTED_MODULE_19__["MsUrlsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"]
            ],
            declarations: [
                _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_15__["UrlFormComponent"],
                _components_urls_table_urls_table_component__WEBPACK_IMPORTED_MODULE_16__["UrlsTableComponent"],
                _components_delete_url_delete_url_component__WEBPACK_IMPORTED_MODULE_17__["DeleteUrlComponent"],
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_18__["EditUrlComponent"],
                _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_20__["NewUrlComponent"]
            ],
            exports: [
                _components_url_form_url_form_component__WEBPACK_IMPORTED_MODULE_15__["UrlFormComponent"],
                _components_urls_table_urls_table_component__WEBPACK_IMPORTED_MODULE_16__["UrlsTableComponent"],
                _components_delete_url_delete_url_component__WEBPACK_IMPORTED_MODULE_17__["DeleteUrlComponent"],
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_18__["EditUrlComponent"],
                _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_20__["NewUrlComponent"]
            ],
            entryComponents: [
                _components_new_url_new_url_component__WEBPACK_IMPORTED_MODULE_20__["NewUrlComponent"],
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_18__["EditUrlComponent"],
            ]
        })
    ], MsUrlsModule);
    return MsUrlsModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts ***!
  \*********************************************************************************/
/*! exports provided: UrlsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsResolveService", function() { return UrlsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _urls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urls.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts");
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


//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var UrlsResolveService = /** @class */ (function () {
    function UrlsResolveService(urlsService, translate, errorHandlingService) {
        this.urlsService = urlsService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    UrlsResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.urlsService.getAllUrls().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    UrlsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_urls_service__WEBPACK_IMPORTED_MODULE_5__["UrlsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], UrlsResolveService);
    return UrlsResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-urls/services/urls.service.ts ***!
  \*************************************************************************/
/*! exports provided: ASCENDING, UrlsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsService", function() { return UrlsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling-http.service */ "./src/app/error-handling/services/error-handling-http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
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

var ASCENDING = 'asc';
var UrlsService = /** @class */ (function () {
    function UrlsService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'url';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.urlsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.urls.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    UrlsService.prototype.getUrls = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    //
    // Call this function to repeat the previous query, after deleting
    // a Url for example.
    //
    UrlsService.prototype.reloadUrls = function () {
        return this.getUrls(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    UrlsService.prototype.postUrl = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    UrlsService.prototype.getUrl = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    UrlsService.prototype.putUrl = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    UrlsService.prototype.deleteUrl = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    UrlsService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.url && filter.url.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "url=" + filter.url;
        }
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
        return queryParams;
    };
    //
    // End functions that most services have.
    //
    //
    // Begin special functions specific to only this service.
    //
    UrlsService.prototype.getAllUrls = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    UrlsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], UrlsService);
    return UrlsService;
}());



/***/ }),

/***/ "./src/app/routing/services/id-resolve.service.ts":
/*!********************************************************!*\
  !*** ./src/app/routing/services/id-resolve.service.ts ***!
  \********************************************************/
/*! exports provided: IdResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdResolveService", function() { return IdResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IdResolveService = /** @class */ (function () {
    function IdResolveService() {
    }
    IdResolveService.prototype.resolve = function (route) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(route.paramMap.get('id'));
    };
    IdResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], IdResolveService);
    return IdResolveService;
}());



/***/ })

}]);
//# sourceMappingURL=ms-urls-ms-urls-module.js.map