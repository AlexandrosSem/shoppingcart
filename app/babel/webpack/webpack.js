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

/***/ "./app/webpack/Container.js":
/*!**********************************!*\
  !*** ./app/webpack/Container.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    template: `<div id=\"main\" class=\"container\">\n        <slot name=\"header\"></slot>\n    </div>`,\n    data() {\n        return {};\n    }\n});\n\n//# sourceURL=webpack:///./app/webpack/Container.js?");

/***/ }),

/***/ "./app/webpack/Header.js":
/*!*******************************!*\
  !*** ./app/webpack/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    template: `<nav class=\"navbar is-dark\">\n        <a class=\"navbar-item is-active\" href=\"#\">Products</a>\n        <a class=\"navbar-item\" href=\"#\">Cart</a>\n    </nav>`,\n    data() {\n        return {};\n    }\n});\n\n//# sourceURL=webpack:///./app/webpack/Header.js?");

/***/ }),

/***/ "./app/webpack/app.js":
/*!****************************!*\
  !*** ./app/webpack/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./app/webpack/data.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./app/webpack/Container.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./app/webpack/Header.js\");\n\n\n\n\n(function(global) {\n\tglobal.vm = new Vue({\n\t\tel: '#app',\n\t\tdata: {\n\t\t\t\n\t\t},\n\t\tcomponents: {\n\t\t\t'Container': _Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n\t\t\t'Header': _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\t\t}\n\t});\n})(window);\n\n\n//# sourceURL=webpack:///./app/webpack/app.js?");

/***/ }),

/***/ "./app/webpack/data.js":
/*!*****************************!*\
  !*** ./app/webpack/data.js ***!
  \*****************************/
/*! exports provided: productData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productData\", function() { return productData; });\nconst productData = (function(global) {\n\treturn (global.data = {\n\t\ttitle: 'test 2',\n\t\tproducts: [{\n\t\t\tid: 1,\n\t\t\ttitle: 'titleA',\n\t\t\tsubTitle: 'subTitleA',       \n\t\t\timageURL: '',\n\t\t\tprice: 0,\n\t\t\tdescription: ''\n\t\t}, {\n\t\t\tid: 2,\n\t\t\ttitle: 'titleB',\n\t\t\tsubTitle: 'subTitleB',       \n\t\t\timageURL: '',\n\t\t\tprice: 0,\n\t\t\tdescription: ''\n\t\t}, {\n\t\t\tid: 3, \n\t\t\ttitle: 'titleC',\n\t\t\tsubTitle: 'subTitleC',       \n\t\t\timageURL: '',\n\t\t\tprice: 0,\n\t\t\tdescription: ''\n\t\t}]\n\t});\n}(window));\n\n\n\n\n\n//# sourceURL=webpack:///./app/webpack/data.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi ./app/webpack/Container.js ./app/webpack/Header.js ./app/webpack/app.js ./app/webpack/data.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/Container.js */\"./app/webpack/Container.js\");\n__webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/Header.js */\"./app/webpack/Header.js\");\n__webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/app.js */\"./app/webpack/app.js\");\nmodule.exports = __webpack_require__(/*! /home/publyo/Desktop/GIT/shoppingcart/app/webpack/data.js */\"./app/webpack/data.js\");\n\n\n//# sourceURL=webpack:///multi_./app/webpack/Container.js_./app/webpack/Header.js_./app/webpack/app.js_./app/webpack/data.js?");

/***/ })

/******/ });