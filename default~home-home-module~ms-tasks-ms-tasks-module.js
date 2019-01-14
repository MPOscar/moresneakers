(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~ms-tasks-ms-tasks-module"],{

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdGFza3MvY29tcG9uZW50cy9kZWxldGUtdGFzay9kZWxldGUtdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DeleteTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTaskComponent", function() { return DeleteTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts");
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
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var DeleteTaskComponent = /** @class */ (function () {
    function DeleteTaskComponent(activatedRoute, dialog, tasksService, errorHandlingService, router, translate, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.tasksService = tasksService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    DeleteTaskComponent.prototype.ngAfterViewInit = function () {
        this.getCollection();
    };
    DeleteTaskComponent.prototype.ngOnInit = function () {
        this.taskId = this.activatedRoute.snapshot.data.TaskId;
    };
    DeleteTaskComponent.prototype.getCollection = function () {
        var _this = this;
        this.tasksService.getTask(this.taskId).subscribe(function (response) {
            _this.data = response.data;
            _this.confirmDeleteTask();
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    DeleteTaskComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    DeleteTaskComponent.prototype.confirmDeleteTask = function () {
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
                _this.deleteTask();
            }
            else {
                _this.close();
            }
        });
    };
    DeleteTaskComponent.prototype.deleteTask = function () {
        var _this = this;
        this.tasksService.deleteTask(this.data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.close();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.close();
        });
    };
    DeleteTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-task',
            template: __webpack_require__(/*! ./delete-task.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.html"),
            styles: [__webpack_require__(/*! ./delete-task.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], DeleteTaskComponent);
    return DeleteTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>EDIT TASK</h1>\n<task-form *ngIf=\"data\"\n    [data]=\"data\"\n    [priorities]=\"dialogData.priorities\"      \n    [users]=\"dialogData.users\"  \n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</task-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL2VkaXQtdGFzay9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy10YXNrc1xcY29tcG9uZW50c1xcZWRpdC10YXNrXFxlZGl0LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtd2lkdGgtNjAtcGN0e1xyXG4gICAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLm1hdC1jZWxse1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts");
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
var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(activatedRoute, dialog, dialogRef, tasksService, errorHandlingService, router, snackBar, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.tasksService = tasksService;
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
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        //setTranslations(this.translate, TRANSLATIONS);
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        this.taskId = this.dialogData.id;
    };
    EditTaskComponent.prototype.ngAfterViewInit = function () {
        this.getTask();
    };
    EditTaskComponent.prototype.getTask = function () {
        var _this = this;
        this.tasksService.getTask(this.taskId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditTaskComponent.prototype.submit = function (data) {
        delete data.updatedAt;
        delete data.createdAt;
        this.updateStyle(data);
    };
    EditTaskComponent.prototype.cancel = function () {
        this.close();
    };
    EditTaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditTaskComponent.prototype.updateStyle = function (data) {
        var _this = this;
        this.tasksService.putTask(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(updatedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], Object])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD TASK</h1>\n<task-form class=\"flex-grow-1\"\n    [data]=\"data\"    \n    [priorities]=\"dialogData.priorities\"      \n    [users]=\"dialogData.users\"  \n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</task-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 10px; }\n\n.mat-dialog-content {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px; }\n\n.mat-dialog-actions {\n  padding: 10px 0; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nmat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px; }\n\n.max-width-60-pct {\n  max-width: 60% !important; }\n\n.border {\n  border: 1px solid #f1f1f1; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL25ldy10YXNrL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXRhc2tzXFxjb21wb25lbnRzXFxuZXctdGFza1xcbmV3LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUNGLEVBQUM7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0Usd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICBcclxuICAubWF4LXdpZHRoLTYwLXBjdHtcclxuICAgIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY2VsbHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ui/helpers/component-can-deactivate */ "./src/app/ui/helpers/component-can-deactivate.ts");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/helpers/mixin-decorator */ "./src/app/ui/helpers/mixin-decorator.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _models_Tasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/Tasks */ "./src/app/ms-back-office/modules/ms-tasks/models/Tasks.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts");
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
var NewTaskComponent = /** @class */ (function () {
    //@Input() brands: Array<Brand>;TODO
    //@Output() close = new EventEmitter();TODO
    function NewTaskComponent(dialogRef, activatedRoute, tasksService, errorHandlingService, router, translate, toastr, dialog, dialogData) {
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.tasksService = tasksService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.dialogData = dialogData;
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
    NewTaskComponent.prototype.submit = function (data) {
        this.createUser(data);
    };
    NewTaskComponent.prototype.cancel = function () {
        this.close();
    };
    NewTaskComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    NewTaskComponent.prototype.createUser = function (data) {
        var _this = this;
        this.tasksService.postTask(data).subscribe(function (response) {
            _this.unsavedChanges = false;
            _this.close();
            _this.toastr.success(savedMessageKey);
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error, 'task');
            _this.validationErrors = error.formErrors;
        });
    };
    NewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_5__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_4__["CanDeactivateMixin"]]),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _models_Tasks__WEBPACK_IMPORTED_MODULE_8__["Task"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--h1>Urls Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"task\" placeholder=\"TASK\">\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" (click)=\"addTaskModal()\">ADD URL</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"urls\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\r\n    [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <ng-container matColumnDef=\"task\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        TASK\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"responsable\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        RESPONSABLE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"priority\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        PRIORITY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.vanityUrl }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-15px padding-bottom-15px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div-->\r\n\r\n<div [fxFlex]=\"100\" class=\"justify-content-center\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n  <h2>Pending Task</h2>\r\n</div>\r\n<div class=\"flex-direction-row-reverse flex-shrink-0 display-flex margin-right-25px margin-bottom-10px margin-top-10px\">\r\n\r\n  <button class=\"border-none border-radius-5px\" mat-stroked-button (click)=\"addTaskModal()\">\r\n    <mat-icon>add</mat-icon>\r\n    Add a new task</button>\r\n\r\n</div>\r\n<div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n  <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n    <div class=\"padding-left-25px width-100-pc max-height-200px \" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n      <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"tasks\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\r\n        [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n        <ng-container matColumnDef=\"description\">\r\n          <th mat-header-cell *matHeaderCellDef>TASK</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"responsable\">\r\n          <th mat-header-cell *matHeaderCellDef>RESPONSABLE</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{ element.responsable }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"priority\">\r\n          <th mat-header-cell *matHeaderCellDef>PRIORITY</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.priority}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef>ACTION</th>\r\n          <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\r\n            <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n            <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"getTaskToDelete(element)\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>   \r\n  </div>\r\n</div>\r\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-card {\n  text-align: center; }\n\n.mat-card img {\n    border-radius: 5px;\n    margin-top: -25px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.box-shadow-none {\n  box-shadow: none !important; }\n\n.mat-card-home {\n  border-radius: 5px;\n  color: white;\n  background-color: #6f6f6f; }\n\n.border-radius-5px {\n  border-radius: 5px !important; }\n\ntd.mat-cell {\n  border: none !important; }\n\nth.mat-header-cell {\n  border: none !important; }\n\ntr.mat-header-row {\n  background-color: #f1f1f1; }\n\n.max-height-200px {\n  max-height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL3BlbmRpbmctdGFza3MtdGFibGUvRTpcXFBST0dSQU1BQ0lPTiBJSUlcXG1vcmVzbmVha2Vycy1iYWNrb2ZmaWNlL3NyY1xcYXBwXFxtcy1iYWNrLW9mZmljZVxcbW9kdWxlc1xcbXMtdGFza3NcXGNvbXBvbmVudHNcXHBlbmRpbmctdGFza3MtdGFibGVcXHBlbmRpbmctdGFza3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLG1CQUFrQixFQUtyQjs7QUFORDtJQUdRLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFDcEI7O0FBR0w7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLDBCQUF5QixFQUU1Qjs7QUFFRDtFQUNJLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdGFza3MvY29tcG9uZW50cy9wZW5kaW5nLXRhc2tzLXRhYmxlL3BlbmRpbmctdGFza3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWItMjAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJveC1zaGFkb3ctbm9uZXtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhvbWUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmNmY2ZjtcclxuXHJcbn1cclxuXHJcbi5ib3JkZXItcmFkaXVzLTVweCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgXHJcbn1cclxuXHJcbi5tYXgtaGVpZ2h0LTIwMHB4e1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PendingTasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTasksTableComponent", function() { return PendingTasksTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts");
/* harmony import */ var _models_priority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/priority */ "./src/app/ms-back-office/modules/ms-tasks/models/priority.ts");
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
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var PendingTasksTableComponent = /** @class */ (function () {
    function PendingTasksTableComponent(activatedRoute, dialog, errorHandlingService, tasksService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.tasksService = tasksService;
        this.toastr = toastr;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
        this.tasks = [];
        this.priorities = _models_priority__WEBPACK_IMPORTED_MODULE_11__["PRIORITY"];
    }
    PendingTasksTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.users = this.activatedRoute.snapshot.data.users;
        // Begin observing style list changes.
        this.tasksList = this.tasksService.tasksList.subscribe(function (TasksList) {
            _this.totalLength = TasksList.dataCount;
            _this.tasks = TasksList.data;
            if (_this.tasks.length === 0 && _this.totalLength > 0 && _this.tasksService.previousPageSize > 0) {
                _this.tasksService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.tasksService.previousPageSize) - 1;
                _this.tasksService.reloadTasks().subscribe(function (response) {
                    _this.tasksService.tasksList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    PendingTasksTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.ngOnDestroy = function () {
        this.tasksList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    PendingTasksTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    PendingTasksTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.tasksService.getTasks(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.tasksService.tasksList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    PendingTasksTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    PendingTasksTableComponent.prototype.addTaskModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    PendingTasksTableComponent.prototype.editTaskModal = function (id) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                id: id,
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    PendingTasksTableComponent.prototype.getUsers = function (id) {
        try {
            return this.users.find(function (user) {
                return user.id === id;
            }).firstName;
        }
        catch (err) {
            return;
        }
    };
    //delete
    PendingTasksTableComponent.prototype.getTaskToDelete = function (data) {
        var _this = this;
        this.tasksService.getTask(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteTask(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    PendingTasksTableComponent.prototype.confirmDeleteTask = function (data) {
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
                _this.deleteTask(data);
            }
        });
    };
    PendingTasksTableComponent.prototype.deleteTask = function (data) {
        var _this = this;
        this.tasksService.deleteTask(data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PendingTasksTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], PendingTasksTableComponent.prototype, "sort", void 0);
    PendingTasksTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pending-tasks-table',
            template: __webpack_require__(/*! ./pending-tasks-table.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.html"),
            styles: [__webpack_require__(/*! ./pending-tasks-table.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], PendingTasksTableComponent);
    return PendingTasksTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div [fxFlex]=\"50\">\n\n\n          <mat-form-field class=\"width-100pc\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>RESPONSABLE</mat-label>\n\n            <input matInput type=\"text\" formControlName=\"responsable\">\n            <!--mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"responsable\" required>\n\n              <mat-option>...</mat-option>\n\n              <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\n\n                {{user.firstName}}\n\n              </mat-option>\n\n            </mat-select-->\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc\">\n\n            <mat-label>PRIORITY</mat-label>\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"priority\" required>\n\n              <mat-option>...</mat-option>\n\n              <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority.value\">\n\n                {{priority.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL3Rhc2stZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy10YXNrc1xcY29tcG9uZW50c1xcdGFzay1mb3JtXFx0YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtdGFza3MvY29tcG9uZW50cy90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "./src/app/ui/components/base-reactive-form/base-reactive-form-component.ts");
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

var TaskFormComponent = /** @class */ (function (_super) {
    __extends(TaskFormComponent, _super);
    function TaskFormComponent(translateService) {
        return _super.call(this, translateService) || this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    TaskFormComponent.prototype.ngOnInit = function () {
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
    TaskFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            responsable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.responsable, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.priority, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    TaskFormComponent.prototype.submitClicked = function () {
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
    ], TaskFormComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TaskFormComponent.prototype, "priorities", void 0);
    TaskFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-form',
            template: __webpack_require__(/*! ./task-form.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.html"),
            styles: [__webpack_require__(/*! ./task-form.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TaskFormComponent);
    return TaskFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Urls Table</h1>\n\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\n  [formGroup]=\"filter\">\n\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\n  <mat-form-field>\n    <input matInput formControlName=\"description\" placeholder=\"TASK\">\n  </mat-form-field>\n\n  <span class=\"flex-grow-1\"></span>\n  <button mat-raised-button color=\"primary\" (click)=\"addTaskModal()\">ADD TASK</button>\n</mat-toolbar>\n\n<div class=\"flex-grow-1 overflow-auto display-flex\">\n\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"tasks\" matSort [matSortActive]=\"tasksService.previousSortColumn\"\n    [matSortDirection]=\"tasksService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        TASK\n      </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.description }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"responsable\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        RESPONSABLE\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.responsable }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"priority\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        PRIORITY\n      </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.priority }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n      </th>\n      <td mat-cell *matCellDef=\"let element\"  class=\"min-width-80px\">\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" (click)=\"editTaskModal(element.id)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\" (click)=\"getTaskToDelete(element)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\n    </tr>\n\n  </table>\n\n</div>\n\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n  <span class=\"flex-grow-1\"></span>\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"\" showFirstLastButtons\n    (page)=\"onPage()\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL3Rhc2tzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXRhc2tzXFxjb21wb25lbnRzXFx0YXNrcy10YWJsZVxcdGFza3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy10YXNrcy9jb21wb25lbnRzL3Rhc2tzLXRhYmxlL3Rhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return TasksTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ui_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "./src/app/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tasks.service */ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts");
/* harmony import */ var _models_priority__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/priority */ "./src/app/ms-back-office/modules/ms-tasks/models/priority.ts");
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
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var TasksTableComponent = /** @class */ (function () {
    function TasksTableComponent(activatedRoute, dialog, errorHandlingService, tasksService, toastr) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.tasksService = tasksService;
        this.toastr = toastr;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
        this.tasks = [];
        this.priorities = _models_priority__WEBPACK_IMPORTED_MODULE_11__["PRIORITY"];
    }
    TasksTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.users = this.activatedRoute.snapshot.data.users;
        // Begin observing style list changes.
        this.tasksList = this.tasksService.tasksList.subscribe(function (TasksList) {
            _this.totalLength = TasksList.dataCount;
            _this.tasks = TasksList.data;
            if (_this.tasks.length === 0 && _this.totalLength > 0 && _this.tasksService.previousPageSize > 0) {
                _this.tasksService.previousPageIndex =
                    Math.ceil(_this.totalLength / _this.tasksService.previousPageSize) - 1;
                _this.tasksService.reloadTasks().subscribe(function (response) {
                    _this.tasksService.tasksList.next(response);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
        });
    };
    TasksTableComponent.prototype.ngAfterViewInit = function () {
        this.loadPage();
    };
    TasksTableComponent.prototype.ngOnDestroy = function () {
        this.tasksList.unsubscribe();
        this.filterValueChanges.unsubscribe();
    };
    TasksTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    TasksTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.tasksService.getTasks(Object.assign({}, this.filter.value), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize).subscribe(function (response) {
            _this.tasksService.tasksList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    TasksTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    TasksTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    TasksTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    TasksTableComponent.prototype.addTaskModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    TasksTableComponent.prototype.editTaskModal = function (id) {
        var _this = this;
        this.modalRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"], {
            height: '60%',
            width: '60%',
            data: {
                id: id,
                priorities: this.priorities,
                users: this.users,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.loadPage();
        });
    };
    TasksTableComponent.prototype.getUsers = function (id) {
        try {
            return this.users.find(function (user) {
                return user.id === id;
            }).firstName;
        }
        catch (err) {
            return;
        }
    };
    //delete
    TasksTableComponent.prototype.getTaskToDelete = function (data) {
        var _this = this;
        this.tasksService.getTask(data.id).subscribe(function (response) {
            data = response.data;
            _this.confirmDeleteTask(data);
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    TasksTableComponent.prototype.confirmDeleteTask = function (data) {
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
                _this.deleteTask(data);
            }
        });
    };
    TasksTableComponent.prototype.deleteTask = function (data) {
        var _this = this;
        this.tasksService.deleteTask(data.id).subscribe(function (response) {
            _this.tasksService.reloadTasks().subscribe(function (response) {
                _this.tasksService.tasksList.next(response);
                _this.toastr.success(deletedMessageKey);
                _this.loadPage();
            }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TasksTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TasksTableComponent.prototype, "sort", void 0);
    TasksTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tasks-table',
            template: __webpack_require__(/*! ./tasks-table.component.html */ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.html"),
            styles: [__webpack_require__(/*! ./tasks-table.component.scss */ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"],
            _services_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], TasksTableComponent);
    return TasksTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/models/Tasks.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/models/Tasks.ts ***!
  \*****************************************************************/
/*! exports provided: Task, TasksListResponse, TasksResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListResponse", function() { return TasksListResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksResponse", function() { return TasksResponse; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());

var TasksListResponse = /** @class */ (function () {
    function TasksListResponse() {
    }
    return TasksListResponse;
}());

var TasksResponse = /** @class */ (function () {
    function TasksResponse() {
    }
    return TasksResponse;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/models/priority.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/models/priority.ts ***!
  \********************************************************************/
/*! exports provided: Priority, PRIORITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY", function() { return PRIORITY; });
var Priority = /** @class */ (function () {
    function Priority() {
    }
    return Priority;
}());

;
var PRIORITY = [
    { value: 'Low', name: 'Low' },
    { value: 'Medium', name: 'Medium' },
    { value: 'High', name: 'High' },
    { value: 'Very High', name: 'Very High' },
    { value: 'Urgent', name: 'Urgent' },
];


/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/ms-tasks-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/ms-tasks-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MsTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsTasksRoutingModule", function() { return MsTasksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tasks-table/tasks-table.component */ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.ts");
/* harmony import */ var _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delete-task/delete-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.ts");
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts");
/* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts");
/* harmony import */ var _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config-resolve.service */ "./src/app/config/services/config-resolve.service.ts");
/* harmony import */ var _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ms-brands/services/brands-resolve.service */ "./src/app/ms-back-office/modules/ms-brands/services/brands-resolve.service.ts");
/* harmony import */ var _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ms-users/services/users-resolve.service */ "./src/app/ms-back-office/modules/ms-users/services/users-resolve.service.ts");
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
        component: _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_2__["TasksTableComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            users: _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UsersResolveService"]
        }
    },
    {
        path: 'create',
        component: _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            users: _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UsersResolveService"]
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__["EditTaskComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            brands: _ms_brands_services_brands_resolve_service__WEBPACK_IMPORTED_MODULE_7__["BrandsResolveService"],
            TaskId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"],
            users: _ms_users_services_users_resolve_service__WEBPACK_IMPORTED_MODULE_8__["UsersResolveService"]
        },
        data: { closeRouteCommand: ['../../'] }
    },
    {
        path: 'delete/:id',
        component: _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_3__["DeleteTaskComponent"],
        //canActivate: [AuthGuardService],
        resolve: {
            config: _config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_6__["ConfigResolveService"],
            TaskId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_9__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    }
];
var MsTasksRoutingModule = /** @class */ (function () {
    function MsTasksRoutingModule() {
    }
    MsTasksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MsTasksRoutingModule);
    return MsTasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/ms-tasks.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/ms-tasks.module.ts ***!
  \********************************************************************/
/*! exports provided: MsTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsTasksModule", function() { return MsTasksModule; });
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
/* harmony import */ var _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/task-form/task-form.component */ "./src/app/ms-back-office/modules/ms-tasks/components/task-form/task-form.component.ts");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tasks-table/tasks-table.component */ "./src/app/ms-back-office/modules/ms-tasks/components/tasks-table/tasks-table.component.ts");
/* harmony import */ var _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/delete-task/delete-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/delete-task/delete-task.component.ts");
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/edit-task/edit-task.component.ts");
/* harmony import */ var _ms_tasks_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ms-tasks-routing.module */ "./src/app/ms-back-office/modules/ms-tasks/ms-tasks-routing.module.ts");
/* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/new-task/new-task.component */ "./src/app/ms-back-office/modules/ms-tasks/components/new-task/new-task.component.ts");
/* harmony import */ var _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pending-tasks-table/pending-tasks-table.component */ "./src/app/ms-back-office/modules/ms-tasks/components/pending-tasks-table/pending-tasks-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//














//

//







var MsTasksModule = /** @class */ (function () {
    function MsTasksModule() {
    }
    MsTasksModule = __decorate([
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
                _ms_tasks_routing_module__WEBPACK_IMPORTED_MODULE_19__["MsTasksRoutingModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_14__["AskBeforeRefreshModule"]
            ],
            declarations: [
                _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_15__["TaskFormComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_16__["TasksTableComponent"],
                _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_17__["DeleteTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_18__["EditTaskComponent"],
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_20__["NewTaskComponent"],
                _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_21__["PendingTasksTableComponent"]
            ],
            exports: [
                _components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_15__["TaskFormComponent"],
                _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_16__["TasksTableComponent"],
                _components_delete_task_delete_task_component__WEBPACK_IMPORTED_MODULE_17__["DeleteTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_18__["EditTaskComponent"],
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_20__["NewTaskComponent"],
                _components_pending_tasks_table_pending_tasks_table_component__WEBPACK_IMPORTED_MODULE_21__["PendingTasksTableComponent"]
            ],
            entryComponents: [
                _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_20__["NewTaskComponent"],
                _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_18__["EditTaskComponent"],
            ]
        })
    ], MsTasksModule);
    return MsTasksModule;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-tasks/services/tasks.service.ts ***!
  \***************************************************************************/
/*! exports provided: ASCENDING, TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
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
var TasksService = /** @class */ (function () {
    function TasksService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'description';
        this.previousSortDirection = 'asc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.tasksList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.config.apiConfigs.tasks.apiEndpoint;
    }
    //
    // Begin functions that most services have.
    //
    TasksService.prototype.getTasks = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
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
    // a Task for example.
    //
    TasksService.prototype.reloadTasks = function () {
        return this.getTasks(this.previousFilter, this.previousSortColumn, this.previousSortDirection, this.previousPageIndex, this.previousPageSize);
    };
    TasksService.prototype.postTask = function (data) {
        return this.http.post(this.apiEndpoint, JSON.stringify(data));
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.apiEndpoint + id + '/');
    };
    TasksService.prototype.putTask = function (data) {
        return this.http.put(this.apiEndpoint + data.id + '/', JSON.stringify(data));
    };
    TasksService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiEndpoint + id + '/');
    };
    TasksService.prototype.formatQueryParams = function (filter, sortColumn, sortDirection, pageIndex, pageSize) {
        var queryParams = '';
        if (filter.description && filter.description.length > 0) {
            queryParams += queryParams.length > 0 ? '&' : '?';
            queryParams += "description=" + filter.description;
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
    TasksService.prototype.getAllTasks = function () {
        return this.http.get(this.apiEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.data;
        }));
    };
    TasksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-users/services/users-resolve.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-users/services/users-resolve.service.ts ***!
  \***********************************************************************************/
/*! exports provided: UsersResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersResolveService", function() { return UsersResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/ms-back-office/modules/ms-users/services/users.service.ts");
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


//import { setTranslations } from 'ngx-translate';TODO
var errorKey = 'Error';
var UsersResolveService = /** @class */ (function () {
    function UsersResolveService(usersService, 
    //private translate: TranslateService,TODO
    errorHandlingService) {
        this.usersService = usersService;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);TODO
    }
    UsersResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.usersService.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (brands) { return brands; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    UsersResolveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlingService"]])
    ], UsersResolveService);
    return UsersResolveService;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~ms-tasks-ms-tasks-module.js.map