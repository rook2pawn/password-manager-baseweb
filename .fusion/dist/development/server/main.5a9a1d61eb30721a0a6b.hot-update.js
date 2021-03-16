
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
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! generate-password */ "generate-password");
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(generate_password__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zxcvbn */ "zxcvbn");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_7__);
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
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const setNewPassword = p => {
    const newPassword = p ? p : Object(generate_password__WEBPACK_IMPORTED_MODULE_6__["generate"])({
      length,
      numbers,
      uppercase,
      symbols
    });
    const obj = zxcvbn__WEBPACK_IMPORTED_MODULE_7___default()(newPassword);
    setStrength(obj.guesses_log10);
    setCopied(false);
    setPassword(newPassword);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers, strength]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: () => "Password",
    caption: () => "Choose a strong password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: password,
    onChange: e => setPassword(e.target.value),
    type: "password",
    placeholder: "Enter password",
    clearable: true,
    clearOnEscape: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__["ProgressBar"], {
    value: strength,
    successValue: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), ";", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_slider__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    min: MINLENGTH,
    max: MAXLENGTH,
    value: [length],
    onChange: ({
      value
    }) => setLength(value[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    label: "Characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: uppercase,
    onChange: () => setUppercase(!uppercase),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "A-Z"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: numbers,
    onChange: () => setNumbers(!numbers),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "0-9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: symbols,
    onChange: () => setSymbols(!symbols),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "%@#"))));
});

/***/ })

};
//# sourceMappingURL=main.5a9a1d61eb30721a0a6b.hot-update.js.map