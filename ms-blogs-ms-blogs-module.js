(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-blogs-ms-blogs-module"],{

/***/ "./node_modules/primeng/components/editor/editor.js":
/*!**********************************************************!*\
  !*** ./node_modules/primeng/components/editor/editor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.EDITOR_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Editor; }),
    multi: true
};
var Editor = /** @class */ (function () {
    function Editor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onTextChange = new core_1.EventEmitter();
        this.onSelectionChange = new core_1.EventEmitter();
        this.onInit = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Editor.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-content');
        var toolbarElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-toolbar');
        this.quill = new Quill(editorElement, {
            modules: {
                toolbar: toolbarElement
            },
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats
        });
        if (this.value) {
            this.quill.pasteHTML(this.value);
        }
        this.quill.on('text-change', function (delta, oldContents, source) {
            if (source === 'user') {
                var html = editorElement.children[0].innerHTML;
                var text = _this.quill.getText().trim();
                if (text.length === 0) {
                    html = null;
                }
                _this.onTextChange.emit({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
                _this.onModelChange(html);
                _this.onModelTouched();
            }
        });
        this.quill.on('selection-change', function (range, oldRange, source) {
            _this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.onInit.emit({
            editor: this.quill
        });
    };
    Editor.prototype.writeValue = function (value) {
        this.value = value;
        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    };
    Editor.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Editor.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Editor.prototype.getQuill = function () {
        return this.quill;
    };
    Object.defineProperty(Editor.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (val) {
            this._readonly = val;
            if (this.quill) {
                if (this._readonly)
                    this.quill.disable();
                else
                    this.quill.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Editor.prototype, "onTextChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Editor.prototype, "onSelectionChange", void 0);
    __decorate([
        core_1.ContentChild(shared_1.Header),
        __metadata("design:type", Object)
    ], Editor.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Editor.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Editor.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Editor.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Editor.prototype, "formats", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Editor.prototype, "onInit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Editor.prototype, "readonly", null);
    Editor = __decorate([
        core_1.Component({
            selector: 'p-editor',
            template: "\n        <div [ngClass]=\"'ui-widget ui-editor-container ui-corner-all'\" [class]=\"styleClass\">\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"toolbar\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"!toolbar\">\n                <span class=\"ql-formats\">\n                    <select class=\"ql-header\">\n                      <option value=\"1\">Heading</option>\n                      <option value=\"2\">Subheading</option>\n                      <option selected>Normal</option>\n                    </select>\n                    <select class=\"ql-font\">\n                      <option selected>Sans Serif</option>\n                      <option value=\"serif\">Serif</option>\n                      <option value=\"monospace\">Monospace</option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n                    <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n                    <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <select class=\"ql-color\"></select>\n                    <select class=\"ql-background\"></select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-list\" value=\"ordered\" aria-label=\"Ordered List\"></button>\n                    <button class=\"ql-list\" value=\"bullet\" aria-label=\"Unordered List\"></button>\n                    <select class=\"ql-align\">\n                        <option selected></option>\n                        <option value=\"center\"></option>\n                        <option value=\"right\"></option>\n                        <option value=\"justify\"></option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-link\" aria-label=\"Insert Link\"></button>\n                    <button class=\"ql-image\" aria-label=\"Insert Image\"></button>\n                    <button class=\"ql-code-block\" aria-label=\"Insert Code Block\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-clean\" aria-label=\"Remove Styles\"></button>\n                </span>\n            </div>\n            <div class=\"ui-editor-content\" [ngStyle]=\"style\"></div>\n        </div>\n    ",
            providers: [domhandler_1.DomHandler, exports.EDITOR_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Editor, shared_1.SharedModule],
            declarations: [Editor]
        })
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
//# sourceMappingURL=editor.js.map

/***/ }),

/***/ "./node_modules/primeng/editor.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/editor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/editor/editor */ "./node_modules/primeng/components/editor/editor.js"));

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <mat-radio-group formControlName=\"type\">\r\n\r\n        <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\r\n\r\n          <div class=\"display-flex margin-right-25px\">\r\n\r\n            <mat-radio-button value=\"Article\" class=\"margin-top-10px\" matTooltip=\"{{ 'Create an Article' | translate }}\">Create an Article</mat-radio-button>\r\n\r\n          </div>\r\n\r\n          <div class=\"display-flex\">\r\n\r\n            <mat-radio-button value=\"Focus\" class=\"margin-top-10px\" matTooltip=\"{{ 'Create a Focus' | translate }}\">Create a Focus</mat-radio-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-radio-group>\r\n\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div [fxFlex]=\"50\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" class=\"max-width-480px\">\r\n\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Author</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"author\" required>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\" panelOpen=\"true\" required>\r\n                  <mat-option>...</mat-option>\r\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n                    {{brand.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Title</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"title\" required>\r\n\r\n          </mat-form-field>\r\n          <div class=\"padding-top-25px max-width-480px\">\r\n            <div class=\"padding-bottom-25px\">\r\n              <mat-label>Body</mat-label>\r\n            </div>\r\n            <p-editor [style]=\"{'height':'320px'}\" formControlName=\"body\"></p-editor>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"border max-width-480px\">\r\n\r\n          <div class=\"display-flex justify-content-center\">\r\n            <h3>Image</h3>\r\n          </div>\r\n\r\n          <image-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL2Jsb2ctZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1ibG9nc1xcY29tcG9uZW50c1xcYmxvZy1mb3JtXFxibG9nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9ibG9nLWZvcm0vYmxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogFormComponent", function() { return BlogFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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


var BlogFormComponent = /** @class */ (function (_super) {
    __extends(BlogFormComponent, _super);
    function BlogFormComponent(formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    BlogFormComponent.prototype.ngOnInit = function () {
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
    BlogFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.author, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            brandId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.brandId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.body, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            faces: this.faces,
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    BlogFormComponent.prototype.submitClicked = function () {
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
    ], BlogFormComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_4__["Face"])
    ], BlogFormComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BlogFormComponent.prototype, "brands", void 0);
    BlogFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-form',
            template: __webpack_require__(/*! ./blog-form.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./blog-form.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], BlogFormComponent);
    return BlogFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Blog Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"title\" placeholder=\"TITLE\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"author\" placeholder=\"AUTHOR\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"width-100pc\">\r\n\r\n    <mat-select disableOptionCentering placeholder=\"TYPE\" formControlName=\"type\">\r\n\r\n      <mat-option>...</mat-option>\r\n\r\n      <mat-option *ngFor=\"let type of types\" [value]=\"type.id\">\r\n\r\n        {{type.name}}\r\n\r\n      </mat-option>\r\n\r\n    </mat-select>\r\n\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">WRITE A POST</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"blogs\" matSort [matSortActive]=\"blogsService.previousSortColumn\"\r\n    [matSortDirection]=\"blogsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TITLE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.title }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"thumbnail\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\r\n        <div class=\"position-relative margin-top-5px\">\r\n          <img [src]=\"element.imgUrl\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"author\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        AUTHOR\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.author }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TYPE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.type }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brandId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        BRAND\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getBrand(element.brandId) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        DATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt | date: 'dd/MM/yyyy HH:mm:ss' }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeBlogModal(element.id)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"confirmDeleteBlog(element)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL2Jsb2dzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJsb2dzXFxjb21wb25lbnRzXFxibG9ncy10YWJsZVxcYmxvZ3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9ibG9ncy10YWJsZS9ibG9ncy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BlogsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsTableComponent", function() { return BlogsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_blogs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/blogs.service */ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts");
/* harmony import */ var _models_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/type */ "./src/app/ms-back-office/modules/ms-blogs/models/type.ts");
/* harmony import */ var _see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../see-blog/see-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.ts");
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
var messageKey = 'Are you sure you want to delete this Blog?';
var errorKey = 'Error';
var deletedBlogMessageKey = 'Deleted';
var BlogsTableComponent = /** @class */ (function () {
    function BlogsTableComponent(activatedRoute, blogsService, dialog, errorHandlingService, toastr) {
        this.activatedRoute = activatedRoute;
        this.blogsService = blogsService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.displayedColumns = [
            'title',
            'thumbnail',
            'author',
            'type',
            'brandId',
            'updatedAt',
            'actions'
        ];
        this.blogs = [];
        this.totalLength = 0;
        this.types = _models_type__WEBPACK_IMPORTED_MODULE_9__["TYPE"];
        this.faceList = [];
    }
    BlogsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        // Begin observing style list changes.
        this.blogsList = this.blogsService.blogsList.subscribe(function (categoriesList) {
            _this.totalLength = categoriesList.dataCount;
            _this.blogs = categoriesList.data;
            if (_this.blogs.length === 0 && _this.totalLength > 0 && _this.blogsService.previousPageSize > 0) {
                _this.blogsService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.blogsService.previousPageSize) - 1;
                _this.blogsService.reloadBlogs().subscribe(function (response) {
                    _this.blogsService.blogsList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    BlogsTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    BlogsTableComponent.prototype.ngOnDestroy = function () {
        this.blogsList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    BlogsTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['title'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['author'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        group['type'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    BlogsTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.blogsService.getBlogs(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.blogsService.blogsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    BlogsTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    BlogsTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    BlogsTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    BlogsTableComponent.prototype.getBrand = function (id) {
        try {
            return this.brands.find(function (brand) {
                return brand.id === id;
            }).name;
        }
        catch (err) {
            return;
        }
    };
    BlogsTableComponent.prototype.confirmDeleteBlog = function (data) {
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
                _this.deleteBlog(data);
            }
        });
    };
    BlogsTableComponent.prototype.deleteBlog = function (data) {
        var _this = this;
        this.blogsService.deleteBlog(data.id).subscribe(function (response) {
            _this.blogsService.reloadBlogs().subscribe(function (response) {
                _this.blogsService.blogsList.next(response);
                _this.toastr.success(deletedBlogMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    BlogsTableComponent.prototype.seeBlogModal = function (id) {
        var _this = this;
        this.blogsService.getBlog(id).subscribe(function (response) {
            _this.data = response.data;
            if (_this.data.imgUrl) {
                var face = {
                    imgUrl: _this.data.imgUrl,
                };
                _this.faceList = [face];
                _this.principal = face;
            }
            _this.modalRef = _this.dialog.open(_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_10__["SeeBlogComponent"], {
                height: '90%',
                width: '95%',
                data: {
                    id: id,
                    faceList: _this.faceList,
                    principal: _this.principal,
                    data: response.data,
                    brands: _this.brands
                }
            });
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BlogsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BlogsTableComponent.prototype, "sort", void 0);
    BlogsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blogs-table',
            template: __webpack_require__(/*! ./blogs-table.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.html"),
            styles: [__webpack_require__(/*! ./blogs-table.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_blogs_service__WEBPACK_IMPORTED_MODULE_8__["BlogsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], BlogsTableComponent);
    return BlogsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9kZWxldGUtYmxvZy9kZWxldGUtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_blogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/blogs.service */ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts");
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
var messageKey = 'Are you sure you want to delete this Blog?';
var errorKey = 'Error';
var deletedBlogMessageKey = 'Deleted';
var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent(activatedRoute, dialog, blogsService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.blogsService = blogsService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteBlogComponent.prototype.ngAfterViewInit = function () {
        this.getBlog();
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        this.blogId = this.activatedRoute.snapshot.data.blogId;
    };
    DeleteBlogComponent.prototype.getBlog = function () {
        var _this = this;
        this.blogsService.getBlog(this.blogId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteBlog();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteBlogComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteBlogComponent.prototype.confirmDeleteBlog = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: this.data }
            }
        });
        this.modalRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.deleteBlog();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.blogsService.deleteBlog(this.data.id).subscribe(function (response) {
            _this.blogsService.reloadBlogs().subscribe(function (response) {
                _this.blogsService.blogsList.next(response);
                _this.toastr.success(deletedBlogMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-blog',
            template: __webpack_require__(/*! ./delete-blog.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__(/*! ./delete-blog.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_blogs_service__WEBPACK_IMPORTED_MODULE_7__["BlogsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>BLOG EDITOR</h1>\n<blog-form *ngIf=\"data\"\n    [brands]=\"brands\"\n    [data]=\"data\"\n    [faceList]=\"faceList\"    \n    [principal]=\"principal\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</blog-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL2VkaXQtYmxvZy9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1ibG9nc1xcY29tcG9uZW50c1xcZWRpdC1ibG9nXFxlZGl0LWJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_blogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/blogs.service */ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
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
var updatedBlogMessageKey = 'Updated';
var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(activatedRoute, dialog, blogsService, errorHandlingService, imagesService, router, snackBar, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.blogsService = blogsService;
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
    EditBlogComponent.prototype.ngOnInit = function () {
        this.blogId = this.activatedRoute.snapshot.data.blogId;
        this.brands = this.activatedRoute.snapshot.data.brands;
    };
    EditBlogComponent.prototype.ngAfterViewInit = function () {
        this.getBlog();
    };
    EditBlogComponent.prototype.getBlog = function () {
        var _this = this;
        this.blogsService.getBlog(this.blogId).subscribe(function (response) {
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
    EditBlogComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateBlog(data);
    };
    EditBlogComponent.prototype.cancel = function () {
        this.close();
    };
    EditBlogComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditBlogComponent.prototype.updateBlog = function (blogData) {
        var _this = this;
        if (blogData.faces) {
            for (var position in blogData.faces) {
                var face = blogData.faces[position];
                if (face.state === _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_8__["State"].New) {
                    var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                        blogData.imgUrl = response.data.url;
                        _this.blogsService.putBlog(blogData).subscribe(function (response) {
                            _this.unsavedChanges = false;
                            _this.close();
                            _this.toastr.success(updatedBlogMessageKey);
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
                    this.blogsService.putBlog(blogData).subscribe(function (response) {
                        _this.unsavedChanges = false;
                        _this.close();
                        _this.toastr.success(updatedBlogMessageKey);
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                        _this.validationErrors = error.formErrors;
                    });
                }
            }
        }
        else {
            this.blogsService.putBlog(blogData).subscribe(function (response) {
                _this.unsavedChanges = false;
                _this.close();
                _this.toastr.success(updatedBlogMessageKey);
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
                _this.validationErrors = error.formErrors;
            });
        }
    };
    EditBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-blog',
            template: __webpack_require__(/*! ./edit-blog.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__(/*! ./edit-blog.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_9__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_blogs_service__WEBPACK_IMPORTED_MODULE_4__["BlogsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>BLOG CREATOR</h1>\n<blog-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    [brands]=\"brands\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</blog-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL25ldy1ibG9nL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJsb2dzXFxjb21wb25lbnRzXFxuZXctYmxvZ1xcbmV3LWJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9uZXctYmxvZy9uZXctYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBlogComponent", function() { return NewBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_blogs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/blogs.service */ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/services/images.service */ "./src/app/ui/modules/images-card/services/images.service.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
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
var savedMessageKey = 'Saved';
var NewBlogComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewBlogComponent(activatedRoute, blogsService, dialog, errorHandlingService, imagesService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.blogsService = blogsService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
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
    NewBlogComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
    };
    NewBlogComponent.prototype.submit = function (data) {
        this.createBlog(data);
    };
    NewBlogComponent.prototype.cancel = function () {
        this.close();
    };
    NewBlogComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewBlogComponent.prototype.createBlog = function (blogData) {
        var _this = this;
        for (var position in blogData.faces) {
            var face = blogData.faces[position];
            var subscription$ = this.imagesService.postImage(face.file).subscribe(function (response) {
                blogData.imgUrl = response.data.url;
                _this.blogsService.postBlog(blogData).subscribe(function (response) {
                    _this.unsavedChanges = false;
                    _this.close();
                    _this.toastr.success(savedMessageKey);
                }, function (error) {
                    _this.errorHandlingService.handleUiError(errorKey, error, 'blog');
                    _this.validationErrors = error.formErrors;
                });
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
                _this.validationErrors = error.formErrors;
            });
        }
    };
    NewBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-blog',
            template: __webpack_require__(/*! ./new-blog.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.html"),
            styles: [__webpack_require__(/*! ./new-blog.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_blogs_service__WEBPACK_IMPORTED_MODULE_4__["BlogsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], NewBlogComponent);
    return NewBlogComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-shrink-0 display-flex justify-content-end close-mat-dialog-buttom\">\r\n    <span class=\"mat-button-wrapper cursor-pointer\" (click)=\"close()\">\r\n    <mat-icon>clear</mat-icon>\r\n    </span>\r\n</div>\r\n<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <mat-radio-group formControlName=\"type\">\r\n\r\n        <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\r\n\r\n          <div class=\"display-flex margin-right-25px\">\r\n\r\n            <mat-radio-button value=\"Article\" class=\"margin-top-10px\" matTooltip=\"{{ 'Article' | translate }}\" [disabled]=\"true\">Article</mat-radio-button>\r\n\r\n          </div>\r\n\r\n          <div class=\"display-flex\">\r\n\r\n            <mat-radio-button value=\"Focus\" class=\"margin-top-10px\" matTooltip=\"{{ 'Focus' | translate }}\" [disabled]=\"true\">Focus</mat-radio-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-radio-group>\r\n\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div [fxFlex]=\"50\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" class=\"max-width-480px\">\r\n\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Author</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"author\" required readonly>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\" panelOpen=\"true\" required [disabled]=\"true\">\r\n                  <mat-option>...</mat-option>\r\n                  <mat-option *ngFor=\"let brand of dialogData.brands\" [value]=\"brand.id\">\r\n                    {{brand.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Title</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"title\" required readonly>\r\n\r\n          </mat-form-field>\r\n          <div class=\"padding-top-25px max-width-480px\">\r\n            <div class=\"padding-bottom-25px\">\r\n              <mat-label>Body</mat-label>\r\n            </div>\r\n            <p-editor [style]=\"{'height':'320px'}\" formControlName=\"body\" [readonly]=\"true\"></p-editor>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"max-width-480px\">\r\n\r\n          <div class=\"display-flex justify-content-center\">\r\n            <h3>Image</h3>\r\n          </div>\r\n\r\n          <image-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\" [disabled]=\"true\"></image-card>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n::ng-deep .mat-dialog-container {\n  padding: 0px 25px 25px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL3NlZS1ibG9nL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJsb2dzXFxjb21wb25lbnRzXFxzZWUtYmxvZ1xcc2VlLWJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL3NlZS1ibG9nL3NlZS1ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAyNXB4IDI1cHggMjVweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SeeBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeBlogComponent", function() { return SeeBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
/* harmony import */ var _services_blogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/blogs.service */ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts");
/* harmony import */ var _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/modules/images-card/models/face */ "./src/app/ui/modules/images-card/models/face.ts");
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
var SeeBlogComponent = /** @class */ (function (_super) {
    __extends(SeeBlogComponent, _super);
    function SeeBlogComponent(formBuilder, blogsService, errorHandlingService, translateService, dialogRef, dialogData) {
        var _this = _super.call(this, translateService) || this;
        _this.formBuilder = formBuilder;
        _this.blogsService = blogsService;
        _this.errorHandlingService = errorHandlingService;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    SeeBlogComponent.prototype.ngOnInit = function () {
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
        this.blogsService.getBlog(this.dialogData.id).subscribe(function (response) {
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
    SeeBlogComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.dialogData.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.author),
            brandId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.brandId),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.body),
            faces: this.faces,
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.title),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dialogData.data.type),
        });
    };
    SeeBlogComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    SeeBlogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeBlogComponent.prototype, "faceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ui_modules_images_card_models_face__WEBPACK_IMPORTED_MODULE_7__["Face"])
    ], SeeBlogComponent.prototype, "principal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SeeBlogComponent.prototype, "brands", void 0);
    SeeBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'see-blog',
            template: __webpack_require__(/*! ./see-blog.component.html */ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./see-blog.component.scss */ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_blogs_service__WEBPACK_IMPORTED_MODULE_6__["BlogsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], SeeBlogComponent);
    return SeeBlogComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/models/type.ts":
/*!****************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/models/type.ts ***!
  \****************************************************************/
/*! exports provided: Type, TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
var Type = /** @class */ (function () {
    function Type() {
    }
    return Type;
}());

;
var TYPE = [
    { id: 'Article', name: 'Article' },
    { id: 'Focus', name: 'Focus' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/ms-blogs-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/ms-blogs-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsBlogsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBlogsRoutingModule", function() { return MsBlogsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/blogs-table/blogs-table.component */ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.ts");
/* harmony import */ var _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-blog/delete-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-blog/new-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-categories/services/categories-resolve.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts");
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
        component: _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_2__["BlogsTableComponent"],
        resolve: {
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_5__["NewBlogComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_8__["CategoriesResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_4__["EditBlogComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            blogId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteBlogComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            blogId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsBlogsRoutingModule = /** @class */ (function () {
    function MsBlogsRoutingModule() {
    }
    MsBlogsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsBlogsRoutingModule);
    return MsBlogsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/ms-blogs.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/ms-blogs.module.ts ***!
  \********************************************************************/
/*! exports provided: MsBlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsBlogsModule", function() { return MsBlogsModule; });
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
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog-form/blog-form.component */ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.ts");
/* harmony import */ var _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/see-blog/see-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.ts");
/* harmony import */ var _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/blogs-table/blogs-table.component */ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.ts");
/* harmony import */ var _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-blog/delete-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.ts");
/* harmony import */ var _ms_blogs_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ms-blogs-routing.module */ "./src/app/ms-back-office/modules/ms-blogs/ms-blogs-routing.module.ts");
/* harmony import */ var _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/new-blog/new-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//















//


//







var MsBlogsModule = /** @class */ (function () {
    function MsBlogsModule() {
    }
    MsBlogsModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                _ms_blogs_routing_module__WEBPACK_IMPORTED_MODULE_22__["MsBlogsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_16__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_15__["ImageCardModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"]
            ],
            declarations: [
                _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_17__["BlogFormComponent"],
                _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_19__["BlogsTableComponent"],
                _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_20__["DeleteBlogComponent"],
                _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_21__["EditBlogComponent"],
                _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_23__["NewBlogComponent"],
                _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_18__["SeeBlogComponent"]
            ],
            exports: [
                _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_17__["BlogFormComponent"],
                _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_19__["BlogsTableComponent"],
                _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_20__["DeleteBlogComponent"],
                _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_21__["EditBlogComponent"],
                _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_23__["NewBlogComponent"],
            ],
            entryComponents: [
                _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_18__["SeeBlogComponent"]
            ]
        })
    ], MsBlogsModule);
    return MsBlogsModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/services/blogs.service.ts ***!
  \***************************************************************************/
/*! exports provided: ASCENDING, BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
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
var BlogsService = /** @class */ (function () {
    function BlogsService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'title';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.blogsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.blogs.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    BlogsService.prototype.getBlogs = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a Blog for example.
    //
    BlogsService.prototype.reloadBlogs = function () {
        return this.getBlogs(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    BlogsService.prototype.postBlog = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    BlogsService.prototype.getBlog = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    BlogsService.prototype.putBlog = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    BlogsService.prototype.deleteBlog = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    BlogsService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.title && filter.title.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "title=" + filter.title;
        }
        if (filter.author && filter.author.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "author=" + filter.author;
        }
        if (filter.type && filter.type.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "type=" + filter.type;
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
    BlogsService.prototype.getAllBlogs = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    BlogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], BlogsService);
    return BlogsService;
}());



/***/ }),

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

/***/ "./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-categories/services/categories-resolve.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: CategoriesResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesResolveService", function() { return CategoriesResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.service */ "./src/app/ms-back-office/modules/ms-categories/services/categories.service.ts");
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
var CategoriesResolveService = /** @class */ (function () {
    function CategoriesResolveService(categoriesService, translate, errorHandlingService) {
        this.categoriesService = categoriesService;
        this.translate = translate;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    CategoriesResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.categoriesService.getAllCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    CategoriesResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"]])
    ], CategoriesResolveService);
    return CategoriesResolveService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-categories/services/categories.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-categories/services/categories.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ASCENDING, CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
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
var CategoriesService = /** @class */ (function () {
    function CategoriesService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'name';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.categoriesList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.categories.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    CategoriesService.prototype.getCategories = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a category for example.
    //
    CategoriesService.prototype.reloadCategories = function () {
        return this.getCategories(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    CategoriesService.prototype.postCategory = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    CategoriesService.prototype.getCategory = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    CategoriesService.prototype.putCategory = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    CategoriesService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    CategoriesService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.name && filter.name.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "name=" + filter.name;
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
    CategoriesService.prototype.getAllCategories = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], CategoriesService);
    return CategoriesService;
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
//# sourceMappingURL=ms-blogs-ms-blogs-module.js.map