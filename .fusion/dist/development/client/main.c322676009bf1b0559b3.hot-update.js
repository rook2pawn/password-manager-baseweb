webpackHotUpdate("main",{

/***/ "./src/components/password-entry/index.js":
/*!************************************************!*\
  !*** ./src/components/password-entry/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_form_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/form-control */ "./node_modules/baseui/esm/form-control/form-control.js");
/* harmony import */ var baseui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/input */ "./node_modules/baseui/esm/input/input.js");
/* harmony import */ var baseui_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/slider */ "./node_modules/baseui/esm/slider/slider.js");
/* harmony import */ var baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/checkbox */ "./node_modules/baseui/esm/checkbox/checkbox.js");
/* harmony import */ var baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/progress-bar */ "./node_modules/baseui/esm/progress-bar/progressbar.js");
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! generate-password */ "../generate-password/main.js");
/* harmony import */ var generate_password__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(generate_password__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zxcvbn */ "./node_modules/zxcvbn/lib/main.js");
/* harmony import */ var zxcvbn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/rook/repos/password-manager/src/components/password-entry/index.js";








/* harmony default export */ __webpack_exports__["default"] = (() => {
  const [length, setLength] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(32);
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
    console.log("New password:", newPassword, " strenght:", obj);
    setStrength(obj.score);
    setCopied(false);
    setPassword(newPassword);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setNewPassword();
  }, [length, uppercase, symbols, numbers, strength]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: () => "Password",
    caption: () => "Choose a strong password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: password,
    onChange: e => setPassword(e.target.value),
    type: "password",
    placeholder: "Enter password",
    clearable: true,
    clearOnEscape: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: strength,
    successValue: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), ";", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: 4,
    max: 64,
    value: [length],
    onChange: ({
      value
    }) => setLength(value[0]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: uppercase,
    onChange: () => setUppercase(!uppercase),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "A-Z"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: numbers,
    onChange: () => setNumbers(!numbers),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "0-9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: symbols,
    onChange: () => setSymbols(!symbols),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "%@#"))));
});

/***/ })

})
//# sourceMappingURL=main.c322676009bf1b0559b3.hot-update.js.map