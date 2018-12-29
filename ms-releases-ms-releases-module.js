(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ms-releases-ms-releases-module"],{

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
//# sourceMappingURL=ms-releases-ms-releases-module.js.map