(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactSVGPanZoom"] = factory(require("react"), require("prop-types"));
	else
		root["ReactSVGPanZoom"] = factory(root["React"], root["PropTypes"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__619__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 61:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TOOL_ZOOM_OUT = exports.TOOL_ZOOM_IN = exports.TOOL_PAN = exports.TOOL_NONE = exports.TOOL_AUTO = exports.POSITION_TOP = exports.POSITION_RIGHT = exports.POSITION_NONE = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.MODE_ZOOMING = exports.MODE_PANNING = exports.MODE_IDLE = exports.INITIAL_VALUE = exports.ALIGN_TOP = exports.ALIGN_RIGHT = exports.ALIGN_LEFT = exports.ALIGN_COVER = exports.ALIGN_CENTER = exports.ALIGN_BOTTOM = exports.ACTION_ZOOM = exports.ACTION_PAN = void 0;
var MODE_IDLE = 'idle';
exports.MODE_IDLE = MODE_IDLE;
var MODE_PANNING = 'panning';
exports.MODE_PANNING = MODE_PANNING;
var MODE_ZOOMING = 'zooming';
exports.MODE_ZOOMING = MODE_ZOOMING;
var TOOL_AUTO = 'auto';
exports.TOOL_AUTO = TOOL_AUTO;
var TOOL_NONE = 'none';
exports.TOOL_NONE = TOOL_NONE;
var TOOL_PAN = 'pan';
exports.TOOL_PAN = TOOL_PAN;
var TOOL_ZOOM_IN = 'zoom-in';
exports.TOOL_ZOOM_IN = TOOL_ZOOM_IN;
var TOOL_ZOOM_OUT = 'zoom-out';
exports.TOOL_ZOOM_OUT = TOOL_ZOOM_OUT;
var POSITION_NONE = 'none';
exports.POSITION_NONE = POSITION_NONE;
var POSITION_TOP = 'top';
exports.POSITION_TOP = POSITION_TOP;
var POSITION_RIGHT = 'right';
exports.POSITION_RIGHT = POSITION_RIGHT;
var POSITION_BOTTOM = 'bottom';
exports.POSITION_BOTTOM = POSITION_BOTTOM;
var POSITION_LEFT = 'left';
exports.POSITION_LEFT = POSITION_LEFT;
var ACTION_ZOOM = 'zoom';
exports.ACTION_ZOOM = ACTION_ZOOM;
var ACTION_PAN = 'pan';
exports.ACTION_PAN = ACTION_PAN;
var ALIGN_CENTER = 'center';
exports.ALIGN_CENTER = ALIGN_CENTER;
var ALIGN_LEFT = 'left';
exports.ALIGN_LEFT = ALIGN_LEFT;
var ALIGN_RIGHT = 'right';
exports.ALIGN_RIGHT = ALIGN_RIGHT;
var ALIGN_TOP = 'top';
exports.ALIGN_TOP = ALIGN_TOP;
var ALIGN_BOTTOM = 'bottom';
exports.ALIGN_BOTTOM = ALIGN_BOTTOM;
var ALIGN_COVER = 'cover';
exports.ALIGN_COVER = ALIGN_COVER;
var INITIAL_VALUE = {};
exports.INITIAL_VALUE = INITIAL_VALUE;

/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = eventFactory;

var _viewerMouseEvent = _interopRequireDefault(__webpack_require__(673));

var _viewerTouchEvent = _interopRequireDefault(__webpack_require__(436));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eventFactory(originalEvent, value, SVGViewer) {
  var eventType = originalEvent.type;

  switch (eventType) {
    case "mousemove":
    case "mouseup":
    case "mousedown":
    case "click":
    case "dblclick":
      return new _viewerMouseEvent.default(originalEvent, value, SVGViewer);

    case "touchstart":
    case "touchmove":
    case "touchend":
    case "touchcancel":
      return new _viewerTouchEvent.default(originalEvent, value, SVGViewer);

    default:
      throw new Error("".concat(eventType, " not supported"));
  }
}

/***/ }),

/***/ 960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(546);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ViewerEvent = /*#__PURE__*/function () {
  function ViewerEvent(originalEvent, value, SVGViewer) {
    _classCallCheck(this, ViewerEvent);

    this.originalEvent = originalEvent;
    this.value = value;
    this.SVGViewer = SVGViewer;
  }

  _createClass(ViewerEvent, [{
    key: "scaleFactor",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.scaleFactor;
    }
  }, {
    key: "translationX",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.translationX;
    }
  }, {
    key: "translationY",
    get: function get() {
      this._cacheDecomposedValue = this._cacheDecomposedValue || (0, _common.decompose)(this.value);
      return this._cacheDecomposedValue.translationY;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.originalEvent.preventDefault();
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.originalEvent.stopPropagation();
    }
  }]);

  return ViewerEvent;
}();

exports["default"] = ViewerEvent;

/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _viewerEvent = _interopRequireDefault(__webpack_require__(960));

var _interactions = __webpack_require__(610);

var _common = __webpack_require__(546);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ViewerMouseEvent = /*#__PURE__*/function (_ViewerEvent) {
  _inherits(ViewerMouseEvent, _ViewerEvent);

  var _super = _createSuper(ViewerMouseEvent);

  function ViewerMouseEvent() {
    _classCallCheck(this, ViewerMouseEvent);

    return _super.apply(this, arguments);
  }

  _createClass(ViewerMouseEvent, [{
    key: "point",
    get: function get() {
      if (!this._cachePoint) {
        var event = this.originalEvent,
            SVGViewer = this.SVGViewer,
            value = this.value;
        var mousePosition = (0, _interactions.getMousePosition)(event, SVGViewer);
        this._cachePoint = (0, _common.getSVGPoint)(value, mousePosition.x, mousePosition.y);
      }

      return this._cachePoint;
    }
  }, {
    key: "x",
    get: function get() {
      return this.point.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.point.y;
    }
  }]);

  return ViewerMouseEvent;
}(_viewerEvent.default);

exports["default"] = ViewerMouseEvent;

/***/ }),

/***/ 436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(546);

var _viewerEvent = _interopRequireDefault(__webpack_require__(960));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ViewerTouchEvent = /*#__PURE__*/function (_ViewerEvent) {
  _inherits(ViewerTouchEvent, _ViewerEvent);

  var _super = _createSuper(ViewerTouchEvent);

  function ViewerTouchEvent() {
    _classCallCheck(this, ViewerTouchEvent);

    return _super.apply(this, arguments);
  }

  _createClass(ViewerTouchEvent, [{
    key: "points",
    get: function get() {
      if (!this._cachePoints) this._cachePoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.touches, this.SVGViewer, this.value);
      return this._cachePoints;
    }
  }, {
    key: "changedPoints",
    get: function get() {
      if (!this._cacheChangedPoints) this._cacheChangedPoints = ViewerTouchEvent.touchesToPoints(this.originalEvent.changedTouches, this.SVGViewer, this.value);
      return this._cacheChangedPoints;
    }
  }], [{
    key: "touchesToPoints",
    value: function touchesToPoints(touches, SVGViewer, value) {
      var points = [];

      for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        var rect = SVGViewer.getBoundingClientRect();
        var x = touch.clientX - Math.round(rect.left);
        var y = touch.clientY - Math.round(rect.top);
        var point = (0, _common.getSVGPoint)(value, x, y);
        points.push(_objectSpread(_objectSpread({}, point), {}, {
          identifier: touch.identifier
        }));
      }

      return points;
    }
  }]);

  return ViewerTouchEvent;
}(_viewerEvent.default);

exports["default"] = ViewerTouchEvent;

/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_MODE = void 0;
exports.decompose = decompose;
exports.getDefaultValue = getDefaultValue;
exports.getSVGPoint = getSVGPoint;
exports.isValueValid = isValueValid;
exports.reset = reset;
exports.resetMode = resetMode;
exports.set = set;
exports.setFocus = setFocus;
exports.setPointOnViewerCenter = setPointOnViewerCenter;
exports.setSVGViewBox = setSVGViewBox;
exports.setViewerSize = setViewerSize;
exports.setZoomLevels = setZoomLevels;

var _constants = __webpack_require__(61);

var _transformationMatrix = __webpack_require__(180);

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERSION = 3;
var DEFAULT_MODE = _constants.MODE_IDLE;
/**
 * Obtain default value
 * @returns {Object}
 */

exports.DEFAULT_MODE = DEFAULT_MODE;

function getDefaultValue(viewerWidth, viewerHeight, SVGMinX, SVGMinY, SVGWidth, SVGHeight) {
  var scaleFactorMin = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var scaleFactorMax = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  return set({}, _objectSpread(_objectSpread({}, (0, _transformationMatrix.identity)()), {}, {
    version: VERSION,
    mode: DEFAULT_MODE,
    focus: false,
    pinchPointDistance: null,
    prePinchMode: null,
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight,
    SVGMinX: SVGMinX,
    SVGMinY: SVGMinY,
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    scaleFactorMin: scaleFactorMin,
    scaleFactorMax: scaleFactorMax,
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    miniatureOpen: true,
    lastAction: null
  }));
}
/**
 * Change value
 * @param value
 * @param patch
 * @param action
 * @returns {Object}
 */


function set(value, patch) {
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  value = Object.assign({}, value, patch, {
    lastAction: action
  });
  return Object.freeze(value);
}
/**
 * value valid check
 * @param value
 */


function isValueValid(value) {
  return value !== null && _typeof(value) === 'object' && value.hasOwnProperty('version') && value.version === VERSION;
}
/**
 * Export x,y coords relative to SVG
 * @param value
 * @param viewerX
 * @param viewerY
 * @returns {*|{x, y}|{x: number, y: number}}
 */


function getSVGPoint(value, viewerX, viewerY) {
  var matrix = (0, _transformationMatrix.fromObject)(value);
  var inverseMatrix = (0, _transformationMatrix.inverse)(matrix);
  return (0, _transformationMatrix.applyToPoint)(inverseMatrix, {
    x: viewerX,
    y: viewerY
  });
}
/**
 * Decompose matrix from value
 * @param value
 * @returns {{scaleFactor: number, translationX: number, translationY: number}}
 */


function decompose(value) {
  var matrix = (0, _transformationMatrix.fromObject)(value);
  return {
    scaleFactor: matrix.a,
    translationX: matrix.e,
    translationY: matrix.f
  };
}
/**
 *
 * @param value
 * @param focus
 * @returns {Object}
 */


function setFocus(value, focus) {
  return set(value, {
    focus: focus
  });
}
/**
 *
 * @param value
 * @param viewerWidth
 * @param viewerHeight
 * @returns {Object}
 */


function setViewerSize(value, viewerWidth, viewerHeight) {
  return set(value, {
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight
  });
}
/**
 *
 * @param value
 * @param SVGMinX
 * @param SVGMinY
 * @param SVGWidth
 * @param SVGHeight
 * @returns {Object}
 */


function setSVGViewBox(value, SVGMinX, SVGMinY, SVGWidth, SVGHeight) {
  return set(value, {
    SVGMinX: SVGMinX,
    SVGMinY: SVGMinY,
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight
  });
}
/**
 *
 * @param value
 * @param scaleFactorMin
 * @param scaleFactorMax
 * @returns {Object}
 */
//TODO rename to setZoomLimits


function setZoomLevels(value, scaleFactorMin, scaleFactorMax) {
  return set(value, {
    scaleFactorMin: scaleFactorMin,
    scaleFactorMax: scaleFactorMax
  });
}
/**
 *
 * @param value
 * @param SVGPointX
 * @param SVGPointY
 * @param zoomLevel
 * @returns {Object}
 */


function setPointOnViewerCenter(value, SVGPointX, SVGPointY, zoomLevel) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.translate)(-SVGPointX + viewerWidth / 2, -SVGPointY + viewerHeight / 2), //4
  (0, _transformationMatrix.translate)(SVGPointX, SVGPointY), //3
  (0, _transformationMatrix.scale)(zoomLevel, zoomLevel), //2
  (0, _transformationMatrix.translate)(-SVGPointX, -SVGPointY) //1
  );
  return set(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, matrix));
}
/**
 *
 * @param value
 * @returns {Object}
 */


function reset(value) {
  return set(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, (0, _transformationMatrix.identity)()));
}
/**
 *
 * @param value
 * @returns {Object}
 */


function resetMode(value) {
  return set(value, {
    mode: DEFAULT_MODE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  });
}

/***/ }),

/***/ 581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onTouchCancel = onTouchCancel;
exports.onTouchEnd = onTouchEnd;
exports.onTouchMove = onTouchMove;
exports.onTouchStart = onTouchStart;

var _transformationMatrix = __webpack_require__(180);

var _constants = __webpack_require__(61);

var _common = __webpack_require__(546);

var _interactions = __webpack_require__(610);

var _zoom = __webpack_require__(271);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getTouchPosition(touch, ViewerDOM) {
  var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin.left,
      top = _ViewerDOM$getBoundin.top;

  var x = touch.clientX - Math.round(left);
  var y = touch.clientY - Math.round(top);
  return {
    x: x,
    y: y
  };
}

