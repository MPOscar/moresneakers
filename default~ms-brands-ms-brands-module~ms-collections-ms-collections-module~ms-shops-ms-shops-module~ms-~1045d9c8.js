(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-shops-ms-shops-module~ms-~1045d9c8"],{

/***/ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9kZWxldGUtc2hvcC9kZWxldGUtc2hvcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteShopComponent", function() { return DeleteShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
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
var messageKey = 'Are you sure you want to delete this Shop?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteShopComponent = /** @class */ (function () {
    function DeleteShopComponent(activatedRoute, dialog, shopsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.shopsService = shopsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteShopComponent.prototype.ngAfterViewInit = function () {
        this.getShop();
    };
    DeleteShopComponent.prototype.ngOnInit = function () {
        this.shopId = this.activatedRoute.snapshot.data.shopId;
    };
    DeleteShopComponent.prototype.getShop = function () {
        var _this = this;
        this.shopsService.getShop(this.shopId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteShop();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteShopComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteShopComponent.prototype.confirmDeleteShop = function () {
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
                _this.deleteShop();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteShopComponent.prototype.deleteShop = function () {
        var _this = this;
        this.shopsService.deleteShop(this.data.id).subscribe(function (response) {
            _this.shopsService.reloadShops().subscribe(function (response) {
                _this.shopsService.shopsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-shop',
            template: __webpack_require__(/*! ./delete-shop.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.html"),
            styles: [__webpack_require__(/*! ./delete-shop.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_7__["ShopsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteShopComponent);
    return DeleteShopComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <mat-tab-group>\n\n    <mat-tab label=\"Shop\">\n\n      <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n          <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n            <div [fxFlex]=\"25\">\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Shop Name</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"name\" required>\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Traking list base URL</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"trackingListBaseUrl\">\n\n              </mat-form-field>\n\n              <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Collection</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"collection\">\n\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n\n                {{collection.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Description</mat-label>\n\n                <textarea matInput formControlName=\"description\"></textarea>\n\n              </mat-form-field>\n\n              <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Gender</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"gender\">\n\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n\n                {{gender.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Address</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"address\">\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Shipping Details</mat-label>\n\n                <textarea matInput formControlName=\"shippingDetails\"></textarea>\n\n              </mat-form-field>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-90pct\">\n\n                    <mat-select placeholder=\"Region\" formControlName=\"region\">\n\n                      <mat-option *ngFor=\"let region of regions\" [value]=\"region.id\">\n\n                        {{region.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"50\" class=\"\">\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select placeholder=\"Country\" formControlName=\"country\">\n\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                        {{country.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-90pct\">\n\n                    <mat-select placeholder=\"Rank\" formControlName=\"rank\">\n\n                      <mat-option *ngFor=\"let rank_ of rank\" [value]=\"rank_.value\">\n\n                        {{rank_.value}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"50\" class=\"\">\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select placeholder=\"Currency\" formControlName=\"currency\">\n\n                      <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\n\n                        {{currenc.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div [fxFlex]=\"25\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select placeholder=\"Select Brand\" formControlName=\"brand\" multiple>\n\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                    {{brand.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select placeholder=\"Select Category\" formControlName=\"category\" multiple>\n\n                  <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n\n                    {{category.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <div>\n\n                <mat-slide-toggle formControlName=\"makeDeal\" class=\"margin-bottom-25px margin-top-25px\">Hot</mat-slide-toggle>\n\n              </div>\n              <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Color</mat-label>\n\n            <mat-select placeholder=\"Select\" formControlName=\"color\">\n\n              <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\n\n                {{color.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n              <!--mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Suplied Color</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"supliedColor\">\n\n          </mat-form-field>\n\n          <mat-slide-toggle formControlName=\"children\">Children</mat-slide-toggle-->\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n              <div class=\"display-flex justify-content-center\">\n                <h3>Shop Logo</h3>\n              </div>\n\n              <images-card name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" (deletedFace)=\"onDeleteFace($event)\" [principal]=\"principal\"></images-card>\n\n            </div>\n\n          </div>\n          <div class=\"mb-20 color-material\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n\n            <div [fxFlex]=\"60\" fxLayout=\"column\" class=\"max-width-480px\">\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" class=\"margin-bottom-25px\">\n\n                <div [fxFlex]=\"70\">\n\n                  <h3>Working Hours</h3>\n\n                </div>\n\n                <div [fxFlex]=\"30\">\n\n                  <h5>Non-Working</h5>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Monday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\"/>\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\"/>\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Tuesday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Wednesday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Thursday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Friday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Saturday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div [fxFlex]=\"100\">\n\n                  Sunday\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                </div>\n\n                <div [fxFlex]=\"100\">\n\n                  <mat-checkbox></mat-checkbox>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n            <!--div [fxFlex]=\"60\" fxLayout=\"column\" class=\" margin-right-25px\">\n\n              <div [fxFlex]=\"\" fxLayout=\"row\" class=\"justify-content-space-between\">\n\n                <div>\n\n                  <mat-slide-toggle>Make Deal</mat-slide-toggle>\n\n                </div>\n\n                <div class=\"padding-bottom-10px\">\n\n                  <button type=\"button\" class=\"border-none border-radius-5px\" mat-stroked-button>\n                    \n                    Add a new Deal\n\n                    <mat-icon>add</mat-icon>\n\n                  </button>\n\n                </div>\n\n              </div>              \n\n            </div-->\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </mat-tab>\n\n    <mat-tab label=\"Deals\" class=\"width-50pc\">\n\n      <deals-shop-table [shopId]=\"shopId\" [dealId]=\"dealId\" class=\"padding-top-25px\"></deals-shop-table>\n\n    </mat-tab>\n\n  </mat-tab-group>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.mat-tab-header {\n  padding-bottom: 25px !important; }\n\n::ng-deep .mat-tab-label {\n  widows: 50% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2VkaXQtc2hvcC1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxlZGl0LXNob3AtZm9ybVxcZWRpdC1zaG9wLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdDQUErQixFQUNsQzs7QUFFRDtFQUNJLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9lZGl0LXNob3AtZm9ybS9lZGl0LXNob3AtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWhlYWRlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHtcclxuICAgIHdpZG93czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditShopFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopFormComponent", function() { return EditShopFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _models_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/country */ "./src/app/ms-back-office/modules/ms-shops/models/country.ts");
/* harmony import */ var _models_rank__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/rank */ "./src/app/ms-back-office/modules/ms-shops/models/rank.ts");
/* harmony import */ var _models_regions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/regions */ "./src/app/ms-back-office/modules/ms-shops/models/regions.ts");
/* harmony import */ var _services_shops_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/shops-images.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts");
/* harmony import */ var _shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
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
var EditShopFormComponent = /** @class */ (function (_super) {
    __extends(EditShopFormComponent, _super);
    function EditShopFormComponent(activatedRoute, dialog, errorHandlingService, formBuilder, shopsImgesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.activatedRoute = activatedRoute;
        _this.dialog = dialog;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.shopsImgesService = shopsImgesService;
        _this.currency = _models_currency__WEBPACK_IMPORTED_MODULE_6__["CURRENCY"];
        _this.countries = _models_country__WEBPACK_IMPORTED_MODULE_7__["COUNTRIES"];
        _this.regions = _models_regions__WEBPACK_IMPORTED_MODULE_9__["REGIONS"];
        _this.rank = _models_rank__WEBPACK_IMPORTED_MODULE_8__["RANK"];
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    EditShopFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.workingHours.forEach(function (workinHour) {
            //this.isLinked(shop.id);
            if (!workinHour.openHour && !workinHour.closeHour) {
                workinHour.notWorking = true;
            }
            else {
                workinHour.notWorking = false;
            }
        });
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.faceList.forEach(function (image) {
            if (image.imgUrl === _this.data.mainImage) {
                _this.principal = image;
            }
        });
        this.createFormGroup();
    };
    EditShopFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.address),
            shippingDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shippingDetails),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            makeDeal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.makeDeal),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.currency),
            rank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.rank),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.region),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.country),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
            trackingListBaseUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.trackingListBaseUrl),
            workingHours: this.formBuilder.array([
                this.formBuilder.group({
                    dayOfWeekMonday: 1,
                    openHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                    closeHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                    notWorkingMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                }),
                this.formBuilder.group({
                    dayOfWeekTuesday: 2,
                    openHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekWednesday: 3,
                    openHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekThursday: 4,
                    openHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekFriday: 5,
                    openHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekSaturday: 6,
                    openHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekSunday: 7,
                    openHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                })
            ]),
        });
    };
    EditShopFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.workingHours = this.formGroup.get('workingHours').value;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    EditShopFormComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_11__["ShopsSellingStyleModalComponent"], {
            height: '800px',
            width: '60%',
            data: { face: this.shop }
        });
    };
    EditShopFormComponent.prototype.onDeleteFace = function (face) {
        var _this = this;
        if (face.id) {
            this.shopsImgesService.deleteShopImage(this.data.id, face.id).subscribe(function (response) {
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }
    };
    EditShopFormComponent.prototype.buidlWorkingHours = function (workinHour) {
        workinHour[0];
        var realWorkinHours = [];
        var monday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        //monday
        console.log(workinHour[0]);
        monday.dayOfWeek = workinHour[0].dayOfWeekMonday;
        monday.openHour = workinHour[0].openHourMonday;
        monday.closeHour = workinHour[0].closeHourMonday;
        realWorkinHours = realWorkinHours.concat([monday]);
        //tuesday
        var tuesday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        tuesday.dayOfWeek = workinHour[1].dayOfWeekTuesday;
        tuesday.openHour = workinHour[1].openHourTuesday;
        tuesday.closeHour = workinHour[1].closeHourTuesday;
        realWorkinHours = realWorkinHours.concat([tuesday]);
        //wednesday
        var wednesday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        wednesday.dayOfWeek = workinHour[2].dayOfWeekWednesday;
        wednesday.openHour = workinHour[2].openHourWednesday;
        wednesday.closeHour = workinHour[2].closeHourWednesday;
        realWorkinHours = realWorkinHours.concat([wednesday]);
        //thursday
        var thursday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        thursday.dayOfWeek = workinHour[3].dayOfWeekThursday;
        thursday.openHour = workinHour[3].openHourThursday;
        thursday.closeHour = workinHour[3].closeHourThursday;
        realWorkinHours = realWorkinHours.concat([thursday]);
        //friday
        var friday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        friday.dayOfWeek = workinHour[4].dayOfWeekFriday;
        friday.openHour = workinHour[4].openHourFriday;
        friday.closeHour = workinHour[4].closeHourFriday;
        realWorkinHours = realWorkinHours.concat([friday]);
        //saturday
        var saturday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        saturday.dayOfWeek = workinHour[5].dayOfWeekSaturday;
        saturday.openHour = workinHour[5].openHourSaturday;
        saturday.closeHour = workinHour[5].closeHourSaturday;
        realWorkinHours = realWorkinHours.concat([saturday]);
        //sunday
        var sunday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        sunday.dayOfWeek = workinHour[6].dayOfWeekSunday;
        sunday.openHour = workinHour[6].openHourSunday;
        sunday.closeHour = workinHour[6].closeHourSunday;
        realWorkinHours = realWorkinHours.concat([sunday]);
        console.log(realWorkinHours);
        return realWorkinHours;
    };
    EditShopFormComponent.prototype.findWorkinHorsInData = function (day) {
        return this.data.workingHours.find(function (val) { return val.dayOfWeek === day; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditShopFormComponent.prototype, "shopId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditShopFormComponent.prototype, "dealId", void 0);
    EditShopFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-shop-form',
            template: __webpack_require__(/*! ./edit-shop-form.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-shop-form.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_shops_images_service__WEBPACK_IMPORTED_MODULE_10__["ShopsImgesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], EditShopFormComponent);
    return EditShopFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT SHOP</h1>\n\n<edit-shop-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [shopId]=\"shopId\"\n    [dealId]=\"dealId\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [faceList]=\"faceList\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</edit-shop-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2VkaXQtc2hvcC9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zaG9wc1xcY29tcG9uZW50c1xcZWRpdC1zaG9wXFxlZGl0LXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9lZGl0LXNob3AvZWRpdC1zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopComponent", function() { return EditShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_shops__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/shops */ "./src/app/ms-back-office/modules/ms-shops/models/shops.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _services_shops_images_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/shops-images.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
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
var updatedShopMessageKey = 'Updated';
var EditShopComponent = /** @class */ (function () {
    //@Output() close = new EventEmitter();
    function EditShopComponent(activatedRoute, dialog, shopsService, errorHandlingService, imagesService, shopsImgesService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.shopsService = shopsService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.shopsImgesService = shopsImgesService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.faceList = [];
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditShopComponent.prototype.ngOnInit = function () {
        this.shopId = this.activatedRoute.snapshot.data.shopId;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.faceList = this.activatedRoute.snapshot.data.shopAllImages;
        this.dealId = this.activatedRoute.snapshot.queryParams.dealId;
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
        /*this.shopsImgesService.getShopAllImages(this.shopId).subscribe(response => {
          this.faceList = response.data;
        },
          (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error)
        )*/
    };
    EditShopComponent.prototype.ngAfterViewInit = function () {
        this.getShop();
    };
    EditShopComponent.prototype.getShop = function () {
        var _this = this;
        this.shopsService.getShop(this.shopId).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.mainImage) {
                _this.faceList.forEach(function (image) {
                    image.fileName = "";
                    if (image.imgUrl === _this.data.mainImage) {
                        image.mainImage = true;
                    }
                });
            }
            _this.data.faces = _this.faceList;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditShopComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.editShop(data);
    };
    EditShopComponent.prototype.cancel = function () {
        this.close();
    };
    EditShopComponent.prototype.close = function () {
        if (this.returnUrl && this.returnUrl.length > 0) {
            this.router.navigateByUrl(this.returnUrl);
        }
        else {
            this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
        }
    };
    EditShopComponent.prototype.updateShop = function (data) {
        var _this = this;
        this.shopsService.putShop(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedShopMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditShopComponent.prototype.editShop = function (shopData) {
        var _this = this;
        var mainImageFlag = false;
        if (shopData !== undefined && shopData !== null) {
            // Saving the images of the case before saving the case
            shopData.images = [];
            var imagesObservables = new Array();
            var addedFaces = new Array();
            // Uploading the images to command and control server
            for (var position in shopData.faces) {
                var face = shopData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["State"].New) {
                    face.status = _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Status"].Uploading;
                    if (face.mainImage === true) {
                        mainImageFlag = true;
                        this.imagesService.postImage(face.file).subscribe(function (response) {
                            var image = new _models_shops__WEBPACK_IMPORTED_MODULE_10__["ShopImage"];
                            image.imgUrl = response.data.url;
                            //shopData.images = [...shopData.images, image];
                            var mainImage = {
                                mainImage: image.imgUrl
                            };
                            _this.shopsImgesService.patchShopMainImage(_this.shopId, mainImage).subscribe(function (response) {
                                console.log("new principal");
                            }, function (error) {
                                _this.errorHandlingService.handleUiError(errorKey, error);
                                _this.validationErrors = error.formErrors;
                            });
                            _this.shopsImgesService.postShopImage(_this.shopId, image).subscribe(function (response) {
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
                    shopData.mainImage = face.imgUrl;
                    /*this.shopsImgesService.patchShopMainImage(this.shopId, mainImage).subscribe(response => {
                      console.log("old principal");
                    });*/
                }
            }
            if (imagesObservables.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(imagesObservables).subscribe(function (responses) {
                    for (var item in responses) {
                        var image = new _models_shops__WEBPACK_IMPORTED_MODULE_10__["ShopImage"];
                        image.imgUrl = responses[item].data.url;
                        shopData.images = shopData.images.concat([image]);
                    }
                    _this.shopsImgesService.postShopImageAll(shopData.id, shopData.images).subscribe(function (response) {
                        console.log("salvando imagenes");
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                    if (!mainImageFlag) {
                        shopData.mainImage = "";
                    }
                    _this.shopsService.putShop(shopData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.data = response;
                        _this.translate.get(updatedShopMessageKey).subscribe(function (value) { return _this.toastr.success(value); });
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
                    shopData.mainImage = "";
                }
                this.shopsService.putShop(shopData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.data = response;
                    _this.translate.get(updatedShopMessageKey).subscribe(function (value) { return _this.toastr.success(value); });
                    _this.close();
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
    };
    EditShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-shop',
            template: __webpack_require__(/*! ./edit-shop.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.html"),
            styles: [__webpack_require__(/*! ./edit-shop.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_7__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_11__["ShopsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_13__["ImagesService"],
            _services_shops_images_service__WEBPACK_IMPORTED_MODULE_12__["ShopsImgesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], EditShopComponent);
    return EditShopComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtYnJhbmQvbGluay1zaG9wcy1icmFuZC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9saW5rLXNob3BzLWJyYW5kL2xpbmstc2hvcHMtYnJhbmQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxudGQubWF0LWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\r\n\r\n        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n          <mat-card *ngFor=\"let shop of dialogData.shops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n            <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n              <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n            </div>\r\n            <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n              <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n            </div>\r\n          </mat-card>\r\n          <!--/div-->\r\n        </div>\r\n\r\n        <!--div [fxFlex]=\"40\">\r\n          <h3>Stores Selling</h3>\r\n          <div fxLayout=\"column\" class=\"border flex-grow-1 overflow-auto display-flex \">\r\n\r\n            <table class=\"width-100pct\" mat-table [dataSource]=\"links\" matSort matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n              <ng-container matColumnDef=\"checkbox\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\"></mat-checkbox>\r\n                  </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"text\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Text\r\n                  <td mat-cell *matCellDef=\"let element\"> {{ element.text }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"url\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Url\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n              </tr>\r\n\r\n            </table>\r\n\r\n            <div class=\"margin-left-25px margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n              <mat-checkbox class=\"margin-top-10px margin-right-25px\" value=\"primary\" matTooltip=\"{{ 'Principal' | translate }}\">Check All</mat-checkbox>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n        </div-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"save()\">{{ 'Save Changes' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"onNoClick()\">{{ 'Close' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LinkShopsBrandModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkShopsBrandModalComponent", function() { return LinkShopsBrandModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
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


//import { setTranslations } from '@cognitec/ngx-translate';
//import { TRANSLATIONS } from './i18n/annotation-tool-modal.component.translations';

//import { Landmarks } from '../../models/landmarks';




//

var errorKey = 'Error';
var LinkShopsBrandModalComponent = /** @class */ (function () {
    function LinkShopsBrandModalComponent(element, breakpointObserver, dialogRef, errorHandlingService, toastr, translateService, brandsService, dialogData) {
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.brandsService = brandsService;
        this.dialogData = dialogData;
        this.displayedColumns = [
            'checkbox',
            'text',
            'url',
            'actions'
        ];
        this.links = [{ text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }];
        this.answer = false;
        this.flag = true;
        this.imageSrc = null;
        this.linkedShops = [];
        this.oldLinkedShops = [];
        //setTranslations(this.translateService, TRANSLATIONS);
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
            }
        });
    }
    LinkShopsBrandModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandsService.getBrandLinkedShops(this.dialogData.brandId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.dialogData.shops.forEach(function (shop) {
                console.log(JSON.stringify(_this.linkedShops));
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsBrandModalComponent.prototype.ngAfterViewInit = function () {
    };
    LinkShopsBrandModalComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    LinkShopsBrandModalComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    LinkShopsBrandModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LinkShopsBrandModalComponent.prototype.onNoClick = function () {
        this.close();
    };
    LinkShopsBrandModalComponent.prototype.linked = function (shop) {
        shop.linked = !shop.linked;
        if (shop.linked) {
            this.linkedShops = this.linkedShops.concat([shop.id]);
        }
        else {
            var indexLinked_1 = this.linkedShops.findIndex(function (val) { return val === shop.id; });
            if (indexLinked_1 > -1) {
                var linked_1 = [];
                this.linkedShops.forEach(function (shopId, index) {
                    if (index != indexLinked_1) {
                        linked_1 = linked_1.concat([shopId]);
                    }
                });
                this.linkedShops = linked_1;
            }
        }
    };
    LinkShopsBrandModalComponent.prototype.save = function () {
        var _this = this;
        this.brandsService.postBrandLinkedShops(this.dialogData.brandId, this.linkedShops).subscribe(function (response) {
            _this.close();
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsBrandModalComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = true;
            this.dialogData.shops[index].checked = true;
        }
        else {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = false;
            this.dialogData.shops[index].checked = false;
        }
    };
    LinkShopsBrandModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-shops-brand-modal',
            template: __webpack_require__(/*! ./link-shops-brand-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.html"),
            styles: [__webpack_require__(/*! ./link-shops-brand-modal.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.css")],
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_6__["BrandsService"], Object])
    ], LinkShopsBrandModalComponent);
    return LinkShopsBrandModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtY29sbGVjdGlvbi9saW5rLXNob3BzLWNvbGxlY3Rpb24tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvbGluay1zaG9wcy1jb2xsZWN0aW9uL2xpbmstc2hvcHMtY29sbGVjdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgbWF4LWhlaWdodDogODJ2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\r\n\r\n        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n          <mat-card *ngFor=\"let shop of dialogData.shops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n            <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n              <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n            </div>\r\n            <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n              <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n            </div>\r\n          </mat-card>\r\n          <!--/div-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"save()\">{{ 'Save Changes' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"onNoClick()\">{{ 'Close' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LinkShopsCollentionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkShopsCollentionModalComponent", function() { return LinkShopsCollentionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ms-collections/services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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


//import { setTranslations } from '@cognitec/ngx-translate';
//import { TRANSLATIONS } from './i18n/annotation-tool-modal.component.translations';

//import { Landmarks } from '../../models/landmarks';




//

var errorKey = 'Error';
var LinkShopsCollentionModalComponent = /** @class */ (function () {
    function LinkShopsCollentionModalComponent(element, breakpointObserver, dialogRef, errorHandlingService, toastr, translateService, collectionsService, dialogData) {
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.collectionsService = collectionsService;
        this.dialogData = dialogData;
        this.displayedColumns = [
            'checkbox',
            'text',
            'url',
            'actions'
        ];
        this.links = [{ text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }];
        this.answer = false;
        this.flag = true;
        this.imageSrc = null;
        this.linkedShops = [];
        this.oldLinkedShops = [];
        //setTranslations(this.translateService, TRANSLATIONS);
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
            }
        });
    }
    LinkShopsCollentionModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collectionsService.getCollectionLinkedShops(this.dialogData.collectionId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.dialogData.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsCollentionModalComponent.prototype.ngAfterViewInit = function () {
    };
    LinkShopsCollentionModalComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    LinkShopsCollentionModalComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    LinkShopsCollentionModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LinkShopsCollentionModalComponent.prototype.onNoClick = function () {
        this.close();
    };
    LinkShopsCollentionModalComponent.prototype.linked = function (shop) {
        shop.linked = !shop.linked;
        if (shop.linked) {
            this.linkedShops = this.linkedShops.concat([shop.id]);
        }
        else {
            var indexLinked_1 = this.linkedShops.findIndex(function (val) { return val === shop.id; });
            if (indexLinked_1 > -1) {
                var linked_1 = [];
                this.linkedShops.forEach(function (shopId, index) {
                    if (index != indexLinked_1) {
                        linked_1 = linked_1.concat([shopId]);
                    }
                });
                this.linkedShops = linked_1;
            }
        }
    };
    LinkShopsCollentionModalComponent.prototype.save = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedShops(this.dialogData.collectionId, this.linkedShops).subscribe(function (response) {
            _this.close();
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsCollentionModalComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = true;
            this.dialogData.shops[index].checked = true;
        }
        else {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = false;
            this.dialogData.shops[index].checked = false;
        }
    };
    LinkShopsCollentionModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-shops-collection-modal',
            template: __webpack_require__(/*! ./link-shops-collection-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.html"),
            styles: [__webpack_require__(/*! ./link-shops-collection-modal.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.css")],
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_6__["CollectionsService"], Object])
    ], LinkShopsCollentionModalComponent);
    return LinkShopsCollentionModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>SHOP CREATOR</h1>\n\n<shop-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</shop-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL25ldy1zaG9wL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxuZXctc2hvcFxcbmV3LXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9uZXctc2hvcC9uZXctc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewShopComponent", function() { return NewShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_shops__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/shops */ "./src/app/ms-back-office/modules/ms-shops/models/shops.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _services_shops_images_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/shops-images.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
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
var NewShopComponent = /** @class */ (function () {
    function NewShopComponent(activatedRoute, shopsService, shopsImgesService, errorHandlingService, imagesService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.shopsService = shopsService;
        this.shopsImgesService = shopsImgesService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: ""
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewShopComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
    };
    NewShopComponent.prototype.submit = function (data) {
        this.createShop(data);
    };
    NewShopComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewShopComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    /*createShop(data: Shop) {
      this.shopsService.postShop(data).subscribe(response => {
        this.unsavedChanges = false;
        //this.close.emit();TODO
        this.close();
        this.toastr.success(savedUserMessageKey);
      },
        (error: HandledError) => {
          this.errorHandlingService.handleUiError(errorKey, error);
          this.validationErrors = error.formErrors;
        });
    }*/
    NewShopComponent.prototype.createShop = function (shopData) {
        var _this = this;
        console.log("create...........");
        this.shopsService.postShop(shopData).subscribe(function (response) {
            _this.shopId = response.data.id;
            shopData.images = [];
            var imagesObservables = new Array();
            for (var position in shopData.faces) {
                var face = shopData.faces[position];
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
                        _this.shopsImgesService.patchShopMainImage(_this.shopId, mainImage).subscribe(function (response) {
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
                        var image = new _models_shops__WEBPACK_IMPORTED_MODULE_9__["ShopImage"];
                        image.imgUrl = responses[item].data.url;
                        shopData.images = shopData.images.concat([image]);
                    }
                    //this.shopsService.postRelease(releaseData).subscribe(response => {
                    //send images realeases 
                    _this.shopsImgesService.postShopImageAll(response.data.id, shopData.images).subscribe(function (response) {
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
    NewShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-shop',
            template: __webpack_require__(/*! ./new-shop.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.html"),
            styles: [__webpack_require__(/*! ./new-shop.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_10__["ShopsService"],
            _services_shops_images_service__WEBPACK_IMPORTED_MODULE_11__["ShopsImgesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewShopComponent);
    return NewShopComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n        <div [fxFlex]=\"25\">\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Shop Name</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"name\" required>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Traking list base URL</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"trackingListBaseUrl\">\n\n          </mat-form-field>\n\n          <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Collection</mat-label>\n    \n                <mat-select placeholder=\"Select\" formControlName=\"collection\">\n    \n                  <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n    \n                    {{collection.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\"></textarea>\n\n          </mat-form-field>\n\n          <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Gender</mat-label>\n    \n                <mat-select placeholder=\"Select\" formControlName=\"gender\">\n    \n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n    \n                    {{gender.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Address</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"address\">\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Shipping Details</mat-label>\n\n            <textarea matInput formControlName=\"shippingDetails\"></textarea>\n\n          </mat-form-field>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n            <div [fxFlex]=\"50\">\n\n              <mat-form-field class=\"width-90pct\">\n\n                  <mat-select placeholder=\"Region\" formControlName=\"region\">\n\n                      <mat-option *ngFor=\"let region of regions\" [value]=\"region.id\">\n\n                        {{region.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n              </mat-form-field>\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                  <mat-select placeholder=\"Country\" formControlName=\"country\">\n\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                        {{country.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n              </mat-form-field>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n            <div [fxFlex]=\"50\">\n\n              <mat-form-field class=\"width-90pct\">\n\n                <mat-select placeholder=\"Rank\">\n\n                  <mat-option *ngFor=\"let rank_ of rank\" [value]=\"rank_.value\">\n\n                    {{rank_.value}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select placeholder=\"Currency\">\n\n                  <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\n\n                    {{currenc.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"25\">\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select placeholder=\"Select Brand\" formControlName=\"brand\" multiple>\n\n              <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                {{brand.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select placeholder=\"Select Category\" formControlName=\"category\" multiple>\n\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n\n                {{category.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <div>\n\n            <mat-slide-toggle formControlName=\"makeDeal\" class=\"margin-bottom-25px margin-top-25px\">Hot</mat-slide-toggle>\n\n          </div>\n          <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Color</mat-label>\n    \n                <mat-select placeholder=\"Select\" formControlName=\"color\">\n    \n                  <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\n    \n                    {{color.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n          <!--mat-form-field class=\"width-100pc margin-left-16px\">\n    \n                <mat-label>Suplied Color</mat-label>\n    \n                <input matInput type=\"text\" formControlName=\"supliedColor\">\n    \n              </mat-form-field>\n    \n              <mat-slide-toggle formControlName=\"children\">Children</mat-slide-toggle-->\n\n        </div>\n\n        <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n          <div class=\"display-flex justify-content-center\">\n            <h3>Shop Logo</h3>\n          </div>\n\n          <images-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\"></images-card>\n\n        </div>\n\n      </div>\n      <div class=\"mb-20 color-material\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n        <div [fxFlex]=\"60\" fxLayout=\"column\" class=\"max-width-480px\">\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\" class=\"margin-bottom-25px\">\n\n            <div [fxFlex]=\"70\">\n\n              <h3>Working Hours</h3>\n\n            </div>\n\n            <div [fxFlex]=\"30\">\n\n              <h5>Non-Working</h5>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Monday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Tuesday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Wednesday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Thursday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Friday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Saturday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"100\">\n\n              Sunday\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n            </div>\n\n            <div [fxFlex]=\"100\">\n\n              <mat-checkbox></mat-checkbox>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <!--div [fxFlex]=\"60\" fxLayout=\"column\" class=\" margin-right-25px\">\n\n              <div [fxFlex]=\"\" fxLayout=\"row\" class=\"justify-content-space-between\">\n\n                <div>\n                  <mat-slide-toggle class=\"\">Make Deal</mat-slide-toggle>\n                </div>\n\n                <div class=\"padding-bottom-10px\">\n                  <button type=\"button\" class=\"border-none border-radius-5px\" mat-stroked-button>\n                    Add a new Deal\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </div>\n\n              </div>         \n\n            </div-->\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3AtZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zaG9wc1xcY29tcG9uZW50c1xcc2hvcC1mb3JtXFxzaG9wLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9zaG9wLWZvcm0vc2hvcC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShopFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopFormComponent", function() { return ShopFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _models_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/country */ "./src/app/ms-back-office/modules/ms-shops/models/country.ts");
/* harmony import */ var _models_rank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/rank */ "./src/app/ms-back-office/modules/ms-shops/models/rank.ts");
/* harmony import */ var _models_regions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/regions */ "./src/app/ms-back-office/modules/ms-shops/models/regions.ts");
/* harmony import */ var _shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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








var ShopFormComponent = /** @class */ (function (_super) {
    __extends(ShopFormComponent, _super);
    function ShopFormComponent(dialog, formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.formBuilder = formBuilder;
        _this.faceList = [];
        _this.currency = _models_currency__WEBPACK_IMPORTED_MODULE_4__["CURRENCY"];
        _this.countries = _models_country__WEBPACK_IMPORTED_MODULE_5__["COUNTRIES"];
        _this.regions = _models_regions__WEBPACK_IMPORTED_MODULE_7__["REGIONS"];
        _this.rank = _models_rank__WEBPACK_IMPORTED_MODULE_6__["RANK"];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    ShopFormComponent.prototype.ngOnInit = function () {
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
    ShopFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.address),
            shippingDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shippingDetails),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            makeDeal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.makeDeal),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.currency),
            rank: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.rank),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.region),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.country),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
            trackingListBaseUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.trackingListBaseUrl),
            workingHours: this.formBuilder.array([
                this.formBuilder.group({
                    dayOfWeekMonday: 1,
                    openHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekTuesday: 2,
                    openHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekWednesday: 3,
                    openHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekThursday: 4,
                    openHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekFriday: 5,
                    openHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekSaturday: 6,
                    openHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                }),
                this.formBuilder.group({
                    dayOfWeekSunday: 7,
                    openHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                    closeHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category),
                })
            ]),
        });
    };
    ShopFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.workingHours = this.buidlWorkingHours(this.data.workingHours);
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    ShopFormComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__["ShopsSellingStyleModalComponent"], {
            height: '800px',
            width: '60%',
            data: { face: this.shop }
        });
    };
    ShopFormComponent.prototype.buidlWorkingHours = function (workinHour) {
        workinHour[0];
        var realWorkinHours = [];
        var monday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        //monday
        console.log(workinHour[0]);
        monday.dayOfWeek = workinHour[0].dayOfWeekMonday;
        monday.openHour = workinHour[0].openHourMonday;
        monday.closeHour = workinHour[0].closeHourMonday;
        realWorkinHours = realWorkinHours.concat([monday]);
        //tuesday
        var tuesday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        tuesday.dayOfWeek = workinHour[1].dayOfWeekTuesday;
        tuesday.openHour = workinHour[1].openHourTuesday;
        tuesday.closeHour = workinHour[1].closeHourTuesday;
        realWorkinHours = realWorkinHours.concat([tuesday]);
        //wednesday
        var wednesday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        wednesday.dayOfWeek = workinHour[2].dayOfWeekWednesday;
        wednesday.openHour = workinHour[2].openHourWednesday;
        wednesday.closeHour = workinHour[2].closeHourWednesday;
        realWorkinHours = realWorkinHours.concat([wednesday]);
        //thursday
        var thursday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        thursday.dayOfWeek = workinHour[3].dayOfWeekThursday;
        thursday.openHour = workinHour[3].openHourThursday;
        thursday.closeHour = workinHour[3].closeHourThursday;
        realWorkinHours = realWorkinHours.concat([thursday]);
        //friday
        var friday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        friday.dayOfWeek = workinHour[4].dayOfWeekFriday;
        friday.openHour = workinHour[4].openHourFriday;
        friday.closeHour = workinHour[4].closeHourFriday;
        realWorkinHours = realWorkinHours.concat([friday]);
        //saturday
        var saturday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        saturday.dayOfWeek = workinHour[5].dayOfWeekSaturday;
        saturday.openHour = workinHour[5].openHourSaturday;
        saturday.closeHour = workinHour[5].closeHourSaturday;
        realWorkinHours = realWorkinHours.concat([saturday]);
        //sunday
        var sunday = {
            dayOfWeek: 0,
            openHour: '',
            closeHour: '',
        };
        sunday.dayOfWeek = workinHour[6].dayOfWeekSunday;
        sunday.openHour = workinHour[6].openHourSunday;
        sunday.closeHour = workinHour[6].closeHourSunday;
        realWorkinHours = realWorkinHours.concat([sunday]);
        console.log(realWorkinHours);
        return realWorkinHours;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShopFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShopFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShopFormComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShopFormComponent.prototype, "faceList", void 0);
    ShopFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shop-form',
            template: __webpack_require__(/*! ./shop-form.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.html"),
            styles: [__webpack_require__(/*! ./shop-form.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ShopFormComponent);
    return ShopFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3BzLXNlbGxpbmctc3R5bGUtbW9kYWwvc2hvcHMtc2VsbGluZy1zdHlsZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6Qjs7QUFDRDtFQUNFLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9zaG9wcy1zZWxsaW5nLXN0eWxlLW1vZGFsL3Nob3BzLXNlbGxpbmctc3R5bGUtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxudGQubWF0LWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\r\n\r\n        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n          <mat-card *ngFor=\"let shop of dialogData.shops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n            <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n              <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n            </div>\r\n            <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n              <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n            </div>\r\n          </mat-card>\r\n          <!--/div-->\r\n        </div>\r\n\r\n        <!--div [fxFlex]=\"40\">\r\n          <h3>Stores Selling</h3>\r\n          <div fxLayout=\"column\" class=\"border flex-grow-1 overflow-auto display-flex \">\r\n\r\n            <table class=\"width-100pct\" mat-table [dataSource]=\"links\" matSort matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n              <ng-container matColumnDef=\"checkbox\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\"></mat-checkbox>\r\n                  </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"text\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Text\r\n                  <td mat-cell *matCellDef=\"let element\"> {{ element.text }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"url\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Url\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n              </tr>\r\n\r\n            </table>\r\n\r\n            <div class=\"margin-left-25px margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n              <mat-checkbox class=\"margin-top-10px margin-right-25px\" value=\"primary\" matTooltip=\"{{ 'Principal' | translate }}\">Check All</mat-checkbox>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n        </div-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"save()\">{{ 'Save Changes' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"onNoClick()\">{{ 'Close' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ShopsSellingStyleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsSellingStyleModalComponent", function() { return ShopsSellingStyleModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ms-style/services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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


//import { setTranslations } from '@cognitec/ngx-translate';
//import { TRANSLATIONS } from './i18n/annotation-tool-modal.component.translations';

//import { Landmarks } from '../../models/landmarks';




//

var errorKey = 'Error';
var ShopsSellingStyleModalComponent = /** @class */ (function () {
    function ShopsSellingStyleModalComponent(element, breakpointObserver, dialogRef, errorHandlingService, toastr, translateService, stylesService, dialogData) {
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.stylesService = stylesService;
        this.dialogData = dialogData;
        this.displayedColumns = [
            'checkbox',
            'text',
            'url',
            'actions'
        ];
        this.links = [{ text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }];
        this.answer = false;
        this.flag = true;
        this.imageSrc = null;
        this.linkedShops = [];
        this.oldLinkedShops = [];
        //setTranslations(this.translateService, TRANSLATIONS);
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
            }
        });
    }
    ShopsSellingStyleModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stylesService.getStyleLinkedShops(this.dialogData.styleId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.dialogData.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    ShopsSellingStyleModalComponent.prototype.ngAfterViewInit = function () {
    };
    ShopsSellingStyleModalComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    ShopsSellingStyleModalComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    ShopsSellingStyleModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ShopsSellingStyleModalComponent.prototype.onNoClick = function () {
        this.close();
    };
    ShopsSellingStyleModalComponent.prototype.linked = function (shop) {
        shop.linked = !shop.linked;
        if (shop.linked) {
            this.linkedShops = this.linkedShops.concat([shop.id]);
        }
        else {
            var indexLinked_1 = this.linkedShops.findIndex(function (val) { return val === shop.id; });
            if (indexLinked_1 > -1) {
                var linked_1 = [];
                this.linkedShops.forEach(function (shopId, index) {
                    if (index != indexLinked_1) {
                        linked_1 = linked_1.concat([shopId]);
                    }
                });
                this.linkedShops = linked_1;
            }
        }
    };
    ShopsSellingStyleModalComponent.prototype.save = function () {
        var _this = this;
        this.stylesService.postStyleLinkedShops(this.dialogData.styleId, this.linkedShops).subscribe(function (response) {
            _this.close();
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    ShopsSellingStyleModalComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = true;
            this.dialogData.shops[index].checked = true;
        }
        else {
            var index = this.dialogData.shops.findIndex(function (shop) { return shop.id === id; });
            this.dialogData.shops[index].linked = false;
            this.dialogData.shops[index].checked = false;
        }
    };
    ShopsSellingStyleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shops-selling-style-modal',
            template: __webpack_require__(/*! ./shops-selling-style-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html"),
            styles: [__webpack_require__(/*! ./shops-selling-style-modal.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.css")],
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"], Object])
    ], ShopsSellingStyleModalComponent);
    return ShopsSellingStyleModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shops Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"NAME\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>STATUS</mat-label>\r\n    <mat-select formControlName=\"status\">\r\n      <mat-option *ngFor=\"let state of status\" [value]=\"state.value\">\r\n        {{state.status}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>COUNTRY</mat-label>\r\n    <mat-select formControlName=\"country\">\r\n      <mat-option [value]=\"null\">name</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW SHOP</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"shops\" matSort [matSortActive]=\"shopsService.previousSortColumn\"\r\n    [matSortDirection]=\"shopsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <!--ng-container matColumnDef=\"ID\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        ID\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.id }} </td>\r\n    </ng-container-->\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SHOP NAME\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.name }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"thumbnail\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\r\n        <div class=\"position-relative margin-top-5px\">\r\n          <img [src]=\"element.mainImage\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"active\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        STATUS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\">\r\n        <div>\r\n        {{ element.active?'Active':'Inactive' }}\r\n        <mat-slide-toggle class=\"margin-bottom-25px margin-top-25px margin-left-5px\" [checked]=\"element.active\" (click)=\"changeStatus(element)\"></mat-slide-toggle>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"country\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COUNTRY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.country }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        CURRENCY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.currency }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        LATEST UPDATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt  | date: 'dd/MM/yyyy' }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"rank\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        RANK\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.rank }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"shipingDetails\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SHIPPING DETAILS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.shippingDetails }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3BzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxzaG9wcy10YWJsZVxcc2hvcHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3BzLXRhYmxlL3Nob3BzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ShopsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsTableComponent", function() { return ShopsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/status */ "./src/app/ms-back-office/modules/ms-shops/models/status.ts");
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
var ShopsTableComponent = /** @class */ (function () {
    function ShopsTableComponent(shopsService, errorHandlingService) {
        this.shopsService = shopsService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'name',
            'thumbnail',
            'active',
            'country',
            'currency',
            'updatedAt',
            'rank',
            'shipingDetails',
            'action'
        ];
        this.status = _models_status__WEBPACK_IMPORTED_MODULE_6__["STATUS"];
        this.totalLength = 0;
        this.shops = [];
    }
    ShopsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        // Begin observing style list changes.
        this.shopsList = this.shopsService.shopsList.subscribe(function (shopsList) {
            _this.totalLength = shopsList.dataCount;
            _this.shops = shopsList.data;
            if (_this.shops.length === 0 && _this.totalLength > 0 && _this.shopsService.previousPageSize > 0) {
                _this.shopsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.shopsService.previousPageSize) - 1;
                _this.shopsService.reloadShops().subscribe(function (response) {
                    _this.shopsService.shopsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    ShopsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    ShopsTableComponent.prototype.ngOnDestroy = function () {
        this.shopsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    ShopsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['status'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['country'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    ShopsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.shopsService.getShops(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.shopsService.shopsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    ShopsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ShopsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    ShopsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    ShopsTableComponent.prototype.changeStatus = function (shopData) {
        var _this = this;
        //shopData.createdAt = null;
        //shopData.updatedAt = null;
        shopData.active = !shopData.active;
        this.shopsService.putShop(shopData).subscribe(function (response) {
            _this.loadPage();
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ShopsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ShopsTableComponent.prototype, "sort", void 0);
    ShopsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shops-table',
            template: __webpack_require__(/*! ./shops-table.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.html"),
            styles: [__webpack_require__(/*! ./shops-table.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shops_service__WEBPACK_IMPORTED_MODULE_5__["ShopsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ShopsTableComponent);
    return ShopsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/models/country.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/models/country.ts ***!
  \*******************************************************************/
/*! exports provided: Country, COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

;
var COUNTRIES = [
    { id: 'USA', name: 'USA' },
    { id: 'France', name: 'France' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/models/rank.ts":
/*!****************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/models/rank.ts ***!
  \****************************************************************/
/*! exports provided: Rank, RANK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Rank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANK", function() { return RANK; });
var Rank = /** @class */ (function () {
    function Rank() {
    }
    return Rank;
}());

;
var RANK = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/models/regions.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/models/regions.ts ***!
  \*******************************************************************/
/*! exports provided: Region, REGIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGIONS", function() { return REGIONS; });
var Region = /** @class */ (function () {
    function Region() {
    }
    return Region;
}());

;
var REGIONS = [
    { id: 'America', name: 'America' },
    { id: 'Europe', name: 'Europe' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/models/status.ts":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/models/status.ts ***!
  \******************************************************************/
/*! exports provided: Status, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());

;
var STATUS = [
    { value: '1', status: 'Active' },
    { value: '0', status: 'Inactive' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/ms-shops-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/ms-shops-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsShopsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsShopsRoutingModule", function() { return MsShopsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/delete-shop/delete-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.ts");
/* harmony import */ var _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit-shop/edit-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.ts");
/* harmony import */ var _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-shop/new-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.ts");
/* harmony import */ var _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shops-table/shops-table.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_images_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-shops/services/shops-images-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-urls/services/urls-resolve.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts");
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
        component: _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_5__["ShopsTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_4__["NewShopComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_3__["EditShopComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            shopId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            shopAllImages: _ms_shops_services_shops_images_resolve_service__WEBPACK_IMPORTED_MODULE_8__["ShopsAllImagesResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_11__["UrlsResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_2__["DeleteShopComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            shopId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsShopsRoutingModule = /** @class */ (function () {
    function MsShopsRoutingModule() {
    }
    MsShopsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsShopsRoutingModule);
    return MsShopsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts ***!
  \********************************************************************/
/*! exports provided: MsShopsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsShopsModule", function() { return MsShopsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _ui_modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/spinner-indicator-200/spinner-indicator-200.module */ "./src/app/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts");
/* harmony import */ var _ms_shops_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ms-shops-routing.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops-routing.module.ts");
/* harmony import */ var _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shops-table/shops-table.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.ts");
/* harmony import */ var _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shop-form/shop-form.component */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.ts");
/* harmony import */ var _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/new-shop/new-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.ts");
/* harmony import */ var _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-shop/edit-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.ts");
/* harmony import */ var _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-shop-form/edit-shop-form.component */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.ts");
/* harmony import */ var _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/delete-shop/delete-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.ts");
/* harmony import */ var _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/link-shops-brand/link-shops-brand-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.ts");
/* harmony import */ var _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
/* harmony import */ var _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../ui/modules/images-card/images-card.module */ "./src/app/ui/modules/images-card/images-card.module.ts");
/* harmony import */ var _ms_deals_ms_deals_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ms-deals/ms-deals.module */ "./src/app/ms-back-office/modules/ms-deals/ms-deals.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//















//














var MsShopsModule = /** @class */ (function () {
    function MsShopsModule() {
    }
    MsShopsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_3__["AmazingTimePickerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _ms_shops_routing_module__WEBPACK_IMPORTED_MODULE_17__["MsShopsRoutingModule"],
                _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_27__["ImagesCardModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__["AskBeforeRefreshModule"],
                _ui_modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__["SpinnerIndicator200Module"],
                _ms_deals_ms_deals_module__WEBPACK_IMPORTED_MODULE_28__["MsDealsModule"]
            ],
            declarations: [
                _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_18__["ShopsTableComponent"],
                _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_19__["ShopFormComponent"],
                _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_20__["NewShopComponent"],
                _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_21__["EditShopComponent"],
                _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_22__["EditShopFormComponent"],
                _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_23__["DeleteShopComponent"],
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_25__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_26__["LinkShopsCollentionModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__["ShopsSellingStyleModalComponent"],
            ],
            exports: [
                _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_18__["ShopsTableComponent"],
                _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_19__["ShopFormComponent"],
                _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_20__["NewShopComponent"],
                _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_21__["EditShopComponent"],
                _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_22__["EditShopFormComponent"],
                _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_23__["DeleteShopComponent"],
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_25__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_26__["LinkShopsCollentionModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__["ShopsSellingStyleModalComponent"],
            ],
            entryComponents: [
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_25__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_26__["LinkShopsCollentionModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__["ShopsSellingStyleModalComponent"],
            ]
        })
    ], MsShopsModule);
    return MsShopsModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/services/shops-images-resolve.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/services/shops-images-resolve.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ShopsAllImagesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsAllImagesResolveService", function() { return ShopsAllImagesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _shops_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shops-images.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts");
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
var ShopsAllImagesResolveService = /** @class */ (function () {
    function ShopsAllImagesResolveService(shopsImgesService, translate, errorHandlingService) {
        this.shopsImgesService = shopsImgesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ShopsAllImagesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.shopsImgesService.getShopAllImages(route.paramMap.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
        ;
    };
    ShopsAllImagesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shops_images_service__WEBPACK_IMPORTED_MODULE_5__["ShopsImgesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ShopsAllImagesResolveService);
    return ShopsAllImagesResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ASCENDING, ShopsImgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsImgesService", function() { return ShopsImgesService; });
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
var ShopsImgesService = /** @class */ (function () {
    function ShopsImgesService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'name';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.shopsImagesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.shops.apiEndpoint;
    }
    ShopsImgesService.prototype.getShopImages = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        this.previousFilter = filter;
        this.previousSortColumn = sortColumn;
        this.previousSortDirection = sortDirection;
        this.previousPageIndex = pageIndex;
        this.previousPageSize = pageSize;
        var queryParams = this.formatQueryParams(filter, sortColumn, sortDirection, pageIndex, pageSize);
        return this.http.get(this.apiEndpoint + queryParams);
    };
    ShopsImgesService.prototype.reloadShopImages = function () {
        console.log("reload");
        return this.getShopImages(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    ShopsImgesService.prototype.postShopImage = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/images/', JSON.stringify(data));
    };
    ShopsImgesService.prototype.patchShopMainImage = function (id, data) {
        return this.http.patch(this.apiEndpoint + id + '/mainImage/', JSON.stringify(data));
    };
    ShopsImgesService.prototype.postShopImageAll = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/images/', JSON.stringify(data));
    };
    ShopsImgesService.prototype.getShopImage = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    ShopsImgesService.prototype.getShopAllImages = function (id) {
        return this.http.get(this.apiEndpoint + id + '/images/');
    };
    ShopsImgesService.prototype.patchShopImage = function (data) {
        return this.http.patch(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    ShopsImgesService.prototype.deleteShopImage = function (id, idImage) {
        return this.http.delete(this.apiEndpoint + id + '/images/' + idImage + '/');
    };
    ShopsImgesService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    ShopsImgesService.prototype.getAllShopsImages = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.data;
        }));
    };
    ShopsImgesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingHttpService"]])
    ], ShopsImgesService);
    return ShopsImgesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-shops-ms-shops-module~ms-~1045d9c8.js.map