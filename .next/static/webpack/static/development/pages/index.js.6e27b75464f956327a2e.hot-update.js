webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");


var _this = undefined,
    _jsxFileName = "/Users/elishabello/Desktop/Programming/React/nextjs_react_hooks/src/SignMeUp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var SignMeUp = function SignMeUp(_ref) {
  var _jsx;

  var signupCallback = _ref.signupCallback;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("SignMeUp:useEffect called");
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      emailValid = _useState2[0],
      setEmailValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sendProcessing = _useState3[0],
      setSendProcessing = _useState3[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_4__["ConfigContext"]);

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  var notify = function notify() {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].info("You will be notified of upcoming events ".concat(email));
  };

  function sendEmailToBackend() {
    setSendProcessing(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        setSendProcessing(false);
        setEmail("");
        resolve();
      }, 1000);
    }).then(function () {
      notify();
      signupCallback(email);
      setEmail("");
    });
  }

  var buttonText = sendProcessing ? "processing..." : "Get Updates"; //console.log("src/SignMeUp called");

  return context.showsSignMeUp === false ? null : __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("input", (_jsx = {
    value: email,
    onChange: function onChange(e) {
      setEmailValid(validateEmail(e.target.value));
      return setEmail(e.target.value);
    },
    placeholder: "Enter Email",
    type: "email",
    name: "email",
    required: true
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 21
  }), _jsx)), "\xA0", __jsx("button", {
    disabled: !emailValid || sendProcessing,
    className: "btn",
    onClick: sendEmailToBackend,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, buttonText))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ })

})
//# sourceMappingURL=index.js.6e27b75464f956327a2e.hot-update.js.map