function onTouchStart(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (event.touches.length !== 1) {
    if ([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0) {
      return (0, _common.resetMode)(value);
    } else if ([_constants.MODE_IDLE].indexOf(value.mode) >= 0) {
      return value;
    }
  }

  return onSingleTouch(event, ViewerDOM, tool, value, props, _interactions.onMouseDown);
}

function onTouchMove(event, ViewerDOM, tool, value, props) {
  if (isMultiTouch(event, props)) {
    return onMultiTouch(event, ViewerDOM, tool, value, props);
  }

  if (!([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  return onSingleTouch(event, ViewerDOM, tool, value, props, _interactions.onMouseMove);
}

function onTouchEnd(event, ViewerDOM, tool, value, props) {
  if (!([_constants.MODE_PANNING, _constants.MODE_ZOOMING].indexOf(value.mode) >= 0)) {
    return value;
  }

  var nextValue = shouldResetPinchPointDistance(event, value, props) ? (0, _common.set)(value, {
    pinchPointDistance: null
  }) : value;

  if (event.touches.length > 0) {
    return nextValue;
  }

  return onSingleTouch(event, ViewerDOM, tool, nextValue, props, _interactions.onMouseUp);
}

function onTouchCancel(event, ViewerDOM, tool, value, props) {
  event.stopPropagation();
  event.preventDefault();
  return (0, _common.resetMode)(value);
}

function hasPinchPointDistance(value) {
  return typeof value.pinchPointDistance === 'number';
}

function shouldResetPinchPointDistance(event, value, props) {
  return props.detectPinchGesture && hasPinchPointDistance(value) && event.touches.length < 2;
}

function isMultiTouch(event, props) {
  return props.detectPinchGesture && event.touches.length > 1;
}

function onSingleTouch(event, ViewerDOM, tool, value, props, nextValueFn) {
  var nextValue = event.touches.length === 0 ? (0, _common.set)(value, {
    mode: value.prePinchMode ? _constants.MODE_IDLE : value.mode,
    prePinchMode: null
  }) : value;
  var touch = event.touches.length > 0 ? event.touches[0] : event.changedTouches[0];
  var touchPosition = getTouchPosition(touch, ViewerDOM);

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
    case _constants.TOOL_ZOOM_IN:
    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      event.stopPropagation();
      event.preventDefault();
      return nextValueFn(event, ViewerDOM, tool, nextValue, props, touchPosition);

    default:
      return nextValue;
  }
}

function onMultiTouch(event, ViewerDOM, tool, value, props) {
  var _ViewerDOM$getBoundin2 = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin2.left,
      top = _ViewerDOM$getBoundin2.top;

  var x1 = event.touches[0].clientX - Math.round(left);
  var y1 = event.touches[0].clientY - Math.round(top);
  var x2 = event.touches[1].clientX - Math.round(left);
  var y2 = event.touches[1].clientY - Math.round(top);
  var pinchPointDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  var previousPointDistance = hasPinchPointDistance(value) ? value.pinchPointDistance : pinchPointDistance;
  var svgPoint = (0, _common.getSVGPoint)(value, (x1 + x2) / 2, (y1 + y2) / 2);
  var distanceFactor = pinchPointDistance / previousPointDistance;

  if ((0, _zoom.isZoomLevelGoingOutOfBounds)(value, distanceFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  if (event.cancelable) {
    event.preventDefault();
  }

  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), (0, _transformationMatrix.translate)(svgPoint.x, svgPoint.y), (0, _transformationMatrix.scale)(distanceFactor, distanceFactor), (0, _transformationMatrix.translate)(-svgPoint.x, -svgPoint.y));
  return (0, _common.set)(value, (0, _common.set)(_objectSpread(_objectSpread({
    mode: _constants.MODE_ZOOMING
  }, (0, _zoom.limitZoomLevel)(value, matrix)), {}, {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    prePinchMode: value.prePinchMode ? value.prePinchMode : value.mode,
    pinchPointDistance: pinchPointDistance
  })));
}

/***/ }),

/***/ 610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMousePosition = getMousePosition;
exports.onDoubleClick = onDoubleClick;
exports.onInterval = onInterval;
exports.onMouseDown = onMouseDown;
exports.onMouseEnterOrLeave = onMouseEnterOrLeave;
exports.onMouseMove = onMouseMove;
exports.onMouseUp = onMouseUp;
exports.onWheel = onWheel;

var _constants = __webpack_require__(61);

var _common = __webpack_require__(546);

var _pan = __webpack_require__(946);

var _zoom = __webpack_require__(271);

var _mapRange = _interopRequireDefault(__webpack_require__(767));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMousePosition(event, ViewerDOM) {
  var _ViewerDOM$getBoundin = ViewerDOM.getBoundingClientRect(),
      left = _ViewerDOM$getBoundin.left,
      top = _ViewerDOM$getBoundin.top;

  var x = event.clientX - Math.round(left);
  var y = event.clientY - Math.round(top);
  return {
    x: x,
    y: y
  };
}

function onMouseDown(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var _ref = coords || getMousePosition(event, ViewerDOM),
      x = _ref.x,
      y = _ref.y;

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
      var SVGPoint = (0, _common.getSVGPoint)(value, x, y);
      nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, 1 / props.scaleFactor, props);
      break;

    case _constants.TOOL_ZOOM_IN:
      nextValue = (0, _zoom.startZooming)(value, x, y);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      nextValue = (0, _pan.startPanning)(value, x, y);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onMouseMove(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var _ref2 = coords || getMousePosition(event, ViewerDOM),
      x = _ref2.x,
      y = _ref2.y;

  var forceExit = event.buttons === 0; //the mouse exited and reentered into svg

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_IN:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = forceExit ? (0, _zoom.stopZooming)(value, x, y, props.scaleFactor, props) : (0, _zoom.updateZooming)(value, x, y);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      if (value.mode === _constants.MODE_PANNING) nextValue = forceExit ? (0, _pan.stopPanning)(value) : (0, _pan.updatePanning)(value, x, y, props.preventPanOutside ? 20 : undefined);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onMouseUp(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var _ref3 = coords || getMousePosition(event, ViewerDOM),
      x = _ref3.x,
      y = _ref3.y;

  var nextValue = value;

  switch (tool) {
    case _constants.TOOL_ZOOM_OUT:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = (0, _zoom.stopZooming)(value, x, y, 1 / props.scaleFactor, props);
      break;

    case _constants.TOOL_ZOOM_IN:
      if (value.mode === _constants.MODE_ZOOMING) nextValue = (0, _zoom.stopZooming)(value, x, y, props.scaleFactor, props);
      break;

    case _constants.TOOL_AUTO:
    case _constants.TOOL_PAN:
      if (value.mode === _constants.MODE_PANNING) nextValue = (0, _pan.stopPanning)(value);
      break;

    default:
      return value;
  }

  event.preventDefault();
  return nextValue;
}

function onDoubleClick(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var _ref4 = coords || getMousePosition(event, ViewerDOM),
      x = _ref4.x,
      y = _ref4.y;

  var nextValue = value;

  if (tool === _constants.TOOL_AUTO && !props.disableDoubleClickZoomWithToolAuto) {
    var _props$modifierKeys = props.modifierKeys,
        modifierKeys = _props$modifierKeys === void 0 ? [] : _props$modifierKeys;
    var SVGPoint = (0, _common.getSVGPoint)(value, x, y);

    var modifierKeysReducer = function modifierKeysReducer(current, modifierKey) {
      return current || event.getModifierState(modifierKey);
    };

    var modifierKeyActive = modifierKeys.reduce(modifierKeysReducer, false);
    var scaleFactor = modifierKeyActive ? 1 / props.scaleFactor : props.scaleFactor;
    nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
  }

  event.preventDefault();
  return nextValue;
}

function onWheel(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  var _ref5 = coords || getMousePosition(event, ViewerDOM),
      x = _ref5.x,
      y = _ref5.y;

  if (!props.detectWheel) return value;
  var delta = Math.max(-1, Math.min(1, event.deltaY));
  var scaleFactor = (0, _mapRange.default)(delta, -1, 1, props.scaleFactorOnWheel, 1 / props.scaleFactorOnWheel);
  var SVGPoint = (0, _common.getSVGPoint)(value, x, y);
  var nextValue = (0, _zoom.zoom)(value, SVGPoint.x, SVGPoint.y, scaleFactor, props);
  event.preventDefault();
  return nextValue;
}

function onMouseEnterOrLeave(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var nextValue = (0, _common.setFocus)(value, event.type === 'mouseenter');
  event.preventDefault();
  return nextValue;
}

function onInterval(event, ViewerDOM, tool, value, props) {
  var coords = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var x = coords.x,
      y = coords.y;
  if (!([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(tool) >= 0)) return value;
  if (!props.detectAutoPan) return value;
  if (!value.focus) return value;
  return (0, _pan.autoPanIfNeeded)(value, x, y);
}

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closeMiniature = closeMiniature;
exports.openMiniature = openMiniature;

var _common = __webpack_require__(546);

function openMiniature(value) {
  return (0, _common.set)(value, {
    miniatureOpen: true
  });
}

function closeMiniature(value) {
  return (0, _common.set)(value, {
    miniatureOpen: false
  });
}

/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoPanIfNeeded = autoPanIfNeeded;
exports.pan = pan;
exports.startPanning = startPanning;
exports.stopPanning = stopPanning;
exports.updatePanning = updatePanning;

var _constants = __webpack_require__(61);

var _common = __webpack_require__(546);

var _transformationMatrix = __webpack_require__(180);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Atomic pan operation
 * @param value
 * @param SVGDeltaX drag movement
 * @param SVGDeltaY drag movement
 * @param panLimit forces the image to keep at least x pixel inside the viewer
 * @returns {Object}
 */
function pan(value, SVGDeltaX, SVGDeltaY) {
  var panLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), //2
  (0, _transformationMatrix.translate)(SVGDeltaX, SVGDeltaY) //1
  ); // apply pan limits

  if (panLimit) {
    var _applyToPoints = (0, _transformationMatrix.applyToPoints)(matrix, [{
      x: value.SVGMinX + panLimit,
      y: value.SVGMinY + panLimit
    }, {
      x: value.SVGMinX + value.SVGWidth - panLimit,
      y: value.SVGMinY + value.SVGHeight - panLimit
    }]),
        _applyToPoints2 = _slicedToArray(_applyToPoints, 2),
        _applyToPoints2$ = _applyToPoints2[0],
        x1 = _applyToPoints2$.x,
        y1 = _applyToPoints2$.y,
        _applyToPoints2$2 = _applyToPoints2[1],
        x2 = _applyToPoints2$2.x,
        y2 = _applyToPoints2$2.y; //x limit


    var moveX = 0;
    if (value.viewerWidth - x1 < 0) moveX = value.viewerWidth - x1;else if (x2 < 0) moveX = -x2; //y limit

    var moveY = 0;
    if (value.viewerHeight - y1 < 0) moveY = value.viewerHeight - y1;else if (y2 < 0) moveY = -y2; //apply limits

    matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.translate)(moveX, moveY), matrix);
  }

  return (0, _common.set)(value, _objectSpread({
    mode: _constants.MODE_IDLE
  }, matrix), _constants.ACTION_PAN);
}
/**
 * Start pan operation lifecycle
 * @param value
 * @param viewerX
 * @param viewerY
 * @return {ReadonlyArray<unknown>}
 */


function startPanning(value, viewerX, viewerY) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_PANNING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  }, _constants.ACTION_PAN);
}
/**
 * Continue pan operation lifecycle
 * @param value
 * @param viewerX
 * @param viewerY
 * @param panLimit
 * @return {ReadonlyArray<unknown>}
 */


function updatePanning(value, viewerX, viewerY, panLimit) {
  if (value.mode !== _constants.MODE_PANNING) throw new Error('update pan not allowed in this mode ' + value.mode);
  var endX = value.endX,
      endY = value.endY;
  var start = (0, _common.getSVGPoint)(value, endX, endY);
  var end = (0, _common.getSVGPoint)(value, viewerX, viewerY);
  var deltaX = end.x - start.x;
  var deltaY = end.y - start.y;
  var nextValue = pan(value, deltaX, deltaY, panLimit);
  return (0, _common.set)(nextValue, {
    mode: _constants.MODE_PANNING,
    endX: viewerX,
    endY: viewerY
  }, _constants.ACTION_PAN);
}
/**
 * Stop pan operation lifecycle
 * @param value
 * @return {ReadonlyArray<unknown>}
 */


function stopPanning(value) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_IDLE,
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }, _constants.ACTION_PAN);
}
/**
 * when pointer is on viewer edge -> pan image
 * @param value
 * @param viewerX
 * @param viewerY
 * @return {ReadonlyArray<any>}
 */


function autoPanIfNeeded(value, viewerX, viewerY) {
  var deltaX = 0;
  var deltaY = 0;
  if (viewerY <= 20) deltaY = 2;
  if (value.viewerWidth - viewerX <= 20) deltaX = -2;
  if (value.viewerHeight - viewerY <= 20) deltaY = -2;
  if (viewerX <= 20) deltaX = 2;
  deltaX = deltaX / value.d;
  deltaY = deltaY / value.d;
  return deltaX === 0 && deltaY === 0 ? value : pan(value, deltaX, deltaY);
}

/***/ }),

/***/ 271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fitSelection = fitSelection;
exports.fitToViewer = fitToViewer;
exports.isZoomLevelGoingOutOfBounds = isZoomLevelGoingOutOfBounds;
exports.limitZoomLevel = limitZoomLevel;
exports.startZooming = startZooming;
exports.stopZooming = stopZooming;
exports.updateZooming = updateZooming;
exports.zoom = zoom;
exports.zoomOnViewerCenter = zoomOnViewerCenter;

var _transformationMatrix = __webpack_require__(180);

var _constants = __webpack_require__(61);

var _common = __webpack_require__(546);

var _calculateBox = _interopRequireDefault(__webpack_require__(34));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isZoomLevelGoingOutOfBounds(value, scaleFactor) {
  var _decompose = (0, _common.decompose)(value),
      curScaleFactor = _decompose.scaleFactor;

  var lessThanScaleFactorMin = value.scaleFactorMin && curScaleFactor * scaleFactor < value.scaleFactorMin;
  var moreThanScaleFactorMax = value.scaleFactorMax && curScaleFactor * scaleFactor > value.scaleFactorMax;
  return lessThanScaleFactorMin && scaleFactor < 1 || moreThanScaleFactorMax && scaleFactor > 1;
}

function limitZoomLevel(value, matrix) {
  var scaleLevel = matrix.a;

  if (value.scaleFactorMin != null) {
    // limit minimum zoom
    scaleLevel = Math.max(scaleLevel, value.scaleFactorMin);
  }

  if (value.scaleFactorMax != null) {
    // limit maximum zoom
    scaleLevel = Math.min(scaleLevel, value.scaleFactorMax);
  }

  return (0, _common.set)(matrix, {
    a: scaleLevel,
    d: scaleLevel
  });
}

