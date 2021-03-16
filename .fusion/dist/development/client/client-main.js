(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../generate-password/main.js":
/*!************************************!*\
  !*** ../generate-password/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/generate */ "../generate-password/src/generate.js");

/***/ }),

/***/ "../generate-password/src/generate.js":
/*!********************************************!*\
  !*** ../generate-password/src/generate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const smart_randomBytes = __webpack_require__(/*! randombytes */ "../generate-password/node_modules/randombytes/browser.js");

var self = module.exports;
const RANDOM_BATCH_SIZE = 256;
var randomIndex;
var randomBytes;

var getNextRandomValue = function () {
  if (randomIndex === undefined || randomIndex >= randomBytes.length) {
    randomIndex = 0;
    randomBytes = smart_randomBytes(RANDOM_BATCH_SIZE);
  }

  var result = randomBytes[randomIndex];
  randomIndex += 1;
  return result;
}; // Generates a random number


var randomNumber = function (max) {
  // gives a number between 0 (inclusive) and max (exclusive)
  var rand = getNextRandomValue();

  while (rand >= 256 - 256 % max) {
    rand = getNextRandomValue();
  }

  return rand % max;
}; // Possible combinations


var lowercase = "abcdefghijklmnopqrstuvwxyz",
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers = "0123456789",
    symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~',
    similarCharacters = /[ilLI|`oO0]/g,
    strictRules = [{
  name: "lowercase",
  rule: /[a-z]/
}, {
  name: "uppercase",
  rule: /[A-Z]/
}, {
  name: "numbers",
  rule: /[0-9]/
}, {
  name: "symbols",
  rule: /[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/
}];

var generate = function (options, pool) {
  var password = "",
      optionsLength = options.length,
      poolLength = pool.length;

  for (var i = 0; i < optionsLength; i++) {
    password += pool[randomNumber(poolLength)];
  }

  if (options.strict) {
    // Iterate over each rule, checking to see if the password works.
    var fitsRules = strictRules.every(function (rule) {
      // If the option is not checked, ignore it.
      if (options[rule.name] == false) return true; // Treat symbol differently if explicit string is provided

      if (rule.name === "symbols" && typeof options[rule.name] === "string") {
        // Create a regular expression from the provided symbols
        var re = new RegExp("[" + options[rule.name] + "]");
        return re.test(password);
      } // Run the regex on the password and return whether
      // or not it matches.


      return rule.rule.test(password);
    }); // If it doesn't fit the rules, generate a new one (recursion).

    if (!fitsRules) return generate(options, pool);
  }

  return password;
}; // Generate a random password.


self.generate = function (options) {
  // Set defaults.
  options = options || {};
  if (!Object.prototype.hasOwnProperty.call(options, "length")) options.length = 10;
  if (!Object.prototype.hasOwnProperty.call(options, "numbers")) options.numbers = false;
  if (!Object.prototype.hasOwnProperty.call(options, "symbols")) options.symbols = false;
  if (!Object.prototype.hasOwnProperty.call(options, "exclude")) options.exclude = "";
  if (!Object.prototype.hasOwnProperty.call(options, "uppercase")) options.uppercase = true;
  if (!Object.prototype.hasOwnProperty.call(options, "lowercase")) options.lowercase = true;
  if (!Object.prototype.hasOwnProperty.call(options, "excludeSimilarCharacters")) options.excludeSimilarCharacters = false;
  if (!Object.prototype.hasOwnProperty.call(options, "strict")) options.strict = false;

  if (options.strict) {
    var minStrictLength = 1 + (options.numbers ? 1 : 0) + (options.symbols ? 1 : 0) + (options.uppercase ? 1 : 0);

    if (minStrictLength > options.length) {
      throw new TypeError("Length must correlate with strict guidelines");
    }
  } // Generate character pool


  var pool = ""; // lowercase

  if (options.lowercase) {
    pool += lowercase;
  } // uppercase


  if (options.uppercase) {
    pool += uppercase;
  } // numbers


  if (options.numbers) {
    pool += numbers;
  } // symbols


  if (options.symbols) {
    if (typeof options.symbols === "string") {
      pool += options.symbols;
    } else {
      pool += symbols;
    }
  } // Throw error if pool is empty.


  if (!pool) {
    throw new TypeError("At least one rule for pools must be true");
  } // similar characters


  if (options.excludeSimilarCharacters) {
    pool = pool.replace(similarCharacters, "");
  } // excludes characters from the pool


  var i = options.exclude.length;

  while (i--) {
    pool = pool.replace(options.exclude[i], "");
  }

  var password = generate(options, pool);
  return password;
}; // Generates multiple passwords at once with the same options.


self.generateMultiple = function (amount, options) {
  var passwords = [];

  for (var i = 0; i < amount; i++) {
    passwords[i] = self.generate(options);
  }

  return passwords;
};

/***/ }),

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
    const newPassword = typeof p === "string" ? p : Object(generate_password__WEBPACK_IMPORTED_MODULE_6__["generate"])({
      length,
      numbers,
      uppercase,
      symbols
    });
    const obj = zxcvbn__WEBPACK_IMPORTED_MODULE_7___default()(newPassword);
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: () => "Password",
    caption: () => "Choose a strong password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_progress_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: strength,
    successValue: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), textStrength[strength]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_form_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: uppercase,
    onChange: () => setUppercase(!uppercase),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "A-Z"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: numbers,
    onChange: () => setNumbers(!numbers),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "0-9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: symbols,
    onChange: () => setSymbols(!symbols),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "%@#"))));
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.js */ "./src/root.js");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_root_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_password_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/password-entry */ "./src/components/password-entry/index.js");
var _jsxFileName = "/home/rook/repos/password-manager/src/pages/home.js";




const Home = () => {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([10]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Password Manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_password_entry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
var _jsxFileName = "/home/rook/repos/password-manager/src/pages/pageNotFound.js";



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/home/rook/repos/password-manager/src/root.js";




const root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/rook/repos/password-manager/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /home/rook/repos/password-manager/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /home/rook/repos/password-manager/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map