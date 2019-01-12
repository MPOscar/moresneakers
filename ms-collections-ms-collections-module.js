(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-collections-ms-collections-module"],{

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\n    <div fxLayout=\"column\" class=\"padding-bottom-25px\">\n        <h1>COLLECTION CREATOR</h1>\n    </div>\n    <div class=\"flex-grow-1 display-flex flex-direction-column padding-10px overflow-auto border-top-width-2px border-top-color-grey\">\n\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n            <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"40\" class=\"margin-right-10px\">\n\n                    <button mat-stroked-button type=\"submit\" class=\"width-90pct max-width-480px\" (click)=\"showModal()\">Add a New Collection</button>\n\n                    <mat-form-field class=\"width-90pct padding-top-20px\">\n\n                        <mat-label>COLLECTION LIST</mat-label>\n\n                        <mat-select disableOptionCentering placeholder=\"Select\" panelOpen=\"true\" matNativeControl [formControl]=\"selectedCollection\">\n\n                            <mat-option (click)=\"changeCollection(null, null, false)\">...</mat-option>\n\n                            <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\" (click)=\"changeCollection(collection.id, collection.brand, true)\">\n\n                                {{collection.name}}\n\n                            </mat-option>\n\n                        </mat-select>\n\n                    </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"60\" fxLayout=\"row\" class=\"border-2px-solid-black margin-bottom-25px liked-shops margin-right-10px padding-10px\">\n\n                    <div fxLayout=\"column\" class=\"flex-grow-1\">\n\n                        <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex\">\n\n                            <mat-form-field class=\"width-90pct\">\n\n                                <mat-label>SELECT BRAND</mat-label>\n\n                                <mat-select disableOptionCentering placeholder=\"Select\" panelOpen=\"true\"  matNativeControl [formControl]=\"selectedBrand\">\n\n                                    <mat-option>...</mat-option>\n\n                                    <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                                        {{brand.name}}\n\n                                    </mat-option>\n\n                                </mat-select>\n\n                            </mat-form-field>\n\n                        </div>\n                        <h3>Linked Stores</h3>\n                        <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px border-top-width-2px border-top-color-grey\">\n\n                            <!--div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\"-->\n                            <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\n                                <div *ngFor=\"let shop of shops\">\n                                    <mat-card *ngIf=\"shop.checked\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\n                                        <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\n                                            <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\n                                        </div>\n                                        <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\n                                            <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\"\n                                                [disabled]=\"true\">{{ shop.name }}</mat-checkbox>\n                                        </div>\n                                    </mat-card>\n                                </div>\n                                <!--/div-->\n                            </div>\n\n                        </div>\n                        <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\n\n                            <!--button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\">Remove Selection</button-->\n\n                            <button mat-raised-button type=\"button\" [disabled]=\"!collectionId\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkShopsModal()\">{{ 'Link New Stores' | translate }}</button>\n\n                        </div>\n                        <!--h3>Linked Offers</h3>\n                        <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                            <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n                                <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n                                    <offers-collection-table [releases]=\"releases\" [collections]=\"collections\"></offers-collection-table>\n\n                                </div>\n\n                            </div>\n                            <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\n\n                                <button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\">Remove Selection</button>\n\n                                <button mat-raised-button type=\"button\" [disabled]=\"!collectionId\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkOffersModal()\">{{ 'Link New Offers' | translate }}</button>\n\n                            </div>\n\n                        </div-->\n\n                        <h3>Linked Releases</h3>\n                        <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n                            <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n                                <releases-collection-table [collectionId]=\"collectionId\" [collections]=\"collections\" [brands]=\"brands\" [styles]=\"styles\" (newRelease)=\"newRelease($event)\"></releases-collection-table>\n\n                            </div>\n\n                        </div>\n\n\n\n                    </div>\n\n                </div>\n\n            </div>\n            \n\n        </div>\n        \n           \n        \n    </div>\n\n    <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n        <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"close()\">{{ 'Save Changes' | translate }}</button>\n\n        <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"discardAllChanges()\">{{ 'Discard All Changes' | translate }}</button>\n\n    </div>\n</div>\n{{ initialLinkedShopsPlus | json }}"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n@media screen and (max-width: 959px) {\n  .liked-shops {\n    max-width: 480px !important; } }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL2NvbGxlY3Rpb24tY3JlYXRvci9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1jb2xsZWN0aW9uc1xcY29tcG9uZW50c1xcY29sbGVjdGlvbi1jcmVhdG9yXFxjb2xsZWN0aW9uLWNyZWF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBR0Q7RUFDRTtJQUNJLDRCQUEyQixFQUM5QixFQUFBOztBQUdIO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4Qix1QkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLWNvbGxlY3Rpb25zL2NvbXBvbmVudHMvY29sbGVjdGlvbi1jcmVhdG9yL2NvbGxlY3Rpb24tY3JlYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAubGlrZWQtc2hvcHMge1xyXG4gICAgICAgIG1heC13aWR0aDogNDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1heC13aWR0aC02MC1wY3R7XHJcbiAgICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgdGQubWF0LWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CollectionCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionCreatorComponent", function() { return CollectionCreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
/* harmony import */ var _new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-collection/new-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.ts");
/* harmony import */ var _ms_releases_services_releases_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ms-releases/services/releases.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases.service.ts");
/* harmony import */ var _ms_releases_components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ms-releases/components/releases-collection-table/releases-collection-table.component */ "./src/app/ms-back-office/modules/ms-releases/components/releases-collection-table/releases-collection-table.component.ts");
/* harmony import */ var _ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ms-offers/components/link-offers-collection/link-offers-collection-modal.component */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts");
/* harmony import */ var _ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ms-shops/components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
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
var savedMessageKey = 'Saved';
var CollectionCreatorComponent = /** @class */ (function () {
    function CollectionCreatorComponent(activatedRoute, collectionsService, errorHandlingService, router, releasesService, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.collectionsService = collectionsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.releasesService = releasesService;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: "",
            brand: ""
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        this.selectedCollection = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selectedBrand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    CollectionCreatorComponent.prototype.ngOnInit = function () {
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.releases = this.activatedRoute.snapshot.data.releases;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.styles = this.activatedRoute.snapshot.data.styles;
    };
    CollectionCreatorComponent.prototype.ngAfterViewInit = function () {
        this.releasesCollectionTableComponent.loadPage();
    };
    CollectionCreatorComponent.prototype.submit = function (data) {
        this.createUser(data);
    };
    CollectionCreatorComponent.prototype.cancel = function () {
        this.close();
    };
    CollectionCreatorComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    CollectionCreatorComponent.prototype.createUser = function (data) {
        var _this = this;
        this.collectionsService.postCollection(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            //this.close.emit();TODO
            _this.close();
            _this.toastr.success(savedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    CollectionCreatorComponent.prototype.showModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_10__["NewCollectionComponent"], {
            height: '90%',
            width: '90%',
            data: { brands: this.brands }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.collectionsService.getAllCollections().subscribe(function (response) {
                _this.collections = response;
                _this.selectedCollection.setValue(_this.collections[0].id);
                _this.changeCollection(_this.collections[0].id);
            });
        });
    };
    CollectionCreatorComponent.prototype.linkShopsModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_14__["LinkShopsCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.changeCollection(_this.selectedCollection.value, _this.selectedBrand.value, false);
        });
    };
    CollectionCreatorComponent.prototype.linkOffersModal = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_13__["LinkOffersCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
                releases: this.releases
            }
        });
    };
    CollectionCreatorComponent.prototype.linked = function (shop) {
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
    CollectionCreatorComponent.prototype.isLinked = function (id, flag) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            if (flag) {
                this.initialLinkedShops = this.initialLinkedShops.concat([id]);
            }
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = true;
            this.shops[index].checked = true;
        }
        else {
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = false;
            this.shops[index].checked = false;
        }
    };
    CollectionCreatorComponent.prototype.changeCollection = function (collectionId, brandId, flag) {
        var _this = this;
        this.collectionId = collectionId;
        this.selectedBrand.setValue(brandId);
        if (collectionId) {
            if (flag) {
                //this.initialLinkedShopsPlus[collectionId] = [];
                this.initialLinkedShops = [];
                this.addedReleases = [];
            }
            this.collectionsService.getCollectionLinkedShops(collectionId).subscribe(function (response) {
                _this.linkedShops = response.data;
                _this.shops.forEach(function (shop) {
                    _this.isLinked(shop.id, flag);
                });
                _this.releasesCollectionTableComponent.loadPage();
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
            });
        }
    };
    CollectionCreatorComponent.prototype.save = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedShops(this.collectionId, this.linkedShops).subscribe(function (response) {
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    CollectionCreatorComponent.prototype.discardAllChanges = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedShops(this.collectionId, this.initialLinkedShops).subscribe(function (response) {
            _this.toastr.success("Saved");
            _this.changeCollection(_this.selectedCollection.value, _this.selectedBrand.value, false);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
        this.addedReleases.forEach(function (id) {
            _this.releasesService.deleteRelease(id).subscribe(function (response) {
            }),
                function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.close();
                };
        });
    };
    CollectionCreatorComponent.prototype.newRelease = function (id) {
        this.addedReleases = this.addedReleases.concat([id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ms_releases_components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_12__["ReleasesCollectionTableComponent"]),
        __metadata("design:type", _ms_releases_components_releases_collection_table_releases_collection_table_component__WEBPACK_IMPORTED_MODULE_12__["ReleasesCollectionTableComponent"])
    ], CollectionCreatorComponent.prototype, "releasesCollectionTableComponent", void 0);
    CollectionCreatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collection-creator',
            template: __webpack_require__(/*! ./collection-creator.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.html"),
            styles: [__webpack_require__(/*! ./collection-creator.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ms_releases_services_releases_service__WEBPACK_IMPORTED_MODULE_11__["ReleasesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CollectionCreatorComponent);
    return CollectionCreatorComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <mat-form-field class=\"width-100pc margin-left-16px\">\n\n        <mat-label>Name</mat-label>\n\n        <input matInput type=\"text\" formControlName=\"name\" required>\n\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Brand</mat-label>\n        <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\" required>\n          <mat-option>...</mat-option>\n          <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n            {{brand.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div [fxFlex]=\"50\" class=\"border width-480px\">\n\n        <image-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\n\n      </div>\n\n      <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\n\n        <mat-label>Description</mat-label>\n\n        <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n      </mat-form-field>\n\n    </div>\n  </div>\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL2NvbGxlY3Rpb24tZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1jb2xsZWN0aW9uc1xcY29tcG9uZW50c1xcY29sbGVjdGlvbi1mb3JtXFxjb2xsZWN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtY29sbGVjdGlvbnMvY29tcG9uZW50cy9jb2xsZWN0aW9uLWZvcm0vY29sbGVjdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CollectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionFormComponent", function() { return CollectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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

//


var CollectionFormComponent = /** @class */ (function (_super) {
    __extends(CollectionFormComponent, _super);
    function CollectionFormComponent(formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    CollectionFormComponent.prototype.ngOnInit = function () {
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
    CollectionFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    CollectionFormComponent.prototype.submitClicked = function () {
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
    ], CollectionFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CollectionFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_3__["Face"])
    ], CollectionFormComponent.prototype, "principal", void 0);
    CollectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collection-form',
            template: __webpack_require__(/*! ./collection-form.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.html"),
            styles: [__webpack_require__(/*! ./collection-form.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], CollectionFormComponent);
    return CollectionFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Collections Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Brand</mat-label>\n    <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\">\n      <mat-option>...</mat-option>\n      <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n        {{brand.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW COLLECTION</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"collections\" matSort [matSortActive]=\"collectionsService.previousSortColumn\"\n    [matSortDirection]=\"collectionsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        NAME\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"thumbnail\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\n        <div class=\"position-relative margin-top-5px\">\n          <img [src]=\"element.imgUrl\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\n        </div>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"brand\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        BRAND\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getBrand(element.brand) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef>\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\n          <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeCollectionModal(element.id)\">\n              <mat-icon>remove_red_eye</mat-icon>\n          </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL2NvbGxlY3Rpb25zLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWNvbGxlY3Rpb25zXFxjb21wb25lbnRzXFxjb2xsZWN0aW9ucy10YWJsZVxcY29sbGVjdGlvbnMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtY29sbGVjdGlvbnMvY29tcG9uZW50cy9jb2xsZWN0aW9ucy10YWJsZS9jb2xsZWN0aW9ucy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CollectionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsTableComponent", function() { return CollectionsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
/* harmony import */ var _see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../see-collection/see-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.ts");
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
var CollectionsTableComponent = /** @class */ (function () {
    function CollectionsTableComponent(dialog, activatedRoute, collectionsService, errorHandlingService) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.collectionsService = collectionsService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'name',
            'thumbnail',
            'brand',
            'action'
        ];
        this.totalLength = 0;
        this.collections = [];
    }
    CollectionsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.collectionsList = this.collectionsService.collectionsList.subscribe(function (brandsList) {
            _this.totalLength = brandsList.dataCount;
            _this.collections = brandsList.data;
            if (_this.collections.length === 0 && _this.totalLength > 0 && _this.collectionsService.previousPageSize > 0) {
                _this.collectionsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.collectionsService.previousPageSize) - 1;
                _this.collectionsService.reloadCollections().subscribe(function (response) {
                    _this.collectionsService.collectionsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    CollectionsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    CollectionsTableComponent.prototype.ngOnDestroy = function () {
        this.collectionsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    CollectionsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['brand'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    CollectionsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.collectionsService.getCollections(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.collectionsService.collectionsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    CollectionsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    CollectionsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    CollectionsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    CollectionsTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    CollectionsTableComponent.prototype.seeCollectionModal = function (id) {
        var _this = this;
        this.collectionsService.getCollection(id).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.imgUrl) {
                var face = {
                    imgUrl: _this.data.imgUrl,
                };
                _this.faceList = [face];
                _this.principal = face;
            }
            _this.modalRef = _this.dialog.open(_see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_7__["SeeCollectionComponent"], {
                height: '90%',
                width: '95%',
                data: {
                    id: id,
                    faceList: _this.faceList,
                    principal: _this.principal,
                    data: response.data,
                    brands: _this.brands,
                    collectioId: id,
                    shops: _this.shops
                }
            });
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CollectionsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CollectionsTableComponent.prototype, "sort", void 0);
    CollectionsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collections-table',
            template: __webpack_require__(/*! ./collections-table.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.html"),
            styles: [__webpack_require__(/*! ./collections-table.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_6__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], CollectionsTableComponent);
    return CollectionsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtY29sbGVjdGlvbnMvY29tcG9uZW50cy9kZWxldGUtY29sbGVjdGlvbi9kZWxldGUtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DeleteCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCollectionComponent", function() { return DeleteCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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
var messageKey = 'Are you sure you want to delete this Collection?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteCollectionComponent = /** @class */ (function () {
    function DeleteCollectionComponent(activatedRoute, dialog, collectionsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.collectionsService = collectionsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteCollectionComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteCollectionComponent.prototype.ngOnInit = function () {
        this.collectionId = this.activatedRoute.snapshot.data.collectionId;
    };
    DeleteCollectionComponent.prototype.getCollection = function () {
        var _this = this;
        this.collectionsService.getCollection(this.collectionId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteCollection();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteCollectionComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteCollectionComponent.prototype.confirmDeleteCollection = function () {
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
                _this.deleteCollection();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteCollectionComponent.prototype.deleteCollection = function () {
        var _this = this;
        this.collectionsService.deleteCollection(this.data.id).subscribe(function (response) {
            _this.collectionsService.reloadCollections().subscribe(function (response) {
                _this.collectionsService.collectionsList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-collection',
            template: __webpack_require__(/*! ./delete-collection.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.html"),
            styles: [__webpack_require__(/*! ./delete-collection.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_7__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteCollectionComponent);
    return DeleteCollectionComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n\r\n\r\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\r\n\r\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n            <mat-tab-group>\r\n\r\n                <mat-tab label=\"Collection\">\r\n\r\n                    <div fxLayout=\"column\" class=\"flex-grow-1 padding-top-25px\">\r\n\r\n                        <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                            <mat-label>Name</mat-label>\r\n\r\n                            <input matInput type=\"text\" formControlName=\"name\" required>\r\n\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <mat-label>Brand</mat-label>\r\n                            <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\" required>\r\n                                <mat-option>...</mat-option>\r\n                                <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n                                    {{brand.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <div [fxFlex]=\"50\" class=\"border width-480px\">\r\n\r\n                            <image-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\r\n\r\n                        </div>\r\n\r\n                        <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\r\n\r\n                            <mat-label>Description</mat-label>\r\n\r\n                            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\r\n\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Link\" class=\"width-50pc\">\r\n\r\n                    <div fxLayout=\"row\" class=\"margin-bottom-25px liked-shops margin-right-10px padding-10px\">\r\n                        <div fxLayout=\"column\" class=\"flex-grow-1\">\r\n\r\n                            <h3>Linked Stores</h3>\r\n                            <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px border-top-width-2px border-top-color-grey\">\r\n\r\n                                <!--div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\"-->\r\n                                <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n                                   <div *ngFor=\"let shop of shops\">\r\n                                    <mat-card *ngIf=\"shop.checked\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n                                        <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n                                            <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n                                        </div>\r\n                                        <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n                                            <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n                                        </div>\r\n                                    </mat-card>\r\n                                    </div>\r\n                                    <!--/div-->\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\r\n\r\n                                <!--button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\">Remove Selection</button-->\r\n\r\n                                <button mat-raised-button type=\"button\" [disabled]=\"!collectionId\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkShopsModal()\">{{ 'Link New Stores' | translate }}</button>\r\n\r\n                            </div>\r\n                            <!--h3>Linked Offers</h3>\r\n                            <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n                                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n                                    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n                                        <offers-collection-table [collections]=\"collections\" [releases]=\"releases\"></offers-collection-table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\r\n\r\n                                    <button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\">Remove Selection</button>\r\n\r\n                                    <button mat-raised-button type=\"button\" [disabled]=\"!collectionId\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkOffersModal()\">{{ 'Link New Offers' | translate }}</button>\r\n\r\n                                </div>\r\n\r\n                            </div-->\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Releases\" class=\"width-50pc\">\r\n\r\n                    <releases-collection-table [collectionId]=\"collectionId\" [collections]=\"collections\" [brands]=\"brands\"  [styles]=\"styles\" ></releases-collection-table>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n        <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n        <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\n::ng-deep .mat-sort-header-arrow.ng-trigger.ng-trigger-arrowPosition {\n  opacity: 0; }\n\n::ng-deep .mat-sort-header-pointer-left.ng-trigger.ng-trigger-leftPointer {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n::ng-deep .mat-sort-header-pointer-right.ng-trigger.ng-trigger-rightPointer {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL2VkaXQtY29sbGVjdGlvbi1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWNvbGxlY3Rpb25zXFxjb21wb25lbnRzXFxlZGl0LWNvbGxlY3Rpb24tZm9ybVxcZWRpdC1jb2xsZWN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFHRDtFQUNJLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4Qix1QkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxrQ0FBeUI7VUFBekIsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksaUNBQXdCO1VBQXhCLHlCQUF3QixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtY29sbGVjdGlvbnMvY29tcG9uZW50cy9lZGl0LWNvbGxlY3Rpb24tZm9ybS9lZGl0LWNvbGxlY3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdy5uZy10cmlnZ2VyLm5nLXRyaWdnZXItYXJyb3dQb3NpdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1wb2ludGVyLWxlZnQubmctdHJpZ2dlci5uZy10cmlnZ2VyLWxlZnRQb2ludGVye1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1wb2ludGVyLXJpZ2h0Lm5nLXRyaWdnZXIubmctdHJpZ2dlci1yaWdodFBvaW50ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: EditCollectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCollectionFormComponent", function() { return EditCollectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
/* harmony import */ var _ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-offers/components/link-offers-collection/link-offers-collection-modal.component */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts");
/* harmony import */ var _ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ms-shops/components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
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
var EditCollectionFormComponent = /** @class */ (function (_super) {
    __extends(EditCollectionFormComponent, _super);
    function EditCollectionFormComponent(activatedRoute, formBuilder, collectionsService, errorHandlingService, toastr, dialog, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.activatedRoute = activatedRoute;
        _this.formBuilder = formBuilder;
        _this.collectionsService = collectionsService;
        _this.errorHandlingService = errorHandlingService;
        _this.toastr = toastr;
        _this.dialog = dialog;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    EditCollectionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.collectionsService.getCollectionLinkedShops(this.collectionId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
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
        this.createFormGroup();
    };
    EditCollectionFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    EditCollectionFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    EditCollectionFormComponent.prototype.linkShopsModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__["LinkShopsCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.collectionsService.getCollectionLinkedShops(_this.collectionId).subscribe(function (response) {
                _this.linkedShops = response.data;
                _this.shops.forEach(function (shop) {
                    _this.isLinked(shop.id);
                });
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
            });
        });
    };
    EditCollectionFormComponent.prototype.linkOffersModal = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_10__["LinkOffersCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
                releases: this.releases,
                collections: this.collections
            }
        });
    };
    EditCollectionFormComponent.prototype.linked = function (shop) {
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
    EditCollectionFormComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = true;
            this.shops[index].checked = true;
        }
        else {
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = false;
            this.shops[index].checked = false;
        }
    };
    EditCollectionFormComponent.prototype.changeCollection = function (collectionId) {
        var _this = this;
        this.collectionId = collectionId;
        this.collectionsService.getCollectionLinkedShops(collectionId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    EditCollectionFormComponent.prototype.save = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedShops(this.collectionId, this.linkedShops).subscribe(function (response) {
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditCollectionFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditCollectionFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Face"])
    ], EditCollectionFormComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditCollectionFormComponent.prototype, "collectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditCollectionFormComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditCollectionFormComponent.prototype, "collections", void 0);
    EditCollectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-collection-form',
            template: __webpack_require__(/*! ./edit-collection-form.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-collection-form.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], EditCollectionFormComponent);
    return EditCollectionFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT COLLECTION</h1>\n\n<edit-collection-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [releases]=\"releases\"\n    [collections]=\"collections\"\n    [collectionId]=\"collectionId\"\n    [faceList]=\"faceList\"\n    [principal]=\"principal\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</edit-collection-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL2VkaXQtY29sbGVjdGlvbi9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1jb2xsZWN0aW9uc1xcY29tcG9uZW50c1xcZWRpdC1jb2xsZWN0aW9uXFxlZGl0LWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtY29sbGVjdGlvbnMvY29tcG9uZW50cy9lZGl0LWNvbGxlY3Rpb24vZWRpdC1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCollectionComponent", function() { return EditCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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




//







//import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedGroupMessageKey = 'Updated';
var EditCollectionComponent = /** @class */ (function () {
    function EditCollectionComponent(activatedRoute, dialog, collectionsService, errorHandlingService, imagesService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.collectionsService = collectionsService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.toastr = toastr;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        this.faceList = [];
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditCollectionComponent.prototype.ngOnInit = function () {
        this.collectionId = this.activatedRoute.snapshot.data.collectionId;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.releases = this.activatedRoute.snapshot.data.releases;
    };
    EditCollectionComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    EditCollectionComponent.prototype.getCollection = function () {
        var _this = this;
        this.collectionsService.getCollection(this.collectionId).subscribe(function (response) {
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
    EditCollectionComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateCollection(data);
    };
    EditCollectionComponent.prototype.cancel = function () {
        this.close();
    };
    EditCollectionComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditCollectionComponent.prototype.updateCollection = function (collectionData) {
        var _this = this;
        if (collectionData.faces) {
            for (var position in collectionData.faces) {
                var face = collectionData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__["State"].New) {
                    var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                        collectionData.imgUrl = response.data.url;
                        _this.collectionsService.putCollection(collectionData).subscribe(function (response) {
                            _this.unsavedChanges = false;
                            _this.close();
                            _this.toastr.success(updatedGroupMessageKey);
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
                    this.collectionsService.putCollection(collectionData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedGroupMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }
            }
        }
        else {
            this.collectionsService.putCollection(collectionData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(updatedGroupMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
                _this.validationErrors = error.formErrors;
            });
        }
    };
    EditCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-collection',
            template: __webpack_require__(/*! ./edit-collection.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.html"),
            styles: [__webpack_require__(/*! ./edit-collection.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_10__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EditCollectionComponent);
    return EditCollectionComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>COLLECTION CREATOR</h1>\n\n<collection-form class=\"flex-grow-1\"\n    [brands]=\"dialogData.brands\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</collection-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL25ldy1jb2xsZWN0aW9uL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWNvbGxlY3Rpb25zXFxjb21wb25lbnRzXFxuZXctY29sbGVjdGlvblxcbmV3LWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL25ldy1jb2xsZWN0aW9uL25ldy1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NewCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCollectionComponent", function() { return NewCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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
var savedUserMessageKey = 'Saved User Message';
var NewCollectionComponent = /** @class */ (function () {
    function NewCollectionComponent(dialogRef, activatedRoute, collectionsService, errorHandlingService, imagesService, router, translate, toastr, dialog, dialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.collectionsService = collectionsService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogData = dialogData;
        this.data = {
            name: '',
            brand: ''
        };
        //brands: Array<Brand>;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewCollectionComponent.prototype.ngOnInit = function () {
        console.log(this.dialogData);
        //this.brands = this.activatedRoute.snapshot.data.brands;
    };
    NewCollectionComponent.prototype.submit = function (data) {
        this.createCollection(data);
    };
    NewCollectionComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewCollectionComponent.prototype.close = function () {
        this.dialogRef.close();
        //this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, {relativeTo: this.activatedRoute});
    };
    NewCollectionComponent.prototype.createCollection = function (data) {
        var _this = this;
        this.collectionsService.postCollection(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            //this.close.emit();TODO
            _this.close();
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    NewCollectionComponent.prototype.createBrand = function (collectionData) {
        var _this = this;
        console.log("create...........");
        if (collectionData.faces && collectionData.faces.length > 0) {
            for (var position in collectionData.faces) {
                var face = collectionData.faces[position];
                var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                    collectionData.imgUrl = response.data.url;
                    _this.collectionsService.postCollection(collectionData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(savedUserMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error, 'collection');
                        _this.validationErrors = error.formErrors;
                    });
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error);
                    _this.validationErrors = error.formErrors;
                });
            }
        }
        else {
            this.collectionsService.postCollection(collectionData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(savedUserMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error, 'collection');
                _this.validationErrors = error.formErrors;
            });
        }
    };
    NewCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-collection',
            template: __webpack_require__(/*! ./new-collection.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.html"),
            styles: [__webpack_require__(/*! ./new-collection.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], Object])
    ], NewCollectionComponent);
    return NewCollectionComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n    novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n\r\n\r\n    <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\r\n\r\n        <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n            <mat-tab-group>\r\n\r\n                <mat-tab label=\"Collection\">\r\n\r\n                    <div fxLayout=\"column\" class=\"flex-grow-1 padding-top-25px\">\r\n\r\n                        <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                            <mat-label>Name</mat-label>\r\n\r\n                            <input matInput type=\"text\" formControlName=\"name\" required readonly>\r\n\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <mat-label>Brand</mat-label>\r\n                            <mat-select disableOptionCentering placeholder=\"Brand\" formControlName=\"brand\" required [disabled]=\"true\">\r\n                                <mat-option>...</mat-option>\r\n                                <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\">\r\n                                    {{brand.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <div [fxFlex]=\"50\" class=\"border width-480px\">\r\n\r\n                            <image-card class=\"flex-grow-1 padding-10px\" formControlName=\"faces\" [principal]=\"principal\" [disabled]=\"true\"></image-card>\r\n\r\n                        </div>\r\n\r\n                        <mat-form-field class=\"width-100pc margin-left-16px padding-top-25px\" appearance=\"fill\">\r\n\r\n                            <mat-label>Description</mat-label>\r\n\r\n                            <textarea matInput formControlName=\"description\" class=\"min-height-100px\" readonly></textarea>\r\n\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Link\" class=\"width-50pc\">\r\n\r\n                    <div fxLayout=\"row\" class=\"margin-bottom-25px liked-shops margin-right-10px padding-10px\">\r\n                        <div fxLayout=\"column\" class=\"flex-grow-1\">\r\n\r\n                            <h3>Linked Stores</h3>\r\n                            <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px border-top-width-2px border-top-color-grey\">\r\n\r\n                                <!--div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\"-->\r\n                                <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n                                   <div *ngFor=\"let shop of shops\" >\r\n                                    <mat-card *ngIf=\"shop.checked\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n                                        <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n                                            <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n                                        </div>\r\n                                        <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n                                            <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\" [disabled]=\"true\">{{ shop.name }}</mat-checkbox>\r\n                                        </div>\r\n                                    </mat-card>\r\n                                    </div>\r\n                                    <!--/div-->\r\n                                </div>\r\n\r\n                            </div>\r\n                            \r\n                            <!--h3>Linked Offers</h3>\r\n                            <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n\r\n                                <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n                                    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n                                        <offers-collection-table [collections]=\"collections\" [releases]=\"releases\"></offers-collection-table>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\r\n\r\n                                    <button mat-stroked-button type=\"button\" [disabled]=\"!collectionId\">Remove Selection</button>\r\n\r\n                                    <button mat-raised-button type=\"button\" [disabled]=\"!collectionId\" color=\"primary\" class=\"margin-left-10px\" (click)=\"linkOffersModal()\">{{ 'Link New Offers' | translate }}</button>\r\n\r\n                                </div>\r\n\r\n                            </div-->\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Releases\" class=\"width-50pc\">\r\n\r\n                    <releases-collection-table [collectionId]=\"dialogData.id\" [collections]=\"dialogData.collections\" [brands]=\"dialogData.brands\" [styles]=\"dialogData.styles\" [disabled]=\"true\"></releases-collection-table>\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n        <button mat-raised-button type=\"button\" (click)=\"close()\">{{ 'Close' | translate }}</button>\r\n\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-sort-header-arrow.ng-trigger.ng-trigger-arrowPosition {\n  opacity: 0; }\n\n::ng-deep .mat-sort-header-pointer-left.ng-trigger.ng-trigger-leftPointer {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n::ng-deep .mat-sort-header-pointer-right.ng-trigger.ng-trigger-rightPointer {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL3NlZS1jb2xsZWN0aW9uL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWNvbGxlY3Rpb25zXFxjb21wb25lbnRzXFxzZWUtY29sbGVjdGlvblxcc2VlLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsV0FBVSxFQUNiOztBQUVEO0VBQ0ksa0NBQXlCO1VBQXpCLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGlDQUF3QjtVQUF4Qix5QkFBd0IsRUFDM0I7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsdUJBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1jb2xsZWN0aW9ucy9jb21wb25lbnRzL3NlZS1jb2xsZWN0aW9uL3NlZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWFycm93Lm5nLXRyaWdnZXIubmctdHJpZ2dlci1hcnJvd1Bvc2l0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLXBvaW50ZXItbGVmdC5uZy10cmlnZ2VyLm5nLXRyaWdnZXItbGVmdFBvaW50ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLXBvaW50ZXItcmlnaHQubmctdHJpZ2dlci5uZy10cmlnZ2VyLXJpZ2h0UG9pbnRlcntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogMTMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SeeCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeCollectionComponent", function() { return SeeCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_collections_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
/* harmony import */ var _ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ms-offers/components/link-offers-collection/link-offers-collection-modal.component */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts");
/* harmony import */ var _ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ms-shops/components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
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


//







var errorKey = 'Error';
var SeeCollectionComponent = /** @class */ (function (_super) {
    __extends(SeeCollectionComponent, _super);
    function SeeCollectionComponent(activatedRoute, formBuilder, collectionsService, errorHandlingService, toastr, dialog, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.activatedRoute = activatedRoute;
        _this.formBuilder = formBuilder;
        _this.collectionsService = collectionsService;
        _this.errorHandlingService = errorHandlingService;
        _this.toastr = toastr;
        _this.dialog = dialog;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    SeeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this.dialogData.shops;
        this.collectionsService.getCollectionLinkedShops(this.dialogData.id).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
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
        this.createFormGroup();
    };
    SeeCollectionComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.dialogData.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    SeeCollectionComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    SeeCollectionComponent.prototype.linkShopsModal = function () {
        this.modalRef = this.dialog.open(_ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_11__["LinkShopsCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
            }
        });
    };
    SeeCollectionComponent.prototype.linkOffersModal = function () {
        this.modalRef = this.dialog.open(_ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_10__["LinkOffersCollentionModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                collectionId: this.collectionId,
                shops: this.shops,
                releases: this.releases,
                collections: this.collections
            }
        });
    };
    SeeCollectionComponent.prototype.linked = function (shop) {
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
    SeeCollectionComponent.prototype.isLinked = function (id) {
        var isLinked = this.linkedShops.findIndex(function (shopId) { return shopId === id; }) > -1;
        if (isLinked) {
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = true;
            this.shops[index].checked = true;
        }
        else {
            var index = this.shops.findIndex(function (shop) { return shop.id === id; });
            this.shops[index].linked = false;
            this.shops[index].checked = false;
        }
    };
    SeeCollectionComponent.prototype.changeCollection = function (collectionId) {
        var _this = this;
        this.collectionId = collectionId;
        this.collectionsService.getCollectionLinkedShops(collectionId).subscribe(function (response) {
            _this.linkedShops = response.data;
            _this.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    SeeCollectionComponent.prototype.save = function () {
        var _this = this;
        this.collectionsService.postCollectionLinkedShops(this.collectionId, this.linkedShops).subscribe(function (response) {
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    SeeCollectionComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeCollectionComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeCollectionComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_5__["Face"])
    ], SeeCollectionComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeeCollectionComponent.prototype, "collectionId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeCollectionComponent.prototype, "releases", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeCollectionComponent.prototype, "collections", void 0);
    SeeCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-collection',
            template: __webpack_require__(/*! ./see-collection.component.html */ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.html"),
            styles: [__webpack_require__(/*! ./see-collection.component.scss */ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_collections_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], SeeCollectionComponent);
    return SeeCollectionComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/ms-collections-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/ms-collections-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MsCollectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsCollectionsRoutingModule", function() { return MsCollectionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_collection_creator_collection_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/collection-creator/collection-creator.component */ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.ts");
/* harmony import */ var _components_delete_collection_delete_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-collection/delete-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.ts");
/* harmony import */ var _components_collections_table_collections_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/collections-table/collections-table.component */ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.ts");
/* harmony import */ var _components_edit_collection_edit_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-collection/edit-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.ts");
/* harmony import */ var _services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ms-releases/services/releases-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts");
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
        component: _components_collections_table_collections_table_component__WEBPACK_IMPORTED_MODULE_4__["CollectionsTableComponent"],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_8__["BrandsResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_collection_creator_collection_creator_component__WEBPACK_IMPORTED_MODULE_2__["CollectionCreatorComponent"],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_8__["BrandsResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            collections: _services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_6__["CollectionsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__["ReleasesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_12__["StylesResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_collection_edit_collection_component__WEBPACK_IMPORTED_MODULE_5__["EditCollectionComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_8__["BrandsResolveService"],
            collectionId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
            collections: _services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_6__["CollectionsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__["ReleasesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_12__["StylesResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_collection_delete_collection_component__WEBPACK_IMPORTED_MODULE_3__["DeleteCollectionComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"],
            collectionId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsCollectionsRoutingModule = /** @class */ (function () {
    function MsCollectionsRoutingModule() {
    }
    MsCollectionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsCollectionsRoutingModule);
    return MsCollectionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-collections/ms-collections.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-collections/ms-collections.module.ts ***!
  \********************************************************************************/
/*! exports provided: MsCollectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsCollectionsModule", function() { return MsCollectionsModule; });
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
/* harmony import */ var _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ms-offers/ms-offers.module */ "./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts");
/* harmony import */ var _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ms-shops/ms-shops.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts");
/* harmony import */ var _ms_releases_ms_releases_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ms-releases/ms-releases.module */ "./src/app/ms-back-office/modules/ms-releases/ms-releases.module.ts");
/* harmony import */ var _ms_releases_components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ms-releases/components/new-release-modal/new-release-modal.component */ "./src/app/ms-back-office/modules/ms-releases/components/new-release-modal/new-release-modal.component.ts");
/* harmony import */ var _ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ms-shops/components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
/* harmony import */ var _ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ms-offers/components/link-offers-collection/link-offers-collection-modal.component */ "./src/app/ms-back-office/modules/ms-offers/components/link-offers-collection/link-offers-collection-modal.component.ts");
/* harmony import */ var _ms_collections_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ms-collections-routing.module */ "./src/app/ms-back-office/modules/ms-collections/ms-collections-routing.module.ts");
/* harmony import */ var _components_collection_creator_collection_creator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/collection-creator/collection-creator.component */ "./src/app/ms-back-office/modules/ms-collections/components/collection-creator/collection-creator.component.ts");
/* harmony import */ var _components_collections_table_collections_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/collections-table/collections-table.component */ "./src/app/ms-back-office/modules/ms-collections/components/collections-table/collections-table.component.ts");
/* harmony import */ var _components_collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/collection-form/collection-form.component */ "./src/app/ms-back-office/modules/ms-collections/components/collection-form/collection-form.component.ts");
/* harmony import */ var _components_see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/see-collection/see-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/see-collection/see-collection.component.ts");
/* harmony import */ var _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/new-collection/new-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/new-collection/new-collection.component.ts");
/* harmony import */ var _components_edit_collection_edit_collection_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/edit-collection/edit-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection/edit-collection.component.ts");
/* harmony import */ var _components_edit_collection_form_edit_collection_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/edit-collection-form/edit-collection-form.component */ "./src/app/ms-back-office/modules/ms-collections/components/edit-collection-form/edit-collection-form.component.ts");
/* harmony import */ var _components_delete_collection_delete_collection_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/delete-collection/delete-collection.component */ "./src/app/ms-back-office/modules/ms-collections/components/delete-collection/delete-collection.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//

















var MsCollectionsModule = /** @class */ (function () {
    function MsCollectionsModule() {
    }
    MsCollectionsModule = __decorate([
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
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_collections_routing_module__WEBPACK_IMPORTED_MODULE_22__["MsCollectionsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_15__["ImageCardModule"],
                _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_16__["MsOffersModule"],
                _ms_releases_ms_releases_module__WEBPACK_IMPORTED_MODULE_18__["MsReleasesModule"],
                _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_17__["MsShopsModule"],
            ],
            declarations: [
                _components_collection_creator_collection_creator_component__WEBPACK_IMPORTED_MODULE_23__["CollectionCreatorComponent"],
                _components_collections_table_collections_table_component__WEBPACK_IMPORTED_MODULE_24__["CollectionsTableComponent"],
                _components_collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_25__["CollectionFormComponent"],
                _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_27__["NewCollectionComponent"],
                _components_edit_collection_edit_collection_component__WEBPACK_IMPORTED_MODULE_28__["EditCollectionComponent"],
                _components_edit_collection_form_edit_collection_form_component__WEBPACK_IMPORTED_MODULE_29__["EditCollectionFormComponent"],
                _components_delete_collection_delete_collection_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCollectionComponent"],
                _components_see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_26__["SeeCollectionComponent"]
            ],
            exports: [
                _components_collection_creator_collection_creator_component__WEBPACK_IMPORTED_MODULE_23__["CollectionCreatorComponent"],
                _components_collections_table_collections_table_component__WEBPACK_IMPORTED_MODULE_24__["CollectionsTableComponent"],
                _components_collection_form_collection_form_component__WEBPACK_IMPORTED_MODULE_25__["CollectionFormComponent"],
                _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_27__["NewCollectionComponent"],
                _components_edit_collection_edit_collection_component__WEBPACK_IMPORTED_MODULE_28__["EditCollectionComponent"],
                _components_edit_collection_form_edit_collection_form_component__WEBPACK_IMPORTED_MODULE_29__["EditCollectionFormComponent"],
                _components_delete_collection_delete_collection_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCollectionComponent"],
                _components_see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_26__["SeeCollectionComponent"]
            ],
            entryComponents: [
                _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_27__["NewCollectionComponent"],
                _ms_shops_components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_20__["LinkShopsCollentionModalComponent"],
                _ms_offers_components_link_offers_collection_link_offers_collection_modal_component__WEBPACK_IMPORTED_MODULE_21__["LinkOffersCollentionModalComponent"],
                _ms_releases_components_new_release_modal_new_release_modal_component__WEBPACK_IMPORTED_MODULE_19__["NewReleaseModalComponent"],
                _components_see_collection_see_collection_component__WEBPACK_IMPORTED_MODULE_26__["SeeCollectionComponent"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"]
            ]
        })
    ], MsCollectionsModule);
    return MsCollectionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ms-collections-ms-collections-module.js.map