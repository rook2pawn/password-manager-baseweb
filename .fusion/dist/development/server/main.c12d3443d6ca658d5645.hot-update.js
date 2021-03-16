
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
exports.id = "main";
exports.modules = {

/***/ "./src/components/password-entry/index.js":
/*!************************************************!*\
  !*** ./src/components/password-entry/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/form-control */ "baseui/form-control");
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/input */ "baseui/input");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/slider */ "baseui/slider");
/* harmony import */ var baseui_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/checkbox */ "baseui/checkbox");
/* harmony import */ var baseui_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/progress-bar */ "baseui/progress-bar");
/* harmony import */ var baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var baseui_progress_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baseui/progress-steps */ "baseui/progress-steps");
/* harmony import */ var baseui_progress_steps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(baseui_progress_steps__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! generate-password */ "generate-password");
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(generate_password__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zxcvbn */ "zxcvbn");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/rook/repos/password-manager/src/components/password-entry/index.js";









const MAXLENGTH = 64;
const MINLENGTH = 4;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [length, setLength] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(~~(MAXLENGTH / 2));
  const [uppercase, setUppercase] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [numbers, setNumbers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [symbols, setSymbols] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [copied, setCopied] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [strength, setStrength] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const setNewPassword = p => {
    const newPassword = typeof p === "string" ? p : Object(generate_password__WEBPACK_IMPORTED_MODULE_7__["generate"])({
      length,
      numbers,
      uppercase,
      symbols
    });
    const obj = zxcvbn__WEBPACK_IMPORTED_MODULE_8___default()(newPassword);
    setStrength(obj.score);
    setCopied(false);
    setPassword(newPassword);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers]);
  const textStrength = {
    0: "BAD",
    1: "WEAK",
    2: "BETTER",
    3: "STRONG",
    4: "STRONGEST"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: () => "Password",
    caption: () => "Choose a strong password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: e => {
      setNewPassword(e.target.value);
    },
    type: "password",
    clearable: true,
    clearOnEscape: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__["ProgressBar"], {
    value: strength,
    successValue: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), textStrength[strenght]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_slider__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    min: MINLENGTH,
    max: MAXLENGTH,
    value: [length],
    onChange: ({
      value
    }) => setLength(value[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: "Characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: uppercase,
    onChange: () => setUppercase(!uppercase),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "A-Z"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: numbers,
    onChange: () => setNumbers(!numbers),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "0-9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: symbols,
    onChange: () => setSymbols(!symbols),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "%@#"))));
});

/***/ })

};
//# sourceMappingURL=main.c12d3443d6ca658d5645.hot-update.js.map