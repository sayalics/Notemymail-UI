(this["webpackJsonpshiv-react-ui"] = this["webpackJsonpshiv-react-ui"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

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
      to: "/DriveLayout/MyDrive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/Components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/home/swara/shiv-react-ui/src/Components/Logo/Logo.js";




const styles = theme => ({
  logo: {
    marginRight: theme.spacing(2)
  }
});

class Logo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          classes = _this$props.classes,
          logo = _this$props.logo;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.logo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: logo,
      height: this.props.hg,
      width: this.props.wd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }

}

Logo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Logo));

/***/ }),

/***/ "./src/Components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/Components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/Components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Components/SideBar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/Components/SideBar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _UploadButton_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UploadButton/index */ "./src/Components/UploadButton/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/swara/shiv-react-ui/src/Components/SideBar/Sidebar.js";










const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class ClippedDrawer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      selectedIndex: 1
    };

    this.handleListItemClick = (event, index) => {
      this.setState({
        selectedIndex: index
      });
    };
  }

  render() {
    const _this$props = this.props,
          classes = _this$props.classes,
          title1 = _this$props.title1,
          title2 = _this$props.title2,
          title3 = _this$props.title3,
          title4 = _this$props.title4,
          title5 = _this$props.title5,
          Icon1 = _this$props.Icon1,
          Icon2 = _this$props.Icon2,
          Icon3 = _this$props.Icon3,
          Icon4 = _this$props.Icon4,
          Icon5 = _this$props.Icon5;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.drawer,
      variant: "permanent",
      classes: {
        paper: classes.drawerPaper
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.toolbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadButton_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
      component: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/MyDrive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      selected: this.state.selectedIndex === 1,
      onClick: event => this.handleListItemClick(event, 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon1, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      primary: title1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/Shared",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      selected: this.state.selectedIndex === 2,
      onClick: event => this.handleListItemClick(event, 2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon2, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      primary: title2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/Recent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      selected: this.state.selectedIndex === 3,
      onClick: event => this.handleListItemClick(event, 3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon3, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      primary: title3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/Favourites",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      selected: this.state.selectedIndex === 4,
      onClick: event => this.handleListItemClick(event, 4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon4, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      primary: title4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/Trash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      button: true,
      selected: this.state.selectedIndex === 5,
      onClick: event => this.handleListItemClick(event, 5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon5, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      primary: title5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))))));
  }

}

ClippedDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  Icon1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  Icon2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  Icon3: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  Icon4: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  Icon5: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ClippedDrawer));

/***/ }),

/***/ "./src/Components/SideBar/index.js":
/*!*****************************************!*\
  !*** ./src/Components/SideBar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./src/Components/SideBar/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Components/TopBar/Topbar.js":
/*!*****************************************!*\
  !*** ./src/Components/TopBar/Topbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Logo_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Logo/index */ "./src/Components/Logo/index.js");
/* harmony import */ var _assets_Logo_Logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/Logo/Logo.png */ "./src/assets/Logo/Logo.png");
/* harmony import */ var _assets_Logo_Logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_Logo_Logo_png__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/home/swara/shiv-react-ui/src/Components/TopBar/Topbar.js";

















const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class Topbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };

    this.handleProfileMenuOpen = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    this.handleMenuClose = () => {
      this.setState({
        anchorEl: null
      });
      this.handleMobileMenuClose();
    };

    this.handleMobileMenuOpen = event => {
      this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    };

    this.handleMobileMenuClose = () => {
      this.setState({
        mobileMoreAnchorEl: null
      });
    };
  }

  render() {
    const _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          mobileMoreAnchorEl = _this$state.mobileMoreAnchorEl;
    const _this$props = this.props,
          classes = _this$props.classes,
          navtitle = _this$props.navtitle,
          SearchIcon = _this$props.SearchIcon,
          MailIcon = _this$props.MailIcon,
          NotificationsIcon = _this$props.NotificationsIcon,
          VideoIcon = _this$props.VideoIcon,
          SettingIcon = _this$props.SettingIcon;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: isMenuOpen,
      onClose: this.handleMenuClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleMenuClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleMenuClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "My account"));
    const renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      anchorEl: mobileMoreAnchorEl,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: isMobileMenuOpen,
      onClose: this.handleMenuClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleMobileMenuClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotificationsIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Notifications")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleProfileMenuOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "Profile")));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      position: "fixed",
      className: classes.appBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_index__WEBPACK_IMPORTED_MODULE_14__["default"], {
      logo: _assets_Logo_Logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
      hg: "40px",
      wd: "60px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.title,
      variant: "h5",
      color: "inherit",
      noWrap: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, navtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.search,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.searchIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: "Search\u2026",
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.grow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionDesktop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MailIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideoIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotificationsIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-owns": isMenuOpen ? 'material-appbar' : undefined,
      "aria-haspopup": "true",
      onClick: this.handleProfileMenuOpen,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-haspopup": "true",
      onClick: this.handleMobileMenuOpen,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }))))), renderMenu, renderMobileMenu);
  }

}

