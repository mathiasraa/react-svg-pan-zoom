"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _common = require("../features/common");

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

exports.default = ViewerEvent;