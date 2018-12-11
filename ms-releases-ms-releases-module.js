(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-releases-ms-releases-module"],{

/***/ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9kZWxldGUtcmVsZWFzZS9kZWxldGUtcmVsZWFzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DeleteReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteReleaseComponent", function() { return DeleteReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
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




var titleKey = 'Title Delete Release';
var deleteBtnKey = 'Delete Release';
var messageKey = 'Delete Release Message';
var errorKey = 'Error';
var deletedReleaseMessageKey = 'Deleted Release Message';
var DeleteReleaseComponent = /** @class */ (function () {
    function DeleteReleaseComponent(activatedRoute, dialog, releasesService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.releasesService = releasesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteReleaseComponent.prototype.ngAfterViewInit = function () {
        this.getRelease();
    };
    DeleteReleaseComponent.prototype.ngOnInit = function () {
        this.releaseId = this.activatedRoute.snapshot.data.releaseId;
    };
    DeleteReleaseComponent.prototype.getRelease = function () {
        var _this = this;
        this.releasesService.getRelease(this.releaseId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteRelease();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteReleaseComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteReleaseComponent.prototype.confirmDeleteRelease = function () {
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
                _this.deleteRelease();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteReleaseComponent.prototype.deleteRelease = function () {
        var _this = this;
        this.releasesService.deleteRelease(this.data.id).subscribe(function (response) {
            _this.releasesService.reloadReleases().subscribe(function (response) {
                _this.releasesService.releasesList.next(response);
                _this.toastr.success(deletedReleaseMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-release',
            template: __webpack_require__(/*! ./delete-release.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.html"),
            styles: [__webpack_require__(/*! ./delete-release.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_7__["ReleasesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteReleaseComponent);
    return DeleteReleaseComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.height-34px {\r\n  height: 34px !important;\r\n}\r\n\r\n.width-100pc {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL2VkaXQtcmVsZWFzZS1mb3JtL2VkaXQtcmVsZWFzZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL2VkaXQtcmVsZWFzZS1mb3JtL2VkaXQtcmVsZWFzZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHgge1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n        <div [fxFlex]=\"25\">\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>Release Name</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"name\" required>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>SKU</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"sku\">\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>Description</mat-label>\r\n\r\n            <textarea matInput formControlName=\"description\"></textarea>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>Gender</mat-label>\r\n\r\n            <mat-select placeholder=\"Select\" formControlName=\"gender\">\r\n\r\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\r\n\r\n                {{gender.name}}\r\n\r\n              </mat-option>\r\n\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"hot\">Hot</mat-slide-toggle>\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>Collection</mat-label>\r\n\r\n            <mat-select placeholder=\"Select\" formControlName=\"collectionId\">\r\n\r\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n\r\n                {{collection.name}}\r\n\r\n              </mat-option>\r\n\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <mat-label>Price</mat-label>\r\n\r\n            <input matInput type=\"number\" formControlName=\"price\">\r\n\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"25\">\r\n\r\n          <mat-form-field class=\"width-100pc\">\r\n\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\">\r\n\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\r\n            <mat-datepicker #picker></mat-datepicker>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-checkbox class=\"padding-bottom-15px\" value=\"primary\" matTooltip=\"{{ 'Upcomming' | translate }}\">Upcoming</mat-checkbox>\r\n\r\n          <mat-form-field class=\"margin-top-60px  width-100pc\">\r\n\r\n            <mat-label>Colors</mat-label>\r\n\r\n            <mat-select placeholder=\"Select\" formControlName=\"color\" multiple>\r\n\r\n              <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\r\n\r\n                {{color.name}}\r\n\r\n              </mat-option>\r\n\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Supplier Color</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"supplierColor\">\r\n\r\n          </mat-form-field>\r\n\r\n          <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"children\">Children</mat-slide-toggle-->\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"border margin-left-25px margin-right-25px\">\r\n          <div class=\"display-flex justify-content-center\">\r\n            <h3 class=\"margin-buttom-0px\">Main Image</h3>\r\n          </div>\r\n          <images-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" name=\"faces\" (deletedFace)=\"onDeleteFace($event)\"></images-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"align-items-center padding-top-25px padding-bottom-25px\" [fxFlex]=\"100\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModal()\">Add an offer to this Release</button>\r\n\r\n      </div>\r\n\r\n      <!--div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n        <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n          <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n            <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"releases\" matSort [matSortActive]=\"releasesService.previousSortColumn\"\r\n              [matSortDirection]=\"releasesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n              <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Name\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"description\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Description\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"sku\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Sku\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.sku }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"images\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Images\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.category }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"gender\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Gender\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.gender }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"hot\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Hot\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.hot }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n              </tr>\r\n\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div-->\r\n\r\n      <!--div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\r\n        <span class=\"flex-grow-1\"></span>\r\n        <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"5\" showFirstLastButtons\r\n          (page)=\"onPage()\">\r\n        </mat-paginator>\r\n      </div-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditReleaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReleaseFormComponent", function() { return EditReleaseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _services_releases_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/directives/images-card-edit-actions.directive */ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
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




//import { setTranslations } from 'ngx-translate';
//import { TRANSLATIONS } from './i18n/edit-case-form.component.translations';





var errorKey = 'Error';
var EditReleaseFormComponent = /** @class */ (function (_super) {
    __extends(EditReleaseFormComponent, _super);
    function EditReleaseFormComponent(errorHandlingService, matDialogService, formBuilder, releasesService, releasesImgesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.errorHandlingService = errorHandlingService;
        _this.matDialogService = matDialogService;
        _this.formBuilder = formBuilder;
        _this.releasesService = releasesService;
        _this.releasesImgesService = releasesImgesService;
        _this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_10__["GENDERS"];
        _this.colors = _models_color__WEBPACK_IMPORTED_MODULE_9__["COLORS"];
        _this.overview = false;
        _this.imageList = [];
        _this.faceList = [];
        _this.caseProperties = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    EditReleaseFormComponent.prototype.ngOnInit = function () {
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.createFormGroup();
    };
    EditReleaseFormComponent.prototype.createFormGroup = function () {
        this.data.faces = this.imageList;
        this.faces = this.formBuilder.control(this.imageList);
        this.formGroup = this.formBuilder.group({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.sku),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            collectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.collectionId),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.children),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.gender),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.color ? this.data.color.split(',') : this.data.color),
            hot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.hot),
            supplierColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.supplierColor),
        });
    };
    EditReleaseFormComponent.prototype.onDeleteFace = function (face) {
        var _this = this;
        if (face.id) {
            this.releasesImgesService.deleteReleaseImage(this.data.id, face.id).subscribe(function (response) {
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }
    };
    EditReleaseFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            //this.data = this.formGroup.value;
            try {
                this.data.color = this.data.color.join();
            }
            catch (_a) { }
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditReleaseFormComponent.prototype, "uploadingImagesState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditReleaseFormComponent.prototype, "overview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "caseProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__["ImageCardEditActionDirective"])
    ], EditReleaseFormComponent.prototype, "imageCardEditAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditReleaseFormComponent.prototype, "releaseId", void 0);
    EditReleaseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-release-form',
            template: __webpack_require__(/*! ./edit-release-form.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-release-form.component.css */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.css")],
        }),
        __metadata("design:paramtypes", [_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_3__["ReleasesService"],
            _services_releases_images_service__WEBPACK_IMPORTED_MODULE_4__["ReleasesImgesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], EditReleaseFormComponent);
    return EditReleaseFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT RELEASE</h1>\n<edit-release-form class=\"flex-grow-1\" *ngIf=\"data\"\n                [data]=\"data\"\n                [imageList]=\"imageList\"\n                [releaseId]=\"releaseId\"\n                [collections]=\"collections\"\n                [caseProperties]=\"caseProperties\"\n                [overview]=\"false\"\n                (accept)=\"submit($event)\"\n                (cancel)=\"cancel()\"\n                [validationErrors]=\"validationErrors\"\n                [imageCardEditAction]=\"imageCardEditActionTemplate\"\n                (dataChange)=\"dataChanged()\">\n</edit-release-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL2VkaXQtcmVsZWFzZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1yZWxlYXNlc1xcY29tcG9uZW50c1xcZWRpdC1yZWxlYXNlXFxlZGl0LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9lZGl0LXJlbGVhc2UvZWRpdC1yZWxlYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReleaseComponent", function() { return EditReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _models_releases__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/releases */ "./src/app/ms-back-office/modules/ms-releases/models/releases.ts");
/* harmony import */ var _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/directives/images-card-edit-actions.directive */ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts");
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
var savedCaseMessageKey = 'Saved Changes';
var EditReleaseComponent = /** @class */ (function () {
    function EditReleaseComponent(releasesImgesService, activatedRoute, toastr, releasesService, router, errorHandlingService, translate, imagesService, dialog) {
        this.releasesImgesService = releasesImgesService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.releasesService = releasesService;
        this.router = router;
        this.errorHandlingService = errorHandlingService;
        this.translate = translate;
        this.imagesService = imagesService;
        this.dialog = dialog;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard';
        this.saveMessageKey = 'Discard Changes';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditReleaseComponent.prototype.ngAfterViewInit = function () {
    };
    EditReleaseComponent.prototype.ngOnInit = function () {
        this.releaseId = this.activatedRoute.snapshot.data.releaseId;
        this.imageList = this.activatedRoute.snapshot.data.releaseAllImages;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.getCase();
        this.imageList.forEach(function (image) {
            image.fileName = "";
        });
    };
    EditReleaseComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.editCase(data);
    };
    EditReleaseComponent.prototype.cancel = function () {
        this.close();
    };
    EditReleaseComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditReleaseComponent.prototype.getCase = function () {
        var _this = this;
        this.releasesService.getRelease(this.releaseId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditReleaseComponent.prototype.editCase = function (releaseData) {
        var _this = this;
        console.log(releaseData);
        if (releaseData !== undefined && releaseData !== null) {
            // Saving the images of the case before saving the case
            releaseData.images = [];
            var imagesObservables = new Array();
            var addedFaces = new Array();
            // Uploading the images to command and control server
            for (var position in releaseData.faces) {
                var face = releaseData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Status"].Uploading;
                    if (face.mainImage === true) {
                        this.imagesService.postImage(face.file).subscribe(function (response) {
                            var image = new _models_releases__WEBPACK_IMPORTED_MODULE_13__["ReleaseImage"];
                            image.imgUrl = response.data.url;
                            releaseData.images = releaseData.images.concat([image]);
                            var mainImage = {
                                mainImage: response.data.imgUrl
                            };
                            _this.releasesImgesService.patchReleaseMainImage(_this.releaseId, mainImage).subscribe(function (response) {
                                console.log("new principal");
                            });
                        });
                    }
                    else {
                        var subscription$ = this.imagesService.postImage(face.file);
                        imagesObservables.push(subscription$);
                    }
                    addedFaces.push(face);
                }
                else if (face.mainImage === true) {
                    var mainImage = {
                        mainImage: face.imgUrl
                    };
                    this.releasesImgesService.patchReleaseMainImage(this.releaseId, mainImage).subscribe(function (response) {
                        console.log("old principal");
                    });
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        var image = new _models_releases__WEBPACK_IMPORTED_MODULE_13__["ReleaseImage"];
                        image.imgUrl = responses[item].data.url;
                        releaseData.images = releaseData.images.concat([image]);
                    }
                    _this.releasesImgesService.postReleaseImageAll(releaseData.id, releaseData.images).subscribe(function (response) {
                        console.log("salvando imagenes");
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                    _this.releasesService.putRelease(releaseData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.data = response;
                        _this.translate.get(savedCaseMessageKey).subscribe(function (value) { return _this.toastr.success(value); });
                        _this.close();
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
                this.releasesService.putRelease(releaseData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.data = response;
                    _this.translate.get(savedCaseMessageKey).subscribe(function (value) { return _this.toastr.success(value); });
                    _this.close();
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseComponent.prototype, "galleries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseComponent.prototype, "caseProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_14__["ImageCardEditActionDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", Object)
    ], EditReleaseComponent.prototype, "imageCardEditActionTemplate", void 0);
    EditReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-release',
            template: __webpack_require__(/*! ./edit-release.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.html"),
            styles: [__webpack_require__(/*! ./edit-release.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_12__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_11__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesImgesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_6__["ReleasesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__["ImagesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditReleaseComponent);
    return EditReleaseComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"justify-content-space-between flex-grow-0 padding-bottom-10px\">\n    <h1>RELEASE CREATOR</h1>\n    <mat-slide-toggle class=\"margin-right-25px padding-top-15px padding-bottom-15px\">Customized</mat-slide-toggle>\n</div>\n\n<release-form class=\"flex-grow-1\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</release-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL25ldy1yZWxlYXNlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxuZXctcmVsZWFzZVxcbmV3LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9uZXctcmVsZWFzZS9uZXctcmVsZWFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NewReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReleaseComponent", function() { return NewReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_releases__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/releases */ "./src/app/ms-back-office/modules/ms-releases/models/releases.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _services_releases_images_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
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
var savedUserMessageKey = 'Saved User Message';
var NewReleaseComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewReleaseComponent(activatedRoute, releasesService, releasesImgesService, errorHandlingService, imagesService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.releasesService = releasesService;
        this.releasesImgesService = releasesImgesService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: "",
            description: "",
            sku: "",
            hot: false,
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewReleaseComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
    };
    NewReleaseComponent.prototype.submit = function (data) {
        this.createRelease(data);
    };
    NewReleaseComponent.prototype.cancel = function () {
        this.close();
    };
    NewReleaseComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewReleaseComponent.prototype.createRelease = function (releaseData) {
        var _this = this;
        console.log("create...........");
        this.releasesService.postRelease(releaseData).subscribe(function (response) {
            _this.releaseId = response.data.id;
            releaseData.images = [];
            var imagesObservables = new Array();
            for (var position in releaseData.faces) {
                var face = releaseData.faces[position];
                if (face.mainImage === true) {
                    _this.imagesService.postImage(face.file).subscribe(function (response) {
                        //let image = new ReleaseImage;
                        //image.imgUrl = response.data.url;
                        //releaseData.images = [...releaseData.images, image];
                        console.log("main image........................................");
                        //console.log()
                        var mainImage = {
                            mainImage: response.data.url
                        };
                        _this.releasesImgesService.patchReleaseMainImage(_this.releaseId, mainImage).subscribe(function (response) {
                            console.log("new principal");
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
                    var subscription$ = _this.imagesService.postImage(face.file);
                    imagesObservables.push(subscription$);
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        //const image = responses[item].data.url;
                        var image = new _models_releases__WEBPACK_IMPORTED_MODULE_10__["ReleaseImage"];
                        image.imgUrl = responses[item].data.url;
                        releaseData.images = releaseData.images.concat([image]);
                    }
                    //this.releasesService.postRelease(releaseData).subscribe(response => {
                    //send images realeases 
                    _this.releasesImgesService.postReleaseImageAll(response.data.id, releaseData.images).subscribe(function (response) {
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                    _this.unsavedChanges = false;
                    _this.close();
                    _this.toastr.success((savedUserMessageKey));
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
            else {
                _this.close();
            }
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-release',
            template: __webpack_require__(/*! ./new-release.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.html"),
            styles: [__webpack_require__(/*! ./new-release.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_11__["ReleasesService"],
            _services_releases_images_service__WEBPACK_IMPORTED_MODULE_12__["ReleasesImgesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewReleaseComponent);
    return NewReleaseComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n        <div [fxFlex]=\"25\">\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Release Name</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"name\" required>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>SKU</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"sku\">\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\"></textarea>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Gender</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"gender\">\n\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n\n                {{gender.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n\n          <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"hot\">Hot</mat-slide-toggle>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Collection</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"collectionId\">\n\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n\n                {{collection.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Price</mat-label>\n\n            <input matInput type=\"number\" formControlName=\"price\">\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"25\">\n\n          <mat-form-field class=\"width-100pc\">\n\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\">\n\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\n            <mat-datepicker #picker></mat-datepicker>\n\n          </mat-form-field>\n\n          <mat-checkbox class=\"padding-bottom-15px\" value=\"primary\" matTooltip=\"{{ 'Upcomming' | translate }}\">Upcoming</mat-checkbox>\n\n          <mat-form-field class=\"margin-top-60px  width-100pc\">\n\n            <mat-label>Colors</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"color\" multiple>\n\n              <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\n\n                {{color.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Supplier Color</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"supplierColor\">\n\n          </mat-form-field>\n\n          <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"children\">Children</mat-slide-toggle-->\n\n        </div>\n\n        <div [fxFlex]=\"50\" class=\"border margin-left-25px margin-right-25px\">\n          <div class=\"display-flex justify-content-center\">\n            <h3 class=\"margin-buttom-0px\" >Main Image</h3>\n          </div>\n          <images-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" name=\"faces\"></images-card>\n\n        </div>\n\n      </div>\n\n      <div class=\"align-items-center padding-top-25px padding-bottom-25px\" [fxFlex]=\"100\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModal()\">Add an offer to this Release</button>\n\n      </div>\n\n      <!--div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n        <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n          <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n            <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"releases\" matSort [matSortActive]=\"releasesService.previousSortColumn\"\n              [matSortDirection]=\"releasesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n              <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Name\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Description\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"sku\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Sku\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.sku }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"images\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Images\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.category }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"gender\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Gender\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.gender }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"hot\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                  Hot\n                </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.hot }} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"actions\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n                    <mat-icon>edit</mat-icon>\n                  </button>\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n              </tr>\n\n            </table>\n\n          </div>\n\n        </div>\n\n      </div-->\n\n      <!--div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\n        <span class=\"flex-grow-1\"></span>\n        <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"5\" showFirstLastButtons\n          (page)=\"onPage()\">\n        </mat-paginator>\n      </div-->\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n<http-request-indicator [urlExpressions]=\"[\n      configService.config.apiConfigs.releases.apiEndpoint + '.*']\">\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2UtZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1yZWxlYXNlc1xcY29tcG9uZW50c1xccmVsZWFzZS1mb3JtXFxyZWxlYXNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2UtZm9ybS9yZWxlYXNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4IHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReleaseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseFormComponent", function() { return ReleaseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
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







var errorKey = 'Error';
var ReleaseFormComponent = /** @class */ (function (_super) {
    __extends(ReleaseFormComponent, _super);
    function ReleaseFormComponent(dialog, configService, errorHandlingService, formBuilder, releasesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.configService = configService;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.releasesService = releasesService;
        _this.displayedColumns = [
            'name',
            'description',
            'sku',
            'images',
            'gender',
            'hot',
            'actions',
        ];
        _this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_7__["GENDERS"];
        _this.colors = _models_color__WEBPACK_IMPORTED_MODULE_6__["COLORS"];
        _this.totalLength = 0;
        _this.releases = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    ReleaseFormComponent.prototype.ngOnInit = function () {
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
        // Begin observing style list changes.
        this.releasesList = this.releasesService.releasesList.subscribe(function (stylesList) {
            _this.totalLength = stylesList.dataCount;
            _this.releases = stylesList.data;
            if (_this.releases.length === 0 && _this.totalLength > 0 && _this.releasesService.previousPageSize > 0) {
                _this.releasesService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.releasesService.previousPageSize) - 1;
                _this.releasesService.reloadReleases().subscribe(function (response) {
                    _this.releasesService.releasesList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    ReleaseFormComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    ReleaseFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.data.faces);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.sku),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            collectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.collectionId),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.children),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.gender),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.color ? this.data.color.split(',') : this.data.color),
            hot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.hot),
            supplierColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.supplierColor),
        });
    };
    ReleaseFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data = this.formGroup.value;
            this.data.color = this.data.color.join();
            this.accept.emit(this.data);
        }
        else {
            console.log("no valido");
            this.triggerValidation();
        }
    };
    ReleaseFormComponent.prototype.loadPage = function () {
        /*this.releasesService.getReleases(
            Object.assign({}, ''),
            this.sort.active, this.sort.direction,
            this.paginator.pageIndex, this.paginator.pageSize).subscribe((response: ReleasesListResponse) => {
                this.releasesService.releasesList.next(response);
            },
                (err: HandledError) => {
                    this.errorHandlingService.handleUiError(errorKey, err)
                });*/
    };
    ReleaseFormComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_10__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleaseFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleaseFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleaseFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReleaseFormComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReleaseFormComponent.prototype, "sort", void 0);
    ReleaseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'release-form',
            template: __webpack_require__(/*! ./release-form.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.html"),
            styles: [__webpack_require__(/*! ./release-form.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_8__["ReleasesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ReleaseFormComponent);
    return ReleaseFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Releases Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"sku\" placeholder=\"SKU\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>STYLE</mat-label>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>BRAND</mat-label>\n    <mat-select placeholder=\"Select\" formControlName=\"brandId\">\n        <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n          {{brand.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>COLLECTION</mat-label>\n    <mat-select placeholder=\"Select\" formControlName=\"collectionId\">\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n          {{collection.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>GENDER</mat-label>\n    <mat-select placeholder=\"Select\" formControlName=\"genderId\">\n        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n          {{gender.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field>\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW RELEASE</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\"\n        mat-table [dataSource]=\"releases\"\n        matSort [matSortActive]=\"releasesService.previousSortColumn\" [matSortDirection]=\"releasesService.previousSortDirection\"\n        matSortDisableClear (matSortChange)=\"onSort()\">\n\n        <ng-container matColumnDef=\"ID\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                ID\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.id }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"SKU\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                SKU\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.sku }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"STYLE\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                STYLE\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ getStyle(element.styleId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"BRAND\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                BRAND\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ getBrand(element.brandId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"COLLECTION\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLLECTION\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.collectionId }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"CATEGORY\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                CATEGORY\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.categoryId }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"COLOR\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLOR\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.color }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"OFFICIAL RELEASE\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                OFFICIAL RELEASE\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ element.releaseDate }} </td>\n        </ng-container>\n\n        <!--ng-container matColumnDef=\"HOT\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            HOT\n          </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.hot? 'Yes':'No' }} </td>\n      </ng-container-->\n        \n        <ng-container matColumnDef=\"ACTIONS\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>  \n            </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n                  <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                  <mat-icon>delete</mat-icon>\n                </button>        \n            </td>\n          </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n        </tr>\n\n    </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator\n      [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons (page)=\"onPage()\">\n  </mat-paginator>\n</div>\n\n<http-request-indicator\n    [urlExpressions]=\"[\n        configService.config.apiConfigs.releases.apiEndpoint + '.*']\">\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2VzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxyZWxlYXNlcy10YWJsZVxccmVsZWFzZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2VzLXRhYmxlL3JlbGVhc2VzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReleasesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesTableComponent", function() { return ReleasesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
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
var ReleasesTableComponent = /** @class */ (function () {
    function ReleasesTableComponent(activatedRoute, configService, errorHandlingService, releasesService) {
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.errorHandlingService = errorHandlingService;
        this.releasesService = releasesService;
        this.displayedColumns = [
            'ID',
            'SKU',
            'STYLE',
            'BRAND',
            'COLLECTION',
            'CATEGORY',
            'COLOR',
            'OFFICIAL RELEASE',
            'ACTIONS'
        ];
        this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_8__["GENDERS"];
        this.totalLength = 0;
        this.releases = [];
    }
    ReleasesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        // Begin observing style list changes.
        this.releasesList = this.releasesService.releasesList.subscribe(function (stylesList) {
            _this.totalLength = stylesList.dataCount;
            _this.releases = stylesList.data;
            if (_this.releases.length === 0 && _this.totalLength > 0 && _this.releasesService.previousPageSize > 0) {
                _this.releasesService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.releasesService.previousPageSize) - 1;
                _this.releasesService.reloadReleases().subscribe(function (response) {
                    _this.releasesService.releasesList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    ReleasesTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    ReleasesTableComponent.prototype.ngOnDestroy = function () {
        this.releasesList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    ReleasesTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['sku'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['brandId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['collectionId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['genderId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    ReleasesTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.releasesService.getReleases(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.releasesService.releasesList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    ReleasesTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ReleasesTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ReleasesTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    ReleasesTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    ReleasesTableComponent.prototype.getStyle = function (id) {
        try {
            return this.styles.find(function (style) {
                return style.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReleasesTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReleasesTableComponent.prototype, "sort", void 0);
    ReleasesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'releases-table',
            template: __webpack_require__(/*! ./releases-table.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.html"),
            styles: [__webpack_require__(/*! ./releases-table.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_7__["ReleasesService"]])
    ], ReleasesTableComponent);
    return ReleasesTableComponent;
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

/***/ "./src/app/ms-back-office/modules/ms-releases/models/releases.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/models/releases.ts ***!
  \***********************************************************************/
/*! exports provided: MainImage, ReleaseImage, Release, ReleasesListResponse, ReleasesImagesListResponse, ReleaseResponse, ReleaseImagesResponse, EditReleaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainImage", function() { return MainImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseImage", function() { return ReleaseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Release", function() { return Release; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesListResponse", function() { return ReleasesListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesImagesListResponse", function() { return ReleasesImagesListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseResponse", function() { return ReleaseResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseImagesResponse", function() { return ReleaseImagesResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReleaseModel", function() { return EditReleaseModel; });
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
var MainImage = /** @class */ (function () {
    function MainImage() {
    }
    return MainImage;
}());

var ReleaseImage = /** @class */ (function () {
    function ReleaseImage() {
    }
    return ReleaseImage;
}());

var Release = /** @class */ (function () {
    function Release() {
    }
    return Release;
}());

var ReleasesListResponse = /** @class */ (function () {
    function ReleasesListResponse() {
    }
    return ReleasesListResponse;
}());

var ReleasesImagesListResponse = /** @class */ (function () {
    function ReleasesImagesListResponse() {
    }
    return ReleasesImagesListResponse;
}());

var ReleaseResponse = /** @class */ (function () {
    function ReleaseResponse() {
    }
    return ReleaseResponse;
}());

var ReleaseImagesResponse = /** @class */ (function () {
    function ReleaseImagesResponse() {
    }
    return ReleaseImagesResponse;
}());

var EditReleaseModel = /** @class */ (function (_super) {
    __extends(EditReleaseModel, _super);
    function EditReleaseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditReleaseModel;
}(Release));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/ms-releases-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/ms-releases-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: MsReleasesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsReleasesRoutingModule", function() { return MsReleasesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-release/delete-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.ts");
/* harmony import */ var _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit-release/edit-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.ts");
/* harmony import */ var _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-release/new-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.ts");
/* harmony import */ var _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/releases-table/releases-table.component */ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_images_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-releases/services/releases-images-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
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
        component: _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_5__["ReleasesTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_10__["StylesResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_4__["NewReleaseComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_10__["StylesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_3__["EditReleaseComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            releaseId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"],
            releaseAllImages: _ms_releases_services_releases_images_resolve_service__WEBPACK_IMPORTED_MODULE_9__["ReleaseAllImagesResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_10__["StylesResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_2__["DeleteReleaseComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            releaseId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsReleasesRoutingModule = /** @class */ (function () {
    function MsReleasesRoutingModule() {
    }
    MsReleasesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsReleasesRoutingModule);
    return MsReleasesRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/ms-releases.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/ms-releases.module.ts ***!
  \**************************************************************************/
/*! exports provided: MsReleasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsReleasesModule", function() { return MsReleasesModule; });
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
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/error-messages/error-messages.module */ "./src/app/ui/modules/error-messages/error-messages.module.ts");
/* harmony import */ var _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/modules/images-card/images-card.module */ "./src/app/ui/modules/images-card/images-card.module.ts");
/* harmony import */ var _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/releases-table/releases-table.component */ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.ts");
/* harmony import */ var _ms_releases_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ms-releases-routing.module */ "./src/app/ms-back-office/modules/ms-releases/ms-releases-routing.module.ts");
/* harmony import */ var _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/release-form/release-form.component */ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.ts");
/* harmony import */ var _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/new-release/new-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.ts");
/* harmony import */ var _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-release/edit-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.ts");
/* harmony import */ var _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-release-form/edit-release-form.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.ts");
/* harmony import */ var _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/delete-release/delete-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.ts");
/* harmony import */ var _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ms-offers/ms-offers.module */ "./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//




//









var MsReleasesModule = /** @class */ (function () {
    function MsReleasesModule() {
    }
    MsReleasesModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_releases_routing_module__WEBPACK_IMPORTED_MODULE_19__["MsReleasesRoutingModule"],
                //
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__["AskBeforeRefreshModule"],
                _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_16__["ErrorMessagesModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_14__["HttpRequestIndicatorModule"],
                _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_17__["ImagesCardModule"],
                _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_25__["MsOffersModule"]
            ],
            declarations: [
                _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_24__["DeleteReleaseComponent"],
                _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_22__["EditReleaseComponent"],
                _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_23__["EditReleaseFormComponent"],
                _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_21__["NewReleaseComponent"],
                _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_20__["ReleaseFormComponent"],
                _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_18__["ReleasesTableComponent"],
            ],
            exports: [
                _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_24__["DeleteReleaseComponent"],
                _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_22__["EditReleaseComponent"],
                _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_23__["EditReleaseFormComponent"],
                _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_21__["NewReleaseComponent"],
                _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_20__["ReleaseFormComponent"],
                _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_18__["ReleasesTableComponent"],
            ],
            entryComponents: [
                _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_26__["NewOfferComponent"]
            ]
        })
    ], MsReleasesModule);
    return MsReleasesModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/services/releases-images-resolve.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/services/releases-images-resolve.service.ts ***!
  \************************************************************************************************/
/*! exports provided: ReleaseAllImagesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseAllImagesResolveService", function() { return ReleaseAllImagesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _releases_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
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
var ReleaseAllImagesResolveService = /** @class */ (function () {
    function ReleaseAllImagesResolveService(releasesImgesService, translate, errorHandlingService) {
        this.releasesImgesService = releasesImgesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ReleaseAllImagesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.releasesImgesService.getReleaseAllImages(route.paramMap.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        ;
    };
    ReleaseAllImagesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_releases_images_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesImgesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ReleaseAllImagesResolveService);
    return ReleaseAllImagesResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ASCENDING, ReleasesImgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesImgesService", function() { return ReleasesImgesService; });
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


var ASCENDING = 'asc';
var ReleasesImgesService = /** @class */ (function () {
    function ReleasesImgesService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'name';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.releasesImagesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.releases.apiEndpoint;
    }
    ReleasesImgesService.prototype.getReleasesImages = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    ReleasesImgesService.prototype.reloadReleasesImages = function () {
        console.log("reload");
        return this.getReleasesImages(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    ReleasesImgesService.prototype.postReleaseImage = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/images/', JSON.stringify(data));
    };
    ReleasesImgesService.prototype.patchReleaseMainImage = function (id, data) {
        return this.http.patch(this.apiEndpoint + id + '/mainImage/', JSON.stringify(data));
    };
    ReleasesImgesService.prototype.postReleaseImageAll = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/images/', JSON.stringify(data));
    };
    ReleasesImgesService.prototype.getReleaseImage = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    ReleasesImgesService.prototype.getReleaseAllImages = function (id) {
        return this.http.get(this.apiEndpoint + id + '/images/');
    };
    ReleasesImgesService.prototype.patchReleaseImage = function (data) {
        return this.http.patch(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    ReleasesImgesService.prototype.deleteReleaseImage = function (id, idImage) {
        return this.http.delete(this.apiEndpoint + id + '/images/' + idImage + '/');
    };
    ReleasesImgesService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
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
    ReleasesImgesService.prototype.getAllReleasesImages = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.data;
        }));
    };
    ReleasesImgesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingHttpService"]])
    ], ReleasesImgesService);
    return ReleasesImgesService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ASCENDING, ReleasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function() { return ReleasesService; });
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


var ASCENDING = 'asc';
var ReleasesService = /** @class */ (function () {
    function ReleasesService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'name';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.releasesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.releases.apiEndpoint;
    }
    ReleasesService.prototype.getReleases = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    ReleasesService.prototype.reloadReleases = function () {
        console.log("reload");
        return this.getReleases(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    ReleasesService.prototype.postRelease = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    ReleasesService.prototype.getRelease = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    ReleasesService.prototype.putRelease = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    ReleasesService.prototype.deleteRelease = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    ReleasesService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.sku && filter.sku.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "sku=" + filter.sku;
        }
        if (filter.name && filter.name.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "name=" + filter.name;
        }
        if (filter.brandId && filter.brandId.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "brandId=" + filter.brandId;
        }
        if (filter.collectionId && filter.collectionId.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "collectionId=" + filter.collectionId;
        }
        if (filter.category && filter.category.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "category=" + filter.category;
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
    ReleasesService.prototype.getAllReleases = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.data;
        }));
    };
    ReleasesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingHttpService"]])
    ], ReleasesService);
    return ReleasesService;
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
//# sourceMappingURL=ms-releases-ms-releases-module.js.map