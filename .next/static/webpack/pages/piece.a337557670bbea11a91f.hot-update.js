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

  var _useLoader = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"], "blb/piece.glb"),
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
    geometry: nodes.Default.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("meshStandardMaterial", {
    attach: "material",
    color: "white",
    roughness: 0.3,
    metalness: 0.3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
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
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("directionalLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(Loading, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(Piece, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsIlBpZWNlIiwicHJvcHMiLCJ1c2VMb2FkZXIiLCJHTFRGTG9hZGVyIiwibm9kZXMiLCJEZWZhdWx0IiwiZ2VvbWV0cnkiLCJCaXJkc1BhZ2UiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0U7QUFBTSxXQUFPLE1BQWI7QUFBYyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBeEI7QUFBbUMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFnQixVQUFNLEVBQUMsVUFBdkI7QUFBa0MsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsVUFBTSxFQUFDLFVBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGVBQVcsTUFIYjtBQUlFLFdBQU8sRUFBRSxHQUpYO0FBS0UsYUFBUyxFQUFFLENBTGI7QUFNRSxhQUFTLEVBQUUsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQWFEOztLQWRRQSxPOztBQWdCVCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxtQkFDTEMsbUVBQVMsQ0FBQ0MsZ0ZBQUQsRUFBYSxlQUFiLENBREo7QUFBQSxNQUNmQyxLQURlLGNBQ2ZBLEtBRGU7O0FBR3ZCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sV0FBTyxNQUFiO0FBQWMsWUFBUSxFQUFFQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFDLFVBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBSUUsYUFBUyxFQUFFLEdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERjtBQVlELENBZkQ7O0dBQU1OLEs7VUFDY0UsMkQ7OztNQURkRixLOztBQWlCTixJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQU8sQ0FDTCxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFrQixhQUFTLEVBQUUsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4Q0FBRDtBQUFVLFlBQVEsRUFBRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBREssQ0FBUDtBQVFELENBVEQ7O01BQU1ELFM7QUFXU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGllY2UuYTMzNzU1NzY3MGJiZWExMWE5MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYW52YXMsIHVzZUxvYWRlciB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtZXNoIHZpc2libGUgcG9zaXRpb249e1swLCAwLCAwXX0gcm90YXRpb249e1swLCAwLCAwXX0+XHJcbiAgICAgIDxzcGhlcmVHZW9tZXRyeSBhdHRhY2g9XCJnZW9tZXRyeVwiIGFyZ3M9e1sxLCAxNiwgMTZdfSAvPlxyXG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcclxuICAgICAgICBhdHRhY2g9XCJtYXRlcmlhbFwiXHJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgdHJhbnNwYXJlbnRcclxuICAgICAgICBvcGFjaXR5PXswLjZ9XHJcbiAgICAgICAgcm91Z2huZXNzPXsxfVxyXG4gICAgICAgIG1ldGFsbmVzcz17MH1cclxuICAgICAgLz5cclxuICAgIDwvbWVzaD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBQaWVjZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm9kZXMgfSA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCBcImJsYi9waWVjZS5nbGJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXA+XHJcbiAgICAgIDxtZXNoIHZpc2libGUgZ2VvbWV0cnk9e25vZGVzLkRlZmF1bHQuZ2VvbWV0cnl9PlxyXG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxyXG4gICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxyXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICByb3VnaG5lc3M9ezAuM31cclxuICAgICAgICAgIG1ldGFsbmVzcz17MC4zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbWVzaD5cclxuICAgIDwvZ3JvdXA+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJpcmRzUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgPENhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMxNzE3MTdcIiB9fT5cclxuICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXswLjV9IC8+XHJcbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxyXG4gICAgICAgIDxQaWVjZSAvPlxyXG4gICAgICA8L1N1c3BlbnNlPlxyXG4gICAgPC9DYW52YXM+LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaXJkc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=