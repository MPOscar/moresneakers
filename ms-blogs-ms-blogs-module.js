(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-blogs-ms-blogs-module"],{

/***/ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js ***!
  \****************************************************************************/
/*! exports provided: AngularEditorService, AngularEditorComponent, AngularEditorToolbarComponent, AngularEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorService", function() { return AngularEditorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function() { return AngularEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function() { return AngularEditorToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function() { return AngularEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorService = /** @class */ (function () {
    function AngularEditorService(http, _document) {
        this.http = http;
        this._document = _document;
    }
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorService.prototype.executeCommand = /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    function (command) {
        /** @type {?} */
        var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];
        if (commands.includes(command)) {
            this._document.execCommand('formatBlock', false, command);
        }
        this._document.execCommand(command, false, null);
    };
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
    AngularEditorService.prototype.createLink = /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
    function (url) {
        if (!url.includes("http")) {
            this._document.execCommand('createlink', false, url);
        }
        else {
            /** @type {?} */
            var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
            this.insertHtml(newUrl);
        }
    };
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
    AngularEditorService.prototype.insertColor = /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
    function (color, where) {
        /** @type {?} */
        var restored = this.restoreSelection();
        if (restored) {
            if (where === 'textColor') {
                this._document.execCommand('foreColor', false, color);
            }
            else {
                this._document.execCommand('hiliteColor', false, color);
            }
        }
    };
    /**
     * Set font name
     * @param fontName string
     */
    /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
    AngularEditorService.prototype.setFontName = /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
    function (fontName) {
        this._document.execCommand("fontName", false, fontName);
    };
    /**
     * Set font size
     * @param fontSize string
     */
    /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
    AngularEditorService.prototype.setFontSize = /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
    function (fontSize) {
        this._document.execCommand("fontSize", false, fontSize);
    };
    /**
     * Create raw HTML
     * @param html HTML string
     */
    /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
    AngularEditorService.prototype.insertHtml = /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var isHTMLInserted = this._document.execCommand('insertHTML', false, html);
        if (!isHTMLInserted) {
            throw new Error('Unable to perform the operation');
        }
    };
    /**
     * save selection when the editor is focussed out
     */
    /**
     * save selection when the editor is focussed out
     * @return {?}
     */
    AngularEditorService.prototype.saveSelection = /**
     * save selection when the editor is focussed out
     * @return {?}
     */
    function () {
        if (window.getSelection) {
            /** @type {?} */
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.savedSelection = sel.getRangeAt(0);
                this.selectedText = sel.toString();
            }
        }
        else if (this._document.getSelection && this._document.createRange) {
            this.savedSelection = document.createRange();
        }
        else {
            this.savedSelection = null;
        }
    };
    /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     */
    /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     * @return {?}
     */
    AngularEditorService.prototype.restoreSelection = /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     * @return {?}
     */
    function () {
        if (this.savedSelection) {
            if (window.getSelection) {
                /** @type {?} */
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.savedSelection);
                return true;
            }
            else if (this._document.getSelection /*&& this.savedSelection.select*/) {
                // this.savedSelection.select();
                return true;
            }
        }
        else {
            return false;
        }
    };
    /** check any slection is made or not */
    /**
     * check any slection is made or not
     * @return {?}
     */
    AngularEditorService.prototype.checkSelection = /**
     * check any slection is made or not
     * @return {?}
     */
    function () {
        /** @type {?} */
        var slectedText = this.savedSelection.toString();
        if (slectedText.length === 0) {
            throw new Error('No Selection Made');
        }
        return true;
    };
    /**
     * Upload file to uploadUrl
     * @param file
     */
    /**
     * Upload file to uploadUrl
     * @param {?} file
     * @return {?}
     */
    AngularEditorService.prototype.uploadImage = /**
     * Upload file to uploadUrl
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var uploadData = new FormData();
        uploadData.append('file', file, file.name);
        return this.http.post(this.uploadUrl, uploadData, {
            reportProgress: true,
            observe: 'events',
        });
    };
    /**
     * Insert image with Url
     * @param imageUrl
     */
    /**
     * Insert image with Url
     * @param {?} imageUrl
     * @return {?}
     */
    AngularEditorService.prototype.insertImage = /**
     * Insert image with Url
     * @param {?} imageUrl
     * @return {?}
     */
    function (imageUrl) {
        this._document.execCommand('insertImage', false, imageUrl);
    };
    /**
     * @param {?} separator
     * @return {?}
     */
    AngularEditorService.prototype.setDefaultParagraphSeparator = /**
     * @param {?} separator
     * @return {?}
     */
    function (separator) {
        this._document.execCommand("defaultParagraphSeparator", false, separator);
    };
    /**
     * @param {?} customClass
     * @return {?}
     */
    AngularEditorService.prototype.createCustomClass = /**
     * @param {?} customClass
     * @return {?}
     */
    function (customClass) {
        /** @type {?} */
        var tagName = customClass.tag ? customClass.tag : 'span';
        /** @type {?} */
        var newTag = '<' + tagName + ' class="' + customClass.class + '">' + this.selectedText + '</' + tagName + '>';
        this.insertHtml(newTag);
    };
    AngularEditorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularEditorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ AngularEditorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularEditorService_Factory() { return new AngularEditorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: AngularEditorService, providedIn: "root" });
    return AngularEditorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var angularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
    ],
    uploadUrl: 'v1/image',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorToolbarComponent = /** @class */ (function () {
    function AngularEditorToolbarComponent(_renderer, editorService, _document) {
        this._renderer = _renderer;
        this.editorService = editorService;
        this._document = _document;
        this.id = '';
        this.htmlMode = false;
        this.showToolbar = true;
        this.block = 'default';
        this.fontId = 0;
        this.fontSize = '5';
        this.customClassId = -1;
        this.tagMap = {
            BLOCKQUOTE: "indent",
            A: "link"
        };
        this.select = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
        this.buttons = ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "justifyLeft", "justifyCenter",
            "justifyRight", "justifyFull", "indent", "outdent", "insertUnorderedList", "insertOrderedList", "link"];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerCommand = /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    function (command) {
        this.execute.emit(command);
    };
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerButtons = /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        this.buttons.forEach(function (e) {
            /** @type {?} */
            var result = _this._document.queryCommandState(e);
            /** @type {?} */
            var elementById = _this._document.getElementById(e + '-' + _this.id);
            if (result) {
                _this._renderer.addClass(elementById, "active");
            }
            else {
                _this._renderer.removeClass(elementById, "active");
            }
        });
    };
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerBlocks = /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        /** @type {?} */
        var found = false;
        this.select.forEach(function (y) {
            /** @type {?} */
            var node = nodes.find(function (x) { return x.nodeName === y; });
            if (node !== undefined && y === node.nodeName) {
                if (found === false) {
                    _this.block = node.nodeName.toLowerCase();
                    found = true;
                }
            }
            else if (found === false) {
                _this.block = 'default';
            }
        });
        found = false;
        if (this.fonts) {
            this.fonts.forEach(function (y, index) {
                /** @type {?} */
                var node = nodes.find(function (x) {
                    if (x instanceof HTMLFontElement) {
                        return x.face === y.name;
                    }
                });
                if (node !== undefined) {
                    if (found === false) {
                        _this.fontId = index;
                        found = true;
                    }
                }
                else if (found === false) {
                    _this.fontId = _this.defaultFontId;
                }
            });
        }
        found = false;
        if (this.customClasses) {
            this.customClasses.forEach(function (y, index) {
                /** @type {?} */
                var node = nodes.find(function (x) {
                    if (x instanceof Element) {
                        return x.className === y.class;
                    }
                });
                if (node !== undefined) {
                    if (found === false) {
                        _this.customClassId = index;
                        found = true;
                    }
                }
                else if (found === false) {
                    _this.customClassId = -1;
                }
            });
        }
        Object.keys(this.tagMap).map(function (e) {
            /** @type {?} */
            var elementById = _this._document.getElementById(_this.tagMap[e] + '-' + _this.id);
            /** @type {?} */
            var node = nodes.find(function (x) { return x.nodeName === e; });
            if (node !== undefined && e === node.nodeName) {
                _this._renderer.addClass(elementById, "active");
            }
            else {
                _this._renderer.removeClass(elementById, "active");
            }
        });
    };
    /**
     * insert URL link
     */
    /**
     * insert URL link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertUrl = /**
     * insert URL link
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = prompt("Insert URL link", 'http:\/\/');
        if (url && url !== '' && url !== 'http://') {
            this.editorService.createLink(url);
        }
    };
    /** insert color */
    /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertColor = /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    function (color, where) {
        this.editorService.insertColor(color, where);
        this.execute.emit("");
    };
    /**
     * set font Name/family
     * @param fontId number
     */
    /**
     * set font Name/family
     * @param {?} fontId number
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontName = /**
     * set font Name/family
     * @param {?} fontId number
     * @return {?}
     */
    function (fontId) {
        this.editorService.setFontName(this.fonts[fontId].name);
        this.execute.emit("");
    };
    /**
     * set font Size
     * @param fontSize string
     *  */
    /**
     * set font Size
     * @param {?} fontSize string
     *
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontSize = /**
     * set font Size
     * @param {?} fontSize string
     *
     * @return {?}
     */
    function (fontSize) {
        this.editorService.setFontSize(fontSize);
        this.execute.emit("");
    };
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setEditorMode = /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    function (m) {
        /** @type {?} */
        var toggleEditorModeButton = this._document.getElementById("toggleEditorMode" + '-' + this.id);
        if (m) {
            this._renderer.addClass(toggleEditorModeButton, "active");
        }
        else {
            this._renderer.removeClass(toggleEditorModeButton, "active");
        }
        this.htmlMode = m;
    };
    /**
     * Upload image when file is selected
     */
    /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.onFileChanged = /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var file = event.target.files[0];
        if (file.type.includes("image/")) {
            this.editorService.uploadImage(file).subscribe(function (e) {
                if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    _this.editorService.insertImage(e.body.imageUrl);
                    _this.fileReset();
                }
            });
        }
    };
    /**
     * Reset Input
     */
    /**
     * Reset Input
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.fileReset = /**
     * Reset Input
     * @return {?}
     */
    function () {
        this.myInputFile.nativeElement.value = "";
    };
    /**
     * Set custom class
     */
    /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setCustomClass = /**
     * Set custom class
     * @param {?} classId
     * @return {?}
     */
    function (classId) {
        this.editorService.createCustomClass(this.customClasses[classId]);
    };
    AngularEditorToolbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-editor-toolbar',
                    template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-italic'></i></button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'heading-'+id\" class=\"block-label\" tabindex=\"-1\"></label>\n    <select title=\"Formatting\" [id]=\"'heading-'+id\" class=\"select-heading\" [(ngModel)]=\"block\"\n            (change)=\"triggerCommand(block)\"\n            [disabled]=\"htmlMode\"  tabindex=\"-1\">\n      <optgroup label=\"Formatting\"></optgroup>\n      <option class=\"h1\" value=\"h1\">Heading 1</option>\n      <option class=\"h2\" value=\"h2\">Heading 2</option>\n      <option class=\"h3\" value=\"h3\">Heading 3</option>\n      <option class=\"h4\" value=\"h4\">Heading 4</option>\n      <option class=\"h5\" value=\"h5\">Heading 5</option>\n      <option class=\"h6\" value=\"h6\">Heading 6</option>\n      <option class=\"p\" value=\"p\">Paragraph</option>\n      <option class=\"pre\" value=\"pre\">Predefined</option>\n      <option class=\"div\" value=\"div\">Standard</option>\n      <option class=\"default\" value=\"default\">Default</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'fontSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Font Name\" [id]=\"'fontSelector-'+id\" class=\"select-font\" [(ngModel)]=\"fontId\"\n            (change)=\"setFontName(fontId)\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <optgroup label=\"Font Name\"></optgroup>\n      <option *ngFor=\"let item of fonts; let i = index\" [class]=\"item.class\" [value]=\"i\">{{item.name}}</option>\n     <!-- <option class=\"arial\" value=\"Arial\">Arial</option>\n      <option class=\"calibri\" value=\"Calibri\">Calibri</option>\n      <option class=\"comic-sans-ms\" value=\"Comic Sans MS\">Comic Sans MS</option>\n      <option class=\"times-new-roman\" value=\"Times New Roman\">Times New Roman</option>-->\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'fontSizeSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Font Size\" [id]=\"'fontSizeSelector-'+id\" class=\"select-font-size\" [(ngModel)]=\"fontSize\"\n            (change)=\"setFontSize(fontSize)\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <optgroup label=\"Font Sizing\"></optgroup>\n      <option class=\"size1\" value=\"1\">1</option>\n      <option class=\"size2\" value=\"2\">2</option>\n      <option class=\"size3\" value=\"3\">3</option>\n      <option class=\"size4\" value=\"4\">4</option>\n      <option class=\"size5\" value=\"5\">5</option>\n      <option class=\"size6\" value=\"6\">6</option>\n      <option class=\"size7\" value=\"7\">7</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"fgInput.click()\" title=\"Text Color\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><span class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span></button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"bgInput.click()\" title=\"Background Color\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><span class=\"color-label background\"><i class=\"fa fa-font\"></i></span></button>\n  </div>\n  <div *ngIf=\"customClasses\" class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'customClassSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Custom Style\" [id]=\"'customClassSelector-'+id\" class=\"select-custom-style\" [(ngModel)]=\"customClassId\"\n            (change)=\"setCustomClass(customClassId)\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <optgroup label=\"Custom Class\"></optgroup>\n      <option class=\"\" value=-1>Clear Class</option>\n      <option *ngFor=\"let item of customClasses; let i = index\" [class]=\"item.class\" [value]=\"i\">{{item.name}}</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button type=\"button\" class=\"angular-editor-button\" (click)=\"fileInput.click()\" title=\"Insert Image\"\n            [disabled]=\"htmlMode\" tabindex=\"-1\"><i class=\"fa fa-image\"></i></button>\n    <button type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" tabindex=\"-1\"><i class='fa fa-remove'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" tabindex=\"-1\"><i class='fa fa-code'></i></button>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}#editor{min-height:150px;overflow:auto;margin-top:5px;resize:vertical;outline:0}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:inline-block;border-radius:5px;background-color:#fff;margin-right:5px;vertical-align:middle;border:1px solid #ddd;margin-bottom:3px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:transparent;padding:.4rem;min-width:2rem;float:left;border:0 solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child{border-radius:5px 0 0 5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:last-child{border-radius:0 5px 5px 0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child:last-child{border-radius:5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:24px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}"]
                },] },
    ];
    /** @nocollapse */
    AngularEditorToolbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: AngularEditorService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    AngularEditorToolbarComponent.propDecorators = {
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        myInputFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput',] }]
    };
    return AngularEditorToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorComponent = /** @class */ (function () {
    function AngularEditorComponent(_renderer, editorService, _document) {
        this._renderer = _renderer;
        this.editorService = editorService;
        this._document = _document;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `blur` event when focused out from the textarea
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `focus` event when focused in to the textarea
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.editorToolbar.id = this.id;
        this.editorToolbar.fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
        this.editorToolbar.customClasses = this.config.customClasses;
        this.editorService.uploadUrl = this.config.uploadUrl;
        if (this.config.showToolbar !== undefined) {
            this.editorToolbar.showToolbar = this.config.showToolbar;
        }
        if (this.config.defaultParagraphSeparator) {
            this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
        }
    };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.defaultFontName) {
            this.editorToolbar.defaultFontId = this.config.defaultFontName ? this.editorToolbar.fonts.findIndex(function (x) {
                return x.name === _this.config.defaultFontName;
            }) : 0;
            this.editorToolbar.fontId = this.editorToolbar.defaultFontId;
            this.onEditorFocus();
            this.editorService.setFontName(this.config.defaultFontName);
        }
        else {
            this.editorToolbar.defaultFontId = 0;
            this.editorToolbar.fontId = 0;
        }
        if (this.config.defaultFontSize) {
            this.editorToolbar.fontSize = this.config.defaultFontSize;
            this.onEditorFocus();
            this.editorService.setFontSize(this.config.defaultFontSize);
        }
    };
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorComponent.prototype.executeCommand = /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    function (command) {
        if (command === 'toggleEditorMode') {
            this.toggleEditorMode(this.modeVisual);
        }
        else if (command !== '') {
            this.editorService.executeCommand(command);
            this.exec();
        }
        this.onEditorFocus();
    };
    /**
     * focus event
     */
    /**
     * focus event
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaFocus = /**
     * focus event
     * @return {?}
     */
    function () {
        this.focus.emit('focus');
    };
    /**
     * blur event
     */
    /**
     * blur event
     * @param {?} event
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaBlur = /**
     * blur event
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /**
         * save selection if focussed out
         */
        this.editorService.saveSelection();
        if (typeof this.onTouched === 'function') {
            this.onTouched();
        }
        if (event.relatedTarget != null && ((/** @type {?} */ (event.relatedTarget))).parentElement.className !== 'angular-editor-toolbar-set') {
            this.blur.emit('blur');
        }
    };
    /**
     *  focus the text area when the editor is focussed
     */
    /**
     *  focus the text area when the editor is focussed
     * @return {?}
     */
    AngularEditorComponent.prototype.onEditorFocus = /**
     *  focus the text area when the editor is focussed
     * @return {?}
     */
    function () {
        this.textArea.nativeElement.focus();
    };
    /**
     * Executed from the contenteditable section while the input property changes
     * @param html html string from contenteditable
     */
    /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} html html string from contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.onContentChange = /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} html html string from contenteditable
     * @return {?}
     */
    function (html) {
        if (typeof this.onChange === 'function') {
            this.onChange(html);
            if ((!html || html === '<br>' || html === '') !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
            }
        }
    };
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnChange = /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnTouched = /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.writeValue = /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
    function (value) {
        if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
            this.togglePlaceholder(this.showPlaceholder);
        }
        if (value === null || value === undefined || value === '' || value === '<br>') {
            value = null;
        }
        this.refreshView(value);
    };
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.refreshView = /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var normalizedValue = value === null ? '' : value;
        this._renderer.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
        return;
    };
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.togglePlaceholder = /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
    function (value) {
        if (!value) {
            this._renderer.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = true;
        }
        else {
            this._renderer.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = false;
        }
    };
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled
     */
    /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled
     * @return {?}
     */
    AngularEditorComponent.prototype.setDisabledState = /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var div = this.textArea.nativeElement;
        /** @type {?} */
        var action = isDisabled ? 'addClass' : 'removeClass';
        this._renderer[action](div, 'disabled');
    };
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.toggleEditorMode = /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
    function (bToSource) {
        /** @type {?} */
        var oContent;
        /** @type {?} */
        var editableElement = this.textArea.nativeElement;
        if (bToSource) {
            oContent = this._document.createTextNode(editableElement.innerHTML);
            editableElement.innerHTML = '';
            /** @type {?} */
            var oPre = this._document.createElement('pre');
            oPre.setAttribute("style", "margin: 0; outline: none;");
            /** @type {?} */
            var oCode = this._document.createElement('code');
            editableElement.contentEditable = false;
            oCode.id = "sourceText";
            oCode.setAttribute("style", "white-space: pre-wrap; word-break: keep-all; margin: 0; outline: none; background-color: #fff5b9;");
            oCode.contentEditable = 'true';
            oCode.appendChild(oContent);
            oPre.appendChild(oCode);
            editableElement.appendChild(oPre);
            this._document.execCommand("defaultParagraphSeparator", false, "div");
            this.modeVisual = false;
            this.viewMode.emit(false);
            oCode.focus();
        }
        else {
            if (this._document.all) {
                editableElement.innerHTML = editableElement.innerText;
            }
            else {
                oContent = this._document.createRange();
                oContent.selectNodeContents(editableElement.firstChild);
                editableElement.innerHTML = oContent.toString();
            }
            editableElement.contentEditable = true;
            this.modeVisual = true;
            this.viewMode.emit(true);
            this.onContentChange(editableElement.innerHTML);
            editableElement.focus();
        }
        this.editorToolbar.setEditorMode(!this.modeVisual);
    };
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.exec = /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
    function () {
        this.editorToolbar.triggerButtons();
        /** @type {?} */
        var userSelection;
        if (window.getSelection) {
            userSelection = window.getSelection();
        }
        /** @type {?} */
        var a = userSelection.focusNode;
        /** @type {?} */
        var els = [];
        while (a && a.id !== 'editor') {
            els.unshift(a);
            a = a.parentNode;
        }
        this.editorToolbar.triggerBlocks(els);
    };
    AngularEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-editor',
                    template: "<div (focus)=\"onEditorFocus()\" class=\"angular-editor\" id=\"angularEditor\" [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\">\n  <angular-editor-toolbar #editorToolbar (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n\n  <div class=\"angular-editor-wrapper\" #editorWrapper>\n    <div #editor id=\"editor\" class=\"angular-editor-textarea\" [attr.contenteditable]=\"config.editable\"\n         [attr.translate]=\"config.translate\"\n         [attr.spellcheck]=\"config.spellcheck\" [style.height]=\"config.height\" [style.minHeight]=\"config.minHeight\" [style.maxHeight]=\"config.maxHeight\"\n         (input)=\"onContentChange($event.target.innerHTML)\" (focus)=\"onTextAreaFocus()\" (blur)=\"onTextAreaBlur($event)\" (click)=\"exec()\" (keyup)=\"exec()\">\n    </div>\n    <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}#editor{min-height:150px;overflow:auto;margin-top:5px;resize:vertical;outline:0}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:inline-block;border-radius:5px;background-color:#fff;margin-right:5px;vertical-align:middle;border:1px solid #ddd;margin-bottom:3px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:transparent;padding:.4rem;min-width:2rem;float:left;border:0 solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child{border-radius:5px 0 0 5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:last-child{border-radius:0 5px 5px 0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child:last-child{border-radius:5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:24px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;z-index:2;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea.focus,.angular-editor .angular-editor-wrapper .angular-editor-textarea:focus{outline:0}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;z-index:1;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AngularEditorComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: AngularEditorService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    AngularEditorComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        textArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editor',] }],
        editorWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorWrapper',] }],
        editorToolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorToolbar',] }],
        viewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AngularEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorModule = /** @class */ (function () {
    function AngularEditorModule() {
    }
    AngularEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    declarations: [AngularEditorComponent, AngularEditorToolbarComponent],
                    exports: [AngularEditorComponent, AngularEditorToolbarComponent]
                },] },
    ];
    return AngularEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29sa292LWFuZ3VsYXItZWRpdG9yLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9jb25maWcudHMiLCJuZzovL0Brb2xrb3YvYW5ndWxhci1lZGl0b3IvbGliL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9hbmd1bGFyLWVkaXRvci5jb21wb25lbnQudHMiLCJuZzovL0Brb2xrb3YvYW5ndWxhci1lZGl0b3IvbGliL2FuZ3VsYXItZWRpdG9yLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEV2ZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q3VzdG9tQ2xhc3N9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvclNlcnZpY2Uge1xyXG5cclxuICBzYXZlZFNlbGVjdGlvbjogUmFuZ2UgfCBudWxsO1xyXG4gIHNlbGVjdGVkVGV4dDogc3RyaW5nO1xyXG4gIHVwbG9hZFVybDogc3RyaW5nO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeGVjdXRlZCBjb21tYW5kIGZyb20gZWRpdG9yIGhlYWRlciBidXR0b25zIGV4Y2x1ZGUgdG9nZ2xlRWRpdG9yTW9kZVxyXG4gICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRyaWdnZXJDb21tYW5kXHJcbiAgICovXHJcbiAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAncCcsICdwcmUnXTtcclxuICAgIGlmIChjb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kKSkge1xyXG4gICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnZm9ybWF0QmxvY2snLCBmYWxzZSwgY29tbWFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoY29tbWFuZCwgZmFsc2UsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIFVSTCBsaW5rXHJcbiAgICogQHBhcmFtIHVybCBzdHJpbmcgZnJvbSBVSSBwcm9tcHRcclxuICAgKi9cclxuICBjcmVhdGVMaW5rKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NyZWF0ZWxpbmsnLCBmYWxzZSwgdXJsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5ld1VybCA9ICc8YSBocmVmPVwiJyArIHVybCArICdcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgdGhpcy5zZWxlY3RlZFRleHQgKyAnPC9hPic7XHJcbiAgICAgIHRoaXMuaW5zZXJ0SHRtbChuZXdVcmwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5zZXJ0IGNvbG9yIGVpdGhlciBmb250IG9yIGJhY2tncm91bmRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb2xvciBjb2xvciB0byBiZSBpbnNlcnRlZFxyXG4gICAqIEBwYXJhbSB3aGVyZSB3aGVyZSB0aGUgY29sb3IgaGFzIHRvIGJlIGluc2VydGVkIGVpdGhlciB0ZXh0L2JhY2tncm91bmRcclxuICAgKi9cclxuICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN0b3JlZCA9IHRoaXMucmVzdG9yZVNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHJlc3RvcmVkKSB7XHJcbiAgICAgIGlmICh3aGVyZSA9PT0gJ3RleHRDb2xvcicpIHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnZm9yZUNvbG9yJywgZmFsc2UsIGNvbG9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnaGlsaXRlQ29sb3InLCBmYWxzZSwgY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgZm9udCBuYW1lXHJcbiAgICogQHBhcmFtIGZvbnROYW1lIHN0cmluZ1xyXG4gICAqL1xyXG4gIHNldEZvbnROYW1lKGZvbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKFwiZm9udE5hbWVcIiwgZmFsc2UsIGZvbnROYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBmb250IHNpemVcclxuICAgKiBAcGFyYW0gZm9udFNpemUgc3RyaW5nXHJcbiAgICovXHJcbiAgc2V0Rm9udFNpemUoZm9udFNpemU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb250U2l6ZVwiLCBmYWxzZSwgZm9udFNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHJhdyBIVE1MXHJcbiAgICogQHBhcmFtIGh0bWwgSFRNTCBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGluc2VydEh0bWwoaHRtbDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgaXNIVE1MSW5zZXJ0ZWQgPSB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCBodG1sKTtcclxuXHJcbiAgICBpZiAoIWlzSFRNTEluc2VydGVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBlcmZvcm0gdGhlIG9wZXJhdGlvbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2F2ZSBzZWxlY3Rpb24gd2hlbiB0aGUgZWRpdG9yIGlzIGZvY3Vzc2VkIG91dFxyXG4gICAqL1xyXG4gIHNhdmVTZWxlY3Rpb24oKTogYW55IHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5zYXZlZFNlbGVjdGlvbiA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gc2VsLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5fZG9jdW1lbnQuZ2V0U2VsZWN0aW9uICYmIHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2F2ZWRTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zYXZlZFNlbGVjdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXN0b3JlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgaW5cclxuICAgKlxyXG4gICAqIHNhdmVkIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgb3V0XHJcbiAgICovXHJcbiAgcmVzdG9yZVNlbGVjdGlvbigpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNhdmVkU2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UodGhpcy5zYXZlZFNlbGVjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZG9jdW1lbnQuZ2V0U2VsZWN0aW9uIC8qJiYgdGhpcy5zYXZlZFNlbGVjdGlvbi5zZWxlY3QqLykge1xyXG4gICAgICAgIC8vIHRoaXMuc2F2ZWRTZWxlY3Rpb24uc2VsZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBjaGVjayBhbnkgc2xlY3Rpb24gaXMgbWFkZSBvciBub3QgKi9cclxuICBwcml2YXRlIGNoZWNrU2VsZWN0aW9uKCk6IGFueSB7XHJcblxyXG4gICAgY29uc3Qgc2xlY3RlZFRleHQgPSB0aGlzLnNhdmVkU2VsZWN0aW9uLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKHNsZWN0ZWRUZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFNlbGVjdGlvbiBNYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWQgZmlsZSB0byB1cGxvYWRVcmxcclxuICAgKiBAcGFyYW0gZmlsZVxyXG4gICAqL1xyXG4gIHVwbG9hZEltYWdlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVcGxvYWRSZXNwb25zZT4+IHtcclxuXHJcbiAgICBjb25zdCB1cGxvYWREYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIHVwbG9hZERhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXBsb2FkUmVzcG9uc2U+KHRoaXMudXBsb2FkVXJsLCB1cGxvYWREYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IGltYWdlIHdpdGggVXJsXHJcbiAgICogQHBhcmFtIGltYWdlVXJsXHJcbiAgICovXHJcbiAgaW5zZXJ0SW1hZ2UoaW1hZ2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmFsc2UsIGltYWdlVXJsKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3Ioc2VwYXJhdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvclwiLCBmYWxzZSwgc2VwYXJhdG9yKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBDdXN0b21DbGFzcykge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGN1c3RvbUNsYXNzLnRhZyA/IGN1c3RvbUNsYXNzLnRhZyA6ICdzcGFuJztcclxuICAgIGNvbnN0IG5ld1RhZyA9ICc8JyArIHRhZ05hbWUgKyAnIGNsYXNzPVwiJyArIGN1c3RvbUNsYXNzLmNsYXNzICsgJ1wiPicgKyB0aGlzLnNlbGVjdGVkVGV4dCArICc8LycgKyB0YWdOYW1lICsgJz4nO1xyXG4gICAgdGhpcy5pbnNlcnRIdG1sKG5ld1RhZyk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQ2xhc3Mge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjbGFzczogc3RyaW5nO1xyXG4gIHRhZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb250IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY2xhc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmd1bGFyRWRpdG9yQ29uZmlnIHtcclxuICBlZGl0YWJsZT86IGJvb2xlYW47XHJcbiAgc3BlbGxjaGVjaz86IGJvb2xlYW47XHJcbiAgaGVpZ2h0PzogJ2F1dG8nIHwgc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86ICcwJyB8IHN0cmluZztcclxuICBtYXhIZWlnaHQ/OiAnYXV0bycgfCBzdHJpbmc7XHJcbiAgd2lkdGg/OiAnYXV0bycgfCBzdHJpbmc7XHJcbiAgbWluV2lkdGg/OiAnMCcgfCBzdHJpbmc7XHJcbiAgdHJhbnNsYXRlPzogJ3llcycgfCAnbm93JyB8IHN0cmluZztcclxuICBlbmFibGVUb29sYmFyPzogYm9vbGVhbjtcclxuICBzaG93VG9vbGJhcj86IGJvb2xlYW47XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcj86IHN0cmluZztcclxuICBkZWZhdWx0Rm9udE5hbWU/OiBzdHJpbmc7XHJcbiAgZGVmYXVsdEZvbnRTaXplPzogJzEnIHwgJzInIHwgJzMnIHwgJzQnIHwgJzUnIHwgJzYnIHwgJzcnIHxzdHJpbmc7XHJcbiAgdXBsb2FkVXJsPzogc3RyaW5nO1xyXG4gIGZvbnRzPzogRm9udFtdO1xyXG4gIGN1c3RvbUNsYXNzZXM/OiBDdXN0b21DbGFzc1tdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYW5ndWxhckVkaXRvckNvbmZpZzogQW5ndWxhckVkaXRvckNvbmZpZyA9IHtcclxuICBlZGl0YWJsZTogdHJ1ZSxcclxuICBzcGVsbGNoZWNrOiB0cnVlLFxyXG4gIGhlaWdodDogJ2F1dG8nLFxyXG4gIG1pbkhlaWdodDogJzAnLFxyXG4gIG1heEhlaWdodDogJ2F1dG8nLFxyXG4gIHdpZHRoOiAnYXV0bycsXHJcbiAgbWluV2lkdGg6ICcwJyxcclxuICB0cmFuc2xhdGU6ICd5ZXMnLFxyXG4gIGVuYWJsZVRvb2xiYXI6IHRydWUsXHJcbiAgc2hvd1Rvb2xiYXI6IHRydWUsXHJcbiAgcGxhY2Vob2xkZXI6ICdFbnRlciB0ZXh0IGhlcmUuLi4nLFxyXG4gIGRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3I6ICcnLFxyXG4gIGRlZmF1bHRGb250TmFtZTogJycsXHJcbiAgZGVmYXVsdEZvbnRTaXplOiAnJyxcclxuICBmb250czogW1xyXG4gICAge2NsYXNzOiAnYXJpYWwnLCBuYW1lOiAnQXJpYWwnfSxcclxuICAgIHtjbGFzczogJ3RpbWVzLW5ldy1yb21hbicsIG5hbWU6ICdUaW1lcyBOZXcgUm9tYW4nfSxcclxuICBdLFxyXG4gIHVwbG9hZFVybDogJ3YxL2ltYWdlJyxcclxufTtcclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FuZ3VsYXJFZGl0b3JTZXJ2aWNlfSBmcm9tIFwiLi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0N1c3RvbUNsYXNzLCBGb250fSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYW5ndWxhci1lZGl0b3ItdG9vbGJhcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhclwiICpuZ0lmPVwic2hvd1Rvb2xiYXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXRcIj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVW5kb1wiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCd1bmRvJylcIiB0YWJpbmRleD1cIi0xXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLXVuZG8nPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVkb1wiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdyZWRvJylcIiB0YWJpbmRleD1cIi0xXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLXJlcGVhdCc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2JvbGQtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkJvbGRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnYm9sZCcpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPSdmYSBmYS1ib2xkJz48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInaXRhbGljLScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJJdGFsaWNcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnaXRhbGljJylcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9J2ZhIGZhLWl0YWxpYyc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3VuZGVybGluZS0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVW5kZXJsaW5lXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ3VuZGVybGluZScpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPSdmYSBmYS11bmRlcmxpbmUnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidzdHJpa2VUaHJvdWdoLScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJTdHJpa2V0aHJvdWdoXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ3N0cmlrZVRocm91Z2gnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz0nZmEgZmEtc3RyaWtldGhyb3VnaCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3N1YnNjcmlwdC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3Vic2NyaXB0XCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ3N1YnNjcmlwdCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPSdmYSBmYS1zdWJzY3JpcHQnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidzdXBlcnNjcmlwdC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3VwZXJzY3JpcHRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnc3VwZXJzY3JpcHQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz0nZmEgZmEtc3VwZXJzY3JpcHQnPjwvaT48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXRcIj5cclxuICAgIDxidXR0b24gW2lkXT1cIidqdXN0aWZ5TGVmdC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSnVzdGlmeSBMZWZ0XCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ2p1c3RpZnlMZWZ0JylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLWFsaWduLWxlZnQnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidqdXN0aWZ5Q2VudGVyLScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJKdXN0aWZ5IENlbnRlclwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9J2ZhIGZhLWFsaWduLWNlbnRlcic+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2p1c3RpZnlSaWdodC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSnVzdGlmeSBSaWdodFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgPGkgY2xhc3M9J2ZhIGZhLWFsaWduLXJpZ2h0Jz48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInanVzdGlmeUZ1bGwtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkp1c3RpZnkgRnVsbFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdqdXN0aWZ5RnVsbCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpXHJcbiAgICAgIGNsYXNzPSdmYSBmYS1hbGlnbi1qdXN0aWZ5Jz48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInaW5kZW50LScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJJbmRlbnRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnaW5kZW50JylcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLWluZGVudCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ291dGRlbnQtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIk91dGRlbnRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnb3V0ZGVudCcpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpXHJcbiAgICAgIGNsYXNzPSdmYSBmYS1vdXRkZW50Jz48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInaW5zZXJ0VW5vcmRlcmVkTGlzdC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVW5vcmRlcmVkIExpc3RcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnaW5zZXJ0VW5vcmRlcmVkTGlzdCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPSdmYSBmYS1saXN0LXVsJz48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInaW5zZXJ0T3JkZXJlZExpc3QtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIk9yZGVyZWQgTGlzdFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdpbnNlcnRPcmRlcmVkTGlzdCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPSdmYSBmYS1saXN0LW9sJz48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8bGFiZWwgW2Zvcl09XCInaGVhZGluZy0nK2lkXCIgY2xhc3M9XCJibG9jay1sYWJlbFwiIHRhYmluZGV4PVwiLTFcIj48L2xhYmVsPlxyXG4gICAgPHNlbGVjdCB0aXRsZT1cIkZvcm1hdHRpbmdcIiBbaWRdPVwiJ2hlYWRpbmctJytpZFwiIGNsYXNzPVwic2VsZWN0LWhlYWRpbmdcIiBbKG5nTW9kZWwpXT1cImJsb2NrXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJ0cmlnZ2VyQ29tbWFuZChibG9jaylcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiAgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICA8b3B0Z3JvdXAgbGFiZWw9XCJGb3JtYXR0aW5nXCI+PC9vcHRncm91cD5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImgxXCIgdmFsdWU9XCJoMVwiPkhlYWRpbmcgMTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiaDJcIiB2YWx1ZT1cImgyXCI+SGVhZGluZyAyPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJoM1wiIHZhbHVlPVwiaDNcIj5IZWFkaW5nIDM8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImg0XCIgdmFsdWU9XCJoNFwiPkhlYWRpbmcgNDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiaDVcIiB2YWx1ZT1cImg1XCI+SGVhZGluZyA1PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJoNlwiIHZhbHVlPVwiaDZcIj5IZWFkaW5nIDY8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInBcIiB2YWx1ZT1cInBcIj5QYXJhZ3JhcGg8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInByZVwiIHZhbHVlPVwicHJlXCI+UHJlZGVmaW5lZDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiZGl2XCIgdmFsdWU9XCJkaXZcIj5TdGFuZGFyZDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiZGVmYXVsdFwiIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwiJ2ZvbnRTZWxlY3Rvci0nK2lkXCIgY2xhc3M9XCJibG9jay1sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICA8c2VsZWN0IHRpdGxlPVwiRm9udCBOYW1lXCIgW2lkXT1cIidmb250U2VsZWN0b3ItJytpZFwiIGNsYXNzPVwic2VsZWN0LWZvbnRcIiBbKG5nTW9kZWwpXT1cImZvbnRJZFwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0Rm9udE5hbWUoZm9udElkKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgPG9wdGdyb3VwIGxhYmVsPVwiRm9udCBOYW1lXCI+PC9vcHRncm91cD5cclxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb250czsgbGV0IGkgPSBpbmRleFwiIFtjbGFzc109XCJpdGVtLmNsYXNzXCIgW3ZhbHVlXT1cImlcIj57e2l0ZW0ubmFtZX19PC9vcHRpb24+XHJcbiAgICAgPCEtLSA8b3B0aW9uIGNsYXNzPVwiYXJpYWxcIiB2YWx1ZT1cIkFyaWFsXCI+QXJpYWw8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImNhbGlicmlcIiB2YWx1ZT1cIkNhbGlicmlcIj5DYWxpYnJpPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJjb21pYy1zYW5zLW1zXCIgdmFsdWU9XCJDb21pYyBTYW5zIE1TXCI+Q29taWMgU2FucyBNUzwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwidGltZXMtbmV3LXJvbWFuXCIgdmFsdWU9XCJUaW1lcyBOZXcgUm9tYW5cIj5UaW1lcyBOZXcgUm9tYW48L29wdGlvbj4tLT5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwiJ2ZvbnRTaXplU2VsZWN0b3ItJytpZFwiIGNsYXNzPVwiYmxvY2stbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgPHNlbGVjdCB0aXRsZT1cIkZvbnQgU2l6ZVwiIFtpZF09XCInZm9udFNpemVTZWxlY3Rvci0nK2lkXCIgY2xhc3M9XCJzZWxlY3QtZm9udC1zaXplXCIgWyhuZ01vZGVsKV09XCJmb250U2l6ZVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0Rm9udFNpemUoZm9udFNpemUpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICA8b3B0Z3JvdXAgbGFiZWw9XCJGb250IFNpemluZ1wiPjwvb3B0Z3JvdXA+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplMVwiIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInNpemUyXCIgdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwic2l6ZTNcIiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplNFwiIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInNpemU1XCIgdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwic2l6ZTZcIiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplN1wiIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXHJcbiAgICAgIHR5cGU9XCJjb2xvclwiIChjaGFuZ2UpPVwiaW5zZXJ0Q29sb3IoZmdJbnB1dC52YWx1ZSwgJ3RleHRDb2xvcicpXCJcclxuICAgICAgI2ZnSW5wdXQ+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInZm9yZWdyb3VuZENvbG9yUGlja2VyLScraWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIiAoY2xpY2spPVwiZmdJbnB1dC5jbGljaygpXCIgdGl0bGU9XCJUZXh0IENvbG9yXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxzcGFuIGNsYXNzPVwiY29sb3ItbGFiZWwgZm9yZWdyb3VuZFwiPjxpIGNsYXNzPVwiZmEgZmEtZm9udFwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgICA8aW5wdXRcclxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcclxuICAgICAgdHlwZT1cImNvbG9yXCIgKGNoYW5nZSk9XCJpbnNlcnRDb2xvcihiZ0lucHV0LnZhbHVlLCAnYmFja2dyb3VuZENvbG9yJylcIlxyXG4gICAgICAjYmdJbnB1dD5cclxuICAgIDxidXR0b24gW2lkXT1cIidiYWNrZ3JvdW5kQ29sb3JQaWNrZXItJytpZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJiZ0lucHV0LmNsaWNrKClcIiB0aXRsZT1cIkJhY2tncm91bmQgQ29sb3JcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PHNwYW4gY2xhc3M9XCJjb2xvci1sYWJlbCBiYWNrZ3JvdW5kXCI+PGkgY2xhc3M9XCJmYSBmYS1mb250XCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiY3VzdG9tQ2xhc3Nlc1wiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXRcIj5cclxuICAgIDxsYWJlbCBbZm9yXT1cIidjdXN0b21DbGFzc1NlbGVjdG9yLScraWRcIiBjbGFzcz1cImJsb2NrLWxhYmVsXCI+PC9sYWJlbD5cclxuICAgIDxzZWxlY3QgdGl0bGU9XCJDdXN0b20gU3R5bGVcIiBbaWRdPVwiJ2N1c3RvbUNsYXNzU2VsZWN0b3ItJytpZFwiIGNsYXNzPVwic2VsZWN0LWN1c3RvbS1zdHlsZVwiIFsobmdNb2RlbCldPVwiY3VzdG9tQ2xhc3NJZFwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0Q3VzdG9tQ2xhc3MoY3VzdG9tQ2xhc3NJZClcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgIDxvcHRncm91cCBsYWJlbD1cIkN1c3RvbSBDbGFzc1wiPjwvb3B0Z3JvdXA+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJcIiB2YWx1ZT0tMT5DbGVhciBDbGFzczwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGN1c3RvbUNsYXNzZXM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3NdPVwiaXRlbS5jbGFzc1wiIFt2YWx1ZV09XCJpXCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInbGluay0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cImluc2VydFVybCgpXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbnNlcnQgTGlua1wiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saW5rXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgndW5saW5rJylcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlVubGlua1wiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGFpbi1icm9rZW5cIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uRmlsZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICNmaWxlSW5wdXQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiIHRpdGxlPVwiSW5zZXJ0IEltYWdlXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZmEgZmEtaW1hZ2VcIj48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkhvcml6b250YWwgTGluZVwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdpbnNlcnRIb3Jpem9udGFsUnVsZScpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsZWFyIEZvcm1hdHRpbmdcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgncmVtb3ZlRm9ybWF0JylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9J2ZhIGZhLXJlbW92ZSc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3RvZ2dsZUVkaXRvck1vZGUtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkhUTUwgQ29kZVwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCd0b2dnbGVFZGl0b3JNb2RlJylcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9J2ZhIGZhLWNvZGUnPjwvaT48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYEBjaGFyc2V0IFwiVVRGLThcIjsvKiFcbiAqICBGb250IEF3ZXNvbWUgNC43LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxuICogIExpY2Vuc2UgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vbGljZW5zZSAoRm9udDogU0lMIE9GTCAxLjEsIENTUzogTUlUIExpY2Vuc2UpXG4gKi9AZm9udC1mYWNle2ZvbnQtZmFtaWx5OkZvbnRBd2Vzb21lO3NyYzp1cmwoaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/dj00LjcuMCk7c3JjOnVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXgmdj00LjcuMCkgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksdXJsKGh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj00LjcuMCkgZm9ybWF0KFwid29mZjJcIiksdXJsKGh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PTQuNy4wKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSx1cmwoaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMCNmb250YXdlc29tZXJlZ3VsYXIpIGZvcm1hdChcInN2Z1wiKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9LmZhe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQ6MTRweC8xIEZvbnRBd2Vzb21lO2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtcmVuZGVyaW5nOmF1dG87LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LmZhLWxne2ZvbnQtc2l6ZToxLjMzMzMzZW07bGluZS1oZWlnaHQ6Ljc1ZW07dmVydGljYWwtYWxpZ246LTE1JX0uZmEtMnh7Zm9udC1zaXplOjJlbX0uZmEtM3h7Zm9udC1zaXplOjNlbX0uZmEtNHh7Zm9udC1zaXplOjRlbX0uZmEtNXh7Zm9udC1zaXplOjVlbX0uZmEtZnd7d2lkdGg6MS4yODU3MWVtO3RleHQtYWxpZ246Y2VudGVyfS5mYS11bHtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tbGVmdDoyLjE0Mjg2ZW07bGlzdC1zdHlsZS10eXBlOm5vbmV9LmZhLXVsPmxpe3Bvc2l0aW9uOnJlbGF0aXZlfS5mYS1saXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0yLjE0Mjg2ZW07d2lkdGg6Mi4xNDI4NmVtO3RvcDouMTQyODZlbTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtbGkuZmEtbGd7bGVmdDotMS44NTcxNGVtfS5mYS1ib3JkZXJ7cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtO2JvcmRlcjouMDhlbSBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6LjFlbX0uZmEtcHVsbC1sZWZ0e2Zsb2F0OmxlZnR9LmZhLXB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHR9LmZhLmZhLXB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6LjNlbX0uZmEuZmEtcHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtfS5wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0fS5wdWxsLWxlZnR7ZmxvYXQ6bGVmdH0uZmEucHVsbC1sZWZ0e21hcmdpbi1yaWdodDouM2VtfS5mYS5wdWxsLXJpZ2h0e21hcmdpbi1sZWZ0Oi4zZW19LmZhLXNwaW57LXdlYmtpdC1hbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGZhLXNwaW47YW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBmYS1zcGlufS5mYS1wdWxzZXstd2Via2l0LWFuaW1hdGlvbjoxcyBzdGVwcyg4KSBpbmZpbml0ZSBmYS1zcGluO2FuaW1hdGlvbjoxcyBzdGVwcyg4KSBpbmZpbml0ZSBmYS1zcGlufUAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fS5mYS1yb3RhdGUtOTB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uZmEtcm90YXRlLTE4MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LmZhLXJvdGF0ZS0yNzB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5mYS1mbGlwLWhvcml6b250YWx7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsMSk7dHJhbnNmb3JtOnNjYWxlKC0xLDEpfS5mYS1mbGlwLXZlcnRpY2Fsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsLTEpO3RyYW5zZm9ybTpzY2FsZSgxLC0xKX06cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLDpyb290IC5mYS1mbGlwLXZlcnRpY2FsLDpyb290IC5mYS1yb3RhdGUtMTgwLDpyb290IC5mYS1yb3RhdGUtMjcwLDpyb290IC5mYS1yb3RhdGUtOTB7LXdlYmtpdC1maWx0ZXI6bm9uZTtmaWx0ZXI6bm9uZX0uZmEtc3RhY2t7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MmVtO2hlaWdodDoyZW07bGluZS1oZWlnaHQ6MmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZmEtc3RhY2stMXgsLmZhLXN0YWNrLTJ4e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5mYS1zdGFjay0xeHtsaW5lLWhlaWdodDppbmhlcml0fS5mYS1zdGFjay0yeHtmb250LXNpemU6MmVtfS5mYS1pbnZlcnNle2NvbG9yOiNmZmZ9LmZhLWdsYXNzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKAXCJ9LmZhLW11c2ljOmJlZm9yZXtjb250ZW50Olwiw6/CgMKBXCJ9LmZhLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIsOvwoDCglwifS5mYS1lbnZlbG9wZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKDXCJ9LmZhLWhlYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CgMKEXCJ9LmZhLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoVcIn0uZmEtc3Rhci1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKGXCJ9LmZhLXVzZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwodcIn0uZmEtZmlsbTpiZWZvcmV7Y29udGVudDpcIsOvwoDCiFwifS5mYS10aC1sYXJnZTpiZWZvcmV7Y29udGVudDpcIsOvwoDCiVwifS5mYS10aDpiZWZvcmV7Y29udGVudDpcIsOvwoDCilwifS5mYS10aC1saXN0OmJlZm9yZXtjb250ZW50Olwiw6/CgMKLXCJ9LmZhLWNoZWNrOmJlZm9yZXtjb250ZW50Olwiw6/CgMKMXCJ9LmZhLWNsb3NlOmJlZm9yZSwuZmEtcmVtb3ZlOmJlZm9yZSwuZmEtdGltZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwo1cIn0uZmEtc2VhcmNoLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwo5cIn0uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKQXCJ9LmZhLXBvd2VyLW9mZjpiZWZvcmV7Y29udGVudDpcIsOvwoDCkVwifS5mYS1zaWduYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpJcIn0uZmEtY29nOmJlZm9yZSwuZmEtZ2VhcjpiZWZvcmV7Y29udGVudDpcIsOvwoDCk1wifS5mYS10cmFzaC1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKUXCJ9LmZhLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpVcIn0uZmEtZmlsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKWXCJ9LmZhLWNsb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpdcIn0uZmEtcm9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoDCmFwifS5mYS1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoDCmVwifS5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgMKaXCJ9LmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgMKbXCJ9LmZhLWluYm94OmJlZm9yZXtjb250ZW50Olwiw6/CgMKcXCJ9LmZhLXBsYXktY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwp1cIn0uZmEtcmVwZWF0OmJlZm9yZSwuZmEtcm90YXRlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgMKeXCJ9LmZhLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqFcIn0uZmEtbGlzdC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqJcIn0uZmEtbG9jazpiZWZvcmV7Y29udGVudDpcIsOvwoDCo1wifS5mYS1mbGFnOmJlZm9yZXtjb250ZW50Olwiw6/CgMKkXCJ9LmZhLWhlYWRwaG9uZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqVcIn0uZmEtdm9sdW1lLW9mZjpiZWZvcmV7Y29udGVudDpcIsOvwoDCplwifS5mYS12b2x1bWUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoDCp1wifS5mYS12b2x1bWUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqhcIn0uZmEtcXJjb2RlOmJlZm9yZXtjb250ZW50Olwiw6/CgMKpXCJ9LmZhLWJhcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqpcIn0uZmEtdGFnOmJlZm9yZXtjb250ZW50Olwiw6/CgMKrXCJ9LmZhLXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqxcIn0uZmEtYm9vazpiZWZvcmV7Y29udGVudDpcIsOvwoDCrVwifS5mYS1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcIsOvwoDCrlwifS5mYS1wcmludDpiZWZvcmV7Y29udGVudDpcIsOvwoDCr1wifS5mYS1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrBcIn0uZmEtZm9udDpiZWZvcmV7Y29udGVudDpcIsOvwoDCsVwifS5mYS1ib2xkOmJlZm9yZXtjb250ZW50Olwiw6/CgMKyXCJ9LmZhLWl0YWxpYzpiZWZvcmV7Y29udGVudDpcIsOvwoDCs1wifS5mYS10ZXh0LWhlaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoDCtFwifS5mYS10ZXh0LXdpZHRoOmJlZm9yZXtjb250ZW50Olwiw6/CgMK1XCJ9LmZhLWFsaWduLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrZcIn0uZmEtYWxpZ24tY2VudGVyOmJlZm9yZXtjb250ZW50Olwiw6/CgMK3XCJ9LmZhLWFsaWduLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgMK4XCJ9LmZhLWFsaWduLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrlcIn0uZmEtbGlzdDpiZWZvcmV7Y29udGVudDpcIsOvwoDCulwifS5mYS1kZWRlbnQ6YmVmb3JlLC5mYS1vdXRkZW50OmJlZm9yZXtjb250ZW50Olwiw6/CgMK7XCJ9LmZhLWluZGVudDpiZWZvcmV7Y29udGVudDpcIsOvwoDCvFwifS5mYS12aWRlby1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwr1cIn0uZmEtaW1hZ2U6YmVmb3JlLC5mYS1waG90bzpiZWZvcmUsLmZhLXBpY3R1cmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCvlwifS5mYS1wZW5jaWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoBcIn0uZmEtbWFwLW1hcmtlcjpiZWZvcmV7Y29udGVudDpcIsOvwoHCgVwifS5mYS1hZGp1c3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoJcIn0uZmEtdGludDpiZWZvcmV7Y29udGVudDpcIsOvwoHCg1wifS5mYS1lZGl0OmJlZm9yZSwuZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgcKEXCJ9LmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgcKFXCJ9LmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgcKGXCJ9LmZhLWFycm93czpiZWZvcmV7Y29udGVudDpcIsOvwoHCh1wifS5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKIXCJ9LmZhLWZhc3QtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwolcIn0uZmEtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwopcIn0uZmEtcGxheTpiZWZvcmV7Y29udGVudDpcIsOvwoHCi1wifS5mYS1wYXVzZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCjFwifS5mYS1zdG9wOmJlZm9yZXtjb250ZW50Olwiw6/CgcKNXCJ9LmZhLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwo5cIn0uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKQXCJ9LmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCkVwifS5mYS1lamVjdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCklwifS5mYS1jaGV2cm9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpNcIn0uZmEtY2hldnJvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoHClFwifS5mYS1wbHVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHClVwifS5mYS1taW51cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpZcIn0uZmEtdGltZXMtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKXXCJ9LmZhLWNoZWNrLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCmFwifS5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwplcIn0uZmEtaW5mby1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwppcIn0uZmEtY3Jvc3NoYWlyczpiZWZvcmV7Y29udGVudDpcIsOvwoHCm1wifS5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHCnFwifS5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHCnVwifS5mYS1iYW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwp5cIn0uZmEtYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCoFwifS5mYS1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoHCoVwifS5mYS1hcnJvdy11cDpiZWZvcmV7Y29udGVudDpcIsOvwoHColwifS5mYS1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgcKjXCJ9LmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsLmZhLXNoYXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKkXCJ9LmZhLWV4cGFuZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCpVwifS5mYS1jb21wcmVzczpiZWZvcmV7Y29udGVudDpcIsOvwoHCplwifS5mYS1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CgcKnXCJ9LmZhLW1pbnVzOmJlZm9yZXtjb250ZW50Olwiw6/CgcKoXCJ9LmZhLWFzdGVyaXNrOmJlZm9yZXtjb250ZW50Olwiw6/CgcKpXCJ9LmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCqlwifS5mYS1naWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKrXCJ9LmZhLWxlYWY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqxcIn0uZmEtZmlyZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCrVwifS5mYS1leWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwq5cIn0uZmEtZXllLXNsYXNoOmJlZm9yZXtjb250ZW50Olwiw6/CgcKwXCJ9LmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSwuZmEtd2FybmluZzpiZWZvcmV7Y29udGVudDpcIsOvwoHCsVwifS5mYS1wbGFuZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCslwifS5mYS1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcIsOvwoHCs1wifS5mYS1yYW5kb206YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrRcIn0uZmEtY29tbWVudDpiZWZvcmV7Y29udGVudDpcIsOvwoHCtVwifS5mYS1tYWduZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrZcIn0uZmEtY2hldnJvbi11cDpiZWZvcmV7Y29udGVudDpcIsOvwoHCt1wifS5mYS1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrhcIn0uZmEtcmV0d2VldDpiZWZvcmV7Y29udGVudDpcIsOvwoHCuVwifS5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CgcK6XCJ9LmZhLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoHCu1wifS5mYS1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcIsOvwoHCvFwifS5mYS1hcnJvd3MtdjpiZWZvcmV7Y29udGVudDpcIsOvwoHCvVwifS5mYS1hcnJvd3MtaDpiZWZvcmV7Y29udGVudDpcIsOvwoHCvlwifS5mYS1iYXItY2hhcnQtbzpiZWZvcmUsLmZhLWJhci1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwoLCgFwifS5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCgVwifS5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoJcIn0uZmEtY2FtZXJhLXJldHJvOmJlZm9yZXtjb250ZW50Olwiw6/CgsKDXCJ9LmZhLWtleTpiZWZvcmV7Y29udGVudDpcIsOvwoLChFwifS5mYS1jb2dzOmJlZm9yZSwuZmEtZ2VhcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoVcIn0uZmEtY29tbWVudHM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoZcIn0uZmEtdGh1bWJzLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwodcIn0uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoLCiFwifS5mYS1zdGFyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwolcIn0uZmEtaGVhcnQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoLCilwifS5mYS1zaWduLW91dDpiZWZvcmV7Y29udGVudDpcIsOvwoLCi1wifS5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoxcIn0uZmEtdGh1bWItdGFjazpiZWZvcmV7Y29udGVudDpcIsOvwoLCjVwifS5mYS1leHRlcm5hbC1saW5rOmJlZm9yZXtjb250ZW50Olwiw6/CgsKOXCJ9LmZhLXNpZ24taW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpBcIn0uZmEtdHJvcGh5OmJlZm9yZXtjb250ZW50Olwiw6/CgsKRXCJ9LmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpJcIn0uZmEtdXBsb2FkOmJlZm9yZXtjb250ZW50Olwiw6/CgsKTXCJ9LmZhLWxlbW9uLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpRcIn0uZmEtcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpVcIn0uZmEtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpZcIn0uZmEtYm9va21hcmstbzpiZWZvcmV7Y29udGVudDpcIsOvwoLCl1wifS5mYS1waG9uZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwphcIn0uZmEtdHdpdHRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoLCmVwifS5mYS1mYWNlYm9vay1mOmJlZm9yZSwuZmEtZmFjZWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwppcIn0uZmEtZ2l0aHViOmJlZm9yZXtjb250ZW50Olwiw6/CgsKbXCJ9LmZhLXVubG9jazpiZWZvcmV7Y29udGVudDpcIsOvwoLCnFwifS5mYS1jcmVkaXQtY2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoLCnVwifS5mYS1mZWVkOmJlZm9yZSwuZmEtcnNzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKeXCJ9LmZhLWhkZC1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKgXCJ9LmZhLWJ1bGxob3JuOmJlZm9yZXtjb250ZW50Olwiw6/CgsKhXCJ9LmZhLWJlbGw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrNcIn0uZmEtY2VydGlmaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqNcIn0uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKkXCJ9LmZhLWhhbmQtby1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKlXCJ9LmZhLWhhbmQtby11cDpiZWZvcmV7Y29udGVudDpcIsOvwoLCplwifS5mYS1oYW5kLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoLCp1wifS5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoLCqFwifS5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqlcIn0uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgsKqXCJ9LmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgsKrXCJ9LmZhLWdsb2JlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKsXCJ9LmZhLXdyZW5jaDpiZWZvcmV7Y29udGVudDpcIsOvwoLCrVwifS5mYS10YXNrczpiZWZvcmV7Y29udGVudDpcIsOvwoLCrlwifS5mYS1maWx0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwrBcIn0uZmEtYnJpZWZjYXNlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKxXCJ9LmZhLWFycm93cy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwrJcIn0uZmEtZ3JvdXA6YmVmb3JlLC5mYS11c2VyczpiZWZvcmV7Y29udGVudDpcIsOvwoPCgFwifS5mYS1jaGFpbjpiZWZvcmUsLmZhLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoFcIn0uZmEtY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoJcIn0uZmEtZmxhc2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoNcIn0uZmEtY3V0OmJlZm9yZSwuZmEtc2Npc3NvcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoRcIn0uZmEtY29weTpiZWZvcmUsLmZhLWZpbGVzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoVcIn0uZmEtcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KGXCJ9LmZhLWZsb3BweS1vOmJlZm9yZSwuZmEtc2F2ZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCh1wifS5mYS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwohcIn0uZmEtYmFyczpiZWZvcmUsLmZhLW5hdmljb246YmVmb3JlLC5mYS1yZW9yZGVyOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KJXCJ9LmZhLWxpc3QtdWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwopcIn0uZmEtbGlzdC1vbDpiZWZvcmV7Y29udGVudDpcIsOvwoPCi1wifS5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KMXCJ9LmZhLXVuZGVybGluZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCjVwifS5mYS10YWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCjlwifS5mYS1tYWdpYzpiZWZvcmV7Y29udGVudDpcIsOvwoPCkFwifS5mYS10cnVjazpiZWZvcmV7Y29udGVudDpcIsOvwoPCkVwifS5mYS1waW50ZXJlc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpJcIn0uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCk1wifS5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpRcIn0uZmEtZ29vZ2xlLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpVcIn0uZmEtbW9uZXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpZcIn0uZmEtY2FyZXQtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoPCl1wifS5mYS1jYXJldC11cDpiZWZvcmV7Y29udGVudDpcIsOvwoPCmFwifS5mYS1jYXJldC1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KZXCJ9LmZhLWNhcmV0LXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KaXCJ9LmZhLWNvbHVtbnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwptcIn0uZmEtc29ydDpiZWZvcmUsLmZhLXVuc29ydGVkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KcXCJ9LmZhLXNvcnQtZGVzYzpiZWZvcmUsLmZhLXNvcnQtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoPCnVwifS5mYS1zb3J0LWFzYzpiZWZvcmUsLmZhLXNvcnQtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwp5cIn0uZmEtZW52ZWxvcGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqBcIn0uZmEtbGlua2VkaW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqFcIn0uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLC5mYS11bmRvOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KiXCJ9LmZhLWdhdmVsOmJlZm9yZSwuZmEtbGVnYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqNcIn0uZmEtZGFzaGJvYXJkOmJlZm9yZSwuZmEtdGFjaG9tZXRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoPCpFwifS5mYS1jb21tZW50LW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqVcIn0uZmEtY29tbWVudHMtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCplwifS5mYS1ib2x0OmJlZm9yZSwuZmEtZmxhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqdcIn0uZmEtc2l0ZW1hcDpiZWZvcmV7Y29udGVudDpcIsOvwoPCqFwifS5mYS11bWJyZWxsYTpiZWZvcmV7Y29udGVudDpcIsOvwoPCqVwifS5mYS1jbGlwYm9hcmQ6YmVmb3JlLC5mYS1wYXN0ZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCqlwifS5mYS1saWdodGJ1bGItbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCq1wifS5mYS1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCrFwifS5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCrVwifS5mYS1jbG91ZC11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwq5cIn0uZmEtdXNlci1tZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCsFwifS5mYS1zdGV0aG9zY29wZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCsVwifS5mYS1zdWl0Y2FzZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCslwifS5mYS1iZWxsLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqJcIn0uZmEtY29mZmVlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K0XCJ9LmZhLWN1dGxlcnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrVcIn0uZmEtZmlsZS10ZXh0LW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrZcIn0uZmEtYnVpbGRpbmctbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCt1wifS5mYS1ob3NwaXRhbC1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K4XCJ9LmZhLWFtYnVsYW5jZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCuVwifS5mYS1tZWRraXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrpcIn0uZmEtZmlnaHRlci1qZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrtcIn0uZmEtYmVlcjpiZWZvcmV7Y29udGVudDpcIsOvwoPCvFwifS5mYS1oLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCvVwifS5mYS1wbHVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCvlwifS5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCgFwifS5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoFcIn0uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChMKCXCJ9LmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChMKDXCJ9LmZhLWFuZ2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoRcIn0uZmEtYW5nbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoVcIn0uZmEtYW5nbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoZcIn0uZmEtYW5nbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoTCh1wifS5mYS1kZXNrdG9wOmJlZm9yZXtjb250ZW50Olwiw6/ChMKIXCJ9LmZhLWxhcHRvcDpiZWZvcmV7Y29udGVudDpcIsOvwoTCiVwifS5mYS10YWJsZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwopcIn0uZmEtbW9iaWxlLXBob25lOmJlZm9yZSwuZmEtbW9iaWxlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKLXCJ9LmZhLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKMXCJ9LmZhLXF1b3RlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwo1cIn0uZmEtcXVvdGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwo5cIn0uZmEtc3Bpbm5lcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCkFwifS5mYS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpFcIn0uZmEtbWFpbC1yZXBseTpiZWZvcmUsLmZhLXJlcGx5OmJlZm9yZXtjb250ZW50Olwiw6/ChMKSXCJ9LmZhLWdpdGh1Yi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpNcIn0uZmEtZm9sZGVyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpRcIn0uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmV7Y29udGVudDpcIsOvwoTClVwifS5mYS1zbWlsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKYXCJ9LmZhLWZyb3duLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwplcIn0uZmEtbWVoLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwppcIn0uZmEtZ2FtZXBhZDpiZWZvcmV7Y29udGVudDpcIsOvwoTCm1wifS5mYS1rZXlib2FyZC1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKcXCJ9LmZhLWZsYWctbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCnVwifS5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmV7Y29udGVudDpcIsOvwoTCnlwifS5mYS10ZXJtaW5hbDpiZWZvcmV7Y29udGVudDpcIsOvwoTCoFwifS5mYS1jb2RlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKhXCJ9LmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSwuZmEtcmVwbHktYWxsOmJlZm9yZXtjb250ZW50Olwiw6/ChMKiXCJ9LmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSwuZmEtc3Rhci1oYWxmLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqNcIn0uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqRcIn0uZmEtY3JvcDpiZWZvcmV7Y29udGVudDpcIsOvwoTCpVwifS5mYS1jb2RlLWZvcms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqZcIn0uZmEtY2hhaW4tYnJva2VuOmJlZm9yZSwuZmEtdW5saW5rOmJlZm9yZXtjb250ZW50Olwiw6/ChMKnXCJ9LmZhLXF1ZXN0aW9uOmJlZm9yZXtjb250ZW50Olwiw6/ChMKoXCJ9LmZhLWluZm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqlcIn0uZmEtZXhjbGFtYXRpb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqpcIn0uZmEtc3VwZXJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqtcIn0uZmEtc3Vic2NyaXB0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKsXCJ9LmZhLWVyYXNlcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCrVwifS5mYS1wdXp6bGUtcGllY2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwq5cIn0uZmEtbWljcm9waG9uZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCsFwifS5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZXtjb250ZW50Olwiw6/ChMKxXCJ9LmZhLXNoaWVsZDpiZWZvcmV7Y29udGVudDpcIsOvwoTCslwifS5mYS1jYWxlbmRhci1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKzXCJ9LmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZXtjb250ZW50Olwiw6/ChMK0XCJ9LmZhLXJvY2tldDpiZWZvcmV7Y29udGVudDpcIsOvwoTCtVwifS5mYS1tYXhjZG46YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrZcIn0uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCt1wifS5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoTCuFwifS5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoTCuVwifS5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChMK6XCJ9LmZhLWh0bWw1OmJlZm9yZXtjb250ZW50Olwiw6/ChMK7XCJ9LmZhLWNzczM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrxcIn0uZmEtYW5jaG9yOmJlZm9yZXtjb250ZW50Olwiw6/ChMK9XCJ9LmZhLXVubG9jay1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwr5cIn0uZmEtYnVsbHNleWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoBcIn0uZmEtZWxsaXBzaXMtaDpiZWZvcmV7Y29udGVudDpcIsOvwoXCgVwifS5mYS1lbGxpcHNpcy12OmJlZm9yZXtjb250ZW50Olwiw6/ChcKCXCJ9LmZhLXJzcy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoNcIn0uZmEtcGxheS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoRcIn0uZmEtdGlja2V0OmJlZm9yZXtjb250ZW50Olwiw6/ChcKFXCJ9LmZhLW1pbnVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXChlwifS5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoXCh1wifS5mYS1sZXZlbC11cDpiZWZvcmV7Y29udGVudDpcIsOvwoXCiFwifS5mYS1sZXZlbC1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChcKJXCJ9LmZhLWNoZWNrLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCilwifS5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKLXCJ9LmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKMXCJ9LmZhLXNoYXJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCjVwifS5mYS1jb21wYXNzOmJlZm9yZXtjb250ZW50Olwiw6/ChcKOXCJ9LmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlLC5mYS10b2dnbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCkFwifS5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUsLmZhLXRvZ2dsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoXCkVwifS5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUsLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoXCklwifS5mYS1ldXI6YmVmb3JlLC5mYS1ldXJvOmJlZm9yZXtjb250ZW50Olwiw6/ChcKTXCJ9LmZhLWdicDpiZWZvcmV7Y29udGVudDpcIsOvwoXClFwifS5mYS1kb2xsYXI6YmVmb3JlLC5mYS11c2Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpVcIn0uZmEtaW5yOmJlZm9yZSwuZmEtcnVwZWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpZcIn0uZmEtY255OmJlZm9yZSwuZmEtanB5OmJlZm9yZSwuZmEtcm1iOmJlZm9yZSwuZmEteWVuOmJlZm9yZXtjb250ZW50Olwiw6/ChcKXXCJ9LmZhLXJvdWJsZTpiZWZvcmUsLmZhLXJ1YjpiZWZvcmUsLmZhLXJ1YmxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKYXCJ9LmZhLWtydzpiZWZvcmUsLmZhLXdvbjpiZWZvcmV7Y29udGVudDpcIsOvwoXCmVwifS5mYS1iaXRjb2luOmJlZm9yZSwuZmEtYnRjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKaXCJ9LmZhLWZpbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwptcIn0uZmEtZmlsZS10ZXh0OmJlZm9yZXtjb250ZW50Olwiw6/ChcKcXCJ9LmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKdXCJ9LmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCnlwifS5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqBcIn0uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCoVwifS5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKiXCJ9LmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKjXCJ9LmZhLXRodW1icy11cDpiZWZvcmV7Y29udGVudDpcIsOvwoXCpFwifS5mYS10aHVtYnMtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCpVwifS5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCplwifS5mYS15b3V0dWJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKnXCJ9LmZhLXhpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqhcIn0uZmEteGluZy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqlcIn0uZmEteW91dHViZS1wbGF5OmJlZm9yZXtjb250ZW50Olwiw6/ChcKqXCJ9LmZhLWRyb3Bib3g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqtcIn0uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqxcIn0uZmEtaW5zdGFncmFtOmJlZm9yZXtjb250ZW50Olwiw6/ChcKtXCJ9LmZhLWZsaWNrcjpiZWZvcmV7Y29udGVudDpcIsOvwoXCrlwifS5mYS1hZG46YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrBcIn0uZmEtYml0YnVja2V0OmJlZm9yZXtjb250ZW50Olwiw6/ChcKxXCJ9LmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrJcIn0uZmEtdHVtYmxyOmJlZm9yZXtjb250ZW50Olwiw6/ChcKzXCJ9LmZhLXR1bWJsci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrRcIn0uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChcK1XCJ9LmZhLWxvbmctYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrZcIn0uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChcK3XCJ9LmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrhcIn0uZmEtYXBwbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrlcIn0uZmEtd2luZG93czpiZWZvcmV7Y29udGVudDpcIsOvwoXCulwifS5mYS1hbmRyb2lkOmJlZm9yZXtjb250ZW50Olwiw6/ChcK7XCJ9LmZhLWxpbnV4OmJlZm9yZXtjb250ZW50Olwiw6/ChcK8XCJ9LmZhLWRyaWJiYmxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK9XCJ9LmZhLXNreXBlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK+XCJ9LmZhLWZvdXJzcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoBcIn0uZmEtdHJlbGxvOmJlZm9yZXtjb250ZW50Olwiw6/ChsKBXCJ9LmZhLWZlbWFsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCglwifS5mYS1tYWxlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKDXCJ9LmZhLWdpdHRpcDpiZWZvcmUsLmZhLWdyYXRpcGF5OmJlZm9yZXtjb250ZW50Olwiw6/ChsKEXCJ9LmZhLXN1bi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKFXCJ9LmZhLW1vb24tbzpiZWZvcmV7Y29udGVudDpcIsOvwobChlwifS5mYS1hcmNoaXZlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKHXCJ9LmZhLWJ1ZzpiZWZvcmV7Y29udGVudDpcIsOvwobCiFwifS5mYS12azpiZWZvcmV7Y29udGVudDpcIsOvwobCiVwifS5mYS13ZWlibzpiZWZvcmV7Y29udGVudDpcIsOvwobCilwifS5mYS1yZW5yZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwotcIn0uZmEtcGFnZWxpbmVzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKMXCJ9LmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKNXCJ9LmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKOXCJ9LmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpBcIn0uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUsLmZhLXRvZ2dsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKRXCJ9LmZhLWRvdC1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwobCklwifS5mYS13aGVlbGNoYWlyOmJlZm9yZXtjb250ZW50Olwiw6/ChsKTXCJ9LmZhLXZpbWVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobClFwifS5mYS10cnk6YmVmb3JlLC5mYS10dXJraXNoLWxpcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpVcIn0uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwobCllwifS5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKXXCJ9LmZhLXNsYWNrOmJlZm9yZXtjb250ZW50Olwiw6/ChsKYXCJ9LmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobCmVwifS5mYS13b3JkcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwppcIn0uZmEtb3BlbmlkOmJlZm9yZXtjb250ZW50Olwiw6/ChsKbXCJ9LmZhLWJhbms6YmVmb3JlLC5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsLmZhLXVuaXZlcnNpdHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpxcIn0uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlLC5mYS1tb3J0YXItYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwp1cIn0uZmEteWFob286YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwp5cIn0uZmEtZ29vZ2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKgXCJ9LmZhLXJlZGRpdDpiZWZvcmV7Y29udGVudDpcIsOvwobCoVwifS5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKiXCJ9LmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCo1wifS5mYS1zdHVtYmxldXBvbjpiZWZvcmV7Y29udGVudDpcIsOvwobCpFwifS5mYS1kZWxpY2lvdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqVcIn0uZmEtZGlnZzpiZWZvcmV7Y29udGVudDpcIsOvwobCplwifS5mYS1waWVkLXBpcGVyLXBwOmJlZm9yZXtjb250ZW50Olwiw6/ChsKnXCJ9LmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKoXCJ9LmZhLWRydXBhbDpiZWZvcmV7Y29udGVudDpcIsOvwobCqVwifS5mYS1qb29tbGE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqpcIn0uZmEtbGFuZ3VhZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqtcIn0uZmEtZmF4OmJlZm9yZXtjb250ZW50Olwiw6/ChsKsXCJ9LmZhLWJ1aWxkaW5nOmJlZm9yZXtjb250ZW50Olwiw6/ChsKtXCJ9LmZhLWNoaWxkOmJlZm9yZXtjb250ZW50Olwiw6/ChsKuXCJ9LmZhLXBhdzpiZWZvcmV7Y29udGVudDpcIsOvwobCsFwifS5mYS1zcG9vbjpiZWZvcmV7Y29udGVudDpcIsOvwobCsVwifS5mYS1jdWJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKyXCJ9LmZhLWN1YmVzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKzXCJ9LmZhLWJlaGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrRcIn0uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrVcIn0uZmEtc3RlYW06YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrZcIn0uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK3XCJ9LmZhLXJlY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrhcIn0uZmEtYXV0b21vYmlsZTpiZWZvcmUsLmZhLWNhcjpiZWZvcmV7Y29udGVudDpcIsOvwobCuVwifS5mYS1jYWI6YmVmb3JlLC5mYS10YXhpOmJlZm9yZXtjb250ZW50Olwiw6/ChsK6XCJ9LmZhLXRyZWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrtcIn0uZmEtc3BvdGlmeTpiZWZvcmV7Y29udGVudDpcIsOvwobCvFwifS5mYS1kZXZpYW50YXJ0OmJlZm9yZXtjb250ZW50Olwiw6/ChsK9XCJ9LmZhLXNvdW5kY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwr5cIn0uZmEtZGF0YWJhc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoBcIn0uZmEtZmlsZS1wZGYtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCgVwifS5mYS1maWxlLXdvcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCglwifS5mYS1maWxlLWV4Y2VsLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoNcIn0uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoRcIn0uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSwuZmEtZmlsZS1waG90by1vOmJlZm9yZSwuZmEtZmlsZS1waWN0dXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoVcIn0uZmEtZmlsZS1hcmNoaXZlLW86YmVmb3JlLC5mYS1maWxlLXppcC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KGXCJ9LmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUsLmZhLWZpbGUtc291bmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCh1wifS5mYS1maWxlLW1vdmllLW86YmVmb3JlLC5mYS1maWxlLXZpZGVvLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwohcIn0uZmEtZmlsZS1jb2RlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwolcIn0uZmEtdmluZTpiZWZvcmV7Y29udGVudDpcIsOvwofCilwifS5mYS1jb2RlcGVuOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KLXCJ9LmZhLWpzZmlkZGxlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KMXCJ9LmZhLWxpZmUtYm91eTpiZWZvcmUsLmZhLWxpZmUtYnVveTpiZWZvcmUsLmZhLWxpZmUtcmluZzpiZWZvcmUsLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLC5mYS1zdXBwb3J0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KNXCJ9LmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KOXCJ9LmZhLXJhOmJlZm9yZSwuZmEtcmViZWw6YmVmb3JlLC5mYS1yZXNpc3RhbmNlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KQXCJ9LmZhLWVtcGlyZTpiZWZvcmUsLmZhLWdlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KRXCJ9LmZhLWdpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpJcIn0uZmEtZ2l0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KTXCJ9LmZhLWhhY2tlci1uZXdzOmJlZm9yZSwuZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsLmZhLXljLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwofClFwifS5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KVXCJ9LmZhLXFxOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KWXCJ9LmZhLXdlY2hhdDpiZWZvcmUsLmZhLXdlaXhpbjpiZWZvcmV7Y29udGVudDpcIsOvwofCl1wifS5mYS1wYXBlci1wbGFuZTpiZWZvcmUsLmZhLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwphcIn0uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUsLmZhLXNlbmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCmVwifS5mYS1oaXN0b3J5OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KaXCJ9LmZhLWNpcmNsZS10aGluOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KbXCJ9LmZhLWhlYWRlcjpiZWZvcmV7Y29udGVudDpcIsOvwofCnFwifS5mYS1wYXJhZ3JhcGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwp1cIn0uZmEtc2xpZGVyczpiZWZvcmV7Y29udGVudDpcIsOvwofCnlwifS5mYS1zaGFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqBcIn0uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwofCoVwifS5mYS1ib21iOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KiXCJ9LmZhLWZ1dGJvbC1vOmJlZm9yZSwuZmEtc29jY2VyLWJhbGwtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCo1wifS5mYS10dHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqRcIn0uZmEtYmlub2N1bGFyczpiZWZvcmV7Y29udGVudDpcIsOvwofCpVwifS5mYS1wbHVnOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KmXCJ9LmZhLXNsaWRlc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqdcIn0uZmEtdHdpdGNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KoXCJ9LmZhLXllbHA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqlcIn0uZmEtbmV3c3BhcGVyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqpcIn0uZmEtd2lmaTpiZWZvcmV7Y29udGVudDpcIsOvwofCq1wifS5mYS1jYWxjdWxhdG9yOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KsXCJ9LmZhLXBheXBhbDpiZWZvcmV7Y29udGVudDpcIsOvwofCrVwifS5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KuXCJ9LmZhLWNjLXZpc2E6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrBcIn0uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwofCsVwifS5mYS1jYy1kaXNjb3ZlcjpiZWZvcmV7Y29udGVudDpcIsOvwofCslwifS5mYS1jYy1hbWV4OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KzXCJ9LmZhLWNjLXBheXBhbDpiZWZvcmV7Y29udGVudDpcIsOvwofCtFwifS5mYS1jYy1zdHJpcGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrVcIn0uZmEtYmVsbC1zbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwofCtlwifS5mYS1iZWxsLXNsYXNoLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrdcIn0uZmEtdHJhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrhcIn0uZmEtY29weXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8K5XCJ9LmZhLWF0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8K6XCJ9LmZhLWV5ZWRyb3BwZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrtcIn0uZmEtcGFpbnQtYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrxcIn0uZmEtYmlydGhkYXktY2FrZTpiZWZvcmV7Y29udGVudDpcIsOvwofCvVwifS5mYS1hcmVhLWNoYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8K+XCJ9LmZhLXBpZS1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwojCgFwifS5mYS1saW5lLWNoYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKBXCJ9LmZhLWxhc3RmbTpiZWZvcmV7Y29udGVudDpcIsOvwojCglwifS5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKDXCJ9LmZhLXRvZ2dsZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoRcIn0uZmEtdG9nZ2xlLW9uOmJlZm9yZXtjb250ZW50Olwiw6/CiMKFXCJ9LmZhLWJpY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoZcIn0uZmEtYnVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKHXCJ9LmZhLWlveGhvc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwohcIn0uZmEtYW5nZWxsaXN0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKJXCJ9LmZhLWNjOmJlZm9yZXtjb250ZW50Olwiw6/CiMKKXCJ9LmZhLWlsczpiZWZvcmUsLmZhLXNoZWtlbDpiZWZvcmUsLmZhLXNoZXFlbDpiZWZvcmV7Y29udGVudDpcIsOvwojCi1wifS5mYS1tZWFucGF0aDpiZWZvcmV7Y29udGVudDpcIsOvwojCjFwifS5mYS1idXlzZWxsYWRzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKNXCJ9LmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZXtjb250ZW50Olwiw6/CiMKOXCJ9LmZhLWRhc2hjdWJlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKQXCJ9LmZhLWZvcnVtYmVlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKRXCJ9LmZhLWxlYW5wdWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpJcIn0uZmEtc2VsbHN5OmJlZm9yZXtjb250ZW50Olwiw6/CiMKTXCJ9LmZhLXNoaXJ0c2luYnVsazpiZWZvcmV7Y29udGVudDpcIsOvwojClFwifS5mYS1zaW1wbHlidWlsdDpiZWZvcmV7Y29udGVudDpcIsOvwojClVwifS5mYS1za3lhdGxhczpiZWZvcmV7Y29udGVudDpcIsOvwojCllwifS5mYS1jYXJ0LXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpdcIn0uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CiMKYXCJ9LmZhLWRpYW1vbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwplcIn0uZmEtc2hpcDpiZWZvcmV7Y29udGVudDpcIsOvwojCmlwifS5mYS11c2VyLXNlY3JldDpiZWZvcmV7Y29udGVudDpcIsOvwojCm1wifS5mYS1tb3RvcmN5Y2xlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKcXCJ9LmZhLXN0cmVldC12aWV3OmJlZm9yZXtjb250ZW50Olwiw6/CiMKdXCJ9LmZhLWhlYXJ0YmVhdDpiZWZvcmV7Y29udGVudDpcIsOvwojCnlwifS5mYS12ZW51czpiZWZvcmV7Y29udGVudDpcIsOvwojCoVwifS5mYS1tYXJzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKiXCJ9LmZhLW1lcmN1cnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqNcIn0uZmEtaW50ZXJzZXg6YmVmb3JlLC5mYS10cmFuc2dlbmRlcjpiZWZvcmV7Y29udGVudDpcIsOvwojCpFwifS5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqVcIn0uZmEtdmVudXMtZG91YmxlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKmXCJ9LmZhLW1hcnMtZG91YmxlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKnXCJ9LmZhLXZlbnVzLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqhcIn0uZmEtbWFycy1zdHJva2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqlcIn0uZmEtbWFycy1zdHJva2UtdjpiZWZvcmV7Y29udGVudDpcIsOvwojCqlwifS5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZXtjb250ZW50Olwiw6/CiMKrXCJ9LmZhLW5ldXRlcjpiZWZvcmV7Y29udGVudDpcIsOvwojCrFwifS5mYS1nZW5kZXJsZXNzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKtXCJ9LmZhLWZhY2Vib29rLW9mZmljaWFsOmJlZm9yZXtjb250ZW50Olwiw6/CiMKwXCJ9LmZhLXBpbnRlcmVzdC1wOmJlZm9yZXtjb250ZW50Olwiw6/CiMKxXCJ9LmZhLXdoYXRzYXBwOmJlZm9yZXtjb250ZW50Olwiw6/CiMKyXCJ9LmZhLXNlcnZlcjpiZWZvcmV7Y29udGVudDpcIsOvwojCs1wifS5mYS11c2VyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrRcIn0uZmEtdXNlci10aW1lczpiZWZvcmV7Y29udGVudDpcIsOvwojCtVwifS5mYS1iZWQ6YmVmb3JlLC5mYS1ob3RlbDpiZWZvcmV7Y29udGVudDpcIsOvwojCtlwifS5mYS12aWFjb2luOmJlZm9yZXtjb250ZW50Olwiw6/CiMK3XCJ9LmZhLXRyYWluOmJlZm9yZXtjb250ZW50Olwiw6/CiMK4XCJ9LmZhLXN1YndheTpiZWZvcmV7Y29udGVudDpcIsOvwojCuVwifS5mYS1tZWRpdW06YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrpcIn0uZmEteS1jb21iaW5hdG9yOmJlZm9yZSwuZmEteWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrtcIn0uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmV7Y29udGVudDpcIsOvwojCvFwifS5mYS1vcGVuY2FydDpiZWZvcmV7Y29udGVudDpcIsOvwojCvVwifS5mYS1leHBlZGl0ZWRzc2w6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwr5cIn0uZmEtYmF0dGVyeS00OmJlZm9yZSwuZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSwuZmEtYmF0dGVyeTpiZWZvcmV7Y29udGVudDpcIsOvwonCgFwifS5mYS1iYXR0ZXJ5LTM6YmVmb3JlLC5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZXtjb250ZW50Olwiw6/CicKBXCJ9LmZhLWJhdHRlcnktMjpiZWZvcmUsLmZhLWJhdHRlcnktaGFsZjpiZWZvcmV7Y29udGVudDpcIsOvwonCglwifS5mYS1iYXR0ZXJ5LTE6YmVmb3JlLC5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoNcIn0uZmEtYmF0dGVyeS0wOmJlZm9yZSwuZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmV7Y29udGVudDpcIsOvwonChFwifS5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZXtjb250ZW50Olwiw6/CicKFXCJ9LmZhLWktY3Vyc29yOmJlZm9yZXtjb250ZW50Olwiw6/CicKGXCJ9LmZhLW9iamVjdC1ncm91cDpiZWZvcmV7Y29udGVudDpcIsOvwonCh1wifS5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmV7Y29udGVudDpcIsOvwonCiFwifS5mYS1zdGlja3ktbm90ZTpiZWZvcmV7Y29udGVudDpcIsOvwonCiVwifS5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKKXCJ9LmZhLWNjLWpjYjpiZWZvcmV7Y29udGVudDpcIsOvwonCi1wifS5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmV7Y29udGVudDpcIsOvwonCjFwifS5mYS1jbG9uZTpiZWZvcmV7Y29udGVudDpcIsOvwonCjVwifS5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZXtjb250ZW50Olwiw6/CicKOXCJ9LmZhLWhvdXJnbGFzcy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKQXCJ9LmZhLWhvdXJnbGFzcy0xOmJlZm9yZSwuZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CicKRXCJ9LmZhLWhvdXJnbGFzcy0yOmJlZm9yZSwuZmEtaG91cmdsYXNzLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpJcIn0uZmEtaG91cmdsYXNzLTM6YmVmb3JlLC5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZXtjb250ZW50Olwiw6/CicKTXCJ9LmZhLWhvdXJnbGFzczpiZWZvcmV7Y29udGVudDpcIsOvwonClFwifS5mYS1oYW5kLWdyYWItbzpiZWZvcmUsLmZhLWhhbmQtcm9jay1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKVXCJ9LmZhLWhhbmQtcGFwZXItbzpiZWZvcmUsLmZhLWhhbmQtc3RvcC1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKWXCJ9LmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCl1wifS5mYS1oYW5kLWxpemFyZC1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKYXCJ9LmZhLWhhbmQtc3BvY2stbzpiZWZvcmV7Y29udGVudDpcIsOvwonCmVwifS5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmV7Y29udGVudDpcIsOvwonCmlwifS5mYS1oYW5kLXBlYWNlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwptcIn0uZmEtdHJhZGVtYXJrOmJlZm9yZXtjb250ZW50Olwiw6/CicKcXCJ9LmZhLXJlZ2lzdGVyZWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwp1cIn0uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmV7Y29udGVudDpcIsOvwonCnlwifS5mYS1nZzpiZWZvcmV7Y29udGVudDpcIsOvwonCoFwifS5mYS1nZy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqFcIn0uZmEtdHJpcGFkdmlzb3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqJcIn0uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmV7Y29udGVudDpcIsOvwonCo1wifS5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwonCpFwifS5mYS1nZXQtcG9ja2V0OmJlZm9yZXtjb250ZW50Olwiw6/CicKlXCJ9LmZhLXdpa2lwZWRpYS13OmJlZm9yZXtjb250ZW50Olwiw6/CicKmXCJ9LmZhLXNhZmFyaTpiZWZvcmV7Y29udGVudDpcIsOvwonCp1wifS5mYS1jaHJvbWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqhcIn0uZmEtZmlyZWZveDpiZWZvcmV7Y29udGVudDpcIsOvwonCqVwifS5mYS1vcGVyYTpiZWZvcmV7Y29udGVudDpcIsOvwonCqlwifS5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmV7Y29udGVudDpcIsOvwonCq1wifS5mYS10ZWxldmlzaW9uOmJlZm9yZSwuZmEtdHY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqxcIn0uZmEtY29udGFvOmJlZm9yZXtjb250ZW50Olwiw6/CicKtXCJ9LmZhLTUwMHB4OmJlZm9yZXtjb250ZW50Olwiw6/CicKuXCJ9LmZhLWFtYXpvbjpiZWZvcmV7Y29udGVudDpcIsOvwonCsFwifS5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrFcIn0uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCslwifS5mYS1jYWxlbmRhci10aW1lcy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKzXCJ9LmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrRcIn0uZmEtaW5kdXN0cnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrVcIn0uZmEtbWFwLXBpbjpiZWZvcmV7Y29udGVudDpcIsOvwonCtlwifS5mYS1tYXAtc2lnbnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrdcIn0uZmEtbWFwLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrhcIn0uZmEtbWFwOmJlZm9yZXtjb250ZW50Olwiw6/CicK5XCJ9LmZhLWNvbW1lbnRpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrpcIn0uZmEtY29tbWVudGluZy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicK7XCJ9LmZhLWhvdXp6OmJlZm9yZXtjb250ZW50Olwiw6/CicK8XCJ9LmZhLXZpbWVvOmJlZm9yZXtjb250ZW50Olwiw6/CicK9XCJ9LmZhLWJsYWNrLXRpZTpiZWZvcmV7Y29udGVudDpcIsOvwonCvlwifS5mYS1mb250aWNvbnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoBcIn0uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZXtjb250ZW50Olwiw6/CisKBXCJ9LmZhLWVkZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoJcIn0uZmEtY3JlZGl0LWNhcmQtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CisKDXCJ9LmZhLWNvZGllcGllOmJlZm9yZXtjb250ZW50Olwiw6/CisKEXCJ9LmZhLW1vZHg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoVcIn0uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZXtjb250ZW50Olwiw6/CisKGXCJ9LmZhLXVzYjpiZWZvcmV7Y29udGVudDpcIsOvworCh1wifS5mYS1wcm9kdWN0LWh1bnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwohcIn0uZmEtbWl4Y2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwolcIn0uZmEtc2NyaWJkOmJlZm9yZXtjb250ZW50Olwiw6/CisKKXCJ9LmZhLXBhdXNlLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvworCi1wifS5mYS1wYXVzZS1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCjFwifS5mYS1zdG9wLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvworCjVwifS5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CisKOXCJ9LmZhLXNob3BwaW5nLWJhZzpiZWZvcmV7Y29udGVudDpcIsOvworCkFwifS5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpFcIn0uZmEtaGFzaHRhZzpiZWZvcmV7Y29udGVudDpcIsOvworCklwifS5mYS1ibHVldG9vdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpNcIn0uZmEtYmx1ZXRvb3RoLWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpRcIn0uZmEtcGVyY2VudDpiZWZvcmV7Y29udGVudDpcIsOvworClVwifS5mYS1naXRsYWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpZcIn0uZmEtd3BiZWdpbm5lcjpiZWZvcmV7Y29udGVudDpcIsOvworCl1wifS5mYS13cGZvcm1zOmJlZm9yZXtjb250ZW50Olwiw6/CisKYXCJ9LmZhLWVudmlyYTpiZWZvcmV7Y29udGVudDpcIsOvworCmVwifS5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZXtjb250ZW50Olwiw6/CisKaXCJ9LmZhLXdoZWVsY2hhaXItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CisKbXCJ9LmZhLXF1ZXN0aW9uLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CisKcXCJ9LmZhLWJsaW5kOmJlZm9yZXtjb250ZW50Olwiw6/CisKdXCJ9LmZhLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZXtjb250ZW50Olwiw6/CisKeXCJ9LmZhLXZvbHVtZS1jb250cm9sLXBob25lOmJlZm9yZXtjb250ZW50Olwiw6/CisKgXCJ9LmZhLWJyYWlsbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqFcIn0uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZXtjb250ZW50Olwiw6/CisKiXCJ9LmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSwuZmEtYXNsLWludGVycHJldGluZzpiZWZvcmV7Y29udGVudDpcIsOvworCo1wifS5mYS1kZWFmOmJlZm9yZSwuZmEtZGVhZm5lc3M6YmVmb3JlLC5mYS1oYXJkLW9mLWhlYXJpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqRcIn0uZmEtZ2xpZGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqVcIn0uZmEtZ2xpZGUtZzpiZWZvcmV7Y29udGVudDpcIsOvworCplwifS5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZSwuZmEtc2lnbmluZzpiZWZvcmV7Y29udGVudDpcIsOvworCp1wifS5mYS1sb3ctdmlzaW9uOmJlZm9yZXtjb250ZW50Olwiw6/CisKoXCJ9LmZhLXZpYWRlbzpiZWZvcmV7Y29udGVudDpcIsOvworCqVwifS5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CisKqXCJ9LmZhLXNuYXBjaGF0OmJlZm9yZXtjb250ZW50Olwiw6/CisKrXCJ9LmZhLXNuYXBjaGF0LWdob3N0OmJlZm9yZXtjb250ZW50Olwiw6/CisKsXCJ9LmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvworCrVwifS5mYS1waWVkLXBpcGVyOmJlZm9yZXtjb250ZW50Olwiw6/CisKuXCJ9LmZhLWZpcnN0LW9yZGVyOmJlZm9yZXtjb250ZW50Olwiw6/CisKwXCJ9LmZhLXlvYXN0OmJlZm9yZXtjb250ZW50Olwiw6/CisKxXCJ9LmZhLXRoZW1laXNsZTpiZWZvcmV7Y29udGVudDpcIsOvworCslwifS5mYS1nb29nbGUtcGx1cy1jaXJjbGU6YmVmb3JlLC5mYS1nb29nbGUtcGx1cy1vZmZpY2lhbDpiZWZvcmV7Y29udGVudDpcIsOvworCs1wifS5mYS1mYTpiZWZvcmUsLmZhLWZvbnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcIsOvworCtFwifS5mYS1oYW5kc2hha2UtbzpiZWZvcmV7Y29udGVudDpcIsOvworCtVwifS5mYS1lbnZlbG9wZS1vcGVuOmJlZm9yZXtjb250ZW50Olwiw6/CisK2XCJ9LmZhLWVudmVsb3BlLW9wZW4tbzpiZWZvcmV7Y29udGVudDpcIsOvworCt1wifS5mYS1saW5vZGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrhcIn0uZmEtYWRkcmVzcy1ib29rOmJlZm9yZXtjb250ZW50Olwiw6/CisK5XCJ9LmZhLWFkZHJlc3MtYm9vay1vOmJlZm9yZXtjb250ZW50Olwiw6/CisK6XCJ9LmZhLWFkZHJlc3MtY2FyZDpiZWZvcmUsLmZhLXZjYXJkOmJlZm9yZXtjb250ZW50Olwiw6/CisK7XCJ9LmZhLWFkZHJlc3MtY2FyZC1vOmJlZm9yZSwuZmEtdmNhcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvworCvFwifS5mYS11c2VyLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvworCvVwifS5mYS11c2VyLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CisK+XCJ9LmZhLXVzZXItbzpiZWZvcmV7Y29udGVudDpcIsOvwovCgFwifS5mYS1pZC1iYWRnZTpiZWZvcmV7Y29udGVudDpcIsOvwovCgVwifS5mYS1kcml2ZXJzLWxpY2Vuc2U6YmVmb3JlLC5mYS1pZC1jYXJkOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KCXCJ9LmZhLWRyaXZlcnMtbGljZW5zZS1vOmJlZm9yZSwuZmEtaWQtY2FyZC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KDXCJ9LmZhLXF1b3JhOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KEXCJ9LmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KFXCJ9LmZhLXRlbGVncmFtOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KGXCJ9LmZhLXRoZXJtb21ldGVyLTQ6YmVmb3JlLC5mYS10aGVybW9tZXRlci1mdWxsOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwodcIn0uZmEtdGhlcm1vbWV0ZXItMzpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KIXCJ9LmZhLXRoZXJtb21ldGVyLTI6YmVmb3JlLC5mYS10aGVybW9tZXRlci1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KJXCJ9LmZhLXRoZXJtb21ldGVyLTE6YmVmb3JlLC5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KKXCJ9LmZhLXRoZXJtb21ldGVyLTA6YmVmb3JlLC5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmV7Y29udGVudDpcIsOvwovCi1wifS5mYS1zaG93ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoxcIn0uZmEtYmF0aDpiZWZvcmUsLmZhLWJhdGh0dWI6YmVmb3JlLC5mYS1zMTU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwo1cIn0uZmEtcG9kY2FzdDpiZWZvcmV7Y29udGVudDpcIsOvwovCjlwifS5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpBcIn0uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KRXCJ9LmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KSXCJ9LmZhLXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsLmZhLXdpbmRvdy1jbG9zZTpiZWZvcmV7Y29udGVudDpcIsOvwovCk1wifS5mYS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsLmZhLXdpbmRvdy1jbG9zZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KUXCJ9LmZhLWJhbmRjYW1wOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KVXCJ9LmZhLWdyYXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpZcIn0uZmEtZXRzeTpiZWZvcmV7Y29udGVudDpcIsOvwovCl1wifS5mYS1pbWRiOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KYXCJ9LmZhLXJhdmVscnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwplcIn0uZmEtZWVyY2FzdDpiZWZvcmV7Y29udGVudDpcIsOvwovCmlwifS5mYS1taWNyb2NoaXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwptcIn0uZmEtc25vd2ZsYWtlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpxcIn0uZmEtc3VwZXJwb3dlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwp1cIn0uZmEtd3BleHBsb3JlcjpiZWZvcmV7Y29udGVudDpcIsOvwovCnlwifS5mYS1tZWV0dXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwqBcIn0uc3Itb25seXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLDAsMCwwKTtib3JkZXI6MH0uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1c3twb3NpdGlvbjpzdGF0aWM7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzttYXJnaW46MDtvdmVyZmxvdzp2aXNpYmxlO2NsaXA6YXV0b31he2N1cnNvcjpwb2ludGVyfSNlZGl0b3J7bWluLWhlaWdodDoxNTBweDtvdmVyZmxvdzphdXRvO21hcmdpbi10b3A6NXB4O3Jlc2l6ZTp2ZXJ0aWNhbDtvdXRsaW5lOjB9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXJ7Zm9udDoxMDAgLjhyZW0vMTVweCBSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cGFkZGluZzouMnJlbTtib3JkZXI6MXB4IHNvbGlkICNkZGR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW4tcmlnaHQ6NXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXI6MXB4IHNvbGlkICNkZGQ7bWFyZ2luLWJvdHRvbTozcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b257YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nOi40cmVtO21pbi13aWR0aDoycmVtO2Zsb2F0OmxlZnQ7Ym9yZGVyOjAgc29saWQgI2RkZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpmaXJzdC1jaGlsZHtib3JkZXItcmFkaXVzOjVweCAwIDAgNXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czowIDVweCA1cHggMH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6NXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmhvdmVye2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt0cmFuc2l0aW9uOi4ycyBlYXNlfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uLmZvY3VzLC5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmZvY3Vze291dGxpbmU6MH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246ZGlzYWJsZWQ+LmNvbG9yLWxhYmVse3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmRpc2FibGVkPi5jb2xvci1sYWJlbC5iYWNrZ3JvdW5kLC5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmRpc2FibGVkPi5jb2xvci1sYWJlbC5mb3JlZ3JvdW5kIDphZnRlcntiYWNrZ3JvdW5kOiM1NTV9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b24uYWN0aXZle2JhY2tncm91bmQ6I2ZmZjViOX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbi5hY3RpdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmYTk4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCBzZWxlY3R7Zm9udC1zaXplOjExcHg7d2lkdGg6OTBweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6LjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO2JvcmRlci1yYWRpdXM6NXB4O291dGxpbmU6MDtwYWRkaW5nOi40cmVtO2N1cnNvcjpwb2ludGVyfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmd7d2lkdGg6OTBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nOmhvdmVye2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt0cmFuc2l0aW9uOi4ycyBlYXNlfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnR7d2lkdGg6OTBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250OmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250OmhvdmVye2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt0cmFuc2l0aW9uOi4ycyBlYXNlfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZXt3aWR0aDo1MHB4fUBzdXBwb3J0cyBub3QgKC1tb3otYXBwZWFyYW5jZTpub25lKXsuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIG9wdGdyb3Vwe2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNDtwYWRkaW5nOjVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIG9wdGlvbntib3JkZXI6MXB4IHNvbGlkO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5kZWZhdWx0e2ZvbnQtc2l6ZToxNnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmgxe2ZvbnQtc2l6ZToyNHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmgye2ZvbnQtc2l6ZToyMHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmgze2ZvbnQtc2l6ZToxNnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmg0e2ZvbnQtc2l6ZToxNXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmg1e2ZvbnQtc2l6ZToxNHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmg2e2ZvbnQtc2l6ZToxM3B4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmRpdiwuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5wcmV7Zm9udC1zaXplOjEycHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udCBvcHRncm91cHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7cGFkZGluZzo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udCBvcHRpb257Ym9yZGVyOjFweCBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIG9wdGdyb3Vwe2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNDtwYWRkaW5nOjVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgb3B0aW9ue2JvcmRlcjoxcHggc29saWQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTF7Zm9udC1zaXplOjEwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplMntmb250LXNpemU6MTJweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemUze2ZvbnQtc2l6ZToxNHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTR7Zm9udC1zaXplOjE2cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplNXtmb250LXNpemU6MThweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU2e2ZvbnQtc2l6ZToyMHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTd7Zm9udC1zaXplOjI0cHh9fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZTpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplOmhvdmVye2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtY29sb3I6I2YxZjFmMTt0cmFuc2l0aW9uOi4ycyBlYXNlfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuY29sb3ItbGFiZWx7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXJ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5iYWNrZ3JvdW5ke2ZvbnQtc2l6ZTpzbWFsbGVyO2JhY2tncm91bmQ6IzFiMWIxYjtjb2xvcjojZmZmO3BhZGRpbmc6M3B4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuZm9yZWdyb3VuZCA6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcIlwiO2xlZnQ6LTFweDt0b3A6YXV0bztib3R0b206LTNweDtyaWdodDphdXRvO3dpZHRoOjE1cHg7aGVpZ2h0OjJweDt6LWluZGV4OjA7YmFja2dyb3VuZDojMWIxYjFifWBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQge1xyXG4gIGlkID0gJyc7XHJcbiAgaHRtbE1vZGUgPSBmYWxzZTtcclxuICBzaG93VG9vbGJhciA9IHRydWU7XHJcblxyXG4gIGJsb2NrID0gJ2RlZmF1bHQnO1xyXG4gIGRlZmF1bHRGb250SWQ7XHJcbiAgZm9udElkID0gMDtcclxuICBmb250U2l6ZSA9ICc1JztcclxuICBmb250czogRm9udFtdO1xyXG5cclxuICBjdXN0b21DbGFzc0lkID0gLTE7XHJcbiAgY3VzdG9tQ2xhc3NlczogQ3VzdG9tQ2xhc3NbXTtcclxuXHJcbiAgdGFnTWFwID0ge1xyXG4gICAgQkxPQ0tRVU9URTogXCJpbmRlbnRcIixcclxuICAgIEE6IFwibGlua1wiXHJcbiAgfTtcclxuXHJcbiAgc2VsZWN0ID0gW1wiSDFcIiwgXCJIMlwiLCBcIkgzXCIsIFwiSDRcIiwgXCJINVwiLCBcIkg2XCIsIFwiUFwiLCBcIlBSRVwiLCBcIkRJVlwiXTtcclxuXHJcbiAgYnV0dG9ucyA9IFtcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1bmRlcmxpbmVcIiwgXCJzdHJpa2VUaHJvdWdoXCIsIFwic3Vic2NyaXB0XCIsIFwic3VwZXJzY3JpcHRcIiwgXCJqdXN0aWZ5TGVmdFwiLCBcImp1c3RpZnlDZW50ZXJcIixcclxuICAgIFwianVzdGlmeVJpZ2h0XCIsIFwianVzdGlmeUZ1bGxcIiwgXCJpbmRlbnRcIiwgXCJvdXRkZW50XCIsIFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiLCBcImluc2VydE9yZGVyZWRMaXN0XCIsIFwibGlua1wiXTtcclxuXHJcbiAgQE91dHB1dCgpIGV4ZWN1dGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIG15SW5wdXRGaWxlOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZWRpdG9yU2VydmljZTogQW5ndWxhckVkaXRvclNlcnZpY2UsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xyXG4gICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRvb2xiYXIgYnV0dG9uc1xyXG4gICAqL1xyXG4gIHRyaWdnZXJDb21tYW5kKGNvbW1hbmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoY29tbWFuZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBoaWdobGlnaHQgZWRpdG9yIGJ1dHRvbnMgd2hlbiBjdXJzb3IgbW92ZWQgb3IgcG9zaXRpb25pbmdcclxuICAgKi9cclxuICB0cmlnZ2VyQnV0dG9ucygpIHtcclxuICAgIGlmICghdGhpcy5zaG93VG9vbGJhcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChlID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoZSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRCeUlkID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSArICctJyArIHRoaXMuaWQpO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudEJ5SWQsIFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRCeUlkLCBcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0cmlnZ2VyIGhpZ2hsaWdodCBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZyBpbiBibG9ja1xyXG4gICAqL1xyXG4gIHRyaWdnZXJCbG9ja3Mobm9kZXM6IE5vZGVbXSkge1xyXG4gICAgaWYgKCF0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3QuZm9yRWFjaCh5ID0+IHtcclxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLmZpbmQoeCA9PiB4Lm5vZGVOYW1lID09PSB5KTtcclxuICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiB5ID09PSBub2RlLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5ibG9jayA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5ibG9jayA9ICdkZWZhdWx0JztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm91bmQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmZvbnRzKSB7XHJcbiAgICAgIHRoaXMuZm9udHMuZm9yRWFjaCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZCh4ID0+IHtcclxuICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgSFRNTEZvbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4LmZhY2UgPT09IHkubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udElkID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5mb250SWQgPSB0aGlzLmRlZmF1bHRGb250SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3Nlcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzZXMuZm9yRWFjaCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZCh4ID0+IHtcclxuICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4geC5jbGFzc05hbWUgPT09IHkuY2xhc3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUNsYXNzSWQgPSBpbmRleDtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmN1c3RvbUNsYXNzSWQgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMudGFnTWFwKS5tYXAoZSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRCeUlkID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YWdNYXBbZV0gKyAnLScgKyB0aGlzLmlkKTtcclxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLmZpbmQoeCA9PiB4Lm5vZGVOYW1lID09PSBlKTtcclxuICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiBlID09PSBub2RlLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudEJ5SWQsIFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRCeUlkLCBcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbnNlcnQgVVJMIGxpbmtcclxuICAgKi9cclxuICBpbnNlcnRVcmwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBwcm9tcHQoXCJJbnNlcnQgVVJMIGxpbmtcIiwgJ2h0dHA6XFwvXFwvJyk7XHJcbiAgICBpZiAodXJsICYmIHVybCAhPT0gJycgJiYgdXJsICE9PSAnaHR0cDovLycpIHtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmNyZWF0ZUxpbmsodXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBpbnNlcnQgY29sb3IgKi9cclxuICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2UuaW5zZXJ0Q29sb3IoY29sb3IsIHdoZXJlKTtcclxuICAgIHRoaXMuZXhlY3V0ZS5lbWl0KFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGZvbnQgTmFtZS9mYW1pbHlcclxuICAgKiBAcGFyYW0gZm9udElkIG51bWJlclxyXG4gICAqL1xyXG4gIHNldEZvbnROYW1lKGZvbnRJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2V0Rm9udE5hbWUodGhpcy5mb250c1tmb250SWRdLm5hbWUpO1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgZm9udCBTaXplXHJcbiAgICogQHBhcmFtIGZvbnRTaXplIHN0cmluZ1xyXG4gICAqICAqL1xyXG4gIHNldEZvbnRTaXplKGZvbnRTaXplOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdG9yU2VydmljZS5zZXRGb250U2l6ZShmb250U2l6ZSk7XHJcbiAgICB0aGlzLmV4ZWN1dGUuZW1pdChcIlwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZSBlZGl0b3IgbW9kZSAoV1lTSVdZRyBvciBTT1VSQ0UpXHJcbiAgICogQHBhcmFtIG0gYm9vbGVhblxyXG4gICAqL1xyXG4gIHNldEVkaXRvck1vZGUobTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdG9nZ2xlRWRpdG9yTW9kZUJ1dHRvbiA9IHRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlRWRpdG9yTW9kZVwiICsgJy0nICsgdGhpcy5pZCk7XHJcbiAgICBpZiAobSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0b2dnbGVFZGl0b3JNb2RlQnV0dG9uLCBcImFjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvZ2dsZUVkaXRvck1vZGVCdXR0b24sIFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5odG1sTW9kZSA9IG07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWQgaW1hZ2Ugd2hlbiBmaWxlIGlzIHNlbGVjdGVkXHJcbiAgICovXHJcbiAgb25GaWxlQ2hhbmdlZChldmVudCkge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgaWYgKGZpbGUudHlwZS5pbmNsdWRlcyhcImltYWdlL1wiKSkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yU2VydmljZS51cGxvYWRJbWFnZShmaWxlKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvclNlcnZpY2UuaW5zZXJ0SW1hZ2UoZS5ib2R5LmltYWdlVXJsKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlUmVzZXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgSW5wdXRcclxuICAgKi9cclxuICBmaWxlUmVzZXQoKSB7XHJcbiAgICB0aGlzLm15SW5wdXRGaWxlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGN1c3RvbSBjbGFzc1xyXG4gICAqL1xyXG4gIHNldEN1c3RvbUNsYXNzKGNsYXNzSWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmNyZWF0ZUN1c3RvbUNsYXNzKHRoaXMuY3VzdG9tQ2xhc3Nlc1tjbGFzc0lkXSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvckNvbmZpZywgYW5ndWxhckVkaXRvckNvbmZpZ30gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnR9IGZyb20gXCIuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvclNlcnZpY2V9IGZyb20gXCIuL2FuZ3VsYXItZWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IChmb2N1cyk9XCJvbkVkaXRvckZvY3VzKClcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yXCIgaWQ9XCJhbmd1bGFyRWRpdG9yXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy53aWR0aFwiXHJcbiAgICAgW3N0eWxlLm1pbldpZHRoXT1cImNvbmZpZy5taW5XaWR0aFwiPlxyXG4gIDxhbmd1bGFyLWVkaXRvci10b29sYmFyICNlZGl0b3JUb29sYmFyIChleGVjdXRlKT1cImV4ZWN1dGVDb21tYW5kKCRldmVudClcIj48L2FuZ3VsYXItZWRpdG9yLXRvb2xiYXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci13cmFwcGVyXCIgI2VkaXRvcldyYXBwZXI+XHJcbiAgICA8ZGl2ICNlZGl0b3IgaWQ9XCJlZGl0b3JcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRleHRhcmVhXCIgW2F0dHIuY29udGVudGVkaXRhYmxlXT1cImNvbmZpZy5lZGl0YWJsZVwiXHJcbiAgICAgICAgIFthdHRyLnRyYW5zbGF0ZV09XCJjb25maWcudHJhbnNsYXRlXCJcclxuICAgICAgICAgW2F0dHIuc3BlbGxjaGVja109XCJjb25maWcuc3BlbGxjaGVja1wiIFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLmhlaWdodFwiIFtzdHlsZS5taW5IZWlnaHRdPVwiY29uZmlnLm1pbkhlaWdodFwiIFtzdHlsZS5tYXhIZWlnaHRdPVwiY29uZmlnLm1heEhlaWdodFwiXHJcbiAgICAgICAgIChpbnB1dCk9XCJvbkNvbnRlbnRDaGFuZ2UoJGV2ZW50LnRhcmdldC5pbm5lckhUTUwpXCIgKGZvY3VzKT1cIm9uVGV4dEFyZWFGb2N1cygpXCIgKGJsdXIpPVwib25UZXh0QXJlYUJsdXIoJGV2ZW50KVwiIChjbGljayk9XCJleGVjKClcIiAoa2V5dXApPVwiZXhlYygpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItcGxhY2Vob2xkZXJcIj57eyBwbGFjZWhvbGRlciB8fCBjb25maWdbJ3BsYWNlaG9sZGVyJ10gfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxuICovQGZvbnQtZmFjZXtmb250LWZhbWlseTpGb250QXdlc29tZTtzcmM6dXJsKGh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjApO3NyYzp1cmwoaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC43LjApIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjApIGZvcm1hdChcIndvZmYyXCIpLHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMCkgZm9ybWF0KFwid29mZlwiKSx1cmwoaHR0cHM6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjcuMCkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKGh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyKSBmb3JtYXQoXCJzdmdcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5mYXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250OjE0cHgvMSBGb250QXdlc29tZTtmb250LXNpemU6aW5oZXJpdDt0ZXh0LXJlbmRlcmluZzphdXRvOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5mYS1sZ3tmb250LXNpemU6MS4zMzMzM2VtO2xpbmUtaGVpZ2h0Oi43NWVtO3ZlcnRpY2FsLWFsaWduOi0xNSV9LmZhLTJ4e2ZvbnQtc2l6ZToyZW19LmZhLTN4e2ZvbnQtc2l6ZTozZW19LmZhLTR4e2ZvbnQtc2l6ZTo0ZW19LmZhLTV4e2ZvbnQtc2l6ZTo1ZW19LmZhLWZ3e3dpZHRoOjEuMjg1NzFlbTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtdWx7cGFkZGluZy1sZWZ0OjA7bWFyZ2luLWxlZnQ6Mi4xNDI4NmVtO2xpc3Qtc3R5bGUtdHlwZTpub25lfS5mYS11bD5saXtwb3NpdGlvbjpyZWxhdGl2ZX0uZmEtbGl7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMi4xNDI4NmVtO3dpZHRoOjIuMTQyODZlbTt0b3A6LjE0Mjg2ZW07dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLWxpLmZhLWxne2xlZnQ6LTEuODU3MTRlbX0uZmEtYm9yZGVye3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbTtib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW19LmZhLXB1bGwtbGVmdHtmbG9hdDpsZWZ0fS5mYS1wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0fS5mYS5mYS1wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0Oi4zZW19LmZhLmZhLXB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6LjNlbX0ucHVsbC1yaWdodHtmbG9hdDpyaWdodH0ucHVsbC1sZWZ0e2Zsb2F0OmxlZnR9LmZhLnB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6LjNlbX0uZmEucHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtfS5mYS1zcGluey13ZWJraXQtYW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBmYS1zcGluO2FuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgZmEtc3Bpbn0uZmEtcHVsc2V7LXdlYmtpdC1hbmltYXRpb246MXMgc3RlcHMoOCkgaW5maW5pdGUgZmEtc3BpbjthbmltYXRpb246MXMgc3RlcHMoOCkgaW5maW5pdGUgZmEtc3Bpbn1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBmYS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX0uZmEtcm90YXRlLTkwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmZhLXJvdGF0ZS0xODB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5mYS1yb3RhdGUtMjcwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uZmEtZmxpcC1ob3Jpem9udGFsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwxKX0uZmEtZmxpcC12ZXJ0aWNhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwtMSl9OnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCw6cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCw6cm9vdCAuZmEtcm90YXRlLTE4MCw6cm9vdCAuZmEtcm90YXRlLTI3MCw6cm9vdCAuZmEtcm90YXRlLTkwey13ZWJraXQtZmlsdGVyOm5vbmU7ZmlsdGVyOm5vbmV9LmZhLXN0YWNre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2xpbmUtaGVpZ2h0OjJlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmZhLXN0YWNrLTF4LC5mYS1zdGFjay0yeHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtc3RhY2stMXh7bGluZS1oZWlnaHQ6aW5oZXJpdH0uZmEtc3RhY2stMnh7Zm9udC1zaXplOjJlbX0uZmEtaW52ZXJzZXtjb2xvcjojZmZmfS5mYS1nbGFzczpiZWZvcmV7Y29udGVudDpcIsOvwoDCgFwifS5mYS1tdXNpYzpiZWZvcmV7Y29udGVudDpcIsOvwoDCgVwifS5mYS1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoJcIn0uZmEtZW52ZWxvcGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCg1wifS5mYS1oZWFydDpiZWZvcmV7Y29udGVudDpcIsOvwoDChFwifS5mYS1zdGFyOmJlZm9yZXtjb250ZW50Olwiw6/CgMKFXCJ9LmZhLXN0YXItbzpiZWZvcmV7Y29udGVudDpcIsOvwoDChlwifS5mYS11c2VyOmJlZm9yZXtjb250ZW50Olwiw6/CgMKHXCJ9LmZhLWZpbG06YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwohcIn0uZmEtdGgtbGFyZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwolcIn0uZmEtdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwopcIn0uZmEtdGgtbGlzdDpiZWZvcmV7Y29udGVudDpcIsOvwoDCi1wifS5mYS1jaGVjazpiZWZvcmV7Y29udGVudDpcIsOvwoDCjFwifS5mYS1jbG9zZTpiZWZvcmUsLmZhLXJlbW92ZTpiZWZvcmUsLmZhLXRpbWVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKNXCJ9LmZhLXNlYXJjaC1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKOXCJ9LmZhLXNlYXJjaC1taW51czpiZWZvcmV7Y29udGVudDpcIsOvwoDCkFwifS5mYS1wb3dlci1vZmY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpFcIn0uZmEtc2lnbmFsOmJlZm9yZXtjb250ZW50Olwiw6/CgMKSXCJ9LmZhLWNvZzpiZWZvcmUsLmZhLWdlYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpNcIn0uZmEtdHJhc2gtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDClFwifS5mYS1ob21lOmJlZm9yZXtjb250ZW50Olwiw6/CgMKVXCJ9LmZhLWZpbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCllwifS5mYS1jbG9jay1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKXXCJ9LmZhLXJvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwphcIn0uZmEtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwplcIn0uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoDCmlwifS5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmV7Y29udGVudDpcIsOvwoDCm1wifS5mYS1pbmJveDpiZWZvcmV7Y29udGVudDpcIsOvwoDCnFwifS5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKdXCJ9LmZhLXJlcGVhdDpiZWZvcmUsLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoDCnlwifS5mYS1yZWZyZXNoOmJlZm9yZXtjb250ZW50Olwiw6/CgMKhXCJ9LmZhLWxpc3QtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CgMKiXCJ9LmZhLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqNcIn0uZmEtZmxhZzpiZWZvcmV7Y29udGVudDpcIsOvwoDCpFwifS5mYS1oZWFkcGhvbmVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKlXCJ9LmZhLXZvbHVtZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqZcIn0uZmEtdm9sdW1lLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqdcIn0uZmEtdm9sdW1lLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgMKoXCJ9LmZhLXFyY29kZTpiZWZvcmV7Y29udGVudDpcIsOvwoDCqVwifS5mYS1iYXJjb2RlOmJlZm9yZXtjb250ZW50Olwiw6/CgMKqXCJ9LmZhLXRhZzpiZWZvcmV7Y29udGVudDpcIsOvwoDCq1wifS5mYS10YWdzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKsXCJ9LmZhLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq1cIn0uZmEtYm9va21hcms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq5cIn0uZmEtcHJpbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq9cIn0uZmEtY2FtZXJhOmJlZm9yZXtjb250ZW50Olwiw6/CgMKwXCJ9LmZhLWZvbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrFcIn0uZmEtYm9sZDpiZWZvcmV7Y29udGVudDpcIsOvwoDCslwifS5mYS1pdGFsaWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrNcIn0uZmEtdGV4dC1oZWlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrRcIn0uZmEtdGV4dC13aWR0aDpiZWZvcmV7Y29udGVudDpcIsOvwoDCtVwifS5mYS1hbGlnbi1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgMK2XCJ9LmZhLWFsaWduLWNlbnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoDCt1wifS5mYS1hbGlnbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoDCuFwifS5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZXtjb250ZW50Olwiw6/CgMK5XCJ9LmZhLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrpcIn0uZmEtZGVkZW50OmJlZm9yZSwuZmEtb3V0ZGVudDpiZWZvcmV7Y29udGVudDpcIsOvwoDCu1wifS5mYS1pbmRlbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrxcIn0uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZXtjb250ZW50Olwiw6/CgMK9XCJ9LmZhLWltYWdlOmJlZm9yZSwuZmEtcGhvdG86YmVmb3JlLC5mYS1waWN0dXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwr5cIn0uZmEtcGVuY2lsOmJlZm9yZXtjb250ZW50Olwiw6/CgcKAXCJ9LmZhLW1hcC1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoFcIn0uZmEtYWRqdXN0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKCXCJ9LmZhLXRpbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoNcIn0uZmEtZWRpdDpiZWZvcmUsLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChFwifS5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChVwifS5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChlwifS5mYS1hcnJvd3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwodcIn0uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCiFwifS5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKJXCJ9LmZhLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKKXCJ9LmZhLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwotcIn0uZmEtcGF1c2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoxcIn0uZmEtc3RvcDpiZWZvcmV7Y29udGVudDpcIsOvwoHCjVwifS5mYS1mb3J3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKOXCJ9LmZhLWZhc3QtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCkFwifS5mYS1zdGVwLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpFcIn0uZmEtZWplY3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpJcIn0uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKTXCJ9LmZhLWNoZXZyb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpRcIn0uZmEtcGx1cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpVcIn0uZmEtbWludXMtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKWXCJ9LmZhLXRpbWVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCl1wifS5mYS1jaGVjay1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwphcIn0uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKZXCJ9LmZhLWluZm8tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKaXCJ9LmZhLWNyb3NzaGFpcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwptcIn0uZmEtdGltZXMtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpxcIn0uZmEtY2hlY2stY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwp1cIn0uZmEtYmFuOmJlZm9yZXtjb250ZW50Olwiw6/CgcKeXCJ9LmZhLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqBcIn0uZmEtYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqFcIn0uZmEtYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqJcIn0uZmEtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoHCo1wifS5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLC5mYS1zaGFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCpFwifS5mYS1leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqVcIn0uZmEtY29tcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqZcIn0uZmEtcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwoHCp1wifS5mYS1taW51czpiZWZvcmV7Y29udGVudDpcIsOvwoHCqFwifS5mYS1hc3RlcmlzazpiZWZvcmV7Y29udGVudDpcIsOvwoHCqVwifS5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqpcIn0uZmEtZ2lmdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCq1wifS5mYS1sZWFmOmJlZm9yZXtjb250ZW50Olwiw6/CgcKsXCJ9LmZhLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwq1cIn0uZmEtZXllOmJlZm9yZXtjb250ZW50Olwiw6/CgcKuXCJ9LmZhLWV5ZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwoHCsFwifS5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUsLmZhLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrFcIn0uZmEtcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrJcIn0uZmEtY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrNcIn0uZmEtcmFuZG9tOmJlZm9yZXtjb250ZW50Olwiw6/CgcK0XCJ9LmZhLWNvbW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrVcIn0uZmEtbWFnbmV0OmJlZm9yZXtjb250ZW50Olwiw6/CgcK2XCJ9LmZhLWNoZXZyb24tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrdcIn0uZmEtY2hldnJvbi1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgcK4XCJ9LmZhLXJldHdlZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrlcIn0uZmEtc2hvcHBpbmctY2FydDpiZWZvcmV7Y29udGVudDpcIsOvwoHCulwifS5mYS1mb2xkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrtcIn0uZmEtZm9sZGVyLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrxcIn0uZmEtYXJyb3dzLXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwr1cIn0uZmEtYXJyb3dzLWg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwr5cIn0uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLC5mYS1iYXItY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoBcIn0uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoFcIn0uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKCXCJ9LmZhLWNhbWVyYS1yZXRybzpiZWZvcmV7Y29udGVudDpcIsOvwoLCg1wifS5mYS1rZXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoRcIn0uZmEtY29nczpiZWZvcmUsLmZhLWdlYXJzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKFXCJ9LmZhLWNvbW1lbnRzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKGXCJ9LmZhLXRodW1icy1vLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgsKHXCJ9LmZhLXRodW1icy1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwohcIn0uZmEtc3Rhci1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/CgsKJXCJ9LmZhLWhlYXJ0LW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwopcIn0uZmEtc2lnbi1vdXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwotcIn0uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKMXCJ9LmZhLXRodW1iLXRhY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwo1cIn0uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmV7Y29udGVudDpcIsOvwoLCjlwifS5mYS1zaWduLWluOmJlZm9yZXtjb250ZW50Olwiw6/CgsKQXCJ9LmZhLXRyb3BoeTpiZWZvcmV7Y29udGVudDpcIsOvwoLCkVwifS5mYS1naXRodWItc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKSXCJ9LmZhLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoLCk1wifS5mYS1sZW1vbi1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKUXCJ9LmZhLXBob25lOmJlZm9yZXtjb250ZW50Olwiw6/CgsKVXCJ9LmZhLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKWXCJ9LmZhLWJvb2ttYXJrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpdcIn0uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKYXCJ9LmZhLXR3aXR0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwplcIn0uZmEtZmFjZWJvb2stZjpiZWZvcmUsLmZhLWZhY2Vib29rOmJlZm9yZXtjb250ZW50Olwiw6/CgsKaXCJ9LmZhLWdpdGh1YjpiZWZvcmV7Y29udGVudDpcIsOvwoLCm1wifS5mYS11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpxcIn0uZmEtY3JlZGl0LWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwp1cIn0uZmEtZmVlZDpiZWZvcmUsLmZhLXJzczpiZWZvcmV7Y29udGVudDpcIsOvwoLCnlwifS5mYS1oZGQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoLCoFwifS5mYS1idWxsaG9ybjpiZWZvcmV7Y29udGVudDpcIsOvwoLCoVwifS5mYS1iZWxsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KzXCJ9LmZhLWNlcnRpZmljYXRlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKjXCJ9LmZhLWhhbmQtby1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoLCpFwifS5mYS1oYW5kLW8tbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoLCpVwifS5mYS1oYW5kLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqZcIn0uZmEtaGFuZC1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqdcIn0uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqhcIn0uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKpXCJ9LmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoLCqlwifS5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoLCq1wifS5mYS1nbG9iZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCrFwifS5mYS13cmVuY2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwq1cIn0uZmEtdGFza3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwq5cIn0uZmEtZmlsdGVyOmJlZm9yZXtjb250ZW50Olwiw6/CgsKwXCJ9LmZhLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCsVwifS5mYS1hcnJvd3MtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKyXCJ9LmZhLWdyb3VwOmJlZm9yZSwuZmEtdXNlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoBcIn0uZmEtY2hhaW46YmVmb3JlLC5mYS1saW5rOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KBXCJ9LmZhLWNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KCXCJ9LmZhLWZsYXNrOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KDXCJ9LmZhLWN1dDpiZWZvcmUsLmZhLXNjaXNzb3JzOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KEXCJ9LmZhLWNvcHk6YmVmb3JlLC5mYS1maWxlcy1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KFXCJ9LmZhLXBhcGVyY2xpcDpiZWZvcmV7Y29udGVudDpcIsOvwoPChlwifS5mYS1mbG9wcHktbzpiZWZvcmUsLmZhLXNhdmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwodcIn0uZmEtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KIXCJ9LmZhLWJhcnM6YmVmb3JlLC5mYS1uYXZpY29uOmJlZm9yZSwuZmEtcmVvcmRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoPCiVwifS5mYS1saXN0LXVsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KKXCJ9LmZhLWxpc3Qtb2w6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwotcIn0uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmV7Y29udGVudDpcIsOvwoPCjFwifS5mYS11bmRlcmxpbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwo1cIn0uZmEtdGFibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwo5cIn0uZmEtbWFnaWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpBcIn0uZmEtdHJ1Y2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpFcIn0uZmEtcGludGVyZXN0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KSXCJ9LmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpNcIn0uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KUXCJ9LmZhLWdvb2dsZS1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KVXCJ9LmZhLW1vbmV5OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KWXCJ9LmZhLWNhcmV0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpdcIn0uZmEtY2FyZXQtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwphcIn0uZmEtY2FyZXQtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoPCmVwifS5mYS1jYXJldC1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoPCmlwifS5mYS1jb2x1bW5zOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KbXCJ9LmZhLXNvcnQ6YmVmb3JlLC5mYS11bnNvcnRlZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCnFwifS5mYS1zb3J0LWRlc2M6YmVmb3JlLC5mYS1zb3J0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwp1cIn0uZmEtc29ydC1hc2M6YmVmb3JlLC5mYS1zb3J0LXVwOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KeXCJ9LmZhLWVudmVsb3BlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KgXCJ9LmZhLWxpbmtlZGluOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KhXCJ9LmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSwuZmEtdW5kbzpiZWZvcmV7Y29udGVudDpcIsOvwoPColwifS5mYS1nYXZlbDpiZWZvcmUsLmZhLWxlZ2FsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KjXCJ9LmZhLWRhc2hib2FyZDpiZWZvcmUsLmZhLXRhY2hvbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqRcIn0uZmEtY29tbWVudC1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KlXCJ9LmZhLWNvbW1lbnRzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqZcIn0uZmEtYm9sdDpiZWZvcmUsLmZhLWZsYXNoOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KnXCJ9LmZhLXNpdGVtYXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqhcIn0uZmEtdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqlcIn0uZmEtY2xpcGJvYXJkOmJlZm9yZSwuZmEtcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqpcIn0uZmEtbGlnaHRidWxiLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqtcIn0uZmEtZXhjaGFuZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqxcIn0uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwq1cIn0uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KuXCJ9LmZhLXVzZXItbWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrBcIn0uZmEtc3RldGhvc2NvcGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrFcIn0uZmEtc3VpdGNhc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrJcIn0uZmEtYmVsbC1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKiXCJ9LmZhLWNvZmZlZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCtFwifS5mYS1jdXRsZXJ5OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K1XCJ9LmZhLWZpbGUtdGV4dC1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K2XCJ9LmZhLWJ1aWxkaW5nLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrdcIn0uZmEtaG9zcGl0YWwtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCuFwifS5mYS1hbWJ1bGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrlcIn0uZmEtbWVka2l0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K6XCJ9LmZhLWZpZ2h0ZXItamV0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K7XCJ9LmZhLWJlZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrxcIn0uZmEtaC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwr1cIn0uZmEtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwr5cIn0uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoBcIn0uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKBXCJ9LmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoTCglwifS5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoTCg1wifS5mYS1hbmdsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKEXCJ9LmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKFXCJ9LmZhLWFuZ2xlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChMKGXCJ9LmZhLWFuZ2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwodcIn0uZmEtZGVza3RvcDpiZWZvcmV7Y29udGVudDpcIsOvwoTCiFwifS5mYS1sYXB0b3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwolcIn0uZmEtdGFibGV0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKKXCJ9LmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsLmZhLW1vYmlsZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCi1wifS5mYS1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCjFwifS5mYS1xdW90ZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKNXCJ9LmZhLXF1b3RlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKOXCJ9LmZhLXNwaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpBcIn0uZmEtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKRXCJ9LmZhLW1haWwtcmVwbHk6YmVmb3JlLC5mYS1yZXBseTpiZWZvcmV7Y29udGVudDpcIsOvwoTCklwifS5mYS1naXRodWItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKTXCJ9LmZhLWZvbGRlci1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKUXCJ9LmZhLWZvbGRlci1vcGVuLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpVcIn0uZmEtc21pbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCmFwifS5mYS1mcm93bi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKZXCJ9LmZhLW1laC1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKaXCJ9LmZhLWdhbWVwYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwptcIn0uZmEta2V5Ym9hcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCnFwifS5mYS1mbGFnLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwp1cIn0uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwp5cIn0uZmEtdGVybWluYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqBcIn0uZmEtY29kZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCoVwifS5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsLmZhLXJlcGx5LWFsbDpiZWZvcmV7Y29udGVudDpcIsOvwoTColwifS5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLC5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsLmZhLXN0YXItaGFsZi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKjXCJ9LmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZXtjb250ZW50Olwiw6/ChMKkXCJ9LmZhLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqVcIn0uZmEtY29kZS1mb3JrOmJlZm9yZXtjb250ZW50Olwiw6/ChMKmXCJ9LmZhLWNoYWluLWJyb2tlbjpiZWZvcmUsLmZhLXVubGluazpiZWZvcmV7Y29udGVudDpcIsOvwoTCp1wifS5mYS1xdWVzdGlvbjpiZWZvcmV7Y29udGVudDpcIsOvwoTCqFwifS5mYS1pbmZvOmJlZm9yZXtjb250ZW50Olwiw6/ChMKpXCJ9LmZhLWV4Y2xhbWF0aW9uOmJlZm9yZXtjb250ZW50Olwiw6/ChMKqXCJ9LmZhLXN1cGVyc2NyaXB0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKrXCJ9LmZhLXN1YnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCrFwifS5mYS1lcmFzZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwq1cIn0uZmEtcHV6emxlLXBpZWNlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKuXCJ9LmZhLW1pY3JvcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrBcIn0uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwoTCsVwifS5mYS1zaGllbGQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrJcIn0uZmEtY2FsZW5kYXItbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCs1wifS5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCtFwifS5mYS1yb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrVcIn0uZmEtbWF4Y2RuOmJlZm9yZXtjb250ZW50Olwiw6/ChMK2XCJ9LmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrdcIn0uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrhcIn0uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrlcIn0uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoTCulwifS5mYS1odG1sNTpiZWZvcmV7Y29udGVudDpcIsOvwoTCu1wifS5mYS1jc3MzOmJlZm9yZXtjb250ZW50Olwiw6/ChMK8XCJ9LmZhLWFuY2hvcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCvVwifS5mYS11bmxvY2stYWx0OmJlZm9yZXtjb250ZW50Olwiw6/ChMK+XCJ9LmZhLWJ1bGxzZXllOmJlZm9yZXtjb250ZW50Olwiw6/ChcKAXCJ9LmZhLWVsbGlwc2lzLWg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoFcIn0uZmEtZWxsaXBzaXMtdjpiZWZvcmV7Y29udGVudDpcIsOvwoXCglwifS5mYS1yc3Mtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKDXCJ9LmZhLXBsYXktY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKEXCJ9LmZhLXRpY2tldDpiZWZvcmV7Y29udGVudDpcIsOvwoXChVwifS5mYS1taW51cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoZcIn0uZmEtbWludXMtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwodcIn0uZmEtbGV2ZWwtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwohcIn0uZmEtbGV2ZWwtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCiVwifS5mYS1jaGVjay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwopcIn0uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCi1wifS5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCjFwifS5mYS1zaGFyZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwo1cIn0uZmEtY29tcGFzczpiZWZvcmV7Y29udGVudDpcIsOvwoXCjlwifS5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSwuZmEtdG9nZ2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpBcIn0uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlLC5mYS10b2dnbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpFcIn0uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlLC5mYS10b2dnbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpJcIn0uZmEtZXVyOmJlZm9yZSwuZmEtZXVybzpiZWZvcmV7Y29udGVudDpcIsOvwoXCk1wifS5mYS1nYnA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpRcIn0uZmEtZG9sbGFyOmJlZm9yZSwuZmEtdXNkOmJlZm9yZXtjb250ZW50Olwiw6/ChcKVXCJ9LmZhLWlucjpiZWZvcmUsLmZhLXJ1cGVlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKWXCJ9LmZhLWNueTpiZWZvcmUsLmZhLWpweTpiZWZvcmUsLmZhLXJtYjpiZWZvcmUsLmZhLXllbjpiZWZvcmV7Y29udGVudDpcIsOvwoXCl1wifS5mYS1yb3VibGU6YmVmb3JlLC5mYS1ydWI6YmVmb3JlLC5mYS1ydWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCmFwifS5mYS1rcnc6YmVmb3JlLC5mYS13b246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwplcIn0uZmEtYml0Y29pbjpiZWZvcmUsLmZhLWJ0YzpiZWZvcmV7Y29udGVudDpcIsOvwoXCmlwifS5mYS1maWxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKbXCJ9LmZhLWZpbGUtdGV4dDpiZWZvcmV7Y29udGVudDpcIsOvwoXCnFwifS5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCnVwifS5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwp5cIn0uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKgXCJ9LmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqFcIn0uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXColwifS5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCo1wifS5mYS10aHVtYnMtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqRcIn0uZmEtdGh1bWJzLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqVcIn0uZmEteW91dHViZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqZcIn0uZmEteW91dHViZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCp1wifS5mYS14aW5nOmJlZm9yZXtjb250ZW50Olwiw6/ChcKoXCJ9LmZhLXhpbmctc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKpXCJ9LmZhLXlvdXR1YmUtcGxheTpiZWZvcmV7Y29udGVudDpcIsOvwoXCqlwifS5mYS1kcm9wYm94OmJlZm9yZXtjb250ZW50Olwiw6/ChcKrXCJ9LmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZXtjb250ZW50Olwiw6/ChcKsXCJ9LmZhLWluc3RhZ3JhbTpiZWZvcmV7Y29udGVudDpcIsOvwoXCrVwifS5mYS1mbGlja3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwq5cIn0uZmEtYWRuOmJlZm9yZXtjb250ZW50Olwiw6/ChcKwXCJ9LmZhLWJpdGJ1Y2tldDpiZWZvcmV7Y29udGVudDpcIsOvwoXCsVwifS5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKyXCJ9LmZhLXR1bWJscjpiZWZvcmV7Y29udGVudDpcIsOvwoXCs1wifS5mYS10dW1ibHItc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK0XCJ9LmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCtVwifS5mYS1sb25nLWFycm93LXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChcK2XCJ9LmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoXCt1wifS5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChcK4XCJ9LmZhLWFwcGxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK5XCJ9LmZhLXdpbmRvd3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrpcIn0uZmEtYW5kcm9pZDpiZWZvcmV7Y29udGVudDpcIsOvwoXCu1wifS5mYS1saW51eDpiZWZvcmV7Y29udGVudDpcIsOvwoXCvFwifS5mYS1kcmliYmJsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCvVwifS5mYS1za3lwZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCvlwifS5mYS1mb3Vyc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKAXCJ9LmZhLXRyZWxsbzpiZWZvcmV7Y29udGVudDpcIsOvwobCgVwifS5mYS1mZW1hbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoJcIn0uZmEtbWFsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCg1wifS5mYS1naXR0aXA6YmVmb3JlLC5mYS1ncmF0aXBheTpiZWZvcmV7Y29udGVudDpcIsOvwobChFwifS5mYS1zdW4tbzpiZWZvcmV7Y29udGVudDpcIsOvwobChVwifS5mYS1tb29uLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoZcIn0uZmEtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcIsOvwobCh1wifS5mYS1idWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwohcIn0uZmEtdms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwolcIn0uZmEtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwopcIn0uZmEtcmVucmVuOmJlZm9yZXtjb250ZW50Olwiw6/ChsKLXCJ9LmZhLXBhZ2VsaW5lczpiZWZvcmV7Y29udGVudDpcIsOvwobCjFwifS5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcIsOvwobCjVwifS5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwobCjlwifS5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKQXCJ9LmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlLC5mYS10b2dnbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwobCkVwifS5mYS1kb3QtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpJcIn0uZmEtd2hlZWxjaGFpcjpiZWZvcmV7Y29udGVudDpcIsOvwobCk1wifS5mYS12aW1lby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpRcIn0uZmEtdHJ5OmJlZm9yZSwuZmEtdHVya2lzaC1saXJhOmJlZm9yZXtjb250ZW50Olwiw6/ChsKVXCJ9LmZhLXBsdXMtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpZcIn0uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCl1wifS5mYS1zbGFjazpiZWZvcmV7Y29udGVudDpcIsOvwobCmFwifS5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwplcIn0uZmEtd29yZHByZXNzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKaXCJ9LmZhLW9wZW5pZDpiZWZvcmV7Y29udGVudDpcIsOvwobCm1wifS5mYS1iYW5rOmJlZm9yZSwuZmEtaW5zdGl0dXRpb246YmVmb3JlLC5mYS11bml2ZXJzaXR5OmJlZm9yZXtjb250ZW50Olwiw6/ChsKcXCJ9LmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSwuZmEtbW9ydGFyLWJvYXJkOmJlZm9yZXtjb250ZW50Olwiw6/ChsKdXCJ9LmZhLXlhaG9vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKeXCJ9LmZhLWdvb2dsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCoFwifS5mYS1yZWRkaXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqFcIn0uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobColwifS5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqNcIn0uZmEtc3R1bWJsZXVwb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqRcIn0uZmEtZGVsaWNpb3VzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKlXCJ9LmZhLWRpZ2c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqZcIn0uZmEtcGllZC1waXBlci1wcDpiZWZvcmV7Y29udGVudDpcIsOvwobCp1wifS5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwobCqFwifS5mYS1kcnVwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqlcIn0uZmEtam9vbWxhOmJlZm9yZXtjb250ZW50Olwiw6/ChsKqXCJ9LmZhLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKrXCJ9LmZhLWZheDpiZWZvcmV7Y29udGVudDpcIsOvwobCrFwifS5mYS1idWlsZGluZzpiZWZvcmV7Y29udGVudDpcIsOvwobCrVwifS5mYS1jaGlsZDpiZWZvcmV7Y29udGVudDpcIsOvwobCrlwifS5mYS1wYXc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrBcIn0uZmEtc3Bvb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrFcIn0uZmEtY3ViZTpiZWZvcmV7Y29udGVudDpcIsOvwobCslwifS5mYS1jdWJlczpiZWZvcmV7Y29udGVudDpcIsOvwobCs1wifS5mYS1iZWhhbmNlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK0XCJ9LmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK1XCJ9LmZhLXN0ZWFtOmJlZm9yZXtjb250ZW50Olwiw6/ChsK2XCJ9LmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobCt1wifS5mYS1yZWN5Y2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK4XCJ9LmZhLWF1dG9tb2JpbGU6YmVmb3JlLC5mYS1jYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrlcIn0uZmEtY2FiOmJlZm9yZSwuZmEtdGF4aTpiZWZvcmV7Y29udGVudDpcIsOvwobCulwifS5mYS10cmVlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK7XCJ9LmZhLXNwb3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrxcIn0uZmEtZGV2aWFudGFydDpiZWZvcmV7Y29udGVudDpcIsOvwobCvVwifS5mYS1zb3VuZGNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/ChsK+XCJ9LmZhLWRhdGFiYXNlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KAXCJ9LmZhLWZpbGUtcGRmLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoFcIn0uZmEtZmlsZS13b3JkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoJcIn0uZmEtZmlsZS1leGNlbC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KDXCJ9LmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KEXCJ9LmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUsLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KFXCJ9LmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSwuZmEtZmlsZS16aXAtbzpiZWZvcmV7Y29udGVudDpcIsOvwofChlwifS5mYS1maWxlLWF1ZGlvLW86YmVmb3JlLC5mYS1maWxlLXNvdW5kLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwodcIn0uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSwuZmEtZmlsZS12aWRlby1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KIXCJ9LmZhLWZpbGUtY29kZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KJXCJ9LmZhLXZpbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwopcIn0uZmEtY29kZXBlbjpiZWZvcmV7Y29udGVudDpcIsOvwofCi1wifS5mYS1qc2ZpZGRsZTpiZWZvcmV7Y29udGVudDpcIsOvwofCjFwifS5mYS1saWZlLWJvdXk6YmVmb3JlLC5mYS1saWZlLWJ1b3k6YmVmb3JlLC5mYS1saWZlLXJpbmc6YmVmb3JlLC5mYS1saWZlLXNhdmVyOmJlZm9yZSwuZmEtc3VwcG9ydDpiZWZvcmV7Y29udGVudDpcIsOvwofCjVwifS5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmV7Y29udGVudDpcIsOvwofCjlwifS5mYS1yYTpiZWZvcmUsLmZhLXJlYmVsOmJlZm9yZSwuZmEtcmVzaXN0YW5jZTpiZWZvcmV7Y29udGVudDpcIsOvwofCkFwifS5mYS1lbXBpcmU6YmVmb3JlLC5mYS1nZTpiZWZvcmV7Y29udGVudDpcIsOvwofCkVwifS5mYS1naXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KSXCJ9LmZhLWdpdDpiZWZvcmV7Y29udGVudDpcIsOvwofCk1wifS5mYS1oYWNrZXItbmV3czpiZWZvcmUsLmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLC5mYS15Yy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpRcIn0uZmEtdGVuY2VudC13ZWlibzpiZWZvcmV7Y29udGVudDpcIsOvwofClVwifS5mYS1xcTpiZWZvcmV7Y29udGVudDpcIsOvwofCllwifS5mYS13ZWNoYXQ6YmVmb3JlLC5mYS13ZWl4aW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpdcIn0uZmEtcGFwZXItcGxhbmU6YmVmb3JlLC5mYS1zZW5kOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KYXCJ9LmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlLC5mYS1zZW5kLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwplcIn0uZmEtaGlzdG9yeTpiZWZvcmV7Y29udGVudDpcIsOvwofCmlwifS5mYS1jaXJjbGUtdGhpbjpiZWZvcmV7Y29udGVudDpcIsOvwofCm1wifS5mYS1oZWFkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpxcIn0uZmEtcGFyYWdyYXBoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KdXCJ9LmZhLXNsaWRlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwp5cIn0uZmEtc2hhcmUtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KgXCJ9LmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqFcIn0uZmEtYm9tYjpiZWZvcmV7Y29udGVudDpcIsOvwofColwifS5mYS1mdXRib2wtbzpiZWZvcmUsLmZhLXNvY2Nlci1iYWxsLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqNcIn0uZmEtdHR5OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KkXCJ9LmZhLWJpbm9jdWxhcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqVcIn0uZmEtcGx1ZzpiZWZvcmV7Y29udGVudDpcIsOvwofCplwifS5mYS1zbGlkZXNoYXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KnXCJ9LmZhLXR3aXRjaDpiZWZvcmV7Y29udGVudDpcIsOvwofCqFwifS5mYS15ZWxwOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KpXCJ9LmZhLW5ld3NwYXBlci1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KqXCJ9LmZhLXdpZmk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqtcIn0uZmEtY2FsY3VsYXRvcjpiZWZvcmV7Y29udGVudDpcIsOvwofCrFwifS5mYS1wYXlwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwq1cIn0uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmV7Y29udGVudDpcIsOvwofCrlwifS5mYS1jYy12aXNhOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KwXCJ9LmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrFcIn0uZmEtY2MtZGlzY292ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrJcIn0uZmEtY2MtYW1leDpiZWZvcmV7Y29udGVudDpcIsOvwofCs1wifS5mYS1jYy1wYXlwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrRcIn0uZmEtY2Mtc3RyaXBlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K1XCJ9LmZhLWJlbGwtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrZcIn0uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K3XCJ9LmZhLXRyYXNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K4XCJ9LmZhLWNvcHlyaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwofCuVwifS5mYS1hdDpiZWZvcmV7Y29udGVudDpcIsOvwofCulwifS5mYS1leWVkcm9wcGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K7XCJ9LmZhLXBhaW50LWJydXNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K8XCJ9LmZhLWJpcnRoZGF5LWNha2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwr1cIn0uZmEtYXJlYS1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwofCvlwifS5mYS1waWUtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoBcIn0uZmEtbGluZS1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwojCgVwifS5mYS1sYXN0Zm06YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoJcIn0uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwojCg1wifS5mYS10b2dnbGUtb2ZmOmJlZm9yZXtjb250ZW50Olwiw6/CiMKEXCJ9LmZhLXRvZ2dsZS1vbjpiZWZvcmV7Y29udGVudDpcIsOvwojChVwifS5mYS1iaWN5Y2xlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKGXCJ9LmZhLWJ1czpiZWZvcmV7Y29udGVudDpcIsOvwojCh1wifS5mYS1pb3hob3N0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKIXCJ9LmZhLWFuZ2VsbGlzdDpiZWZvcmV7Y29udGVudDpcIsOvwojCiVwifS5mYS1jYzpiZWZvcmV7Y29udGVudDpcIsOvwojCilwifS5mYS1pbHM6YmVmb3JlLC5mYS1zaGVrZWw6YmVmb3JlLC5mYS1zaGVxZWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwotcIn0uZmEtbWVhbnBhdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoxcIn0uZmEtYnV5c2VsbGFkczpiZWZvcmV7Y29udGVudDpcIsOvwojCjVwifS5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmV7Y29udGVudDpcIsOvwojCjlwifS5mYS1kYXNoY3ViZTpiZWZvcmV7Y29udGVudDpcIsOvwojCkFwifS5mYS1mb3J1bWJlZTpiZWZvcmV7Y29udGVudDpcIsOvwojCkVwifS5mYS1sZWFucHViOmJlZm9yZXtjb250ZW50Olwiw6/CiMKSXCJ9LmZhLXNlbGxzeTpiZWZvcmV7Y29udGVudDpcIsOvwojCk1wifS5mYS1zaGlydHNpbmJ1bGs6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpRcIn0uZmEtc2ltcGx5YnVpbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpVcIn0uZmEtc2t5YXRsYXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpZcIn0uZmEtY2FydC1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKXXCJ9LmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwojCmFwifS5mYS1kaWFtb25kOmJlZm9yZXtjb250ZW50Olwiw6/CiMKZXCJ9LmZhLXNoaXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwppcIn0uZmEtdXNlci1zZWNyZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwptcIn0uZmEtbW90b3JjeWNsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCnFwifS5mYS1zdHJlZXQtdmlldzpiZWZvcmV7Y29udGVudDpcIsOvwojCnVwifS5mYS1oZWFydGJlYXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwp5cIn0uZmEtdmVudXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqFcIn0uZmEtbWFyczpiZWZvcmV7Y29udGVudDpcIsOvwojColwifS5mYS1tZXJjdXJ5OmJlZm9yZXtjb250ZW50Olwiw6/CiMKjXCJ9LmZhLWludGVyc2V4OmJlZm9yZSwuZmEtdHJhbnNnZW5kZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqRcIn0uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKlXCJ9LmZhLXZlbnVzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCplwifS5mYS1tYXJzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCp1wifS5mYS12ZW51cy1tYXJzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKoXCJ9LmZhLW1hcnMtc3Ryb2tlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKpXCJ9LmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqpcIn0uZmEtbWFycy1zdHJva2UtaDpiZWZvcmV7Y29udGVudDpcIsOvwojCq1wifS5mYS1uZXV0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqxcIn0uZmEtZ2VuZGVybGVzczpiZWZvcmV7Y29udGVudDpcIsOvwojCrVwifS5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmV7Y29udGVudDpcIsOvwojCsFwifS5mYS1waW50ZXJlc3QtcDpiZWZvcmV7Y29udGVudDpcIsOvwojCsVwifS5mYS13aGF0c2FwcDpiZWZvcmV7Y29udGVudDpcIsOvwojCslwifS5mYS1zZXJ2ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrNcIn0uZmEtdXNlci1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMK0XCJ9LmZhLXVzZXItdGltZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrVcIn0uZmEtYmVkOmJlZm9yZSwuZmEtaG90ZWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrZcIn0uZmEtdmlhY29pbjpiZWZvcmV7Y29udGVudDpcIsOvwojCt1wifS5mYS10cmFpbjpiZWZvcmV7Y29udGVudDpcIsOvwojCuFwifS5mYS1zdWJ3YXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrlcIn0uZmEtbWVkaXVtOmJlZm9yZXtjb250ZW50Olwiw6/CiMK6XCJ9LmZhLXktY29tYmluYXRvcjpiZWZvcmUsLmZhLXljOmJlZm9yZXtjb250ZW50Olwiw6/CiMK7XCJ9LmZhLW9wdGluLW1vbnN0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrxcIn0uZmEtb3BlbmNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwr1cIn0uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZXtjb250ZW50Olwiw6/CiMK+XCJ9LmZhLWJhdHRlcnktNDpiZWZvcmUsLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUsLmZhLWJhdHRlcnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoBcIn0uZmEtYmF0dGVyeS0zOmJlZm9yZSwuZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcIsOvwonCgVwifS5mYS1iYXR0ZXJ5LTI6YmVmb3JlLC5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoJcIn0uZmEtYmF0dGVyeS0xOmJlZm9yZSwuZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZXtjb250ZW50Olwiw6/CicKDXCJ9LmZhLWJhdHRlcnktMDpiZWZvcmUsLmZhLWJhdHRlcnktZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoRcIn0uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwonChVwifS5mYS1pLWN1cnNvcjpiZWZvcmV7Y29udGVudDpcIsOvwonChlwifS5mYS1vYmplY3QtZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwodcIn0uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwohcIn0uZmEtc3RpY2t5LW5vdGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwolcIn0uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCilwifS5mYS1jYy1qY2I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwotcIn0uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoxcIn0uZmEtY2xvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwo1cIn0uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmV7Y29udGVudDpcIsOvwonCjlwifS5mYS1ob3VyZ2xhc3MtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCkFwifS5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmV7Y29udGVudDpcIsOvwonCkVwifS5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/CicKSXCJ9LmZhLWhvdXJnbGFzcy0zOmJlZm9yZSwuZmEtaG91cmdsYXNzLWVuZDpiZWZvcmV7Y29udGVudDpcIsOvwonCk1wifS5mYS1ob3VyZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpRcIn0uZmEtaGFuZC1ncmFiLW86YmVmb3JlLC5mYS1oYW5kLXJvY2stbzpiZWZvcmV7Y29udGVudDpcIsOvwonClVwifS5mYS1oYW5kLXBhcGVyLW86YmVmb3JlLC5mYS1oYW5kLXN0b3AtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCllwifS5mYS1oYW5kLXNjaXNzb3JzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpdcIn0uZmEtaGFuZC1saXphcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCmFwifS5mYS1oYW5kLXNwb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwplcIn0uZmEtaGFuZC1wb2ludGVyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwppcIn0uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKbXCJ9LmZhLXRyYWRlbWFyazpiZWZvcmV7Y29udGVudDpcIsOvwonCnFwifS5mYS1yZWdpc3RlcmVkOmJlZm9yZXtjb250ZW50Olwiw6/CicKdXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwp5cIn0uZmEtZ2c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqBcIn0uZmEtZ2ctY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CicKhXCJ9LmZhLXRyaXBhZHZpc29yOmJlZm9yZXtjb250ZW50Olwiw6/CicKiXCJ9LmZhLW9kbm9rbGFzc25pa2k6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqNcIn0uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqRcIn0uZmEtZ2V0LXBvY2tldDpiZWZvcmV7Y29udGVudDpcIsOvwonCpVwifS5mYS13aWtpcGVkaWEtdzpiZWZvcmV7Y29udGVudDpcIsOvwonCplwifS5mYS1zYWZhcmk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqdcIn0uZmEtY2hyb21lOmJlZm9yZXtjb250ZW50Olwiw6/CicKoXCJ9LmZhLWZpcmVmb3g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqlcIn0uZmEtb3BlcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqpcIn0uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqtcIn0uZmEtdGVsZXZpc2lvbjpiZWZvcmUsLmZhLXR2OmJlZm9yZXtjb250ZW50Olwiw6/CicKsXCJ9LmZhLWNvbnRhbzpiZWZvcmV7Y29udGVudDpcIsOvwonCrVwifS5mYS01MDBweDpiZWZvcmV7Y29udGVudDpcIsOvwonCrlwifS5mYS1hbWF6b246YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrBcIn0uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKxXCJ9LmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrJcIn0uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCs1wifS5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZXtjb250ZW50Olwiw6/CicK0XCJ9LmZhLWluZHVzdHJ5OmJlZm9yZXtjb250ZW50Olwiw6/CicK1XCJ9LmZhLW1hcC1waW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrZcIn0uZmEtbWFwLXNpZ25zOmJlZm9yZXtjb250ZW50Olwiw6/CicK3XCJ9LmZhLW1hcC1vOmJlZm9yZXtjb250ZW50Olwiw6/CicK4XCJ9LmZhLW1hcDpiZWZvcmV7Y29udGVudDpcIsOvwonCuVwifS5mYS1jb21tZW50aW5nOmJlZm9yZXtjb250ZW50Olwiw6/CicK6XCJ9LmZhLWNvbW1lbnRpbmctbzpiZWZvcmV7Y29udGVudDpcIsOvwonCu1wifS5mYS1ob3V6ejpiZWZvcmV7Y29udGVudDpcIsOvwonCvFwifS5mYS12aW1lbzpiZWZvcmV7Y29udGVudDpcIsOvwonCvVwifS5mYS1ibGFjay10aWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwr5cIn0uZmEtZm9udGljb25zOmJlZm9yZXtjb250ZW50Olwiw6/CisKAXCJ9LmZhLXJlZGRpdC1hbGllbjpiZWZvcmV7Y29udGVudDpcIsOvworCgVwifS5mYS1lZGdlOmJlZm9yZXtjb250ZW50Olwiw6/CisKCXCJ9LmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvworCg1wifS5mYS1jb2RpZXBpZTpiZWZvcmV7Y29udGVudDpcIsOvworChFwifS5mYS1tb2R4OmJlZm9yZXtjb250ZW50Olwiw6/CisKFXCJ9LmZhLWZvcnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcIsOvworChlwifS5mYS11c2I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwodcIn0uZmEtcHJvZHVjdC1odW50OmJlZm9yZXtjb250ZW50Olwiw6/CisKIXCJ9LmZhLW1peGNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/CisKJXCJ9LmZhLXNjcmliZDpiZWZvcmV7Y29udGVudDpcIsOvworCilwifS5mYS1wYXVzZS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwotcIn0uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoxcIn0uZmEtc3RvcC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwo1cIn0uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCjlwifS5mYS1zaG9wcGluZy1iYWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpBcIn0uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZXtjb250ZW50Olwiw6/CisKRXCJ9LmZhLWhhc2h0YWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpJcIn0uZmEtYmx1ZXRvb3RoOmJlZm9yZXtjb250ZW50Olwiw6/CisKTXCJ9LmZhLWJsdWV0b290aC1iOmJlZm9yZXtjb250ZW50Olwiw6/CisKUXCJ9LmZhLXBlcmNlbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpVcIn0uZmEtZ2l0bGFiOmJlZm9yZXtjb250ZW50Olwiw6/CisKWXCJ9LmZhLXdwYmVnaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpdcIn0uZmEtd3Bmb3JtczpiZWZvcmV7Y29udGVudDpcIsOvworCmFwifS5mYS1lbnZpcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwplcIn0uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmV7Y29udGVudDpcIsOvworCmlwifS5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvworCm1wifS5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCnFwifS5mYS1ibGluZDpiZWZvcmV7Y29udGVudDpcIsOvworCnVwifS5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcIsOvworCnlwifS5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmV7Y29udGVudDpcIsOvworCoFwifS5mYS1icmFpbGxlOmJlZm9yZXtjb250ZW50Olwiw6/CisKhXCJ9LmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmV7Y29udGVudDpcIsOvworColwifS5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUsLmZhLWFzbC1pbnRlcnByZXRpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqNcIn0uZmEtZGVhZjpiZWZvcmUsLmZhLWRlYWZuZXNzOmJlZm9yZSwuZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZXtjb250ZW50Olwiw6/CisKkXCJ9LmZhLWdsaWRlOmJlZm9yZXtjb250ZW50Olwiw6/CisKlXCJ9LmZhLWdsaWRlLWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqZcIn0uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUsLmZhLXNpZ25pbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqdcIn0uZmEtbG93LXZpc2lvbjpiZWZvcmV7Y29udGVudDpcIsOvworCqFwifS5mYS12aWFkZW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqlcIn0uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvworCqlwifS5mYS1zbmFwY2hhdDpiZWZvcmV7Y29udGVudDpcIsOvworCq1wifS5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmV7Y29udGVudDpcIsOvworCrFwifS5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwq1cIn0uZmEtcGllZC1waXBlcjpiZWZvcmV7Y29udGVudDpcIsOvworCrlwifS5mYS1maXJzdC1vcmRlcjpiZWZvcmV7Y29udGVudDpcIsOvworCsFwifS5mYS15b2FzdDpiZWZvcmV7Y29udGVudDpcIsOvworCsVwifS5mYS10aGVtZWlzbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrJcIn0uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSwuZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrNcIn0uZmEtZmE6YmVmb3JlLC5mYS1mb250LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrRcIn0uZmEtaGFuZHNoYWtlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrVcIn0uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmV7Y29udGVudDpcIsOvworCtlwifS5mYS1lbnZlbG9wZS1vcGVuLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrdcIn0uZmEtbGlub2RlOmJlZm9yZXtjb250ZW50Olwiw6/CisK4XCJ9LmZhLWFkZHJlc3MtYm9vazpiZWZvcmV7Y29udGVudDpcIsOvworCuVwifS5mYS1hZGRyZXNzLWJvb2stbzpiZWZvcmV7Y29udGVudDpcIsOvworCulwifS5mYS1hZGRyZXNzLWNhcmQ6YmVmb3JlLC5mYS12Y2FyZDpiZWZvcmV7Y29udGVudDpcIsOvworCu1wifS5mYS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUsLmZhLXZjYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrxcIn0uZmEtdXNlci1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwr1cIn0uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCvlwifS5mYS11c2VyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoBcIn0uZmEtaWQtYmFkZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoFcIn0uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSwuZmEtaWQtY2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwovCglwifS5mYS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsLmZhLWlkLWNhcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwovCg1wifS5mYS1xdW9yYTpiZWZvcmV7Y29udGVudDpcIsOvwovChFwifS5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmV7Y29udGVudDpcIsOvwovChVwifS5mYS10ZWxlZ3JhbTpiZWZvcmV7Y29udGVudDpcIsOvwovChlwifS5mYS10aGVybW9tZXRlci00OmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KHXCJ9LmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLC5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcIsOvwovCiFwifS5mYS10aGVybW9tZXRlci0yOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmV7Y29udGVudDpcIsOvwovCiVwifS5mYS10aGVybW9tZXRlci0xOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwovCilwifS5mYS10aGVybW9tZXRlci0wOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwotcIn0uZmEtc2hvd2VyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KMXCJ9LmZhLWJhdGg6YmVmb3JlLC5mYS1iYXRodHViOmJlZm9yZSwuZmEtczE1OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KNXCJ9LmZhLXBvZGNhc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwo5cIn0uZmEtd2luZG93LW1heGltaXplOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KQXCJ9LmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmV7Y29udGVudDpcIsOvwovCkVwifS5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmV7Y29udGVudDpcIsOvwovCklwifS5mYS10aW1lcy1yZWN0YW5nbGU6YmVmb3JlLC5mYS13aW5kb3ctY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpNcIn0uZmEtdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLC5mYS13aW5kb3ctY2xvc2UtbzpiZWZvcmV7Y29udGVudDpcIsOvwovClFwifS5mYS1iYW5kY2FtcDpiZWZvcmV7Y29udGVudDpcIsOvwovClVwifS5mYS1ncmF2OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KWXCJ9LmZhLWV0c3k6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpdcIn0uZmEtaW1kYjpiZWZvcmV7Y29udGVudDpcIsOvwovCmFwifS5mYS1yYXZlbHJ5OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KZXCJ9LmZhLWVlcmNhc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwppcIn0uZmEtbWljcm9jaGlwOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KbXCJ9LmZhLXNub3dmbGFrZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KcXCJ9LmZhLXN1cGVycG93ZXJzOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KdXCJ9LmZhLXdwZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwp5cIn0uZmEtbWVldHVwOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KgXCJ9LnNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwwLDAsMCk7Ym9yZGVyOjB9LnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwuc3Itb25seS1mb2N1c2FibGU6Zm9jdXN7cG9zaXRpb246c3RhdGljO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtjbGlwOmF1dG99YXtjdXJzb3I6cG9pbnRlcn0jZWRpdG9ye21pbi1oZWlnaHQ6MTUwcHg7b3ZlcmZsb3c6YXV0bzttYXJnaW4tdG9wOjVweDtyZXNpemU6dmVydGljYWw7b3V0bGluZTowfS5hbmd1bGFyLWVkaXRvci10b29sYmFye2ZvbnQ6MTAwIC44cmVtLzE1cHggUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BhZGRpbmc6LjJyZW07Ym9yZGVyOjFweCBzb2xpZCAjZGRkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldHtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luLXJpZ2h0OjVweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO21hcmdpbi1ib3R0b206M3B4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZzouNHJlbTttaW4td2lkdGg6MnJlbTtmbG9hdDpsZWZ0O2JvcmRlcjowIHNvbGlkICNkZGR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czo1cHggMCAwIDVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCA1cHggNXB4IDB9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbi5mb2N1cywuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjB9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmRpc2FibGVkPi5jb2xvci1sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZD4uY29sb3ItbGFiZWwuYmFja2dyb3VuZCwuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZD4uY29sb3ItbGFiZWwuZm9yZWdyb3VuZCA6YWZ0ZXJ7YmFja2dyb3VuZDojNTU1fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmY1Yjl9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b24uYWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZmE5OH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgc2VsZWN0e2ZvbnQtc2l6ZToxMXB4O3dpZHRoOjkwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOi41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtib3JkZXItcmFkaXVzOjVweDtvdXRsaW5lOjA7cGFkZGluZzouNHJlbTtjdXJzb3I6cG9pbnRlcn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5ne3dpZHRoOjkwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZzpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZzpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250e3dpZHRoOjkwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udDpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemV7d2lkdGg6NTBweH1Ac3VwcG9ydHMgbm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSl7LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyBvcHRncm91cHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7cGFkZGluZzo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyBvcHRpb257Ym9yZGVyOjFweCBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuZGVmYXVsdHtmb250LXNpemU6MTZweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oMXtmb250LXNpemU6MjRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oMntmb250LXNpemU6MjBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oM3tmb250LXNpemU6MTZweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNHtmb250LXNpemU6MTVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNXtmb250LXNpemU6MTRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNntmb250LXNpemU6MTNweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5kaXYsLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAucHJle2ZvbnQtc2l6ZToxMnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQgb3B0Z3JvdXB7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O3BhZGRpbmc6NXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQgb3B0aW9ue2JvcmRlcjoxcHggc29saWQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSBvcHRncm91cHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7cGFkZGluZzo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIG9wdGlvbntib3JkZXI6MXB4IHNvbGlkO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemUxe2ZvbnQtc2l6ZToxMHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTJ7Zm9udC1zaXplOjEycHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplM3tmb250LXNpemU6MTRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU0e2ZvbnQtc2l6ZToxNnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTV7Zm9udC1zaXplOjE4cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplNntmb250LXNpemU6MjBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU3e2ZvbnQtc2l6ZToyNHB4fX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemU6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmNvbG9yLWxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYmFja2dyb3VuZHtmb250LXNpemU6c21hbGxlcjtiYWNrZ3JvdW5kOiMxYjFiMWI7Y29sb3I6I2ZmZjtwYWRkaW5nOjNweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmZvcmVncm91bmQgOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcIjtsZWZ0Oi0xcHg7dG9wOmF1dG87Ym90dG9tOi0zcHg7cmlnaHQ6YXV0bzt3aWR0aDoxNXB4O2hlaWdodDoycHg7ei1pbmRleDowO2JhY2tncm91bmQ6IzFiMWIxYn0uYW5ndWxhci1lZGl0b3J7cG9zaXRpb246cmVsYXRpdmV9LmFuZ3VsYXItZWRpdG9yIDo6bmctZGVlcCBbY29udGVudGVkaXRhYmxlPXRydWVdOmVtcHR5OmJlZm9yZXtjb250ZW50OmF0dHIocGxhY2Vob2xkZXIpO2NvbG9yOiM4NjhlOTY7b3BhY2l0eToxfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZX0uYW5ndWxhci1lZGl0b3IgLmFuZ3VsYXItZWRpdG9yLXdyYXBwZXIgLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhe21pbi1oZWlnaHQ6NXJlbTtwYWRkaW5nOi41cmVtIC44cmVtIDFyZW07Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO3otaW5kZXg6Mjtwb3NpdGlvbjpyZWxhdGl2ZX0uYW5ndWxhci1lZGl0b3IgLmFuZ3VsYXItZWRpdG9yLXdyYXBwZXIgLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhLmZvY3VzLC5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlciAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTowfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlciAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEgOjpuZy1kZWVwIGJsb2NrcXVvdGV7bWFyZ2luLWxlZnQ6MXJlbTtib3JkZXItbGVmdDouMmVtIHNvbGlkICNkZmUyZTU7cGFkZGluZy1sZWZ0Oi41cmVtfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlciA6Om5nLWRlZXAgcHttYXJnaW4tYm90dG9tOjB9LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyIC5hbmd1bGFyLWVkaXRvci1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cGFkZGluZzouNXJlbSAuOHJlbSAxcmVtIC45cmVtO3otaW5kZXg6MTtjb2xvcjojNmM3NTdkO29wYWNpdHk6Ljc1fS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlci5zaG93LXBsYWNlaG9sZGVyIC5hbmd1bGFyLWVkaXRvci1wbGFjZWhvbGRlcntkaXNwbGF5OmJsb2NrfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlci5kaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWQ7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfWBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQW5ndWxhckVkaXRvckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBwcml2YXRlIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcclxuXHJcbiAgcGxhY2Vob2xkZXI6IGJvb2xlYW47XHJcblxyXG4gIG1vZGVWaXN1YWwgPSB0cnVlO1xyXG4gIHNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkID0gJyc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBBbmd1bGFyRWRpdG9yQ29uZmlnID0gYW5ndWxhckVkaXRvckNvbmZpZztcclxuXHJcbiAgQE91dHB1dCgpIGh0bWw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2VkaXRvcicpIHRleHRBcmVhOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnZWRpdG9yV3JhcHBlcicpIGVkaXRvcldyYXBwZXI6IGFueTtcclxuICBAVmlld0NoaWxkKCdlZGl0b3JUb29sYmFyJykgZWRpdG9yVG9vbGJhcjogQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoKSB2aWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLyoqIGVtaXRzIGBibHVyYCBldmVudCB3aGVuIGZvY3VzZWQgb3V0IGZyb20gdGhlIHRleHRhcmVhICovXHJcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBlbWl0cyBgZm9jdXNgIGV2ZW50IHdoZW4gZm9jdXNlZCBpbiB0byB0aGUgdGV4dGFyZWEgKi9cclxuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWRpdG9yU2VydmljZTogQW5ndWxhckVkaXRvclNlcnZpY2UsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5lZGl0b3JUb29sYmFyLmlkID0gdGhpcy5pZDtcclxuICAgIHRoaXMuZWRpdG9yVG9vbGJhci5mb250cyA9IHRoaXMuY29uZmlnLmZvbnRzID8gdGhpcy5jb25maWcuZm9udHMgOiBhbmd1bGFyRWRpdG9yQ29uZmlnLmZvbnRzO1xyXG4gICAgdGhpcy5lZGl0b3JUb29sYmFyLmN1c3RvbUNsYXNzZXMgPSB0aGlzLmNvbmZpZy5jdXN0b21DbGFzc2VzO1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLnVwbG9hZFVybCA9IHRoaXMuY29uZmlnLnVwbG9hZFVybDtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5zaG93VG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yVG9vbGJhci5zaG93VG9vbGJhciA9IHRoaXMuY29uZmlnLnNob3dUb29sYmFyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3IpIHtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLnNldERlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3IodGhpcy5jb25maWcuZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdEZvbnROYW1lKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yVG9vbGJhci5kZWZhdWx0Rm9udElkID0gdGhpcy5jb25maWcuZGVmYXVsdEZvbnROYW1lID8gdGhpcy5lZGl0b3JUb29sYmFyLmZvbnRzLmZpbmRJbmRleCh4ID0+IHtcclxuICAgICAgICByZXR1cm4geC5uYW1lID09PSB0aGlzLmNvbmZpZy5kZWZhdWx0Rm9udE5hbWU7XHJcbiAgICAgIH0pIDogMDtcclxuICAgICAgdGhpcy5lZGl0b3JUb29sYmFyLmZvbnRJZCA9IHRoaXMuZWRpdG9yVG9vbGJhci5kZWZhdWx0Rm9udElkO1xyXG4gICAgICB0aGlzLm9uRWRpdG9yRm9jdXMoKTtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLnNldEZvbnROYW1lKHRoaXMuY29uZmlnLmRlZmF1bHRGb250TmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVkaXRvclRvb2xiYXIuZGVmYXVsdEZvbnRJZCA9IDA7XHJcbiAgICAgIHRoaXMuZWRpdG9yVG9vbGJhci5mb250SWQgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRGb250U2l6ZSkge1xyXG4gICAgICB0aGlzLmVkaXRvclRvb2xiYXIuZm9udFNpemUgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Rm9udFNpemU7XHJcbiAgICAgIHRoaXMub25FZGl0b3JGb2N1cygpO1xyXG4gICAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2V0Rm9udFNpemUodGhpcy5jb25maWcuZGVmYXVsdEZvbnRTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGVkIGNvbW1hbmQgZnJvbSBlZGl0b3IgaGVhZGVyIGJ1dHRvbnNcclxuICAgKiBAcGFyYW0gY29tbWFuZCBzdHJpbmcgZnJvbSB0cmlnZ2VyQ29tbWFuZFxyXG4gICAqL1xyXG4gIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQ6IHN0cmluZykge1xyXG4gICAgaWYgKGNvbW1hbmQgPT09ICd0b2dnbGVFZGl0b3JNb2RlJykge1xyXG4gICAgICB0aGlzLnRvZ2dsZUVkaXRvck1vZGUodGhpcy5tb2RlVmlzdWFsKTtcclxuICAgIH0gZWxzZSBpZiAoY29tbWFuZCAhPT0gJycpIHtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmV4ZWN1dGVDb21tYW5kKGNvbW1hbmQpO1xyXG4gICAgICB0aGlzLmV4ZWMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uRWRpdG9yRm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvY3VzIGV2ZW50XHJcbiAgICovXHJcbiAgb25UZXh0QXJlYUZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cy5lbWl0KCdmb2N1cycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYmx1ciBldmVudFxyXG4gICAqL1xyXG4gIG9uVGV4dEFyZWFCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIHNhdmUgc2VsZWN0aW9uIGlmIGZvY3Vzc2VkIG91dFxyXG4gICAgICovXHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2F2ZVNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5vblRvdWNoZWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPSBudWxsICYmIChldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSAhPT0gJ2FuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0Jykge1xyXG4gICAgICB0aGlzLmJsdXIuZW1pdCgnYmx1cicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIGZvY3VzIHRoZSB0ZXh0IGFyZWEgd2hlbiB0aGUgZWRpdG9yIGlzIGZvY3Vzc2VkXHJcbiAgICovXHJcbiAgb25FZGl0b3JGb2N1cygpIHtcclxuICAgIHRoaXMudGV4dEFyZWEubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhlY3V0ZWQgZnJvbSB0aGUgY29udGVudGVkaXRhYmxlIHNlY3Rpb24gd2hpbGUgdGhlIGlucHV0IHByb3BlcnR5IGNoYW5nZXNcclxuICAgKiBAcGFyYW0gaHRtbCBodG1sIHN0cmluZyBmcm9tIGNvbnRlbnRlZGl0YWJsZVxyXG4gICAqL1xyXG4gIG9uQ29udGVudENoYW5nZShodG1sOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZShodG1sKTtcclxuICAgICAgaWYgKCghaHRtbCB8fCBodG1sID09PSAnPGJyPicgfHwgaHRtbCA9PT0gJycpICE9PSB0aGlzLnNob3dQbGFjZWhvbGRlcikge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUGxhY2Vob2xkZXIodGhpcy5zaG93UGxhY2Vob2xkZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG4gICAqIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSBjaGFuZ2UgZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvblxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuICAgKiB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm4gYSBmdW5jdGlvblxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byBiZSBleGVjdXRlZCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlIGluIGNvbnRlbnRlZGl0YWJsZVxyXG4gICAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGlmICgoIXZhbHVlIHx8IHZhbHVlID09PSAnPGJyPicgfHwgdmFsdWUgPT09ICcnKSAhPT0gdGhpcy5zaG93UGxhY2Vob2xkZXIpIHtcclxuICAgICAgdGhpcy50b2dnbGVQbGFjZWhvbGRlcih0aGlzLnNob3dQbGFjZWhvbGRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnPGJyPicpIHtcclxuICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVmcmVzaFZpZXcodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVmcmVzaCB2aWV3L0hUTUwgb2YgdGhlIGVkaXRvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIGh0bWwgc3RyaW5nIGZyb20gdGhlIGVkaXRvclxyXG4gICAqL1xyXG4gIHJlZnJlc2hWaWV3KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMudGV4dEFyZWEubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsIG5vcm1hbGl6ZWRWYWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9nZ2xlcyBwbGFjZWhvbGRlciBiYXNlZCBvbiBpbnB1dCBzdHJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBBIEhUTUwgc3RyaW5nIGZyb20gdGhlIGVkaXRvclxyXG4gICAqL1xyXG4gIHRvZ2dsZVBsYWNlaG9sZGVyKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWRpdG9yV3JhcHBlci5uYXRpdmVFbGVtZW50LCAnc2hvdy1wbGFjZWhvbGRlcicpO1xyXG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9IHRydWU7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lZGl0b3JXcmFwcGVyLm5hdGl2ZUVsZW1lbnQsICdzaG93LXBsYWNlaG9sZGVyJyk7XHJcbiAgICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnRzIGRpc2FibGVkIHN0YXRlIGZvciB0aGlzIGVsZW1lbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkXHJcbiAgICovXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXYgPSB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBpc0Rpc2FibGVkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XHJcbiAgICB0aGlzLl9yZW5kZXJlclthY3Rpb25dKGRpdiwgJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0b2dnbGVzIGVkaXRvciBtb2RlIGJhc2VkIG9uIGJUb1NvdXJjZSBib29sXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYlRvU291cmNlIEEgYm9vbGVhbiB2YWx1ZSBmcm9tIHRoZSBlZGl0b3JcclxuICAgKi9cclxuICB0b2dnbGVFZGl0b3JNb2RlKGJUb1NvdXJjZTogYm9vbGVhbikge1xyXG4gICAgbGV0IG9Db250ZW50OiBhbnk7XHJcbiAgICBjb25zdCBlZGl0YWJsZUVsZW1lbnQgPSB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGJUb1NvdXJjZSkge1xyXG4gICAgICBvQ29udGVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVkaXRhYmxlRWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgICBlZGl0YWJsZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICBjb25zdCBvUHJlID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICAgIG9QcmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJtYXJnaW46IDA7IG91dGxpbmU6IG5vbmU7XCIpO1xyXG4gICAgICBjb25zdCBvQ29kZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvZGUnKTtcclxuICAgICAgZWRpdGFibGVFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICBvQ29kZS5pZCA9IFwic291cmNlVGV4dFwiO1xyXG4gICAgICBvQ29kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmUtd3JhcDsgd29yZC1icmVhazoga2VlcC1hbGw7IG1hcmdpbjogMDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjViOTtcIik7XHJcbiAgICAgIG9Db2RlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgICAgb0NvZGUuYXBwZW5kQ2hpbGQob0NvbnRlbnQpO1xyXG4gICAgICBvUHJlLmFwcGVuZENoaWxkKG9Db2RlKTtcclxuICAgICAgZWRpdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKG9QcmUpO1xyXG5cclxuICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yXCIsIGZhbHNlLCBcImRpdlwiKTtcclxuXHJcbiAgICAgIHRoaXMubW9kZVZpc3VhbCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZpZXdNb2RlLmVtaXQoZmFsc2UpO1xyXG4gICAgICBvQ29kZS5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuX2RvY3VtZW50LmFsbCkge1xyXG4gICAgICAgIGVkaXRhYmxlRWxlbWVudC5pbm5lckhUTUwgPSBlZGl0YWJsZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9Db250ZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICBvQ29udGVudC5zZWxlY3ROb2RlQ29udGVudHMoZWRpdGFibGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIGVkaXRhYmxlRWxlbWVudC5pbm5lckhUTUwgPSBvQ29udGVudC50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVkaXRhYmxlRWxlbWVudC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLm1vZGVWaXN1YWwgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpZXdNb2RlLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMub25Db250ZW50Q2hhbmdlKGVkaXRhYmxlRWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgICBlZGl0YWJsZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWRpdG9yVG9vbGJhci5zZXRFZGl0b3JNb2RlKCF0aGlzLm1vZGVWaXN1YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9nZ2xlcyBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZ1xyXG4gICAqXHJcbiAgICogU2VuZCBhIG5vZGUgYXJyYXkgZnJvbSB0aGUgY29udGVudEVkaXRhYmxlIG9mIHRoZSBlZGl0b3JcclxuICAgKi9cclxuICBleGVjKCkge1xyXG4gICAgdGhpcy5lZGl0b3JUb29sYmFyLnRyaWdnZXJCdXR0b25zKCk7XHJcblxyXG4gICAgbGV0IHVzZXJTZWxlY3Rpb247XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB1c2VyU2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhID0gdXNlclNlbGVjdGlvbi5mb2N1c05vZGU7XHJcbiAgICBjb25zdCBlbHMgPSBbXTtcclxuICAgIHdoaWxlIChhICYmIGEuaWQgIT09ICdlZGl0b3InKSB7XHJcbiAgICAgIGVscy51bnNoaWZ0KGEpO1xyXG4gICAgICBhID0gYS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lZGl0b3JUb29sYmFyLnRyaWdnZXJCbG9ja3MoZWxzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJFZGl0b3JDb21wb25lbnR9IGZyb20gJy4vYW5ndWxhci1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHtBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudH0gZnJvbSBcIi4vYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQW5ndWxhckVkaXRvckNvbXBvbmVudCwgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWRpdG9yTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFvQkUsOEJBQW9CLElBQWdCLEVBQTRCLFNBQWM7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUE0QixjQUFTLEdBQVQsU0FBUyxDQUFLO0tBQzdFOzs7Ozs7Ozs7O0lBTUQsNkNBQWM7Ozs7O0lBQWQsVUFBZSxPQUFlOztZQUN0QixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ2pFLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsRDs7Ozs7Ozs7OztJQU1ELHlDQUFVOzs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixJQUFJLENB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

/***/ }),

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

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\r\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\r\n\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <mat-radio-group formControlName=\"type\">\r\n\r\n        <div class=\"display-flex padding-bottom-25px\" fxLayout=\"row\">\r\n\r\n          <div class=\"display-flex margin-right-25px\">\r\n\r\n            <mat-radio-button value=\"Article\" class=\"margin-top-10px\" matTooltip=\"{{ 'Create an Article' | translate }}\">Create an Article</mat-radio-button>\r\n\r\n          </div>\r\n\r\n          <div class=\"display-flex\">\r\n\r\n            <mat-radio-button value=\"Focus\" class=\"margin-top-10px\" matTooltip=\"{{ 'Create a Focus' | translate }}\">Create a Focus</mat-radio-button>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-radio-group>\r\n\r\n\r\n      <div class=\"mb-20\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n        <div [fxFlex]=\"50\">\r\n\r\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" class=\"max-width-480px\">\r\n\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n\r\n              <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n                <mat-label>Author</mat-label>\r\n\r\n                <input matInput type=\"text\" formControlName=\"author\" required>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div [fxFlex]=\"50\">\r\n\r\n              <mat-form-field class=\"width-100pc\">\r\n\r\n                <mat-label>Brand</mat-label>\r\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"brandId\" panelOpen=\"true\" required>\r\n                  <mat-option>...</mat-option>\r\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n                    {{brand.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n\r\n              </mat-form-field>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <mat-form-field class=\"width-100pc margin-left-16px\">\r\n\r\n            <mat-label>Title</mat-label>\r\n\r\n            <input matInput type=\"text\" formControlName=\"title\" required>\r\n\r\n          </mat-form-field>\r\n\r\n          <div class=\"padding-top-25px max-width-480px\">\r\n            <div class=\"display-flex justify-content-center\">\r\n\r\n              <h3>Image</h3>\r\n\r\n            </div>\r\n\r\n            <image-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" [principal]=\"principal\"></image-card>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div [fxFlex]=\"50\" class=\"width-100pc padding-right-25px\">\r\n\r\n          <div class=\"padding-bottom-25px\">\r\n\r\n            <mat-label>Body</mat-label>\r\n\r\n          </div>\r\n\r\n          <angular-editor formControlName=\"body\" [config]=\"AngularEditorConfig\"></angular-editor>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.padding-right-25px {\n  padding-right: 25px !important; }\n\n.width-70pc {\n  width: 70% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL2Jsb2ctZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1ibG9nc1xcY29tcG9uZW50c1xcYmxvZy1mb3JtXFxibG9nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFFRDtFQUNJLHNCQUFxQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9ibG9nLWZvcm0vYmxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQtMjVweCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aC03MHBje1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

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
        _this.AngularEditorConfig = {
            editable: true,
            spellcheck: true,
            height: '25rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            uploadUrl: 'http://localhost:4000/api/v1/image/',
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
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

module.exports = "<h1>Blog Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"title\" placeholder=\"TITLE\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"author\" placeholder=\"AUTHOR\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"width-100pc\">\r\n\r\n    <mat-select disableOptionCentering placeholder=\"TYPE\" formControlName=\"type\">\r\n\r\n      <mat-option>...</mat-option>\r\n\r\n      <mat-option *ngFor=\"let type of types\" [value]=\"type.id\">\r\n\r\n        {{type.name}}\r\n\r\n      </mat-option>\r\n\r\n    </mat-select>\r\n\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">WRITE A POST</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"blogs\" matSort [matSortActive]=\"blogsService.previousSortColumn\"\r\n    [matSortDirection]=\"blogsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"title\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TITLE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.title }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"thumbnail\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\r\n        <div class=\"position-relative margin-top-5px\">\r\n          <img [src]=\"element.imgUrl\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"author\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        AUTHOR\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.author }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TYPE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.type }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"brandId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        BRAND\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ getBrand(element.brandId) }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        DATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt | date: 'dd/MM/yyyy HH:mm:ss' }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        ACTIONS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\r\n        <button mat-icon-button color=\"primary\" type=\"button\" [matTooltip]=\"Edit\" class=\"min-width-80px\" (click)=\"seeBlogModal(element.id)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"confirmDeleteBlog(element)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n::ng-deep mat-paginator {\n  padding-top: 2px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1ibG9ncy9jb21wb25lbnRzL2Jsb2dzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLWJsb2dzXFxjb21wb25lbnRzXFxibG9ncy10YWJsZVxcYmxvZ3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtYmxvZ3MvY29tcG9uZW50cy9ibG9ncy10YWJsZS9ibG9ncy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1wYWdpbmF0b3Ige1xyXG4gICAgcGFkZGluZy10b3A6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/modules/image-card/image-card.module */ "./src/app/ui/modules/image-card/image-card.module.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blog-form/blog-form.component */ "./src/app/ms-back-office/modules/ms-blogs/components/blog-form/blog-form.component.ts");
/* harmony import */ var _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/see-blog/see-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/see-blog/see-blog.component.ts");
/* harmony import */ var _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/blogs-table/blogs-table.component */ "./src/app/ms-back-office/modules/ms-blogs/components/blogs-table/blogs-table.component.ts");
/* harmony import */ var _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/delete-blog/delete-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-blog/edit-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/edit-blog/edit-blog.component.ts");
/* harmony import */ var _ms_blogs_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ms-blogs-routing.module */ "./src/app/ms-back-office/modules/ms-blogs/ms-blogs-routing.module.ts");
/* harmony import */ var _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-blog/new-blog.component */ "./src/app/ms-back-office/modules/ms-blogs/components/new-blog/new-blog.component.ts");
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
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"],
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
                _ms_blogs_routing_module__WEBPACK_IMPORTED_MODULE_23__["MsBlogsRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_17__["AskBeforeRefreshModule"],
                _ui_modules_image_card_image_card_module__WEBPACK_IMPORTED_MODULE_16__["ImageCardModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_14__["EditorModule"]
            ],
            declarations: [
                _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_18__["BlogFormComponent"],
                _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_20__["BlogsTableComponent"],
                _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_21__["DeleteBlogComponent"],
                _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_22__["EditBlogComponent"],
                _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_24__["NewBlogComponent"],
                _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_19__["SeeBlogComponent"]
            ],
            exports: [
                _components_blog_form_blog_form_component__WEBPACK_IMPORTED_MODULE_18__["BlogFormComponent"],
                _components_blogs_table_blogs_table_component__WEBPACK_IMPORTED_MODULE_20__["BlogsTableComponent"],
                _components_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_21__["DeleteBlogComponent"],
                _components_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_22__["EditBlogComponent"],
                _components_new_blog_new_blog_component__WEBPACK_IMPORTED_MODULE_24__["NewBlogComponent"],
            ],
            entryComponents: [
                _components_see_blog_see_blog_component__WEBPACK_IMPORTED_MODULE_19__["SeeBlogComponent"]
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