function zoom(value, SVGPointX, SVGPointY, scaleFactor) {
  if (isZoomLevelGoingOutOfBounds(value, scaleFactor)) {
    // Do not change translation and scale of value
    return value;
  }

  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.fromObject)(value), (0, _transformationMatrix.translate)(SVGPointX, SVGPointY), (0, _transformationMatrix.scale)(scaleFactor, scaleFactor), (0, _transformationMatrix.translate)(-SVGPointX, -SVGPointY));
  return (0, _common.set)(value, _objectSpread(_objectSpread({
    mode: _constants.MODE_IDLE
  }, matrix), {}, {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
} //ENHANCEMENT: add ability to control alignment
//ENHANCEMENT: add ability to selectively fit image inside viewer
//ENHANCEMENT: refactor some logic in order to merge with fitToViewer function


function fitSelection(value, selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var scaleX = viewerWidth / selectionWidth;
  var scaleY = viewerHeight / selectionHeight;
  var scaleLevel = Math.min(scaleX, scaleY);
  var matrix = (0, _transformationMatrix.transform)((0, _transformationMatrix.scale)(scaleLevel, scaleLevel), //2
  (0, _transformationMatrix.translate)(-selectionSVGPointX, -selectionSVGPointY) //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return (0, _common.set)(value, {
      mode: _constants.MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return (0, _common.set)(value, _objectSpread(_objectSpread({
    mode: _constants.MODE_IDLE
  }, limitZoomLevel(value, matrix)), {}, {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
}

function fitToViewer(value) {
  var SVGAlignX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.ALIGN_LEFT;
  var SVGAlignY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.ALIGN_TOP;
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight,
      SVGMinX = value.SVGMinX,
      SVGMinY = value.SVGMinY,
      SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight;
  var scaleX = viewerWidth / SVGWidth;
  var scaleY = viewerHeight / SVGHeight;
  var scaleLevel = Math.min(scaleX, scaleY);
  var scaleMatrix = (0, _transformationMatrix.scale)(scaleLevel, scaleLevel);
  var translateX = -SVGMinX * scaleX;
  var translateY = -SVGMinY * scaleY; // after fitting, SVG and the viewer will match in width (1) or in height (2) or SVG will cover the container with preserving aspect ratio (0)

  if (scaleX < scaleY) {
    var remainderY = viewerHeight - scaleX * SVGHeight; //(1) match in width, meaning scaled SVGHeight <= viewerHeight

    switch (SVGAlignY) {
      case _constants.ALIGN_TOP:
        translateY = -SVGMinY * scaleLevel;
        break;

      case _constants.ALIGN_CENTER:
        translateY = Math.round(remainderY / 2) - SVGMinY * scaleLevel;
        break;

      case _constants.ALIGN_BOTTOM:
        translateY = remainderY - SVGMinY * scaleLevel;
        break;

      case _constants.ALIGN_COVER:
        scaleMatrix = (0, _transformationMatrix.scale)(scaleY, scaleY); // (0) we must now match to short edge, in this case - height

        var remainderX = viewerWidth - scaleY * SVGWidth; // calculate remainder in the other scale

        translateX = SVGMinX + Math.round(remainderX / 2); // center by the long edge

        break;

      default: //no op

    }
  } else {
    var _remainderX = viewerWidth - scaleY * SVGWidth; //(2) match in height, meaning scaled SVGWidth <= viewerWidth


    switch (SVGAlignX) {
      case _constants.ALIGN_LEFT:
        translateX = -SVGMinX * scaleLevel;
        break;

      case _constants.ALIGN_CENTER:
        translateX = Math.round(_remainderX / 2) - SVGMinX * scaleLevel;
        break;

      case _constants.ALIGN_RIGHT:
        translateX = _remainderX - SVGMinX * scaleLevel;
        break;

      case _constants.ALIGN_COVER:
        scaleMatrix = (0, _transformationMatrix.scale)(scaleX, scaleX); // (0) we must now match to short edge, in this case - width

        var _remainderY = viewerHeight - scaleX * SVGHeight; // calculate remainder in the other scale


        translateY = SVGMinY + Math.round(_remainderY / 2); // center by the long edge

        break;

      default: //no op

    }
  }

  var translationMatrix = (0, _transformationMatrix.translate)(translateX, translateY);
  var matrix = (0, _transformationMatrix.transform)(translationMatrix, //2
  scaleMatrix //1
  );

  if (isZoomLevelGoingOutOfBounds(value, scaleLevel / value.d)) {
    // Do not allow scale and translation
    return (0, _common.set)(value, {
      mode: _constants.MODE_IDLE,
      startX: null,
      startY: null,
      endX: null,
      endY: null
    });
  }

  return (0, _common.set)(value, _objectSpread(_objectSpread({
    mode: _constants.MODE_IDLE
  }, limitZoomLevel(value, matrix)), {}, {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  }), _constants.ACTION_ZOOM);
}

function zoomOnViewerCenter(value, scaleFactor) {
  var viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var SVGPoint = (0, _common.getSVGPoint)(value, viewerWidth / 2, viewerHeight / 2);
  return zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor);
}

function startZooming(value, viewerX, viewerY) {
  return (0, _common.set)(value, {
    mode: _constants.MODE_ZOOMING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  });
}

function updateZooming(value, viewerX, viewerY) {
  if (value.mode !== _constants.MODE_ZOOMING) throw new Error('update selection not allowed in this mode ' + value.mode);
  return (0, _common.set)(value, {
    endX: viewerX,
    endY: viewerY
  });
}

function stopZooming(value, viewerX, viewerY, scaleFactor) {
  var TOLERATED_DISTANCE = 7; //minimum distance to choose if area selection or drill down on point

  var startX = value.startX,
      startY = value.startY;
  var start = (0, _common.getSVGPoint)(value, startX, startY);
  var end = (0, _common.getSVGPoint)(value, viewerX, viewerY);

  if (Math.abs(startX - viewerX) > TOLERATED_DISTANCE && Math.abs(startY - viewerY) > TOLERATED_DISTANCE) {
    var box = (0, _calculateBox.default)(start, end);
    return fitSelection(value, box.x, box.y, box.width, box.height);
  } else {
    var SVGPoint = (0, _common.getSVGPoint)(value, viewerX, viewerY);
    return zoom(value, SVGPoint.x, SVGPoint.y, scaleFactor);
  }
}

/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Viewer: true,
  ReactSVGPanZoom: true,
  UncontrolledReactSVGPanZoom: true,
  Toolbar: true,
  ToolbarButton: true,
  IconCursor: true,
  IconPan: true,
  IconFit: true,
  IconZoomIn: true,
  IconZoomOut: true,
  Miniature: true,
  setPointOnViewerCenter: true,
  reset: true,
  pan: true,
  zoom: true,
  fitSelection: true,
  fitToViewer: true,
  zoomOnViewerCenter: true,
  openMiniature: true,
  closeMiniature: true
};
Object.defineProperty(exports, "IconCursor", ({
  enumerable: true,
  get: function get() {
    return _iconCursor.default;
  }
}));
Object.defineProperty(exports, "IconFit", ({
  enumerable: true,
  get: function get() {
    return _iconFit.default;
  }
}));
Object.defineProperty(exports, "IconPan", ({
  enumerable: true,
  get: function get() {
    return _iconPan.default;
  }
}));
Object.defineProperty(exports, "IconZoomIn", ({
  enumerable: true,
  get: function get() {
    return _iconZoomIn.default;
  }
}));
Object.defineProperty(exports, "IconZoomOut", ({
  enumerable: true,
  get: function get() {
    return _iconZoomOut.default;
  }
}));
Object.defineProperty(exports, "Miniature", ({
  enumerable: true,
  get: function get() {
    return _miniature.default;
  }
}));
Object.defineProperty(exports, "ReactSVGPanZoom", ({
  enumerable: true,
  get: function get() {
    return _viewer.default;
  }
}));
Object.defineProperty(exports, "Toolbar", ({
  enumerable: true,
  get: function get() {
    return _toolbar.default;
  }
}));
Object.defineProperty(exports, "ToolbarButton", ({
  enumerable: true,
  get: function get() {
    return _toolbarButton.default;
  }
}));
Object.defineProperty(exports, "UncontrolledReactSVGPanZoom", ({
  enumerable: true,
  get: function get() {
    return _uncontrolledViewer.default;
  }
}));
exports.Viewer = void 0;
Object.defineProperty(exports, "closeMiniature", ({
  enumerable: true,
  get: function get() {
    return _miniature2.closeMiniature;
  }
}));
Object.defineProperty(exports, "fitSelection", ({
  enumerable: true,
  get: function get() {
    return _zoom.fitSelection;
  }
}));
Object.defineProperty(exports, "fitToViewer", ({
  enumerable: true,
  get: function get() {
    return _zoom.fitToViewer;
  }
}));
Object.defineProperty(exports, "openMiniature", ({
  enumerable: true,
  get: function get() {
    return _miniature2.openMiniature;
  }
}));
Object.defineProperty(exports, "pan", ({
  enumerable: true,
  get: function get() {
    return _pan.pan;
  }
}));
Object.defineProperty(exports, "reset", ({
  enumerable: true,
  get: function get() {
    return _common.reset;
  }
}));
Object.defineProperty(exports, "setPointOnViewerCenter", ({
  enumerable: true,
  get: function get() {
    return _common.setPointOnViewerCenter;
  }
}));
Object.defineProperty(exports, "zoom", ({
  enumerable: true,
  get: function get() {
    return _zoom.zoom;
  }
}));
Object.defineProperty(exports, "zoomOnViewerCenter", ({
  enumerable: true,
  get: function get() {
    return _zoom.zoomOnViewerCenter;
  }
}));

var _migrationTips = __webpack_require__(717);

var _viewer = _interopRequireDefault(__webpack_require__(895));

var _uncontrolledViewer = _interopRequireDefault(__webpack_require__(896));

var _toolbar = _interopRequireDefault(__webpack_require__(861));

var _toolbarButton = _interopRequireDefault(__webpack_require__(920));

var _iconCursor = _interopRequireDefault(__webpack_require__(627));

var _iconPan = _interopRequireDefault(__webpack_require__(5));

var _iconFit = _interopRequireDefault(__webpack_require__(884));

var _iconZoomIn = _interopRequireDefault(__webpack_require__(82));

var _iconZoomOut = _interopRequireDefault(__webpack_require__(825));

var _miniature = _interopRequireDefault(__webpack_require__(4));

var _common = __webpack_require__(546);

var _pan = __webpack_require__(946);

var _zoom = __webpack_require__(271);

var _miniature2 = __webpack_require__(93);

var _constants = __webpack_require__(61);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = function Viewer() {
  (0, _migrationTips.tipNoViewer)();
  return null;
};

exports.Viewer = Viewer;

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.printMigrationTipsRelatedToProps = printMigrationTipsRelatedToProps;
exports.tipControlledComponent = tipControlledComponent;
exports.tipDeprecateToolbarProps = tipDeprecateToolbarProps;
exports.tipDeprecatedMiniatureProps = tipDeprecatedMiniatureProps;
exports.tipNoViewer = tipNoViewer;

var _is = __webpack_require__(320);

var github_base = 'https://github.com/chrvadala/react-svg-pan-zoom/blob/master';
var doc_v1_to_v2 = github_base + '/docs/migrate-from-v1-to-v2.md';
var doc_v2_to_v3 = github_base + '/docs/migrate-from-v2-to-v3.md';

function tipNoViewer() {
  console.error("HEY! You are trying to use an older version of ReactSVGPanZoom. Please read here ".concat(doc_v1_to_v2));
}

function tipControlledComponent() {
  console.error("HEY! With ReactSVGPanZoom >= 3 you MUST specify value and tool props. Please read here ".concat(doc_v2_to_v3));
}

function tipDeprecatedMiniatureProps() {
  console.error("HEY! With ReactSVGPanZoom >= 3 the props miniaturePosition, miniatureBackground, miniatureWidth, miniatureHeight can be specified as key in the miniatureProps object. Please read here ".concat(doc_v2_to_v3));
}

function tipDeprecateToolbarProps() {
  console.error("HEY! With ReactSVGPanZoom >= 3 the prop toolbarPosition can be specified as key in the toolbarProps object. Please read here ".concat(doc_v2_to_v3));
}

function printMigrationTipsRelatedToProps(props) {
  if ((0, _is.isNullOrUndefined)(props.tool) || (0, _is.isNullOrUndefined)(props.value)) tipControlledComponent();
  if (!(0, _is.isNullOrUndefined)(props.miniaturePosition) || !(0, _is.isNullOrUndefined)(props.miniatureBackground) || !(0, _is.isNullOrUndefined)(props.miniatureWidth) || !(0, _is.isNullOrUndefined)(props.miniatureHeight)) tipDeprecatedMiniatureProps();
  if (!(0, _is.isNullOrUndefined)(props.toolbarPosition)) tipDeprecateToolbarProps();
}

/***/ }),

/***/ 951:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconArrow;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/chevron-up
function IconArrow(_ref) {
  var open = _ref.open,
      position = _ref.position;
  var transform = 0;

  switch (position) {
    case _constants.POSITION_LEFT:
      transform = open ? "rotate(225, 12, 13)" : "rotate(45, 12, 13)";
      break;

    case _constants.POSITION_RIGHT:
      transform = transform = open ? "rotate(135, 12, 13)" : "rotate(-45, 12, 13)";
      break;

    default: //no op

  }

  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: transform
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#000000",
    d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
  })));
}

IconArrow.propTypes = {
  open: _propTypes.default.bool.isRequired,
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]).isRequired
};

/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _RandomUID = _interopRequireDefault(__webpack_require__(860));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixID = 'react-svg-pan-zoom_miniature';

function MiniatureMask(_ref) {
  var SVGMinX = _ref.SVGMinX,
      SVGMinY = _ref.SVGMinY,
      SVGWidth = _ref.SVGWidth,
      SVGHeight = _ref.SVGHeight,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      zoomToFit = _ref.zoomToFit,
      _uid = _ref._uid;
  var maskID = "".concat(prefixID, "_mask_").concat(_uid);
  return /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("mask", {
    id: maskID
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: SVGMinX,
    y: SVGMinY,
    width: SVGWidth,
    height: SVGHeight,
    fill: "#ffffff"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    x: SVGMinX,
    y: SVGMinY,
    width: SVGWidth,
    height: SVGHeight,
    style: {
      stroke: "none",
      fill: "#000",
      mask: "url(#".concat(maskID, ")"),
      opacity: 0.4
    }
  }));
}

MiniatureMask.propTypes = {
  SVGWidth: _propTypes.default.number.isRequired,
  SVGHeight: _propTypes.default.number.isRequired,
  SVGMinX: _propTypes.default.number.isRequired,
  SVGMinY: _propTypes.default.number.isRequired,
  x1: _propTypes.default.number.isRequired,
  y1: _propTypes.default.number.isRequired,
  x2: _propTypes.default.number.isRequired,
  y2: _propTypes.default.number.isRequired,
  zoomToFit: _propTypes.default.number.isRequired
};

var _default = (0, _RandomUID.default)(MiniatureMask);

exports["default"] = _default;

/***/ }),

/***/ 446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = MiniatureToggleButton;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _miniature = __webpack_require__(93);

var _iconArrow = _interopRequireDefault(__webpack_require__(951));

