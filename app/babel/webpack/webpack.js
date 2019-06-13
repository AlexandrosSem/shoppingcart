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

/***/ "./app/webpack/Header.js":
/*!*******************************!*\
  !*** ./app/webpack/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    props: ['page'],\r\n    template: `<nav class=\"navbar is-light\">\r\n        <a class=\"navbar-item is-active\" href=\"#\" v-on:click=\"changePageDisplay('Products')\">Products</a>\r\n        <a class=\"navbar-item\" href=\"#\" v-on:click=\"changePageDisplay('Cart')\">Cart</a>\r\n    </nav>`,\r\n    data() {\r\n        return {\r\n            propPageValue: ''\r\n        };\r\n    },\r\n    methods: {\r\n        changePageDisplay(pValue) {\r\n            this.propPageValue = pValue;\r\n            this.$emit('input', pValue);\r\n        }\r\n    },\r\n    created() {\r\n        this.propPageValue = this.page;\r\n    }\r\n});\n\n//# sourceURL=webpack:///./app/webpack/Header.js?");

/***/ }),

/***/ "./app/webpack/app.js":
/*!****************************!*\
  !*** ./app/webpack/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./app/webpack/Header.js\");\n/* harmony import */ var _dataProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataProducts */ \"./app/webpack/dataProducts.js\");\n\r\n \r\n\r\nwindow.OBJ = new Vue({\r\n\tel: '#app',\r\n\tdata: {\r\n\t\tlocal: {\r\n\t\t\tpageDisplay: 'Products'\r\n\t\t},\r\n\t\tproducts: _dataProducts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\t},\r\n\tmethods: {\r\n\t\ta (pEventValue) {\r\n\t\t\tconsole.log(pEventValue);\r\n\t\t}\r\n\t},\r\n\tcomponents: {\r\n\t\tHeader: _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./app/webpack/app.js?");

/***/ }),

/***/ "./app/webpack/dataProducts.js":
/*!*************************************!*\
  !*** ./app/webpack/dataProducts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tproducts: [{\r\n\t\tid: 1,\r\n\t\ttitle: 'titleA',\r\n\t\tsubTitle: 'subTitleA',       \r\n\t\timageURL: '',\r\n\t\tprice: 0,\r\n\t\tdescription: ''\r\n\t}, {\r\n\t\tid: 2,\r\n\t\ttitle: 'titleB',\r\n\t\tsubTitle: 'subTitleB',       \r\n\t\timageURL: '',\r\n\t\tprice: 0,\r\n\t\tdescription: ''\r\n\t}, {\r\n\t\tid: 3, \r\n\t\ttitle: 'titleC',\r\n\t\tsubTitle: 'subTitleC',       \r\n\t\timageURL: '',\r\n\t\tprice: 0,\r\n\t\tdescription: ''\r\n\t}]\r\n});\n\n//# sourceURL=webpack:///./app/webpack/dataProducts.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./app/webpack/app.js ./app/webpack/dataProducts.js ./app/webpack/Header.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\webpack\\app.js */\"./app/webpack/app.js\");\n__webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\webpack\\dataProducts.js */\"./app/webpack/dataProducts.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Alexandros\\ShoppingCart\\app\\webpack\\Header.js */\"./app/webpack/Header.js\");\n\n\n//# sourceURL=webpack:///multi_./app/webpack/app.js_./app/webpack/dataProducts.js_./app/webpack/Header.js?");

/***/ })

/******/ });