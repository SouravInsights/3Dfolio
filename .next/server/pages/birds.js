module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/birds.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/birds.js":
/*!************************!*\
  !*** ./pages/birds.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\Personal Projects\\VisiontoSpace Website\\pages\\birds.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




let GLTFLoader;

const Bird = (_ref) => {
  let {
    speed,
    factor,
    url
  } = _ref,
      props = _objectWithoutProperties(_ref, ["speed", "factor", "url"]);

  const gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"])(GLTFLoader, url);
  const group = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: mixer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => new three__WEBPACK_IMPORTED_MODULE_1__["AnimationMixer"]());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => void mixer.clipAction(gltf.animations[0], group.current).play(), [gltf.animations, mixer]);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])((state, delta) => {
    group.current.rotation.y += Math.sin(delta * factor / 2) * Math.cos(delta * factor / 2) * 1.5;
    mixer.update(delta * speed);
  });
  return __jsx("group", {
    ref: group,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("scene", _extends({
    name: "Scene"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    name: "Object_0",
    morphTargetDictionary: gltf.__$[1].morphTargetDictionary,
    morphTargetInfluences: gltf.__$[1].morphTargetInfluences,
    rotation: [1.5707964611537577, 0, 0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("bufferGeometry", _extends({
    attach: "geometry"
  }, gltf.__$[1].geometry, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("meshStandardMaterial", _extends({
    attach: "material"
  }, gltf.__$[1].material, {
    name: "Material_0_COLOR_0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })))));
};

const Birds = () => {
  return new Array(5).fill().map((_, i) => {
    const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;
    const bird = ["stork", "parrot", "flamingo"][Math.round(Math.random() * 2)];
    let speed = bird === "stork" ? 0.5 : bird === "flamingo" ? 2 : 5;
    let factor = bird === "stork" ? 0.5 + Math.random() : bird === "flamingo" ? 0.25 + Math.random() : 1 + Math.random() - 0.5;
    return __jsx(Bird, {
      key: i,
      position: [x, y, z],
      rotation: [0, x > 0 ? Math.PI : 0, 0],
      speed: speed,
      factor: factor,
      url: `/glb/${bird}.glb`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    });
  });
};

const BirdsPage = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    GLTFLoader = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "three/examples/jsm/loaders/GLTFLoader").GLTFLoader;
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["Canvas"], {
    camera: {
      position: [0, 0, 35]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("ambientLight", {
    intensity: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("pointLight", {
    position: [40, 40, 40],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(Birds, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BirdsPage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-three-fiber":
/*!************************************!*\
  !*** external "react-three-fiber" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-three-fiber");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three/examples/jsm/loaders/GLTFLoader":
/*!********************************************************!*\
  !*** external "three/examples/jsm/loaders/GLTFLoader" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three/examples/jsm/loaders/GLTFLoader");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmlyZHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10aHJlZS1maWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRocmVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiIl0sIm5hbWVzIjpbIkdMVEZMb2FkZXIiLCJCaXJkIiwic3BlZWQiLCJmYWN0b3IiLCJ1cmwiLCJwcm9wcyIsImdsdGYiLCJ1c2VMb2FkZXIiLCJncm91cCIsInVzZVJlZiIsIm1peGVyIiwidXNlU3RhdGUiLCJUSFJFRSIsInVzZUVmZmVjdCIsImNsaXBBY3Rpb24iLCJhbmltYXRpb25zIiwiY3VycmVudCIsInBsYXkiLCJ1c2VGcmFtZSIsInN0YXRlIiwiZGVsdGEiLCJyb3RhdGlvbiIsInkiLCJNYXRoIiwic2luIiwiY29zIiwidXBkYXRlIiwiX18kIiwibW9ycGhUYXJnZXREaWN0aW9uYXJ5IiwibW9ycGhUYXJnZXRJbmZsdWVuY2VzIiwiZ2VvbWV0cnkiLCJtYXRlcmlhbCIsIkJpcmRzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJ4IiwicmFuZG9tIiwicm91bmQiLCJ6IiwiYmlyZCIsIlBJIiwiQmlyZHNQYWdlIiwicmVxdWlyZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmlyZHMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VMb2FkZXIgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcblxubGV0IEdMVEZMb2FkZXI7XG5cbmNvbnN0IEJpcmQgPSAoeyBzcGVlZCwgZmFjdG9yLCB1cmwsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCB1cmwpO1xuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xuICBjb25zdCBbbWl4ZXJdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKCkpO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gdm9pZCBtaXhlci5jbGlwQWN0aW9uKGdsdGYuYW5pbWF0aW9uc1swXSwgZ3JvdXAuY3VycmVudCkucGxheSgpLFxuICAgIFtnbHRmLmFuaW1hdGlvbnMsIG1peGVyXVxuICApO1xuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9XG4gICAgICBNYXRoLnNpbigoZGVsdGEgKiBmYWN0b3IpIC8gMikgKiBNYXRoLmNvcygoZGVsdGEgKiBmYWN0b3IpIC8gMikgKiAxLjU7XG4gICAgbWl4ZXIudXBkYXRlKGRlbHRhICogc3BlZWQpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgcmVmPXtncm91cH0+XG4gICAgICA8c2NlbmUgbmFtZT1cIlNjZW5lXCIgey4uLnByb3BzfT5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzBcIlxuICAgICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17Z2x0Zi5fXyRbMV0ubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17Z2x0Zi5fXyRbMV0ubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgICAgIHJvdGF0aW9uPXtbMS41NzA3OTY0NjExNTM3NTc3LCAwLCAwXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidWZmZXJHZW9tZXRyeSBhdHRhY2g9XCJnZW9tZXRyeVwiIHsuLi5nbHRmLl9fJFsxXS5nZW9tZXRyeX0gLz5cbiAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcbiAgICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICAgIHsuLi5nbHRmLl9fJFsxXS5tYXRlcmlhbH1cbiAgICAgICAgICAgIG5hbWU9XCJNYXRlcmlhbF8wX0NPTE9SXzBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICAgIDwvc2NlbmU+XG4gICAgPC9ncm91cD5cbiAgKTtcbn07XG5cbmNvbnN0IEJpcmRzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IEFycmF5KDUpLmZpbGwoKS5tYXAoKF8sIGkpID0+IHtcbiAgICBjb25zdCB4ID0gKDE1ICsgTWF0aC5yYW5kb20oKSAqIDMwKSAqIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gLTEgOiAxKTtcbiAgICBjb25zdCB5ID0gLTEwICsgTWF0aC5yYW5kb20oKSAqIDIwO1xuICAgIGNvbnN0IHogPSAtNSArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICBjb25zdCBiaXJkID0gW1wic3RvcmtcIiwgXCJwYXJyb3RcIiwgXCJmbGFtaW5nb1wiXVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgbGV0IHNwZWVkID0gYmlyZCA9PT0gXCJzdG9ya1wiID8gMC41IDogYmlyZCA9PT0gXCJmbGFtaW5nb1wiID8gMiA6IDU7XG4gICAgbGV0IGZhY3RvciA9XG4gICAgICBiaXJkID09PSBcInN0b3JrXCJcbiAgICAgICAgPyAwLjUgKyBNYXRoLnJhbmRvbSgpXG4gICAgICAgIDogYmlyZCA9PT0gXCJmbGFtaW5nb1wiXG4gICAgICAgID8gMC4yNSArIE1hdGgucmFuZG9tKClcbiAgICAgICAgOiAxICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICByZXR1cm4gKFxuICAgICAgPEJpcmRcbiAgICAgICAga2V5PXtpfVxuICAgICAgICBwb3NpdGlvbj17W3gsIHksIHpdfVxuICAgICAgICByb3RhdGlvbj17WzAsIHggPiAwID8gTWF0aC5QSSA6IDAsIDBdfVxuICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgIGZhY3Rvcj17ZmFjdG9yfVxuICAgICAgICB1cmw9e2AvZ2xiLyR7YmlyZH0uZ2xiYH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBCaXJkc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBHTFRGTG9hZGVyID0gcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIikuR0xURkxvYWRlcjtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FudmFzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDAsIDM1XSB9fT5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezJ9IC8+XG4gICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXtbNDAsIDQwLCA0MF19IC8+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPEJpcmRzIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpcmRzUGFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRocmVlLWZpYmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==