_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  navtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  MailIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  DriveIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  VideoIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  NotificationsIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  SettingIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles)(Topbar));

/***/ }),

/***/ "./src/Components/TopBar/index.js":
/*!****************************************!*\
  !*** ./src/Components/TopBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/Components/TopBar/Topbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Components/UploadButton/UploadButton.js":
/*!*****************************************************!*\
  !*** ./src/Components/UploadButton/UploadButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Folder */ "./node_modules/@material-ui/icons/Folder.js");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CreateNewFolder */ "./node_modules/@material-ui/icons/CreateNewFolder.js");
/* harmony import */ var _material_ui_icons_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/InsertDriveFile */ "./node_modules/@material-ui/icons/InsertDriveFile.js");
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
var _jsxFileName = "/home/swara/shiv-react-ui/src/Components/UploadButton/UploadButton.js";




















function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing.unit * 7,
    marginTop: theme.spacing.unit * 3
  },
  uploadbutton: {
    zIndex: theme.zIndex.drawer + 1
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    background: 'hidden'
  },
  papermodal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
  modalbutton: {
    margin: theme.spacing.unit,
    marginLeft: '230px'
  },
  button: {
    backgroundColor: '#d8d8d8',
    width: '120px',
    height: '40px',
    fontWeight: 'bold'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  }
});

class UploadButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      open1: false,
      openmodal: false,
      selectedIndex: 0
    };

    this.handleListItemClick = (event, index) => {
      this.setState({
        selectedIndex: index
      });
    };

    this.handleToggle = () => {
      this.setState(state => ({
        open: !state.open
      }));
    };

    this.handleClose = event => {
      if (this.anchorEl.contains(event.target)) {
        return;
      }

      this.setState({
        open: false
      });
    };

    this.handlemodalOpen = () => {
      this.setState({
        openmodal: true
      });
    };

    this.handlemodalClose = () => {
      this.setState({
        openmodal: false
      });
    };

    this.handledropopen = () => {
      this.setState({
        open1: true
      });
    };

    this.handledropclose = () => {
      this.setState({
        open1: false
      });
    };

    this.onDrop = acceptedFiles => {
      console.log(acceptedFiles);
    };
  }

  render() {
    const classes = this.props.classes;
    const open = this.state.open;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.uploadbutton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.button,
      buttonRef: node => {
        this.anchorEl = node;
      },
      "aria-owns": open ? 'menu-list-grow' : undefined,
      "aria-haspopup": "true",
      onClick: this.handleToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Upload"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__["default"], {
      open: open,
      anchorEl: this.anchorEl,
      transition: true,
      disablePortal: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, ({
      TransitionProps,
      placement
    }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, TransitionProps, {
      id: "menu-list-grow",
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "nav",
      "aria-label": "main mailbox folders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      selected: this.state.selectedIndex === 1,
      onClick: event => this.handleListItemClick(event, 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CreateNewFolder__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Add folder",
      onClick: this.handlemodalOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      open: this.state.openmodal,
      onClose: this.handlemodalClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: getModalStyle(),
      className: classes.papermodal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
      variant: "h6",
      color: "primary",
      id: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Add folder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
      id: "outlined-dense",
      fullWidth: true,
      label: "Folder name",
      className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(classes.textField, classes.dense),
      margin: "dense",
      variant: "outlined",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#text-buttons",
      color: "primary",
      className: classes.modalbutton,
      onClick: this.handlemodalClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#text-buttons",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Create"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Divider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      selected: this.state.selectedIndex === 2,
      onClick: event => this.handleListItemClick(event, 2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onDrop: this.state.onDrop,
      accept: "image/*, video/*, audio/*, .png, .jpg, .jpeg.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      multiple: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, ({
      getRootProps,
      getInputProps
    }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getRootProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Upload file",
      onClick: this.state.handledropopen,
      onClose: this.state.handledropclose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      selected: this.state.selectedIndex === 3,
      onClick: event => this.handleListItemClick(event, 3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onDrop: this.state.onDrop,
      accept: "webkitdirectory/*",
      multiple: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, ({
      getRootProps,
      getInputProps
    }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getRootProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Upload folder",
      onClick: this.state.handledropopen,
      onClose: this.state.handledropclose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }))))))))));
  }

}

UploadButton.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles)(UploadButton));

/***/ }),

/***/ "./src/Components/UploadButton/index.js":
/*!**********************************************!*\
  !*** ./src/Components/UploadButton/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadButton */ "./src/Components/UploadButton/UploadButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UploadButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Layout/DriveLayout/DriveLayout.js":
/*!***********************************************!*\
  !*** ./src/Layout/DriveLayout/DriveLayout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Components_SideBar_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/SideBar/index */ "./src/Components/SideBar/index.js");
/* harmony import */ var _Components_TopBar_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/TopBar/index */ "./src/Components/TopBar/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/CloudOutlined */ "./node_modules/@material-ui/icons/CloudOutlined.js");
/* harmony import */ var _material_ui_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/VoiceChat */ "./node_modules/@material-ui/icons/VoiceChat.js");
/* harmony import */ var _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AccessTime */ "./node_modules/@material-ui/icons/AccessTime.js");
/* harmony import */ var _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/SupervisorAccount */ "./node_modules/@material-ui/icons/SupervisorAccount.js");
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "./node_modules/@material-ui/icons/DeleteOutline.js");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/StarBorderOutlined */ "./node_modules/@material-ui/icons/StarBorderOutlined.js");
/* harmony import */ var _material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/home/swara/shiv-react-ui/src/Layout/DriveLayout/DriveLayout.js";

















const styles = theme => ({
  root: {
    height: '100%'
  },
  content: {
    paddingTop: '0px',
    marginLeft: 240,
    height: '100%'
  },
  toolbar: theme.mixins.toolbar
});

class DriveLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const classes = this.props.classes;
    const children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
        [classes.root]: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_TopBar_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navtitle: "Drive",
      SearchIcon: _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a,
      MailIcon: _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_7___default.a,
      NotificationsIcon: _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8___default.a,
      DriveIcon: _material_ui_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_9___default.a,
      SettingIcon: _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a,
      VideoIcon: _material_ui_icons_VoiceChat__WEBPACK_IMPORTED_MODULE_11___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SideBar_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Icon1: _material_ui_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_9___default.a,
      title1: "My Drive",
      Icon2: _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_13___default.a,
      title2: "Shared with me",
      Icon3: _material_ui_icons_AccessTime__WEBPACK_IMPORTED_MODULE_12___default.a,
      title3: "Recent",
      Icon4: _material_ui_icons_StarBorderOutlined__WEBPACK_IMPORTED_MODULE_15___default.a,
      title4: "Favourite",
      Icon5: _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_14___default.a,
      title5: "Trash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.toolbar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), children));
  }

}

DriveLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(DriveLayout));

/***/ }),

/***/ "./src/Layout/DriveLayout/index.js":
/*!*****************************************!*\
  !*** ./src/Layout/DriveLayout/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DriveLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DriveLayout */ "./src/Layout/DriveLayout/DriveLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DriveLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Layout/EmailLayout/EmailLayout.js":
/*!***********************************************!*\
  !*** ./src/Layout/EmailLayout/EmailLayout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/swara/shiv-react-ui/src/Layout/EmailLayout/EmailLayout.js";


class EmailLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmailLayout);

/***/ }),

/***/ "./src/Layout/EmailLayout/index.js":
/*!*****************************************!*\
  !*** ./src/Layout/EmailLayout/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailLayout */ "./src/Layout/EmailLayout/EmailLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EmailLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/assets/Logo/Logo.png":
/*!**********************************!*\
  !*** ./src/assets/Logo/Logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Logo.7225525c.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/swara/shiv-react-ui/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/swara/shiv-react-ui/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/swara/shiv-react-ui/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map