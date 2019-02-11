(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-layout-ms-layout-module"],{

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

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0LWhlYWRlci9jb21wb25lbnRzL2RlbGV0ZS10YXNrL2RlbGV0ZS10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DeleteTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTaskComponent", function() { return DeleteTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts");
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
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteTaskComponent = /** @class */ (function () {
    function DeleteTaskComponent(activatedRoute, dialog, tasksService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.tasksService = tasksService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteTaskComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteTaskComponent.prototype.ngOnInit = function () {
        this.taskId = this.activatedRoute.snapshot.data.TaskId;
    };
    DeleteTaskComponent.prototype.getCollection = function () {
        var _this = this;
        this.tasksService.getTask(this.taskId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteTask();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteTaskComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteTaskComponent.prototype.confirmDeleteTask = function () {
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
                _this.deleteTask();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteTaskComponent.prototype.deleteTask = function () {
        var _this = this;
        this.tasksService.deleteTask(this.data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-task',
            template: __webpack_require__(/*! ./delete-task.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.html"),
            styles: [__webpack_require__(/*! ./delete-task.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteTaskComponent);
    return DeleteTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT TASK</h1>\n<task-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</task-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvZWRpdC10YXNrL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWxheW91dC1oZWFkZXJcXGNvbXBvbmVudHNcXGVkaXQtdGFza1xcZWRpdC10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0LWhlYWRlci9jb21wb25lbnRzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts");
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
var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(activatedRoute, dialog, dialogRef, tasksService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.tasksService = tasksService;
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
    EditTaskComponent.prototype.ngOnInit = function () {
        this.taskId = this.dialogData.id;
    };
    EditTaskComponent.prototype.ngAfterViewInit = function () {
        this.getTask();
    };
    EditTaskComponent.prototype.getTask = function () {
        var _this = this;
        this.tasksService.getTask(this.taskId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditTaskComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateStyle(data);
    };
    EditTaskComponent.prototype.cancel = function () {
        this.close();
    };
    EditTaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditTaskComponent.prototype.updateStyle = function (data) {
        var _this = this;
        this.tasksService.putTask(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], Object])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n        fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\">\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('brand')\" class=\"margin-top-10px\" matTooltip=\"{{ 'BRAND' | translate }}\" (click)=\"addFilter('brand')\">BRAND</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" multiple>\n\n              <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"updateFilterValue('brand', brand.name)\">\n\n                {{brand.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('categories')\" class=\"margin-top-10px\" matTooltip=\"{{ 'CATEGORY' | translate }}\" (click)=\"addFilter('category')\">CATEGORY</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\">\n\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\" (click)=\"updateFilterValue('category', category.name)\">\n\n                {{category.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('collection')\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLLECTION' | translate }}\" (click)=\"addFilter('collection')\">COLLECTION</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collection\">\n\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"updateFilterValue('collection', collection.name)\">\n\n                {{collection.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('color')\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLOR' | translate }}\" (click)=\"addFilter('color')\">COLOR</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\">\n\n              <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\" (click)=\"updateFilterValue('color', color.name)\">\n\n                {{color.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('gender')\" class=\"margin-top-10px\" matTooltip=\"{{ 'GENDER' | translate }}\" (click)=\"addFilter('gender')\">GENDER</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\n\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\" (click)=\"updateFilterValue('gender', gender.name)\">\n\n                {{gender.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'PRICE' | translate }}\" (click)=\"addFilter('maxPrice')\">PRICE</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"maxPrice\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\"  (click)=\"updateFilterValue('maxPrice', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('shop')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHOP' | translate }}\" (click)=\"addFilter('shop')\">SHOP</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"shop\">\n\n              <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\" (click)=\"updateFilterValue('shop', shop.name)\">\n\n                {{shop.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHIPPING' | translate }}\" (click)=\"addFilter('shipping')\">SHIPPING</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"shipping\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('shipping', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SKU' | translate }}\" (click)=\"addFilter('sku')\">SKU</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"sku\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('sku', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'STATUS' | translate }}\" (click)=\"addFilter('status')\">STATUS</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"status\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('status', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('style')\" class=\"margin-top-10px\" matTooltip=\"{{ 'STYLE' | translate }}\" (click)=\"addFilter('style')\">STYLE</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"style\">\n\n              <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"updateFilterValue('style', style.name)\">\n\n                {{style.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n\n{{filters | json}}\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 100% !important;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvZmlsdGVyLWhlYWRlci1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWxheW91dC1oZWFkZXJcXGNvbXBvbmVudHNcXGZpbHRlci1oZWFkZXItZm9ybVxcZmlsdGVyLWhlYWRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4Qix1QkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC1oZWFkZXIvY29tcG9uZW50cy9maWx0ZXItaGVhZGVyLWZvcm0vZmlsdGVyLWhlYWRlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FilterHeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterHeaderFormComponent", function() { return FilterHeaderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ms-releases/models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ms-releases/models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _models_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/filters */ "./src/app/ms-back-office/modules/ms-layout-header/models/filters.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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

var FilterHeaderFormComponent = /** @class */ (function (_super) {
    __extends(FilterHeaderFormComponent, _super);
    function FilterHeaderFormComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.genders = _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__["GENDERS"];
        _this.colors = _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__["COLORS"];
        _this.filtersArray = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    FilterHeaderFormComponent.prototype.ngOnInit = function () {
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
    FilterHeaderFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('style'), disabled: this.getFilterActive('style') }),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('sku'), disabled: this.getFilterActive('sku') }),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('brand'), disabled: this.getFilterActive('brand') }),
            collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('collection'), disabled: this.getFilterActive('collection') }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('category'), disabled: this.getFilterActive('category') }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('gender'), disabled: this.getFilterActive('gender') }),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('color'), disabled: this.getFilterActive('color') }),
            shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('shop'), disabled: this.getFilterActive('shop') }),
            shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('shipping'), disabled: this.getFilterActive('shipping') }),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('status'), disabled: this.getFilterActive('status') }),
            maxPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('maxPrice'), disabled: this.getFilterActive('maxPrice') }),
            minPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('minPrice'), disabled: this.getFilterActive('minPrice') }),
        });
    };
    FilterHeaderFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.filters);
        }
        else {
            this.triggerValidation();
        }
    };
    FilterHeaderFormComponent.prototype.addFilter = function (filter) {
        if (!this.filters) {
            this.formGroup.get(filter).enable();
            return;
        }
        if (this.filters.find(function (item) { return item.filter === filter; })) {
            this.filters = this.filters.filter(function (item) {
                return item.filter !== filter;
            });
            this.formGroup.get(filter).setValue('');
            this.formGroup.get(filter).disable();
        }
        else {
            this.formGroup.get(filter).enable();
        }
    };
    FilterHeaderFormComponent.prototype.updateFilterValue = function (filter, name) {
        if (!this.filters) {
            this.filters = [];
        }
        if (!this.filters.find(function (item) { return item.filter === filter; })) {
            var filterItem = new _models_filters__WEBPACK_IMPORTED_MODULE_5__["FilterItem"]();
            filterItem = {
                filter: filter,
                name: name,
                value: this.formGroup.get(filter).value,
            };
            this.filters = this.filters.concat([filterItem]);
        }
        else {
            try {
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).value = this.formGroup.get(filter).value;
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).name = name;
            }
            catch (err) {
            }
        }
    };
    FilterHeaderFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return this.filters.find(function (item) { return item.filter === filter; }).value;
            }
            ;
        }
        return '';
    };
    FilterHeaderFormComponent.prototype.getFilterActive = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterHeaderFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "styles", void 0);
    FilterHeaderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-header-formm',
            template: __webpack_require__(/*! ./filter-header-form.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./filter-header-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FilterHeaderFormComponent);
    return FilterHeaderFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>FILTERS</h1>\n<filter-header-formm class=\"flex-grow-1\"\n    [data]=\"data\"    \n    [brands]=\"dialogData.brands\" \n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [shops]=\"dialogData.shops\"\n    [styles]=\"dialogData.styles\"\n    [filters]=\"dialogData.filters\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</filter-header-formm>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvbmV3LWZpbHRlci1oZWFkZXIvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0LWhlYWRlclxcY29tcG9uZW50c1xcbmV3LWZpbHRlci1oZWFkZXJcXG5ldy1maWx0ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0LWhlYWRlci9jb21wb25lbnRzL25ldy1maWx0ZXItaGVhZGVyL25ldy1maWx0ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: NewFilterHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFilterHeaderComponent", function() { return NewFilterHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/layout.service.ts");
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





//
var errorKey = 'Error';
var savedMessageKey = 'Saved';
var NewFilterHeaderComponent = /** @class */ (function () {
    function NewFilterHeaderComponent(dialogRef, activatedRoute, UrlsService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
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
        this.filtersArray = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewFilterHeaderComponent.prototype.submit = function (data) {
        this.filtersArray = data;
        this.dialogRef.close(this.filtersArray);
    };
    NewFilterHeaderComponent.prototype.cancel = function () {
        this.close();
    };
    NewFilterHeaderComponent.prototype.close = function () {
        this.dialogRef.close(this.dialogData.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NewFilterHeaderComponent.prototype, "filtersArray", void 0);
    NewFilterHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-filter-header',
            template: __webpack_require__(/*! ./new-filter-header.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.html"),
            styles: [__webpack_require__(/*! ./new-filter-header.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewFilterHeaderComponent);
    return NewFilterHeaderComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD COLUMN</h1>\n<task-form class=\"flex-grow-1\"\n    [data]=\"data\"\n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [shops]=\"dialogData.shops\"\n    [styles]=\"dialogData.styles\"\n    [filters]=\"data.filters\"\n    [pageId]=\"dialogData.pageId\"   \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</task-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvbmV3LXRhc2svRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0LWhlYWRlclxcY29tcG9uZW50c1xcbmV3LXRhc2tcXG5ldy10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0LWhlYWRlci9jb21wb25lbnRzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/layout */ "./src/app/ms-back-office/modules/ms-layout-header/models/layout.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/layout.service.ts");
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
/*import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
//
import { CanDeactivateMixin } from '../../../../../ui/helpers/component-can-deactivate';
import { ConfirmDialogComponent, } from '../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component';
import { Mixin } from '../../../../../ui/helpers/mixin-decorator';
import { ErrorHandlingService } from '../../../../../error-handling/services/error-handling.service';
import { HandledError } from '../../../../../error-handling/models/handled-error';
import { ToastrService } from '../../../../../error-handling/services/toastr.service';
import { Task } from '../../models/Tasks';
import { TasksService } from '../../services/tasks.service';
import { BaseRouteComponent } from '../../../../../routing/components/base-route-component';

const errorKey = 'Error';

const savedMessageKey = 'Saved';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
@Mixin([CanDeactivateMixin])
export class NewTaskComponent implements CanDeactivateMixin {

  data: any = {
    name: "",
  };


  tasks: Array<Task>;

  // Begin Mixin code of the CanDeactivate class
  unsavedChanges = false;

  cancelBtnKey = 'No';

  okBtnKey = 'Yes';

  saveTitleKey = 'Discard Title';

  saveMessageKey = 'Discard Message';

  modalRef: MatDialogRef<ConfirmDialogComponent>;

  canDeactivate: () => Observable<boolean> | boolean;

  dataChanged: () => void;

  // end

  validationErrors: ValidationErrors;

  //@Input() brands: Array<Brand>;TODO

  //@Output() close = new EventEmitter();TODO

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>,
    public activatedRoute: ActivatedRoute,
    public tasksService: TasksService,
    private errorHandlingService: ErrorHandlingService,
    public router: Router,
    private translate: TranslateService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: Task
  ) {
  }

  submit(data: Task) {
    this.createUser(data);
  }

  cancel() {
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  createUser(data: Task) {
    this.tasksService.postTask(data).subscribe(response => {
      this.unsavedChanges = false;
      this.close();
      this.toastr.success(savedMessageKey);
    },
      (error: HandledError) => {
        this.errorHandlingService.handleUiError(errorKey, error, 'task');
        this.validationErrors = error.formErrors;
      });
  }
}*/


//



//








//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedMessageKey = 'Updated';
var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(activatedRoute, dialog, imagesService, layoutService, errorHandlingService, router, snackBar, translate, toastr, dialogRef, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.imagesService = imagesService;
        this.layoutService = layoutService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.data = new _models_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutHeader"]();
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.pageId = this.dialogData.pageId;
        this.data = {
            'columns': {
                'url': 'string',
                'filter': [],
                'filters': [],
            }
        };
    };
    NewTaskComponent.prototype.ngAfterViewInit = function () {
        //this.getUrl();
    };
    NewTaskComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.pageId, 'header', filters).subscribe(function (response) {
            //this.data = response.data;      
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    NewTaskComponent.prototype.submit = function (data) {
        //console.log(JSON.stringify(data));
        data.columns.filter = this.getFilterArray(data.columns.filters, data.filter);
        delete data.id;
        data.columns = [data.columns];
        if (data.columns.filter) {
            this.updateHeader(data);
        }
    };
    NewTaskComponent.prototype.cancel = function () {
        this.close();
    };
    NewTaskComponent.prototype.close = function () {
    };
    NewTaskComponent.prototype.updateSlider = function (data) {
        var _this = this;
        this.layoutService.putUrl(this.pageId, 'header', data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewTaskComponent.prototype.editCase = function (headerData) {
        var _this = this;
        var mainImageFlag = false;
        if (headerData !== undefined && headerData !== null) {
            // Saving the images of the case before saving the case      
            headerData.images = [];
            var imagesObservables = new Array();
            var addedFaces = new Array();
            // Uploading the images to command and control server
            for (var position in headerData.faces) {
                var face = headerData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Status"].Uploading;
                    var subscription$ = this.imagesService.postImage(face.file);
                    imagesObservables.push(subscription$);
                    addedFaces.push(face);
                }
                else {
                    headerData.images = headerData.images.concat([face]);
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        var image = {
                            url: '',
                            display: 'small',
                        };
                        image.url = responses[item].data.url;
                        headerData.images = headerData.images.concat([image]);
                    }
                    _this.layoutService.putUrl(_this.pageId, 'header', headerData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
            else {
                this.layoutService.putUrl(this.pageId, 'header', headerData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.close();
                    _this.toastr.success(updatedMessageKey);
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
    };
    NewTaskComponent.prototype.updateHeader = function (headerData) {
        var _this = this;
        if (headerData.faces) {
            for (var position in headerData.faces) {
                var face = headerData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["State"].New) {
                    var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                        headerData.imgUrl = response.data.url;
                        _this.layoutService.putUrl(_this.pageId, 'header', headerData).subscribe(function (response) {
                            _this.unsavedChanges = false;
                            _this.close();
                            _this.toastr.success(updatedMessageKey);
                        }, function (error) {
                            _this.errorHandlingService.handleUiError(errorKey, error);
                            _this.validationErrors = error.formErrors;
                        });
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }
                else {
                    this.layoutService.putUrl(this.pageId, 'header', headerData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }
            }
        }
        else {
            this.layoutService.putUrl(this.pageId, 'header', headerData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(updatedMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
                _this.validationErrors = error.formErrors;
            });
        }
    };
    NewTaskComponent.prototype.getFilterArray = function (filters, filter) {
        var queryParams = {};
        if (filters) {
            filters.forEach(function (item) {
                var filter = item.filter;
                queryParams[item.filter] = item.value;
            });
            console.log(JSON.stringify(queryParams));
        }
        return queryParams;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewTaskComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewTaskComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewTaskComponent.prototype, "styles", void 0);
    NewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--h1>Urls Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"task\" placeholder=\"TASK\">\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" (click)=\"addTaskModal()\">ADD URL</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"urls\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\r\n    [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"task\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TASK\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"responsable\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        RESPONSABLE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"priority\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        PRIORITY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div-->\r\n\r\n<div [fxFlex]=\"100\" class=\"justify-content-center\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n  <h2>Pending Task</h2>\r\n</div>\r\n<div class=\"flex-direction-row-reverse flex-shrink-0 display-flex margin-right-25px margin-bottom-10px margin-top-10px\">\r\n\r\n  <button class=\"border-none border-radius-5px\" mat-stroked-button (click)=\"addTaskModal()\">\r\n    <mat-icon>add</mat-icon>\r\n    Add a new task</button>\r\n\r\n</div>\r\n<div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n  <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n    <div class=\"padding-left-25px width-100-pc max-height-200px \" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n      <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"tasks\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\r\n        [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n        <ng-container matColumnDef=\"description\">\r\n          <th mat-header-cell *matHeaderCellDef>TASK</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"responsable\">\r\n          <th mat-header-cell *matHeaderCellDef>RESPONSABLE</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{ element.responsable }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"priority\">\r\n          <th mat-header-cell *matHeaderCellDef>PRIORITY</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.priority}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef>ACTION</th>\r\n          <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\r\n            <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"getTaskToDelete(element)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>   \r\n  </div>\r\n</div>\r\n<div class=\"margin-right-25px flex-shrink-0 display-flex\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.box-shadow-none {\n  box-shadow: none !important; }\n\n.mat-card-home {\n  border-radius: 5px;\n  color: white;\n  background-color: #6f6f6f; }\n\n.border-radius-5px {\n  border-radius: 5px !important; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\ntr.mat-header-row {\n  background-color: #f1f1f1; }\n\n.max-height-200px {\n  max-height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvcGVuZGluZy10YXNrcy10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXQtaGVhZGVyXFxjb21wb25lbnRzXFxwZW5kaW5nLXRhc2tzLXRhYmxlXFxwZW5kaW5nLXRhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFLckI7O0FBTkQ7SUFHUSxtQkFBa0I7SUFDbEIsa0JBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWiwwQkFBeUIsRUFFNUI7O0FBRUQ7RUFDSSw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC1oZWFkZXIvY29tcG9uZW50cy9wZW5kaW5nLXRhc2tzLXRhYmxlL3BlbmRpbmctdGFza3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWItMjAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJveC1zaGFkb3ctbm9uZXtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhvbWUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmNmY2ZjtcclxuXHJcbn1cclxuXHJcbi5ib3JkZXItcmFkaXVzLTVweCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgXHJcbn1cclxuXHJcbi5tYXgtaGVpZ2h0LTIwMHB4e1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PendingTasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTasksTableComponent", function() { return PendingTasksTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.ts");
/* harmony import */ var _models_priority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/priority */ "./src/app/ms-back-office/modules/ms-layout-header/models/priority.ts");
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




var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var PendingTasksTableComponent = /** @class */ (function () {
    function PendingTasksTableComponent(activatedRoute, dialog, errorHandlingService, tasksService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.tasksService = tasksService;
        this.toastr = toastr;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
        this.tasks = [];
        this.priorities = _models_priority__WEBPACK_IMPORTED_MODULE_11__["PRIORITY"];
    }
    PendingTasksTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.users = this.activatedRoute.snapshot.data.users;
        // Begin observing style list changes.
        this.tasksList = this.tasksService.tasksList.subscribe(function (TasksList) {
            _this.totalLength = TasksList.dataCount;
            _this.tasks = TasksList.data;
            if (_this.tasks.length === 0 && _this.totalLength > 0 && _this.tasksService.previousPageSize > 0) {
                _this.tasksService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.tasksService.previousPageSize) - 1;
                _this.tasksService.reloadTasks().subscribe(function (response) {
                    _this.tasksService.tasksList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    PendingTasksTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.ngOnDestroy = function () {
        this.tasksList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    PendingTasksTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    PendingTasksTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.tasksService.getTasks(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.tasksService.tasksList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    PendingTasksTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.addTaskModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskComponent"], {
            data: {
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    PendingTasksTableComponent.prototype.editTaskModal = function (id) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                id: id,
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    PendingTasksTableComponent.prototype.getUsers = function (id) {
        try {
            return this.users.find(function (user) {
                return user.id === id;
            }).firstName;
        }
        catch (err) {
            return;
        }
    };
    //delete
    PendingTasksTableComponent.prototype.getTaskToDelete = function (data) {
        var _this = this;
        this.tasksService.getTask(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteTask(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    PendingTasksTableComponent.prototype.confirmDeleteTask = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteTask(data);
            }
        });
    };
    PendingTasksTableComponent.prototype.deleteTask = function (data) {
        var _this = this;
        this.tasksService.deleteTask(data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PendingTasksTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PendingTasksTableComponent.prototype, "sort", void 0);
    PendingTasksTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pending-tasks-table',
            template: __webpack_require__(/*! ./pending-tasks-table.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.html"),
            styles: [__webpack_require__(/*! ./pending-tasks-table.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], PendingTasksTableComponent);
    return PendingTasksTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n            <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                <div [fxFlex]=\"100\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                        <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>URL</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"url\" #url>\n\n                            </mat-form-field>\n\n                            <div>\n\n                                <h3>Filters</h3>\n\n                            </div>\n\n                            <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n                                <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\" formArrayName=\"filtersForm\">\n\n                                    <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n                                        fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\" [formGroupName]=\"0\">\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('brand')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\">\n\n                                                    <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                                                        {{brand.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('category')\">\n\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Category\" formControlName=\"category\">\n\n                                                    <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\" (click)=\"updateFilterValue('category', category.name)\">\n\n                                                        {{category.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('collection')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Collection\" formControlName=\"collection\">\n\n                                                    <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"updateFilterValue('collection', collection.name)\">\n\n                                                        {{collection.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('color')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Color\" formControlName=\"color\">\n\n                                                    <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\" (click)=\"updateFilterValue('color', color.name)\">\n\n                                                        {{color.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('gender')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Gender\" formControlName=\"gender\">\n\n                                                    <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\" (click)=\"updateFilterValue('gender', gender.name)\">\n\n                                                        {{gender.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('maxPrice')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"maxPrice\" formControlName=\"maxPrice\">\n\n                                                    <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('maxPrice', filter.name)\">\n\n                                                        {{filter.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shop')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Shops\" formControlName=\"shop\">\n\n                                                    <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\" (click)=\"updateFilterValue('shop', shop.name)\">\n\n                                                        {{shop.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shipping')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Shipping\" formControlName=\"shipping\">\n\n                                                    <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('shipping', filter.name)\">\n\n                                                        {{filter.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('sku')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Sku\" formControlName=\"sku\">\n\n                                                    <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('sku', filter.name)\">\n\n                                                        {{filter.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('status')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Status\" formControlName=\"status\">\n\n                                                    <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('status', filter.name)\">\n\n                                                        {{filter.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                        <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('style')\">\n\n                                            <mat-form-field class=\"width-100pc\">\n\n                                                <mat-select disableOptionCentering placeholder=\"Style\" formControlName=\"style\">\n\n                                                    <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"updateFilterValue('style', style.name)\">\n\n                                                        {{style.name}}\n\n                                                    </mat-option>\n\n                                                </mat-select>\n\n                                            </mat-form-field>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <button mat-raised-button type=\"button\" color=\"primary\" class=\"max-width-480px\" (click)=\"addFilterModalBrand()\">{{ 'Add Filter' | translate }}</button>\n\n                        </div>\n\n                        <div [fxFlex]=\"60\" class=\"margin-right-25px\">\n\n                            <mat-radio-group>\n\n                                <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\n\n                                    <div class=\"display-flex margin-right-25px\">\n\n                                        <mat-radio-button value=\"Filter\" class=\"margin-top-10px\" matTooltip=\"{{ 'Top' | translate }}\">Top</mat-radio-button>\n\n                                    </div>\n\n                                    <div class=\"display-flex\">\n\n                                        <mat-radio-button value=\"Manual\" class=\"margin-top-10px\" matTooltip=\"{{ 'Bottom' | translate }}\">Bottom</mat-radio-button>\n\n                                    </div>\n\n                                </div>\n\n                            </mat-radio-group>\n\n                            <div [fxFlex]=\"90\" class=\"border width-480px\">\n\n                                <image-card class=\"padding-10px\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\n\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Acept' | translate }}</button>\n\n    </div>\n</form>\n{{data | json}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvdGFzay1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWxheW91dC1oZWFkZXJcXGNvbXBvbmVudHNcXHRhc2stZm9ybVxcdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC1oZWFkZXIvY29tcG9uZW50cy90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFormComponent", function() { return HeaderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-filter-header/new-filter-header.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/layout.service.ts");
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






var errorKey = 'Error';
var HeaderFormComponent = /** @class */ (function (_super) {
    __extends(HeaderFormComponent, _super);
    function HeaderFormComponent(dialog, eleRef, errorHandlingService, formBuilder, layoutService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.eleRef = eleRef;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.layoutService = layoutService;
        _this.translateService = translateService;
        _this.displayedColumns = [
            'URL',
            'VANITY URL',
            'ACTIONS'
        ];
        _this.filters = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    HeaderFormComponent.prototype.ngOnInit = function () {
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
    HeaderFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.data.faces);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            numberOfItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.numberOfItem),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url),
            filtersForm: this.formBuilder.array([
                this.formBuilder.group({
                    style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('style')),
                    sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('sku')),
                    brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('brand')),
                    collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('collection')),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('category')),
                    gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('gender')),
                    color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('color')),
                    shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shop')),
                    shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shipping')),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('status')),
                    maxPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('maxPrice')),
                    minPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('minPrice')),
                })
            ])
        });
    };
    HeaderFormComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.pageId, 'header', filters).subscribe(function (response) {
            _this.data = response.data;
            _this.data.faces = _this.data.images;
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        }, function (error) {
            _this.data.images = [];
            _this.data.faces = [];
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        } //this.errorHandlingService.handleUiError(errorKey, error)
        );
    };
    HeaderFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.filters = this.formGroup.get('filtersForm').value;
            this.data.faces = this.formGroup.get('faces').value;
            this.data.numberOfItem = this.formGroup.get('numberOfItem').value;
            this.data.url = this.formGroup.get('url').value;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    HeaderFormComponent.prototype.addFilterModalBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_6__["NewFilterHeaderComponent"], {
            height: '80%',
            data: {
                filters: this.filters,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            _this.filters = result;
            _this.data.filtersActive = result;
            _this.filtersArray = result;
            //this.getLayoutSliders(this.data.filters);
        });
    };
    HeaderFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return this.filters.find(function (item) { return item.filter === filter; }).value;
            }
            ;
        }
        return '';
    };
    HeaderFormComponent.prototype.getFilterActive = function (filter) {
        console.log(filter);
        if (this.filters) {
            if (this.filters.find(function (item) { return item === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderFormComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('url'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderFormComponent.prototype, "fileInput", void 0);
    HeaderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-form',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./task-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HeaderFormComponent);
    return HeaderFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Columns</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <!--mat-form-field>\n    <input matInput formControlName=\"description\" placeholder=\"TASK\">\n  </mat-form-field-->\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addTaskModal()\">ADD COLUMN</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"tasks\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\n    [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        TASK\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"responsable\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RESPONSABLE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.responsable }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"priority\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PRIORITY\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.priority }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"getTaskToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQtaGVhZGVyL2NvbXBvbmVudHMvdGFza3MtdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0LWhlYWRlclxcY29tcG9uZW50c1xcdGFza3MtdGFibGVcXHRhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7O0VBRUksV0FBVSxFQUNiOztBQUVEO0VBQ0kscUJBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0LWhlYWRlci9jb21wb25lbnRzL3Rhc2tzLXRhYmxlL3Rhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return TasksTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.ts");
/* harmony import */ var _models_priority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/priority */ "./src/app/ms-back-office/modules/ms-layout-header/models/priority.ts");
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




var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var TasksTableComponent = /** @class */ (function () {
    function TasksTableComponent(activatedRoute, dialog, errorHandlingService, tasksService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.tasksService = tasksService;
        this.toastr = toastr;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
        this.tasks = [];
        this.priorities = _models_priority__WEBPACK_IMPORTED_MODULE_11__["PRIORITY"];
    }
    TasksTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.users = this.activatedRoute.snapshot.data.users;
        // Begin observing style list changes.
        this.tasksList = this.tasksService.tasksList.subscribe(function (TasksList) {
            _this.totalLength = TasksList.dataCount;
            _this.tasks = TasksList.data;
            if (_this.tasks.length === 0 && _this.totalLength > 0 && _this.tasksService.previousPageSize > 0) {
                _this.tasksService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.tasksService.previousPageSize) - 1;
                _this.tasksService.reloadTasks().subscribe(function (response) {
                    _this.tasksService.tasksList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    TasksTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    TasksTableComponent.prototype.ngOnDestroy = function () {
        this.tasksList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    TasksTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    TasksTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.tasksService.getTasks(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.tasksService.tasksList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    TasksTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    TasksTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    TasksTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    TasksTableComponent.prototype.addTaskModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskComponent"], {
            height: '90%',
            width: '90%',
            data: {
                pageId: this.pageId,
                filters: this.filtersArray,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    TasksTableComponent.prototype.editTaskModal = function (id) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                filters: this.filtersArray,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    TasksTableComponent.prototype.getUsers = function (id) {
        try {
            return this.users.find(function (user) {
                return user.id === id;
            }).firstName;
        }
        catch (err) {
            return;
        }
    };
    //delete
    TasksTableComponent.prototype.getTaskToDelete = function (data) {
        var _this = this;
        this.tasksService.getTask(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteTask(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    TasksTableComponent.prototype.confirmDeleteTask = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteTask(data);
            }
        });
    };
    TasksTableComponent.prototype.deleteTask = function (data) {
        var _this = this;
        this.tasksService.deleteTask(data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TasksTableComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TasksTableComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TasksTableComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TasksTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TasksTableComponent.prototype, "sort", void 0);
    TasksTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tasks-table',
            template: __webpack_require__(/*! ./tasks-table.component.html */ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.html"),
            styles: [__webpack_require__(/*! ./tasks-table.component.scss */ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], TasksTableComponent);
    return TasksTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/models/filters.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/models/filters.ts ***!
  \***************************************************************************/
/*! exports provided: Filter, RELEASES, FilterItem, FilterResponce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASES", function() { return RELEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItem", function() { return FilterItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterResponce", function() { return FilterResponce; });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());

;
var RELEASES = [
    { id: 'collectionId', name: 'Collection' },
    { id: 'gender', name: 'Gender' },
    { id: 'sku', name: 'SKU' },
];
var FilterItem = /** @class */ (function () {
    function FilterItem() {
    }
    return FilterItem;
}());

var FilterResponce = /** @class */ (function () {
    function FilterResponce() {
    }
    return FilterResponce;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/models/layout.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/models/layout.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderColumn, LayoutHeader, LayoutHeaderResponce, LayoutSlider, LayoutHeading, UrlsListResponse, UrlsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderColumn", function() { return HeaderColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeader", function() { return LayoutHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeaderResponce", function() { return LayoutHeaderResponce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSlider", function() { return LayoutSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeading", function() { return LayoutHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsListResponse", function() { return UrlsListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsResponse", function() { return UrlsResponse; });
var HeaderColumn = /** @class */ (function () {
    function HeaderColumn() {
    }
    return HeaderColumn;
}());

var LayoutHeader = /** @class */ (function () {
    function LayoutHeader() {
    }
    return LayoutHeader;
}());

var LayoutHeaderResponce = /** @class */ (function () {
    function LayoutHeaderResponce() {
    }
    return LayoutHeaderResponce;
}());

var LayoutSlider = /** @class */ (function () {
    function LayoutSlider() {
    }
    return LayoutSlider;
}());

var LayoutHeading = /** @class */ (function () {
    function LayoutHeading() {
    }
    return LayoutHeading;
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

/***/ "./src/app/ms-back-office/modules/ms-layout-header/models/priority.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/models/priority.ts ***!
  \****************************************************************************/
/*! exports provided: Priority, PRIORITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY", function() { return PRIORITY; });
var Priority = /** @class */ (function () {
    function Priority() {
    }
    return Priority;
}());

;
var PRIORITY = [
    { value: 'Low', name: 'Low' },
    { value: 'Medium', name: 'Medium' },
    { value: 'High', name: 'High' },
    { value: 'Very High', name: 'Very High' },
    { value: 'Urgent', name: 'Urgent' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: MsLayoutHeaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsLayoutHeaderRoutingModule", function() { return MsLayoutHeaderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var MsLayoutHeaderRoutingModule = /** @class */ (function () {
    function MsLayoutHeaderRoutingModule() {
    }
    MsLayoutHeaderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsLayoutHeaderRoutingModule);
    return MsLayoutHeaderRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header.module.ts ***!
  \************************************************************************************/
/*! exports provided: MsLayoutHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsLayoutHeaderModule", function() { return MsLayoutHeaderModule; });
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
/* harmony import */ var _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-filter-header/new-filter-header.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-filter-header/new-filter-header.component.ts");
/* harmony import */ var _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/filter-header-form/filter-header-form.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/filter-header-form/filter-header-form.component.ts");
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/task-form/task-form.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/task-form/task-form.component.ts");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tasks-table/tasks-table.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/tasks-table/tasks-table.component.ts");
/* harmony import */ var _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-task/delete-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/delete-task/delete-task.component.ts");
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/edit-task/edit-task.component.ts");
/* harmony import */ var _ms_layout_header_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ms-layout-header-routing.module */ "./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header-routing.module.ts");
/* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/new-task/new-task.component.ts");
/* harmony import */ var _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pending-tasks-table/pending-tasks-table.component */ "./src/app/ms-back-office/modules/ms-layout-header/components/pending-tasks-table/pending-tasks-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//

//










var MsLayoutHeaderModule = /** @class */ (function () {
    function MsLayoutHeaderModule() {
    }
    MsLayoutHeaderModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
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
                _ms_layout_header_routing_module__WEBPACK_IMPORTED_MODULE_22__["MsLayoutHeaderRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_17__["ImageCardModule"]
            ],
            declarations: [
                _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_18__["HeaderFormComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_19__["TasksTableComponent"],
                _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_20__["DeleteTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_21__["EditTaskComponent"],
                _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_16__["FilterHeaderFormComponent"],
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_15__["NewFilterHeaderComponent"],
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_23__["NewTaskComponent"],
                _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_24__["PendingTasksTableComponent"]
            ],
            exports: [
                _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_18__["HeaderFormComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_19__["TasksTableComponent"],
                _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_20__["DeleteTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_21__["EditTaskComponent"],
                _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_16__["FilterHeaderFormComponent"],
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_15__["NewFilterHeaderComponent"],
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_23__["NewTaskComponent"],
                _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_24__["PendingTasksTableComponent"]
            ],
            entryComponents: [
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_15__["NewFilterHeaderComponent"],
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_23__["NewTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_21__["EditTaskComponent"],
            ]
        })
    ], MsLayoutHeaderModule);
    return MsLayoutHeaderModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/services/layout.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/services/layout.service.ts ***!
  \************************************************************************************/
/*! exports provided: ASCENDING, LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
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
var LayoutService = /** @class */ (function () {
    function LayoutService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'url';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.urlsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.layouts.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    LayoutService.prototype.getUrls = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    LayoutService.prototype.reloadUrls = function () {
        return this.getUrls(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    LayoutService.prototype.postUrl = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    LayoutService.prototype.getLayout = function (pageId, layoutPage) {
        return this.http.get(this.apiEndpoint + pageId + '/' + layoutPage);
    };
    LayoutService.prototype.getLayoutFilterSliders = function (pageId, layoutPage, filter) {
        var filters = this.formatFilters(filter);
        return this.http.get(this.apiEndpoint + pageId + '/' + layoutPage + filters);
    };
    LayoutService.prototype.putUrl = function (pageId, layoutPage, data) {
        return this.http.put(this.apiEndpoint + pageId + '/' + layoutPage + '/', JSON.stringify(data));
    };
    LayoutService.prototype.deleteUrl = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    LayoutService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    LayoutService.prototype.getAllUrls = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    LayoutService.prototype.formatFilters = function (filters) {
        var queryParams = '';
        if (filters) {
            filters.forEach(function (item) {
                queryParams += queryParams.length > 0 ? '&' : '?';
                queryParams += item.filter + '=' + item.value;
            });
        }
        return queryParams;
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout-header/services/tasks.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ASCENDING, TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
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
var TasksService = /** @class */ (function () {
    function TasksService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'description';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.tasksList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.tasks.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    TasksService.prototype.getTasks = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a Task for example.
    //
    TasksService.prototype.reloadTasks = function () {
        return this.getTasks(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    TasksService.prototype.postTask = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    TasksService.prototype.putTask = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    TasksService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    TasksService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.description && filter.description.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "description=" + filter.description;
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
    TasksService.prototype.getAllTasks = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    TasksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtbGF5b3V0L2NvbXBvbmVudHMvZGVsZXRlLWxheW91dC9kZWxldGUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DeleteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteLayoutComponent", function() { return DeleteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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
var DeleteLayoutComponent = /** @class */ (function () {
    function DeleteLayoutComponent(activatedRoute, dialog, urlsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.urlsService = urlsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteLayoutComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteLayoutComponent.prototype.ngOnInit = function () {
        this.urlId = this.activatedRoute.snapshot.data.urlId;
    };
    DeleteLayoutComponent.prototype.getCollection = function () {
        /*this.urlsService.getUrl('', this.urlId, '').subscribe(response => {
          this.data = response.data;
          this.confirmDeleteUrl();
        },
          (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error)
        )*/
    };
    DeleteLayoutComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteLayoutComponent.prototype.confirmDeleteUrl = function () {
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
    DeleteLayoutComponent.prototype.deleteUrl = function () {
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
    DeleteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-layout',
            template: __webpack_require__(/*! ./delete-layout.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.html"),
            styles: [__webpack_require__(/*! ./delete-layout.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteLayoutComponent);
    return DeleteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-form\n    [data]=\"data\"\n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [shops]=\"dialogData.shops\"\n    [styles]=\"dialogData.styles\"\n    [filters]=\"data.filtersActive\"\n    [pageId]=\"dialogData.pageId\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</header-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9lZGl0LWhlYWRlci9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXGVkaXQtaGVhZGVyXFxlZGl0LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2VkaXQtaGVhZGVyL2VkaXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHeaderComponent", function() { return EditHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/layout */ "./src/app/ms-back-office/modules/ms-layout/models/layout.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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








//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedMessageKey = 'Updated';
var EditHeaderComponent = /** @class */ (function () {
    function EditHeaderComponent(activatedRoute, dialog, imagesService, layoutService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.imagesService = imagesService;
        this.layoutService = layoutService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogData = dialogData;
        this.data = new _models_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutSlider"]();
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditHeaderComponent.prototype.ngOnInit = function () {
    };
    EditHeaderComponent.prototype.ngAfterViewInit = function () {
        //this.getUrl();
    };
    EditHeaderComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.dialogData.pageId, 'header', filters).subscribe(function (response) {
            //this.data = response.data;
            _this.data = {
                url: 'string',
                filters: [],
            };
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditHeaderComponent.prototype.submit = function (data) {
        //console.log(JSON.stringify(data));
        //data.filter = this.getFilterArray(data.filters, data.filter);
        this.data.filter = this.data.filters[0];
        delete data.id;
        this.editCase(data);
    };
    EditHeaderComponent.prototype.cancel = function () {
        this.close();
    };
    EditHeaderComponent.prototype.close = function () {
    };
    EditHeaderComponent.prototype.updateSlider = function (data) {
        var _this = this;
        this.layoutService.putUrl(this.dialogData.pageId, 'header', data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditHeaderComponent.prototype.editCase = function (releaseData) {
        var _this = this;
        var mainImageFlag = false;
        if (releaseData !== undefined && releaseData !== null) {
            // Saving the images of the case before saving the case      
            releaseData.images = [];
            var imagesObservables = new Array();
            var addedFaces = new Array();
            // Uploading the images to command and control server
            for (var position in releaseData.faces) {
                var face = releaseData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Status"].Uploading;
                    var subscription$ = this.imagesService.postImage(face.file);
                    imagesObservables.push(subscription$);
                    addedFaces.push(face);
                }
                else {
                    releaseData.images = releaseData.images.concat([face]);
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        var image = {
                            url: '',
                            display: 'small',
                        };
                        image.url = responses[item].data.url;
                        releaseData.images = releaseData.images.concat([image]);
                    }
                    _this.layoutService.putUrl(_this.dialogData.pageId, 'header', releaseData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
            else {
                this.layoutService.putUrl(this.dialogData.pageId, 'header', releaseData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.close();
                    _this.toastr.success(updatedMessageKey);
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
    };
    EditHeaderComponent.prototype.getFilterArray = function (filters, filter) {
        var queryParams = {};
        if (filters) {
            filters.forEach(function (item) {
                var filter = item.filter;
                queryParams[filter] = item.value;
            });
            console.log(JSON.stringify(queryParams));
        }
        return queryParams;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditHeaderComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditHeaderComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeaderComponent.prototype, "styles", void 0);
    EditHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-header',
            template: __webpack_require__(/*! ./edit-header.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.html"),
            styles: [__webpack_require__(/*! ./edit-header.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"], Object])
    ], EditHeaderComponent);
    return EditHeaderComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<heading-form\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [shops]=\"shops\"\n    [styles]=\"styles\"\n    [filters]=\"data.filters\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</heading-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9lZGl0LWhlYWRpbmcvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0XFxjb21wb25lbnRzXFxlZGl0LWhlYWRpbmdcXGVkaXQtaGVhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2VkaXQtaGVhZGluZy9lZGl0LWhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHeadingComponent", function() { return EditHeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/layout */ "./src/app/ms-back-office/modules/ms-layout/models/layout.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
/* harmony import */ var _heading_form_heading_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../heading-form/heading-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.ts");
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
var errorKey = 'Error';
var updatedMessageKey = 'Updated';
var EditHeadingComponent = /** @class */ (function () {
    function EditHeadingComponent(activatedRoute, dialog, imagesService, layoutService, errorHandlingService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.imagesService = imagesService;
        this.layoutService = layoutService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        this.data = new _models_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutHeading"]();
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditHeadingComponent.prototype.ngOnInit = function () {
        this.getUrl();
    };
    EditHeadingComponent.prototype.ngAfterViewInit = function () {
        //this.getUrl();
    };
    EditHeadingComponent.prototype.getUrl = function () {
        var _this = this;
        this.layoutService.getLayout(this.pageId, 'heading').subscribe(function (response) {
            _this.data = response.data;
            _this.headingFormComponent.createFormGroupData(response.data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditHeadingComponent.prototype.submit = function (data) {
        console.log(JSON.stringify(data));
        this.updateHeading(data);
    };
    EditHeadingComponent.prototype.cancel = function () {
        this.close();
    };
    EditHeadingComponent.prototype.close = function () {
    };
    EditHeadingComponent.prototype.updateHeading = function (data) {
        var _this = this;
        this.layoutService.putUrl(this.pageId, 'heading', data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditHeadingComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditHeadingComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditHeadingComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_heading_form_heading_form_component__WEBPACK_IMPORTED_MODULE_11__["HeadingFormComponent"]),
        __metadata("design:type", Object)
    ], EditHeadingComponent.prototype, "headingFormComponent", void 0);
    EditHeadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-heading',
            template: __webpack_require__(/*! ./edit-heading.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.html"),
            styles: [__webpack_require__(/*! ./edit-heading.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_10__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], EditHeadingComponent);
    return EditHeadingComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<slider-form\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [shops]=\"shops\"\n    [styles]=\"styles\"\n    [filters]=\"data.filtersActive\"\n    [pageId]=\"pageId\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</slider-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9lZGl0LXNsaWRlci9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXGVkaXQtc2xpZGVyXFxlZGl0LXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2VkaXQtc2xpZGVyL2VkaXQtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSliderComponent", function() { return EditSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/layout */ "./src/app/ms-back-office/modules/ms-layout/models/layout.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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
var updatedMessageKey = 'Updated';
var EditSliderComponent = /** @class */ (function () {
    function EditSliderComponent(activatedRoute, dialog, imagesService, layoutService, errorHandlingService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.imagesService = imagesService;
        this.layoutService = layoutService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        this.data = new _models_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutSlider"]();
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditSliderComponent.prototype.ngOnInit = function () {
    };
    EditSliderComponent.prototype.ngAfterViewInit = function () {
        //this.getUrl();
    };
    EditSliderComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.pageId, 'slider', filters).subscribe(function (response) {
            //this.data = response.data;
            _this.data = {
                url: 'string',
                filters: [],
            };
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditSliderComponent.prototype.submit = function (data) {
        //console.log(JSON.stringify(data));
        //data.filter = this.getFilterArray(data.filters, data.filter);
        this.data.filter = this.data.filters[0];
        delete data.id;
        this.editCase(data);
    };
    EditSliderComponent.prototype.cancel = function () {
        this.close();
    };
    EditSliderComponent.prototype.close = function () {
    };
    EditSliderComponent.prototype.updateSlider = function (data) {
        var _this = this;
        this.layoutService.putUrl(this.pageId, 'slider', data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditSliderComponent.prototype.editCase = function (releaseData) {
        var _this = this;
        var mainImageFlag = false;
        if (releaseData !== undefined && releaseData !== null) {
            // Saving the images of the case before saving the case      
            releaseData.images = [];
            var imagesObservables = new Array();
            var addedFaces = new Array();
            // Uploading the images to command and control server
            for (var position in releaseData.faces) {
                var face = releaseData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Status"].Uploading;
                    var subscription$ = this.imagesService.postImage(face.file);
                    imagesObservables.push(subscription$);
                    addedFaces.push(face);
                }
                else {
                    releaseData.images = releaseData.images.concat([face]);
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        var image = {
                            url: '',
                            display: 'small',
                        };
                        image.url = responses[item].data.url;
                        releaseData.images = releaseData.images.concat([image]);
                    }
                    _this.layoutService.putUrl(_this.pageId, 'slider', releaseData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
            else {
                this.layoutService.putUrl(this.pageId, 'slider', releaseData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.close();
                    _this.toastr.success(updatedMessageKey);
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
    };
    EditSliderComponent.prototype.getFilterArray = function (filters, filter) {
        var queryParams = {};
        if (filters) {
            filters.forEach(function (item) {
                var filter = item.filter;
                queryParams[filter] = item.value;
            });
            console.log(JSON.stringify(queryParams));
        }
        return queryParams;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditSliderComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditSliderComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditSliderComponent.prototype, "styles", void 0);
    EditSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-slider',
            template: __webpack_require__(/*! ./edit-slider.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.html"),
            styles: [__webpack_require__(/*! ./edit-slider.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_12__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], EditSliderComponent);
    return EditSliderComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT URL</h1>\n<!--url-form *ngIf=\"data\"\n    [data]=\"data\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</url-form-->"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9lZGl0LXVybC9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXGVkaXQtdXJsXFxlZGl0LXVybC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2VkaXQtdXJsL2VkaXQtdXJsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.ts ***!
  \********************************************************************************************/
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
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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
    function EditUrlComponent(activatedRoute, dialog, dialogRef, layoutService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.layoutService = layoutService;
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
        /*this.layoutService.getLayoutFilterSliders('', this.urlId, this.filter).subscribe(response => {
          this.data = response.data;
        },
          (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error)
        )*/
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
        this.layoutService.putUrl('', '', data).subscribe(function (response) {
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
            template: __webpack_require__(/*! ./edit-url.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.html"),
            styles: [__webpack_require__(/*! ./edit-url.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], Object])
    ], EditUrlComponent);
    return EditUrlComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n        fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\">\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.brand\" class=\"margin-top-10px\" matTooltip=\"{{ 'BRAND' | translate }}\" (click)=\"updateFilter('brand')\">BRAND</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.category\" class=\"margin-top-10px\" matTooltip=\"{{ 'CATEGORY' | translate }}\" (click)=\"updateFilter('category')\">CATEGORY</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.collection\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLLECTION' | translate }}\" (click)=\"updateFilter('collection')\">COLLECTION</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.color\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLOR' | translate }}\" (click)=\"updateFilter('color')\">COLOR</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.gender\" class=\"margin-top-10px\" matTooltip=\"{{ 'GENDER' | translate }}\" (click)=\"updateFilter('gender')\">GENDER</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.price\" class=\"margin-top-10px\" matTooltip=\"{{ 'PRICE' | translate }}\" (click)=\"updateFilter('price')\">PRICE</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.shop\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHOP' | translate }}\" (click)=\"updateFilter('shop')\">SHOP</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.shipping\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHIPPING' | translate }}\" (click)=\"updateFilter('shipping')\">SHIPPING</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.sku\" class=\"margin-top-10px\" matTooltip=\"{{ 'SKU' | translate }}\" (click)=\"updateFilter('sku')\">SKU</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.status\" class=\"margin-top-10px\" matTooltip=\"{{ 'STATUS' | translate }}\" (click)=\"updateFilter('status')\">STATUS</mat-checkbox>\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"filtersChecked.style\" class=\"margin-top-10px\" matTooltip=\"{{ 'STYLE' | translate }}\" (click)=\"updateFilter('style')\">STYLE</mat-checkbox>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n\n{{filters | json}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 100% !important;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9maWx0ZXItZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXGZpbHRlci1mb3JtXFxmaWx0ZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsdUJBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9maWx0ZXItZm9ybS9maWx0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FilterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormComponent", function() { return FilterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ms-releases/models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ms-releases/models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _models_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/filters */ "./src/app/ms-back-office/modules/ms-layout/models/filters.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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

var FilterFormComponent = /** @class */ (function (_super) {
    __extends(FilterFormComponent, _super);
    function FilterFormComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.genders = _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__["GENDERS"];
        _this.colors = _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__["COLORS"];
        _this.filtersArray = [];
        _this.filters = [];
        _this.filtersChecked = {
            style: false,
            sku: false,
            brand: false,
            collection: false,
            category: false,
            gender: false,
            color: false,
            shop: false,
            shipping: false,
            status: false,
            maxPrice: false,
            minPrice: false,
        };
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    FilterFormComponent.prototype.ngOnInit = function () {
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
        this.filters.forEach(function (item) {
            _this.filtersChecked[item] = true;
        });
    };
    FilterFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    };
    FilterFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.filters);
        }
        else {
            this.triggerValidation();
        }
    };
    FilterFormComponent.prototype.addFilter = function (filter) {
        if (!this.filters) {
            this.formGroup.get(filter).enable();
            return;
        }
        if (this.filters.find(function (item) { return item.filter === filter; })) {
            this.filters = this.filters.filter(function (item) {
                return item.filter !== filter;
            });
            this.formGroup.get(filter).setValue('');
            this.formGroup.get(filter).disable();
        }
        else {
            this.formGroup.get(filter).enable();
        }
    };
    FilterFormComponent.prototype.updateFilter = function (filter) {
        if (!this.filters) {
            this.filters = [];
        }
        if (this.filters.find(function (item) { return item === filter; })) {
            this.filters = this.filters.filter(function (item) {
                return item !== filter;
            });
        }
        else {
            this.filters = this.filters.concat([filter]);
        }
    };
    FilterFormComponent.prototype.updateFilterValue = function (filter, name) {
        if (!this.filters) {
            this.filters = [];
        }
        if (!this.filters.find(function (item) { return item.filter === filter; })) {
            var filterItem = new _models_filters__WEBPACK_IMPORTED_MODULE_5__["FilterItem"]();
            filterItem = {
                filter: filter,
                name: name,
                value: this.formGroup.get(filter).value,
            };
            this.filters = this.filters.concat([filterItem]);
        }
        else {
            try {
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).value = this.formGroup.get(filter).value;
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).name = name;
            }
            catch (err) {
            }
        }
    };
    FilterFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item === filter; })) {
                return this.filters.find(function (item) { return item === filter; }).value;
            }
            ;
        }
        return '';
    };
    FilterFormComponent.prototype.getFilterActive = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "styles", void 0);
    FilterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-form',
            template: __webpack_require__(/*! ./filter-form.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./filter-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FilterFormComponent);
    return FilterFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n        fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\">\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('brand')\" class=\"margin-top-10px\" matTooltip=\"{{ 'BRAND' | translate }}\" (click)=\"addFilter('brand')\">BRAND</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" multiple>\n\n              <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"updateFilterValue('brand', brand.name)\">\n\n                {{brand.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('categories')\" class=\"margin-top-10px\" matTooltip=\"{{ 'CATEGORY' | translate }}\" (click)=\"addFilter('category')\">CATEGORY</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\">\n\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\" (click)=\"updateFilterValue('category', category.name)\">\n\n                {{category.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('collection')\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLLECTION' | translate }}\" (click)=\"addFilter('collection')\">COLLECTION</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collection\">\n\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"updateFilterValue('collection', collection.name)\">\n\n                {{collection.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('color')\" class=\"margin-top-10px\" matTooltip=\"{{ 'COLOR' | translate }}\" (click)=\"addFilter('color')\">COLOR</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\">\n\n              <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\" (click)=\"updateFilterValue('color', color.name)\">\n\n                {{color.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('gender')\" class=\"margin-top-10px\" matTooltip=\"{{ 'GENDER' | translate }}\" (click)=\"addFilter('gender')\">GENDER</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\n\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\" (click)=\"updateFilterValue('gender', gender.name)\">\n\n                {{gender.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'PRICE' | translate }}\" (click)=\"addFilter('maxPrice')\">PRICE</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"maxPrice\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\"  (click)=\"updateFilterValue('maxPrice', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('shop')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHOP' | translate }}\" (click)=\"addFilter('shop')\">SHOP</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"shop\">\n\n              <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\" (click)=\"updateFilterValue('shop', shop.name)\">\n\n                {{shop.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SHIPPING' | translate }}\" (click)=\"addFilter('shipping')\">SHIPPING</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"shipping\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('shipping', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'SKU' | translate }}\" (click)=\"addFilter('sku')\">SKU</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"sku\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('sku', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('filter')\" class=\"margin-top-10px\" matTooltip=\"{{ 'STATUS' | translate }}\" (click)=\"addFilter('status')\">STATUS</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"status\">\n\n              <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('status', filter.name)\">\n\n                {{filter.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"20\">\n\n          <div class=\"image-card-btns display-flex margin-right-10px margin-bottom-10px\">\n            <mat-checkbox [checked]=\"!getFilterActive('style')\" class=\"margin-top-10px\" matTooltip=\"{{ 'STYLE' | translate }}\" (click)=\"addFilter('style')\">STYLE</mat-checkbox>\n          </div>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"style\">\n\n              <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"updateFilterValue('style', style.name)\">\n\n                {{style.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n\n{{filters | json}}\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 100% !important;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9maWx0ZXItaGVhZGVyLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0XFxjb21wb25lbnRzXFxmaWx0ZXItaGVhZGVyLWZvcm1cXGZpbHRlci1oZWFkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsdUJBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9maWx0ZXItaGVhZGVyLWZvcm0vZmlsdGVyLWhlYWRlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: FilterHeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterHeaderFormComponent", function() { return FilterHeaderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ms-releases/models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ms-releases/models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _models_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/filters */ "./src/app/ms-back-office/modules/ms-layout/models/filters.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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

var FilterHeaderFormComponent = /** @class */ (function (_super) {
    __extends(FilterHeaderFormComponent, _super);
    function FilterHeaderFormComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.genders = _ms_releases_models_gender__WEBPACK_IMPORTED_MODULE_4__["GENDERS"];
        _this.colors = _ms_releases_models_color__WEBPACK_IMPORTED_MODULE_3__["COLORS"];
        _this.filtersArray = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    FilterHeaderFormComponent.prototype.ngOnInit = function () {
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
    FilterHeaderFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('style'), disabled: this.getFilterActive('style') }),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('sku'), disabled: this.getFilterActive('sku') }),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('brand'), disabled: this.getFilterActive('brand') }),
            collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('collection'), disabled: this.getFilterActive('collection') }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('category'), disabled: this.getFilterActive('category') }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('gender'), disabled: this.getFilterActive('gender') }),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('color'), disabled: this.getFilterActive('color') }),
            shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('shop'), disabled: this.getFilterActive('shop') }),
            shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('shipping'), disabled: this.getFilterActive('shipping') }),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('status'), disabled: this.getFilterActive('status') }),
            maxPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('maxPrice'), disabled: this.getFilterActive('maxPrice') }),
            minPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.getFilterValue('minPrice'), disabled: this.getFilterActive('minPrice') }),
        });
    };
    FilterHeaderFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.filters);
        }
        else {
            this.triggerValidation();
        }
    };
    FilterHeaderFormComponent.prototype.addFilter = function (filter) {
        if (!this.filters) {
            this.formGroup.get(filter).enable();
            return;
        }
        if (this.filters.find(function (item) { return item.filter === filter; })) {
            this.filters = this.filters.filter(function (item) {
                return item.filter !== filter;
            });
            this.formGroup.get(filter).setValue('');
            this.formGroup.get(filter).disable();
        }
        else {
            this.formGroup.get(filter).enable();
        }
    };
    FilterHeaderFormComponent.prototype.updateFilterValue = function (filter, name) {
        if (!this.filters) {
            this.filters = [];
        }
        if (!this.filters.find(function (item) { return item.filter === filter; })) {
            var filterItem = new _models_filters__WEBPACK_IMPORTED_MODULE_5__["FilterItem"]();
            filterItem = {
                filter: filter,
                name: name,
                value: this.formGroup.get(filter).value,
            };
            this.filters = this.filters.concat([filterItem]);
        }
        else {
            try {
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).value = this.formGroup.get(filter).value;
                this.filters.find(function (item) {
                    return item.filter === filter;
                }).name = name;
            }
            catch (err) {
            }
        }
    };
    FilterHeaderFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return this.filters.find(function (item) { return item.filter === filter; }).value;
            }
            ;
        }
        return '';
    };
    FilterHeaderFormComponent.prototype.getFilterActive = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterHeaderFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterHeaderFormComponent.prototype, "styles", void 0);
    FilterHeaderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-header-form',
            template: __webpack_require__(/*! ./filter-header-form.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./filter-header-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FilterHeaderFormComponent);
    return FilterHeaderFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n            <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                <div [fxFlex]=\"100\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                        <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>URL</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"url\" #url>\n\n                            </mat-form-field>\n\n                            <div>\n\n                                <button mat-raised-button type=\"button\" color=\"primary\" class=\"max-width-480px\" (click)=\"addFilterModalBrand()\">{{ 'Add Filter' | translate }}</button>\n\n                                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column margin-top-25px\">\n\n                                    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\" formArrayName=\"filtersForm\">\n\n                                        <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n                                            fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\" [formGroupName]=\"0\">\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('brand')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\">\n\n                                                        <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                                                            {{brand.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('category')\">\n\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Category\" formControlName=\"category\">\n\n                                                        <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\" (click)=\"updateFilterValue('category', category.name)\">\n\n                                                            {{category.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('collection')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Collection\" formControlName=\"collection\">\n\n                                                        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"updateFilterValue('collection', collection.name)\">\n\n                                                            {{collection.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('color')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Color\" formControlName=\"color\">\n\n                                                        <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\" (click)=\"updateFilterValue('color', color.name)\">\n\n                                                            {{color.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('gender')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Gender\" formControlName=\"gender\">\n\n                                                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\" (click)=\"updateFilterValue('gender', gender.name)\">\n\n                                                            {{gender.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('maxPrice')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"maxPrice\" formControlName=\"maxPrice\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('maxPrice', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shop')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Shops\" formControlName=\"shop\">\n\n                                                        <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\" (click)=\"updateFilterValue('shop', shop.name)\">\n\n                                                            {{shop.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shipping')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Shipping\" formControlName=\"shipping\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('shipping', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('sku')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Sku\" formControlName=\"sku\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('sku', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('status')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Status\" formControlName=\"status\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('status', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('style')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Style\" formControlName=\"style\">\n\n                                                        <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"updateFilterValue('style', style.name)\">\n\n                                                            {{style.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n\n\n                            </div>\n\n                            <!--div class=\"flex-grow-1 overflow-auto display-flex\">\n\n                                <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"urls\">\n\n                                    <ng-container matColumnDef=\"URL\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                            URL\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"VANITY URL\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                            VANITY URL\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"ACTIONS\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\n                                            <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editUrlModalBrand(element.id)\">\n                                                <mat-icon>edit</mat-icon>\n                                            </button>\n                                            <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                                                <mat-icon>delete</mat-icon>\n                                            </button>\n                                        </td>\n                                    </ng-container>\n\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n                                    </tr>\n\n                                </table>\n\n                            </div-->\n\n                            <!--div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n                                <span class=\"flex-grow-1\"></span>\n                                <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\n                                    (page)=\"onPage()\">\n                                </mat-paginator>\n                            </div-->\n\n                        </div>\n\n                        <div [fxFlex]=\"60\" class=\"margin-right-25px\">\n\n                            <mat-radio-group>\n\n                                <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\n\n                                    <div class=\"display-flex margin-right-25px\">\n\n                                        <mat-radio-button value=\"Filter\" class=\"margin-top-10px\" matTooltip=\"{{ 'Filter' | translate }}\">Filter</mat-radio-button>\n\n                                    </div>\n\n                                    <div class=\"display-flex\">\n\n                                        <mat-radio-button value=\"Manual\" class=\"margin-top-10px\" matTooltip=\"{{ 'Manual' | translate }}\">Manual</mat-radio-button>\n\n                                    </div>\n\n                                </div>\n\n                            </mat-radio-group>\n\n                            <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n\n                                <images-layout-card name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\"></images-layout-card>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Acept' | translate }}</button>\n\n    </div>\n</form>\n{{formGroup.value | json}} {{this.pageId}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n::ng-deep .mat-tab-body-wrapper {\n  flex-grow: 1 !important; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXItZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXGhlYWRlci1mb3JtXFxoZWFkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0osRUFBQzs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNBLHdCQUF1QixFQUN0Qjs7QUFHQztFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsdUJBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXItZm9ybS9oZWFkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXJ7XHJcbmZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HeaderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFormComponent", function() { return HeaderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-filter/new-filter.component */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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






var errorKey = 'Error';
var HeaderFormComponent = /** @class */ (function (_super) {
    __extends(HeaderFormComponent, _super);
    function HeaderFormComponent(dialog, eleRef, errorHandlingService, formBuilder, layoutService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.eleRef = eleRef;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.layoutService = layoutService;
        _this.translateService = translateService;
        _this.displayedColumns = [
            'URL',
            'VANITY URL',
            'ACTIONS'
        ];
        _this.filters = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    HeaderFormComponent.prototype.ngOnInit = function () {
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
    HeaderFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.data.faces);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            numberOfItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.numberOfItem),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url),
            filtersForm: this.formBuilder.array([
                this.formBuilder.group({
                    style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('style')),
                    sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('sku')),
                    brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('brand')),
                    collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('collection')),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('category')),
                    gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('gender')),
                    color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('color')),
                    shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shop')),
                    shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shipping')),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('status')),
                    maxPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('maxPrice')),
                    minPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('minPrice')),
                })
            ])
        });
    };
    HeaderFormComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.pageId, 'slider', filters).subscribe(function (response) {
            _this.data = response.data;
            _this.data.faces = _this.data.images;
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        }, function (error) {
            _this.data.images = [];
            _this.data.faces = [];
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        } //this.errorHandlingService.handleUiError(errorKey, error)
        );
    };
    HeaderFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.filters = this.formGroup.get('filtersForm').value;
            this.data.faces = this.formGroup.get('faces').value;
            this.data.numberOfItem = this.formGroup.get('numberOfItem').value;
            this.data.url = this.formGroup.get('url').value;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    HeaderFormComponent.prototype.addFilterModalBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_6__["NewFilterComponent"], {
            height: '80%',
            data: {
                filters: this.filters,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            _this.filters = result;
            _this.data.filtersActive = result;
            _this.filtersArray = result;
            //this.getLayoutSliders(this.data.filters);
        });
    };
    HeaderFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return this.filters.find(function (item) { return item.filter === filter; }).value;
            }
            ;
        }
        return '';
    };
    HeaderFormComponent.prototype.getFilterActive = function (filter) {
        console.log(filter);
        if (this.filters) {
            if (this.filters.find(function (item) { return item === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderFormComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('url'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderFormComponent.prototype, "fileInput", void 0);
    HeaderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-form',
            template: __webpack_require__(/*! ./header-form.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./header-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HeaderFormComponent);
    return HeaderFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Columns</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <!--mat-form-field>\n    <input matInput formControlName=\"description\" placeholder=\"TASK\">\n  </mat-form-field-->\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addTaskModal()\">ADD COLUMN</button>\n</mat-toolbar>\n\n<!--div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"tasks\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\n    [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        TASK\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"responsable\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RESPONSABLE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.responsable }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"priority\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PRIORITY\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.priority }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"getTaskToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div-->\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9oZWFkZXItdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0XFxjb21wb25lbnRzXFxoZWFkZXItdGFibGVcXGhlYWRlci10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2hlYWRlci10YWJsZS9oZWFkZXItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HeaderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTableComponent", function() { return HeaderTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-header/edit-header.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.ts");
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






//import { PRIORITY, Priority } from '../../models/priority';
var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var HeaderTableComponent = /** @class */ (function () {
    function HeaderTableComponent(activatedRoute, dialog, errorHandlingService, 
    //public tasksService: TasksService,
    toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
    }
    HeaderTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        //this.paginator.pageIndex = 0;
        this.users = this.activatedRoute.snapshot.data.users;
        // Begin observing style list changes.
        /*this.tasksList = this.tasksService.tasksList.subscribe((TasksList: any) => {
            this.totalLength = TasksList.dataCount;
            this.tasks = TasksList.data;
            if (this.tasks.length === 0 && this.totalLength > 0 && this.tasksService.previousPageSize > 0) {
                this.tasksService.previousPageIndex =
                    Math.ceil(this.totalLength / this.tasksService.previousPageSize) - 1;
                this.tasksService.reloadTasks().subscribe(response => {
                    this.tasksService.tasksList.next(response);
                },
                    (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error));
            }
        });*/
    };
    HeaderTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    HeaderTableComponent.prototype.ngOnDestroy = function () {
        this.tasksList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    HeaderTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    HeaderTableComponent.prototype.loadPage = function () {
        /*this.tasksService.getTasks(
            Object.assign({}, this.filter.value),
            this.sort.active, this.sort.direction,
            this.paginator.pageIndex, this.paginator.pageSize).subscribe((response: TasksListResponse) => {
                this.tasksService.tasksList.next(response);
            },
                (err: HandledError) => {
                    this.errorHandlingService.handleUiError(errorKey, err)
                });*/
    };
    HeaderTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    HeaderTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    HeaderTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    HeaderTableComponent.prototype.addTaskModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_7__["EditHeaderComponent"], {
            height: '90%',
            width: '90%',
            data: {
                pageId: this.pageId,
                filters: this.filtersArray,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    /*editTaskModal(id: string) {
        this.modalRef = this.dialog.open(EditTaskComponent, {
            height: '60%',
            width: '60%',
            data: {
                filters: this.filtersArray,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });

        this.modalRef.afterClosed().subscribe(() => {
            this.loadPage();
        });
    }*/
    HeaderTableComponent.prototype.getUsers = function (id) {
        try {
            return this.users.find(function (user) {
                return user.id === id;
            }).firstName;
        }
        catch (err) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderTableComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderTableComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderTableComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], HeaderTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], HeaderTableComponent.prototype, "sort", void 0);
    HeaderTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-table',
            template: __webpack_require__(/*! ./header-table.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.html"),
            styles: [__webpack_require__(/*! ./header-table.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], HeaderTableComponent);
    return HeaderTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n            <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                <div [fxFlex]=\"100\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                        <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>Title</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"title\">\n\n                            </mat-form-field>\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>Keywords</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"keyWords\">\n\n                            </mat-form-field>\n\n                        </div>\n\n                        <div [fxFlex]=\"60\" class=\"margin-right-25px\">\n\n                            <mat-form-field class=\"margin-left-16px width-100pct customized\" appearance=\"fill\">\n\n                                <mat-label>Description</mat-label>\n                    \n                                <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n                    \n                              </mat-form-field>\n                              \n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Acept' | translate }}</button>\n\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9oZWFkaW5nLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0XFxjb21wb25lbnRzXFxoZWFkaW5nLWZvcm1cXGhlYWRpbmctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9oZWFkaW5nLWZvcm0vaGVhZGluZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: HeadingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingFormComponent", function() { return HeadingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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



var HeadingFormComponent = /** @class */ (function (_super) {
    __extends(HeadingFormComponent, _super);
    function HeadingFormComponent(dialog, formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.formBuilder = formBuilder;
        _this.translateService = translateService;
        _this.displayedColumns = [
            'URL',
            'VANITY URL',
            'ACTIONS'
        ];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    HeadingFormComponent.prototype.ngOnInit = function () {
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
    HeadingFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.title),
            keyWords: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.keyWords),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
        });
        console.log(this.data);
    };
    HeadingFormComponent.prototype.createFormGroupData = function (data) {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.title),
            keyWords: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.keyWords),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.description),
        });
    };
    HeadingFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeadingFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeadingFormComponent.prototype, "styles", void 0);
    HeadingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'heading-form',
            template: __webpack_require__(/*! ./heading-form.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./heading-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HeadingFormComponent);
    return HeadingFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"\" class=\"fix-nav\">\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='home'}\" (click)=\"setLayout('home')\">\n        HOME \n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='whats_new'}\" (click)=\"setLayout('whats_new')\">\n        WHAT'S NEW\n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='release_calendar'}\" (click)=\"setLayout('release_calendar')\">\n        RELEASE CALENDAR\n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='shoes'}\" (click)=\"setLayout('shoes')\">\n        SHOE \n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='brands'}\" (click)=\"setLayout('brands')\">\n        BRANDS \n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\"  [ngClass]=\"{'selected': selected ==='styles'}\" (click)=\"setLayout('styles')\">\n        STYLE \n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\"  [ngClass]=\"{'selected': selected ==='customized'}\" (click)=\"setLayout('customized')\">\n        CUSTOMIZED \n    </div>\n    <div>\n        |\n    </div>\n    <div class=\"nav-brand cursor-pointer display-flex flex-grow-1 justify-content-center\" [ngClass]=\"{'selected': selected ==='blogs'}\" (click)=\"setLayout('blogs')\">\n        BLOG \n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-brand {\n  margin-right: 10px;\n  margin-left: 10px;\n  text-align: center; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.mat-toolbar-single-row {\n  height: 36px !important; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.visible-md {\n  display: none; }\n\n.visible-sm {\n  display: none; }\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n\n.width-80px {\n  width: 80px; }\n\n.selected {\n  background-color: black !important;\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQtdG9wbmF2L0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWxheW91dFxcY29tcG9uZW50c1xcbGF5b3V0LXRvcG5hdlxcbGF5b3V0LXNsaWRlci10b3BuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0k7SUFDSSxlQUFjLEVBQ2pCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLGVBQWMsRUFDakI7RUFDRDtJQUNJLFlBQVcsRUFDZCxFQUFBOztBQUVMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCLEVBQUE7O0FBR0w7RUFDSSxZQUFVLEVBQ2I7O0FBRUQ7RUFDSSxtQ0FBa0M7RUFDbEMsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQtdG9wbmF2L2xheW91dC1zbGlkZXItdG9wbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1icmFuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3BuYXYtaWNvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93e1xuICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xufVxuLm5hdi1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudmlzaWJsZS1tZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnZpc2libGUtc20ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5hdi1icmFuZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhpZGRlbi1zbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ud2lkdGgtODBweHtcbiAgICB3aWR0aDo4MHB4O1xufVxuXG4uc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LayoutSliderTopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSliderTopnavComponent", function() { return LayoutSliderTopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../authentication/services/auth.service */ "./src/app/authentication/services/auth.service.ts");
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
        this.layoutEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    LayoutSliderTopnavComponent.prototype.setLayout = function (layout) {
        this.selected = layout;
        this.layoutEventEmitter.emit(layout);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LayoutSliderTopnavComponent.prototype, "layoutEventEmitter", void 0);
    LayoutSliderTopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-slider-topnav',
            template: __webpack_require__(/*! ./layout-slider-topnav.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.html"),
            styles: [__webpack_require__(/*! ./layout-slider-topnav.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LayoutSliderTopnavComponent);
    return LayoutSliderTopnavComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--h1>Select the page you want to configure</h1-->\n<layout-slider-topnav (layoutEventEmitter)=\"layoutEvent($event)\"></layout-slider-topnav>\n<div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n        <mat-tab-group class=\"padding-top-25px display-flex flex-grow-1\">\n            <mat-tab label=\"Slider\">\n                <edit-slider [filters]=\"filters\" [pageId]=\"pageId\" [brands]=\"brands\" [categories]=\"categories\" [collections]=\"collections\"\n                    [shops]=\"shops\" [styles]=\"styles\"></edit-slider>\n            </mat-tab>\n            <mat-tab label=\"Header\">\n                <!--edit-header  [filters]=\"filters\" [pageId]=\"pageId\" [brands]=\"brands\" [categories]=\"categories\" [collections]=\"collections\" [shops]=\"shops\" [styles]=\"styles\"></edit-header-->\n                <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                    <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n                        <header-table  [filters]=\"filters\" [pageId]=\"pageId\" [brands]=\"brands\" [categories]=\"categories\" [collections]=\"collections\" [shops]=\"shops\" [styles]=\"styles\"></header-table>\n                    </div>\n\n                    <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\"></div>\n\n                </div>\n\n            </mat-tab>\n\n            <mat-tab label=\"Hottest\">\n                <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                    <div [fxFlex]=\"100\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                        <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                            <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n                                <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                    <mat-label>URL</mat-label>\n\n                                    <input matInput type=\"text\">\n\n                                </mat-form-field>\n\n                                <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                    <mat-label>Numbers of Items</mat-label>\n\n                                    <input matInput type=\"text\">\n\n                                </mat-form-field>\n                            </div>\n                            <div [fxFlex]=\"60\" class=\"margin-right-25px\">\n\n                                <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                                    <mat-label>URL</mat-label>\n\n                                    <input matInput type=\"text\">\n\n                                </mat-form-field>\n\n                                <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                                    <mat-label>Traking list base URL</mat-label>\n\n                                    <input matInput type=\"text\">\n\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Heading\">\n                <edit-heading [filters]=\"filters\" [pageId]=\"pageId\" [brands]=\"brands\" [categories]=\"categories\" [collections]=\"collections\"\n                    [shops]=\"shops\" [styles]=\"styles\"></edit-heading>\n            </mat-tab>\n\n        </mat-tab-group>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtbGF5b3V0XFxjb21wb25lbnRzXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(activatedRoute, dialog, urlsService, errorHandlingService) {
        this.activatedRoute = activatedRoute;
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
        this.pageId = 'brands';
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.styles = this.activatedRoute.snapshot.data.styles;
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
    };
    LayoutComponent.prototype.ngOnDestroy = function () {
    };
    LayoutComponent.prototype.layoutEvent = function (layout) {
        console.log(layout);
        this.pageId = layout;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LayoutComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LayoutComponent.prototype, "sort", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>FILTERS</h1>\n<h1>ADD FILTER</h1>\n<filter-form class=\"flex-grow-1\"\n    [data]=\"data\"    \n    [brands]=\"dialogData.brands\" \n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [shops]=\"dialogData.shops\"\n    [styles]=\"dialogData.styles\"\n    [filters]=\"dialogData.filters\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</filter-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9uZXctZmlsdGVyLWhlYWRlci9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXG5ldy1maWx0ZXItaGVhZGVyXFxuZXctZmlsdGVyLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL25ldy1maWx0ZXItaGVhZGVyL25ldy1maWx0ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NewFilterHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFilterHeaderComponent", function() { return NewFilterHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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





//
var errorKey = 'Error';
var savedMessageKey = 'Saved';
var NewFilterHeaderComponent = /** @class */ (function () {
    function NewFilterHeaderComponent(dialogRef, activatedRoute, UrlsService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
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
        this.filtersArray = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewFilterHeaderComponent.prototype.submit = function (data) {
        //console.log(this.filtersArray)   
        //this.filtersArray.emit(data);
        this.dialogRef.close(data);
    };
    NewFilterHeaderComponent.prototype.cancel = function () {
        this.close();
    };
    NewFilterHeaderComponent.prototype.close = function () {
        this.dialogRef.close(this.dialogData.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NewFilterHeaderComponent.prototype, "filtersArray", void 0);
    NewFilterHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-filter-header',
            template: __webpack_require__(/*! ./new-filter-header.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.html"),
            styles: [__webpack_require__(/*! ./new-filter-header.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewFilterHeaderComponent);
    return NewFilterHeaderComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD FILTER</h1>\n<filter-form class=\"flex-grow-1\"\n    [data]=\"data\"    \n    [brands]=\"dialogData.brands\" \n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [shops]=\"dialogData.shops\"\n    [styles]=\"dialogData.styles\"\n    [filters]=\"dialogData.filters\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</filter-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9uZXctZmlsdGVyL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWxheW91dFxcY29tcG9uZW50c1xcbmV3LWZpbHRlclxcbmV3LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWxheW91dC9jb21wb25lbnRzL25ldy1maWx0ZXIvbmV3LWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1heC13aWR0aC02MC1wY3R7XHJcbiAgICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgdGQubWF0LWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NewFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFilterComponent", function() { return NewFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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





//
var errorKey = 'Error';
var savedMessageKey = 'Saved';
var NewFilterComponent = /** @class */ (function () {
    function NewFilterComponent(dialogRef, activatedRoute, UrlsService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
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
        this.filtersArray = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewFilterComponent.prototype.submit = function (data) {
        //console.log(this.filtersArray)   
        //this.filtersArray.emit(data);
        this.dialogRef.close(data);
    };
    NewFilterComponent.prototype.cancel = function () {
        this.close();
    };
    NewFilterComponent.prototype.close = function () {
        this.dialogRef.close(this.dialogData.filters);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NewFilterComponent.prototype, "filtersArray", void 0);
    NewFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-filter',
            template: __webpack_require__(/*! ./new-filter.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.html"),
            styles: [__webpack_require__(/*! ./new-filter.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewFilterComponent);
    return NewFilterComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n            <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n                <div [fxFlex]=\"100\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                        <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>URL</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"url\" #url>\n\n                            </mat-form-field>\n\n                            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n                                <mat-label>Numbers of Items</mat-label>\n\n                                <input matInput type=\"text\" formControlName=\"numberOfItem\">\n\n                            </mat-form-field>\n\n                            <div>\n\n                                <button mat-raised-button type=\"button\" color=\"primary\" class=\"max-width-480px\" (click)=\"addFilterModalBrand()\">{{ 'Add Filter' | translate }}</button>\n\n                                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n                                    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\" formArrayName=\"filtersForm\">\n\n                                        <div class=\"mb-25 flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial\"\n                                            fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"25px\" [formGroupName]=\"0\">\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('brand')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\">\n\n                                                        <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                                                            {{brand.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('category')\">\n\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Category\" formControlName=\"category\">\n\n                                                        <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\" (click)=\"updateFilterValue('category', category.name)\">\n\n                                                            {{category.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('collection')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Collection\" formControlName=\"collection\">\n\n                                                        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"updateFilterValue('collection', collection.name)\">\n\n                                                            {{collection.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('color')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Color\" formControlName=\"color\">\n\n                                                        <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\" (click)=\"updateFilterValue('color', color.name)\">\n\n                                                            {{color.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('gender')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Gender\" formControlName=\"gender\">\n\n                                                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\" (click)=\"updateFilterValue('gender', gender.name)\">\n\n                                                            {{gender.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('maxPrice')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"maxPrice\" formControlName=\"maxPrice\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('maxPrice', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shop')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Shops\" formControlName=\"shop\">\n\n                                                        <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\" (click)=\"updateFilterValue('shop', shop.name)\">\n\n                                                            {{shop.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('shipping')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Shipping\" formControlName=\"shipping\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('shipping', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('sku')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Sku\" formControlName=\"sku\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('sku', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('status')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Status\" formControlName=\"status\">\n\n                                                        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.id\" (click)=\"updateFilterValue('status', filter.name)\">\n\n                                                            {{filter.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div [fxFlex]=\"50\" *ngIf=\"!getFilterActive('style')\">\n\n                                                <mat-form-field class=\"width-100pc\">\n\n                                                    <mat-select disableOptionCentering placeholder=\"Style\" formControlName=\"style\">\n\n                                                        <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"updateFilterValue('style', style.name)\">\n\n                                                            {{style.name}}\n\n                                                        </mat-option>\n\n                                                    </mat-select>\n\n                                                </mat-form-field>\n\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n\n\n                            </div>\n\n                            <!--div class=\"flex-grow-1 overflow-auto display-flex\">\n\n                                <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"urls\">\n\n                                    <ng-container matColumnDef=\"URL\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                            URL\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"VANITY URL\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                            VANITY URL\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\n                                    </ng-container>\n\n                                    <ng-container matColumnDef=\"ACTIONS\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                        </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\n                                            <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editUrlModalBrand(element.id)\">\n                                                <mat-icon>edit</mat-icon>\n                                            </button>\n                                            <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                                                <mat-icon>delete</mat-icon>\n                                            </button>\n                                        </td>\n                                    </ng-container>\n\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n                                    </tr>\n\n                                </table>\n\n                            </div-->\n\n                            <!--div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n                                <span class=\"flex-grow-1\"></span>\n                                <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\n                                    (page)=\"onPage()\">\n                                </mat-paginator>\n                            </div-->\n\n                        </div>\n\n                        <div [fxFlex]=\"60\" class=\"margin-right-25px\">\n\n                            <mat-radio-group>\n\n                                <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\n\n                                    <div class=\"display-flex margin-right-25px\">\n\n                                        <mat-radio-button value=\"Filter\" class=\"margin-top-10px\" matTooltip=\"{{ 'Filter' | translate }}\">Filter</mat-radio-button>\n\n                                    </div>\n\n                                    <div class=\"display-flex\">\n\n                                        <mat-radio-button value=\"Manual\" class=\"margin-top-10px\" matTooltip=\"{{ 'Manual' | translate }}\">Manual</mat-radio-button>\n\n                                    </div>\n\n                                </div>\n\n                            </mat-radio-group>\n\n                            <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n\n                                <images-layout-card name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\"></images-layout-card>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Acept' | translate }}</button>\n\n    </div>\n</form>\n{{formGroup.value | json}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n::ng-deep .mat-tab-body-wrapper {\n  flex-grow: 1 !important; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9zbGlkZXItZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1sYXlvdXRcXGNvbXBvbmVudHNcXHNsaWRlci1mb3JtXFxzbGlkZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0osRUFBQzs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNBLHdCQUF1QixFQUN0Qjs7QUFHQztFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsdUJBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1sYXlvdXQvY29tcG9uZW50cy9zbGlkZXItZm9ybS9zbGlkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXJ7XHJcbmZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SliderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderFormComponent", function() { return SliderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-filter/new-filter.component */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts");
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






var errorKey = 'Error';
var SliderFormComponent = /** @class */ (function (_super) {
    __extends(SliderFormComponent, _super);
    function SliderFormComponent(dialog, eleRef, errorHandlingService, formBuilder, layoutService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.eleRef = eleRef;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.layoutService = layoutService;
        _this.translateService = translateService;
        _this.displayedColumns = [
            'URL',
            'VANITY URL',
            'ACTIONS'
        ];
        _this.filters = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SliderFormComponent.prototype.ngOnInit = function () {
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
    SliderFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.data.faces);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            numberOfItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.numberOfItem),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url),
            filtersForm: this.formBuilder.array([
                this.formBuilder.group({
                    style: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('style')),
                    sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('sku')),
                    brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('brand')),
                    collection: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('collection')),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('category')),
                    gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('gender')),
                    color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('color')),
                    shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shop')),
                    shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('shipping')),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('status')),
                    maxPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('maxPrice')),
                    minPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.getFilterValue('minPrice')),
                })
            ])
        });
    };
    SliderFormComponent.prototype.getLayoutSliders = function (filters) {
        var _this = this;
        this.layoutService.getLayoutFilterSliders(this.pageId, 'slider', filters).subscribe(function (response) {
            _this.data = response.data;
            _this.data.faces = _this.data.images;
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        }, function (error) {
            _this.data.images = [];
            _this.data.faces = [];
            _this.createFormGroup();
            _this.fileInput.nativeElement.click();
        } //this.errorHandlingService.handleUiError(errorKey, error)
        );
    };
    SliderFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.filters = this.formGroup.get('filtersForm').value;
            this.data.faces = this.formGroup.get('faces').value;
            this.data.numberOfItem = this.formGroup.get('numberOfItem').value;
            this.data.url = this.formGroup.get('url').value;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    SliderFormComponent.prototype.addFilterModalBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_6__["NewFilterComponent"], {
            height: '80%',
            data: {
                filters: this.filters,
                brands: this.brands,
                categories: this.categories,
                collections: this.collections,
                shops: this.shops,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            _this.filters = result;
            _this.data.filtersActive = result;
            _this.filtersArray = result;
            //this.getLayoutSliders(this.data.filters);
        });
    };
    SliderFormComponent.prototype.getFilterValue = function (filter) {
        if (this.filters) {
            if (this.filters.find(function (item) { return item.filter === filter; })) {
                return this.filters.find(function (item) { return item.filter === filter; }).value;
            }
            ;
        }
        return '';
    };
    SliderFormComponent.prototype.getFilterActive = function (filter) {
        console.log(filter);
        if (this.filters) {
            if (this.filters.find(function (item) { return item === filter; })) {
                return false;
            }
            ;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SliderFormComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SliderFormComponent.prototype, "pageId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SliderFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('url'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SliderFormComponent.prototype, "fileInput", void 0);
    SliderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-form',
            template: __webpack_require__(/*! ./slider-form.component.html */ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./slider-form.component.scss */ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SliderFormComponent);
    return SliderFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/models/filters.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/models/filters.ts ***!
  \********************************************************************/
/*! exports provided: Filter, RELEASES, FilterItem, FilterResponce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASES", function() { return RELEASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItem", function() { return FilterItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterResponce", function() { return FilterResponce; });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());

;
var RELEASES = [
    { id: 'collectionId', name: 'Collection' },
    { id: 'gender', name: 'Gender' },
    { id: 'sku', name: 'SKU' },
];
var FilterItem = /** @class */ (function () {
    function FilterItem() {
    }
    return FilterItem;
}());

var FilterResponce = /** @class */ (function () {
    function FilterResponce() {
    }
    return FilterResponce;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/models/layout.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/models/layout.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderColumn, LayoutHeader, LayoutHeaderResponce, LayoutSlider, LayoutHeading, UrlsListResponse, UrlsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderColumn", function() { return HeaderColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeader", function() { return LayoutHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeaderResponce", function() { return LayoutHeaderResponce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSlider", function() { return LayoutSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeading", function() { return LayoutHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsListResponse", function() { return UrlsListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlsResponse", function() { return UrlsResponse; });
var HeaderColumn = /** @class */ (function () {
    function HeaderColumn() {
    }
    return HeaderColumn;
}());

var LayoutHeader = /** @class */ (function () {
    function LayoutHeader() {
    }
    return LayoutHeader;
}());

var LayoutHeaderResponce = /** @class */ (function () {
    function LayoutHeaderResponce() {
    }
    return LayoutHeaderResponce;
}());

var LayoutSlider = /** @class */ (function () {
    function LayoutSlider() {
    }
    return LayoutSlider;
}());

var LayoutHeading = /** @class */ (function () {
    function LayoutHeading() {
    }
    return LayoutHeading;
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

/***/ "./src/app/ms-back-office/modules/ms-layout/ms-layout-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/ms-layout-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MsLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsLayoutRoutingModule", function() { return MsLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-urls/services/urls-resolve.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts");
/* harmony import */ var _components_delete_layout_delete_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delete-layout/delete-layout.component */ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.ts");
/* harmony import */ var _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-url/edit-url.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//


//






//



//import { NewUrlComponent } from './components/new-url/new-url.component';
var routes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_4__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_6__["CollectionsResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ShopsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_8__["StylesResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_4__["BrandsResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_9__["UrlsResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_11__["EditUrlComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_4__["BrandsResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            urlId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_3__["IdResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_layout_delete_layout_component__WEBPACK_IMPORTED_MODULE_10__["DeleteLayoutComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            urlId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_3__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsLayoutRoutingModule = /** @class */ (function () {
    function MsLayoutRoutingModule() {
    }
    MsLayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsLayoutRoutingModule);
    return MsLayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/ms-layout.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/ms-layout.module.ts ***!
  \**********************************************************************/
/*! exports provided: MsLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsLayoutModule", function() { return MsLayoutModule; });
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
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _ui_modules_images_layout_card_images_layout_card_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/images-layout-card/images-layout-card.module */ "./src/app/ui/modules/images-layout-card/images-layout-card.module.ts");
/* harmony import */ var _ms_layout_header_ms_layout_header_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ms-layout-header/ms-layout-header.module */ "./src/app/ms-back-office/modules/ms-layout-header/ms-layout-header.module.ts");
/* harmony import */ var _components_filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/filter-form/filter-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/filter-form/filter-form.component.ts");
/* harmony import */ var _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/filter-header-form/filter-header-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/filter-header-form/filter-header-form.component.ts");
/* harmony import */ var _components_header_form_header_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header-form/header-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/header-form/header-form.component.ts");
/* harmony import */ var _components_slider_form_slider_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/slider-form/slider-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/slider-form/slider-form.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/ms-back-office/modules/ms-layout/components/layout/layout.component.ts");
/* harmony import */ var _components_delete_layout_delete_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/delete-layout/delete-layout.component */ "./src/app/ms-back-office/modules/ms-layout/components/delete-layout/delete-layout.component.ts");
/* harmony import */ var _components_edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-header/edit-header.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-header/edit-header.component.ts");
/* harmony import */ var _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-url/edit-url.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-url/edit-url.component.ts");
/* harmony import */ var _components_edit_slider_edit_slider_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-slider/edit-slider.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-slider/edit-slider.component.ts");
/* harmony import */ var _ms_layout_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ms-layout-routing.module */ "./src/app/ms-back-office/modules/ms-layout/ms-layout-routing.module.ts");
/* harmony import */ var _components_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/new-filter/new-filter.component */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter/new-filter.component.ts");
/* harmony import */ var _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/new-filter-header/new-filter-header.component */ "./src/app/ms-back-office/modules/ms-layout/components/new-filter-header/new-filter-header.component.ts");
/* harmony import */ var _components_layout_topnav_layout_slider_topnav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/layout-topnav/layout-slider-topnav.component */ "./src/app/ms-back-office/modules/ms-layout/components/layout-topnav/layout-slider-topnav.component.ts");
/* harmony import */ var _components_heading_form_heading_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/heading-form/heading-form.component */ "./src/app/ms-back-office/modules/ms-layout/components/heading-form/heading-form.component.ts");
/* harmony import */ var _components_edit_heading_edit_heading_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/edit-heading/edit-heading.component */ "./src/app/ms-back-office/modules/ms-layout/components/edit-heading/edit-heading.component.ts");
/* harmony import */ var _components_header_table_header_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/header-table/header-table.component */ "./src/app/ms-back-office/modules/ms-layout/components/header-table/header-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//




//
















var MsLayoutModule = /** @class */ (function () {
    function MsLayoutModule() {
    }
    MsLayoutModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_layout_routing_module__WEBPACK_IMPORTED_MODULE_27__["MsLayoutRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_15__["ImageCardModule"],
                _ui_modules_images_layout_card_images_layout_card_module__WEBPACK_IMPORTED_MODULE_16__["ImagesLayoutCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _ms_layout_header_ms_layout_header_module__WEBPACK_IMPORTED_MODULE_17__["MsLayoutHeaderModule"]
            ],
            declarations: [
                _components_delete_layout_delete_layout_component__WEBPACK_IMPORTED_MODULE_23__["DeleteLayoutComponent"],
                _components_edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_24__["EditHeaderComponent"],
                _components_edit_heading_edit_heading_component__WEBPACK_IMPORTED_MODULE_32__["EditHeadingComponent"],
                _components_edit_slider_edit_slider_component__WEBPACK_IMPORTED_MODULE_26__["EditSliderComponent"],
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_25__["EditUrlComponent"],
                _components_filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_18__["FilterFormComponent"],
                _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_19__["FilterHeaderFormComponent"],
                _components_header_form_header_form_component__WEBPACK_IMPORTED_MODULE_20__["HeaderFormComponent"],
                _components_heading_form_heading_form_component__WEBPACK_IMPORTED_MODULE_31__["HeadingFormComponent"],
                _components_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_28__["NewFilterComponent"],
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_29__["NewFilterHeaderComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_22__["LayoutComponent"],
                _components_layout_topnav_layout_slider_topnav_component__WEBPACK_IMPORTED_MODULE_30__["LayoutSliderTopnavComponent"],
                _components_slider_form_slider_form_component__WEBPACK_IMPORTED_MODULE_21__["SliderFormComponent"],
                _components_header_table_header_table_component__WEBPACK_IMPORTED_MODULE_33__["HeaderTableComponent"]
            ],
            exports: [
                _components_delete_layout_delete_layout_component__WEBPACK_IMPORTED_MODULE_23__["DeleteLayoutComponent"],
                _components_edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_24__["EditHeaderComponent"],
                _components_edit_heading_edit_heading_component__WEBPACK_IMPORTED_MODULE_32__["EditHeadingComponent"],
                _components_edit_slider_edit_slider_component__WEBPACK_IMPORTED_MODULE_26__["EditSliderComponent"],
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_25__["EditUrlComponent"],
                _components_filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_18__["FilterFormComponent"],
                _components_filter_header_form_filter_header_form_component__WEBPACK_IMPORTED_MODULE_19__["FilterHeaderFormComponent"],
                _components_header_form_header_form_component__WEBPACK_IMPORTED_MODULE_20__["HeaderFormComponent"],
                _components_heading_form_heading_form_component__WEBPACK_IMPORTED_MODULE_31__["HeadingFormComponent"],
                _components_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_28__["NewFilterComponent"],
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_29__["NewFilterHeaderComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_22__["LayoutComponent"],
                _components_layout_topnav_layout_slider_topnav_component__WEBPACK_IMPORTED_MODULE_30__["LayoutSliderTopnavComponent"],
                _components_slider_form_slider_form_component__WEBPACK_IMPORTED_MODULE_21__["SliderFormComponent"],
                _components_header_table_header_table_component__WEBPACK_IMPORTED_MODULE_33__["HeaderTableComponent"]
            ],
            entryComponents: [
                _components_edit_url_edit_url_component__WEBPACK_IMPORTED_MODULE_25__["EditUrlComponent"],
                _components_edit_header_edit_header_component__WEBPACK_IMPORTED_MODULE_24__["EditHeaderComponent"],
                _components_header_form_header_form_component__WEBPACK_IMPORTED_MODULE_20__["HeaderFormComponent"],
                _components_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_28__["NewFilterComponent"],
                _components_new_filter_header_new_filter_header_component__WEBPACK_IMPORTED_MODULE_29__["NewFilterHeaderComponent"]
            ]
        })
    ], MsLayoutModule);
    return MsLayoutModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-layout/services/layout.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ASCENDING, LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
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
var LayoutService = /** @class */ (function () {
    function LayoutService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'url';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.urlsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.layouts.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    LayoutService.prototype.getUrls = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    LayoutService.prototype.reloadUrls = function () {
        return this.getUrls(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    LayoutService.prototype.postUrl = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    LayoutService.prototype.getLayout = function (pageId, layoutPage) {
        return this.http.get(this.apiEndpoint + pageId + '/' + layoutPage);
    };
    LayoutService.prototype.getLayoutFilterSliders = function (pageId, layoutPage, filter) {
        var filters = this.formatFilters(filter);
        return this.http.get(this.apiEndpoint + pageId + '/' + layoutPage + filters);
    };
    LayoutService.prototype.putUrl = function (pageId, layoutPage, data) {
        return this.http.put(this.apiEndpoint + pageId + '/' + layoutPage + '/', JSON.stringify(data));
    };
    LayoutService.prototype.deleteUrl = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    LayoutService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    LayoutService.prototype.getAllUrls = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    LayoutService.prototype.formatFilters = function (filters) {
        var queryParams = '';
        if (filters) {
            filters.forEach(function (item) {
                queryParams += queryParams.length > 0 ? '&' : '?';
                queryParams += item.filter + '=' + item.value;
            });
        }
        return queryParams;
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/models/color.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/models/color.ts ***!
  \********************************************************************/
/*! exports provided: Color, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());

;
var COLORS = [
    { id: 'black', name: 'black', color: '' },
    { id: 'blue', name: 'blue', color: '' },
    { id: 'green', name: 'green', color: '' },
    { id: 'orange', name: 'orange', color: '' },
    { id: 'red', name: 'red', color: '' },
    { id: 'violet', name: 'violet', color: '' },
    { id: 'white', name: 'white', color: '' },
    { id: 'yellow', name: 'yellow', color: '' }
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/models/gender.ts ***!
  \*********************************************************************/
/*! exports provided: Gender, GENDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERS", function() { return GENDERS; });
var Gender = /** @class */ (function () {
    function Gender() {
    }
    return Gender;
}());

;
var GENDERS = [
    { id: 'm', name: 'Male' },
    { id: 'f', name: 'Female' },
    { id: 'c', name: 'Children' }
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts ***!
  \************************************************************************************/
/*! exports provided: StylesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesResolveService", function() { return StylesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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


//import { setTranslationsstyles.service
var errorKey = 'Error';
var StylesResolveService = /** @class */ (function () {
    function StylesResolveService(stylesService, translate, errorHandlingService) {
        this.stylesService = stylesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    StylesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.stylesService.getAllStyles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    StylesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_styles_service__WEBPACK_IMPORTED_MODULE_5__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], StylesResolveService);
    return StylesResolveService;
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

/***/ "./src/app/ui/modules/images-card/services/images.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/modules/images-card/services/images.service.ts ***!
  \*******************************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../error-handling/interceptors/http-headers-interceptor.service */ "./src/app/error-handling/interceptors/http-headers-interceptor.service.ts");
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


var ImagesService = /** @class */ (function () {
    function ImagesService(http, httpHeaders, configService) {
        this.http = http;
        this.httpHeaders = httpHeaders;
        this.configService = configService;
        this.baseUrl = this.configService.config.apiConfigs.images.apiEndpoint;
    }
    ImagesService.prototype.postImage = function (image) {
        var requestOptions = { headers: this.httpHeaders.getHeaders() };
        console.log(requestOptions);
        requestOptions.headers = requestOptions.headers.delete('Content-Type');
        var formData = new FormData();
        formData.append('image', image);
        return this.http.post(this.baseUrl, formData, requestOptions);
    };
    ImagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_3__["HttpHeadersInterceptorService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], ImagesService);
    return ImagesService;
}());



/***/ })

}]);
//# sourceMappingURL=ms-layout-ms-layout-module.js.map