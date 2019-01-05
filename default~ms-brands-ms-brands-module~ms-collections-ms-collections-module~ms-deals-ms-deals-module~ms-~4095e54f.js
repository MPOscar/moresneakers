(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-deals-ms-deals-module~ms-~4095e54f"],{

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\n    <div fxLayout=\"column\">\n        <h1>BRAND CREATOR</h1>\n    </div>\n\n    <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\n\n        <div [fxFlex]=\"30\" class=\"margin-right-10px\">\n\n            <button mat-stroked-button type=\"submit\" class=\"width-90pct\" (click)=\"showModal()\">Add a New Brand</button>\n\n            <mat-form-field class=\"width-90pct padding-top-20px\">\n\n                <mat-label>BRAND LIST</mat-label>\n\n                <mat-select placeholder=\"Select\" panelOpen=\"true\">\n\n                    <mat-option>...</mat-option>\n\n                    <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                        {{brand.name}}\n\n                    </mat-option>\n\n                </mat-select>\n\n            </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-top-10px max-width-60-pct\" [fxFlex]=\"70\" fxLayout=\"row\" class=\"border-2px-solid-black margin-bottom-25px margin-right-10px\">\n            <div fxLayout=\"column\">\n                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px\">\n\n                    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n                        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\n                            <mat-card *ngFor=\"let i of [33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33]\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\n                                <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\n                                    <!--img class=\"img\" imageLoad [container]=\"imageContainer\" src=\"\"-->\n                                </div>\n                                <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\n                                    <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\"> Store Name </mat-checkbox>\n                                </div>\n                            </mat-card>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\n\n                    <button mat-stroked-button type=\"submit\">Remove Selection</button>\n\n                    <button mat-raised-button type=\"button\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkShopsModalBrand()\">{{ 'Link New Stores' | translate }}</button>\n\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n\n    <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save Changes' | translate }}</button>\n\n        <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"close()\">{{ 'Cancel' | translate }}</button>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWwtY3JlYXRvci9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1kZWFsc1xcY29tcG9uZW50c1xcZGVhbC1jcmVhdG9yXFxkZWFsLWNyZWF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGFBQ0YsRUFBQzs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWRlYWxzL2NvbXBvbmVudHMvZGVhbC1jcmVhdG9yL2RlYWwtY3JlYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgbWF4LWhlaWdodDogODJ2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1heC13aWR0aC02MC1wY3R7XHJcbiAgICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgdGQubWF0LWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DealCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealCreatorComponent", function() { return DealCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
/* harmony import */ var _new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-deal/new-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts");
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






//import { LinkShopsModalComponent } from '../../../ms-shops/components/link-shops/link-shops-modal.component';
var errorKey = 'Error';
var savedMessageKey = 'Saved';
var DealCreatorComponent = /** @class */ (function () {
    function DealCreatorComponent(activatedRoute, dealsService, errorHandlingService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.dealsService = dealsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            id: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    DealCreatorComponent.prototype.ngOnInit = function () {
        this.deals = this.activatedRoute.snapshot.data.Deals;
    };
    DealCreatorComponent.prototype.submit = function (data) {
        this.createUser(data);
    };
    DealCreatorComponent.prototype.cancel = function () {
        this.close();
    };
    DealCreatorComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DealCreatorComponent.prototype.createUser = function (data) {
        var _this = this;
        this.dealsService.postDeal(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            //this.close.emit();TODO
            _this.close();
            _this.toastr.success(savedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    DealCreatorComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_9__["NewDealComponent"], {
            height: '90%',
            width: '90%',
            data: { Deals: this.deals }
        });
    };
    DealCreatorComponent.prototype.linkShopsModalDeal = function () {
        /*his.modalRef = this.dialog.open(LinkShopsModalComponent, {
          height: '90%',
          width: '90%',
          data: { data: this.data }
        });*/
    };
    DealCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deal-creator',
            template: __webpack_require__(/*! ./deal-creator.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.html"),
            styles: [__webpack_require__(/*! ./deal-creator.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_8__["DealsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DealCreatorComponent);
    return DealCreatorComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div [fxFlex]=\"\" fxLayout=\"row\">\n\n        <div [fxFlex]=\"40\" fxLayout=\"column\" class=\"margin-left-10px margin-right-10px\">\n\n          <mat-form-field class=\"width-100pc\" *ngIf=\"!shopId\">\n\n            <mat-label>Shops</mat-label>\n\n            <mat-select placeholder=\"Select Shop\" formControlName=\"shopId\" required>\n\n              <mat-option>...</mat-option>\n\n              <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\">\n\n                {{shop.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-select placeholder=\"Url\" formControlName=\"url\" required>\n\n              <mat-option>...</mat-option>\n\n              <mat-option *ngFor=\"let url of urls\" [value]=\"url.id\">\n\n                {{url.url}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n          <div fxLayout=\"row\">\n\n            <div [fxFlex]=\"50\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <input matInput [matDatepicker]=\"startDate\" placeholder=\"Start Date\" formControlName=\"startDate\">\n\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n\n                <mat-datepicker #startDate></mat-datepicker>\n\n              </mat-form-field>\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <input matInput [matDatepicker]=\"endDate\" placeholder=\"End Date\" formControlName=\"endDate\">\n\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n\n                <mat-datepicker #endDate></mat-datepicker>\n\n              </mat-form-field>\n\n            </div>\n\n          </div>\n\n          <div fxLayout=\"row\">\n\n            <div [fxFlex]=\"50\">\n\n              <mat-form-field class=\"width-90pct\">\n\n                <mat-label>Sale Percentage</mat-label>\n\n                <input matInput type=\"number\" formControlName=\"salePercentage\" required>\n\n              </mat-form-field>\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select placeholder=\"Status\" formControlName=\"status\" required>\n\n                  <mat-option>...</mat-option>\n\n                  <mat-option *ngFor=\"let state of status\" [value]=\"state.value\">\n\n                    {{state.status}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n            </div>\n\n          </div>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\">\n\n            <mat-label>Promo Code</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"promoCode\" required>\n\n          </mat-form-field>\n\n          <div fxLayout=\"column\" class=\"margin-top-18px flex-grow-0\">\n\n            <mat-label>Time</mat-label>\n\n            <div fxLayout=\"row\" class=\"flex-grow-0\">\n\n              <div [fxFlex]=\"50\">\n\n                <mat-form-field class=\"width-90pct\">\n\n                  <mat-label></mat-label>\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\" formControlName=\"time\" />\n\n                </mat-form-field>\n\n              </div>\n\n              <!--div [fxFlex]=\"50\">\n\n                <mat-form-field class=\"width-100pct\">\n\n                  <mat-label></mat-label>\n\n                  <input matInput atp-time-picker class=\"cursor-pointer\"/>\n\n                </mat-form-field>\n\n              </div-->\n\n            </div>\n\n            <div [fxFlex]=\"50\">\n\n              <mat-checkbox formControlName=\"displayOnSale\">Display On Sale</mat-checkbox>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div [fxFlex]=\"60\" class=\"margin-left-10px margin-right-10px\">\n\n          <image-card name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\n\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWwtZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1kZWFsc1xcY29tcG9uZW50c1xcZGVhbC1mb3JtXFxkZWFsLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtZGVhbHMvY29tcG9uZW50cy9kZWFsLWZvcm0vZGVhbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DealFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealFormComponent", function() { return DealFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/status */ "./src/app/ms-back-office/modules/ms-deals/models/status.ts");
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



var DealFormComponent = /** @class */ (function (_super) {
    __extends(DealFormComponent, _super);
    function DealFormComponent(dialog, formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.formBuilder = formBuilder;
        _this.faceList = [];
        //modalRef: MatDialogRef<LinkShopsModalComponent>;
        _this.status = _models_status__WEBPACK_IMPORTED_MODULE_6__["STATUS"];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    DealFormComponent.prototype.ngOnInit = function () {
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
    DealFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.url, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.startDate),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.endDate),
            promoCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.promoCode),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.time),
            displayOnSale: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.displayOnSale),
            salePercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.salePercentage),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.status),
            shopId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.shopId ? this.shopId : this.data.shopId),
        });
    };
    DealFormComponent.prototype.submitClicked = function () {
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
    ], DealFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__["Face"])
    ], DealFormComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DealFormComponent.prototype, "urls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealFormComponent.prototype, "shopId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DealFormComponent.prototype, "shops", void 0);
    DealFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deal-form',
            template: __webpack_require__(/*! ./deal-form.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.html"),
            styles: [__webpack_require__(/*! ./deal-form.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DealFormComponent);
    return DealFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display-flex justify-content-end margin-right-25px\">\n\n  <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"addNewDealModal()\">CREATE A DEAL</button>\n\n</div>\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"deals\" matSort [matSortActive]=\"dealsService.previousSortColumn\"\n    [matSortDirection]=\"dealsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"URL\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        URL\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"> {{ getUrl(element.url) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"THUMBNAIL\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\" [ngClass]=\"{'background-td': element.id === dealId}\">\n        <div class=\"position-relative margin-top-5px\">\n          <img [src]=\"element.imgUrl\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SALEPERCENTAGE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SALEPERCENTAGE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"> {{ element.salePercentage }} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"STATUS\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        STATUS\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"> {{ element.status }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PROMOCODE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PROMOCODE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"> {{ element.promoCode }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"TIME\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        TIME\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"> {{ element.time }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ACTIONS\">\n      <th mat-header-cell *matHeaderCellDef>\n      </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'background-td': element.id === dealId}\"  class=\"min-width-80px\">\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" (click)=\"editDealModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getDealToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWxzLXNob3AtdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtZGVhbHNcXGNvbXBvbmVudHNcXGRlYWxzLXNob3AtdGFibGVcXGRlYWxzLXNob3AtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWxzLXNob3AtdGFibGUvZGVhbHMtc2hvcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DealsShopTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsShopTableComponent", function() { return DealsShopTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
/* harmony import */ var _new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-deal/new-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts");
/* harmony import */ var _edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-deal/edit-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts");
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
var messageKey = 'Are you sure you want to delete this Deal?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DealsShopTableComponent = /** @class */ (function () {
    function DealsShopTableComponent(activatedRoute, dealsService, dialog, errorHandlingService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dealsService = dealsService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'URL',
            'THUMBNAIL',
            'SALEPERCENTAGE',
            'STATUS',
            'PROMOCODE',
            'TIME',
            'ACTIONS'
        ];
        this.totalLength = 0;
        this.deals = [];
    }
    DealsShopTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.urls = this.activatedRoute.snapshot.data.urls;
        // Begin observing style list changes.
        this.dealsList = this.dealsService.dealsList.subscribe(function (dealsList) {
            _this.totalLength = dealsList.dataCount;
            _this.deals = dealsList.data;
            if (_this.deals.length === 0 && _this.totalLength > 0 && _this.dealsService.previousPageSize > 0) {
                _this.dealsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.dealsService.previousPageSize) - 1;
                _this.dealsService.reloadDeals().subscribe(function (response) {
                    _this.dealsService.dealsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    DealsShopTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    DealsShopTableComponent.prototype.ngOnDestroy = function () {
        this.dealsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    DealsShopTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['url'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['shopId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.shopId);
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    DealsShopTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.dealsService.getDeals(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.dealsService.dealsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    DealsShopTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    DealsShopTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    DealsShopTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    DealsShopTableComponent.prototype.addNewDealModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_9__["NewDealComponent"], {
            height: '90%',
            width: '90%',
            data: {
                urls: this.urls,
                shopId: this.shopId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    DealsShopTableComponent.prototype.editDealModal = function (dealId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_10__["EditDealComponent"], {
            height: '90%',
            width: '90%',
            data: {
                dealId: dealId,
                urls: this.urls,
                shopId: this.shopId,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    DealsShopTableComponent.prototype.getDealToDelete = function (data) {
        var _this = this;
        this.dealsService.getDeal(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteDeal(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DealsShopTableComponent.prototype.confirmDeleteDeal = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data.id }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteDeal(data);
            }
        });
    };
    DealsShopTableComponent.prototype.deleteDeal = function (data) {
        var _this = this;
        this.dealsService.deleteDeal(data.id).subscribe(function (response) {
            _this.dealsService.reloadDeals().subscribe(function (response) {
                _this.dealsService.dealsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    DealsShopTableComponent.prototype.getUrl = function (id) {
        try {
            return this.urls.find(function (url) {
                return url.id === id;
            }).url;
        }
        catch (err) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DealsShopTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DealsShopTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealsShopTableComponent.prototype, "shopId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealsShopTableComponent.prototype, "offerId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealsShopTableComponent.prototype, "dealId", void 0);
    DealsShopTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deals-shop-table',
            template: __webpack_require__(/*! ./deals-shop-table.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.html"),
            styles: [__webpack_require__(/*! ./deals-shop-table.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_8__["DealsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], DealsShopTableComponent);
    return DealsShopTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Deals</h3>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"url\" placeholder=\"url\">\n  </mat-form-field>\n\n  <!--mat-form-field>\n    <mat-label>Collection</mat-label>\n    <mat-select placeholder=\"Collection\" formControlName=\"collection\">\n        <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n          {{collection.name}}\n        </mat-option>\n      </mat-select>\n  </mat-form-field-->\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"addNewDealModal()\">CREATE A DEAL</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"deals\" matSort [matSortActive]=\"dealsService.previousSortColumn\"\n    [matSortDirection]=\"dealsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"URL\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        URL\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ getUrl(element.url) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"THUMBNAIL\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\n        <div class=\"position-relative margin-top-5px\">\n          <img [src]=\"element.imgUrl\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SALEPERCENTAGE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        SALEPERCENTAGE\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.salePercentage }} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"STATUS\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        STATUS\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.status }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PROMOCODE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PROMOCODE\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.promoCode }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"TIME\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        TIME\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.time }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ACTIONS\">\n      <th mat-header-cell *matHeaderCellDef>\n      </th>\n      <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" [routerLink]=\"['../../shops/edit', element.shopId]\" [queryParams]=\"{dealId: element.id, returnUrl: location.path()}\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Delete\" (click)=\"getDealToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWxzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWRlYWxzXFxjb21wb25lbnRzXFxkZWFscy10YWJsZVxcZGVhbHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2RlYWxzLXRhYmxlL2RlYWxzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DealsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsTableComponent", function() { return DealsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
/* harmony import */ var _new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-deal/new-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts");
/* harmony import */ var _edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../edit-deal/edit-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts");
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
var messageKey = 'Are you sure you want to delete this Deal?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DealsTableComponent = /** @class */ (function () {
    function DealsTableComponent(activatedRoute, dealsService, dialog, errorHandlingService, location, toastr) {
        this.activatedRoute = activatedRoute;
        this.dealsService = dealsService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.location = location;
        this.toastr = toastr;
        this.displayedColumns = [
            'URL',
            'THUMBNAIL',
            'SALEPERCENTAGE',
            'STATUS',
            'PROMOCODE',
            'TIME',
            'ACTIONS'
        ];
        this.totalLength = 0;
        this.deals = [];
    }
    DealsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.urls = this.activatedRoute.snapshot.data.urls;
        this.shops = this.activatedRoute.snapshot.data.shops;
        // Begin observing style list changes.
        this.dealsList = this.dealsService.dealsList.subscribe(function (dealsList) {
            _this.totalLength = dealsList.dataCount;
            _this.deals = dealsList.data;
            if (_this.deals.length === 0 && _this.totalLength > 0 && _this.dealsService.previousPageSize > 0) {
                _this.dealsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.dealsService.previousPageSize) - 1;
                _this.dealsService.reloadDeals().subscribe(function (response) {
                    _this.dealsService.dealsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    DealsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    DealsTableComponent.prototype.ngOnDestroy = function () {
        this.dealsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    DealsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['url'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['shopId'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.shopId);
        //group['collection'] = new FormControl('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    DealsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.dealsService.getDeals(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.dealsService.dealsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    DealsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    DealsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    DealsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    DealsTableComponent.prototype.addNewDealModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_10__["NewDealComponent"], {
            height: '90%',
            width: '90%',
            data: {
                urls: this.urls,
                shopId: this.shopId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    DealsTableComponent.prototype.editDealModal = function (dealId) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_11__["EditDealComponent"], {
            height: '90%',
            width: '90%',
            data: {
                dealId: dealId,
                urls: this.urls,
                shopId: this.shopId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    DealsTableComponent.prototype.getDealToDelete = function (data) {
        var _this = this;
        this.dealsService.getDeal(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteDeal(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DealsTableComponent.prototype.confirmDeleteDeal = function (data) {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data.id }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteDeal(data);
            }
        });
    };
    DealsTableComponent.prototype.deleteDeal = function (data) {
        var _this = this;
        this.dealsService.deleteDeal(data.id).subscribe(function (response) {
            _this.dealsService.reloadDeals().subscribe(function (response) {
                _this.dealsService.dealsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    DealsTableComponent.prototype.getUrl = function (id) {
        try {
            return this.urls.find(function (url) {
                return url.id === id;
            }).url;
        }
        catch (err) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], DealsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DealsTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DealsTableComponent.prototype, "shopId", void 0);
    DealsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deals-table',
            template: __webpack_require__(/*! ./deals-table.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.html"),
            styles: [__webpack_require__(/*! ./deals-table.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_9__["DealsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], DealsTableComponent);
    return DealsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtZGVhbHMvY29tcG9uZW50cy9kZWxldGUtZGVhbC9kZWxldGUtZGVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDealComponent", function() { return DeleteDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
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
var messageKey = 'Are you sure you want to delete this Deal?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteDealComponent = /** @class */ (function () {
    function DeleteDealComponent(activatedRoute, dialog, dealsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dealsService = dealsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteDealComponent.prototype.ngAfterViewInit = function () {
        this.getDeal();
    };
    DeleteDealComponent.prototype.ngOnInit = function () {
        this.dealId = this.activatedRoute.snapshot.data.dealId;
    };
    DeleteDealComponent.prototype.getDeal = function () {
        var _this = this;
        this.dealsService.getDeal(this.dealId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteDeal();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteDealComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteDealComponent.prototype.confirmDeleteDeal = function () {
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
                _this.deleteDeal();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteDealComponent.prototype.deleteDeal = function () {
        var _this = this;
        this.dealsService.deleteDeal(this.data.id).subscribe(function (response) {
            _this.dealsService.reloadDeals().subscribe(function (response) {
                _this.dealsService.dealsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteDealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-deal',
            template: __webpack_require__(/*! ./delete-deal.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.html"),
            styles: [__webpack_require__(/*! ./delete-deal.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_7__["DealsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteDealComponent);
    return DeleteDealComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT DEAL</h1>\n\n<deal-form *ngIf=\"data\"\n    [data]=\"data\"\n    [urls]=\"dialogData.urls\"\n    [shops]=\"DialogData.shops\"\n    [faceList]=\"faceList\"\n    [principal]=\"principal\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</deal-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*  ::ng-deep .mat-dialog-container {\r\n    padding-right: 0px !important;\r\n  }*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2VkaXQtZGVhbC9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1kZWFsc1xcY29tcG9uZW50c1xcZWRpdC1kZWFsXFxlZGl0LWRlYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVIOztLQUVLIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL2VkaXQtZGVhbC9lZGl0LWRlYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi8qICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDealComponent", function() { return EditDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
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
var EditDealComponent = /** @class */ (function () {
    function EditDealComponent(activatedRoute, DealsService, dialog, dialogRef, errorHandlingService, imagesService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.DealsService = DealsService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
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
        this.faceList = [];
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditDealComponent.prototype.ngOnInit = function () {
        this.dealId = this.dialogData.dealId;
    };
    EditDealComponent.prototype.ngAfterViewInit = function () {
        this.getDeal();
    };
    EditDealComponent.prototype.getDeal = function () {
        var _this = this;
        this.DealsService.getDeal(this.dealId).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.imgUrl) {
                var face = {
                    imgUrl: _this.data.imgUrl,
                };
                _this.faceList = [face];
                _this.principal = face;
            }
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditDealComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateDeal(data);
    };
    EditDealComponent.prototype.cancel = function () {
        this.close();
    };
    EditDealComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditDealComponent.prototype.updateDeal = function (dealData) {
        var _this = this;
        if (dealData.faces && dealData.faces.length > 0) {
            for (var position in dealData.faces) {
                var face = dealData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__["State"].New) {
                    var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                        dealData.imgUrl = response.data.url;
                        _this.DealsService.putDeal(dealData).subscribe(function (response) {
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
                    this.DealsService.putDeal(dealData).subscribe(function (response) {
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
            this.DealsService.putDeal(dealData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(updatedMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
                _this.validationErrors = error.formErrors;
            });
        }
    };
    EditDealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-deal',
            template: __webpack_require__(/*! ./edit-deal.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.html"),
            styles: [__webpack_require__(/*! ./edit-deal.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_9__["DealsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], Object])
    ], EditDealComponent);
    return EditDealComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD NEW DEAL</h1>\n<deal-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    [urls]=\"DialogData.urls\"\n    [shops]=\"DialogData.shops\"\n    [shopId]=\"DialogData.shopId\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</deal-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*  ::ng-deep .mat-dialog-container {\r\n    padding-right: 0px !important;\r\n  }*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL25ldy1kZWFsL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWRlYWxzXFxjb21wb25lbnRzXFxuZXctZGVhbFxcbmV3LWRlYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVIOztLQUVLIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1kZWFscy9jb21wb25lbnRzL25ldy1kZWFsL25ldy1kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4vKiAgOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICB9Ki8iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDealComponent", function() { return NewDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
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
var NewDealComponent = /** @class */ (function () {
    function NewDealComponent(dialogRef, activatedRoute, DealsService, errorHandlingService, imagesService, router, translate, toastr, dialog, DialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.DealsService = DealsService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.DialogData = DialogData;
        this.data = {
            imgUrl: "",
            displayOnSale: false,
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewDealComponent.prototype.submit = function (data) {
        this.createDeal(data);
    };
    NewDealComponent.prototype.cancel = function () {
        this.close();
    };
    NewDealComponent.prototype.close = function () {
        this.dialogRef.close();
        //this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewDealComponent.prototype.createDeal = function (dealData) {
        var _this = this;
        if (dealData.faces && dealData.faces.length > 0) {
            for (var position in dealData.faces) {
                var face = dealData.faces[position];
                var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                    dealData.imgUrl = response.data.url;
                    _this.DealsService.postDeal(dealData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(savedMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error, 'deal');
                        _this.validationErrors = error.formErrors;
                    });
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
        else {
            this.DealsService.postDeal(dealData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(savedMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error, 'deal');
                _this.validationErrors = error.formErrors;
            });
        }
    };
    NewDealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-deal',
            template: __webpack_require__(/*! ./new-deal.component.html */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.html"),
            styles: [__webpack_require__(/*! ./new-deal.component.scss */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_deals_service__WEBPACK_IMPORTED_MODULE_8__["DealsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewDealComponent);
    return NewDealComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/models/status.ts":
/*!******************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/models/status.ts ***!
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
    { value: 'Coming Soon', status: 'Coming Soon' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/ms-deals-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/ms-deals-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsDealsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsDealsRoutingModule", function() { return MsDealsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_deals_table_deals_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deals-table/deals-table.component */ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.ts");
/* harmony import */ var _components_deal_creator_deal_creator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deal-creator/deal-creator.component */ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.ts");
/* harmony import */ var _components_delete_deal_delete_deal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/delete-deal/delete-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.ts");
/* harmony import */ var _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-deal/edit-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_deals_services_deals_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-deals/services/deals-resolve.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ms-urls/services/urls-resolve.service */ "./src/app/ms-back-office/modules/ms-urls/services/urls-resolve.service.ts");
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
        component: _components_deals_table_deals_table_component__WEBPACK_IMPORTED_MODULE_2__["DealsTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_10__["UrlsResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_deal_creator_deal_creator_component__WEBPACK_IMPORTED_MODULE_3__["DealCreatorComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            Deals: _ms_deals_services_deals_resolve_service__WEBPACK_IMPORTED_MODULE_7__["DealsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_10__["UrlsResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_5__["EditDealComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_10__["UrlsResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_deal_delete_deal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDealComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            DealId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_12__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsDealsRoutingModule = /** @class */ (function () {
    function MsDealsRoutingModule() {
    }
    MsDealsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsDealsRoutingModule);
    return MsDealsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/ms-deals.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/ms-deals.module.ts ***!
  \********************************************************************/
/*! exports provided: MsDealsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsDealsModule", function() { return MsDealsModule; });
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
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _components_deals_table_deals_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/deals-table/deals-table.component */ "./src/app/ms-back-office/modules/ms-deals/components/deals-table/deals-table.component.ts");
/* harmony import */ var _components_deals_shop_table_deals_shop_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/deals-shop-table/deals-shop-table.component */ "./src/app/ms-back-office/modules/ms-deals/components/deals-shop-table/deals-shop-table.component.ts");
/* harmony import */ var _ms_deals_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ms-deals-routing.module */ "./src/app/ms-back-office/modules/ms-deals/ms-deals-routing.module.ts");
/* harmony import */ var _components_deal_creator_deal_creator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/deal-creator/deal-creator.component */ "./src/app/ms-back-office/modules/ms-deals/components/deal-creator/deal-creator.component.ts");
/* harmony import */ var _components_deal_form_deal_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/deal-form/deal-form.component */ "./src/app/ms-back-office/modules/ms-deals/components/deal-form/deal-form.component.ts");
/* harmony import */ var _components_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/new-deal/new-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/new-deal/new-deal.component.ts");
/* harmony import */ var _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-deal/edit-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/edit-deal/edit-deal.component.ts");
/* harmony import */ var _components_delete_deal_delete_deal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/delete-deal/delete-deal.component */ "./src/app/ms-back-office/modules/ms-deals/components/delete-deal/delete-deal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//















//










//import { LinkShopsModalComponent } from '../ms-shops/components/link-shops/link-shops-modal.component';
var MsDealsModule = /** @class */ (function () {
    function MsDealsModule() {
    }
    MsDealsModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _ms_deals_routing_module__WEBPACK_IMPORTED_MODULE_19__["MsDealsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_15__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_16__["ImageCardModule"],
            ],
            declarations: [
                _components_deals_table_deals_table_component__WEBPACK_IMPORTED_MODULE_17__["DealsTableComponent"],
                _components_deal_creator_deal_creator_component__WEBPACK_IMPORTED_MODULE_20__["DealCreatorComponent"],
                _components_deal_form_deal_form_component__WEBPACK_IMPORTED_MODULE_21__["DealFormComponent"],
                _components_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_22__["NewDealComponent"],
                _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_23__["EditDealComponent"],
                _components_delete_deal_delete_deal_component__WEBPACK_IMPORTED_MODULE_24__["DeleteDealComponent"],
                _components_deals_shop_table_deals_shop_table_component__WEBPACK_IMPORTED_MODULE_18__["DealsShopTableComponent"]
            ],
            exports: [
                _components_deals_table_deals_table_component__WEBPACK_IMPORTED_MODULE_17__["DealsTableComponent"],
                _components_deal_creator_deal_creator_component__WEBPACK_IMPORTED_MODULE_20__["DealCreatorComponent"],
                _components_deal_form_deal_form_component__WEBPACK_IMPORTED_MODULE_21__["DealFormComponent"],
                _components_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_22__["NewDealComponent"],
                _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_23__["EditDealComponent"],
                _components_delete_deal_delete_deal_component__WEBPACK_IMPORTED_MODULE_24__["DeleteDealComponent"],
                _components_deals_shop_table_deals_shop_table_component__WEBPACK_IMPORTED_MODULE_18__["DealsShopTableComponent"]
            ],
            entryComponents: [
                _components_new_deal_new_deal_component__WEBPACK_IMPORTED_MODULE_22__["NewDealComponent"],
                _components_edit_deal_edit_deal_component__WEBPACK_IMPORTED_MODULE_23__["EditDealComponent"],
            ]
        })
    ], MsDealsModule);
    return MsDealsModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/services/deals-resolve.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/services/deals-resolve.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DealsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsResolveService", function() { return DealsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deals.service */ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts");
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
var DealsResolveService = /** @class */ (function () {
    function DealsResolveService(dealsService, translate, errorHandlingService) {
        this.dealsService = dealsService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DealsResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.dealsService.getAllDeals().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (deals) { return deals; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    DealsResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], DealsResolveService);
    return DealsResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-deals/services/deals.service.ts ***!
  \***************************************************************************/
/*! exports provided: ASCENDING, DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
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
var DealsService = /** @class */ (function () {
    function DealsService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'url';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.dealsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.deals.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    DealsService.prototype.getDeals = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a Deal for example.
    //
    DealsService.prototype.reloadDeals = function () {
        return this.getDeals(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    DealsService.prototype.postDeal = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    DealsService.prototype.getDeal = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    DealsService.prototype.putDeal = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    DealsService.prototype.deleteDeal = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    DealsService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.url && filter.url.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "url=" + filter.url;
        }
        if (filter.shopId && filter.shopId.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "shopId=" + filter.shopId;
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
    DealsService.prototype.getAllDeals = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    DealsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], DealsService);
    return DealsService;
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
//# sourceMappingURL=default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-deals-ms-deals-module~ms-~4095e54f.js.map