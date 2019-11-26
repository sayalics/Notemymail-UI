webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Layout_DriveLayout_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout/DriveLayout/index */ "./src/Layout/DriveLayout/index.js");
/* harmony import */ var _Layout_EmailLayout_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout/EmailLayout/index */ "./src/Layout/EmailLayout/index.js");
var _jsxFileName = "/home/swara/shiv-react-ui/src/App.js";
// import React from 'react';
// import Routes from './Routes';
// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
//             <Routes />
//       </div>
//     );
//   }
// }
// export default App;



 // core components



const hist = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Router"], {
      history: hist,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/DriveLayout",
      component: _Layout_DriveLayout_index__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/EmailLayout",
      component: _Layout_EmailLayout_index__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      from: "/",
      to: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.d6e92498214f494ed1ae.hot-update.js.map