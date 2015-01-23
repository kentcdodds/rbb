(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["rbb"] = factory();
	else
		root["rbb"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var originalBackground = undefined;
	var originalBackgroundSize = undefined;
	var el = undefined;
	
	module.exports = rbb;
	module.exports.off = off;
	
	
	function rbb() {
	  var _ref = arguments[0] === undefined ? {} : arguments[0];
	  var _ref$root = _ref.root;
	  var root = _ref$root === undefined ? "rbb_backgrounds" : _ref$root;
	  var count = _ref.count;
	  var _ref$extension = _ref.extension;
	  var extension = _ref$extension === undefined ? "png" : _ref$extension;
	  var _ref$prefix = _ref.prefix;
	  var prefix = _ref$prefix === undefined ? "bg" : _ref$prefix;
	  var images = _ref.images;
	  var _ref$element = _ref.element;
	  var element = _ref$element === undefined ? document.documentElement : _ref$element;
	  if (Number.isInteger(arguments[0])) {
	    count = arguments[0];
	  } else if (Array.isArray(arguments[0])) {
	    images = arguments[0];
	  }
	  if (!images && !count) {
	    throw new Error("rbb: You must either specify images or count");
	  }
	
	  var background = undefined;
	  if (images) {
	    background = rand(images);
	  } else {
	    background = "" + root + "/" + prefix + "" + rand(count - 1) + "." + extension;
	  }
	
	  // set internal state
	  el = element;
	  originalBackground = el.style.background;
	  originalBackgroundSize = el.style["background-size"];
	
	  // set the styles
	  el.style.background = "url(\"" + background + "\") no-repeat center center fixed";
	  el.style["background-size"] = "cover";
	  return module.exports;
	}
	
	function off() {
	  el.style.background = originalBackground;
	  el.style["background-size"] = originalBackgroundSize;
	  return module.exports;
	}
	
	function rand(items) {
	  if (Number.isInteger(items)) {
	    return Math.floor(Math.random() * items);
	  } else if (Array.isArray(items)) {
	    return items[Math.floor(Math.random() * (items.length - 1))];
	  } else {
	    return null;
	  }
	}

/***/ }
/******/ ])
});

//# sourceMappingURL=rbb.js.map