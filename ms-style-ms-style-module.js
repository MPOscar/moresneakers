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




var titleKey = 'Title Delete Style';
var deleteBtnKey = 'Delete Style';
var messageKey = 'Delete Style Message';
var errorKey = 'Error';
var deletedUserMessageKey = 'Deleted Style Message';
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
                _this.toastr.success(deletedUserMessageKey);
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

module.exports = "<h1>EDIT STYLE</h1>\n<style-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [styles]=\"styles\"\n    [categories]=\"categories\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</style-form>\n"

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
        this.createUser(data);
    };
    NewStyleComponent.prototype.cancel = function () {
        //this.close.emit();TODO
        this.close();
    };
    NewStyleComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewStyleComponent.prototype.createUser = function (data) {
        var _this = this;
        this.stylesService.postStyle(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            //this.close.emit();TODO
            _this.close();
            _this.toastr.success(savedUserMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
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

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"justify-content-space-between margin-right-25px\" [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n        <div [fxFlex]=\"25\" fxLayout=\"column\">\n\n          <mat-form-field class=\"margin-left-16px\">\n\n            <mat-label>Style Name</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"name\" required>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"margin-left-16px\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n\n          <button class=\"margin-bottom-25px\" mat-stroked-button type=\"button\" (click)=\"showModalAddNewBrand()\">Add a new Brand</button>\n\n          <mat-form-field class=\"width-100pc padding-top-20px\">\n\n            <mat-label>SELECT BRAND</mat-label>\n            <mat-select placeholder=\"Select\" formControlName=\"brand\" panelOpen=\"true\" required>\n              <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n                {{brand.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n        </div>\n\n        <div class=\"margin-top-10px\" [fxFlex]=\"30\" fxLayout=\"column\">\n          <button class=\"margin-bottom-25px\" mat-stroked-button type=\"button\">Add a new Parent</button>\n\n          <mat-form-field class=\"width-100pc padding-top-20px\">\n\n            <mat-label>SELECT PARENT</mat-label>\n            <mat-select placeholder=\"Select\" formControlName=\"parent\">\n              <mat-option *ngFor=\"let style of styles\" [value]=\"style.id\">\n                {{style.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <div class=\"align-items-center\" [fxFlex]=\"100\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n        <button mat-stroked-button type=\"button\" class=\"max-width-480px\" (click)=\"showModalStoresSelling()\">See Stores Selling this Style</button>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{'Save' | translate}}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{'Cancel' | translate}}</button>\n\n\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1 !important; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.max-width-480px {\n  max-width: 480px !important; }\n\n.margin-bottom-10px {\n  margin-bottom: 10px !important; }\n\ntextarea {\n  height: 43px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zdHlsZS9jb21wb25lbnRzL3N0eWxlLWZvcm0vRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtc3R5bGVcXGNvbXBvbmVudHNcXHN0eWxlLWZvcm1cXHN0eWxlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc3R5bGUvY29tcG9uZW50cy9zdHlsZS1mb3JtL3N0eWxlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNDgwcHh7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTEwcHh7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59Il19 */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function StyleFormComponent(dialog, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    StyleFormComponent.prototype.ngOnInit = function () {
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
    StyleFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.parent),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('a47a9578-f90a-4f4b-8bd9-a505b690fcdd'),
        });
    };
    StyleFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    StyleFormComponent.prototype.showModalStoresSelling = function () {
        this.modalRef = this.dialog.open(_ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_5__["ShopsSellingStylecomponentModalComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
        });
    };
    StyleFormComponent.prototype.showModalAddNewBrand = function () {
        this.modalRef = this.dialog.open(_ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_4__["NewBrandComponent"], {
            height: '90%',
            width: '90%',
            data: { face: this.shop }
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
    StyleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'style-form',
            template: __webpack_require__(/*! ./style-form.component.html */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.html"),
            styles: [__webpack_require__(/*! ./style-form.component.scss */ "./src/app/ms-back-office/modules/ms-style/components/style-form/style-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], StyleFormComponent);
    return StyleFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-style/components/styles-table/styles-table.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Style Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n\n  <mat-form-field>\n    <input matInput formControlName=\"name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Brand</mat-label>\n    <mat-select placeholder=\"Select\" formControlName=\"brand\">\n      <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n        {{brand.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Category</mat-label>\n    <mat-select placeholder=\"Select\" formControlName=\"category\">\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n        {{category.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW STYLE</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"styles\" matSort [matSortActive]=\"stylesService.previousSortColumn\"\n    [matSortDirection]=\"stylesService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"NAME\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        NAME\n        <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"PARENT\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PARENT\n        <td mat-cell *matCellDef=\"let element\"> {{ element.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"BRAND\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        BRAND\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ getBrand(element.brand) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"COLLECTION\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        COLLECTION\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"CATEGORY\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        CATEGORY\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ getCategory(element.category) }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"LAST UPDATE\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        LAST UPDATE\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.updatedAt }} </td>\n    </ng-container>\n    \n    <ng-container matColumnDef=\"ACTION\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

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
/* harmony import */ var _services_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
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
var StyleTableComponent = /** @class */ (function () {
    function StyleTableComponent(activatedRoute, stylesService, errorHandlingService) {
        this.activatedRoute = activatedRoute;
        this.stylesService = stylesService;
        this.errorHandlingService = errorHandlingService;
        this.displayedColumns = [
            'NAME',
            'PARENT',
            'BRAND',
            'COLLECTION',
            'CATEGORY',
            'LAST UPDATE',
            'ACTION'
        ];
        this.totalLength = 0;
        this.styles = [];
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_styles_service__WEBPACK_IMPORTED_MODULE_6__["StylesService"],
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
/* harmony import */ var _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/new-style/new-style.component */ "./src/app/ms-back-office/modules/ms-style/components/new-style/new-style.component.ts");
/* harmony import */ var _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-style/edit-style.component */ "./src/app/ms-back-office/modules/ms-style/components/edit-style/edit-style.component.ts");
/* harmony import */ var _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-style/delete-style.component */ "./src/app/ms-back-office/modules/ms-style/components/delete-style/delete-style.component.ts");
/* harmony import */ var _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ms-brands/components/new-brand/new-brand.component */ "./src/app/ms-back-office/modules/ms-brands/components/new-brand/new-brand.component.ts");
/* harmony import */ var _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ms-brands/ms-brands.module */ "./src/app/ms-back-office/modules/ms-brands/ms-brands.module.ts");
/* harmony import */ var _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ms-shops/ms-shops.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops.module.ts");
/* harmony import */ var _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
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
                _ms_style_routing_module__WEBPACK_IMPORTED_MODULE_16__["MsStyleRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"],
                _ms_brands_ms_brands_module__WEBPACK_IMPORTED_MODULE_22__["MsBrandsModule"],
                _ms_shops_ms_shops_module__WEBPACK_IMPORTED_MODULE_23__["MsShopsModule"],
            ],
            declarations: [
                _components_styles_table_styles_table_component__WEBPACK_IMPORTED_MODULE_15__["StyleTableComponent"],
                _components_style_form_style_form_component__WEBPACK_IMPORTED_MODULE_17__["StyleFormComponent"],
                _components_new_style_new_style_component__WEBPACK_IMPORTED_MODULE_18__["NewStyleComponent"],
                _components_edit_style_edit_style_component__WEBPACK_IMPORTED_MODULE_19__["EditStyleComponent"],
                _components_delete_style_delete_style_component__WEBPACK_IMPORTED_MODULE_20__["DeleteStyleComponent"]
            ],
            entryComponents: [
                _ms_shops_components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_24__["ShopsSellingStylecomponentModalComponent"],
                _ms_brands_components_new_brand_new_brand_component__WEBPACK_IMPORTED_MODULE_21__["NewBrandComponent"]
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
        this.previousSortColumn = 'name';
        this.previousSortDirection = 'asc';
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
    StylesService.prototype.getStyle = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    StylesService.prototype.putStyle = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    StylesService.prototype.deleteStyle = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
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



/***/ })

}]);
//# sourceMappingURL=ms-style-ms-style-module.js.map