var _constants = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MiniatureToggleButton(_ref) {
  var _style;

  var value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      position = _ref.position;
  var style = (_style = {
    width: "24px",
    height: "24px",
    display: "block",
    position: "absolute",
    bottom: 0
  }, _defineProperty(_style, position === _constants.POSITION_LEFT ? 'left' : 'right', '0px'), _defineProperty(_style, "background", "rgba(19, 20, 22, 0.901961)"), _defineProperty(_style, "border", 0), _defineProperty(_style, "padding", 0), _defineProperty(_style, "outline", 0), _defineProperty(_style, "color", "#fff"), _style);
  var action = value.miniatureOpen ? _miniature.closeMiniature : _miniature.openMiniature;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    style: style,
    onClick: function onClick() {
      return onChangeValue(action(value));
    }
  }, /*#__PURE__*/_react.default.createElement(_iconArrow.default, {
    open: value.miniatureOpen,
    position: position
  }));
}

MiniatureToggleButton.propTypes = {
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]).isRequired
};

/***/ }),

/***/ 4:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Miniature;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

var _transformationMatrix = __webpack_require__(180);

var _miniatureToggleButton = _interopRequireDefault(__webpack_require__(446));

var _miniatureMask = _interopRequireDefault(__webpack_require__(333));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Miniature(props) {
  var _style;

  var value = props.value,
      onChangeValue = props.onChangeValue,
      children = props.children,
      position = props.position,
      background = props.background,
      SVGBackground = props.SVGBackground,
      miniatureWidth = props.width,
      miniatureHeight = props.height;
  var SVGMinX = value.SVGMinX,
      SVGMinY = value.SVGMinY,
      SVGWidth = value.SVGWidth,
      SVGHeight = value.SVGHeight,
      viewerWidth = value.viewerWidth,
      viewerHeight = value.viewerHeight;
  var ratio = SVGHeight / SVGWidth;
  var zoomToFit = ratio >= 1 ? miniatureHeight / SVGHeight : miniatureWidth / SVGWidth;

  var _applyToPoints = (0, _transformationMatrix.applyToPoints)((0, _transformationMatrix.inverse)(value), [{
    x: 0,
    y: 0
  }, {
    x: viewerWidth,
    y: viewerHeight
  }]),
      _applyToPoints2 = _slicedToArray(_applyToPoints, 2),
      _applyToPoints2$ = _applyToPoints2[0],
      x1 = _applyToPoints2$.x,
      y1 = _applyToPoints2$.y,
      _applyToPoints2$2 = _applyToPoints2[1],
      x2 = _applyToPoints2$2.x,
      y2 = _applyToPoints2$2.y;

  var width, height;

  if (value.miniatureOpen) {
    width = miniatureWidth;
    height = miniatureHeight;
  } else {
    width = 24;
    height = 24;
  }

  var style = (_style = {
    position: "absolute",
    overflow: "hidden",
    outline: "1px solid rgba(19, 20, 22, 0.90)",
    transition: "width 200ms ease, height 200ms ease, bottom 200ms ease",
    width: width + "px",
    height: height + "px",
    bottom: "6px"
  }, _defineProperty(_style, position === _constants.POSITION_LEFT ? 'left' : 'right', "6px"), _defineProperty(_style, "background", background), _style);
  var centerTranslation = ratio >= 1 ? "translate(".concat((miniatureWidth - SVGWidth * zoomToFit) / 2 - SVGMinX * zoomToFit, ", ").concat(-SVGMinY * zoomToFit, ")") : "translate(".concat(-SVGMinX * zoomToFit, ", ").concat((miniatureHeight - SVGHeight * zoomToFit) / 2 - SVGMinY * zoomToFit, ")");
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "navigation",
    style: style
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: miniatureWidth,
    height: miniatureHeight,
    style: {
      pointerEvents: "none"
    }
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: centerTranslation
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "scale(".concat(zoomToFit, ", ").concat(zoomToFit, ")")
  }, /*#__PURE__*/_react.default.createElement("rect", {
    fill: SVGBackground,
    x: SVGMinX,
    y: SVGMinY,
    width: SVGWidth,
    height: SVGHeight
  }), children, /*#__PURE__*/_react.default.createElement(_miniatureMask.default, {
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    SVGMinX: SVGMinX,
    SVGMinY: SVGMinY,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    zoomToFit: zoomToFit
  })))), /*#__PURE__*/_react.default.createElement(_miniatureToggleButton.default, {
    value: value,
    onChangeValue: onChangeValue,
    position: position
  }));
}

Miniature.propTypes = {
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  SVGBackground: _propTypes.default.string.isRequired,
  //customizations
  position: _propTypes.default.oneOf([_constants.POSITION_RIGHT, _constants.POSITION_LEFT]),
  background: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
Miniature.defaultProps = {
  position: _constants.POSITION_LEFT,
  background: "#616264",
  width: 100,
  height: 80
};

/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconCursor;

var _react = _interopRequireDefault(__webpack_require__(787));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/cursor-default-outline
function IconCursor() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"
  }));
}

/***/ }),

/***/ 884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconFit;

var _react = _interopRequireDefault(__webpack_require__(787));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//credits https://materialdesignicons.com/icon/cursor-default-outline
function IconFit() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"
  }));
}

/***/ }),

/***/ 5:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconPan;

var _react = _interopRequireDefault(__webpack_require__(787));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://materialdesignicons.com/icon/cursor-move
function IconPan() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"
  }));
}

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconZoomIn;

var _react = _interopRequireDefault(__webpack_require__(787));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://material.io/icons/#ic_zoom_in
function IconZoomIn() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
  })));
}

/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = IconZoomOut;

var _react = _interopRequireDefault(__webpack_require__(787));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://material.io/icons/#ic_zoom_out
function IconZoomOut() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 24,
    height: 24,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
  }));
}

/***/ }),

/***/ 920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ToolbarButton = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarButton, _React$Component);

  var _super = _createSuper(ToolbarButton);

  function ToolbarButton(props) {
    var _this;

    _classCallCheck(this, ToolbarButton);

    _this = _super.call(this, props);
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(ToolbarButton, [{
    key: "change",
    value: function change(event) {
      event.preventDefault();
      event.stopPropagation();

      switch (event.type) {
        case 'mouseenter':
        case 'touchstart':
          this.setState({
            hover: true
          });
          break;

        case 'mouseleave':
        case 'touchend':
        case 'touchcancel':
          this.setState({
            hover: false
          });
          break;

        default: //noop

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        display: "block",
        width: "24px",
        height: "24px",
        margin: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(this.props.toolbarPosition) >= 0 ? "2px 1px" : "1px 2px",
        color: this.props.active || this.state.hover ? this.props.activeColor : '#FFF',
        transition: "color 200ms ease",
        background: "none",
        padding: "0px",
        border: "0px",
        outline: "0px",
        cursor: "pointer"
      };
      return /*#__PURE__*/_react.default.createElement("button", {
        onMouseEnter: function onMouseEnter(e) {
          return _this2.change(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this2.change(e);
        },
        onTouchStart: function onTouchStart(e) {
          _this2.change(e);

          _this2.props.onClick(e);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this2.change(e);
        },
        onTouchCancel: function onTouchCancel(e) {
          return _this2.change(e);
        },
        onClick: this.props.onClick,
        style: style,
        title: this.props.title,
        name: this.props.name,
        type: "button"
      }, this.props.children);
    }
  }]);

  return ToolbarButton;
}(_react.default.Component);

exports["default"] = ToolbarButton;
ToolbarButton.propTypes = {
  title: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  toolbarPosition: _propTypes.default.string.isRequired,
  activeColor: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired,
  active: _propTypes.default.bool.isRequired
};

/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Toolbar;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

var _zoom = __webpack_require__(271);

var _iconCursor = _interopRequireDefault(__webpack_require__(627));

var _iconPan = _interopRequireDefault(__webpack_require__(5));

var _iconZoomIn = _interopRequireDefault(__webpack_require__(82));

var _iconZoomOut = _interopRequireDefault(__webpack_require__(825));

var _iconFit = _interopRequireDefault(__webpack_require__(884));

var _toolbarButton = _interopRequireDefault(__webpack_require__(920));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Toolbar(_ref) {
  var tool = _ref.tool,
      value = _ref.value,
      onChangeValue = _ref.onChangeValue,
      onChangeTool = _ref.onChangeTool,
      activeToolColor = _ref.activeToolColor,
      position = _ref.position,
      SVGAlignX = _ref.SVGAlignX,
      SVGAlignY = _ref.SVGAlignY;

  var handleChangeTool = function handleChangeTool(event, tool) {
    onChangeTool(tool);
    event.stopPropagation();
    event.preventDefault();
  };

  var handleFit = function handleFit(event) {
    onChangeValue((0, _zoom.fitToViewer)(value, SVGAlignX, SVGAlignY));
    event.stopPropagation();
    event.preventDefault();
  };

  var isHorizontal = [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0;
  var style = {
    //position
    position: "absolute",
    transform: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "translate(-50%, 0px)" : "none",
    top: [_constants.POSITION_LEFT, _constants.POSITION_RIGHT, _constants.POSITION_TOP].indexOf(position) >= 0 ? "5px" : "unset",
    left: [_constants.POSITION_TOP, _constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "50%" : _constants.POSITION_LEFT === position ? "5px" : "unset",
    right: [_constants.POSITION_RIGHT].indexOf(position) >= 0 ? "5px" : "unset",
    bottom: [_constants.POSITION_BOTTOM].indexOf(position) >= 0 ? "5px" : "unset",
    //inner styling
    backgroundColor: "rgba(19, 20, 22, 0.90)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    padding: isHorizontal ? "1px 2px" : "2px 1px"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    role: "toolbar"
  }, /*#__PURE__*/_react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_NONE,
    activeColor: activeToolColor,
    name: "unselect-tools",
    title: "Selection",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_NONE);
    }
  }, /*#__PURE__*/_react.default.createElement(_iconCursor.default, null)), /*#__PURE__*/_react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_PAN,
    activeColor: activeToolColor,
    name: "select-tool-pan",
    title: "Pan",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_PAN);
    }
  }, /*#__PURE__*/_react.default.createElement(_iconPan.default, null)), /*#__PURE__*/_react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_ZOOM_IN,
    activeColor: activeToolColor,
    name: "select-tool-zoom-in",
    title: "Zoom in",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_ZOOM_IN);
    }
  }, /*#__PURE__*/_react.default.createElement(_iconZoomIn.default, null)), /*#__PURE__*/_react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: tool === _constants.TOOL_ZOOM_OUT,
    activeColor: activeToolColor,
    name: "select-tool-zoom-out",
    title: "Zoom out",
    onClick: function onClick(event) {
      return handleChangeTool(event, _constants.TOOL_ZOOM_OUT);
    }
  }, /*#__PURE__*/_react.default.createElement(_iconZoomOut.default, null)), /*#__PURE__*/_react.default.createElement(_toolbarButton.default, {
    toolbarPosition: position,
    active: false,
    activeColor: activeToolColor,
    name: "fit-to-viewer",
    title: "Fit to viewer",
    onClick: function onClick(event) {
      return handleFit(event);
    }
  }, /*#__PURE__*/_react.default.createElement(_iconFit.default, null)));
}

Toolbar.propTypes = {
  tool: _propTypes.default.string.isRequired,
  onChangeTool: _propTypes.default.func.isRequired,
  value: _propTypes.default.object.isRequired,
  onChangeValue: _propTypes.default.func.isRequired,
  //customizations
  position: _propTypes.default.oneOf([_constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]),
  SVGAlignX: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_LEFT, _constants.ALIGN_RIGHT]),
  SVGAlignY: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_TOP, _constants.ALIGN_BOTTOM]),
  activeToolColor: _propTypes.default.string
};
Toolbar.defaultProps = {
  position: _constants.POSITION_RIGHT,
  SVGAlignX: _constants.ALIGN_LEFT,
  SVGAlignY: _constants.ALIGN_TOP,
  activeToolColor: '#1CA6FC'
};

/***/ }),

/***/ 191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

var _RandomUID = _interopRequireDefault(__webpack_require__(860));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixID = 'react-svg-pan-zoom_border_gradient';

function BorderGradient(_ref) {
  var direction = _ref.direction,
      width = _ref.width,
      height = _ref.height,
      _uid = _ref._uid;
  var transform;

  switch (direction) {
    case _constants.POSITION_TOP:
      transform = "translate(".concat(width, ", 0) rotate(90)");
      break;

    case _constants.POSITION_RIGHT:
      transform = "translate(".concat(width, ", ").concat(height, ") rotate(180)");
      break;

    case _constants.POSITION_BOTTOM:
      transform = "translate(0, ".concat(height, ") rotate(270)");
      break;

    case _constants.POSITION_LEFT:
    default:
      transform = " ";
      break;
  }

  var gradientID = "".concat(prefixID, "_gradient_").concat(_uid);
  var maskID = "".concat(prefixID, "_mask_").concat(_uid);
  return /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: gradientID,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%",
    spreadMethod: "pad"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    stopColor: "#fff",
    stopOpacity: "0.8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    stopColor: "#000",
    stopOpacity: "0.5"
  })), /*#__PURE__*/_react.default.createElement("mask", {
    id: maskID,
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height)
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height),
    style: {
      stroke: "none",
      fill: "url(#".concat(gradientID, ")")
    }
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "20",
    height: Math.max(width, height),
    style: {
      stroke: "none",
      fill: "#000",
      mask: "url(#".concat(maskID, ")")
    },
    transform: transform
  }));
}

BorderGradient.propTypes = {
  direction: _propTypes.default.oneOf([_constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]).isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};

var _default = (0, _RandomUID.default)(BorderGradient);

exports["default"] = _default;

/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

//specs: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
var needPrefix = function needPrefix(cursor) {
  return ['zoom-in', 'zoom-out', 'grab', 'grabbing'].indexOf(cursor) > -1;
};

var userAgent = function userAgent() {
  return navigator.userAgent.toLowerCase();
};

var isFirefox = function isFirefox() {
  return userAgent().indexOf('firefox') > -1;
};

var isWebkit = function isWebkit() {
  return userAgent().indexOf('webkit') > -1;
};

function _default(cursor) {
  if (!needPrefix(cursor)) return cursor;
  if (isFirefox()) return "-moz-".concat(cursor);
  if (isWebkit()) return "-webkit-".concat(cursor);
}

/***/ }),

/***/ 939:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isTouchDevice;

//http://stackoverflow.com/a/4819886/1398836
function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers
  || navigator.maxTouchPoints; // works on IE10/11 and Surface
}

