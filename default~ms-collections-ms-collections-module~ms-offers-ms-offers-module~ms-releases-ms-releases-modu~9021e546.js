(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ms-collections-ms-collections-module~ms-offers-ms-offers-module~ms-releases-ms-releases-modu~9021e546"],{

/***/ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtb2ZmZXJzL2NvbXBvbmVudHMvZGVsZXRlLW9mZmVyL2RlbGV0ZS1vZmZlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeleteOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOfferComponent", function() { return DeleteOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
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




var titleKey = 'Title Delete Offer';
var deleteBtnKey = 'Delete Offer';
var messageKey = 'Delete Offer Message';
var errorKey = 'Error';
var deletedOfferMessageKey = 'Deleted Offer Message';
var DeleteOfferComponent = /** @class */ (function () {
    function DeleteOfferComponent(activatedRoute, dialog, offersService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.offersService = offersService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteOfferComponent.prototype.ngAfterViewInit = function () {
        this.getOffer(this.offerId);
    };
    DeleteOfferComponent.prototype.ngOnInit = function () {
        this.offerId = this.activatedRoute.snapshot.data.OfferId;
    };
    DeleteOfferComponent.prototype.getOffer = function (offerId) {
        var _this = this;
        this.offersService.getOffer(this.offerId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteOffer();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteOfferComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteOfferComponent.prototype.confirmDeleteOffer = function () {
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
                _this.deleteOffer();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteOfferComponent.prototype.deleteOffer = function () {
        var _this = this;
        this.offersService.deleteOffer(this.data.id).subscribe(function (response) {
            _this.offersService.reloadOffers().subscribe(function (response) {
                _this.offersService.offersList.next(response);
                _this.toastr.success(deletedOfferMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-offer',
            template: __webpack_require__(/*! ./delete-offer.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.html"),
            styles: [__webpack_require__(/*! ./delete-offer.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_7__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteOfferComponent);
    return DeleteOfferComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT OFFER</h1>\n<offer-form *ngIf=\"data\"\n    [data]=\"data\"\n    [shops]=\"dialogData.shops\" \n    [releaseId]=\"dialogData.releaseId\" \n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</offer-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9lZGl0LW9mZmVyL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLW9mZmVyc1xcY29tcG9uZW50c1xcZWRpdC1vZmZlclxcZWRpdC1vZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9lZGl0LW9mZmVyL2VkaXQtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferComponent", function() { return EditOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
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
var updatedBrandMessageKey = 'Updated';
var EditOfferComponent = /** @class */ (function () {
    function EditOfferComponent(dialogRef, activatedRoute, dialog, offersService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.offersService = offersService;
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
        this.saveTitleKey = 'Discard';
        this.saveMessageKey = 'Discard ';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditOfferComponent.prototype.ngOnInit = function () {
        this.offerId = this.dialogData.offerId;
    };
    EditOfferComponent.prototype.ngAfterViewInit = function () {
        this.getOffer();
    };
    EditOfferComponent.prototype.getOffer = function () {
        var _this = this;
        this.offersService.getOffer(this.offerId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditOfferComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateOffer(data);
    };
    EditOfferComponent.prototype.cancel = function () {
        this.close();
    };
    EditOfferComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditOfferComponent.prototype.updateOffer = function (data) {
        var _this = this;
        this.offersService.putOffer(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedBrandMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-offer',
            template: __webpack_require__(/*! ./edit-offer.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.html"),
            styles: [__webpack_require__(/*! ./edit-offer.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], Object])
    ], EditOfferComponent);
    return EditOfferComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9saW5rLW9mZmVycy1jb2xsZWN0aW9uL2xpbmstb2ZmZXJzLWNvbGxlY3Rpb24tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtb2ZmZXJzL2NvbXBvbmVudHMvbGluay1vZmZlcnMtY29sbGVjdGlvbi9saW5rLW9mZmVycy1jb2xsZWN0aW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Link New Offers</h1>\r\n<!--mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon-->\r\n<!--mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n  </mat-form-field-->\r\n\r\n<!--mat-form-field>\r\n    <mat-label>Collection</mat-label>\r\n    <mat-select placeholder=\"Collection\" formControlName=\"collection\">\r\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\r\n          {{collection.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n  </mat-form-field-->\r\n\r\n<!--span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" (click)=\"addNewOfferModal()\">CREATE A OFFER</button>\r\n</mat-toolbar-->\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"offers\" matSort [matSortActive]=\"offersService.previousSortColumn\"\r\n    [matSortDirection]=\"offersService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n\r\n    <ng-container matColumnDef=\"linked\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\">\r\n        <mat-checkbox [checked]=\"element.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Link' | translate }}\" (click)=\"linked(element)\"></mat-checkbox>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"sku\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SKU\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"RELEASE NAME\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        RELEASE NAME\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getRelease(element.releaseId) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"COLLECTION\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COLLECTION\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.collection }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"COLOR\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COLOR\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"OFFICIAL RELEASE\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        OFFICIAL RELEASE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.officialRelease }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"SHOP\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SHOP\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getShop(element.shopId) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"STATUS\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        STATUS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.status }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"ACTION\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" (click)=\"editOfferModal(element.id)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getOfferToDelete(element)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>\r\n<div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n  <button mat-raised-button type=\"buttom\" color=\"primary\" (click)=\"save()\">{{ 'Save' | translate }}</button>\r\n\r\n  <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"close()\">{{ 'Cancel' | translate }}</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: LinkOffersCollentionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkOffersCollentionModalComponent", function() { return LinkOffersCollentionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ms-collections/services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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
var LinkOffersCollentionModalComponent = /** @class */ (function () {
    function LinkOffersCollentionModalComponent(element, breakpointObserver, dialogRef, errorHandlingService, offersService, toastr, translateService, collectionsService, dialogData) {
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.offersService = offersService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.collectionsService = collectionsService;
        this.dialogData = dialogData;
        this.displayedColumns = [
            'linked',
            'sku',
            'RELEASE NAME',
            'COLLECTION',
            'COLOR',
            'OFFICIAL RELEASE',
            'SHOP',
            'STATUS',
        ];
        this.totalLength = 0;
        this.offers = [];
        this.answer = false;
        this.flag = true;
        this.imageSrc = null;
        this.linkedOffers = [];
        this.oldLinkedOffers = [];
        //setTranslations(this.translateService, TRANSLATIONS);
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
            }
        });
    }
    LinkOffersCollentionModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.collectionsService.getCollectionLinkedOffers(this.dialogData.collectionId).subscribe(function (response) {
            _this.linkedOffers = response.data;
            _this.offers.forEach(function (offer) {
                _this.isLinked(offer.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
        // Begin observing style list changes.
        this.offersList = this.offersService.offersList.subscribe(function (offersList) {
            _this.totalLength = offersList.dataCount;
            _this.offers = offersList.data;
            _this.offers.forEach(function (offer) {
                _this.isLinked(offer.id);
            });
            if (_this.offers.length === 0 && _this.totalLength > 0 && _this.offersService.previousPageSize > 0) {
                _this.offersService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.offersService.previousPageSize) - 1;
                _this.offersService.reloadOffers().subscribe(function (response) {
                    _this.offersService.offersList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    LinkOffersCollentionModalComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    LinkOffersCollentionModalComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    LinkOffersCollentionModalComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    LinkOffersCollentionModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LinkOffersCollentionModalComponent.prototype.onNoClick = function () {
        this.close();
    };
    LinkOffersCollentionModalComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['releaseId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    LinkOffersCollentionModalComponent.prototype.loadPage = function () {
        var _this = this;
        this.offersService.getOffers(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.offersService.offersList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    LinkOffersCollentionModalComponent.prototype.linked = function (offer) {
        offer.linked = !offer.linked;
        if (offer.linked) {
            this.linkedOffers = this.linkedOffers.concat([offer.id]);
        }
        else {
            var indexLinked_1 = this.linkedOffers.findIndex(function (val) { return val === offer.id; });
            if (indexLinked_1 > -1) {
                var linked_1 = [];
                this.linkedOffers.forEach(function (OfferId, index) {
                    if (index != indexLinked_1) {
                        linked_1 = linked_1.concat([OfferId]);
                    }
                });
                this.linkedOffers = linked_1;
            }
        }
    };
    LinkOffersCollentionModalComponent.prototype.save = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedOffers(this.dialogData.collectionId, this.linkedOffers).subscribe(function (response) {
            _this.close();
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkOffersCollentionModalComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedOffers.findIndex(function (offerId) { return offerId === id; }) > -1;
        if (isLinked) {
            var index = this.offers.findIndex(function (offer) { return offer.id === id; });
            this.offers[index].linked = true;
            this.offers[index].checked = true;
        }
        else {
            var index = this.offers.findIndex(function (offer) { return offer.id === id; });
            this.offers[index].linked = false;
            this.offers[index].checked = false;
        }
    };
    LinkOffersCollentionModalComponent.prototype.getRelease = function (id) {
        try {
            return this.releases.find(function (release) {
                return release.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    LinkOffersCollentionModalComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], LinkOffersCollentionModalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], LinkOffersCollentionModalComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LinkOffersCollentionModalComponent.prototype, "releaseId", void 0);
    LinkOffersCollentionModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-offers-collection-modal',
            template: __webpack_require__(/*! ./link-offers-collection-modal.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.html"),
            styles: [__webpack_require__(/*! ./link-offers-collection-modal.component.css */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.css")],
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_7__["OffersService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsService"], Object])
    ], LinkOffersCollentionModalComponent);
    return LinkOffersCollentionModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>OFFER CREATOR</h1>\n<offer-form class=\"flex-grow-1\"\n    [data]=\"data\"  \n    [customized]=\"dialogData.customized\"\n    [shops]=\"dialogData.shops\" \n    [releases]=\"dialogData.releases\"  \n    [releaseId]=\"dialogData.releaseId\"     \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</offer-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 99%; }\n\n.mat-dialog-container-padding {\n  padding-right: 0px !important; }\n\n.mat-dialog-content {\n  height: 100%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9uZXctb2ZmZXIvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtb2ZmZXJzXFxjb21wb25lbnRzXFxuZXctb2ZmZXJcXG5ldy1vZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLFlBQ0YsRUFBQzs7QUFFRDtFQUNFLDhCQUE2QixFQUM5Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLW9mZmVycy9jb21wb25lbnRzL25ldy1vZmZlci9uZXctb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogOTklXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lci1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferComponent", function() { return NewOfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
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
var savedStyleMessageKey = 'Saved Style Message';
var NewOfferComponent = /** @class */ (function () {
    function NewOfferComponent(dialogRef, activatedRoute, offersService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.offersService = offersService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogData = dialogData;
        this.data = {
            name: "",
            description: "",
            raffle: true
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewOfferComponent.prototype.ngOnInit = function () {
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.releases = this.activatedRoute.snapshot.data.releases;
    };
    NewOfferComponent.prototype.submit = function (data) {
        this.createOffer(data);
    };
    NewOfferComponent.prototype.cancel = function () {
        this.close();
    };
    NewOfferComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewOfferComponent.prototype.createOffer = function (data) {
        var _this = this;
        this.offersService.postOffer(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(savedStyleMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewOfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-offer',
            template: __webpack_require__(/*! ./new-offer.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.html"),
            styles: [__webpack_require__(/*! ./new-offer.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewOfferComponent);
    return NewOfferComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-bottom-25px\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div [fxFlex]=\"100\" fxLayout=\"row\" class=\"padding-top-10px\">\n\n        <div [fxFlex]=\"25\" class=\"margin-right-25px\">\n\n          <mat-radio-group *ngIf=\"!customized\" formControlName=\"raffle\">\n\n            <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\n\n              <div class=\"display-flex margin-right-25px\">\n\n                <mat-radio-button value=\"true\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\">Release</mat-radio-button>\n\n              </div>\n\n              <div class=\"display-flex\">\n\n                <mat-radio-button value=\"false\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\">Rafle</mat-radio-button>\n\n              </div>\n\n            </div>\n\n          </mat-radio-group>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Shops</mat-label>\n\n            <mat-select placeholder=\"Select Shop\" formControlName=\"shopId\" required>\n\n              <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\">\n\n                {{shop.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Releases</mat-label>\n\n            <mat-select placeholder=\"Select Release\" formControlName=\"releaseId\" required>\n\n              <mat-option *ngFor=\"let release of releases\" [value]=\"release.id\">\n\n                {{release.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>Shipping</mat-label>\n\n            <mat-select placeholder=\"Select Status\" formControlName=\"shipping\" required>\n\n              <mat-option *ngFor=\"let _shipping of shipping\" [value]=\"_shipping.id\">\n\n                {{_shipping.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"75\" fxLayout=\"column\" class=\"margin-left-10px\">\n\n          <div fxLayout=\"row\">\n\n            <div [fxFlex]=\"25\" fxLayout=\"column\">\n\n              <mat-card fxFlexFill fxLayoutAlign=\"center center\" class=\"height-120px\">\n\n              </mat-card>\n\n            </div>\n\n            <div [fxFlex]=\"60\" fxLayout=\"row\" class=\"margin-left-25px\">\n\n              <div [fxFlex]=\"50\">\n\n                <h3>Adidas Max</h3>\n\n              </div>\n\n              <div [fxFlex]=\"50\">\n\n                <h3>Offer Edition</h3>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div [fxFlex]=\"30\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n              <div fxLayout=\"row\" class=\"margin-top-18px flex-grow-0\">\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-90pct\">\n\n                    <mat-label>Retail Price</mat-label>\n\n                    <input matInput type=\"number\" formControlName=\"price\" required>\n\n                  </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-100pct\">\n\n                    <mat-label>Currency</mat-label>\n\n                    <mat-select placeholder=\"Select Shop\">\n\n                      <mat-option *ngFor=\"let _currency of currency\" [value]=\"_currency.id\">\n\n                        {{_currency.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n                </div>\n\n              </div>\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-label>Status</mat-label>\n\n                <mat-select placeholder=\"Select Status\" formControlName=\"status\" required>\n\n                  <mat-option *ngFor=\"let state of status\" [value]=\"state.id\">\n\n                    {{state.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <div *ngIf=\"formGroup.get('raffle').value === 'true'\" fxLayout=\"column\" class=\"margin-top-18px flex-grow-0\">\n\n                <mat-label>Release Time</mat-label>\n\n                <div fxLayout=\"row\" class=\"margin-top-18px flex-grow-0\">\n\n                  <div [fxFlex]=\"50\">\n\n                    <mat-form-field class=\"width-90pct\">\n\n                      <mat-label>Time</mat-label>\n\n                      <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                    </mat-form-field>\n\n                  </div>\n\n                  <div [fxFlex]=\"50\">\n\n                    <mat-form-field class=\"width-100pct\">\n\n                      <mat-label>Time Zone</mat-label>\n\n                      <mat-select placeholder=\"Select Shop\">\n\n                        <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\">\n\n                          {{shop.name}}\n\n                        </mat-option>\n\n                      </mat-select>\n\n                    </mat-form-field>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div *ngIf=\"formGroup.get('raffle').value === 'false'\" fxLayout=\"column\" class=\"margin-top-18px flex-grow-0\">\n\n                <mat-label>Raffle Time</mat-label>\n\n                <div fxLayout=\"row\" class=\"margin-top-18px flex-grow-0\">\n\n                  <div [fxFlex]=\"50\">\n\n                    <mat-form-field class=\"width-90pct\">\n\n                      <mat-label>Start</mat-label>\n\n                      <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                    </mat-form-field>\n\n                  </div>\n\n                  <div [fxFlex]=\"50\">\n\n                    <mat-form-field class=\"width-100pct\">\n\n                      <mat-label>End</mat-label>\n\n                      <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" />\n\n                    </mat-form-field>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <mat-form-field class=\"width-100pct\">\n\n                <mat-label>Sale Price</mat-label>\n\n                <input matInput type=\"text\">\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pct\">\n\n                <mat-label>Sale Percentage</mat-label>\n\n                <input matInput type=\"number\" formControlName=\"salePercentage\" required>\n\n              </mat-form-field>\n\n              <div>\n\n                <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Display on Whats New' | translate }}\">Display on What's New</mat-checkbox>\n\n              </div>\n\n            </div>\n\n            <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px margin-left-25px\">\n\n              <mat-form-field>\n\n                <mat-label>Description</mat-label>\n\n                <textarea matInput></textarea>\n\n              </mat-form-field>\n\n              <h3>Links</h3>\n\n              <div fxLayout=\"column\" class=\"border flex-grow-1 overflow-auto display-flex max-height-350px\">\n\n                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-bottom-25px\">\n\n                  <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n                    <!--table class=\"width-100pct\" mat-table [dataSource]=\"links\" matSort matSortDisableClear (matSortChange)=\"onSort()\">\n\n                      <ng-container matColumnDef=\"checkbox\">\n\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n\n                          <td mat-cell *matCellDef=\"let element\">\n\n                            <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\"></mat-checkbox>\n\n                          </td>\n\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"text\">\n\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                          Text\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{ element.text }} </td>\n\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"url\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                          Url\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n                            <mat-icon>edit</mat-icon>\n                          </button>\n                          <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\n                            <mat-icon>delete</mat-icon>\n                          </button>\n                        </td>\n                      </ng-container>\n\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n                      </tr>\n\n                    </table-->\n                  </div>\n                </div>\n                <div class=\"margin-left-25px margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n                  <mat-checkbox class=\"margin-top-10px margin-right-25px\" value=\"primary\" matTooltip=\"{{ 'Principal' | translate }}\">Check All</mat-checkbox>\n\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\">\n                    <mat-icon>edit</mat-icon>\n                  </button>\n\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\ntr.mat-header-row {\n  background-color: #f1f1f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9vZmZlci1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLW9mZmVyc1xcY29tcG9uZW50c1xcb2ZmZXItZm9ybVxcb2ZmZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9vZmZlci1mb3JtL29mZmVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ci5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OfferFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferFormComponent", function() { return OfferFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ms-shops/models/currency */ "./src/app/ms-back-office/modules/ms-shops/models/currency.ts");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/status */ "./src/app/ms-back-office/modules/ms-offers/models/status.ts");
/* harmony import */ var _models_shipping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/shipping */ "./src/app/ms-back-office/modules/ms-offers/models/shipping.ts");
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




var OfferFormComponent = /** @class */ (function (_super) {
    __extends(OfferFormComponent, _super);
    function OfferFormComponent(formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.currency = _ms_shops_models_currency__WEBPACK_IMPORTED_MODULE_4__["CURRENCY"];
        _this.status = _models_status__WEBPACK_IMPORTED_MODULE_5__["STATUS"];
        _this.shipping = _models_shipping__WEBPACK_IMPORTED_MODULE_6__["SHIPPING"];
        _this.displayedColumns = [
            'checkbox',
            'text',
            'url',
            'actions'
        ];
        _this.links = [{ text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }, { text: "lalala", url: "url" }];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    OfferFormComponent.prototype.ngOnInit = function () {
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
    OfferFormComponent.prototype.createFormGroup = function () {
        this.raffle = this.data.raffle;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            releaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.releaseId ? this.releaseId : this.data.releaseId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            shopId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shopId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            salePercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.salePercentage, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shipping, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            raffle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.raffle.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.raffle.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    OfferFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            //this.data.offerDate = new Date("2015/1/12");
            if (this.data.raffle === "true") {
                this.data.raffle = true;
            }
            else if (this.data.raffle === "false") {
                this.data.raffle = false;
            }
            this.accept.emit(this.data);
        }
        else {
            console.log('invalid');
            this.triggerValidation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OfferFormComponent.prototype, "customized", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OfferFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OfferFormComponent.prototype, "releaseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OfferFormComponent.prototype, "shops", void 0);
    OfferFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offer-form',
            template: __webpack_require__(/*! ./offer-form.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.html"),
            styles: [__webpack_require__(/*! ./offer-form.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], OfferFormComponent);
    return OfferFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <!--mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field-->\n\n  <!--mat-form-field>\n    <mat-label>Collection</mat-label>\n    <mat-select placeholder=\"Collection\" formControlName=\"collection\">\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n          {{collection.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field-->\n\n  <!--span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addNewOfferModal()\">CREATE A OFFER</button>\n</mat-toolbar-->\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"offers\" matSort [matSortActive]=\"offersService.previousSortColumn\"\n    [matSortDirection]=\"offersService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"SKU\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SKU\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"RELEASE NAME\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RELEASE NAME\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getRelease(element.releaseId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"COLLECTION\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLLECTION\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.collection }} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"COLOR\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            COLOR\n        </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"OFFICIAL RELEASE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          OFFICIAL RELEASE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.officialRelease }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SHOP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          SHOP\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getShop(element.shopId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"STATUS\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          STATUS\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.status }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SHIPING\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          SHIPING\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.shipping }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"UPDATED\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          UPDATED\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ACTION\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" (click)=\"editOfferModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getOfferToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>\n{{releaseId}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9vZmZlcnMtY29sbGVjdGlvbi10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1vZmZlcnNcXGNvbXBvbmVudHNcXG9mZmVycy1jb2xsZWN0aW9uLXRhYmxlXFxvZmZlcnMtY29sbGVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLW9mZmVycy9jb21wb25lbnRzL29mZmVycy1jb2xsZWN0aW9uLXRhYmxlL29mZmVycy1jb2xsZWN0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OffersCollectionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersCollectionTableComponent", function() { return OffersCollectionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-offer/edit-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts");
/* harmony import */ var _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../delete-offer/delete-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts");
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




var titleKey = 'Title Delete Offer';
var deleteBtnKey = 'Delete Offer';
var messageKey = 'Delete Offer';
var errorKey = 'Error';
var deletedOfferMessageKey = 'Deleted Offer';
var OffersCollectionTableComponent = /** @class */ (function () {
    function OffersCollectionTableComponent(activatedRoute, dialog, offersService, errorHandlingService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.offersService = offersService;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'SKU',
            'RELEASE NAME',
            'COLLECTION',
            'COLOR',
            'OFFICIAL RELEASE',
            'SHOP',
            'STATUS',
        ];
        this.totalLength = 0;
        this.offers = [];
    }
    OffersCollectionTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.releases = this.activatedRoute.snapshot.data.releases;
        this.shops = this.activatedRoute.snapshot.data.shops;
        // Begin observing style list changes.
        this.offersList = this.offersService.offersList.subscribe(function (offersList) {
            _this.totalLength = offersList.dataCount;
            _this.offers = offersList.data;
            if (_this.offers.length === 0 && _this.totalLength > 0 && _this.offersService.previousPageSize > 0) {
                _this.offersService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.offersService.previousPageSize) - 1;
                _this.offersService.reloadOffers().subscribe(function (response) {
                    _this.offersService.offersList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    OffersCollectionTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    OffersCollectionTableComponent.prototype.ngOnDestroy = function () {
        this.offersList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    OffersCollectionTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        //group['name'] = new FormControl('');
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    OffersCollectionTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.offersService.getOffers(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.offersService.offersList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    OffersCollectionTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersCollectionTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersCollectionTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    OffersCollectionTableComponent.prototype.getRelease = function (id) {
        try {
            return this.releases.find(function (release) {
                return release.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersCollectionTableComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersCollectionTableComponent.prototype.addNewOfferModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                shops: this.shops,
                releaseId: this.releaseId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    OffersCollectionTableComponent.prototype.editOfferModal = function (offerId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__["EditOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                offerId: offerId,
                shops: this.shops,
                releaseId: this.releaseId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    //delete
    OffersCollectionTableComponent.prototype.getOfferToDelete = function (data) {
        var _this = this;
        this.offersService.getOffer(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteOffer(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    OffersCollectionTableComponent.prototype.confirmDeleteOffer = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data.name }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteOffer(data);
            }
        });
    };
    OffersCollectionTableComponent.prototype.deleteOffer = function (data) {
        var _this = this;
        this.offersService.deleteOffer(data.id).subscribe(function (response) {
            _this.offersService.reloadOffers().subscribe(function (response) {
                _this.offersService.offersList.next(response);
                _this.toastr.success(deletedOfferMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OffersCollectionTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OffersCollectionTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"]),
        __metadata("design:type", _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"])
    ], OffersCollectionTableComponent.prototype, "deleteOfferComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OffersCollectionTableComponent.prototype, "releaseId", void 0);
    OffersCollectionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offers-collection-table',
            template: __webpack_require__(/*! ./offers-collection-table.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.html"),
            styles: [__webpack_require__(/*! ./offers-collection-table.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], OffersCollectionTableComponent);
    return OffersCollectionTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-flex justify-content-center\">\n\n  <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"addNewOfferModal()\">Add an offer to this Release</button>\n\n</div>\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"offers\" matSort [matSortActive]=\"offersService.previousSortColumn\"\n    [matSortDirection]=\"offersService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"sku\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SKU\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"releaseId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RELEASE NAME\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getRelease(element.releaseId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"collection\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLLECTION\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getCollection(element.collection) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLOR\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"officialRelease\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        OFFICIAL RELEASE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.officialRelease }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"shopId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SHOP\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getShop(element.shopId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        STATUS\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.status }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"shiping\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SHIPING\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.shipping }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"updatedAt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        UPDATED\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" (click)=\"editOfferModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getOfferToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9vZmZlcnMtcmVsZWFzZS10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1vZmZlcnNcXGNvbXBvbmVudHNcXG9mZmVycy1yZWxlYXNlLXRhYmxlXFxvZmZlcnMtcmVsZWFzZS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLW9mZmVycy9jb21wb25lbnRzL29mZmVycy1yZWxlYXNlLXRhYmxlL29mZmVycy1yZWxlYXNlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OffersReleaseTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersReleaseTableComponent", function() { return OffersReleaseTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-offer/edit-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts");
/* harmony import */ var _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../delete-offer/delete-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts");
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




var titleKey = 'Title Delete Offer';
var deleteBtnKey = 'Delete Offer';
var messageKey = 'Delete Offer';
var errorKey = 'Error';
var deletedOfferMessageKey = 'Deleted Offer';
var OffersReleaseTableComponent = /** @class */ (function () {
    function OffersReleaseTableComponent(activatedRoute, dialog, offersService, errorHandlingService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.offersService = offersService;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'sku',
            //'releaseId',
            'collection',
            'color',
            'officialRelease',
            'shopId',
            'status',
            //'shiping',
            //'updatedAt',
            'actions'
        ];
        this.totalLength = 0;
        this.offers = [];
    }
    OffersReleaseTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        /*this.collections = this.activatedRoute.snapshot.data.collections;
        this.releases = this.activatedRoute.snapshot.data.releases;
        this.shops = this.activatedRoute.snapshot.data.shops;*/
        console.log(this.collections + "hay....");
        // Begin observing style list changes.
        this.offersList = this.offersService.offersList.subscribe(function (offersList) {
            _this.totalLength = offersList.dataCount;
            _this.offers = offersList.data;
            if (_this.offers.length === 0 && _this.totalLength > 0 && _this.offersService.previousPageSize > 0) {
                _this.offersService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.offersService.previousPageSize) - 1;
                _this.offersService.reloadOffers().subscribe(function (response) {
                    _this.offersService.offersList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    OffersReleaseTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    OffersReleaseTableComponent.prototype.ngOnDestroy = function () {
        this.offersList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    OffersReleaseTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['releaseId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.releaseId);
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    OffersReleaseTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.offersService.getOffers(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.offersService.offersList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    OffersReleaseTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersReleaseTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersReleaseTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    OffersReleaseTableComponent.prototype.getRelease = function (id) {
        try {
            return this.releases.find(function (release) {
                return release.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersReleaseTableComponent.prototype.getCollection = function (id) {
        try {
            return this.collections.find(function (collection) {
                return collection.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersReleaseTableComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersReleaseTableComponent.prototype.addNewOfferModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                shops: this.shops,
                releaseId: this.releaseId,
                customized: this.customized
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    OffersReleaseTableComponent.prototype.editOfferModal = function (offerId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__["EditOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                offerId: offerId,
                shops: this.shops,
                releaseId: this.releaseId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    //delete
    OffersReleaseTableComponent.prototype.getOfferToDelete = function (data) {
        var _this = this;
        this.offersService.getOffer(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteOffer(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    OffersReleaseTableComponent.prototype.confirmDeleteOffer = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data.name }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteOffer(data);
            }
        });
    };
    OffersReleaseTableComponent.prototype.deleteOffer = function (data) {
        var _this = this;
        this.offersService.deleteOffer(data.id).subscribe(function (response) {
            _this.offersService.reloadOffers().subscribe(function (response) {
                _this.offersService.offersList.next(response);
                _this.toastr.success(deletedOfferMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OffersReleaseTableComponent.prototype, "collections", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OffersReleaseTableComponent.prototype, "customized", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OffersReleaseTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OffersReleaseTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"]),
        __metadata("design:type", _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"])
    ], OffersReleaseTableComponent.prototype, "deleteOfferComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OffersReleaseTableComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OffersReleaseTableComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OffersReleaseTableComponent.prototype, "releaseId", void 0);
    OffersReleaseTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offers-release-table',
            template: __webpack_require__(/*! ./offers-release-table.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.html"),
            styles: [__webpack_require__(/*! ./offers-release-table.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], OffersReleaseTableComponent);
    return OffersReleaseTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Offers Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <!--mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field-->\n\n  <!--mat-form-field>\n    <mat-label>Collection</mat-label>\n    <mat-select placeholder=\"Collection\" formControlName=\"collection\">\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n          {{collection.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field-->\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addNewOfferModal()\">CREATE A OFFER</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"offers\" matSort [matSortActive]=\"offersService.previousSortColumn\"\n    [matSortDirection]=\"offersService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"sku\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SKU\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.sku }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"releaseId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RELEASE NAME\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getRelease(element.releaseId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"collectionId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLLECTION\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.collection }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLOR\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.color }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"offerDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        OFFICIAL RELEASE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.officialRelease }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"shopId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SHOP\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getShop(element.shopId) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        STATUS\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\">\n        <div>\n          {{ element.status }}\n          <mat-slide-toggle *ngIf=\"element.status === 'sold_out'\" class=\"margin-bottom-25px margin-top-25px margin-left-5px\" [checked]=\"false\"\n            (click)=\"changeStatus(element)\"></mat-slide-toggle>\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"shiping\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SHIPING\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.shipping }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"updatedAt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        UPDATED\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" (click)=\"editOfferModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getOfferToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>\n{{releaseId}}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1vZmZlcnMvY29tcG9uZW50cy9vZmZlcnMtdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtb2ZmZXJzXFxjb21wb25lbnRzXFxvZmZlcnMtdGFibGVcXG9mZmVycy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEOztFQUVJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLHFCQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLW9mZmVycy9jb21wb25lbnRzL29mZmVycy10YWJsZS9vZmZlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OffersTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersTableComponent", function() { return OffersTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/offers.service */ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts");
/* harmony import */ var _new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-offer/edit-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts");
/* harmony import */ var _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../delete-offer/delete-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts");
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




var titleKey = 'Title Delete Offer';
var deleteBtnKey = 'Delete Offer';
var messageKey = 'Delete Offer';
var errorKey = 'Error';
var deletedOfferMessageKey = 'Deleted Offer';
var OffersTableComponent = /** @class */ (function () {
    function OffersTableComponent(activatedRoute, dialog, offersService, errorHandlingService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.offersService = offersService;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'sku',
            'releaseId',
            'collectionId',
            'color',
            'offerDate',
            'shopId',
            'status',
            'shiping',
            'updatedAt',
            'actions'
        ];
        this.totalLength = 0;
        this.offers = [];
    }
    OffersTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.releases = this.activatedRoute.snapshot.data.releases;
        this.shops = this.activatedRoute.snapshot.data.shops;
        // Begin observing style list changes.
        this.offersList = this.offersService.offersList.subscribe(function (offersList) {
            _this.totalLength = offersList.dataCount;
            _this.offers = offersList.data;
            if (_this.offers.length === 0 && _this.totalLength > 0 && _this.offersService.previousPageSize > 0) {
                _this.offersService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.offersService.previousPageSize) - 1;
                _this.offersService.reloadOffers().subscribe(function (response) {
                    _this.offersService.offersList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    OffersTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    OffersTableComponent.prototype.ngOnDestroy = function () {
        this.offersList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    OffersTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        //group['name'] = new FormControl('');
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    OffersTableComponent.prototype.changeStatus = function (offerData) {
        var _this = this;
        offerData.status = 'available';
        this.offersService.putOffer(offerData).subscribe(function (response) {
            _this.loadPage();
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    OffersTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.offersService.getOffers(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.offersService.offersList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    OffersTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    OffersTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    OffersTableComponent.prototype.getRelease = function (id) {
        try {
            return this.releases.find(function (release) {
                return release.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersTableComponent.prototype.getShop = function (id) {
        try {
            return this.shops.find(function (shop) {
                return shop.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    OffersTableComponent.prototype.addNewOfferModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_9__["NewOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                shops: this.shops,
                releaseId: this.releaseId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    OffersTableComponent.prototype.editOfferModal = function (offerId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_10__["EditOfferComponent"], {
            height: '90%',
            width: '90%',
            data: {
                offerId: offerId,
                shops: this.shops,
                releaseId: this.releaseId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    //delete
    OffersTableComponent.prototype.getOfferToDelete = function (data) {
        var _this = this;
        this.offersService.getOffer(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteOffer(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    OffersTableComponent.prototype.confirmDeleteOffer = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data.name }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteOffer(data);
            }
        });
    };
    OffersTableComponent.prototype.deleteOffer = function (data) {
        var _this = this;
        this.offersService.deleteOffer(data.id).subscribe(function (response) {
            _this.offersService.reloadOffers().subscribe(function (response) {
                _this.offersService.offersList.next(response);
                _this.toastr.success(deletedOfferMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], OffersTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OffersTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"]),
        __metadata("design:type", _delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_11__["DeleteOfferComponent"])
    ], OffersTableComponent.prototype, "deleteOfferComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OffersTableComponent.prototype, "releaseId", void 0);
    OffersTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offers-table',
            template: __webpack_require__(/*! ./offers-table.component.html */ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.html"),
            styles: [__webpack_require__(/*! ./offers-table.component.scss */ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], OffersTableComponent);
    return OffersTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/models/shipping.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/models/shipping.ts ***!
  \*********************************************************************/
/*! exports provided: Shipping, SHIPPING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipping", function() { return Shipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIPPING", function() { return SHIPPING; });
var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    return Shipping;
}());

;
var SHIPPING = [
    { id: 'worldwide', name: 'Worldwide' },
    { id: 'unavailable', name: 'Unavailable' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/models/status.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/models/status.ts ***!
  \*******************************************************************/
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
    { id: 'sold_out', name: 'Sold Out' },
    { id: 'available', name: 'Available' },
    { id: 'on_sale', name: 'On Sale' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/ms-offers-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/ms-offers-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MsOffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsOffersRoutingModule", function() { return MsOffersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_offers_table_offers_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/offers-table/offers-table.component */ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.ts");
/* harmony import */ var _components_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-offer/delete-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts");
/* harmony import */ var _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-offer/edit-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts");
/* harmony import */ var _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-releases/services/releases-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
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
        component: _components_offers_table_offers_table_component__WEBPACK_IMPORTED_MODULE_2__["OffersTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_10__["ReleasesResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_5__["NewOfferComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_10__["ReleasesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_4__["EditOfferComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_3__["DeleteOfferComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brandId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsOffersRoutingModule = /** @class */ (function () {
    function MsOffersRoutingModule() {
    }
    MsOffersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsOffersRoutingModule);
    return MsOffersRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts ***!
  \**********************************************************************/
/*! exports provided: MsOffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsOffersModule", function() { return MsOffersModule; });
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
/* harmony import */ var _components_offers_table_offers_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/offers-table/offers-table.component */ "./src/app/ms-back-office/modules/ms-offers/components/offers-table/offers-table.component.ts");
/* harmony import */ var _components_offers_collection_table_offers_collection_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/offers-collection-table/offers-collection-table.component */ "./src/app/ms-back-office/modules/ms-offers/components/offers-collection-table/offers-collection-table.component.ts");
/* harmony import */ var _components_offers_release_table_offers_release_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/offers-release-table/offers-release-table.component */ "./src/app/ms-back-office/modules/ms-offers/components/offers-release-table/offers-release-table.component.ts");
/* harmony import */ var _components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/link-offers-collection/link-offers-collection-modal.component */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts");
/* harmony import */ var _ms_offers_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ms-offers-routing.module */ "./src/app/ms-back-office/modules/ms-offers/ms-offers-routing.module.ts");
/* harmony import */ var _components_offer_form_offer_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/offer-form/offer-form.component */ "./src/app/ms-back-office/modules/ms-offers/components/offer-form/offer-form.component.ts");
/* harmony import */ var _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/new-offer/new-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/new-offer/new-offer.component.ts");
/* harmony import */ var _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-offer/edit-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/edit-offer/edit-offer.component.ts");
/* harmony import */ var _components_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/delete-offer/delete-offer.component */ "./src/app/ms-back-office/modules/ms-offers/components/delete-offer/delete-offer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//















//










var MsOffersModule = /** @class */ (function () {
    function MsOffersModule() {
    }
    MsOffersModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _ms_offers_routing_module__WEBPACK_IMPORTED_MODULE_20__["MsOffersRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__["AskBeforeRefreshModule"]
            ],
            declarations: [
                _components_offers_collection_table_offers_collection_table_component__WEBPACK_IMPORTED_MODULE_17__["OffersCollectionTableComponent"],
                _components_offers_table_offers_table_component__WEBPACK_IMPORTED_MODULE_16__["OffersTableComponent"],
                _components_offer_form_offer_form_component__WEBPACK_IMPORTED_MODULE_21__["OfferFormComponent"],
                _components_offers_release_table_offers_release_table_component__WEBPACK_IMPORTED_MODULE_18__["OffersReleaseTableComponent"],
                _components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_19__["LinkOffersCollentionModalComponent"],
                _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_22__["NewOfferComponent"],
                _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_23__["EditOfferComponent"],
                _components_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_24__["DeleteOfferComponent"]
            ],
            exports: [
                _components_offers_collection_table_offers_collection_table_component__WEBPACK_IMPORTED_MODULE_17__["OffersCollectionTableComponent"],
                _components_offers_table_offers_table_component__WEBPACK_IMPORTED_MODULE_16__["OffersTableComponent"],
                _components_offer_form_offer_form_component__WEBPACK_IMPORTED_MODULE_21__["OfferFormComponent"],
                _components_offers_release_table_offers_release_table_component__WEBPACK_IMPORTED_MODULE_18__["OffersReleaseTableComponent"],
                _components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_19__["LinkOffersCollentionModalComponent"],
                _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_22__["NewOfferComponent"],
                _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_23__["EditOfferComponent"],
                _components_delete_offer_delete_offer_component__WEBPACK_IMPORTED_MODULE_24__["DeleteOfferComponent"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            entryComponents: [
                _components_new_offer_new_offer_component__WEBPACK_IMPORTED_MODULE_22__["NewOfferComponent"],
                _components_edit_offer_edit_offer_component__WEBPACK_IMPORTED_MODULE_23__["EditOfferComponent"],
                _components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_19__["LinkOffersCollentionModalComponent"]
            ]
        })
    ], MsOffersModule);
    return MsOffersModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-offers/services/offers.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ASCENDING, OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
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
var OffersService = /** @class */ (function () {
    function OffersService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = '';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.offersList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.offers.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    OffersService.prototype.getOffers = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a Offer for example.
    //
    OffersService.prototype.reloadOffers = function () {
        return this.getOffers(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    OffersService.prototype.postOffer = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    OffersService.prototype.getOffer = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    OffersService.prototype.putOffer = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    OffersService.prototype.deleteOffer = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    OffersService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.releaseId && filter.releaseId.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "releaseId=" + filter.releaseId;
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
    OffersService.prototype.getAllOffers = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    OffersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], OffersService);
    return OffersService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReleasesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesResolveService", function() { return ReleasesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _releases_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
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
var ReleasesResolveService = /** @class */ (function () {
    function ReleasesResolveService(releasesService, translate, errorHandlingService) {
        this.releasesService = releasesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ReleasesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.releasesService.getAllReleases().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    ReleasesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_releases_service__WEBPACK_IMPORTED_MODULE_5__["ReleasesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ReleasesResolveService);
    return ReleasesResolveService;
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

/***/ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ShopsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsResolveService", function() { return ShopsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _shops_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
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
var ShopsResolveService = /** @class */ (function () {
    function ShopsResolveService(shopsService, translate, errorHandlingService) {
        this.shopsService = shopsService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ShopsResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.shopsService.getAllShops().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    ShopsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shops_service__WEBPACK_IMPORTED_MODULE_5__["ShopsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], ShopsResolveService);
    return ShopsResolveService;
}());



/***/ })

}]);
//# sourceMappingURL=default~ms-collections-ms-collections-module~ms-offers-ms-offers-module~ms-releases-ms-releases-modu~9021e546.js.map