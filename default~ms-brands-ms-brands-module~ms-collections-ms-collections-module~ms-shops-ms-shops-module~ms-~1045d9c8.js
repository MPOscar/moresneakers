(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-shops-ms-shops-module~ms-~1045d9c8"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core/directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
















/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"], _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__["AgmRectangle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__["AgmDataLayer"], _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__["AgmFitBounds"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    /**
       * Please use this method when you register the module at the root level.
       */
    AgmCoreModule.forRoot = /**
       * Please use this method when you register the module at the root level.
       */
    function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__["AgmRectangle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__["AgmDataLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_7__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_8__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__["AgmPolylinePoint"]; });

/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["AgmFitBounds"]; });












//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */
        this.editable = false;
        /**
           * The radius in meters on the Earth's surface.
           */
        this.radius = 0;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this circle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the circle's center is changed.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the circle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the circle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the circle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle's radius is changed.
           */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    /**
       * Gets the LatLngBounds of this Circle.
       */
    AgmCircle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Circle.
       */
    function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    AgmCircle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-circle'
                },] },
    ];
    /** @nocollapse */
    AgmCircle.ctorParameters = function () { return [
        { type: _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"], },
    ]; };
    AgmCircle.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['circleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "radiusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * The geoJson to be displayed
           */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.toString = /** @internal */
    function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = /** @internal */
    function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    AgmDataLayer._dataOptionsAttributes = ['style'];
    AgmDataLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-data-layer'
                },] },
    ];
    /** @nocollapse */
    AgmDataLayer.ctorParameters = function () { return [
        { type: _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"], },
    ]; };
    AgmDataLayer.propDecorators = {
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "geoJson": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/fit-bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/fit-bounds.js ***!
  \*********************************************************/
/*! exports provided: AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnChanges = /**
       * @internal
       */
    function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnInit = /**
       * @internal
       */
    function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lng;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnDestroy = /**
       * @internal
       */
    function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    AgmFitBounds.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[agmFitBounds]'
                },] },
    ];
    /** @nocollapse */
    AgmFitBounds.ctorParameters = function () { return [
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsService"], },
    ]; };
    AgmFitBounds.propDecorators = {
        "agmFitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * If true, the layer receives mouse events. Default value is true.
           */
        this.clickable = true;
        /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */
        this.preserveViewport = false;
        /**
           * Whether to render the screen overlays. Default true.
           */
        this.screenOverlays = true;
        /**
           * Suppress the rendering of info windows when layer features are clicked.
           */
        this.suppressInfoWindows = false;
        /**
           * The URL of the KML document to display.
           */
        this.url = null;
        /**
           * The z-index of the layer.
           */
        this.zIndex = null;
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layers default viewport has changed.
           */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.toString = /** @internal */
    function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-kml-layer'
                },] },
    ];
    /** @nocollapse */
    AgmKmlLayer.ctorParameters = function () { return [
        { type: _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"], },
    ]; };
    AgmKmlLayer.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "preserveViewport": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "screenOverlays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "suppressInfoWindows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "url": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "defaultViewportChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "statusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
           * If true, the marker can be dragged. Default value is false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If true, the marker is visible
           */
        this.visible = true;
        /**
           * Whether to automatically open the child info window when the marker is clicked.
           */
        this.openInfoWindow = true;
        /**
           * The marker's opacity between 0.0 and 1.0.
           */
        this.opacity = 1;
        /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */
        this.zIndex = 1;
        /**
           * If true, the marker can be clicked. Default value is true.
           */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
           * This event emitter gets emitted when the user clicks on the marker.
           */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user rightclicks on the marker.
           */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the marker.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses over the marker.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses outside the marker.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * @internal
           */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = /* @internal */
    function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmMarker.prototype.getFitBoundsDetails$ = /**
       * @internal
       */
    function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.toString = /** @internal */
    function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = /** @internal */
    function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-marker',
                    providers: [
                        { provide: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["FitBoundsAccessor"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AgmMarker; }) }
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    AgmMarker.ctorParameters = function () { return [
        { type: _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    AgmMarker.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerDraggable',] },],
        "iconUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerClickable',] },],
        "markerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"],] },],
    };
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */
        this.paths = [];
        /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polygon.
           */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polygon.
           */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polygon.
           */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseout.
           */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseover.
           */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polygon is right-clicked on.
           */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = /** @internal */
    function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    AgmPolygon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polygon'
                },] },
    ];
    /** @nocollapse */
    AgmPolygon.ctorParameters = function () { return [
        { type: _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"], },
    ]; };
    AgmPolygon.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polyDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "paths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polyClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
           * This event emitter gets emitted when the position of the point changed.
           */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    AgmPolylinePoint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
    ];
    /** @nocollapse */
    AgmPolylinePoint.ctorParameters = function () { return []; };
    AgmPolylinePoint.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "positionChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * Whether this polyline is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polyline.
           */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polyline.
           */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polyline.
           */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseout.
           */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseover.
           */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polyline is right-clicked on.
           */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = /** @internal */
    function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype._getPoints = /** @internal */
    function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polyline'
                },] },
    ];
    /** @nocollapse */
    AgmPolyline.ctorParameters = function () { return [
        { type: _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"], },
    ]; };
    AgmPolyline.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polylineDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lineClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"],] },],
    };
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/rectangle.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/rectangle.js ***!
  \********************************************************/
/*! exports provided: AgmRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */
        this.editable = false;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the rectangle's is changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the rectangle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the rectangle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the rectangle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the rectangle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    /**
       * Gets the LatLngBounds of this Rectangle.
       */
    AgmRectangle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Rectangle.
       */
    function () {
        return this._manager.getBounds(this);
    };
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    AgmRectangle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-rectangle'
                },] },
    ];
    /** @nocollapse */
    AgmRectangle.ctorParameters = function () { return [
        { type: _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"], },
    ]; };
    AgmRectangle.propDecorators = {
        "north": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "east": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "south": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "west": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['rectangleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmRectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmFitBounds"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__["RectangleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["NoOpMapsAPILoader"]; });

/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__["FitBoundsAccessor"]; });














//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
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



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"], },
    ]; };
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var /**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

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
var messageKey = 'Are you sure you want to delete this Shop?<br><br> Note that all linked offers will be deleted too.<br><br>';
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

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <mat-tab-group>\n\n        <mat-tab label=\"Shop\">\n\n          <div class=\"mb-20 margin-top-25px\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n            <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n              <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"50\" class=\"margin-right-25px\">\n\n                  <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                    <mat-label>Shop Name</mat-label>\n\n                    <input matInput type=\"text\" formControlName=\"name\" required>\n\n                  </mat-form-field>\n\n                  <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                    <mat-label>Traking list base URL</mat-label>\n\n                    <input matInput type=\"text\" formControlName=\"trackingListBaseUrl\">\n\n                  </mat-form-field>\n\n                  <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Collection</mat-label>\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collection\">\n\n              <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n\n                {{collection.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n\n\n                  <!--mat-form-field class=\"width-100pc\">\n\n            <mat-label>Gender</mat-label>\n\n            <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\n\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n\n                {{gender.name}}\n\n              </mat-option>\n\n            </mat-select>\n\n          </mat-form-field-->\n\n\n\n                  <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                    <mat-label>Address</mat-label>\n\n                    <input matInput type=\"text\" formControlName=\"address\">\n\n                  </mat-form-field>\n\n\n                  <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                    <div [fxFlex]=\"50\">\n\n                      <mat-form-field class=\"width-90pct\">\n\n                        <mat-select disableOptionCentering placeholder=\"Region\" formControlName=\"region\" panelClass=\"myPanelClass\">\n\n                          <mat-option>...</mat-option>\n\n                          <mat-option *ngFor=\"let region of regions\" [value]=\"region.id\">\n\n                            {{region.name}}\n\n                          </mat-option>\n\n                        </mat-select>\n\n                      </mat-form-field>\n\n                    </div>\n\n                    <div [fxFlex]=\"50\" class=\"\">\n\n                      <mat-form-field class=\"width-100pc\">\n\n                        <mat-select disableOptionCentering placeholder=\"Country\" formControlName=\"country\">\n\n                          <mat-option>...</mat-option>\n\n                          <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                            {{country.name}}\n\n                          </mat-option>\n\n                        </mat-select>\n\n                      </mat-form-field>\n\n                    </div>\n\n                  </div>\n\n                  <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                    <mat-label>Zip Code</mat-label>\n\n                    <input matInput type=\"text\" formControlName=\"zipCode\">\n\n                  </mat-form-field>\n\n                  <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                    <div [fxFlex]=\"50\">\n\n                      <mat-form-field class=\"width-90pct\">\n\n                        <mat-label>Rank</mat-label>\n\n                        <input matInput type=\"text\" formControlName=\"rank\">\n\n                        <!--mat-select disableOptionCentering placeholder=\"Rank\" formControlName=\"rank\">\n\n                          <mat-option>...</mat-option>\n\n                          <mat-option *ngFor=\"let rank_ of rank\" [value]=\"rank_.value\">\n\n                            {{rank_.value}}\n\n                          </mat-option>\n\n                        </mat-select-->\n\n                      </mat-form-field>\n\n                    </div>\n\n                    <div [fxFlex]=\"50\" class=\"\">\n\n                      <mat-form-field class=\"width-100pc\">\n\n                        <mat-select disableOptionCentering placeholder=\"Currency\" formControlName=\"currency\">\n\n                          <mat-option>...</mat-option>\n\n                          <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\n\n                            {{currenc.name}}\n\n                          </mat-option>\n\n                        </mat-select>\n\n                      </mat-form-field>\n\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Select Brands\" formControlName=\"brand\" multiple>\n\n                      <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                        {{brand.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Select Category\" formControlName=\"category\" multiple>\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n\n                        {{category.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Shipping Countries\" formControlName=\"shippingCountries\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let option of shippingCountries\" [value]=\"option.id\">\n\n                        {{option.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                  <mat-form-field *ngIf=\"formGroup.get('shippingCountries').value ==='Select Countries'\" class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Country\" formControlName=\"countries\" multiple>\n\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                        {{country.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                  <div class=\"padding-top-10px\">\n\n                    <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle>\n\n                  </div>\n\n                  <mat-form-field *ngIf=\"!data.isParent\" class=\"width-100pc\">\n\n                    <mat-label>Parent Shop</mat-label>\n\n                    <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let shop of parentShops\" [value]=\"shop.id\">\n\n                        {{shop.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\n\n                <mat-label>Shipping Details</mat-label>\n\n                <textarea matInput formControlName=\"shippingDetails\" class=\"min-height-100px\"></textarea>\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\n\n                <mat-label>Description</mat-label>\n\n                <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n              </mat-form-field>\n\n            </div>\n\n            <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n              <div class=\"display-flex justify-content-center\">\n                <h3>Shop Logo</h3>\n              </div>\n\n              <images-card name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\" (deletedFace)=\"onDeleteFace($event)\" [principal]=\"principal\"></images-card>\n\n            </div>\n\n          </div>\n          <div class=\"mb-20 color-material\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" formArrayName=\"workingHours\">\n\n\n            <div [fxFlex]=\"60\" fxLayout=\"column\" class=\"max-width-480px\">\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" class=\"margin-bottom-25px\">\n\n                <div [fxFlex]=\"70\">\n\n                  <h3>Working Hours</h3>\n\n                </div>\n\n                <div [fxFlex]=\"30\">\n\n                  <h5>Non-Working</h5>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" >\n\n                <div fxLayout=\"row\" [formGroupName]=\"0\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Monday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourMonday\" />\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourMonday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Monday', '0')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"1\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Tuesday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourTuesday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourTuesday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Tuesday', '1')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"2\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Wednesday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourWednesday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourWednesday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Wednesday', '2')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"3\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Thursday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourThursday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourThursday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Thursday', '3')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"4\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Friday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourFriday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourFriday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Friday', '4')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"5\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Saturday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourSaturday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourSaturday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Saturday', '5')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n                <div fxLayout=\"row\" [formGroupName]=\"6\" class=\"flex-grow-1\">\n\n                  <div [fxFlex]=\"100\">\n\n                    Sunday\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"openHourSunday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <input matInput atp-time-picker class=\"cursor-pointer\"  formControlName=\"closeHourSunday\"/>\n\n                  </div>\n\n                  <div [fxFlex]=\"100\">\n\n                    <mat-checkbox (click)=\"resetTime('Sunday', '6')\"></mat-checkbox>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n\n            <!--div [fxFlex]=\"60\" fxLayout=\"column\" class=\" margin-right-25px\">\n\n              <div [fxFlex]=\"\" fxLayout=\"row\" class=\"justify-content-space-between\">\n\n                <div>\n\n                  <mat-slide-toggle>Make Deal</mat-slide-toggle>\n\n                </div>\n\n                <div class=\"padding-bottom-10px\">\n\n                  <button type=\"button\" class=\"border-none border-radius-5px\" mat-stroked-button>\n                    \n                    Add a new Deal\n\n                    <mat-icon>add</mat-icon>\n\n                  </button>\n\n                </div>\n\n              </div>              \n\n            </div-->\n\n          </div>\n\n        </mat-tab>\n\n        <mat-tab label=\"Deals\" class=\"width-50pc\">\n\n          <deals-shop-table [shopId]=\"shopId\" [dealId]=\"dealId\" [shops]=\"shops\" class=\"padding-top-25px\"></deals-shop-table>\n\n        </mat-tab>\n\n        <mat-tab *ngIf=\"data.isParent\" label=\"Sub-shops\" class=\"width-50pc\">\n\n          <div fxLayout=\"row\" class=\"margin-bottom-25px liked-shops margin-right-10px padding-10px\">\n            <div fxLayout=\"column\" class=\"flex-grow-1\">\n\n              <h3>Sub-shops</h3>\n              <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px border-top-width-2px border-top-color-grey\">\n\n                <!--div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\"-->\n                <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\n                  <mat-card *ngFor=\"let shop of subShops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\n                    <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\n                      <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\n                    </div>\n                    <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\n                      <mat-checkbox [checked]=\"true\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\"\n                        [disabled]=\"true\">{{ shop.name }}</mat-checkbox>\n                    </div>\n                  </mat-card>\n                  <!--/div-->\n                </div>\n\n              </div>\n              <div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\n\n                <!--button mat-stroked-button type=\"button\">Remove Selection</button-->\n\n                <button mat-raised-button type=\"button\" color=\"primary\" class=\"\" (click)=\"showLinkSubShopsModal()\">{{ 'Link New Stores' | translate }}</button>\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n        </mat-tab>\n\n        <mat-tab label=\"Offers\" class=\"width-50pc\">\n          <offers-shop-table [shopId]=\"shopId\" [collections]=\"collections\" [releases]=\"releases\"></offers-shop-table>\n        </mat-tab>\n\n      </mat-tab-group>\n\n\n    </div>\n\n  </div>\n\n\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n::ng-deep .mat-sort-header-arrow.ng-trigger.ng-trigger-arrowPosition {\n  opacity: 0; }\n\n::ng-deep .mat-sort-header-pointer-left.ng-trigger.ng-trigger-leftPointer {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n::ng-deep .mat-sort-header-pointer-right.ng-trigger.ng-trigger-rightPointer {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\n.mat-tab-header {\n  padding-bottom: 25px !important; }\n\n::ng-deep .mat-tab-label {\n  widows: 50% !important; }\n\nmat-card {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px; }\n\nimg {\n  height: 130px !important;\n  width: 100% !important; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\n.myPanelClass {\n  margin-top: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2VkaXQtc2hvcC1mb3JtL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxlZGl0LXNob3AtZm9ybVxcZWRpdC1zaG9wLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFHRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGtDQUF5QjtVQUF6QiwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxpQ0FBd0I7VUFBeEIseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0NBQStCLEVBQ2xDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVIO0VBQ0kseUJBQXdCO0VBQ3hCLHVCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9lZGl0LXNob3AtZm9ybS9lZGl0LXNob3AtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItYXJyb3cubmctdHJpZ2dlci5uZy10cmlnZ2VyLWFycm93UG9zaXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItcG9pbnRlci1sZWZ0Lm5nLXRyaWdnZXIubmctdHJpZ2dlci1sZWZ0UG9pbnRlcntcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItcG9pbnRlci1yaWdodC5uZy10cmlnZ2VyLm5nLXRyaWdnZXItcmlnaHRQb2ludGVye1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWhlYWRlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHtcclxuICAgIHdpZG93czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15UGFuZWxDbGFzc3tcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _services_shops_images_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/shops-images.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-images.service.ts");
/* harmony import */ var _shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../link-shops-subshops/link-shops-subshops-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.ts");
/* harmony import */ var _models_shippingCountries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/shippingCountries */ "./src/app/ms-back-office/modules/ms-shops/models/shippingCountries.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
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
var timeZoneOffset = new Date().getTimezoneOffset();
var EditShopFormComponent = /** @class */ (function (_super) {
    __extends(EditShopFormComponent, _super);
    function EditShopFormComponent(activatedRoute, dialog, errorHandlingService, formBuilder, shopsService, shopsImgesService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.activatedRoute = activatedRoute;
        _this.dialog = dialog;
        _this.errorHandlingService = errorHandlingService;
        _this.formBuilder = formBuilder;
        _this.shopsService = shopsService;
        _this.shopsImgesService = shopsImgesService;
        _this.currency = _models_currency__WEBPACK_IMPORTED_MODULE_6__["CURRENCY"];
        _this.countries = _models_country__WEBPACK_IMPORTED_MODULE_7__["COUNTRIES"];
        _this.regions = _models_regions__WEBPACK_IMPORTED_MODULE_9__["REGIONS"];
        _this.rank = _models_rank__WEBPACK_IMPORTED_MODULE_8__["RANK"];
        _this.timeZoneOffset = timeZoneOffset;
        _this.shippingCountries = _models_shippingCountries__WEBPACK_IMPORTED_MODULE_14__["SHIPPINGCOUNTRIES"];
        _this.faceList = [];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    EditShopFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subShops = this.shops.filter(function (shop) {
            return shop.parent === _this.shopId;
        });
        this.parentShops = this.shops.filter(function (shop) {
            return shop.isParent && shop.id != _this.shopId;
        });
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
            shippingCountries: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shippingCountries),
            countries: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.countries ? this.data.countries.split(',') : this.data.countries),
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
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.zipCode),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.isParent),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.parent),
            workingHours: this.formBuilder.array([
                this.formBuilder.group({
                    dayOfWeekMonday: 1,
                    openHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(1).openHour),
                    closeHourMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(1).closeHour),
                    notWorkingMonday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                }),
                this.formBuilder.group({
                    dayOfWeekTuesday: 2,
                    openHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(2).openHour),
                    closeHourTuesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(2).closeHour),
                }),
                this.formBuilder.group({
                    dayOfWeekWednesday: 3,
                    openHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(3).openHour),
                    closeHourWednesday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(3).closeHour),
                }),
                this.formBuilder.group({
                    dayOfWeekThursday: 4,
                    openHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(4).openHour),
                    closeHourThursday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(4).closeHour),
                }),
                this.formBuilder.group({
                    dayOfWeekFriday: 5,
                    openHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(5).openHour),
                    closeHourFriday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(5).closeHour),
                }),
                this.formBuilder.group({
                    dayOfWeekSaturday: 6,
                    openHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(6).openHour),
                    closeHourSaturday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(6).closeHour),
                }),
                this.formBuilder.group({
                    dayOfWeekSunday: 7,
                    openHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(7).openHour),
                    closeHourSunday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.findWorkinHorsInData(7).closeHour),
                })
            ]),
        });
    };
    EditShopFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            try {
                this.data.countries = this.data.countries.join();
            }
            catch (_a) { }
            if (this.data.isParent) {
                this.data.parent = null;
            }
            this.data.workingHours = this.buidlWorkingHours(this.formGroup.get('workingHours').value);
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    EditShopFormComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_12__["ShopsSellingStyleModalComponent"], {
            height: '800px',
            width: '60%',
            data: { face: this.shop }
        });
    };
    EditShopFormComponent.prototype.showLinkSubShopsModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_13__["LinkShopsSubShopsModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                shopId: this.shopId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.shopsService.getAllShops().subscribe(function (response) {
                _this.shops = response;
                _this.subShops = _this.shops.filter(function (shop) {
                    return shop.parent === _this.shopId;
                });
            });
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
        if (this.data.workingHours.length > 1) {
            return this.data.workingHours.find(function (val) { return val.dayOfWeek === day; });
        }
        else {
            return {
                'dayOfWeek': 1, 'openHour': '00:00', 'closeHour': '00:00'
            };
        }
    };
    EditShopFormComponent.prototype.resetTime = function (day, index) {
        var openHour = "openHour" + day;
        //this.formGroup.get(`workingHours.${index}.openHourMonday`).setValue('01:00');
        this.formGroup.controls['workingHours']['controls']['0'].controls.openHourMonday.setValue('01:00');
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
    ], EditShopFormComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "subShops", void 0);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditShopFormComponent.prototype, "releases", void 0);
    EditShopFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-shop-form',
            template: __webpack_require__(/*! ./edit-shop-form.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-shop-form.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_15__["ErrorHandlingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_10__["ShopsService"],
            _services_shops_images_service__WEBPACK_IMPORTED_MODULE_11__["ShopsImgesService"],
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

module.exports = "<h1>EDIT SHOP</h1>\n\n<edit-shop-form *ngIf=\"data\"\n    [data]=\"data\"\n    [brands]=\"brands\"\n    [shopId]=\"shopId\"\n    [shops]=\"shops\"\n    [dealId]=\"dealId\"\n    [categories]=\"categories\"\n    [collections]=\"collections\"\n    [faceList]=\"faceList\"\n    [releases]=\"releases\"\n    (accept)=\"submit($event)\"\n    [validationErrors]=\"validationErrors\"\n    (cancel)=\"cancel()\"\n    (dataChange)=\"dataChanged()\">\n</edit-shop-form>\n\n"

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
        this.faceList = [];
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
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
        this.shops = this.activatedRoute.snapshot.data.shops;
        this.releases = this.activatedRoute.snapshot.data.releases;
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

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nimg{\r\n  height: 130px !important;\r\n  width: 100%!important;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtYnJhbmQvbGluay1zaG9wcy1icmFuZC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvbGluay1zaG9wcy1icmFuZC9saW5rLXNob3BzLWJyYW5kLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

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

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nimg{\r\n  height: 130px !important;\r\n  width: 100%!important;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtY29sbGVjdGlvbi9saW5rLXNob3BzLWNvbGxlY3Rpb24tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0Usd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtY29sbGVjdGlvbi9saW5rLXNob3BzLWNvbGxlY3Rpb24tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW1ne1xyXG4gIGhlaWdodDogMTMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTYwLXBjdHtcclxuICBtYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"

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

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nimg{\r\n  height: 130px !important;\r\n  width: 100%!important;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL2xpbmstc2hvcHMtc3Vic2hvcHMvbGluay1zaG9wcy1zdWJzaG9wcy1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvbGluay1zaG9wcy1zdWJzaG9wcy9saW5rLXNob3BzLXN1YnNob3BzLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"NAME\">\r\n  </mat-form-field>\r\n\r\n</mat-toolbar-->\r\n\r\n<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\r\n\r\n        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n          <mat-card *ngFor=\"let shop of subShops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n            <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n              <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n            </div>\r\n            <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n              <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n            </div>\r\n          </mat-card>\r\n          <!--/div-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"onNoClick()\">{{ 'Save Changes' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"onNoClick()\">{{ 'Close' | translate }}</button>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LinkShopsSubShopsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkShopsSubShopsModalComponent", function() { return LinkShopsSubShopsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ms-collections/services/collections.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections.service.ts");
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


//import { setTranslations } from '@cognitec/ngx-translate';
//import { TRANSLATIONS } from './i18n/annotation-tool-modal.component.translations';

//

//import { Landmarks } from '../../models/landmarks';




//

var errorKey = 'Error';
var LinkShopsSubShopsModalComponent = /** @class */ (function () {
    function LinkShopsSubShopsModalComponent(element, breakpointObserver, dialogRef, errorHandlingService, toastr, translateService, collectionsService, shopsService, dialogData) {
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.collectionsService = collectionsService;
        this.shopsService = shopsService;
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
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].HandsetPortrait
        ]).subscribe(function (result) {
            if (result.matches) {
            }
        });
    }
    LinkShopsSubShopsModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function (change) { return _this.loadPage(); });
        /*this.shopsList = this.shopsService.shopsList.subscribe((shopsList: any) => {
          this.shops = shopsList.data;
    
          this.subShops = this.shops.filter(shop => {
            return !shop.isParent;
          });
    
          this.subShops.forEach((shop) => {
            //this.isLinked(shop.id);
            if (shop.parent === this.dialogData.shopId) {
              shop.linked = true;
              shop.checked = true;
            } else {
              shop.linked = false;
              shop.checked = false;
            }
          });
    
          this.shopsService.reloadShops().subscribe(response => {
            this.shopsService.shopsList.next(response);
          },
            (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error));
    
        });*/
        this.subShops = this.dialogData.shops.filter(function (shop) {
            return !shop.isParent;
        });
        this.subShops.forEach(function (shop) {
            //this.isLinked(shop.id);
            if (shop.parent === _this.dialogData.shopId) {
                shop.linked = true;
                shop.checked = true;
            }
            else {
                shop.linked = false;
                shop.checked = false;
            }
        });
    };
    LinkShopsSubShopsModalComponent.prototype.ngAfterViewInit = function () {
    };
    LinkShopsSubShopsModalComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    LinkShopsSubShopsModalComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    LinkShopsSubShopsModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LinkShopsSubShopsModalComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['name'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    LinkShopsSubShopsModalComponent.prototype.onNoClick = function () {
        this.close();
    };
    LinkShopsSubShopsModalComponent.prototype.linked = function (shopData) {
        var _this = this;
        shopData.linked = !shopData.linked;
        if (shopData.linked) {
            shopData.parent = this.dialogData.shopId;
        }
        else {
            shopData.parent = "";
        }
        this.shopsService.putShop(shopData).subscribe(function (response) {
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsSubShopsModalComponent.prototype.save = function () {
        var _this = this;
        this.shopsService.postShopLinkedSubShops(this.dialogData.shopId, this.linkedShops).subscribe(function (response) {
            _this.close();
            _this.toastr.success("Saved");
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorKey, error);
        });
    };
    LinkShopsSubShopsModalComponent.prototype.isLinked = function (id) {
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
    LinkShopsSubShopsModalComponent.prototype.loadPage = function () {
        var _this = this;
        console.log(this.filter.value);
        this.shopsService.getShops(Object.assign({}, this.filter.value), "name", "desc", 0, 50).subscribe(function (response) {
            _this.shopsService.shopsList.next(response);
        }, function (err) {
            _this.errorHandlingService.handleUiError(errorKey, err);
        });
    };
    LinkShopsSubShopsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-shops-subshops-modal',
            template: __webpack_require__(/*! ./link-shops-subshops-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.html"),
            styles: [__webpack_require__(/*! ./link-shops-subshops-modal.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.css")],
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_9__["CollectionsService"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_5__["ShopsService"], Object])
    ], LinkShopsSubShopsModalComponent);
    return LinkShopsSubShopsModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>SHOP CREATOR</h1>\n\n<shop-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    [brands]=\"dialogData.brands\"\n    [categories]=\"dialogData.categories\"\n    [shops]=\"dialogData.shops\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</shop-form>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL25ldy1zaG9wLW1vZGFsL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxuZXctc2hvcC1tb2RhbFxcbmV3LXNob3AtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9uZXctc2hvcC1tb2RhbC9uZXctc2hvcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: NewShopModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewShopModalComponent", function() { return NewShopModalComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//



//








var errorKey = 'Error';
var savedUserMessageKey = 'Saved User Message';
var NewShopModalComponent = /** @class */ (function () {
    function NewShopModalComponent(activatedRoute, dialog, dialogRef, shopsService, shopsImgesService, errorHandlingService, imagesService, router, translate, toastr, dialogData) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.shopsService = shopsService;
        this.shopsImgesService = shopsImgesService;
        this.errorHandlingService = errorHandlingService;
        this.imagesService = imagesService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialogData = dialogData;
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
    NewShopModalComponent.prototype.ngOnInit = function () {
        this.brands = this.activatedRoute.snapshot.data.brands;
        this.categories = this.activatedRoute.snapshot.data.categories;
        this.collections = this.activatedRoute.snapshot.data.collections;
        this.shops = this.activatedRoute.snapshot.data.shops;
    };
    NewShopModalComponent.prototype.submit = function (data) {
        this.createShop(data);
    };
    NewShopModalComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    NewShopModalComponent.prototype.close = function () {
        this.dialogRef.close();
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
    NewShopModalComponent.prototype.createShop = function (shopData) {
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
            _this.errorHandlingService.handleUiError(errorKey, error, 'shop');
            _this.validationErrors = error.formErrors;
        });
    };
    NewShopModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-shop-modal',
            template: __webpack_require__(/*! ./new-shop-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.html"),
            styles: [__webpack_require__(/*! ./new-shop-modal.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.scss")]
        }),
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_6__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_5__["CanDeactivateMixin"]]),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_10__["ShopsService"],
            _services_shops_images_service__WEBPACK_IMPORTED_MODULE_11__["ShopsImgesService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"],
            _ui_modules_images_card_services_images_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], Object])
    ], NewShopModalComponent);
    return NewShopModalComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>SHOP CREATOR</h1>\n\n<shop-form class=\"flex-grow-1\"\n    [data]=\"data\"        \n    [brands]=\"brands\"\n    [categories]=\"categories\"\n    [shops]=\"shops\"\n    (accept)=\"submit($event)\"\n    (cancel)=\"cancel()\"\n    [validationErrors]=\"validationErrors\"\n    (dataChange)=\"dataChanged()\">\n</shop-form>"

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
        this.shops = this.activatedRoute.snapshot.data.shops;
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
            _this.errorHandlingService.handleUiError(errorKey, error, 'shop');
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

module.exports = "<form class=\"flex-grow-1 min-height-0 display-flex flex-direction-column\" [askBeforeRefresh]=\"formGroup.dirty\" [formGroup]=\"formGroup\"\n  novalidate role=\"form\" (ngSubmit)=\"submitClicked()\" autocomplete=\"off\" inputFocus>\n\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-top-25px\">\n\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\n\n      <div class=\"mb-20\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\n        <div [fxFlex]=\"50\" fxFlex fxLayout=\"column\" fxLayout.lt-md=\"column\">\n\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n            <div [fxFlex]=\"50\" class=\"margin-right-25px\">\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Shop Name</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"name\" required>\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Traking list base URL</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"trackingListBaseUrl\">\n\n              </mat-form-field>\n\n              <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Collection</mat-label>\n    \n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"collection\">\n    \n                  <mat-option *ngFor=\"let collection of collections\" [value]=\"collection.id\">\n    \n                    {{collection.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n\n\n              <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Gender</mat-label>\n    \n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"gender\">\n    \n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.id\">\n    \n                    {{gender.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Address</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"address\">\n\n              </mat-form-field>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-90pct\">\n\n                    <mat-select disableOptionCentering placeholder=\"Region\" formControlName=\"region\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let region of regions\" [value]=\"region.id\">\n\n                        {{region.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"50\" class=\"\">\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Country\" formControlName=\"country\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                        {{country.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n              <mat-form-field class=\"width-100pc margin-left-16px\">\n\n                <mat-label>Zip Code</mat-label>\n\n                <input matInput type=\"text\" formControlName=\"zipCode\">\n\n              </mat-form-field>\n\n              <div [fxFlex]=\"100\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n                <div [fxFlex]=\"50\">\n\n                  <mat-form-field class=\"width-90pct\">\n\n                    <mat-label>Rank</mat-label>\n\n                    <input matInput type=\"text\" formControlName=\"rank\">\n\n                    <!--mat-select disableOptionCentering placeholder=\"Rank\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let rank_ of rank\" [value]=\"rank_.value\">\n\n                        {{rank_.value}}\n\n                      </mat-option>\n\n                    </mat-select-->\n\n                  </mat-form-field>\n\n                </div>\n\n                <div [fxFlex]=\"50\" class=\"\">\n\n                  <mat-form-field class=\"width-100pc\">\n\n                    <mat-select disableOptionCentering placeholder=\"Currency\">\n\n                      <mat-option>...</mat-option>\n\n                      <mat-option *ngFor=\"let currenc of currency\" [value]=\"currenc.id\">\n\n                        {{currenc.name}}\n\n                      </mat-option>\n\n                    </mat-select>\n\n                  </mat-form-field>\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div [fxFlex]=\"50\">\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select disableOptionCentering placeholder=\"Select Brands\" formControlName=\"brand\" multiple>\n\n                  <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\n\n                    {{brand.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select disableOptionCentering placeholder=\"Select Category\" formControlName=\"category\" multiple>\n\n                  <mat-option>...</mat-option>\n\n                  <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n\n                    {{category.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n\n\n\n\n              <mat-form-field class=\"width-100pc\">\n\n                <mat-select disableOptionCentering placeholder=\"Shipping Countries\" formControlName=\"shippingCountries\">\n\n                  <mat-option>...</mat-option>\n\n                  <mat-option *ngFor=\"let option of shippingCountries\" [value]=\"option.id\">\n\n                    {{option.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <mat-form-field *ngIf=\"formGroup.get('shippingCountries').value ==='Select Countries'\" class=\"width-100pc\">\n\n                <mat-select disableOptionCentering placeholder=\"Country\" formControlName=\"countries\" multiple>\n\n                  <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">\n\n                    {{country.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n              <div class=\"padding-top-10px\">\n\n                <mat-slide-toggle class=\"padding-top-15px padding-bottom-15px\" formControlName=\"isParent\">Is Parent</mat-slide-toggle>\n\n              </div>\n\n              <mat-form-field *ngIf=\"!data.isParent\" class=\"width-100pc\">\n\n                <mat-label>Parent Shop</mat-label>\n\n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"parent\">\n\n                  <mat-option>...</mat-option>\n\n                  <mat-option *ngFor=\"let shop of parentShops\" [value]=\"shop.id\">\n\n                    {{shop.name}}\n\n                  </mat-option>\n\n                </mat-select>\n\n              </mat-form-field>\n\n\n              <!--div>\n\n                <mat-slide-toggle formControlName=\"makeDeal\" class=\"margin-bottom-25px margin-top-25px\">Hot</mat-slide-toggle>\n\n              </div-->\n              <!--mat-form-field class=\"width-100pc\">\n    \n                <mat-label>Color</mat-label>\n    \n                <mat-select disableOptionCentering placeholder=\"Select\" formControlName=\"color\">\n    \n                  <mat-option *ngFor=\"let color of colors\" [value]=\"color.id\">\n    \n                    {{color.name}}\n    \n                  </mat-option>\n    \n                </mat-select>\n    \n              </mat-form-field-->\n\n              <!--mat-form-field class=\"width-100pc margin-left-16px\">\n    \n                <mat-label>Suplied Color</mat-label>\n    \n                <input matInput type=\"text\" formControlName=\"supliedColor\">\n    \n              </mat-form-field>\n    \n              <mat-slide-toggle formControlName=\"children\">Children</mat-slide-toggle-->\n\n            </div>\n\n          </div>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\n\n            <mat-label>Shipping Details</mat-label>\n\n            <textarea matInput formControlName=\"shippingDetails\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n          <mat-form-field class=\"width-100pc margin-left-16px\" appearance=\"fill\">\n\n            <mat-label>Description</mat-label>\n\n            <textarea matInput formControlName=\"description\" class=\"min-height-100px\"></textarea>\n\n          </mat-form-field>\n\n        </div>\n\n        <div [fxFlex]=\"50\" class=\"border margin-right-25px max-width-480px\">\n          <div class=\"display-flex justify-content-center\">\n            <h3>Shop Logo</h3>\n          </div>\n\n          <images-card formControlName=\"faces\" name=\"faces\" class=\"flex-grow-1\" formControlName=\"faces\"></images-card>\n\n        </div>\n\n      </div>\n      <div class=\"mb-20 color-material\" fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\" formArrayName=\"workingHours\">\n\n        <div [fxFlex]=\"60\" fxLayout=\"column\" class=\"max-width-480px\">\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\" class=\"margin-bottom-25px\">\n\n            <div [fxFlex]=\"70\">\n\n              <h3>Working Hours</h3>\n\n            </div>\n\n            <div [fxFlex]=\"30\">\n\n              <h5>Non-Working</h5>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\" >\n\n            <div fxLayout=\"row\" [formGroupName]=\"0\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Monday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourMonday\" />\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourMonday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Monday', '0')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"1\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Tuesday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourTuesday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourTuesday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Tuesday', '1')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"2\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Wednesday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourWednesday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourWednesday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Wednesday', '2')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"3\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Thursday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourThursday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourThursday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Thursday', '3')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"4\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Friday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourFriday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourFriday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Friday', '4')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"5\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Saturday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourSaturday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourSaturday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Saturday', '5')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <div [fxFlex]=\"100\" fxLayout=\"row\">\n\n            <div fxLayout=\"row\" [formGroupName]=\"6\" class=\"flex-grow-1\">\n\n              <div [fxFlex]=\"100\">\n\n                Sunday\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"openHourSunday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <input matInput atp-time-picker class=\"cursor-pointer\" value=\"00:00\" formControlName=\"closeHourSunday\"/>\n\n              </div>\n\n              <div [fxFlex]=\"100\">\n\n                <mat-checkbox (click)=\"resetTime('Sunday', '6')\"></mat-checkbox>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <!--div [fxFlex]=\"60\" fxLayout=\"column\" class=\" margin-right-25px\">\n\n              <div [fxFlex]=\"\" fxLayout=\"row\" class=\"justify-content-space-between\">\n\n                <div>\n                  <mat-slide-toggle class=\"\">Make Deal</mat-slide-toggle>\n                </div>\n\n                <div class=\"padding-bottom-10px\">\n                  <button type=\"button\" class=\"border-none border-radius-5px\" mat-stroked-button>\n                    Add a new Deal\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </div>\n\n              </div>         \n\n            </div-->\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\n\n    <button mat-raised-button type=\"submit\" color=\"primary\">{{ 'Save' | translate }}</button>\n\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"cancelClicked()\">{{ 'Cancel' | translate }}</button>\n\n  </div>\n\n</form>\n\n<!--agm-map [latitude]=\"51.678418\" [longitude]=\"7.809007\">\n  <agm-marker [latitude]=\"51.678418\" [longitude]=\"7.809007\"></agm-marker>\n</agm-map-->"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.height-34px {\n  height: 34px !important; }\n\n.width-100pc {\n  width: 100%; }\n\nmat-form-field {\n  max-width: 100% !important; }\n\nagm-map {\n  height: 150px;\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3AtZm9ybS9FOlxcUFJPR1JBTUFDSU9OIElJSVxcbW9yZXNuZWFrZXJzLWJhY2tvZmZpY2Uvc3JjXFxhcHBcXG1zLWJhY2stb2ZmaWNlXFxtb2R1bGVzXFxtcy1zaG9wc1xcY29tcG9uZW50c1xcc2hvcC1mb3JtXFxzaG9wLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvc2hvcC1mb3JtL3Nob3AtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaGVpZ2h0LTM0cHh7XHJcbiAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLTEwMHBje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufSJdfQ== */"

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
/* harmony import */ var _models_shippingCountries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/shippingCountries */ "./src/app/ms-back-office/modules/ms-shops/models/shippingCountries.ts");
/* harmony import */ var _shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
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









var ShopFormComponent = /** @class */ (function (_super) {
    __extends(ShopFormComponent, _super);
    function ShopFormComponent(dialog, formBuilder, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.dialog = dialog;
        _this.formBuilder = formBuilder;
        _this.faceList = [];
        _this.currency = _models_currency__WEBPACK_IMPORTED_MODULE_4__["CURRENCY"];
        _this.countries = _models_country__WEBPACK_IMPORTED_MODULE_5__["COUNTRIES"];
        _this.shippingCountries = _models_shippingCountries__WEBPACK_IMPORTED_MODULE_8__["SHIPPINGCOUNTRIES"];
        _this.regions = _models_regions__WEBPACK_IMPORTED_MODULE_7__["REGIONS"];
        _this.rank = _models_rank__WEBPACK_IMPORTED_MODULE_6__["RANK"];
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);TODO
    }
    ShopFormComponent.prototype.ngOnInit = function () {
        this.parentShops = this.shops.filter(function (shop) {
            return shop.isParent;
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
    ShopFormComponent.prototype.createFormGroup = function () {
        this.faces = this.formBuilder.control(this.faceList);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            faces: this.faces,
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.address),
            shippingDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shippingDetails),
            shippingCountries: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.shippingCountries),
            countries: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.countries),
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
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.zipCode),
            isParent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.isParent),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.parent),
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
            try {
                this.data.countries = this.data.countries.join();
            }
            catch (_a) { }
            this.data.workingHours = this.buidlWorkingHours(this.data.workingHours);
            if (this.data.isParent) {
                this.data.parent = null;
            }
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    ShopFormComponent.prototype.showModal = function () {
        this.modalRef = this.dialog.open(_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShopsSellingStyleModalComponent"], {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShopFormComponent.prototype, "shops", void 0);
    ShopFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shop-form',
            template: __webpack_require__(/*! ./shop-form.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.html"),
            styles: [__webpack_require__(/*! ./shop-form.component.scss */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
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

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nimg{\r\n  height: 130px !important;\r\n  width: 100%!important;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3BzLXNlbGxpbmctc3R5bGUtbW9kYWwvc2hvcHMtc2VsbGluZy1zdHlsZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvc2hvcHMtc2VsbGluZy1zdHlsZS1tb2RhbC9zaG9wcy1zZWxsaW5nLXN0eWxlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" [fxFlex]=\"100\" fxLayout=\"column\">\r\n  <div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column\">\r\n\r\n    <div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\">\r\n\r\n      <div class=\"\" [fxFlex]=\"100\" fxLayout=\"row\">\r\n\r\n        <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n          <mat-card *ngFor=\"let shop of dialogData.shops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n            <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n              <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n            </div>\r\n            <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n              <mat-checkbox [checked]=\"shop.checked\" class=\"margin-top-10px\" matTooltip=\"{{ 'Link' | translate }}\" (click)=\"linked(shop)\">{{ shop.name }}</mat-checkbox>\r\n            </div>\r\n          </mat-card>\r\n          <!--/div-->\r\n        </div>\r\n\r\n        <!--div [fxFlex]=\"40\">\r\n          <h3>Stores Selling</h3>\r\n          <div fxLayout=\"column\" class=\"border flex-grow-1 overflow-auto display-flex \">\r\n\r\n            <table class=\"width-100pct\" mat-table [dataSource]=\"links\" matSort matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n              <ng-container matColumnDef=\"checkbox\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <mat-checkbox value=\"primary\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\"></mat-checkbox>\r\n                  </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"text\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Text\r\n                  <td mat-cell *matCellDef=\"let element\"> {{ element.text }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"url\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  Url\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{ element.url }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n                    <mat-icon>edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n              </tr>\r\n\r\n            </table>\r\n\r\n            <div class=\"margin-left-25px margin-right-25px padding-top-25px padding-bottom-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n              <mat-checkbox class=\"margin-top-10px margin-right-25px\" value=\"primary\" matTooltip=\"{{ 'Principal' | translate }}\">Check All</mat-checkbox>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n              <button mat-icon-button color=\"primary\" [matTooltip]=\"Delete\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n        </div-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-right-25px padding-top-25px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n\r\n    <button mat-raised-button type=\"button\" color=\"primary\" (click)=\"save()\">{{ 'Save Changes' | translate }}</button>\r\n\r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"onNoClick()\">{{ 'Close' | translate }}</button>\r\n\r\n    <span class=\"display-flex flex-grow-1\"></span>\r\n    \r\n    <button mat-raised-button type=\"button\" class=\"margin-left-10px\" (click)=\"showAddShopModal()\">{{ 'Add Shop' | translate }}</button>\r\n    \r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-shop-modal/new-shop-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.ts");
/* harmony import */ var _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ms-style/services/styles.service */ "./src/app/ms-back-office/modules/ms-style/services/styles.service.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
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
    function ShopsSellingStyleModalComponent(element, breakpointObserver, dialog, dialogRef, errorHandlingService, toastr, translateService, shopsService, stylesService, dialogData) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.shopsService = shopsService;
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
        this.sendLinkedShops = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        if (this.dialogData.styleId) {
            this.stylesService.getStyleLinkedShops(this.dialogData.styleId).subscribe(function (response) {
                _this.linkedShops = response.data;
                _this.dialogData.shops.forEach(function (shop) {
                    _this.isLinked(shop.id);
                });
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
            });
        }
        else if (this.dialogData.linkedShops) {
            this.linkedShops = this.dialogData.linkedShops;
            this.dialogData.shops.forEach(function (shop) {
                _this.isLinked(shop.id);
            });
        }
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
        if (this.dialogData.styleId) {
            this.stylesService.postStyleLinkedShops(this.dialogData.styleId, this.linkedShops).subscribe(function (response) {
                _this.close();
                _this.toastr.success("Saved");
            }, function (error) {
                _this.errorHandlingService.handleUiError(errorKey, error);
            });
        }
        else {
            this.dialogRef.close(this.linkedShops);
        }
    };
    ShopsSellingStyleModalComponent.prototype.showAddShopModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewShopModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                brands: this.dialogData.brands,
                categories: this.dialogData.categories,
                shops: this.dialogData.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.shopsService.getAllShops().subscribe(function (response) {
                _this.dialogData.shops = response;
                if (_this.dialogData.styleId) {
                    _this.stylesService.getStyleLinkedShops(_this.dialogData.styleId).subscribe(function (response) {
                        _this.linkedShops = response.data;
                        _this.dialogData.shops.forEach(function (shop) {
                            _this.isLinked(shop.id);
                        });
                    }, function (error) {
                        _this.errorHandlingService.handleUiError(errorKey, error);
                    });
                }
                else if (_this.dialogData.linkedShops) {
                    _this.dialogData.shops.forEach(function (shop) {
                        _this.isLinked(shop.id);
                    });
                }
            });
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ShopsSellingStyleModalComponent.prototype, "sendLinkedShops", void 0);
    ShopsSellingStyleModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shops-selling-style-modal',
            template: __webpack_require__(/*! ./shops-selling-style-modal.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.html"),
            styles: [__webpack_require__(/*! ./shops-selling-style-modal.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.css")],
        }),
        __param(9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_8__["ShopsService"],
            _ms_style_services_styles_service__WEBPACK_IMPORTED_MODULE_7__["StylesService"], Object])
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

module.exports = "<h1>Shops Table</h1>\r\n\r\n<mat-toolbar class=\"margin-right-25px margin-bottom-10px width-auto flex-shrink-0 background-color-secondary color-primary mat-elevation-z2\"\r\n  [formGroup]=\"filter\">\r\n\r\n  <mat-icon matPrefix color=\"primary\">search</mat-icon>\r\n  <mat-form-field>\r\n    <input matInput formControlName=\"name\" placeholder=\"NAME\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>STATUS</mat-label>\r\n    <mat-select disableOptionCentering formControlName=\"status\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option *ngFor=\"let state of status\" [value]=\"state.value\">\r\n        {{state.status}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>COUNTRY</mat-label>\r\n    <mat-select disableOptionCentering formControlName=\"country\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option [value]=\"null\">name</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-label>TYPE</mat-label>\r\n    <mat-select disableOptionCentering formControlName=\"isParent\">\r\n      <mat-option>...</mat-option>\r\n      <mat-option [value]=\"1\">Parent Shops</mat-option>\r\n      <mat-option [value]=\"0\">Sub Shops</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <span class=\"flex-grow-1\"></span>\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['../create']\">CREATE A NEW SHOP</button>\r\n</mat-toolbar>\r\n\r\n<div class=\"flex-grow-1 overflow-auto display-flex\">\r\n\r\n  <table class=\"margin-top-10px margin-right-25px width-100pct\" mat-table [dataSource]=\"shops\" matSort [matSortActive]=\"shopsService.previousSortColumn\"\r\n    [matSortDirection]=\"shopsService.previousSortDirection\" matSortDisableClear (matSortChange)=\"onSort()\">\r\n\r\n    <!--ng-container matColumnDef=\"ID\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        ID\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{ element.id }} </td>\r\n    </ng-container-->\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SHOP NAME\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\">\r\n        <div class=\"display-flex align-items-center\">         \r\n          <span>\r\n            {{ element.name }}\r\n          </span>\r\n          <mat-icon *ngIf=\"element.isParent\" class=\"sidenav-icon\">store</mat-icon>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"thumbnail\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"display-flex flex-grow-1 height-100pct padding-left-0px width-100pct\">\r\n        <div class=\"position-relative margin-top-5px\">\r\n          <img [src]=\"element.mainImage\" class=\"height-90pct width-90pct margin-auto\" alt=\"50\">\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"active\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        STATUS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\">\r\n        <div>\r\n          {{ element.active?'Active':'Inactive' }}\r\n          <mat-slide-toggle class=\"margin-bottom-25px margin-top-25px margin-left-5px\" [checked]=\"element.active\" (click)=\"changeStatus(element)\"></mat-slide-toggle>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"country\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        COUNTRY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.country }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        CURRENCY\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.currency }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"updatedAt\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        LATEST UPDATE\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.updatedAt | date: 'MM/dd/yyyy HH:mm:ss': timeZoneOffset.toString() }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"rank\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        RANK\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.rank }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"shipingDetails\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n        SHIPPING DETAILS\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"padding-table-td\"> {{ element.shippingDetails }} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"min-width-80px\">\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../edit', element.id]\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"primary\" [matTooltip]=\"Edit\" [routerLink]=\"['../delete', element.id]\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"row.is_active ? '' : 'text-decoration-line-through'\">\r\n    </tr>\r\n\r\n  </table>\r\n\r\n</div>\r\n\r\n<div class=\"margin-right-25px padding-top-5px padding-bottom-5px flex-shrink-0 display-flex border-top-style-solid border-top-width-2px border-top-color-grey\">\r\n  <span class=\"flex-grow-1\"></span>\r\n  <mat-paginator [length]=\"totalLength\" [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" [pageIndex]=\"\" [pageSize]=\"50\" showFirstLastButtons\r\n    (page)=\"onPage()\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n<http-request-indicator [urlExpressions]=\"[\r\n        configService.config.apiConfigs.shops.apiEndpoint + '.*']\">\r\n</http-request-indicator>\r\n"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important; }\n\ntd,\nth {\n  width: 25%; }\n\n.padding-bottom-10 {\n  padding-bottom: 10px; }\n\nimg {\n  height: 60px !important;\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3BzLXRhYmxlL0U6XFxQUk9HUkFNQUNJT04gSUlJXFxtb3Jlc25lYWtlcnMtYmFja29mZmljZS9zcmNcXGFwcFxcbXMtYmFjay1vZmZpY2VcXG1vZHVsZXNcXG1zLXNob3BzXFxjb21wb25lbnRzXFxzaG9wcy10YWJsZVxcc2hvcHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDs7RUFFSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxxQkFDSixFQUFDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21zLWJhY2stb2ZmaWNlL21vZHVsZXMvbXMtc2hvcHMvY29tcG9uZW50cy9zaG9wcy10YWJsZS9zaG9wcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/status */ "./src/app/ms-back-office/modules/ms-shops/models/status.ts");
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
var ShopsTableComponent = /** @class */ (function () {
    function ShopsTableComponent(configService, shopsService, errorHandlingService) {
        this.configService = configService;
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
            //'shipingDetails',
            'action'
        ];
        this.status = _models_status__WEBPACK_IMPORTED_MODULE_7__["STATUS"];
        this.totalLength = 0;
        this.shops = [];
        this.timeZoneOffset = timeZoneOffset;
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
        group['isParent'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
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
        __metadata("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_6__["ShopsService"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]])
    ], ShopsTableComponent);
    return ShopsTableComponent;
}());



/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-direction: column;\r\n  height: 100%\r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 10px;\r\n}\r\n\r\n.mat-dialog-content {\r\n  height: 60%;\r\n  max-height: 82vh;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mat-dialog-actions {\r\n  padding: 10px 0;\r\n}\r\n\r\nmat-card {\r\n  padding: 0px;\r\n  align-self: flex-start;\r\n  height: 200px;\r\n  width: 150px;\r\n  margin-left: 2px;\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nimg{\r\n  height: 130px !important;\r\n  width: 100%!important;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 24px;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.max-width-60-pct{\r\n  max-width: 60% !important;\r\n}\r\n\r\n.border{\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\ntd.mat-cell{\r\n  border: none !important;\r\n}\r\n\r\nth.mat-header-cell{\r\n  border: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXMtYmFjay1vZmZpY2UvbW9kdWxlcy9tcy1zaG9wcy9jb21wb25lbnRzL3Nob3ctc3Vic2hvcHMvc2hvdy1zdWJzaG9wcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBQ0Q7RUFDRSx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9tcy1iYWNrLW9mZmljZS9tb2R1bGVzL21zLXNob3BzL2NvbXBvbmVudHMvc2hvdy1zdWJzaG9wcy9zaG93LXN1YnNob3BzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiA4MnZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbiAgbWF4LXdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Sub-shops</h3>\r\n<div class=\"flex-grow-1 overflow-auto display-flex flex-direction-column padding-10px border-top-width-2px border-top-color-grey\">\r\n\r\n  <!--div class=\"flex-grow-1 flex-shrink-0 display-flex flex-direction-column\"-->\r\n  <div class=\"flex-wrap-wrap display-flex flex-grow-1 flex-shrink-1 flex-direction-row card-container justify-content-initial margin-top-10px\">\r\n    <mat-card *ngFor=\"let shop of subShops\" class=\"display-flex background-color-secondary flex-direction-column flex-shrink-1\">\r\n      <div class=\"image-container margin-10px flex-grow-1\" #imageContainer>\r\n        <img class=\"img\" imageLoad [srcImage]=\"shop.mainImage? shop.mainImage : ''\" [container]=\"imageContainer\" src=\"\">\r\n      </div>\r\n      <div class=\"image-card-btns display-flex margin-left-10px margin-right-10px margin-bottom-10px\">\r\n        <mat-checkbox [checked]=\"true\" class=\"margin-top-10px\" matTooltip=\"{{ 'Principal' | translate }}\" (click)=\"linked(shop)\"\r\n          [disabled]=\"true\">{{ shop.name }}</mat-checkbox>\r\n      </div>\r\n    </mat-card>\r\n    <!--/div-->\r\n  </div>\r\n\r\n</div>\r\n<div class=\"justify-content-flex-end margin-right-25px padding-top-10px padding-bottom-10px flex-shrink-0 display-flex border-top-width-2px border-top-color-grey\">\r\n\r\n  <!--button mat-stroked-button type=\"button\">Remove Selection</button-->\r\n\r\n  <button mat-raised-button type=\"button\" color=\"primary\" class=\"\" (click)=\"showLinkSubShopsModal()\">{{ 'Link New Stores' | translate }}</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ShowSubshopslComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubshopslComponent", function() { return ShowSubshopslComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_shops_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shops.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../error-handling/services/error-handling.service */ "./src/app/error-handling/services/error-handling.service.ts");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../error-handling/services/toastr.service */ "./src/app/error-handling/services/toastr.service.ts");
/* harmony import */ var _link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link-shops-subshops/link-shops-subshops-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.ts");
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


//import { setTranslations } from '@cognitec/ngx-translate';
//import { TRANSLATIONS } from './i18n/annotation-tool-modal.component.translations';


//import { Landmarks } from '../../models/landmarks';




//


var errorKey = 'Error';
var ShowSubshopslComponent = /** @class */ (function () {
    function ShowSubshopslComponent(element, dialog, breakpointObserver, errorHandlingService, toastr, translateService, collectionsService, shopsService) {
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.collectionsService = collectionsService;
        this.shopsService = shopsService;
        this.displayedColumns = [
            'checkbox',
            'text',
            'url',
            'actions'
        ];
        this.answer = false;
        this.flag = true;
        this.imageSrc = null;
        this.linkedShops = [];
        this.oldLinkedShops = [];
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
    ShowSubshopslComponent.prototype.ngOnInit = function () {
    };
    ShowSubshopslComponent.prototype.ngAfterViewInit = function () {
    };
    ShowSubshopslComponent.prototype.onAccept = function () {
        this.answer = true;
        this.close();
    };
    ShowSubshopslComponent.prototype.onCancel = function () {
        this.answer = false;
        this.close();
    };
    ShowSubshopslComponent.prototype.close = function () {
    };
    ShowSubshopslComponent.prototype.onNoClick = function () {
        this.close();
    };
    ShowSubshopslComponent.prototype.showLinkSubShopsModal = function () {
        var _this = this;
        this.modalRef = this.dialog.open(_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_7__["LinkShopsSubShopsModalComponent"], {
            height: '90%',
            width: '90%',
            data: {
                shopId: this.shopId,
                shops: this.shops,
            }
        });
        this.modalRef.afterClosed().subscribe(function () {
            _this.shopsService.getAllShops().subscribe(function (response) {
                _this.shops = response;
                _this.subShops = [];
                _this.subShops = _this.shops.filter(function (shop) {
                    return shop.parent === _this.shopId;
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShowSubshopslComponent.prototype, "shops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ShowSubshopslComponent.prototype, "subShops", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShowSubshopslComponent.prototype, "shopId", void 0);
    ShowSubshopslComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-subshops',
            template: __webpack_require__(/*! ./show-subshops.component.html */ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.html"),
            styles: [__webpack_require__(/*! ./show-subshops.component.css */ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _ms_collections_services_collections_service__WEBPACK_IMPORTED_MODULE_8__["CollectionsService"],
            _services_shops_service__WEBPACK_IMPORTED_MODULE_3__["ShopsService"]])
    ], ShowSubshopslComponent);
    return ShowSubshopslComponent;
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

/***/ "./src/app/ms-back-office/modules/ms-shops/models/shippingCountries.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ms-back-office/modules/ms-shops/models/shippingCountries.ts ***!
  \*****************************************************************************/
/*! exports provided: ShippingCountries, SHIPPINGCOUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingCountries", function() { return ShippingCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIPPINGCOUNTRIES", function() { return SHIPPINGCOUNTRIES; });
var ShippingCountries = /** @class */ (function () {
    function ShippingCountries() {
    }
    return ShippingCountries;
}());

;
var SHIPPINGCOUNTRIES = [
    { id: 'Worldwide', name: 'Worldwide' },
    { id: 'Europe', name: 'Europe' },
    { id: 'USA', name: 'USA' },
    { id: 'Select Countries', name: 'Select Countries' },
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
/* harmony import */ var _services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/shops-resolve.service */ "./src/app/ms-back-office/modules/ms-shops/services/shops-resolve.service.ts");
/* harmony import */ var _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ms-releases/services/releases-resolve.service */ "./src/app/ms-back-office/modules/ms-releases/services/releases-resolve.service.ts");
/* harmony import */ var _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ms-collections/services/collections-resolve.service */ "./src/app/ms-back-office/modules/ms-collections/services/collections-resolve.service.ts");
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
            shopId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_10__["IdResolveService"],
            categories: _ms_categories_services_categories_resolve_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesResolveService"],
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_11__["UrlsResolveService"],
            shops: _services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_12__["ShopsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__["ReleasesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_14__["CollectionsResolveService"]
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
            urls: _ms_urls_services_urls_resolve_service__WEBPACK_IMPORTED_MODULE_11__["UrlsResolveService"],
            shops: _services_shops_resolve_service__WEBPACK_IMPORTED_MODULE_12__["ShopsResolveService"],
            releases: _ms_releases_services_releases_resolve_service__WEBPACK_IMPORTED_MODULE_13__["ReleasesResolveService"],
            collections: _ms_collections_services_collections_resolve_service__WEBPACK_IMPORTED_MODULE_14__["CollectionsResolveService"]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../http-request-indicator/http-request-indicator.module */ "./src/app/http-request-indicator/http-request-indicator.module.ts");
/* harmony import */ var _http_request_indicator_services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../http-request-indicator/services/indicated-interceptor.service */ "./src/app/http-request-indicator/services/indicated-interceptor.service.ts");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "./src/app/ui/modules/ask-before-refresh/ask-before-refresh.module.ts");
/* harmony import */ var _ui_modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../ui/modules/spinner-indicator-200/spinner-indicator-200.module */ "./src/app/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts");
/* harmony import */ var _ms_shops_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ms-shops-routing.module */ "./src/app/ms-back-office/modules/ms-shops/ms-shops-routing.module.ts");
/* harmony import */ var _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shops-table/shops-table.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-table/shops-table.component.ts");
/* harmony import */ var _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/shop-form/shop-form.component */ "./src/app/ms-back-office/modules/ms-shops/components/shop-form/shop-form.component.ts");
/* harmony import */ var _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-shop/new-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop/new-shop.component.ts");
/* harmony import */ var _components_new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/new-shop-modal/new-shop-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/new-shop-modal/new-shop-modal.component.ts");
/* harmony import */ var _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-shop/edit-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop/edit-shop.component.ts");
/* harmony import */ var _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/edit-shop-form/edit-shop-form.component */ "./src/app/ms-back-office/modules/ms-shops/components/edit-shop-form/edit-shop-form.component.ts");
/* harmony import */ var _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/delete-shop/delete-shop.component */ "./src/app/ms-back-office/modules/ms-shops/components/delete-shop/delete-shop.component.ts");
/* harmony import */ var _components_show_subshops_show_subshops_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/show-subshops/show-subshops.component */ "./src/app/ms-back-office/modules/ms-shops/components/show-subshops/show-subshops.component.ts");
/* harmony import */ var _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/shops-selling-style-modal/shops-selling-style-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/shops-selling-style-modal/shops-selling-style-modal.component.ts");
/* harmony import */ var _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/link-shops-brand/link-shops-brand-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-brand/link-shops-brand-modal.component.ts");
/* harmony import */ var _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/link-shops-collection/link-shops-collection-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-collection/link-shops-collection-modal.component.ts");
/* harmony import */ var _components_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/link-shops-subshops/link-shops-subshops-modal.component */ "./src/app/ms-back-office/modules/ms-shops/components/link-shops-subshops/link-shops-subshops-modal.component.ts");
/* harmony import */ var _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../ui/modules/images-card/images-card.module */ "./src/app/ui/modules/images-card/images-card.module.ts");
/* harmony import */ var _ms_deals_ms_deals_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../ms-deals/ms-deals.module */ "./src/app/ms-back-office/modules/ms-deals/ms-deals.module.ts");
/* harmony import */ var _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../ms-offers/ms-offers.module */ "./src/app/ms-back-office/modules/ms-offers/ms-offers.module.ts");
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
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_4__["AmazingTimePickerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"],
                _ms_shops_routing_module__WEBPACK_IMPORTED_MODULE_21__["MsShopsRoutingModule"],
                _ui_modules_images_card_images_card_module__WEBPACK_IMPORTED_MODULE_34__["ImagesCardModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_19__["AskBeforeRefreshModule"],
                _http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__["HttpRequestIndicatorModule"].forRoot(),
                _ui_modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_20__["SpinnerIndicator200Module"],
                _ms_deals_ms_deals_module__WEBPACK_IMPORTED_MODULE_35__["MsDealsModule"],
                _ms_offers_ms_offers_module__WEBPACK_IMPORTED_MODULE_36__["MsOffersModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCNe-jwQrcGsXiegBXbSZJhNnVA13n0Q4I'
                })
            ],
            declarations: [
                _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_22__["ShopsTableComponent"],
                _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_23__["ShopFormComponent"],
                _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_24__["NewShopComponent"],
                _components_new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_25__["NewShopModalComponent"],
                _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_26__["EditShopComponent"],
                _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_27__["EditShopFormComponent"],
                _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_28__["DeleteShopComponent"],
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_31__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_32__["LinkShopsCollentionModalComponent"],
                _components_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_33__["LinkShopsSubShopsModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__["ShopsSellingStyleModalComponent"],
                _components_show_subshops_show_subshops_component__WEBPACK_IMPORTED_MODULE_29__["ShowSubshopslComponent"]
            ],
            exports: [
                _components_shops_table_shops_table_component__WEBPACK_IMPORTED_MODULE_22__["ShopsTableComponent"],
                _components_shop_form_shop_form_component__WEBPACK_IMPORTED_MODULE_23__["ShopFormComponent"],
                _components_new_shop_new_shop_component__WEBPACK_IMPORTED_MODULE_24__["NewShopComponent"],
                _components_new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_25__["NewShopModalComponent"],
                _components_edit_shop_edit_shop_component__WEBPACK_IMPORTED_MODULE_26__["EditShopComponent"],
                _components_edit_shop_form_edit_shop_form_component__WEBPACK_IMPORTED_MODULE_27__["EditShopFormComponent"],
                _components_delete_shop_delete_shop_component__WEBPACK_IMPORTED_MODULE_28__["DeleteShopComponent"],
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_31__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_32__["LinkShopsCollentionModalComponent"],
                _components_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_33__["LinkShopsSubShopsModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__["ShopsSellingStyleModalComponent"],
                _components_show_subshops_show_subshops_component__WEBPACK_IMPORTED_MODULE_29__["ShowSubshopslComponent"]
            ],
            entryComponents: [
                _components_link_shops_brand_link_shops_brand_modal_component__WEBPACK_IMPORTED_MODULE_31__["LinkShopsBrandModalComponent"],
                _components_link_shops_collection_link_shops_collection_modal_component__WEBPACK_IMPORTED_MODULE_32__["LinkShopsCollentionModalComponent"],
                _components_link_shops_subshops_link_shops_subshops_modal_component__WEBPACK_IMPORTED_MODULE_33__["LinkShopsSubShopsModalComponent"],
                _components_new_shop_modal_new_shop_modal_component__WEBPACK_IMPORTED_MODULE_25__["NewShopModalComponent"],
                _components_shops_selling_style_modal_shops_selling_style_modal_component__WEBPACK_IMPORTED_MODULE_30__["ShopsSellingStyleModalComponent"],
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _http_request_indicator_services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["IndicatedInterceptor"], multi: true },]
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
        this.previousSortColumn = 'updatedAt';
        this.previousSortDirection = 'desc';
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
    StylesService.prototype.postStyleLinkedShops = function (id, data) {
        return this.http.post(this.apiEndpoint + id + '/shops/', JSON.stringify(data));
    };
    StylesService.prototype.getStyleLinkedShops = function (id) {
        return this.http.get(this.apiEndpoint + id + '/shops/');
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
    StylesService.prototype.getPopularStyle = function (brandId) {
        return this.http.get(this.apiEndpoint + 'popular/?brandId=' + brandId);
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
//# sourceMappingURL=default~ms-brands-ms-brands-module~ms-collections-ms-collections-module~ms-shops-ms-shops-module~ms-~1045d9c8.js.map