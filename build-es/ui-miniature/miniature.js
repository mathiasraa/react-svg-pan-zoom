function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import PropTypes from 'prop-types';
import { POSITION_LEFT, POSITION_RIGHT } from '../constants';
import { applyToPoints, inverse } from 'transformation-matrix';
import MiniatureToggleButton from './miniature-toggle-button';
import MiniatureMask from './miniature-mask';
export default function Miniature(props) {
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

  var _applyToPoints = applyToPoints(inverse(value), [{
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
  }, _defineProperty(_style, position === POSITION_LEFT ? 'left' : 'right', "6px"), _defineProperty(_style, "background", background), _style);
  var centerTranslation = ratio >= 1 ? "translate(".concat((miniatureWidth - SVGWidth * zoomToFit) / 2 - SVGMinX * zoomToFit, ", ").concat(-SVGMinY * zoomToFit, ")") : "translate(".concat(-SVGMinX * zoomToFit, ", ").concat((miniatureHeight - SVGHeight * zoomToFit) / 2 - SVGMinY * zoomToFit, ")");
  return /*#__PURE__*/React.createElement("div", {
    role: "navigation",
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    width: miniatureWidth,
    height: miniatureHeight,
    style: {
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: centerTranslation
  }, /*#__PURE__*/React.createElement("g", {
    transform: "scale(".concat(zoomToFit, ", ").concat(zoomToFit, ")")
  }, /*#__PURE__*/React.createElement("rect", {
    fill: SVGBackground,
    x: SVGMinX,
    y: SVGMinY,
    width: SVGWidth,
    height: SVGHeight
  }), children, /*#__PURE__*/React.createElement(MiniatureMask, {
    SVGWidth: SVGWidth,
    SVGHeight: SVGHeight,
    SVGMinX: SVGMinX,
    SVGMinY: SVGMinY,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    zoomToFit: zoomToFit
  })))), /*#__PURE__*/React.createElement(MiniatureToggleButton, {
    value: value,
    onChangeValue: onChangeValue,
    position: position
  }));
}
Miniature.propTypes = {
  value: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  SVGBackground: PropTypes.string.isRequired,
  //customizations
  position: PropTypes.oneOf([POSITION_RIGHT, POSITION_LEFT]),
  background: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
Miniature.defaultProps = {
  position: POSITION_LEFT,
  background: "#616264",
  width: 100,
  height: 80
};