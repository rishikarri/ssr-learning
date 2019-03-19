/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\"div\", null, \"home\");\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\"div\", null, \"about\");\n};\n\nvar Contact = function Contact() {\n  return _react2.default.createElement(\"div\", null, _react2.default.createElement(_reactRouterDom.Redirect, {\n    to: \"/dashboard\"\n  }));\n};\n\nvar Dashboard = function Dashboard() {\n  return _react2.default.createElement(\"div\", null, \"dashboard\");\n};\n\nvar Layout =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Layout, _React$Component);\n\n  function Layout() {\n    var _this;\n\n    _classCallCheck(this, Layout);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this));\n    _this.state = {\n      title: \"Welcome to React SSR!\"\n    };\n    return _this;\n  }\n\n  _createClass(Layout, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\"div\", null, _react2.default.createElement(\"button\", {\n        onClick: function onClick() {\n          console.log('hi');\n        }\n      }, \"hi\"), _react2.default.createElement(\"h1\", null, this.state.title), _react2.default.createElement(\"div\", null, _react2.default.createElement(_reactRouterDom.Link, {\n        to: \"/\"\n      }, \"Home\"), _react2.default.createElement(_reactRouterDom.Link, {\n        to: \"/about\"\n      }, \"About\"), _react2.default.createElement(_reactRouterDom.Link, {\n        to: \"/contact\"\n      }, \"Contact\")), _react2.default.createElement(_reactRouterDom.Switch, null, _react2.default.createElement(_reactRouterDom.Route, {\n        path: \"/\",\n        exact: true,\n        component: Home\n      }), _react2.default.createElement(_reactRouterDom.Route, {\n        path: \"/about\",\n        exact: true,\n        component: About\n      }), _react2.default.createElement(_reactRouterDom.Route, {\n        path: \"/dashboard\",\n        exact: true,\n        component: Dashboard\n      }), _react2.default.createElement(_reactRouterDom.Route, {\n        path: \"/contact\",\n        exact: true,\n        render: function render() {\n          return _react2.default.createElement(_reactRouterDom.Redirect, {\n            to: \"/dashboard\"\n          });\n        }\n      })));\n    }\n  }]);\n\n  return Layout;\n}(_react2.default.Component);\n\nexports.default = Layout;\n\n//# sourceURL=webpack:///./components/Layout.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Layout = __webpack_require__(/*! ./components/Layout */ \"./components/Layout.js\");\n\nvar _Layout2 = _interopRequireDefault(_Layout);\n\nvar _nodeEmoji = __webpack_require__(/*! node-emoji */ \"node-emoji\");\n\nvar _nodeEmoji2 = _interopRequireDefault(_nodeEmoji);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static(\"dist/client-dist\"));\napp.get(\"/*\", function (req, res) {\n  var context = {};\n\n  var reactApp = _react2.default.createElement(_reactRouterDom.StaticRouter, {\n    context: context,\n    location: req.url\n  }, _react2.default.createElement(_Layout2.default, null));\n\n  var htmlMarkup = (0, _server.renderToString)(reactApp);\n\n  if (context.url) {\n    res.writeHead(302, {\n      Location: context.url\n    });\n    res.end();\n  } else {\n    res.writeHead(200, {\n      \"Content-Type\": \"text/html\"\n    });\n    res.end(htmlTemplate(htmlMarkup));\n  }\n});\napp.listen(2048);\nconsole.log(_nodeEmoji2.default.get('ear'), ' Listening on port 2048', _nodeEmoji2.default.get('ear'));\n\nfunction htmlTemplate(htmlMarkup) {\n  return \"\\n       <!DOCTYPE html>\\n        <html>\\n        <head>\\n        <title>Title of the document</title>\\n        </head>\\n\\n        <body>\\n            <div id=\\\"app\\\">\".concat(htmlMarkup, \"</div>\\n            <script src=\\\"./client-bundle.js\\\"></script>\\n        </body>\\n        </html>\\n    \");\n}\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "node-emoji":
/*!*****************************!*\
  !*** external "node-emoji" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-emoji\");\n\n//# sourceURL=webpack:///external_%22node-emoji%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });