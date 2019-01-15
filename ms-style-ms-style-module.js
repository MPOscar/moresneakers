(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-style-ms-style-module"],{

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9kZWxldGUtc3R5bGUvZGVsZXRlLXN0eWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeleteStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStyleComponent", function() { return DeleteStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var messageKey = 'Are you sure you want to delete this Style?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteStyleComponent = /** @class */ (function () {
    function DeleteStyleComponent(activatedRoute, dialog, stylesService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteStyleComponent.prototype.ngAfterViewInit = function () {
        this.getShop();
    };
    DeleteStyleComponent.prototype.ngOnInit = function () {
        this.styleId = this.activatedRoute.snapshot.data.styleId;
    };
    DeleteStyleComponent.prototype.getShop = function () {
        var _this = this;
        this.stylesService.getStyle(this.styleId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteStyle();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteStyleComponent.prototype.confirmDeleteStyle = function () {
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
                _this.deleteStyle();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteStyleComponent.prototype.deleteStyle = function () {
        var _this = this;
        this.stylesService.deleteStyle(this.data.id).subscribe(function (response) {
            _this.stylesService.reloadStyles().subscribe(function (response) {
                _this.stylesService.stylesList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-style',
            template: __webpack_require__(/*! ./delete-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.html"),
            styles: [__webpack_require__(/*! ./delete-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_7__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteStyleComponent);
    return DeleteStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT STYLE</h1>\n<style-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [styles]=\"styles\"\n    [styleId]=\"styleId\"\n    [shops]=\"shops\"\n    [categories]=\"categories\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</style-form>\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL2VkaXQtc3R5bGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXGVkaXQtc3R5bGVcXGVkaXQtc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9lZGl0LXN0eWxlL2VkaXQtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStyleComponent", function() { return EditStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var EditStyleComponent = /** @class */ (function () {
    function EditStyleComponent(activatedRoute, dialog, stylesService, errorHandlingService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
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
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditStyleComponent.prototype.ngOnInit = function () {
        this.styleId = this.activatedRoute.snapshot.data.styleId;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
        this.shops = this.activatedRoute.snapshot.data.shops;
    };
    EditStyleComponent.prototype.ngAfterViewInit = function () {
        this.getStyle();
    };
    EditStyleComponent.prototype.getStyle = function () {
        var _this = this;
        this.stylesService.getStyle(this.styleId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditStyleComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateStyle(data);
    };
    EditStyleComponent.prototype.cancel = function () {
        this.close();
    };
    EditStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditStyleComponent.prototype.updateStyle = function (data) {
        var _this = this;
        this.stylesService.putStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedGroupMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-style',
            template: __webpack_require__(/*! ./edit-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.html"),
            styles: [__webpack_require__(/*! ./edit-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EditStyleComponent);
    return EditStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD PARENT</h1>\n<style-parent-form class=\"flex-grow-1\"\n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [styles]=\"dialogData.styles\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</style-parent-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL25ldy1wYXJlbnQvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXG5ldy1wYXJlbnRcXG5ldy1wYXJlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9uZXctcGFyZW50L25ldy1wYXJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewParentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewParentModalComponent", function() { return NewParentModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _ms_brands_models_brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ms-brands/models/brand */ "./src/app/ms-back-office/modules/ms-brands/models/brand.ts");
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
var savedUserMessageKey = 'Saved';
var NewParentModalComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewParentModalComponent(activatedRoute, dialogRef, dialog, errorHandlingService, router, stylesService, toastr, translate, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.stylesService = stylesService;
        this.toastr = toastr;
        this.translate = translate;
        this.dialogData = dialogData;
        this.data = {
            name: "",
            description: "",
            brand: "",
            category: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewParentModalComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
    };
    NewParentModalComponent.prototype.submit = function (data) {
        this.createStyle(data);
    };
    NewParentModalComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewParentModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewParentModalComponent.prototype.createStyle = function (data) {
        var _this = this;
        data.isParent = true;
        this.stylesService.postStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error, 'style');
            _this.validationErrors = error.formErrors;
        });
    };
    NewParentModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-parent',
            template: __webpack_require__(/*! ./new-parent.component.html */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.html"),
            styles: [__webpack_require__(/*! ./new-parent.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ms_brands_models_brand__WEBPACK_IMPORTED_MODULE_9__["Brand"]])
    ], NewParentModalComponent);
    return NewParentModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>STYLE CREATOR</h1>\n<style-form class=\"flex-grow-1\"\n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [styles]=\"styles\"\n    [data]=\"data\"        \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</style-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL25ldy1zdHlsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcbmV3LXN0eWxlXFxuZXctc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9uZXctc3R5bGUvbmV3LXN0eWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStyleComponent", function() { return NewStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var savedUserMessageKey = 'Saved';
var NewStyleComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewStyleComponent(activatedRoute, stylesService, errorHandlingService, router, translate, toastr, dialog) {
        this.activatedRoute = activatedRoute;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.data = {
            name: "",
            description: "",
            brand: "",
            category: "",
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
    }
    NewStyleComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styles = this.activatedRoute.snapshot.data.styles;
    };
    NewStyleComponent.prototype.submit = function (data) {
        this.createStyle(data);
    };
    NewStyleComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewStyleComponent.prototype.createStyle = function (data) {
        var _this = this;
        this.stylesService.postStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            if (!data.createRelease) {
                _this.close();
            }
            else {
                _this.router.navigate(['../../releases/create'], { relativeTo: _this.activatedRoute, queryParams: { styleId: response.data.id } });
            }
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error, 'style');
            _this.validationErrors = error.formErrors;
        });
    };
    NewStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-style',
            template: __webpack_require__(/*! ./new-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.html"),
            styles: [__webpack_require__(/*! ./new-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NewStyleComponent);
    return NewStyleComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px max-width-1000px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\" readonly></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required readonly>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" [disabled]=\"true\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of dialogData.categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field class=\"max-width-480px\">\n              <mat-label>Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\" [disabled]=\"true\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n          </div>\n\n          <div class=\"\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" [disabled]=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n\n              <div *ngIf=\"formGroup.get('isParent').value\" class=\"display-flex\">\n\n                <span class=\"padding-top-25px\">Is Parent</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n\n    <button mat-raised-button type=\"button\" (click)=\"close()\">{{'Close' | translate}}</button>\n\n\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3NlZS1zdHlsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcc2VlLXN0eWxlXFxzZWUtc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSTtJQUNJLDRCQUEyQixFQUM5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3NlZS1zdHlsZS9zZWUtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTQ4MHB4e1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xMHB4e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGhlaWdodDogNDNweDtcclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTEwMDBweHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuY3VzdG9taXplZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SeeStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeStyleComponent", function() { return SeeStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var SeeStyleComponent = /** @class */ (function (_super) {
    __extends(SeeStyleComponent, _super);
    function SeeStyleComponent(dialog, location, brandsService, stylesService, errorHandlingService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.errorHandlingService = errorHandlingService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeeStyleComponent.prototype.ngOnInit = function () {
        this.styles = this.dialogData.styles.filter(function (style) {
            return style.isParent;
        });
        this.createFormGroup();
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.allStyles = this.styles;
    };
    SeeStyleComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.isParent)
        });
    };
    SeeStyleComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeeStyleComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeStyleComponent.prototype, "shops", void 0);
    SeeStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-style',
            template: __webpack_require__(/*! ./see-style.component.html */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.html"),
            styles: [__webpack_require__(/*! ./see-style.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_7__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_8__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], SeeStyleComponent);
    return SeeStyleComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!--mat-form-field class=\"max-width-480px\">\n              <mat-label>Slect Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field-->\n\n          </div>\n\n          <div class=\"margin-top-10px margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\" (click)=\"showModalAddNewBrand()\">Add a new Brand</button>\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>SELECT BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n\n              <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle>\n\n            </div>\n\n          </div>\n\n          <div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n            <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\" (click)=\"showModalAddNewParent()\">Add a new Parent</button>\n\n            <mat-form-field class=\"width-100pc\">\n\n              <mat-label>SELECT PARENT</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n\n\n      </div>\n\n      <div *ngIf=\"styleId\" class=\"display-flex padding-bottom-10px justify-content-center\">\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModalStoresSelling()\">See Stores Selling this Style</button>\n        <button mat-stroked-button type=\"button\" class=\"margin-left-25px max-width-480px\" [routerLink]=\"['../../../releases/create']\"\n          [queryParams]=\"{styleId: styleId, returnUrl: location.path()}\">Create a Release</button>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button (click)=\"submitClicked()\" color=\"primary\">{{'Accept' | translate}}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'Cancel' | translate}}</button>\n\n    <span class=\"display-flex flex-grow-1\"></span>\n\n    <button mat-stroked-button type=\"buttom\" (click)=\"submitClickedCreateRelease()\" class=\"margin-left-25px max-width-480px\">Create a Release</button>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXHN0eWxlLWZvcm1cXHN0eWxlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFHRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXN0eWxlL2NvbXBvbmVudHMvc3R5bGUtZm9ybS9zdHlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0zNHB4e1xyXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC0xMDBwY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTQ4MHB4e1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xMHB4e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIGhlaWdodDogNDNweDtcclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTEwMDBweHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuY3VzdG9taXplZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StyleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleFormComponent", function() { return StyleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-parent/new-parent.component */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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







var StyleFormComponent = /** @class */ (function (_super) {
    __extends(StyleFormComponent, _super);
    function StyleFormComponent(dialog, location, brandsService, stylesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.createRelease = false;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    StyleFormComponent.prototype.ngOnInit = function () {
        this.styles = this.styles.filter(function (style) {
            return style.isParent;
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
        this.allStyles = this.styles;
    };
    StyleFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.isParent)
        });
    };
    StyleFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.createRelease = false;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    StyleFormComponent.prototype.submitClickedCreateRelease = function () {
        if (this.formGroup.valid) {
            this.data.createRelease = true;
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    StyleFormComponent.prototype.showModalStoresSelling = function () {
        this.modalRef = this.dialog.open(_ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShopsSellingStyleModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                styleId: this.styleId,
                shops: this.shops,
            }
        });
    };
    StyleFormComponent.prototype.showModalAddNewBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_8__["NewBrandComponent"], {
            height: '90%',
            data: { face: this.shop }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.brandsService.getAllBrands().subscribe(function (response) {
                _this.brands = response;
            });
        });
    };
    StyleFormComponent.prototype.showModalAddNewParent = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_7__["NewParentModalComponent"], {
            data: {
                brands: this.brands,
                categories: this.categories,
                face: this.shop,
                styles: this.styles,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.stylesService.getAllStyles().subscribe(function (response) {
                _this.styles = response.filter(function (style) {
                    return style.isParent;
                });
            });
        });
    };
    StyleFormComponent.prototype.selectParent = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return (style.brand === brandId) && style.isParent;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    StyleFormComponent.prototype.selectBrand = function (brandId) {
        var _this = this;
        this.brandsService.getAllBrands().subscribe(function (response) {
            if (brandId) {
                _this.brands = response.filter(function (brand) {
                    return brand.id === brandId;
                });
            }
            else {
                _this.brands = response;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StyleFormComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleFormComponent.prototype, "shops", void 0);
    StyleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'style-form',
            template: __webpack_require__(/*! ./style-form.component.html */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html"),
            styles: [__webpack_require__(/*! ./style-form.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StyleFormComponent);
    return StyleFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"margin-right-25px\" [fxFlex]=\"50\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"80\" fxLayout.lt-md=\"column\">\n\n          <mat-form-field class=\"margin-left-16px width-100pct customized\"  appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n          <div [fxFlex]=\"50\" fxLayout=\"column\" class=\"margin-right-25px\">\n\n            <mat-form-field class=\"margin-left-16px max-width-480px\">\n\n              <mat-label>Style Name</mat-label>\n\n              <input matInput type=\"text\" formControlName=\"name\" required>\n\n            </mat-form-field>\n\n            <mat-form-field class=\"padding-top-5px max-width-480px\">\n              <mat-label>Category</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\" required>\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                  {{category.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <!--mat-form-field class=\"max-width-480px\">\n              <mat-label>Slect Parent</mat-label>\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n                <mat-option>...</mat-option>\n                <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                  {{style.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field-->\n\n          </div>\n\n          <div class=\"\" [fxFlex]=\"50\" fxLayout=\"column\">\n\n            <mat-form-field class=\"width-100pc max-width-480px\">\n\n              <mat-label>SELECT BRAND</mat-label>\n\n              <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" required>\n\n                <mat-option (click)=\"selectParent('')\">...</mat-option>\n\n                <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\" (click)=\"selectParent(brand.id)\">\n                  {{brand.name}}\n                </mat-option>\n\n              </mat-select>\n\n            </mat-form-field>\n\n            <div>\n\n              <mat-slide-toggle [disabled]=\"true\" class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle>\n            \n            </div>\n\n          </div>\n\n          <!--div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n          <button class=\"margin-bottom-25px max-width-480px\" mat-stroked-button type=\"button\">Add a new Parent</button>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>SELECT PARENT</mat-label>\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n              <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                {{style.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div-->\n        </div>\n\n\n\n      </div>\n\n      <div *ngIf=\"styleId\" class=\"display-flex padding-bottom-10px justify-content-center\">\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModalStoresSelling()\">See Stores Selling this Style</button>\n        <button mat-stroked-button type=\"button\" class=\"margin-left-25px max-width-480px\" [routerLink]=\"['../../../releases/create']\"\n          [queryParams]=\"{styleId: styleId, returnUrl: location.path()}\">Create a Release</button>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{'Accept' | translate}}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'Cancel' | translate}}</button>\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.max-width-1000px {\n  max-width: 1000px !important; }\n\n@media screen and (max-width: 959px) {\n  .customized {\n    max-width: 480px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlLXBhcmVudC1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXN0eWxlXFxjb21wb25lbnRzXFxzdHlsZS1wYXJlbnQtZm9ybVxcc3R5bGUtcGFyZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFHRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXN0eWxlL2NvbXBvbmVudHMvc3R5bGUtcGFyZW50LWZvcm0vc3R5bGUtcGFyZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNDgwcHh7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTEwcHh7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcblxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtMTAwMHB4e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgIC5jdXN0b21pemVkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StyleParentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleParentFormComponent", function() { return StyleParentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ms-brands/services/brands.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands.service.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
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

//






var StyleParentFormComponent = /** @class */ (function (_super) {
    __extends(StyleParentFormComponent, _super);
    function StyleParentFormComponent(dialog, location, brandsService, stylesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.location = location;
        _this.brandsService = brandsService;
        _this.stylesService = stylesService;
        _this.isParent = false;
        _this.createRelease = false;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    StyleParentFormComponent.prototype.ngOnInit = function () {
        this.styles = this.styles.filter(function (style) {
            return style.isParent;
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
        this.allStyles = this.styles;
    };
    StyleParentFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            //parent: new FormControl(this.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
        });
    };
    StyleParentFormComponent.prototype.submitClicked = function () {
        console.log(this.createRelease);
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            console.log("invalid");
            this.triggerValidation();
        }
    };
    StyleParentFormComponent.prototype.showModalStoresSelling = function () {
        this.modalRef = this.dialog.open(_ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_8__["ShopsSellingStyleModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                styleId: this.styleId,
                shops: this.shops,
            }
        });
    };
    StyleParentFormComponent.prototype.showModalAddNewBrand = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_7__["NewBrandComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.brandsService.getAllBrands().subscribe(function (response) {
                _this.brands = response;
            });
        });
    };
    StyleParentFormComponent.prototype.selectParent = function (brandId) {
        var _this = this;
        this.stylesService.getAllStyles().subscribe(function (response) {
            if (brandId) {
                _this.styles = response.filter(function (style) {
                    return (style.brand === brandId) && style.isParent;
                });
            }
            else {
                _this.styles = response;
            }
        });
    };
    StyleParentFormComponent.prototype.selectBrand = function (brandId) {
        var _this = this;
        this.brandsService.getAllBrands().subscribe(function (response) {
            if (brandId) {
                _this.brands = response.filter(function (brand) {
                    return brand.id === brandId;
                });
            }
            else {
                _this.brands = response;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "brands", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "categories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StyleParentFormComponent.prototype, "isParent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StyleParentFormComponent.prototype, "styleId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StyleParentFormComponent.prototype, "shops", void 0);
    StyleParentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'style-parent-form',
            template: __webpack_require__(/*! ./style-parent-form.component.html */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.html"),
            styles: [__webpack_require__(/*! ./style-parent-form.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ms_brands_services_brands_service__WEBPACK_IMPORTED_MODULE_5__["BrandsService"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], StyleParentFormComponent);
    return StyleParentFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Style Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Brand</mat-label>\r\n    <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brand\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n        {{brand.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>Category</mat-label>\r\n    <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"category\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n        {{category.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW STYLE</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"styles\" matSort [matSortActive]=\"stylesService.previousSortColumn\"\r\n    [matSortDirection]=\"stylesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        NAME\r\n        <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"parent\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        PARENT\r\n        <td mat-cell *matCellDef=\"let element\"> {{ getParent(element.parent) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brand\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        BRAND\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ getBrand(element.brand) }} </td>\r\n    </ng-container>\r\n\r\n    <!--ng-container matColumnDef=\"collection\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COLLECTION\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\r\n    </ng-container-->\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        CATEGORY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ getCategory(element.category) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        LAST UPDATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.updatedAt | date: 'MM/dd/yyyy HH:mm:ss': timeZoneOffset.toString() }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeStyleModal(element.id)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy10YWJsZS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zdHlsZVxcY29tcG9uZW50c1xcc3R5bGVzLXRhYmxlXFxzdHlsZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlcy10YWJsZS9zdHlsZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0xMHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StyleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleTableComponent", function() { return StyleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _see_style_see_style_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../see-style/see-style.component */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts");
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var timeZoneOffset = new Date().getTimezoneOffset();
var StyleTableComponent = /** @class */ (function () {
    function StyleTableComponent(dialog, activatedRoute, stylesService, errorHandlingService) {
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'name',
            'parent',
            'brand',
            //'collection',
            'category',
            'updatedAt',
            'actions'
        ];
        this.totalLength = 0;
        this.styles = [];
        this.timeZoneOffset = timeZoneOffset;
    }
    StyleTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.styless = this.activatedRoute.snapshot.data.styles;
        // Begin observing style list changes.
        this.stylesList = this.stylesService.stylesList.subscribe(function (stylesList) {
            _this.totalLength = stylesList.dataCount;
            _this.styles = stylesList.data;
            if (_this.styles.length === 0 && _this.totalLength > 0 && _this.stylesService.previousPageSize > 0) {
                _this.stylesService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.stylesService.previousPageSize) - 1;
                _this.stylesService.reloadStyles().subscribe(function (response) {
                    _this.stylesService.stylesList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    StyleTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    StyleTableComponent.prototype.ngOnDestroy = function () {
        this.stylesList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    StyleTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['brand'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['category'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    StyleTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.stylesService.getStyles(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.stylesService.stylesList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    StyleTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    StyleTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    StyleTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    StyleTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.getCategory = function (id) {
        try {
            return this.categories.find(function (category) {
                return category.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.getParent = function (id) {
        try {
            return this.styles.find(function (style) {
                return style.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    StyleTableComponent.prototype.seeStyleModal = function (id) {
        var _this = this;
        this.stylesService.getStyle(id).subscribe(function (response) {
            _this.modalRef = _this.dialog.open(_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_6__["SeeStyleComponent"], {
                height: '90%',
                width: '90%',
                data: {
                    id: id,
                    styles: _this.styless,
                    brands: _this.brands,
                    categories: _this.categories,
                    data: response.data
                }
            });
        });
        /*this.modalRef.afterClosed().subscribe(() => {
            this.brandsService.getAllBrands().subscribe((response) => {
                this.brands = response;
            });
        });*/
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StyleTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StyleTableComponent.prototype, "sort", void 0);
    StyleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'styles-table',
            template: __webpack_require__(/*! ./styles-table.component.html */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html"),
            styles: [__webpack_require__(/*! ./styles-table.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_7__["StylesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], StyleTableComponent);
    return StyleTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsStyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsStyleRoutingModule", function() { return MsStyleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/styles-table/styles-table.component */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts");
/* harmony import */ var _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-style/new-style.component */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts");
/* harmony import */ var _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-style/edit-style.component */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts");
/* harmony import */ var _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/delete-style/delete-style.component */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
/* harmony import */ var _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ms-style/services/styles-resolve.service */ "./src/app/ms-back-office/modules/ms-style/services/styles-resolve.service.ts");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "./src/app/routing/services/id-resolve.service.ts");
/* harmony import */ var _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ms-shops/services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//






var routes = [
    {
        path: '',
        component: _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_2__["StyleTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_3__["NewStyleComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_4__["EditStyleComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"],
            styles: _ms_style_services_styles_resolve_service__WEBPACK_IMPORTED_MODULE_9__["StylesResolveService"],
            shops: _ms_shops_services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_11__["ShopsResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStyleComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            styleId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsStyleRoutingModule = /** @class */ (function () {
    function MsStyleRoutingModule() {
    }
    MsStyleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsStyleRoutingModule);
    return MsStyleRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/ms-style.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/ms-style.module.ts ***!
  \********************************************************************/
/*! exports provided: MsStyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsStyleModule", function() { return MsStyleModule; });
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
/* harmony import */ var _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/styles-table/styles-table.component */ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.ts");
/* harmony import */ var _ms_style_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ms-style-routing.module */ "./src/app/ms-back-office/modules/ms-style/ms-style-routing.module.ts");
/* harmony import */ var _components_style_form_style_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/style-form/style-form.component */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.ts");
/* harmony import */ var _components_style_parent_form_style_parent_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/style-parent-form/style-parent-form.component */ "./src/app/ms-back-office/modules/ms-style/components/style-parent-form/style-parent-form.component.ts");
/* harmony import */ var _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/see-style/see-style.component */ "./src/app/ms-back-office/modules/ms-style/components/see-style/see-style.component.ts");
/* harmony import */ var _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/new-style/new-style.component */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts");
/* harmony import */ var _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/new-parent/new-parent.component */ "./src/app/ms-back-office/modules/ms-style/components/new-parent/new-parent.component.ts");
/* harmony import */ var _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-style/edit-style.component */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts");
/* harmony import */ var _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/delete-style/delete-style.component */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ms-brands/ms-brands.module */ "./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts");
/* harmony import */ var _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../ms-shops/ms-shops.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//














var MsStyleModule = /** @class */ (function () {
    function MsStyleModule() {
    }
    MsStyleModule = __decorate([
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
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_style_routing_module__WEBPACK_IMPORTED_MODULE_16__["MsStyleRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"],
                _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_25__["MsBrandsModule"],
                _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_26__["MsShopsModule"],
            ],
            declarations: [
                _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_15__["StyleTableComponent"],
                _components_style_form_style_form_component__WEBPACK_IMPORTED_MODULE_17__["StyleFormComponent"],
                _components_style_parent_form_style_parent_form_component__WEBPACK_IMPORTED_MODULE_18__["StyleParentFormComponent"],
                _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_20__["NewStyleComponent"],
                _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_22__["EditStyleComponent"],
                _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_23__["DeleteStyleComponent"],
                _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_21__["NewParentModalComponent"],
                _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_19__["SeeStyleComponent"],
            ],
            entryComponents: [
                _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_27__["ShopsSellingStyleModalComponent"],
                _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_24__["NewBrandComponent"],
                _components_new_parent_new_parent_component__WEBPACK_IMPORTED_MODULE_21__["NewParentModalComponent"],
                _components_see_style_see_style_component__WEBPACK_IMPORTED_MODULE_19__["SeeStyleComponent"]
            ]
        })
    ], MsStyleModule);
    return MsStyleModule;
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
//# sourceMappingURL=ms-style-ms-style-module.js.map