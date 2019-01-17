(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ms-collections-ms-collections-module~ms-releases-ms-releases-module"],{

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
/* harmony import */ var _ui_modules_confirm_dialog_message_components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog-message/components/confirm-dialog-message/confirm-dialog-message.component */ "./src/app/ui/modules/confirm-dialog-message/components/confirm-dialog-message/confirm-dialog-message.component.ts");
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




var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Release?<br><br> Note that all linked offers will be deleted too.<br><br>';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
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
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_message_components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogMessageComponent"], {
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
                _this.toastr.success(deletedMessageKey);
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

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div fxLayout=\"row\" class=\"max-width-75pct customized justify-content-space-between flex-grow-0 padding-bottom-25px\">\r\n    <span class=\"flex-grow-1\"></span>\r\n  </div>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n        <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n            <div [fxFlex]=\"50\" class=\"margin-right-35px\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Release Name</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"name\" required>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>SKU</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"sku\">\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Gender</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\r\n\r\n                    {{gender.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>              \r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Collection</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collectionId\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n\r\n                    {{collection.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Style</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"styleId\" required>\r\n\r\n                  <mat-option (click)=\"selectBrand('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"selectBrand(style.brand)\">\r\n\r\n                    {{style.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <div>\r\n\r\n                <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"hot\">Hot</mat-slide-toggle>\r\n\r\n              </div>\r\n              \r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\" class=\"margin-right-25px\">\r\n\r\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div [fxFlex]=\"40\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\" formControlName=\"releaseDate\" readonly=\"readonly\" (dateChange)=\"dateChanged($event)\">\r\n    \r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\r\n    \r\n                    <mat-datepicker #picker></mat-datepicker>\r\n    \r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"60\" class=\"\">\r\n\r\n                  <div>\r\n\r\n                    <mat-slide-toggle class=\"margin-left-10px padding-top-15px\" formControlName=\"notSchedule\" (click)=\"notSchedule()\">Not Schedule</mat-slide-toggle>\r\n    \r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>    \r\n              \r\n              <!--div>\r\n\r\n            <mat-checkbox class=\"padding-bottom-15px\" value=\"primary\" matTooltip=\"{{ 'Upcomming' | translate }}\">Upcoming</mat-checkbox>\r\n\r\n          </div-->\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Colors</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\" multiple>\r\n\r\n                  <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\r\n\r\n                    {{color.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Supplier Color</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"supplierColor\">\r\n\r\n              </mat-form-field>\r\n\r\n              <div [fxFlex]=\"100\" class=\"justify-content-space-between\" fxLayout=\"row\" fxLayout.lt-md=\"column\" *ngIf=\"!formGroup.get('customized').value\">\r\n\r\n                <div [fxFlex]=\"50\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-label>Price</mat-label>\r\n    \r\n                    <input matInput type=\"number\" formControlName=\"price\" required>\r\n    \r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"40\" class=\"margin-left-10px\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-select disableOptionCentering placeholder=\"Currency\" formControlName=\"currency\">\r\n\r\n                      <mat-option>...</mat-option>\r\n\r\n                      <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\r\n\r\n                        {{currenc.name}}\r\n\r\n                      </mat-option>\r\n\r\n                    </mat-select>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" matNativeControl [formControl]=\"selectedBrand\" required>\r\n\r\n                  <mat-option (click)=\"selectStyle('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectStyle(brand.id)\">\r\n\r\n                    {{brand.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"children\">Children</mat-slide-toggle-->\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div>\r\n\r\n            <mat-form-field class=\"width-100pc\" appearance=\"fill\">\r\n\r\n              <mat-label>Description</mat-label>\r\n\r\n              <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\r\n\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"margin-right-25px\">\r\n\r\n          <div>\r\n\r\n            <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"customized\">Customized</mat-slide-toggle>\r\n\r\n          </div>\r\n\r\n          <div [fxFlex]=\"50\" class=\"border max-width-480px margin-bottom-20px\">\r\n\r\n            <div class=\"display-flex justify-content-center\">\r\n\r\n              <h3 class=\"margin-buttom-0px\">Main Image</h3>\r\n\r\n            </div>\r\n\r\n            <images-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" name=\"faces\" (deletedFace)=\"onDeleteFace($event)\" [principal]=\"principal\"></images-card>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--div class=\"align-items-center padding-top-25px padding-bottom-25px\" [fxFlex]=\"100\"\r\n        fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"MakeANewOffer()\">Add an offer to this Release</button>\r\n\r\n      </div-->\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n        <offers-release-table [releaseId]=\"releaseId\" [offerId]=\"offerId\" [release]=\"data\" [collections]=\"collections\" [customized]=\"formGroup.get('customized').value\"\r\n          [shops]=\"shops\"></offers-release-table>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL2VkaXQtcmVsZWFzZS1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxlZGl0LXJlbGVhc2UtZm9ybVxcZWRpdC1yZWxlYXNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0U7SUFDSSw0QkFBMkIsRUFDOUIsRUFBQTs7QUFHSDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9lZGl0LXJlbGVhc2UtZm9ybS9lZGl0LXJlbGVhc2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgLmN1c3RvbWl6ZWQge1xyXG4gICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHgge1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/directives/images-card-edit-actions.directive */ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-shops/models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _ms_offers_services_offers_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ms-offers/services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ms-style/services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
    function EditReleaseFormComponent(dialog, brandsService, errorHandlingService, matDialogService, offersService, formBuilder, releasesService, releasesImgesService, stylesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.brandsService = brandsService;
        _this.errorHandlingService = errorHandlingService;
        _this.matDialogService = matDialogService;
        _this.offersService = offersService;
        _this.formBuilder = formBuilder;
        _this.releasesService = releasesService;
        _this.releasesImgesService = releasesImgesService;
        _this.stylesService = stylesService;
        _this.colors = _models_color__WEBPACK_IMPORTED_MODULE_9__["COLORS"];
        _this.displayedColumns = [
            'SKU',
            'COLLECTION',
            'COLOR',
            'SHOP',
            'STATUS',
            'SHIPING',
            'UPDATED',
            'ACTION'
        ];
        _this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_11__["GENDERS"];
        _this.caseProperties = [];
        _this.faceList = [];
        _this.imageList = [];
        _this.overview = false;
        _this.offers = [];
        _this.totalLength = 0;
        _this.selectedBrand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        _this.currency = _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_10__["CURRENCY"];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    EditReleaseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.imageList.forEach(function (image) {
            if (image.imgUrl === _this.data.mainImage) {
                _this.principal = image;
            }
        });
        this.createFormGroup();
    };
    EditReleaseFormComponent.prototype.ngAfterViewInit = function () {
    };
    EditReleaseFormComponent.prototype.createFormGroup = function () {
        this.notScheduleFlag = this.data.releaseDate ? false : true;
        this.data.faces = this.imageList;
        this.faces = this.formBuilder.control(this.imageList);
        this.formGroup = this.formBuilder.group({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.sku),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            styleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.styleId),
            collectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.collectionId),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.children),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.gender),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.color ? this.data.color.split(',') : this.data.color),
            hot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.hot),
            releaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.releaseDate),
            supplierColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.supplierColor),
            notSchedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.notScheduleFlag),
            customized: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.customized),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.currency),
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
            var id = this.data.id;
            this.data = this.formGroup.value;
            this.data.id = id;
            this.data.notSchedule = this.data.releaseDate ? false : true;
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
    EditReleaseFormComponent.prototype.MakeANewOffer = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            panelClass: 'no-padding-dialog',
            data: {
                brands: this.brands,
                shops: this.shops,
                collections: this.collections,
                releaseId: this.releaseId,
                customized: this.formGroup.get('customized').value,
            }
        });
    };
    EditReleaseFormComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    EditReleaseFormComponent.prototype.selectStyle = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return style.brand === brandId;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    EditReleaseFormComponent.prototype.selectBrand = function (brandId) {
        if (brandId) {
            this.selectedBrand.setValue(brandId);
        }
    };
    EditReleaseFormComponent.prototype.notSchedule = function () {
        this.notScheduleFlag = !this.notScheduleFlag;
        if (this.notScheduleFlag) {
            this.formGroup.get('releaseDate').setValue(null);
        }
    };
    EditReleaseFormComponent.prototype.dateChanged = function () {
        if (this.notScheduleFlag) {
            this.notScheduleFlag = !this.notScheduleFlag;
            this.formGroup.get('notSchedule').setValue(this.notScheduleFlag);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "caseProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__["ImageCardEditActionDirective"])
    ], EditReleaseFormComponent.prototype, "imageCardEditAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditReleaseFormComponent.prototype, "overview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditReleaseFormComponent.prototype, "releaseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditReleaseFormComponent.prototype, "offerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditReleaseFormComponent.prototype, "uploadingImagesState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EditReleaseFormComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], EditReleaseFormComponent.prototype, "sort", void 0);
    EditReleaseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-release-form',
            template: __webpack_require__(/*! ./edit-release-form.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-release-form.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_14__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ms_offers_services_offers_service__WEBPACK_IMPORTED_MODULE_13__["OffersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_4__["ReleasesService"],
            _services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesImgesService"],
            _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_15__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], EditReleaseFormComponent);
    return EditReleaseFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT RELEASE</h1>\n<edit-release-form class=\"flex-grow-1\" *ngIf=\"data\"\n                [collections]=\"collections\"\n                [caseProperties]=\"caseProperties\"\n                [data]=\"data\"\n                [releaseId]=\"releaseId\"\n                [imageList]=\"imageList\"\n                [brands]=\"brands\"\n                [shops]=\"shops\"                \n                [overview]=\"false\"\n                (accept)=\"submit($event)\"\n                (cancel)=\"cancel()\"\n                [validationErrors]=\"validationErrors\"\n                [imageCardEditAction]=\"imageCardEditActionTemplate\"\n                (dataChange)=\"dataChanged()\">\n</edit-release-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL2VkaXQtcmVsZWFzZS1tb2RhbC9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1yZWxlYXNlc1xcY29tcG9uZW50c1xcZWRpdC1yZWxlYXNlLW1vZGFsXFxlZGl0LXJlbGVhc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9lZGl0LXJlbGVhc2UtbW9kYWwvZWRpdC1yZWxlYXNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditReleaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditReleaseModalComponent", function() { return EditReleaseModalComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//



//










var errorKey = 'Error';
var savedCaseMessageKey = 'Saved Changes';
var EditReleaseModalComponent = /** @class */ (function () {
    function EditReleaseModalComponent(releasesImgesService, activatedRoute, dialog, toastr, releasesService, router, errorHandlingService, translate, imagesService, dialogRef, dialogData) {
        this.releasesImgesService = releasesImgesService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.toastr = toastr;
        this.releasesService = releasesService;
        this.router = router;
        this.errorHandlingService = errorHandlingService;
        this.translate = translate;
        this.imagesService = imagesService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard';
        this.saveMessageKey = 'Discard Changes';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditReleaseModalComponent.prototype.ngAfterViewInit = function () {
    };
    EditReleaseModalComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.imageList = this.activatedRoute.snapshot.data.releaseAllImages;
        this.releaseId = this.activatedRoute.snapshot.data.releaseId;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.getCase();
        /*this.imageList.forEach((image) => {
          image.fileName = "";
        });*/
    };
    EditReleaseModalComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.editCase(data);
    };
    EditReleaseModalComponent.prototype.cancel = function () {
        this.close();
    };
    EditReleaseModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditReleaseModalComponent.prototype.getCase = function () {
        var _this = this;
        this.releasesService.getRelease(this.dialogData.releaseId).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.mainImage) {
                _this.imageList.forEach(function (image) {
                    image.fileName = "";
                    if (image.imgUrl === _this.data.mainImage) {
                        image.mainImage = true;
                    }
                });
            }
            _this.data.faces = _this.imageList;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditReleaseModalComponent.prototype.editCase = function (releaseData) {
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
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Status"].Uploading;
                    if (face.mainImage === true) {
                        mainImageFlag = true;
                        this.imagesService.postImage(face.file).subscribe(function (response) {
                            var image = new _models_releases__WEBPACK_IMPORTED_MODULE_13__["ReleaseImage"];
                            image.imgUrl = response.data.url;
                            //releaseData.images = [...releaseData.images, image];
                            var mainImage = {
                                mainImage: image.imgUrl
                            };
                            _this.releasesImgesService.patchReleaseMainImage(_this.releaseId, mainImage).subscribe(function (response) {
                                console.log("new principal");
                            }, function (error) {
                                _this.errorHandlingService.handleUiError(errorKey, error);
                                _this.validationErrors = error.formErrors;
                            });
                            _this.releasesImgesService.postReleaseImage(_this.releaseId, image).subscribe(function (response) {
                                console.log("salvando imagenes");
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
                        var subscription$ = this.imagesService.postImage(face.file);
                        imagesObservables.push(subscription$);
                    }
                    addedFaces.push(face);
                }
                else if (face.mainImage === true) {
                    mainImageFlag = true;
                    var mainImage = {
                        mainImage: face.imgUrl
                    };
                    releaseData.mainImage = face.imgUrl;
                    /*this.releasesImgesService.patchReleaseMainImage(this.releaseId, mainImage).subscribe(response => {
                      console.log("old principal");
                    });*/
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
                    if (!mainImageFlag) {
                        releaseData.mainImage = "";
                    }
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
                if (!mainImageFlag) {
                    releaseData.mainImage = "";
                }
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
    ], EditReleaseModalComponent.prototype, "galleries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditReleaseModalComponent.prototype, "caseProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_14__["ImageCardEditActionDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", Object)
    ], EditReleaseModalComponent.prototype, "imageCardEditActionTemplate", void 0);
    EditReleaseModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-release-modal',
            template: __webpack_require__(/*! ./edit-release-modal.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-release-modal.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_12__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_11__["CanDeactivateMixin"]]),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesImgesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_6__["ReleasesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__["ImagesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditReleaseModalComponent);
    return EditReleaseModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT RELEASE</h1>\n<edit-release-form class=\"flex-grow-1\" *ngIf=\"data\"\n                [collections]=\"collections\"\n                [caseProperties]=\"caseProperties\"\n                [data]=\"data\"\n                [releaseId]=\"releaseId\"\n                [styles]=\"styles\"\n                [offerId]=\"offerId\"\n                [imageList]=\"imageList\"\n                [brands]=\"brands\"\n                [shops]=\"shops\"                \n                [overview]=\"false\"\n                (accept)=\"submit($event)\"\n                (cancel)=\"cancel()\"\n                [validationErrors]=\"validationErrors\"\n                [imageCardEditAction]=\"imageCardEditActionTemplate\"\n                (dataChange)=\"dataChanged()\">\n</edit-release-form>\n"

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
    function EditReleaseComponent(releasesImgesService, activatedRoute, dialog, toastr, releasesService, router, errorHandlingService, translate, imagesService) {
        this.releasesImgesService = releasesImgesService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.toastr = toastr;
        this.releasesService = releasesService;
        this.router = router;
        this.errorHandlingService = errorHandlingService;
        this.translate = translate;
        this.imagesService = imagesService;
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
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.imageList = this.activatedRoute.snapshot.data.releaseAllImages;
        this.releaseId = this.activatedRoute.snapshot.data.releaseId;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.getCase();
        this.offerId = this.activatedRoute.snapshot.queryParams.offerId;
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
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
        if (this.returnUrl && this.returnUrl.length > 0) {
            this.router.navigateByUrl(this.returnUrl);
        }
        else {
            this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
        }
    };
    EditReleaseComponent.prototype.getCase = function () {
        var _this = this;
        this.releasesService.getRelease(this.releaseId).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.mainImage) {
                _this.imageList.forEach(function (image) {
                    image.fileName = "";
                    if (image.imgUrl === _this.data.mainImage) {
                        image.mainImage = true;
                    }
                });
            }
            _this.data.faces = _this.imageList;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditReleaseComponent.prototype.editCase = function (releaseData) {
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
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Status"].Uploading;
                    if (face.mainImage === true) {
                        mainImageFlag = true;
                        this.imagesService.postImage(face.file).subscribe(function (response) {
                            var image = new _models_releases__WEBPACK_IMPORTED_MODULE_13__["ReleaseImage"];
                            image.imgUrl = response.data.url;
                            //releaseData.images = [...releaseData.images, image];
                            var mainImage = {
                                mainImage: image.imgUrl
                            };
                            _this.releasesImgesService.patchReleaseMainImage(_this.releaseId, mainImage).subscribe(function (response) {
                                console.log("new principal");
                            }, function (error) {
                                _this.errorHandlingService.handleUiError(errorKey, error);
                                _this.validationErrors = error.formErrors;
                            });
                            _this.releasesImgesService.postReleaseImage(_this.releaseId, image).subscribe(function (response) {
                                console.log("salvando imagenes");
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
                        var subscription$ = this.imagesService.postImage(face.file);
                        imagesObservables.push(subscription$);
                    }
                    addedFaces.push(face);
                }
                else if (face.mainImage === true) {
                    mainImageFlag = true;
                    var mainImage = {
                        mainImage: face.imgUrl
                    };
                    releaseData.mainImage = face.imgUrl;
                    /*this.releasesImgesService.patchReleaseMainImage(this.releaseId, mainImage).subscribe(response => {
                      console.log("old principal");
                    });*/
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
                    if (!mainImageFlag) {
                        releaseData.mainImage = "";
                    }
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
                if (!mainImageFlag) {
                    releaseData.mainImage = "";
                }
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
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_6__["ReleasesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__["ImagesService"]])
    ], EditReleaseComponent);
    return EditReleaseComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<release-form class=\"flex-grow-1\"\n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [collections]=\"dialogData.collections\"\n    [collectionId]=\"dialogData.collectionId\"\n    [styles]=\"dialogData.styles\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</release-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL25ldy1yZWxlYXNlLW1vZGFsL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxuZXctcmVsZWFzZS1tb2RhbFxcbmV3LXJlbGVhc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL25ldy1yZWxlYXNlLW1vZGFsL25ldy1yZWxlYXNlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: NewReleaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReleaseModalComponent", function() { return NewReleaseModalComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//



//








var errorKey = 'Error';
var savedUserMessageKey = 'Saved User Message';
var NewReleaseModalComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewReleaseModalComponent(activatedRoute, releasesService, releasesImgesService, errorHandlingService, imagesService, router, translate, toastr, dialog, dialogRef, dialogData) {
        this.activatedRoute = activatedRoute;
        this.releasesService = releasesService;
        this.releasesImgesService = releasesImgesService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.data = {
            name: "",
            description: "",
            sku: "",
            hot: false,
            customized: false,
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewReleaseModalComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
    };
    NewReleaseModalComponent.prototype.submit = function (data) {
        this.createRelease(data);
    };
    NewReleaseModalComponent.prototype.cancel = function () {
        this.close();
    };
    NewReleaseModalComponent.prototype.close = function (id) {
        this.dialogRef.close(id);
    };
    NewReleaseModalComponent.prototype.createRelease = function (releaseData) {
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
                    _this.close(_this.releaseId);
                    _this.toastr.success((savedUserMessageKey));
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
            else {
                _this.close(_this.releaseId);
            }
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewReleaseModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-release-modal',
            template: __webpack_require__(/*! ./new-release-modal.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.html"),
            styles: [__webpack_require__(/*! ./new-release-modal.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_11__["ReleasesService"],
            _services_releases_images_service__WEBPACK_IMPORTED_MODULE_12__["ReleasesImgesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], NewReleaseModalComponent);
    return NewReleaseModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<release-form class=\"flex-grow-1\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [styles]=\"styles\"\n    [styleId]=\"styleId\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</release-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL25ldy1yZWxlYXNlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxuZXctcmVsZWFzZVxcbmV3LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL25ldy1yZWxlYXNlL25ldy1yZWxlYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

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
            styleId: "styleId",
            hot: false,
            customized: false,
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
        this.styles = this.activatedRoute.snapshot.data.styles;
        //this.styleId = this.activatedRoute.snapshot.queryParams.styleId;
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
        this.styleId = this.activatedRoute.snapshot.queryParams['styleId'];
    };
    NewReleaseComponent.prototype.submit = function (data) {
        this.createRelease(data);
    };
    NewReleaseComponent.prototype.cancel = function () {
        this.close();
    };
    NewReleaseComponent.prototype.close = function () {
        if (this.returnUrl && this.returnUrl.length > 0) {
            this.router.navigateByUrl(this.returnUrl);
        }
        else {
            this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
        }
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
            _this.errorHandlingService.handleUiError(errorKey, error, 'release');
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

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div fxLayout=\"row\" class=\"max-width-75pct customized justify-content-space-between flex-grow-0 padding-bottom-10px\">\r\n    <h1 *ngIf=\"!formGroup.get('customized').value\">RELEASE CREATOR</h1>\r\n    <h1 *ngIf=\"formGroup.get('customized').value\">CUSTOMIZED RELEASE</h1>\r\n\r\n  </div>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n        <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n            <div [fxFlex]=\"50\" class=\"margin-right-35px\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Release Name</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"name\" required>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>SKU</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"sku\">\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Gender</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\r\n\r\n                    {{gender.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\" *ngIf=\"!collectionId\">\r\n\r\n                <mat-label>Collection</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collectionId\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n\r\n                    {{collection.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n\r\n              <mat-form-field class=\"width-100pc\" *ngIf=\"!styleId\">\r\n\r\n                <mat-label>Style</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"styleId\" required>\r\n\r\n                  <mat-option (click)=\"selectBrand('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\" (click)=\"selectBrand(style.brand)\">\r\n\r\n                    {{style.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <div>\r\n\r\n                <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"hot\">Hot</mat-slide-toggle>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\" class=\"\">\r\n\r\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div [fxFlex]=\"40\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\" formControlName=\"releaseDate\" readonly=\"readonly\" (dateChange)=\"dateChanged($event)\">\r\n    \r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\r\n    \r\n                    <mat-datepicker #picker></mat-datepicker>\r\n    \r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"60\" class=\"\">\r\n\r\n                  <div>\r\n\r\n                    <mat-slide-toggle class=\"margin-left-10px padding-top-15px\" formControlName=\"notSchedule\" (click)=\"notSchedule()\">Not Schedule</mat-slide-toggle>\r\n    \r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>    \r\n\r\n              <!--div>\r\n\r\n            <mat-checkbox class=\"padding-bottom-15px\" value=\"primary\" matTooltip=\"{{ 'Upcomming' | translate }}\">Upcoming</mat-checkbox>\r\n\r\n          </div-->\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Colors</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\" multiple required>\r\n\r\n                  <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\r\n\r\n                    {{color.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Supplier Color</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"supplierColor\">\r\n\r\n              </mat-form-field>\r\n\r\n              <div [fxFlex]=\"100\" class=\"justify-content-space-between\" fxLayout=\"row\" fxLayout.lt-md=\"column\" *ngIf=\"!formGroup.get('customized').value\">\r\n\r\n                <div [fxFlex]=\"50\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-label>Price</mat-label>\r\n    \r\n                    <input matInput type=\"number\" formControlName=\"price\" required>\r\n    \r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"40\" class=\"margin-left-10px\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-select disableOptionCentering placeholder=\"Currency\" formControlName=\"currency\">\r\n\r\n                      <mat-option>...</mat-option>\r\n\r\n                      <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\r\n\r\n                        {{currenc.name}}\r\n\r\n                      </mat-option>\r\n\r\n                    </mat-select>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n              </div>\r\n              \r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" matNativeControl [formControl]=\"selectedBrand\" required>\r\n\r\n                  <mat-option (click)=\"selectStyle('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectStyle(brand.id)\">\r\n\r\n                    {{brand.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"children\">Children</mat-slide-toggle-->\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <mat-form-field class=\"width-100pc\" appearance=\"fill\">\r\n\r\n            <mat-label>Description</mat-label>\r\n\r\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\r\n\r\n          </mat-form-field>\r\n\r\n\r\n\r\n        </div>\r\n        <div [fxFlex]=\"50\" class=\"margin-right-25px\">\r\n          <div>\r\n            <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"customized\">Customized</mat-slide-toggle>\r\n          </div>\r\n          <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px margin-bottom-20px\">\r\n            <div class=\"display-flex justify-content-center\">\r\n              <h3 class=\"margin-buttom-0px\">Main Image</h3>\r\n            </div>\r\n            <images-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" name=\"faces\"></images-card>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</form>\r\n<http-request-indicator [urlExpressions]=\"[\r\n      configService.config.apiConfigs.releases.apiEndpoint + '.*']\">\r\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2UtZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1yZWxlYXNlc1xcY29tcG9uZW50c1xccmVsZWFzZS1mb3JtXFxyZWxlYXNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0k7SUFDSSw0QkFBMkIsRUFDOUIsRUFBQTs7QUFHTDtFQUNJLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtcmVsZWFzZXMvY29tcG9uZW50cy9yZWxlYXNlLWZvcm0vcmVsZWFzZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweCB7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBjIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgLmN1c3RvbWl6ZWQge1xyXG4gICAgICAgIG1heC13aWR0aDogNDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-shops/models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ms-style/services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
    function ReleaseFormComponent(dialog, brandsService, configService, errorHandlingService, formBuilder, releasesService, stylesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.brandsService = brandsService;
        _this.configService = configService;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.releasesService = releasesService;
        _this.stylesService = stylesService;
        _this.currency = _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_7__["CURRENCY"];
        _this.displayedColumns = [
            'name',
            'description',
            'sku',
            'images',
            'gender',
            'hot',
            'actions',
        ];
        _this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_9__["GENDERS"];
        _this.colors = _models_color__WEBPACK_IMPORTED_MODULE_8__["COLORS"];
        _this.totalLength = 0;
        _this.releases = [];
        _this.selectedBrand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
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
        this.notScheduleFlag = this.data.releaseDate ? false : true;
        this.faces = this.formBuilder.control(this.data.faces);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.sku),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            styleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.styleId ? this.styleId : this.data.styleId),
            collectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.collectionId ? this.collectionId : this.data.collectionId),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.children),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.gender),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.color ? this.data.color.split(',') : this.data.color),
            hot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.hot),
            releaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.updatedAt),
            supplierColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.supplierColor),
            notSchedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.notScheduleFlag),
            customized: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.customized),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.currency),
        });
    };
    ReleaseFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data = this.formGroup.value;
            this.data.notSchedule = this.data.releaseDate ? false : true;
            try {
                this.data.color = this.data.color.join();
            }
            catch (_a) { }
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
        this.modalRef = this.dialog.open(_ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
        });
    };
    ReleaseFormComponent.prototype.selectStyle = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return style.brand === brandId;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    ReleaseFormComponent.prototype.selectBrand = function (brandId) {
        if (brandId) {
            this.selectedBrand.setValue(brandId);
        }
    };
    ReleaseFormComponent.prototype.notSchedule = function () {
        this.notScheduleFlag = !this.notScheduleFlag;
        if (this.notScheduleFlag) {
            this.formGroup.get('releaseDate').setValue(null);
        }
    };
    ReleaseFormComponent.prototype.dateChanged = function () {
        if (this.notScheduleFlag) {
            this.notScheduleFlag = !this.notScheduleFlag;
            this.formGroup.get('notSchedule').setValue(this.notScheduleFlag);
        }
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
        __metadata("design:type", String)
    ], ReleaseFormComponent.prototype, "collectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleaseFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReleaseFormComponent.prototype, "styleId", void 0);
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
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_6__["BrandsService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_10__["ReleasesService"],
            _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_13__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ReleaseFormComponent);
    return ReleaseFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n    <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"releases\" matSort [matSortActive]=\"releasesService.previousSortColumn\"\n        [matSortDirection]=\"releasesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                RELEASE NAME\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.name }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"mainImage\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\n                <div class=\"position-relative margin-top-5px\">\n                    <img [src]=\"element.mainImage\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\n                </div>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"sku\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                SKU\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"styleId\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                STYLE\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{ getStyle(element.styleId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"brandId\">\n            <th mat-header-cell *matHeaderCellDef>\n                BRAND\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getBrand(element.brandId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"collectionId\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLLECTION\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getCollection(element.collectionId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"categoryId\">\n            <th mat-header-cell *matHeaderCellDef>\n                CATEGORY\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.categoryId }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"color\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLOR\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"releaseDate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                OFFICIAL RELEASE\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.releaseDate? (element.releaseDate  | date: 'dd/MM/yyyy'): \"Not scheduled\" }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"createdAt\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                CREATION DATE\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.createdAt | date: 'dd/MM/yyyy HH:mm:ss' }} </td>\n        </ng-container>\n        <!--ng-container matColumnDef=\"HOT\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            HOT\n          </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.hot? 'Yes':'No' }} </td>\n      </ng-container-->\n\n        <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\n                <button mat-icon-button type=\"button\" color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editReleaseModal(element.id)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button type=\"button\" color=\"primary\" [matTooltip]=\"Delete\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n        </tr>\n\n    </table>\n\n</div>\n\n<div class=\"margin-right-25px flex-shrink-0 display-flex\">\n    <span class=\"flex-grow-1\"></span>\n    <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n        (page)=\"onPage()\">\n    </mat-paginator>\n</div>\n<div *ngIf=\"!disabled\" class=\"display-flex justify-content-end padding-right-25px padding-top-25px\">\n\n    <button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\" class=\"max-width-480px\" (click)=\"addNewReleaseModal()\">Add Release</button>\n\n</div>\n<http-request-indicator [urlExpressions]=\"[\n        configService.config.apiConfigs.releases.apiEndpoint + '.*']\">\n</http-request-indicator>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n.width-90pct {\n  width: 90% !important; }\n\n.width-100pct {\n  width: 100% !important; }\n\n.height-90pct {\n  height: 90% !important; }\n\n.height-100pct {\n  height: 100% !important; }\n\n.padding-left-0px {\n  padding-left: 0px !important; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2VzLWNvbGxlY3Rpb24tdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtcmVsZWFzZXNcXGNvbXBvbmVudHNcXHJlbGVhc2VzLWNvbGxlY3Rpb24tdGFibGVcXHJlbGVhc2VzLWNvbGxlY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksNkJBQ0osRUFBQzs7QUFFRDtFQUNJLHdCQUF1QjtFQUN2Qix3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXJlbGVhc2VzL2NvbXBvbmVudHMvcmVsZWFzZXMtY29sbGVjdGlvbi10YWJsZS9yZWxlYXNlcy1jb2xsZWN0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4ud2lkdGgtOTBwY3R7XHJcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3R7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTkwcGN0e1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0xMDBwY3R7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmctbGVmdC0wcHh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ReleasesCollectionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesCollectionTableComponent", function() { return ReleasesCollectionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-release-modal/new-release-modal.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.ts");
/* harmony import */ var _edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-release-modal/edit-release-modal.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.ts");
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
var messageKey = 'Are you sure you want to delete this Release?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var ReleasesCollectionTableComponent = /** @class */ (function () {
    function ReleasesCollectionTableComponent(activatedRoute, configService, dialog, errorHandlingService, releasesService) {
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.releasesService = releasesService;
        this.disabled = false;
        this.displayedColumns = [
            'name',
            'mainImage',
            'sku',
            'styleId',
            'brandId',
            'collectionId',
            'categoryId',
            'color',
            'releaseDate',
            'createdAt',
        ];
        this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_8__["GENDERS"];
        this.totalLength = 0;
        this.releases = [];
        this.newRelease = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReleasesCollectionTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadPage();
        //this.brands = this.activatedRoute.snapshot.data.brands;
        //this.collections = this.activatedRoute.snapshot.data.collections;
        //this.styles = this.activatedRoute.snapshot.data.styles;
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
    ReleasesCollectionTableComponent.prototype.ngAfterViewInit = function () {
        if (this.collectionId) {
            this.loadPage();
        }
    };
    ReleasesCollectionTableComponent.prototype.ngOnDestroy = function () {
        this.releasesList.unsubscribe();
        this.filterValueChanges.unsubscribe();
        this.releases = null;
    };
    ReleasesCollectionTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['collectionId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.collectionId);
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    ReleasesCollectionTableComponent.prototype.loadPage = function () {
        var _this = this;
        if (this.collectionId) {
            this.filter = this.createFilterFormGroup();
            this.releasesService.getReleases(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
                _this.releasesService.releasesList.next(response);
            }, function (err) {
                _this.errorHandlingService.handleUiError(errorKey, err);
            });
        }
        else {
            this.releases = [];
        }
    };
    ReleasesCollectionTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ReleasesCollectionTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ReleasesCollectionTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    ReleasesCollectionTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    ReleasesCollectionTableComponent.prototype.getCollection = function (id) {
        try {
            return this.collections.find(function (collection) {
                return collection.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    ReleasesCollectionTableComponent.prototype.getStyle = function (id) {
        try {
            return this.styles.find(function (style) {
                return style.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    ReleasesCollectionTableComponent.prototype.addNewReleaseModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_9__["NewReleaseModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                brands: this.brands,
                collectionId: this.collectionId,
                styles: this.styles
            }
        });
        this.modalRef.afterClosed().subscribe(function (newReleaseId) {
            console.log(newReleaseId);
            _this.newRelease.emit(newReleaseId);
            _this.loadPage();
        });
    };
    ReleasesCollectionTableComponent.prototype.editReleaseModal = function (releaseId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditReleaseModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                //shops: this.shops,
                collectionId: this.collectionId,
                releaseId: releaseId
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleasesCollectionTableComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleasesCollectionTableComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ReleasesCollectionTableComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReleasesCollectionTableComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReleasesCollectionTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReleasesCollectionTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReleasesCollectionTableComponent.prototype, "collectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReleasesCollectionTableComponent.prototype, "newRelease", void 0);
    ReleasesCollectionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'releases-collection-table',
            template: __webpack_require__(/*! ./releases-collection-table.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.html"),
            styles: [__webpack_require__(/*! ./releases-collection-table.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_7__["ReleasesService"]])
    ], ReleasesCollectionTableComponent);
    return ReleasesCollectionTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Releases Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n    [formGroup]=\"filter\">\n\n    <mat-icon matPrefix color=\"primary\">search</mat-icon>\n    <mat-form-field>\n        <input matInput formControlName=\"sku\" placeholder=\"SKU\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>RELEASE NAME</mat-label>\n        <input matInput formControlName=\"name\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>BRAND</mat-label>\n        <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\">\n            <mat-option>...</mat-option>\n            <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n                {{brand.name}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>COLLECTION</mat-label>\n        <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collectionId\">\n            <mat-option>...</mat-option>\n            <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n                {{collection.name}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>GENDER</mat-label>\n        <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"genderId\">\n            <mat-option>...</mat-option>\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n                {{gender.name}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n    <span class=\"flex-grow-1\"></span>\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW RELEASE</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n    <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"releases\" matSort [matSortActive]=\"releasesService.previousSortColumn\"\n        [matSortDirection]=\"releasesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n        <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                RELEASE NAME\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.name }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"mainImage\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\n                <div class=\"position-relative margin-top-5px\">\n                    <img [src]=\"element.mainImage\" class=\"margin-auto\" alt=\"50\">\n                </div>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"sku\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                SKU\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"styleId\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                STYLE\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getStyle(element.styleId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"brandId\">\n            <th mat-header-cell *matHeaderCellDef>\n                BRAND\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getBrand(element.brandId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"collectionId\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLLECTION\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getCollection(element.collectionId) }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"categoryId\">\n            <th mat-header-cell *matHeaderCellDef>\n                CATEGORY\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.categoryId }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"color\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                COLOR\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"releaseDate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                OFFICIAL RELEASE\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.releaseDate? (element.releaseDate | date: 'dd/MM/yyyy'): \"Not scheduled\" }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"createdAt\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                CREATION DATE\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.createdAt | date: 'MM/dd/yyyy HH:mm:ss': timeZoneOffset.toString() }} </td>\n        </ng-container>\n\n        <!--ng-container matColumnDef=\"HOT\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            HOT\n          </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.hot? 'Yes':'No' }} </td>\n      </ng-container-->\n\n        <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef>\n            </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\n                <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeReleaseModal(element.id)\">\n                    <mat-icon>remove_red_eye</mat-icon>\n                </button>\n                <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n        </tr>\n\n    </table>\n\n</div>\n\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n    <span class=\"flex-grow-1\"></span>\n    <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n        (page)=\"onPage()\">\n    </mat-paginator>\n</div>\n\n<http-request-indicator [urlExpressions]=\"[\n        configService.config.apiConfigs.releases.apiEndpoint + '.*']\">\n</http-request-indicator>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/releases-table/releases-table.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n.width-90pct {\n  width: 90% !important; }\n\n.width-100pct {\n  width: 100% !important; }\n\n.height-90pct {\n  height: 90% !important; }\n\n.height-100pct {\n  height: 100% !important; }\n\n.padding-left-0px {\n  padding-left: 0px !important; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3JlbGVhc2VzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxyZWxlYXNlcy10YWJsZVxccmVsZWFzZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksNkJBQ0osRUFBQzs7QUFFRDtFQUNJLHdCQUF1QjtFQUN2Qix3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXJlbGVhc2VzL2NvbXBvbmVudHMvcmVsZWFzZXMtdGFibGUvcmVsZWFzZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi53aWR0aC05MHBjdHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBjdHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWlnaHQtOTBwY3R7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTEwMHBjdHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LTBweHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _see_release_see_release_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../see-release/see-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.ts");
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
var timeZoneOffset = new Date().getTimezoneOffset();
var ReleasesTableComponent = /** @class */ (function () {
    function ReleasesTableComponent(dialog, activatedRoute, configService, errorHandlingService, releasesService) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        this.errorHandlingService = errorHandlingService;
        this.releasesService = releasesService;
        this.displayedColumns = [
            'name',
            'mainImage',
            'sku',
            'styleId',
            'brandId',
            'collectionId',
            'categoryId',
            'color',
            'releaseDate',
            'createdAt',
            'actions'
        ];
        this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_8__["GENDERS"];
        this.totalLength = 0;
        this.releases = [];
        this.timeZoneOffset = 60;
    }
    ReleasesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.imageList = this.activatedRoute.snapshot.data.releaseAllImages;
        this.shops = this.activatedRoute.snapshot.data.shops;
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
    ReleasesTableComponent.prototype.getCollection = function (id) {
        try {
            return this.collections.find(function (collection) {
                return collection.id === id;
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
    ReleasesTableComponent.prototype.seeReleaseModal = function (id) {
        var _this = this;
        this.releasesService.getRelease(id).subscribe(function (response) {
            _this.modalRef = _this.dialog.open(_see_release_see_release_component__WEBPACK_IMPORTED_MODULE_9__["SeeReleaseComponent"], {
                height: '90%',
                width: '95%',
                data: {
                    id: id,
                    styles: _this.styles,
                    brands: _this.brands,
                    collections: _this.collections,
                    data: response.data,
                    imageList: _this.imageList,
                    shops: _this.shops
                }
            });
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_7__["ReleasesService"]])
    ], ReleasesTableComponent);
    return ReleasesTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div fxLayout=\"row\" class=\"max-width-75pct customized justify-content-space-between flex-grow-0 padding-bottom-25px\">\r\n    <span class=\"flex-grow-1\"></span>\r\n  </div>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n        <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n            <div [fxFlex]=\"50\" class=\"margin-right-35px\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Release Name</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"name\" required readonly>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>SKU</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"sku\" readonly>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Gender</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\" [disabled]=\"true\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\r\n\r\n                    {{gender.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Collection</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collectionId\" [disabled]=\"true\">\r\n\r\n                  <mat-option>...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let collection of dialogData.collections\" [value]=\"collection.id\">\r\n\r\n                    {{collection.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Style</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"styleId\" required [disabled]=\"true\">\r\n\r\n                  <mat-option (click)=\"selectBrand('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let style of dialogData.styles\" [value]=\"style.id\" (click)=\"selectBrand(style.brand)\">\r\n\r\n                    {{style.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <div>\r\n\r\n                <div *ngIf=\"formGroup.get('hot').value\" class=\"display-flex\">\r\n\r\n                  <span class=\"padding-top-25px\">Hot</span>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\" class=\"padding-right-25px\">\r\n\r\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n\r\n                <div [fxFlex]=\"40\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\" formControlName=\"releaseDate\" readonly=\"readonly\" (dateChange)=\"dateChanged($event)\">\r\n\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" [disabled]=\"true\"></mat-datepicker-toggle>\r\n\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"60\" class=\"\">\r\n\r\n                  <div *ngIf=\"formGroup.get('notSchedule').value\" class=\"display-flex\">\r\n\r\n                    <span class=\"padding-top-25px\">Not Schedule</span>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <!--div>\r\n\r\n            <mat-checkbox class=\"padding-bottom-15px\" value=\"primary\" matTooltip=\"{{ 'Upcomming' | translate }}\">Upcoming</mat-checkbox>\r\n\r\n          </div-->\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Colors</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\" multiple [disabled]=\"true\">\r\n\r\n                  <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\r\n\r\n                    {{color.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Supplier Color</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"supplierColor\" readonly>\r\n\r\n              </mat-form-field>\r\n\r\n              <div [fxFlex]=\"100\" class=\"justify-content-space-between\" fxLayout=\"row\" fxLayout.lt-md=\"column\" *ngIf=\"!formGroup.get('customized').value\">\r\n\r\n                <div [fxFlex]=\"50\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-label>Price</mat-label>\r\n\r\n                    <input matInput type=\"number\" formControlName=\"price\" required readonly>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div [fxFlex]=\"40\" class=\"margin-left-10px\">\r\n\r\n                  <mat-form-field class=\"width-100pc\">\r\n\r\n                    <mat-select disableOptionCentering placeholder=\"Currency\" formControlName=\"currency\" [disabled]=\"true\">\r\n\r\n                      <mat-option>...</mat-option>\r\n\r\n                      <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\r\n\r\n                        {{currenc.name}}\r\n\r\n                      </mat-option>\r\n\r\n                    </mat-select>\r\n\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n\r\n                <mat-select disableOptionCentering placeholder=\"Select\" matNativeControl [formControl]=\"selectedBrand\" [disabled]=\"true\">\r\n\r\n                  <mat-option (click)=\"selectStyle('')\">...</mat-option>\r\n\r\n                  <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\" (click)=\"selectStyle(brand.id)\">\r\n\r\n                    {{brand.name}}\r\n\r\n                  </mat-option>\r\n\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n              <!--mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"children\">Children</mat-slide-toggle-->\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div>\r\n\r\n            <mat-form-field class=\"width-100pc padding-top-25px\" appearance=\"fill\">\r\n\r\n              <mat-label>Description</mat-label>\r\n\r\n              <textarea matInput formControlName=\"description\" class=\"min-height-100px\" readonly></textarea>\r\n\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"margin-right-25px\">\r\n\r\n          <div>\r\n\r\n            <div *ngIf=\"formGroup.get('customized').value\" class=\"display-flex\">\r\n\r\n              <span class=\"padding-top-25px\">Customized</span>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div [fxFlex]=\"50\" class=\"border max-width-480px margin-bottom-20px\">\r\n\r\n            <div class=\"display-flex justify-content-center\">\r\n\r\n              <h3 class=\"margin-buttom-0px\">Main Image</h3>\r\n\r\n            </div>\r\n\r\n            <images-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" name=\"faces\" (deletedFace)=\"onDeleteFace($event)\" [principal]=\"principal\"\r\n              [disabled]=\"true\"></images-card>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--div class=\"align-items-center padding-top-25px padding-bottom-25px\" [fxFlex]=\"100\"\r\n        fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"MakeANewOffer()\">Add an offer to this Release</button>\r\n\r\n      </div-->\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n        <div>\r\n          <h3>Linked Offers</h3>\r\n        </div>\r\n\r\n        <offers-release-table [releaseId]=\"dialogData.id\" [offerId]=\"dialogData.offerId\" [release]=\"dialogData.data\" [collections]=\"dialogData.collections\"\r\n          [customized]=\"formGroup.get('customized').value\" [disabled]=\"true\" [shops]=\"dialogData.shops\"></offers-release-table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" (click)=\"close()\">{{ 'Close' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n:host {\n  display: flex;\n  flex-direction: column; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1yZWxlYXNlcy9jb21wb25lbnRzL3NlZS1yZWxlYXNlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXJlbGVhc2VzXFxjb21wb25lbnRzXFxzZWUtcmVsZWFzZVxcc2VlLXJlbGVhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBR0g7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXJlbGVhc2VzL2NvbXBvbmVudHMvc2VlLXJlbGVhc2Uvc2VlLXJlbGVhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTYwLXBjdHtcclxuICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAuY3VzdG9taXplZCB7XHJcbiAgICAgIG1heC13aWR0aDogNDgwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweCB7XHJcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SeeReleaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeReleaseComponent", function() { return SeeReleaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_releases_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/releases-images.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/directives/images-card-edit-actions.directive */ "./src/app/ui/modules/images-card/directives/images-card-edit-actions.directive.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _models_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/color */ "./src/app/ms-back-office/modules/ms-releases/models/color.ts");
/* harmony import */ var _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-shops/models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_gender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/gender */ "./src/app/ms-back-office/modules/ms-releases/models/gender.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _ms_offers_services_offers_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ms-offers/services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ms-style/services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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















var errorKey = 'Error';
var SeeReleaseComponent = /** @class */ (function (_super) {
    __extends(SeeReleaseComponent, _super);
    function SeeReleaseComponent(dialog, brandsService, errorHandlingService, matDialogService, offersService, formBuilder, releasesService, releasesImgesService, stylesService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.brandsService = brandsService;
        _this.errorHandlingService = errorHandlingService;
        _this.matDialogService = matDialogService;
        _this.offersService = offersService;
        _this.formBuilder = formBuilder;
        _this.releasesService = releasesService;
        _this.releasesImgesService = releasesImgesService;
        _this.stylesService = stylesService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.colors = _models_color__WEBPACK_IMPORTED_MODULE_9__["COLORS"];
        _this.displayedColumns = [
            'SKU',
            'COLLECTION',
            'COLOR',
            'SHOP',
            'STATUS',
            'SHIPING',
            'UPDATED',
            'ACTION'
        ];
        _this.genders = _models_gender__WEBPACK_IMPORTED_MODULE_11__["GENDERS"];
        _this.caseProperties = [];
        _this.faceList = [];
        _this.imageList = [];
        _this.overview = false;
        _this.offers = [];
        _this.totalLength = 0;
        _this.selectedBrand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        _this.currency = _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_10__["CURRENCY"];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeeReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this.dialogData.shops;
        this.collections = this.dialogData.collections;
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.imageList.forEach(function (image) {
            if (image.imgUrl === _this.dialogData.data.mainImage) {
                _this.principal = image;
            }
        });
        this.createFormGroup();
        this.releasesService.getRelease(this.dialogData.id).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.mainImage) {
                _this.imageList.forEach(function (image) {
                    image.fileName = "";
                    if (image.imgUrl === _this.data.mainImage) {
                        image.mainImage = true;
                    }
                });
            }
            _this.dialogData.data.faces = _this.imageList;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    SeeReleaseComponent.prototype.ngAfterViewInit = function () {
    };
    SeeReleaseComponent.prototype.createFormGroup = function () {
        this.notScheduleFlag = this.dialogData.data.releaseDate ? false : true;
        this.dialogData.data.faces = this.imageList;
        this.faces = this.formBuilder.control(this.imageList);
        this.formGroup = this.formBuilder.group({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.sku),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.description),
            styleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.styleId),
            collectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.collectionId),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.children),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.gender),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.price),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.color ? this.dialogData.data.color.split(',') : this.dialogData.data.color),
            hot: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.hot),
            releaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.releaseDate),
            supplierColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.supplierColor),
            notSchedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.notScheduleFlag),
            customized: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.customized),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.currency),
        });
    };
    SeeReleaseComponent.prototype.onDeleteFace = function (face) {
        var _this = this;
        if (face.id) {
            this.releasesImgesService.deleteReleaseImage(this.data.id, face.id).subscribe(function (response) {
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }
    };
    SeeReleaseComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            var id = this.data.id;
            this.data = this.formGroup.value;
            this.data.id = id;
            this.data.notSchedule = this.data.releaseDate ? false : true;
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
    SeeReleaseComponent.prototype.MakeANewOffer = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_12__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            panelClass: 'no-padding-dialog',
            data: {
                brands: this.brands,
                shops: this.shops,
                collections: this.collections,
                releaseId: this.releaseId,
                customized: this.formGroup.get('customized').value,
            }
        });
    };
    SeeReleaseComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    SeeReleaseComponent.prototype.selectStyle = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return style.brand === brandId;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    SeeReleaseComponent.prototype.selectBrand = function (brandId) {
        if (brandId) {
            this.selectedBrand.setValue(brandId);
        }
    };
    SeeReleaseComponent.prototype.notSchedule = function () {
        this.notScheduleFlag = !this.notScheduleFlag;
        if (this.notScheduleFlag) {
            this.formGroup.get('releaseDate').setValue(null);
        }
    };
    SeeReleaseComponent.prototype.dateChanged = function () {
        if (this.notScheduleFlag) {
            this.notScheduleFlag = !this.notScheduleFlag;
            this.formGroup.get('notSchedule').setValue(this.notScheduleFlag);
        }
    };
    SeeReleaseComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "caseProperties", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_directives_images_card_edit_actions_directive__WEBPACK_IMPORTED_MODULE_7__["ImageCardEditActionDirective"])
    ], SeeReleaseComponent.prototype, "imageCardEditAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SeeReleaseComponent.prototype, "overview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeeReleaseComponent.prototype, "releaseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeeReleaseComponent.prototype, "offerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SeeReleaseComponent.prototype, "uploadingImagesState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeReleaseComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SeeReleaseComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SeeReleaseComponent.prototype, "sort", void 0);
    SeeReleaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-release',
            template: __webpack_require__(/*! ./see-release.component.html */ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.html"),
            styles: [__webpack_require__(/*! ./see-release.component.scss */ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.scss")],
        }),
        __param(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_14__["BrandsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ms_offers_services_offers_service__WEBPACK_IMPORTED_MODULE_13__["OffersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_releases_service__WEBPACK_IMPORTED_MODULE_4__["ReleasesService"],
            _services_releases_images_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesImgesService"],
            _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_15__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SeeReleaseComponent);
    return SeeReleaseComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



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
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_images_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-releases/services/releases-images-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-images-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
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
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_12__["CategoriesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_11__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_8__["ShopsResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_4__["NewReleaseComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_12__["CategoriesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_11__["StylesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_3__["EditReleaseComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            releaseId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_13__["IdResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsResolveService"],
            releaseAllImages: _ms_releases_services_releases_images_resolve_service__WEBPACK_IMPORTED_MODULE_10__["ReleaseAllImagesResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_12__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_11__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_8__["ShopsResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_2__["DeleteReleaseComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            releaseId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_13__["IdResolveService"],
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
/* harmony import */ var _components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/releases-collection-table/releases-collection-table.component */ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.ts");
/* harmony import */ var _ms_releases_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ms-releases-routing.module */ "./src/app/ms-back-office/modules/ms-releases/ms-releases-routing.module.ts");
/* harmony import */ var _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/release-form/release-form.component */ "./src/app/ms-back-office/modules/ms-releases/components/release-form/release-form.component.ts");
/* harmony import */ var _components_see_release_see_release_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/see-release/see-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/see-release/see-release.component.ts");
/* harmony import */ var _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/new-release/new-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release/new-release.component.ts");
/* harmony import */ var _components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-release-modal/new-release-modal.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.ts");
/* harmony import */ var _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-release/edit-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release/edit-release.component.ts");
/* harmony import */ var _components_edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-release-modal/edit-release-modal.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-modal/edit-release-modal.component.ts");
/* harmony import */ var _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/edit-release-form/edit-release-form.component */ "./src/app/ms-back-office/modules/ms-releases/components/edit-release-form/edit-release-form.component.ts");
/* harmony import */ var _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/delete-release/delete-release.component */ "./src/app/ms-back-office/modules/ms-releases/components/delete-release/delete-release.component.ts");
/* harmony import */ var _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../ms-offers/ms-offers.module */ "./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts");
/* harmony import */ var _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../ms-offers/components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
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
                _ms_releases_routing_module__WEBPACK_IMPORTED_MODULE_20__["MsReleasesRoutingModule"],
                //
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__["AskBeforeRefreshModule"],
                _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_16__["ErrorMessagesModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_14__["HttpRequestIndicatorModule"],
                _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_17__["ImagesCardModule"],
                _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_29__["MsOffersModule"]
            ],
            declarations: [
                _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_28__["DeleteReleaseComponent"],
                _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_25__["EditReleaseComponent"],
                _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_27__["EditReleaseFormComponent"],
                _components_edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_26__["EditReleaseModalComponent"],
                _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_23__["NewReleaseComponent"],
                _components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_24__["NewReleaseModalComponent"],
                _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_21__["ReleaseFormComponent"],
                _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_18__["ReleasesTableComponent"],
                _components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_19__["ReleasesCollectionTableComponent"],
                _components_see_release_see_release_component__WEBPACK_IMPORTED_MODULE_22__["SeeReleaseComponent"]
            ],
            exports: [
                _components_delete_release_delete_release_component__WEBPACK_IMPORTED_MODULE_28__["DeleteReleaseComponent"],
                _components_edit_release_edit_release_component__WEBPACK_IMPORTED_MODULE_25__["EditReleaseComponent"],
                _components_edit_release_form_edit_release_form_component__WEBPACK_IMPORTED_MODULE_27__["EditReleaseFormComponent"],
                _components_edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_26__["EditReleaseModalComponent"],
                _components_new_release_new_release_component__WEBPACK_IMPORTED_MODULE_23__["NewReleaseComponent"],
                _components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_24__["NewReleaseModalComponent"],
                _components_release_form_release_form_component__WEBPACK_IMPORTED_MODULE_21__["ReleaseFormComponent"],
                _components_releases_table_releases_table_component__WEBPACK_IMPORTED_MODULE_18__["ReleasesTableComponent"],
                _components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_19__["ReleasesCollectionTableComponent"],
                _components_see_release_see_release_component__WEBPACK_IMPORTED_MODULE_22__["SeeReleaseComponent"]
            ],
            entryComponents: [
                _ms_offers_components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_30__["NewOfferComponent"],
                _components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_24__["NewReleaseModalComponent"],
                _components_edit_release_modal_edit_release_modal_component__WEBPACK_IMPORTED_MODULE_26__["EditReleaseModalComponent"],
                _components_see_release_see_release_component__WEBPACK_IMPORTED_MODULE_22__["SeeReleaseComponent"]
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



/***/ })

}]);
//# sourceMappingURL=default~ms-collections-ms-collections-module~ms-releases-ms-releases-module.js.map