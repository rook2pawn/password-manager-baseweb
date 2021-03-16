webpackHotUpdate("vendor",{

/***/ "./node_modules/baseui/esm/checkbox/checkbox.js":
/*!******************************************************!*\
  !*** ./node_modules/baseui/esm/checkbox/checkbox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/overrides.js */ "./node_modules/baseui/esm/helpers/overrides.js");
/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled-components.js */ "./node_modules/baseui/esm/checkbox/styled-components.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/checkbox/constants.js");
/* harmony import */ var _utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/focusVisible.js */ "./node_modules/baseui/esm/utils/focusVisible.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/








var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var StatelessCheckbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatelessCheckbox, _React$Component);

  var _super = _createSuper(StatelessCheckbox);

  function StatelessCheckbox() {
    var _this;

    _classCallCheck(this, StatelessCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: _this.props.autoFocus || false,
      isFocusVisible: false,
      isHovered: false,
      isActive: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (e) {
      _this.setState({
        isHovered: true
      });

      _this.props.onMouseEnter(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      _this.setState({
        isHovered: false,
        isActive: false
      });

      _this.props.onMouseLeave(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      _this.setState({
        isActive: true
      });

      _this.props.onMouseDown(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      _this.setState({
        isActive: false
      });

      _this.props.onMouseUp(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus(e);

      if (Object(_utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_4__["isFocusVisible"])(e)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur(e);

      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isToggle", function () {
      return _this.props.checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_3__["STYLE_TYPE"].toggle || _this.props.checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_3__["STYLE_TYPE"].toggle_round;
    });

    return _this;
  }

  _createClass(StatelessCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          inputRef = _this$props.inputRef;

      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      } // TODO(v11)


      if (true) {
        if (this.props.checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_3__["STYLE_TYPE"].toggle) {
          console.warn("baseui:Checkbox The STYLE_TYPE.toggle value on the 'checkmarkType' prop does not conform to the current base design specification. " + 'Please update your code to STYLE_TYPE.toggle_round. This will be updated automatically in a future major version.');
        }

        if (this.props.isError) {
          console.warn('baseui:Checkbox Property "isError" will be removed in the next major version. Use "error" property instead.');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var checkmarkType = this.props.checkmarkType;
      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          onChange = _this$props2.onChange,
          _this$props2$labelPla = _this$props2.labelPlacement,
          labelPlacement = _this$props2$labelPla === void 0 ? this.isToggle() ? 'left' : 'right' : _this$props2$labelPla,
          inputRef = _this$props2.inputRef,
          isIndeterminate = _this$props2.isIndeterminate,
          isError = _this$props2.isError,
          error = _this$props2.error,
          disabled = _this$props2.disabled,
          value = _this$props2.value,
          name = _this$props2.name,
          type = _this$props2.type,
          checked = _this$props2.checked,
          children = _this$props2.children,
          required = _this$props2.required,
          title = _this$props2.title,
          ariaLabel = _this$props2.ariaLabel;
      var RootOverride = overrides.Root,
          CheckmarkOverride = overrides.Checkmark,
          LabelOverride = overrides.Label,
          InputOverride = overrides.Input,
          ToggleOverride = overrides.Toggle,
          ToggleInnerOverride = overrides.ToggleInner,
          ToggleTrackOverride = overrides.ToggleTrack;
      var Root = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(RootOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Root"];
      var Checkmark = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(CheckmarkOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Checkmark"];
      var Label = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(LabelOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Label"];
      var Input = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(InputOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Input"];
      var Toggle = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(ToggleOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Toggle"];
      var ToggleInner = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(ToggleInnerOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["ToggleInner"];
      var ToggleTrack = Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverride"])(ToggleTrackOverride) || _styled_components_js__WEBPACK_IMPORTED_MODULE_2__["ToggleTrack"];
      var inputEvents = {
        onChange: onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      var mouseEvents = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      };
      var sharedProps = {
        $isFocused: this.state.isFocused,
        $isFocusVisible: this.state.isFocusVisible,
        $isHovered: this.state.isHovered,
        $isActive: this.state.isActive,
        $isError: isError,
        $error: error,
        $checked: checked,
        $isIndeterminate: isIndeterminate,
        $required: required,
        $disabled: disabled,
        $value: value,
        $checkmarkType: checkmarkType
      }; // TODO(v11) - add check for children (#2172)

      var labelComp =
      /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Label, _extends({
        $labelPlacement: labelPlacement
      }, sharedProps, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(LabelOverride)), children);
      return (
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, _extends({
          "data-baseweb": "checkbox",
          title: title || null,
          $labelPlacement: labelPlacement
        }, sharedProps, mouseEvents, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(RootOverride)), (labelPlacement === 'top' || labelPlacement === 'left') && labelComp, this.isToggle() ?
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ToggleTrack, _extends({
          role: "checkbox",
          "aria-checked": isIndeterminate ? 'mixed' : checked,
          "aria-invalid": error || isError || null
        }, sharedProps, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(ToggleTrackOverride)),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Toggle, _extends({}, sharedProps, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(ToggleOverride)),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ToggleInner, _extends({}, sharedProps, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(ToggleInnerOverride))))) :
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Checkmark, _extends({
          role: "checkbox",
          checked: checked,
          "aria-checked": isIndeterminate ? 'mixed' : checked,
          "aria-invalid": error || isError || null
        }, sharedProps, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(CheckmarkOverride))),
        /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Input, _extends({
          value: value,
          name: name,
          checked: checked,
          required: required,
          "aria-label": ariaLabel,
          "aria-checked": isIndeterminate ? 'mixed' : checked,
          "aria-describedby": this.props['aria-describedby'],
          "aria-errormessage": this.props['aria-errormessage'],
          "aria-invalid": error || isError || null,
          "aria-required": required || null,
          disabled: disabled,
          type: type,
          ref: inputRef // Prevent a second click event from firing when label is clicked.
          // See https://github.com/uber/baseweb/issues/3847
          ,
          onClick: stopPropagation
        }, sharedProps, inputEvents, Object(_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrideProps"])(InputOverride))), (labelPlacement === 'bottom' || labelPlacement === 'right') && labelComp)
      );
    }
  }]);

  return StatelessCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(StatelessCheckbox, "defaultProps", {
  overrides: {},
  checked: false,
  disabled: false,
  autoFocus: false,
  isIndeterminate: false,
  inputRef:
  /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0__["createRef"](),
  isError: false,
  error: false,
  type: 'checkbox',
  checkmarkType: _constants_js__WEBPACK_IMPORTED_MODULE_3__["STYLE_TYPE"].default,
  onChange: function onChange() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseDown: function onMouseDown() {},
  onMouseUp: function onMouseUp() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
});

/* harmony default export */ __webpack_exports__["default"] = (StatelessCheckbox);

/***/ }),

/***/ "./node_modules/baseui/esm/checkbox/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/baseui/esm/checkbox/constants.js ***!
  \*******************************************************/
/*! exports provided: STATE_TYPE, STYLE_TYPE, LABEL_PLACEMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_TYPE", function() { return STATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_TYPE", function() { return STYLE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_PLACEMENT", function() { return LABEL_PLACEMENT; });
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */
var STATE_TYPE = {
  change: 'CHANGE'
};
var STYLE_TYPE = Object.freeze({
  default: 'default',
  toggle: 'toggle',
  toggle_round: 'toggle_round'
});
var LABEL_PLACEMENT = Object.freeze({
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left'
});
/* eslint-enable import/prefer-default-export */

/***/ }),

/***/ "./node_modules/baseui/esm/checkbox/styled-components.js":
/*!***************************************************************!*\
  !*** ./node_modules/baseui/esm/checkbox/styled-components.js ***!
  \***************************************************************/
/*! exports provided: Root, Checkmark, Label, Input, Toggle, ToggleInner, ToggleTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkmark", function() { return Checkmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleInner", function() { return ToggleInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTrack", function() { return ToggleTrack; });
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.js */ "./node_modules/baseui/esm/styles/styled.js");
/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.js */ "./node_modules/baseui/esm/styles/util.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./node_modules/baseui/esm/checkbox/constants.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/





function getBorderColor(props) {
  var $disabled = props.$disabled,
      $checked = props.$checked,
      $isError = props.$isError,
      $error = props.$error,
      $isIndeterminate = props.$isIndeterminate,
      $theme = props.$theme,
      $isFocusVisible = props.$isFocusVisible;
  var colors = $theme.colors;

  if ($disabled) {
    return colors.tickFillDisabled;
  } else if ($checked || $isIndeterminate) {
    return 'transparent';
  } else if ($error || $isError) {
    return colors.borderError;
  } else if ($isFocusVisible) {
    return colors.borderSelected;
  } else {
    return colors.tickBorder;
  }
}

function getLabelPadding(props) {
  var _props$$labelPlacemen = props.$labelPlacement,
      $labelPlacement = _props$$labelPlacemen === void 0 ? '' : _props$$labelPlacemen,
      $theme = props.$theme;
  var sizing = $theme.sizing;
  var scale300 = sizing.scale300;
  var paddingDirection;

  switch ($labelPlacement) {
    case 'top':
      paddingDirection = 'Bottom';
      break;

    case 'bottom':
      paddingDirection = 'Top';
      break;

    case 'left':
      paddingDirection = 'Right';
      break;

    default:
    case 'right':
      paddingDirection = 'Left';
      break;
  }

  if ($theme.direction === 'rtl' && paddingDirection === 'Left') {
    paddingDirection = 'Right';
  } else if ($theme.direction === 'rtl' && paddingDirection === 'Right') {
    paddingDirection = 'Left';
  }

  return _defineProperty({}, "padding".concat(paddingDirection), scale300);
}

function getBackgroundColor(props) {
  var $disabled = props.$disabled,
      $checked = props.$checked,
      $isIndeterminate = props.$isIndeterminate,
      $isError = props.$isError,
      $error = props.$error,
      $isHovered = props.$isHovered,
      $isActive = props.$isActive,
      $theme = props.$theme,
      $checkmarkType = props.$checkmarkType;
  var isToggle = $checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle;
  var colors = $theme.colors;

  if ($disabled) {
    if (isToggle) {
      return colors.sliderTrackFillDisabled;
    }

    if ($checked || $isIndeterminate) {
      return colors.tickFillDisabled;
    } else {
      return colors.tickFill;
    }
  } else if (($error || $isError) && ($isIndeterminate || $checked)) {
    if ($isActive) {
      return colors.tickFillErrorSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorSelectedHover;
    } else {
      return colors.tickFillErrorSelected;
    }
  } else if ($error || $isError) {
    if ($isActive) {
      return colors.tickFillErrorHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorHover;
    } else {
      return colors.tickFillError;
    }
  } else if ($isIndeterminate || $checked) {
    if ($isActive) {
      return colors.tickFillSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillSelectedHover;
    } else {
      return colors.tickFillSelected;
    }
  } else {
    if ($isActive) {
      return isToggle ? colors.sliderTrackFillActive : colors.tickFillActive;
    } else if ($isHovered) {
      return isToggle ? colors.sliderTrackFillHover : colors.tickFillHover;
    } else {
      return isToggle ? colors.sliderTrackFill : colors.tickFill;
    }
  }
}

function getLabelColor(props) {
  var $disabled = props.$disabled,
      $theme = props.$theme;
  var colors = $theme.colors;
  return $disabled ? colors.contentSecondary : colors.contentPrimary;
}

var Root = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('label', function (props) {
  var $disabled = props.$disabled,
      $labelPlacement = props.$labelPlacement;
  return {
    flexDirection: $labelPlacement === 'top' || $labelPlacement === 'bottom' ? 'column' : 'row',
    display: 'flex',
    alignItems: $labelPlacement === 'top' || $labelPlacement === 'bottom' ? 'center' : 'flex-start',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none'
  };
});
Root.displayName = "Root";
var Checkmark = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('span', function (props) {
  var $checked = props.$checked,
      $disabled = props.$disabled,
      $isError = props.$isError,
      $error = props.$error,
      $isIndeterminate = props.$isIndeterminate,
      $theme = props.$theme,
      $isFocusVisible = props.$isFocusVisible;
  var sizing = $theme.sizing,
      animation = $theme.animation;
  var tickColor = $disabled ? $theme.colors.tickMarkFillDisabled : $isError || $error ? $theme.colors.tickMarkFillError : $theme.colors.tickMarkFill;
  var indeterminate = encodeURIComponent("\n    <svg width=\"14\" height=\"4\" viewBox=\"0 0 14 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M14 0.5H0V3.5H14V0.5Z\" fill=\"".concat(tickColor, "\"/>\n    </svg>\n  "));
  var check = encodeURIComponent("\n    <svg width=\"17\" height=\"13\" viewBox=\"0 0 17 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z\" fill=\"".concat(tickColor, "\"/>\n    </svg>\n  "));
  var borderRadius = $theme.borders.inputBorderRadius;
  var borderColor = getBorderColor(props);
  return {
    flex: '0 0 auto',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    transitionProperty: 'background-image, border-color, background-color',
    width: sizing.scale700,
    height: sizing.scale700,
    left: '4px',
    top: '4px',
    boxSizing: 'border-box',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: '3px',
    borderRightWidth: '3px',
    borderTopWidth: '3px',
    borderBottomWidth: '3px',
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    outline: $isFocusVisible && $checked ? "3px solid ".concat($theme.colors.accent) : 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundImage: $isIndeterminate ? "url('data:image/svg+xml,".concat(indeterminate, "');") : $checked ? "url('data:image/svg+xml,".concat(check, "');") : null,
    backgroundColor: getBackgroundColor(props),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    marginTop: $theme.sizing.scale0,
    marginBottom: $theme.sizing.scale0,
    marginLeft: $theme.sizing.scale0,
    marginRight: $theme.sizing.scale0
  };
});
Checkmark.displayName = "Checkmark";
var Label = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  var $theme = props.$theme,
      $checkmarkType = props.$checkmarkType;
  var typography = $theme.typography;
  return _objectSpread(_objectSpread(_objectSpread({
    flex: $checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle ? 'auto' : null,
    verticalAlign: 'middle'
  }, getLabelPadding(props)), {}, {
    color: getLabelColor(props)
  }, typography.LabelMedium), {}, {
    lineHeight: '24px'
  });
}); // tricky style for focus event cause display: none doesn't work