;

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Selection;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _calculateBox = _interopRequireDefault(__webpack_require__(34));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection(_ref) {
  var startX = _ref.startX,
      startY = _ref.startY,
      endX = _ref.endX,
      endY = _ref.endY;
  if (!startX || !startY || !endX || !endY) return null;
  var box = (0, _calculateBox.default)({
    x: startX,
    y: startY
  }, {
    x: endX,
    y: endY
  });
  return /*#__PURE__*/_react.default.createElement("rect", {
    stroke: "#969FFF",
    strokeOpacity: 0.7,
    fill: "#F3F4FF",
    fillOpacity: 0.7,
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    style: {
      pointerEvents: "none"
    }
  });
}

Selection.propTypes = {
  startX: _propTypes.default.number,
  startY: _propTypes.default.number,
  endX: _propTypes.default.number,
  endY: _propTypes.default.number
};

/***/ }),

/***/ 896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(787));

var _viewer = _interopRequireDefault(__webpack_require__(895));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _constants = __webpack_require__(61);

var _excluded = ["width", "height", "onChangeTool", "onChangeValue"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UncontrolledReactSVGPanZoom = /*#__PURE__*/function (_React$Component) {
  _inherits(UncontrolledReactSVGPanZoom, _React$Component);

  var _super = _createSuper(UncontrolledReactSVGPanZoom);

  function UncontrolledReactSVGPanZoom(props) {
    var _this;

    _classCallCheck(this, UncontrolledReactSVGPanZoom);

    _this = _super.call(this, props);
    _this.state = {
      value: props.defaultValue || {},
      tool: props.defaultTool || _constants.TOOL_NONE
    };
    _this.Viewer = null;
    _this.changeTool = _this.changeTool.bind(_assertThisInitialized(_this));
    _this.changeValue = _this.changeValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UncontrolledReactSVGPanZoom, [{
    key: "changeTool",
    value: function changeTool(tool) {
      this.setState({
        tool: tool
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "pan",
    value: function pan(SVGDeltaX, SVGDeltaY) {
      this.Viewer.pan(SVGDeltaX, SVGDeltaY);
    }
  }, {
    key: "zoom",
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      this.Viewer.zoom(SVGPointX, SVGPointY, scaleFactor);
    }
  }, {
    key: "fitSelection",
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      this.Viewer.fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);
    }
  }, {
    key: "fitToViewer",
    value: function fitToViewer(SVGAlignX, SVGAlignY) {
      this.Viewer.fitToViewer(SVGAlignX, SVGAlignY);
    }
  }, {
    key: "zoomOnViewerCenter",
    value: function zoomOnViewerCenter(scaleFactor) {
      this.Viewer.zoomOnViewerCenter(scaleFactor);
    }
  }, {
    key: "setPointOnViewerCenter",
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      this.Viewer.setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.Viewer.reset();
    }
  }, {
    key: "openMiniature",
    value: function openMiniature() {
      this.Viewer.openMiniature();
    }
  }, {
    key: "closeMiniature",
    value: function closeMiniature() {
      this.Viewer.closeMiniature();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          onChangeTool = _this$props.onChangeTool,
          onChangeValue = _this$props.onChangeValue,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _this$state = this.state,
          tool = _this$state.tool,
          value = _this$state.value;
      return /*#__PURE__*/_react.default.createElement(_viewer.default, _extends({
        width: width,
        height: height,
        tool: tool,
        onChangeTool: this.changeTool,
        value: value,
        onChangeValue: this.changeValue,
        ref: function ref(Viewer) {
          return _this2.Viewer = Viewer;
        }
      }, props));
    }
  }]);

  return UncontrolledReactSVGPanZoom;
}(_react.default.Component);

exports["default"] = UncontrolledReactSVGPanZoom;
UncontrolledReactSVGPanZoom.propTypes = {
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  defaultValue: _propTypes.default.object,
  defaultTool: _propTypes.default.string
};

/***/ }),

/***/ 860:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = RandomUID;

var _react = _interopRequireDefault(__webpack_require__(787));

var _getDisplayName = _interopRequireDefault(__webpack_require__(379));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var uid = 1;

var nextUID = function nextUID() {
  return "uid".concat(uid++);
};

function RandomUID(WrappedComponent) {
  var RandomUID = /*#__PURE__*/function (_React$Component) {
    _inherits(RandomUID, _React$Component);

    var _super = _createSuper(RandomUID);

    function RandomUID(props) {
      var _this;

      _classCallCheck(this, RandomUID);

      _this = _super.call(this, props);
      _this.state = {
        uid: nextUID()
      };
      return _this;
    }

    _createClass(RandomUID, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
          _uid: this.state.uid
        }, this.props));
      }
    }]);

    return RandomUID;
  }(_react.default.Component);

  RandomUID.displayName = "RandomUID(".concat((0, _getDisplayName.default)(WrappedComponent), ")");
  return RandomUID;
}

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = calculateBox;

function calculateBox(start, end) {
  if (start.x <= end.x && start.y <= end.y) {
    return {
      x: start.x,
      y: start.y,
      width: end.x - start.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y <= end.y) {
    return {
      x: end.x,
      y: start.y,
      width: start.x - end.x,
      height: end.y - start.y
    };
  } else if (start.x >= end.x && start.y >= end.y) {
    return {
      x: end.x,
      y: end.y,
      width: start.x - end.x,
      height: start.y - end.y
    };
  } else if (start.x <= end.x && start.y >= end.y) {
    return {
      x: start.x,
      y: end.y,
      width: end.x - start.x,
      height: start.y - end.y
    };
  }
}

/***/ }),

/***/ 379:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getDisplayName;

//https://facebook.github.io/react/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/***/ }),

/***/ 320:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNullOrUndefined = isNullOrUndefined;

function isNullOrUndefined(value) {
  return typeof value === 'undefined' || value === null;
}

/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = mapRange;

/**
 * Convert (re-map) an input value range into a destination range.
 * @param value
 * @param sourceStart
 * @param sourceEnd
 * @param targetStart
 * @param targetEnd
 * @return number
 */
function mapRange(value, sourceStart, sourceEnd, targetStart, targetEnd) {
  return targetStart + (targetEnd - targetStart) * (value - sourceStart) / (sourceEnd - sourceStart);
}

/***/ }),

/***/ 557:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = parseViewBox;

function parseViewBox(viewBoxString) {
  // viewBox specs: https://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
  return viewBoxString.split(/[ ,]/) // split optional comma
  .filter(Boolean) // remove empty strings
  .map(Number); // cast to Number
}

/***/ }),

/***/ 895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(787));

var _propTypes = _interopRequireDefault(__webpack_require__(619));

var _transformationMatrix = __webpack_require__(180);

var _eventFactory = _interopRequireDefault(__webpack_require__(448));

var _pan2 = __webpack_require__(946);

var _common = __webpack_require__(546);

var _interactions = __webpack_require__(610);

var _parseViewBox5 = _interopRequireDefault(__webpack_require__(557));

var _interactionsTouch = __webpack_require__(581);

var _zoom2 = __webpack_require__(271);

var _miniature = __webpack_require__(93);

var _cursorPolyfill = _interopRequireDefault(__webpack_require__(994));

var _borderGradient = _interopRequireDefault(__webpack_require__(191));

var _selection = _interopRequireDefault(__webpack_require__(23));

var _toolbar = _interopRequireDefault(__webpack_require__(861));

var _detectTouch = _interopRequireDefault(__webpack_require__(939));

var _miniature2 = _interopRequireDefault(__webpack_require__(4));

var _constants = __webpack_require__(61);

var _migrationTips = __webpack_require__(717);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactSVGPanZoom = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactSVGPanZoom, _React$Component);

  var _super = _createSuper(ReactSVGPanZoom);

  function ReactSVGPanZoom(props, context) {
    var _this;

    _classCallCheck(this, ReactSVGPanZoom);

    var viewerWidth = props.width,
        viewerHeight = props.height,
        scaleFactorMin = props.scaleFactorMin,
        scaleFactorMax = props.scaleFactorMax,
        children = props.children;
    var SVGViewBox = children.props.viewBox;
    var defaultValue;

    if (SVGViewBox) {
      var _parseViewBox = (0, _parseViewBox5.default)(SVGViewBox),
          _parseViewBox2 = _slicedToArray(_parseViewBox, 4),
          SVGMinX = _parseViewBox2[0],
          SVGMinY = _parseViewBox2[1],
          SVGWidth = _parseViewBox2[2],
          SVGHeight = _parseViewBox2[3];

      defaultValue = (0, _common.getDefaultValue)(viewerWidth, viewerHeight, SVGMinX, SVGMinY, SVGWidth, SVGHeight, scaleFactorMin, scaleFactorMax);
    } else {
      var _children$props = children.props,
          _SVGWidth = _children$props.width,
          _SVGHeight = _children$props.height;
      defaultValue = (0, _common.getDefaultValue)(viewerWidth, viewerHeight, 0, 0, _SVGWidth, _SVGHeight, scaleFactorMin, scaleFactorMax);
    }

    _this = _super.call(this, props, context);
    _this.ViewerDOM = null;
    _this.state = {
      pointerX: null,
      pointerY: null,
      defaultValue: defaultValue
    };
    _this.autoPanLoop = _this.autoPanLoop.bind(_assertThisInitialized(_this));
    _this.onWheel = _this.onWheel.bind(_assertThisInitialized(_this));

    if (false) {}

    return _this;
  }
  /** React hooks **/


  _createClass(ReactSVGPanZoom, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.getValue();
      var props = this.props;
      var nextValue = value;
      var needUpdate = false;

      if (false) {} // This block checks the size of the SVG


      var SVGViewBox = props.children.props.viewBox;

      if (SVGViewBox) {
        // if the viewBox prop is specified
        var _parseViewBox3 = (0, _parseViewBox5.default)(SVGViewBox),
            _parseViewBox4 = _slicedToArray(_parseViewBox3, 4),
            x = _parseViewBox4[0],
            y = _parseViewBox4[1],
            width = _parseViewBox4[2],
            height = _parseViewBox4[3];

        if (value.SVGMinX !== x || value.SVGMinY !== y || value.SVGWidth !== width || value.SVGHeight !== height) {
          nextValue = (0, _common.setSVGViewBox)(nextValue, x, y, width, height);
          needUpdate = true;
        }
      } else {
        // if the width and height props are specified
        var _props$children$props = props.children.props,
            SVGWidth = _props$children$props.width,
            SVGHeight = _props$children$props.height;

        if (value.SVGWidth !== SVGWidth || value.SVGHeight !== SVGHeight) {
          nextValue = (0, _common.setSVGViewBox)(nextValue, 0, 0, SVGWidth, SVGHeight);
          needUpdate = true;
        }
      } // This block checks the size of the viewer


      if (prevProps.width !== props.width || prevProps.height !== props.height) {
        nextValue = (0, _common.setViewerSize)(nextValue, props.width, props.height);
        needUpdate = true;
      } // This blocks checks the scale factors


      if (prevProps.scaleFactorMin !== props.scaleFactorMin || prevProps.scaleFactorMax !== props.scaleFactorMax) {
        nextValue = (0, _common.setZoomLevels)(nextValue, props.scaleFactorMin, props.scaleFactorMax);
        needUpdate = true;
      }

      if (needUpdate) {
        this.setValue(nextValue);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoPanIsRunning = true;
      requestAnimationFrame(this.autoPanLoop);
      this.ViewerDOM.addEventListener("wheel", this.onWheel, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.autoPanIsRunning = false;
      this.ViewerDOM.removeEventListener("wheel", this.onWheel);
    }
    /** ReactSVGPanZoom handlers **/

  }, {
    key: "getValue",
    value: function getValue() {
      if ((0, _common.isValueValid)(this.props.value)) return this.props.value;
      return this.state.defaultValue;
    }
  }, {
    key: "getTool",
    value: function getTool() {
      if (this.props.tool) return this.props.tool;
      return _constants.TOOL_NONE;
    }
  }, {
    key: "setValue",
    value: function setValue(nextValue) {
      var _this$props = this.props,
          onChangeValue = _this$props.onChangeValue,
          onZoom = _this$props.onZoom,
          onPan = _this$props.onPan;
      if (onChangeValue) onChangeValue(nextValue);

      if (nextValue.lastAction) {
        if (onZoom && nextValue.lastAction === _constants.ACTION_ZOOM) onZoom(nextValue);
        if (onPan && nextValue.lastAction === _constants.ACTION_PAN) onPan(nextValue);
      }
    }
    /** ReactSVGPanZoom methods **/

  }, {
    key: "pan",
    value: function pan(SVGDeltaX, SVGDeltaY) {
      var nextValue = (0, _pan2.pan)(this.getValue(), SVGDeltaX, SVGDeltaY);
      this.setValue(nextValue);
    }
  }, {
    key: "zoom",
    value: function zoom(SVGPointX, SVGPointY, scaleFactor) {
      var nextValue = (0, _zoom2.zoom)(this.getValue(), SVGPointX, SVGPointY, scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: "fitSelection",
    value: function fitSelection(selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight) {
      var nextValue = (0, _zoom2.fitSelection)(this.getValue(), selectionSVGPointX, selectionSVGPointY, selectionWidth, selectionHeight);
      this.setValue(nextValue);
    }
  }, {
    key: "fitToViewer",
    value: function fitToViewer() {
      var SVGAlignX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.ALIGN_LEFT;
      var SVGAlignY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.ALIGN_TOP;
      var nextValue = (0, _zoom2.fitToViewer)(this.getValue(), SVGAlignX, SVGAlignY);
      this.setValue(nextValue);
    }
  }, {
    key: "zoomOnViewerCenter",
    value: function zoomOnViewerCenter(scaleFactor) {
      var nextValue = (0, _zoom2.zoomOnViewerCenter)(this.getValue(), scaleFactor);
      this.setValue(nextValue);
    }
  }, {
    key: "setPointOnViewerCenter",
    value: function setPointOnViewerCenter(SVGPointX, SVGPointY, zoomLevel) {
      var nextValue = (0, _common.setPointOnViewerCenter)(this.getValue(), SVGPointX, SVGPointY, zoomLevel);
      this.setValue(nextValue);
    }
  }, {
    key: "reset",
    value: function reset() {
      var nextValue = (0, _common.reset)(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: "openMiniature",
    value: function openMiniature() {
      var nextValue = (0, _miniature.openMiniature)(this.getValue());
      this.setValue(nextValue);
    }
  }, {
    key: "closeMiniature",
    value: function closeMiniature() {
      var nextValue = (0, _miniature.closeMiniature)(this.getValue());
      this.setValue(nextValue);
    }
    /** ReactSVGPanZoom internals **/

  }, {
    key: "handleViewerEvent",
    value: function handleViewerEvent(event) {
      var props = this.props,
          ViewerDOM = this.ViewerDOM;
      if (!([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(this.getTool()) >= 0)) return;
      if (event.target === ViewerDOM) return;
      var eventsHandler = {
        click: props.onClick,
        dblclick: props.onDoubleClick,
        mousemove: props.onMouseMove,
        mouseup: props.onMouseUp,
        mousedown: props.onMouseDown,
        touchstart: props.onTouchStart,
        touchmove: props.onTouchMove,
        touchend: props.onTouchEnd,
        touchcancel: props.onTouchCancel
      };
      var onEventHandler = eventsHandler[event.type];
      if (!onEventHandler) return;
      onEventHandler((0, _eventFactory.default)(event, props.value, ViewerDOM));
    }
  }, {
    key: "autoPanLoop",
    value: function autoPanLoop() {
      var coords = {
        x: this.state.pointerX,
        y: this.state.pointerY
      };
      var nextValue = (0, _interactions.onInterval)(null, this.ViewerDOM, this.getTool(), this.getValue(), this.props, coords);

      if (this.getValue() !== nextValue) {
        this.setValue(nextValue);
      } // if (this.autoPanIsRunning) {
      //   requestAnimationFrame(this.autoPanLoop);
      // }

    }
  }, {
    key: "onWheel",
    value: function onWheel(event) {
      var nextValue = (0, _interactions.onWheel)(event, this.ViewerDOM, this.getTool(), this.getValue(), this.props);
      if (this.getValue() !== nextValue) this.setValue(nextValue);
    }
    /** React renderer **/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          _this$state = this.state,
          pointerX = _this$state.pointerX,
          pointerY = _this$state.pointerY;
      var tool = this.getTool();
      var value = this.getValue();
      var _props$customToolbar = props.customToolbar,
          CustomToolbar = _props$customToolbar === void 0 ? _toolbar.default : _props$customToolbar,
          _props$customMiniatur = props.customMiniature,
          CustomMiniature = _props$customMiniatur === void 0 ? _miniature2.default : _props$customMiniatur;
      var panningWithToolAuto = tool === _constants.TOOL_AUTO && value.mode === _constants.MODE_PANNING && value.startX !== value.endX && value.startY !== value.endY;
      var cursor;
      if (tool === _constants.TOOL_PAN) cursor = (0, _cursorPolyfill.default)(value.mode === _constants.MODE_PANNING ? "grabbing" : "grab");
      if (tool === _constants.TOOL_ZOOM_IN) cursor = (0, _cursorPolyfill.default)("zoom-in");
      if (tool === _constants.TOOL_ZOOM_OUT) cursor = (0, _cursorPolyfill.default)("zoom-out");
      if (panningWithToolAuto) cursor = (0, _cursorPolyfill.default)("grabbing");
      var blockChildEvents = [_constants.TOOL_PAN, _constants.TOOL_ZOOM_IN, _constants.TOOL_ZOOM_OUT].indexOf(tool) >= 0;
      blockChildEvents = blockChildEvents || panningWithToolAuto;
      var touchAction = this.props.detectPinchGesture || [_constants.TOOL_PAN, _constants.TOOL_AUTO].indexOf(this.getTool()) !== -1 ? "none" : undefined;
      var style = {
        display: "block",
        cursor: cursor,
        touchAction: touchAction
      };
      console.log(value);
      return /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread({
          position: "relative",
          width: value.viewerWidth,
          height: value.viewerHeight
        }, props.style),
        className: this.props.className
      }, /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(ViewerDOM) {
          return _this2.ViewerDOM = ViewerDOM;
        },
        style: _objectSpread({
          width: value.viewerWidth,
          height: value.viewerHeight
        }, style),
        onMouseDown: function onMouseDown(event) {
          var nextValue = (0, _interactions.onMouseDown)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onMouseMove: function onMouseMove(event) {
          var _this2$ViewerDOM$getB = _this2.ViewerDOM.getBoundingClientRect(),
              left = _this2$ViewerDOM$getB.left,
              top = _this2$ViewerDOM$getB.top;

          var x = event.clientX - Math.round(left);
          var y = event.clientY - Math.round(top);
          var nextValue = (0, _interactions.onMouseMove)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props, {
            x: x,
            y: y
          });
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.setState({
            pointerX: x,
            pointerY: y
          });

          _this2.handleViewerEvent(event);
        },
        onMouseUp: function onMouseUp(event) {
          var nextValue = (0, _interactions.onMouseUp)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onClick: function onClick(event) {
          _this2.handleViewerEvent(event);
        },
        onDoubleClick: function onDoubleClick(event) {
          var nextValue = (0, _interactions.onDoubleClick)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onMouseEnter: function onMouseEnter(event) {
          if ((0, _detectTouch.default)()) return;
          var nextValue = (0, _interactions.onMouseEnterOrLeave)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onMouseLeave: function onMouseLeave(event) {
          var nextValue = (0, _interactions.onMouseEnterOrLeave)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);
        },
        onTouchStart: function onTouchStart(event) {
          var nextValue = (0, _interactionsTouch.onTouchStart)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchMove: function onTouchMove(event) {
          var nextValue = (0, _interactionsTouch.onTouchMove)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          var nextValue = (0, _interactionsTouch.onTouchEnd)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        },
        onTouchCancel: function onTouchCancel(event) {
          var nextValue = (0, _interactionsTouch.onTouchCancel)(event, _this2.ViewerDOM, _this2.getTool(), _this2.getValue(), _this2.props);
          if (_this2.getValue() !== nextValue) _this2.setValue(nextValue);

          _this2.handleViewerEvent(event);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          transform: "translate3d(".concat(value.e, "px, ").concat(value.f, "px, 0px) scale3d(").concat(value.a, ", ").concat(value.a, ", 1)")
        }
      }, /*#__PURE__*/_react.default.createElement("svg", {
        width: value.SVGWidth,
        height: value.SVGHeight
      }, /*#__PURE__*/_react.default.createElement("rect", {
        fill: props.background,
        x: 0,
        y: 0,
        width: value.viewerWidth,
        height: value.viewerHeight,
        style: {
          pointerEvents: "none"
        }
      }), /*#__PURE__*/_react.default.createElement("g", {
        style: blockChildEvents ? {
          pointerEvents: "none"
        } : {},
        width: value.SVGWidth,
        height: value.SVGHeight
      }, /*#__PURE__*/_react.default.createElement("rect", {
        fill: this.props.SVGBackground,
        style: this.props.SVGStyle,
        x: value.SVGMinX || 0,
        y: value.SVGMinY || 0,
        width: value.SVGWidth,
        height: value.SVGHeight
      }), /*#__PURE__*/_react.default.createElement("g", null, props.children.props.children)), !([_constants.TOOL_NONE, _constants.TOOL_AUTO].indexOf(tool) >= 0 && props.detectAutoPan && value.focus) ? null : /*#__PURE__*/_react.default.createElement("g", {
        style: {
          pointerEvents: "none"
        }
      }, !(pointerY <= 20) ? null : /*#__PURE__*/_react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_TOP,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerWidth - pointerX <= 20) ? null : /*#__PURE__*/_react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_RIGHT,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.viewerHeight - pointerY <= 20) ? null : /*#__PURE__*/_react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_BOTTOM,
        width: value.viewerWidth,
        height: value.viewerHeight
      }), !(value.focus && pointerX <= 20) ? null : /*#__PURE__*/_react.default.createElement(_borderGradient.default, {
        direction: _constants.POSITION_LEFT,
        width: value.viewerWidth,
        height: value.viewerHeight
      })), !(value.mode === _constants.MODE_ZOOMING) ? null : /*#__PURE__*/_react.default.createElement(_selection.default, {
        startX: value.startX,
        startY: value.startY,
        endX: value.endX,
        endY: value.endY
      })))), props.toolbarProps.position === _constants.POSITION_NONE ? null : /*#__PURE__*/_react.default.createElement(CustomToolbar, _extends({}, this.props.toolbarProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        tool: tool,
        onChangeTool: function onChangeTool(tool) {
          return _this2.props.onChangeTool(tool);
        }
      })), props.miniatureProps.position === _constants.POSITION_NONE ? null : /*#__PURE__*/_react.default.createElement(CustomMiniature, _extends({}, this.props.miniatureProps, {
        value: value,
        onChangeValue: function onChangeValue(value) {
          return _this2.setValue(value);
        },
        SVGBackground: this.props.SVGBackground
      }), props.children.props.children));
    }
  }]);

  return ReactSVGPanZoom;
}(_react.default.Component);

exports["default"] = ReactSVGPanZoom;
ReactSVGPanZoom.propTypes = {
  /**************************************************************************/

  /*  Viewer configuration                                                  */

  /**************************************************************************/

  /**
   *   width of the viewer displayed on screen
   */
  width: _propTypes.default.number.isRequired,

  /**
   * height of the viewer displayed on screen
   */
  height: _propTypes.default.number.isRequired,

  /**
   * value of the viewer (current camera view)
   */
  value: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.shape({
    version: _propTypes.default.oneOf([2]).isRequired,
    mode: _propTypes.default.oneOf([_constants.MODE_IDLE, _constants.MODE_PANNING, _constants.MODE_ZOOMING]).isRequired,
    focus: _propTypes.default.bool.isRequired,
    a: _propTypes.default.number.isRequired,
    b: _propTypes.default.number.isRequired,
    c: _propTypes.default.number.isRequired,
    d: _propTypes.default.number.isRequired,
    e: _propTypes.default.number.isRequired,
    f: _propTypes.default.number.isRequired,
    viewerWidth: _propTypes.default.number.isRequired,
    viewerHeight: _propTypes.default.number.isRequired,
    SVGMinX: _propTypes.default.number.isRequired,
    SVGMinY: _propTypes.default.number.isRequired,
    SVGWidth: _propTypes.default.number.isRequired,
    SVGHeight: _propTypes.default.number.isRequired,
    startX: _propTypes.default.number,
    startY: _propTypes.default.number,
    endX: _propTypes.default.number,
    endY: _propTypes.default.number,
    miniatureOpen: _propTypes.default.bool.isRequired
  })]).isRequired,

  /**
   * handler something changed
   */
  onChangeValue: _propTypes.default.func.isRequired,

  /**
   * current active tool (TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT)
   */
  tool: _propTypes.default.oneOf([_constants.TOOL_AUTO, _constants.TOOL_NONE, _constants.TOOL_PAN, _constants.TOOL_ZOOM_IN, _constants.TOOL_ZOOM_OUT]).isRequired,

  /**
   * handler tool changed
   */
  onChangeTool: _propTypes.default.func.isRequired,

  /**************************************************************************/

  /* Customize style                                                        */

  /**************************************************************************/

  /**
   * background of the viewer
   */
  background: _propTypes.default.string,

  /**
   * background of the svg
   */
  SVGBackground: _propTypes.default.string,

  /**
   * style of the svg
   */
  SVGStyle: _propTypes.default.object,

  /**
   * CSS style of the Viewer
   */
  style: _propTypes.default.object,

  /**
   * className of the Viewer
   */
  className: _propTypes.default.string,

  /**************************************************************************/

  /* Detect events                                                          */

  /**************************************************************************/

  /**
   * perform zoom operation on mouse scroll
   */
  detectWheel: _propTypes.default.bool,

  /**
   * perform PAN if the mouse is on viewer border
   */
  detectAutoPan: _propTypes.default.bool,

  /**
   * perform zoom operation on pinch gesture
   */
  detectPinchGesture: _propTypes.default.bool,

  /**
   * handler zoom level changed
   */
  onZoom: _propTypes.default.func,

  /**
   * handler pan action performed
   */
  onPan: _propTypes.default.func,

  /**
   * handler click
   */
  onClick: _propTypes.default.func,

  /**
   * handler double click
   */
  onDoubleClick: _propTypes.default.func,

  /**
   * handler mouseup
   */
  onMouseUp: _propTypes.default.func,

  /**
   * handler mousemove
   */
  onMouseMove: _propTypes.default.func,

  /**
   * handler mousedown
   */
  onMouseDown: _propTypes.default.func,

  /**************************************************************************/

  /* Some advanced configurations                                           */

  /**************************************************************************/

  /**
   * if disabled the user can move the image outside the viewer
   */
  preventPanOutside: _propTypes.default.bool,

  /**
   * how much scale in or out
   */
  scaleFactor: _propTypes.default.number,

  /**
   * how much scale in or out on mouse wheel (requires detectWheel enabled)
   */
  scaleFactorOnWheel: _propTypes.default.number,

  /**
   * maximum amount of scale a user can zoom in to
   */
  scaleFactorMax: _propTypes.default.number,

  /**
   * minimum amount of a scale a user can zoom out of
   */
  scaleFactorMin: _propTypes.default.number,

  /**
   * modifier keys //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   */
  modifierKeys: _propTypes.default.array,

  /**
   * Turn off zoom on double click
   */
  disableDoubleClickZoomWithToolAuto: _propTypes.default.bool,

  /**************************************************************************/

  /* Miniature configurations                                                 */

  /**************************************************************************/

  /**
   * override miniature component
   */
  customMiniature: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * miniature props
   */
  miniatureProps: _propTypes.default.shape({
    position: _propTypes.default.oneOf([_constants.POSITION_NONE, _constants.POSITION_RIGHT, _constants.POSITION_LEFT]),
    background: _propTypes.default.string,
    width: _propTypes.default.number,
    height: _propTypes.default.number
  }),

  /**************************************************************************/

  /* Toolbar configurations                                                 */

  /**************************************************************************/

  /**
   * override toolbar component
   */
  customToolbar: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * toolbar props
   */
  toolbarProps: _propTypes.default.shape({
    position: _propTypes.default.oneOf([_constants.POSITION_NONE, _constants.POSITION_TOP, _constants.POSITION_RIGHT, _constants.POSITION_BOTTOM, _constants.POSITION_LEFT]),
    SVGAlignX: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_LEFT, _constants.ALIGN_RIGHT]),
    SVGAlignY: _propTypes.default.oneOf([_constants.ALIGN_CENTER, _constants.ALIGN_TOP, _constants.ALIGN_BOTTOM]),
    activeToolColor: _propTypes.default.string
  }),

  /**************************************************************************/

  /* Children Check                                                         */

  /**************************************************************************/

  /**
   * accept only one node SVG
   */
  children: function children(props, propName, componentName) {
    // Only accept a single child, of the appropriate type
    //credits: http://www.mattzabriskie.com/blog/react-validating-children
    var prop = props[propName];
    var types = ["svg"];

    if (_react.default.Children.count(prop) !== 1 || types.indexOf(prop.type) === -1) {
      return new Error("`" + componentName + "` " + "should have a single child of the following types: " + " `" + types.join("`, `") + "`.");
    }

    if ((!prop.props.hasOwnProperty("width") || !prop.props.hasOwnProperty("height")) && !prop.props.hasOwnProperty("viewBox")) {
      return new Error("SVG should have props `width` and `height` or `viewBox`");
    }
  }
};
ReactSVGPanZoom.defaultProps = {
  style: {},
  background: "#616264",
  SVGBackground: "#fff",
  SVGStyle: {},
  detectWheel: true,
  detectAutoPan: true,
  detectPinchGesture: true,
  modifierKeys: ["Alt", "Shift", "Control"],
  preventPanOutside: true,
  scaleFactor: 1.1,
  scaleFactorOnWheel: 1.06,
  disableZoomWithToolAuto: false,
  onZoom: null,
  onPan: null,
  toolbarProps: {},
  miniatureProps: {}
};

