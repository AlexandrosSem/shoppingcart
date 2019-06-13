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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    props: ['Page'],\n    template: `<nav class=\"navbar is-light\" v-bind:Page=\"this.Value\">\n        <a class=\"navbar-item is-active\" href=\"#\" v-on:click=\"this.Value = 'Products'\">Products</a>\n        <a class=\"navbar-item\" href=\"#\" v-on:click=\"this.Value = 'Cart'\">Cart</a>\n    </nav>`,\n    data() {\n        return {\n            Value: 'products'\n        };\n    },\n    watch: {\n        Value: function(pValue) {\n            this.$emit('input', pValue);\n        }\n    }\n});\n\n//# sourceURL=webpack:///./app/webpack/Header.js?");

/***/ }),

/***/ "./app/webpack/app.js":
/*!****************************!*\
  !*** ./app/webpack/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./app/webpack/Header.js\");\n/* harmony import */ var _dataProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataProducts */ \"./app/webpack/dataProducts.js\");\n\n \n\nwindow.OBJ = new Vue({\n\tel: '#app',\n\tdata: {\n\t\tLocal:{\n\t\t\tPageDisplay: 'cart'\n\t\t},\n\t\tProducts: _dataProducts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n\t},\n\tcomponents: {\n\t\t'Header': _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\t}\n});\n\n\n//# sourceURL=webpack:///./app/webpack/app.js?");

/***/ }),

/***/ "./app/webpack/dataProducts.js":
/*!*************************************!*\
  !*** ./app/webpack/dataProducts.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tproducts: [{\n\t\tid: 1,\n\t\ttitle: 'titleA',\n\t\tsubTitle: 'subTitleA',       \n\t\timageURL: '',\n\t\tprice: 0,\n\t\tdescription: ''\n\t}, {\n\t\tid: 2,\n\t\ttitle: 'titleB',\n\t\tsubTitle: 'subTitleB',       \n\t\timageURL: '',\n\t\tprice: 0,\n\t\tdescription: ''\n\t}, {\n\t\tid: 3, \n\t\ttitle: 'titleC',\n\t\tsubTitle: 'subTitleC',       \n\t\timageURL: '',\n\t\tprice: 0,\n\t\tdescription: ''\n\t}]\n});\n\n//# sourceURL=webpack:///./app/webpack/dataProducts.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./app/webpack/Header.js ./app/webpack/app.js ./app/webpack/dataProducts.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/Header.js */\"./app/webpack/Header.js\");\n__webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/app.js */\"./app/webpack/app.js\");\nmodule.exports = __webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/dataProducts.js */\"./app/webpack/dataProducts.js\");\n\n\n//# sourceURL=webpack:///multi_./app/webpack/Header.js_./app/webpack/app.js_./app/webpack/dataProducts.js?");

/***/ })

/******/ });