Label.displayName = "Label";
var Input = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('input', {
  opacity: 0,
  width: 0,
  height: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  position: 'absolute'
});
Input.displayName = "Input";
var Toggle = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle) {
    var borderRadius = props.$theme.borders.useRoundedCorners ? props.$theme.borders.radius200 : null;
    return _objectSpread(_objectSpread({}, Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_1__["expandBorderStyles"])(props.$theme.borders.border300)), {}, {
      alignItems: 'center',
      backgroundColor: props.$theme.colors.mono100,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat(props.$theme.colors.accent) : props.$theme.lighting.shadow400,
      outline: 'none',
      display: 'flex',
      justifyContent: 'center',
      height: props.$theme.sizing.scale800,
      width: props.$theme.sizing.scale800
    });
  }

  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle_round) {
    var backgroundColor = props.$theme.colors.toggleFill;

    if (props.$disabled) {
      backgroundColor = props.$theme.colors.toggleFillDisabled;
    } else if (props.$checked && (props.$error || props.$isError)) {
      backgroundColor = props.$theme.colors.borderError;
    } else if (props.$checked) {
      backgroundColor = props.$theme.colors.toggleFillChecked;
    }

    return {
      backgroundColor: backgroundColor,
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat(props.$theme.colors.accent) : props.$isHovered && !props.$disabled ? props.$theme.lighting.shadow500 : props.$theme.lighting.shadow400,
      outline: 'none',
      height: props.$theme.sizing.scale700,
      width: props.$theme.sizing.scale700,
      transform: props.$checked ? "translateX(".concat(props.$theme.direction === 'rtl' ? '-100%' : '100%', ")") : null,
      transition: "transform ".concat(props.$theme.animation.timing200)
    };
  }

  return {};
});
Toggle.displayName = "Toggle";
var ToggleInner = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle) {
    // eslint-disable-next-line no-inner-declarations
    var backgroundColor = function backgroundColor() {
      if (props.$disabled) {
        return props.$theme.colors.sliderHandleInnerFillDisabled;
      }

      if (props.$isActive && props.$checked) {
        return props.$theme.colors.sliderHandleInnerFillSelectedActive;
      }

      if (props.$isHovered && props.$checked) {
        return props.$theme.colors.sliderHandleInnerFillSelectedHover;
      }

      return props.$theme.colors.sliderHandleInnerFill;
    };

    return {
      height: props.$theme.sizing.scale300,
      width: props.$theme.sizing.scale0,
      borderTopLeftRadius: props.$theme.borders.radius100,
      borderTopRightRadius: props.$theme.borders.radius100,
      borderBottomRightRadius: props.$theme.borders.radius100,
      borderBottomLeftRadius: props.$theme.borders.radius100,
      backgroundColor: backgroundColor()
    };
  }

  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle_round) {
    return {};
  }

  return {};
});
ToggleInner.displayName = "ToggleInner";
var ToggleTrack = Object(_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', function (props) {
  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle) {
    var borderRadius = props.$theme.borders.useRoundedCorners ? props.$theme.borders.radius200 : null;
    return {
      alignItems: 'center',
      backgroundColor: getBackgroundColor(props),
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      display: 'flex',
      height: props.$theme.sizing.scale600,
      justifyContent: props.$checked ? 'flex-end' : 'flex-start',
      marginTop: props.$theme.sizing.scale100,
      marginBottom: props.$theme.sizing.scale100,
      marginLeft: props.$theme.sizing.scale100,
      marginRight: props.$theme.sizing.scale100,
      width: props.$theme.sizing.scale1000
    };
  }

  if (props.$checkmarkType === _constants_js__WEBPACK_IMPORTED_MODULE_2__["STYLE_TYPE"].toggle_round) {
    var backgroundColor = props.$theme.colors.toggleTrackFill;

    if (props.$disabled) {
      backgroundColor = props.$theme.colors.toggleTrackFillDisabled;
    } else if ((props.$error || props.$isError) && props.$checked) {
      backgroundColor = props.$theme.colors.tickFillError;
    }

    return {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: '7px',
      borderTopRightRadius: '7px',
      borderBottomRightRadius: '7px',
      borderBottomLeftRadius: '7px',
      display: 'flex',
      height: props.$theme.sizing.scale550,
      marginTop: props.$theme.sizing.scale200,
      marginBottom: props.$theme.sizing.scale100,
      marginLeft: props.$theme.sizing.scale200,
      marginRight: props.$theme.sizing.scale100,
      width: props.$theme.sizing.scale1000
    };
  }

  return {};
});
ToggleTrack.displayName = "ToggleTrack";

/***/ })

})
//# sourceMappingURL=vendor.7230e35c993fdb242ccc.hot-update.js.map