/***/ }),

/***/ 180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "applyToPoint": () => (/* reexport */ applyToPoint),
  "applyToPoints": () => (/* reexport */ applyToPoints),
  "compose": () => (/* reexport */ compose),
  "decomposeTSR": () => (/* reexport */ decomposeTSR),
  "flipOrigin": () => (/* reexport */ flipOrigin),
  "flipX": () => (/* reexport */ flipX),
  "flipY": () => (/* reexport */ flipY),
  "fromDefinition": () => (/* reexport */ fromDefinition),
  "fromObject": () => (/* reexport */ fromObject),
  "fromString": () => (/* reexport */ fromString),
  "fromTransformAttribute": () => (/* reexport */ fromTransformAttribute),
  "fromTriangles": () => (/* reexport */ fromTriangles),
  "identity": () => (/* reexport */ identity),
  "inverse": () => (/* reexport */ inverse),
  "isAffineMatrix": () => (/* reexport */ isAffineMatrix),
  "rotate": () => (/* reexport */ rotate),
  "rotateDEG": () => (/* reexport */ rotateDEG),
  "scale": () => (/* reexport */ scale),
  "shear": () => (/* reexport */ shear),
  "skew": () => (/* reexport */ skew),
  "skewDEG": () => (/* reexport */ skewDEG),
  "smoothMatrix": () => (/* reexport */ smoothMatrix),
  "toCSS": () => (/* reexport */ toCSS),
  "toSVG": () => (/* reexport */ toSVG),
  "toString": () => (/* reexport */ toString_toString),
  "transform": () => (/* reexport */ transform),
  "translate": () => (/* reexport */ translate)
});

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/applyToPoint.js
/**
 * Calculate a point transformed with an affine matrix
 * @param matrix {Matrix} Affine Matrix
 * @param  point {Point} Point
 * @returns {Point} Point
 */
function applyToPoint (matrix, point) {
  return Array.isArray(point)
    ? [
        matrix.a * point[0] + matrix.c * point[1] + matrix.e,
        matrix.b * point[0] + matrix.d * point[1] + matrix.f
      ]
    : {
        x: matrix.a * point.x + matrix.c * point.y + matrix.e,
        y: matrix.b * point.x + matrix.d * point.y + matrix.f
      }
}

/**
 * Calculate an array of points transformed with an affine matrix
 * @param matrix {Matrix} Affine Matrix
 * @param points {Point[]} Array of point
 * @returns {Point[]} Array of point
 */
function applyToPoints (matrix, points) {
  return points.map(point => applyToPoint(matrix, point))
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromObject.js
/**
 * Extract an affine matrix from an object that contains a,b,c,d,e,f keys
 * Any value could be a float or a string that contains a float
 * @param object {Object} Object that contains a,b,c,d,e,f keys
 * @return {Matrix} Affine Matrix
 */
function fromObject (object) {
  return {
    a: parseFloat(object.a),
    b: parseFloat(object.b),
    c: parseFloat(object.c),
    d: parseFloat(object.d),
    e: parseFloat(object.e),
    f: parseFloat(object.f)
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromString.js
/**
 * @ignore
 * @type {RegExp}
 */
const matrixRegex = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i

/**
 * Parse a string formatted as matrix(a,b,c,d,e,f)
 * @param string {string} String with an affine matrix
 * @returns {Matrix} Affine Matrix
 *
 * @example
 * > fromString('matrix(1,2,3,4,5,6)')
 * {a: 1, b: 2, c: 3, d: 4, c: 5, e: 6}
 */
function fromString (string) {
  const parsed = string.match(matrixRegex)
  if (parsed === null || parsed.length < 7) throw new Error(`'${string}' is not a matrix`)
  return {
    a: parseFloat(parsed[1]),
    b: parseFloat(parsed[2]),
    c: parseFloat(parsed[3]),
    d: parseFloat(parsed[4]),
    e: parseFloat(parsed[5]),
    f: parseFloat(parsed[6])
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/identity.js
/**
 * Identity matrix
 * @returns {Matrix} Affine Matrix
 */
function identity () {
  return {
    a: 1,
    c: 0,
    e: 0,
    b: 0,
    d: 1,
    f: 0
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/inverse.js
/**
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix {Matrix} Affine Matrix
 * @returns {Matrix} Inverted Affine Matrix
 */
function inverse (matrix) {
  // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

  const { a, b, c, d, e, f } = matrix

  const denom = a * d - b * c

  return {
    a: d / denom,
    b: b / -denom,
    c: c / -denom,
    d: a / denom,
    e: (d * e - c * f) / -denom,
    f: (b * e - a * f) / denom
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/utils.js
function isUndefined (val) {
  return typeof val === 'undefined'
}

function isNumeric (n) {
  return typeof n === 'number' &&
    !Number.isNaN(n) &&
    Number.isFinite(n)
}

function isObject (obj) {
  return typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
}

function matchesShape (obj, keys) {
  return keys.every(key => key in obj)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/isAffineMatrix.js


/**
 * Check if the object contain an affine matrix
 * @param object {Object} Generic Plain Object
 * @return {boolean} True if is an object and contains an affine matrix
 */

function isAffineMatrix (object) {
  return isObject(object) &&
    'a' in object &&
    isNumeric(object.a) &&
    'b' in object &&
    isNumeric(object.b) &&
    'c' in object &&
    isNumeric(object.c) &&
    'd' in object &&
    isNumeric(object.d) &&
    'e' in object &&
    isNumeric(object.e) &&
    'f' in object &&
    isNumeric(object.f)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/translate.js
/**
 * Calculate a translate matrix
 * @param tx {number} Translation on axis x
 * @param [ty = 0] {number} Translation on axis y
 * @returns {Matrix} Affine Matrix
 */
function translate (tx, ty = 0) {
  return {
    a: 1,
    c: 0,
    e: tx,
    b: 0,
    d: 1,
    f: ty
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/transform.js
/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function transform (...matrices) {
  matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices

  const multiply = (m1, m2) => {
    return {
      a: m1.a * m2.a + m1.c * m2.b,
      c: m1.a * m2.c + m1.c * m2.d,
      e: m1.a * m2.e + m1.c * m2.f + m1.e,
      b: m1.b * m2.a + m1.d * m2.b,
      d: m1.b * m2.c + m1.d * m2.d,
      f: m1.b * m2.e + m1.d * m2.f + m1.f
    }
  }

  switch (matrices.length) {
    case 0:
      throw new Error('no matrices provided')

    case 1:
      return matrices[0]

    case 2:
      return multiply(matrices[0], matrices[1])

    default: {
      const [m1, m2, ...rest] = matrices
      const m = multiply(m1, m2)
      return transform(m, ...rest)
    }
  }
}

/**
 * Merge multiple matrices into one
 * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array
 * @returns {Matrix} Affine Matrix
 */
function compose (...matrices) {
  return transform(...matrices)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/rotate.js




const { cos, sin, PI } = Math
/**
 * Calculate a rotation matrix
 * @param angle {number} Angle in radians
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotate (angle, cx, cy) {
  const cosAngle = cos(angle)
  const sinAngle = sin(angle)
  const rotationMatrix = {
    a: cosAngle,
    c: -sinAngle,
    e: 0,
    b: sinAngle,
    d: cosAngle,
    f: 0
  }
  if (isUndefined(cx) || isUndefined(cy)) {
    return rotationMatrix
  }

  return transform([
    translate(cx, cy),
    rotationMatrix,
    translate(-cx, -cy)
  ])
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle {number} Angle in degree
 * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point
 * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point
 * @returns {Matrix} Affine Matrix
 */
function rotateDEG (angle, cx = undefined, cy = undefined) {
  return rotate(angle * PI / 180, cx, cy)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/scale.js




/**
 * Calculate a scaling matrix
 * @param sx {number} Scaling on axis x
 * @param [sy = sx] {number} Scaling on axis y (default sx)
 * @param [cx] {number} If (cx,cy) are supplied the scaling is about this point
 * @param [cy] {number} If (cx,cy) are supplied the scaling is about this point
 * @returns {Matrix} Affine Matrix
 */
function scale (sx, sy = undefined, cx = undefined, cy = undefined) {
  if (isUndefined(sy)) sy = sx

  const scaleMatrix = {
    a: sx,
    c: 0,
    e: 0,
    b: 0,
    d: sy,
    f: 0
  }

  if (isUndefined(cx) || isUndefined(cy)) {
    return scaleMatrix
  }

  return transform([
    translate(cx, cy),
    scaleMatrix,
    translate(-cx, -cy)
  ])
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/shear.js
/**
 * Calculate a shear matrix
 * @param shx {number} Shear on axis x
 * @param shy {number} Shear on axis y
 * @returns {Matrix} Affine Matrix
 */
function shear (shx, shy) {
  return {
    a: 1,
    c: shx,
    e: 0,
    b: shy,
    d: 1,
    f: 0
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/skew.js
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
const { tan } = Math

/**
 * Calculate a skew matrix
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skew (ax, ay) {
  return {
    a: 1,
    c: tan(ax),
    e: 0,
    b: tan(ay),
    d: 1,
    f: 0
  }
}

/**
 * Calculate a skew matrix using DEG angles
 * @param ax {number} Skew on axis x
 * @param ay {number} Skew on axis y
 * @returns {Matrix} Affine Matrix
 */
function skewDEG (ax, ay) {
  return skew(ax * Math.PI / 180, ay * Math.PI / 180)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/toString.js
/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toCSS (matrix) {
  return toString_toString(matrix)
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toSVG (matrix) {
  return toString_toString(matrix)
}

/**
 * Serialize an affine matrix to a string that can be used with CSS or SVG
 * @param matrix {Matrix} Affine Matrix
 * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)
 */
function toString_toString (matrix) {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/smoothMatrix.js
/**
 * Rounds all elements of the given matrix using the given precision
 * @param matrix {Matrix} An affine matrix to round
 * @param [precision] {number} A precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).
 * @returns {Matrix} The rounded Affine Matrix
 */
function smoothMatrix (matrix, precision = 10000000000) {
  return {
    a: Math.round(matrix.a * precision) / precision,
    b: Math.round(matrix.b * precision) / precision,
    c: Math.round(matrix.c * precision) / precision,
    d: Math.round(matrix.d * precision) / precision,
    e: Math.round(matrix.e * precision) / precision,
    f: Math.round(matrix.f * precision) / precision
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromTriangles.js




/**
 * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.
 * @param t1 {Point[]} Array of points containing the three points for the first triangle
 * @param t2 {Point[]} Array of points containing the three points for the second triangle
 * @returns {Matrix} Matrix which transforms t1 to t2
 * @throws Exception if the matrix becomes not invertible
 */
function fromTriangles (t1, t2) {
  // point p = first point of the triangle
  const px1 = t1[0].x != null ? t1[0].x : t1[0][0]
  const py1 = t1[0].y != null ? t1[0].y : t1[0][1]
  const px2 = t2[0].x != null ? t2[0].x : t2[0][0]
  const py2 = t2[0].y != null ? t2[0].y : t2[0][1]

  // point q = second point of the triangle
  const qx1 = t1[1].x != null ? t1[1].x : t1[1][0]
  const qy1 = t1[1].y != null ? t1[1].y : t1[1][1]
  const qx2 = t2[1].x != null ? t2[1].x : t2[1][0]
  const qy2 = t2[1].y != null ? t2[1].y : t2[1][1]

  // point r = third point of the triangle
  const rx1 = t1[2].x != null ? t1[2].x : t1[2][0]
  const ry1 = t1[2].y != null ? t1[2].y : t1[2][1]
  const rx2 = t2[2].x != null ? t2[2].x : t2[2][0]
  const ry2 = t2[2].y != null ? t2[2].y : t2[2][1]

  const r1 = {
    a: px1 - rx1,
    b: py1 - ry1,
    c: qx1 - rx1,
    d: qy1 - ry1,
    e: rx1,
    f: ry1
  }
  const r2 = {
    a: px2 - rx2,
    b: py2 - ry2,
    c: qx2 - rx2,
    d: qy2 - ry2,
    e: rx2,
    f: ry2
  }

  const inverseR1 = inverse(r1)
  const affineMatrix = transform([r2, inverseR1])

  // round the matrix elements to smooth the finite inversion
  return smoothMatrix(affineMatrix)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromDefinition.js







/**
 * Converts array of matrix descriptor to array of matrix
 * @param definitionOrArrayOfDefinition {Object[]} Array of object describing the matrix
 * @returns {Matrix[]} Array of matrix
 *
 * @example
 * > fromDefinition([
 *  { type: 'matrix', a:1, b:2, c:3, d:4, e:5, f:6 },
 *  { type: 'translate', tx: 10, ty: 20 },
 *  { type: 'scale', sx: 2, sy: 4 },
 *  { type: 'rotate', angle: 90, cx: 50, cy: 25 },
 *  { type: 'skewX', angle: 45 },
 *  { type: 'skewY',  angle: 45 },
 *  { type: 'shear', shx: 10, shy: 20}
 * ])
 *
 * [
 *  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },
 *  { a: 1, c: 0, e: 10, b: 0, d: 1, f: 20 },
 *  { a: 2, c: 0, e: 0, b: 0, d: 4, f: 0 },
 *  { a: 6.123, c: -1, e: 0, b: 1, d: 6.123, f: 0 },
 *  { a: 1, c: 0.99.., e: 0, b: 0, d: 1, f: 0 },
 *  { a: 1, c: 0, e: 0, b: 0.99, d: 1, f: 0 },
 *  { a: 1, c: 10, e: 0, b: 20, d: 1, f: 0 }
 * ]
 **/
function fromDefinition (definitionOrArrayOfDefinition) {
  return Array.isArray(definitionOrArrayOfDefinition)
    ? definitionOrArrayOfDefinition.map(mapper)
    : mapper(definitionOrArrayOfDefinition)

  function mapper (descriptor) {
    switch (descriptor.type) {
      case 'matrix':
        if ('a' in descriptor &&
          'b' in descriptor &&
          'c' in descriptor &&
          'd' in descriptor &&
          'e' in descriptor &&
          'f' in descriptor
        ) {
          return fromObject(descriptor)
        } else {
          throw new Error('MISSING_MANDATORY_PARAM')
        }

      case 'translate':
        if (!('tx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('ty' in descriptor) return translate(descriptor.tx, descriptor.ty)

        return translate(descriptor.tx)

      case 'scale':
        if (!('sx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('sy' in descriptor) return scale(descriptor.sx, descriptor.sy)

        return scale(descriptor.sx)

      case 'rotate':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')

        if ('cx' in descriptor && 'cy' in descriptor) {
          return rotateDEG(descriptor.angle, descriptor.cx, descriptor.cy)
        }
        return rotateDEG(descriptor.angle)

      case 'skewX':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return skewDEG(descriptor.angle, 0)

      case 'skewY':
        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return skewDEG(0, descriptor.angle)

      case 'shear':
        if (!('shx' in descriptor && 'shy' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM')
        return shear(descriptor.shx, descriptor.shy)

      default:
        throw new Error('UNSUPPORTED_DESCRIPTOR')
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js
// Generated by PEG.js v0.11.0-master.b7b87ea, https://pegjs.org/

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  // istanbul ignore next
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found, location) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    },

    not: function(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};

  var peg$startRuleFunctions = { transformList: peg$parsetransformList };
  var peg$startRuleFunction = peg$parsetransformList;

  var peg$c0 = "matrix";
  var peg$c1 = "(";
  var peg$c2 = ")";
  var peg$c3 = "translate";
  var peg$c4 = "scale";
  var peg$c5 = "rotate";
  var peg$c6 = "skewX";
  var peg$c7 = "skewY";
  var peg$c8 = ",";
  var peg$c9 = ".";

  var peg$r0 = /^[eE]/;
  var peg$r1 = /^[+\-]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[ \t\r\n]/;

  var peg$e0 = peg$literalExpectation("matrix", false);
  var peg$e1 = peg$literalExpectation("(", false);
  var peg$e2 = peg$literalExpectation(")", false);
  var peg$e3 = peg$literalExpectation("translate", false);
  var peg$e4 = peg$literalExpectation("scale", false);
  var peg$e5 = peg$literalExpectation("rotate", false);
  var peg$e6 = peg$literalExpectation("skewX", false);
  var peg$e7 = peg$literalExpectation("skewY", false);
  var peg$e8 = peg$literalExpectation(",", false);
  var peg$e9 = peg$otherExpectation("fractionalConstant");
  var peg$e10 = peg$classExpectation(["e", "E"], false, false);
  var peg$e11 = peg$classExpectation(["+", "-"], false, false);
  var peg$e12 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e13 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false);

  var peg$f0 = function(ts) { return ts; };
  var peg$f1 = function(t, ts) { return t.concat(ts) };
  var peg$f2 = function(a, b, c, d, e, f) {
        return [{type: 'matrix', a: a, b: b, c: c, d: d, e: e, f: f}];
      };
  var peg$f3 = function(tx, ty) {
        var t = {type: 'translate', tx: tx};
        if (ty) t.ty = ty;
        return [t];
      };
  var peg$f4 = function(sx, sy) {
        var s = {type:'scale', sx: sx};
        if (sy) s.sy = sy;
        return [s];
      };
  var peg$f5 = function(angle, c) {
        var r = {type:'rotate', angle: angle};
        if (c) {
          r.cx = c[0];
          r.cy = c[1];
        }
        return [r];
      };
  var peg$f6 = function(angle) {
        return [{type: 'skewX', angle: angle}];
      };
  var peg$f7 = function(angle) {
        return [{type: 'skewY', angle: angle}];
      };
  var peg$f8 = function(f) { return parseFloat(f.join("")); };
  var peg$f9 = function(i) { return parseInt(i.join("")); };
  var peg$f10 = function(n) { return n; };
  var peg$f11 = function(n1, n2) { return [n1, n2]; };
  var peg$f12 = function(ds) { return ds.join(""); };
  var peg$f13 = function(f, e) { return [f, e || null].join("")};
  var peg$f14 = function(d, e) { return [d, e].join("")};
  var peg$f15 = function(d1, d2) { return [d1 ? d1.join("") : null, ".", d2.join("")].join(""); };
  var peg$f16 = function(d) { return d.join(""); };
  var peg$f17 = function(s, d) { return ['e', s, d.join("")].join("") };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$expected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
  function peg$computeLocation(startPos, endPos) {
    var loc = {};

    if ( peg$VALIDFILENAME ) loc.filename = options.filename;

    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };

    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };

    return loc;
  }

  function peg$begin() {
    peg$expected.push({ pos: peg$currPos, variants: [] });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) { return; }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) { return; }

    if (invert) {
      variants = variants.map(function(e) {
        return e.type === "not" ? e.expected : { type: "not", expected: e };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found, location),
      expected,
      found,
      location
    );
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;

    return peg$buildStructuredError(
      expected.variants,
      failPos < input.length ? input.charAt(failPos) : null,
      failPos < input.length
        ? peg$computeLocation(failPos, failPos + 1)
        : peg$computeLocation(failPos, failPos)
    );
  }

  function peg$parsetransformList() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewsp();
    }
    s2 = peg$parsetransforms();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = [];
    s4 = peg$parsewsp();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parsewsp();
    }
    peg$savedPos = s0;
    s0 = peg$f0(s2);

    return s0;
  }

  function peg$parsetransforms() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsetransform();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsecommaWsp();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsecommaWsp();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetransforms();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parsetransform();
    }

    return s0;
  }

  function peg$parsetransform() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parsematrix();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetranslate();
      if (s0 === peg$FAILED) {
        s0 = peg$parsescale();
        if (s0 === peg$FAILED) {
          s0 = peg$parserotate();
          if (s0 === peg$FAILED) {
            s0 = peg$parseskewX();
            if (s0 === peg$FAILED) {
              s0 = peg$parseskewY();
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsematrix() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e0);
    if (input.substr(peg$currPos, 6) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWsp();
          if (s6 !== peg$FAILED) {
            s7 = peg$parsenumber();
            if (s7 !== peg$FAILED) {
              s8 = peg$parsecommaWsp();
              if (s8 !== peg$FAILED) {
                s9 = peg$parsenumber();
                if (s9 !== peg$FAILED) {
                  s10 = peg$parsecommaWsp();
                  if (s10 !== peg$FAILED) {
                    s11 = peg$parsenumber();
                    if (s11 !== peg$FAILED) {
                      s12 = peg$parsecommaWsp();
                      if (s12 !== peg$FAILED) {
                        s13 = peg$parsenumber();
                        if (s13 !== peg$FAILED) {
                          s14 = peg$parsecommaWsp();
                          if (s14 !== peg$FAILED) {
                            s15 = peg$parsenumber();
                            if (s15 !== peg$FAILED) {
                              s16 = [];
                              s17 = peg$parsewsp();
                              while (s17 !== peg$FAILED) {
                                s16.push(s17);
                                s17 = peg$parsewsp();
                              }
                              rule$expects(peg$e2);
                              if (input.charCodeAt(peg$currPos) === 41) {
                                s17 = peg$c2;
                                peg$currPos++;
                              } else {
                                s17 = peg$FAILED;
                              }
                              if (s17 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$f2(s5, s7, s9, s11, s13, s15);
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetranslate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e3);
    if (input.substr(peg$currPos, 9) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 9;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f3(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsescale() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e4);
    if (input.substr(peg$currPos, 5) === peg$c4) {
      s1 = peg$c4;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspNumber();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserotate() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e5);
    if (input.substr(peg$currPos, 6) === peg$c5) {
      s1 = peg$c5;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsecommaWspTwoNumbers();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = [];
          s8 = peg$parsewsp();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s8 = peg$c2;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f5(s5, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewX() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e6);
    if (input.substr(peg$currPos, 5) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseskewY() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e7);
    if (input.substr(peg$currPos, 5) === peg$c7) {
      s1 = peg$c7;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewsp();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewsp();
      }
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c1;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parsewsp();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parsewsp();
        }
        s5 = peg$parsenumber();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parsewsp();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parsewsp();
          }
          rule$expects(peg$e2);
          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c2;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f7(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsesign();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = peg$parsefloatingPointConstant();
    if (s3 !== peg$FAILED) {
      s2 = [s2, s3];
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f8(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parseintegerConstant();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f9(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsecommaWspNumber() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f10(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWspTwoNumbers() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsecommaWsp();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumber();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsecommaWsp();
        if (s3 !== peg$FAILED) {
          s4 = peg$parsenumber();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f11(s2, s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecommaWsp() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewsp();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewsp();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecomma();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = [];
      s4 = peg$parsewsp();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsewsp();
      }
      s1 = [s1, s2, s3];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecomma();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewsp();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewsp();
        }
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsecomma() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e8);
    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c8;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseintegerConstant() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefloatingPointConstant() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parsefractionalConstant();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseexponent();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f13(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexponent();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefractionalConstant() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e9);
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsedigitSequence();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (input.charCodeAt(peg$currPos) === 46) {
      s2 = peg$c9;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsedigitSequence();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f15(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsedigitSequence();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c9;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f16(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$silentFails--;

    return s0;
  }

  function peg$parseexponent() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e10);
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsesign();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parsedigitSequence();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f17(s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesign() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e11);
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigitSequence() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    s1 = peg$parsedigit();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsedigit();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigit() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e12);
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewsp() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e13);
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}



/* harmony default export */ const fromTransformAttribute_autogenerated = ({
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
});

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/fromTransformAttribute.js


/**
 * Parser for SVG Trasform Attribute http://www.w3.org/TR/SVG/coords.html#TransformAttribute <br/>
 * Warning: This should be considered BETA until it is released a stable version of pegjs.
 * @param transformString {string} Transform string as defined by w3 Consortium
 * @returns {MatrixDescriptor[]} Array of MatrixDescriptor
 *
 * @example
 * > fromTransformAttribute('translate(-10,-10) scale(2,2) translate(10,10)')
 * [
 *  { type: 'translate', tx: -10, ty: -10},
 *  { type: 'scale', sx: 2, sy: 2 },
 *  { type: 'translate', tx: 10, ty: 10}
 * ]
 *
 * > compose(fromDefinition(fromTransformAttribute('translate(-10, -10) scale(10, 10)')))
 * { a: 10, c: 0, e: -10, b: 0, d: 10, f: -10 }
 */
function fromTransformAttribute (transformString) {
  return peg$parse(transformString)
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/decompose.js


/**
 * Decompose a matrix into translation, scaling and rotation components, optionally
 * take horizontal and vertical flip in to consideration.
 * Note this function decomposes a matrix in rotation -> scaling -> translation order. I.e. for
 * certain translation T {tx, ty}, rotation R and scaling S { sx, sy }, it's only true for:
 *  decomposeTSR(compose(T, S, R)) === { translate: T, rotation: R, scale: S }
 * composing in a different order may yield a different decomposition result.
 * @param matrix {Matrix} Affine Matrix
 * @param  flipX {boolean} Whether the matrix contains vertical flip, i.e. mirrors on x-axis
 * @param  flipY {boolean} Whether the matrix contains horizontal flip, i.e. mirrors on y-axis
 * @returns {Transform} A transform object consisted by its translation, scaling
 * and rotation components.
 */
function decomposeTSR (matrix, flipX = false, flipY = false) {
  // Remove flip from the matrix first - flip could be incorrectly interpreted as
  // rotations (e.g. flipX + flipY = rotate by 180 degrees).
  // Note flipX is a vertical flip, and flipY is a horizontal flip.
  if (flipX) {
    if (flipY) {
      matrix = compose(matrix, scale(-1, -1))
    } else {
      matrix = compose(matrix, scale(1, -1))
    }
  } else if (flipY) {
    matrix = compose(matrix, scale(-1, 1))
  }

  const a = matrix.a; const b = matrix.b
  const c = matrix.c; const d = matrix.d
  let scaleX, scaleY, rotation

  if (a !== 0 || c !== 0) {
    const hypotAc = Math.hypot(a, c)
    scaleX = hypotAc
    scaleY = (a * d - b * c) / hypotAc
    const acos = Math.acos(a / hypotAc)
    rotation = c > 0 ? -acos : acos
  } else if (b !== 0 || d !== 0) {
    const hypotBd = Math.hypot(b, d)
    scaleX = (a * d - b * c) / hypotBd
    scaleY = hypotBd
    const acos = Math.acos(b / hypotBd)
    rotation = Math.PI / 2 + (d > 0 ? -acos : acos)
  } else {
    scaleX = 0
    scaleY = 0
    rotation = 0
  }

  // put the flip factors back
  if (flipY) {
    scaleX = -scaleX
  }

  if (flipX) {
    scaleY = -scaleY
  }

  return {
    translate: { tx: matrix.e, ty: matrix.f },
    scale: { sx: scaleX, sy: scaleY },
    rotation: { angle: rotation }
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/flip.js

/**
 * Tranformation matrix that mirrors on x-axis
 * @returns {Matrix} Affine Matrix
 */
function flipX () {
  return {
    a: 1,
    c: 0,
    e: 0,
    b: 0,
    d: -1,
    f: 0
  }
}

/**
 * Tranformation matrix that mirrors on y-axis
 * @returns {Matrix} Affine Matrix
 */
function flipY () {
  return {
    a: -1,
    c: 0,
    e: 0,
    b: 0,
    d: 1,
    f: 0
  }
}

/**
 * Tranformation matrix that mirrors on origin
 * @returns {Matrix} Affine Matrix
 */
function flipOrigin () {
  return {
    a: -1,
    c: 0,
    e: 0,
    b: 0,
    d: -1,
    f: 0
  }
}

;// CONCATENATED MODULE: ./node_modules/transformation-matrix/src/index.js





















/***/ }),

/***/ 619:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__619__;

/***/ }),

/***/ 787:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(579);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-svg-pan-zoom.js.map