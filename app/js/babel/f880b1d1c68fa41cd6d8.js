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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/babel/app.js":
/*!**************************!*\
  !*** ./app/babel/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./app/babel/data.js\");\n/* harmony import */ var _vuejs_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vuejs/Main */ \"./app/babel/vuejs/Main.js\");\n/* harmony import */ var _vuejs_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vuejs/Header */ \"./app/babel/vuejs/Header.js\");\n\r\n\r\n\r\n\r\n(function(global) {\r\n\tglobal.vm = new Vue({\r\n\t\tel: '#app',\r\n\t\tdata: {\r\n\t\t\t\r\n\t\t},\r\n\t\tcomponents: {\r\n\t\t\tMainComp: _vuejs_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t\t\tHeaderComp: _vuejs_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\t\t}\r\n\t});\r\n})(window);\r\n\n\n//# sourceURL=webpack:///./app/babel/app.js?");

/***/ }),

/***/ "./app/babel/data.js":
/*!***************************!*\
  !*** ./app/babel/data.js ***!
  \***************************/
/*! exports provided: productData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productData\", function() { return productData; });\nconst productData = (function(global) {\r\n\treturn (global.data = {\r\n\t\ttitle: 'test 2',\r\n\t\tproducts: [{\r\n\t\t\tid: 1,\r\n\t\t\ttitle: 'titleA',\r\n\t\t\tsubTitle: 'subTitleA',       \r\n\t\t\timageURL: '',\r\n\t\t\tprice: 0,\r\n\t\t\tdescription: ''\r\n\t\t}, {\r\n\t\t\tid: 2,\r\n\t\t\ttitle: 'titleB',\r\n\t\t\tsubTitle: 'subTitleB',       \r\n\t\t\timageURL: '',\r\n\t\t\tprice: 0,\r\n\t\t\tdescription: ''\r\n\t\t}, {\r\n\t\t\tid: 3, \r\n\t\t\ttitle: 'titleC',\r\n\t\t\tsubTitle: 'subTitleC',       \r\n\t\t\timageURL: '',\r\n\t\t\tprice: 0,\r\n\t\t\tdescription: ''\r\n\t\t}]\r\n\t});\r\n}(window));\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./app/babel/data.js?");

/***/ }),

/***/ "./app/babel/vuejs/Header.js":
/*!***********************************!*\
  !*** ./app/babel/vuejs/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name: 'HeaderComp',\r\n    template: `<nav class=\"navbar is-dark\">\r\n        <a class=\"navbar-item is-active\" href=\"#\">Products</a>\r\n        <a class=\"navbar-item\" href=\"#\">Cart</a>\r\n    </nav>`,\r\n    data() {\r\n        return {};\r\n    }\r\n});\n\n//# sourceURL=webpack:///./app/babel/vuejs/Header.js?");

/***/ }),

/***/ "./app/babel/vuejs/Main.js":
/*!*********************************!*\
  !*** ./app/babel/vuejs/Main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name: 'MainComp',\r\n    template: `<div id=\"main\" class=\"container\">\r\n        <slot name=\"header\"></slot>\r\n    </div>`,\r\n    data() {\r\n        return {};\r\n    }\r\n});\n\n//# sourceURL=webpack:///./app/babel/vuejs/Main.js?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi ./app/babel/app.js ./app/babel/data.js ./app/babel/vuejs/Header.js ./app/babel/vuejs/Main.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\babel\\app.js */\"./app/babel/app.js\");\n__webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\babel\\data.js */\"./app/babel/data.js\");\n__webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\babel\\vuejs\\Header.js */\"./app/babel/vuejs/Header.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\babel\\vuejs\\Main.js */\"./app/babel/vuejs/Main.js\");\n\n\n//# sourceURL=webpack:///multi_./app/babel/app.js_./app/babel/data.js_./app/babel/vuejs/Header.js_./app/babel/vuejs/Main.js?");

/***/ })

/******/ });