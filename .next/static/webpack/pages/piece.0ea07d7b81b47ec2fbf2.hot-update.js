webpackHotUpdate_N_E("pages/piece",{

/***/ "./pages/piece.js":
/*!************************!*\
  !*** ./pages/piece.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
var _jsxFileName = "G:\\Personal Projects\\VisiontoSpace Website\\pages\\piece.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Loading() {
  return __jsx("mesh", {
    visible: true,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("sphereGeometry", {
    attach: "geometry",
    args: [1, 16, 16],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("meshStandardMaterial", {
    attach: "material",
    color: "white",
    transparent: true,
    opacity: 0.6,
    roughness: 1,
    metalness: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

_c = Loading;

var Piece = function Piece(props) {
  _s();

  var _useLoader = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"], "glb/piece.glb"),
      nodes = _useLoader.nodes;

  return __jsx("group", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: scene.mesh_0.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: scene.mesh_1.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: scene.piece1.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

_s(Piece, "fGldl7XbWXHEsrniChGU9po/dds=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"]];
});

_c2 = Piece;

var BirdsPage = function BirdsPage() {
  return [__jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["Canvas"], {
    style: {
      background: "#171717"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("directionalLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(Loading, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(Piece, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })))];
};

_c3 = BirdsPage;
/* harmony default export */ __webpack_exports__["default"] = (BirdsPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "Loading");
$RefreshReg$(_c2, "Piece");
$RefreshReg$(_c3, "BirdsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsIlBpZWNlIiwicHJvcHMiLCJ1c2VMb2FkZXIiLCJHTFRGTG9hZGVyIiwibm9kZXMiLCJtYXRlcmlhbHMiLCJTY2VuZVJvb3QiLCJzY2VuZSIsIm1lc2hfMCIsImdlb21ldHJ5IiwibWVzaF8xIiwicGllY2UxIiwiQmlyZHNQYWdlIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixTQUNFO0FBQU0sV0FBTyxNQUFiO0FBQWMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXhCO0FBQW1DLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBZ0IsVUFBTSxFQUFDLFVBQXZCO0FBQWtDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxlQUFXLE1BSGI7QUFJRSxXQUFPLEVBQUUsR0FKWDtBQUtFLGFBQVMsRUFBRSxDQUxiO0FBTUUsYUFBUyxFQUFFLENBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFhRDs7S0FkUUEsTzs7QUFnQlQsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ0xDLG1FQUFTLENBQUNDLGdGQUFELEVBQWEsZUFBYixDQURKO0FBQUEsTUFDZkMsS0FEZSxjQUNmQSxLQURlOztBQUd2QixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFdBQU8sTUFEVDtBQUVFLFlBQVEsRUFBRUMsU0FBUyxDQUFDQyxTQUZ0QjtBQUdFLFlBQVEsRUFBRUMsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQ0UsV0FBTyxNQURUO0FBRUUsWUFBUSxFQUFFSixTQUFTLENBQUNDLFNBRnRCO0FBR0UsWUFBUSxFQUFFQyxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsUUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0U7QUFDRSxXQUFPLE1BRFQ7QUFFRSxZQUFRLEVBQUVKLFNBQVMsQ0FBQ0MsU0FGdEI7QUFHRSxZQUFRLEVBQUVDLEtBQUssQ0FBQ0ksTUFBTixDQUFhRixRQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQW1CRCxDQXRCRDs7R0FBTVQsSztVQUNjRSwyRDs7O01BRGRGLEs7O0FBd0JOLElBQU1ZLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsU0FBTyxDQUNMLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQWtCLGFBQVMsRUFBRSxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhDQUFEO0FBQVUsWUFBUSxFQUFFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FESyxDQUFQO0FBUUQsQ0FURDs7TUFBTUQsUztBQVdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waWVjZS4wZWEwN2Q3YjgxYjQ3ZWMyZmJmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlTG9hZGVyIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1lc2ggdmlzaWJsZSBwb3NpdGlvbj17WzAsIDAsIDBdfSByb3RhdGlvbj17WzAsIDAsIDBdfT5cclxuICAgICAgPHNwaGVyZUdlb21ldHJ5IGF0dGFjaD1cImdlb21ldHJ5XCIgYXJncz17WzEsIDE2LCAxNl19IC8+XHJcbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxyXG4gICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcclxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICB0cmFuc3BhcmVudFxyXG4gICAgICAgIG9wYWNpdHk9ezAuNn1cclxuICAgICAgICByb3VnaG5lc3M9ezF9XHJcbiAgICAgICAgbWV0YWxuZXNzPXswfVxyXG4gICAgICAvPlxyXG4gICAgPC9tZXNoPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBpZWNlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBub2RlcyB9ID0gdXNlTG9hZGVyKEdMVEZMb2FkZXIsIFwiZ2xiL3BpZWNlLmdsYlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxncm91cD5cclxuICAgICAgPG1lc2hcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5TY2VuZVJvb3R9XHJcbiAgICAgICAgZ2VvbWV0cnk9e3NjZW5lLm1lc2hfMC5nZW9tZXRyeX1cclxuICAgICAgLz5cclxuICAgICAgPG1lc2hcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5TY2VuZVJvb3R9XHJcbiAgICAgICAgZ2VvbWV0cnk9e3NjZW5lLm1lc2hfMS5nZW9tZXRyeX1cclxuICAgICAgLz5cclxuICAgICAgPG1lc2hcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5TY2VuZVJvb3R9XHJcbiAgICAgICAgZ2VvbWV0cnk9e3NjZW5lLnBpZWNlMS5nZW9tZXRyeX1cclxuICAgICAgLz5cclxuICAgIDwvZ3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJpcmRzUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgPENhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMxNzE3MTdcIiB9fT5cclxuICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXswLjV9IC8+XHJcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxyXG4gICAgICAgIDxQaWVjZSAvPlxyXG4gICAgICA8L1N1c3BlbnNlPlxyXG4gICAgPC9DYW52YXM+LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaXJkc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=