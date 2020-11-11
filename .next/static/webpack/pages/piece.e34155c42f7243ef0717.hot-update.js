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

  var _useLoader = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"], "glb/scene.gltf"),
      nodes = _useLoader.nodes,
      materials = _useLoader.materials;

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
    geometry: nodes.mesh_0.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: nodes.mesh_1.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: nodes.mesh_3.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("mesh", {
    visible: true,
    material: materials.SceneRoot,
    geometry: nodes.mesh_4.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
};

_s(Piece, "eKKxddS5U8vEoHfM+fKdEftXbJA=", false, function () {
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
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("directionalLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(Loading, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(Piece, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsIlBpZWNlIiwicHJvcHMiLCJ1c2VMb2FkZXIiLCJHTFRGTG9hZGVyIiwibm9kZXMiLCJtYXRlcmlhbHMiLCJTY2VuZVJvb3QiLCJtZXNoXzAiLCJnZW9tZXRyeSIsIm1lc2hfMSIsIm1lc2hfMyIsIm1lc2hfNCIsIkJpcmRzUGFnZSIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsU0FDRTtBQUFNLFdBQU8sTUFBYjtBQUFjLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF4QjtBQUFtQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQWdCLFVBQU0sRUFBQyxVQUF2QjtBQUFrQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxVQUFNLEVBQUMsVUFEVDtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsZUFBVyxNQUhiO0FBSUUsV0FBTyxFQUFFLEdBSlg7QUFLRSxhQUFTLEVBQUUsQ0FMYjtBQU1FLGFBQVMsRUFBRSxDQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBYUQ7O0tBZFFBLE87O0FBZ0JULElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG1CQUNNQyxtRUFBUyxDQUFDQyxnRkFBRCxFQUFhLGdCQUFiLENBRGY7QUFBQSxNQUNmQyxLQURlLGNBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxTQURRLGNBQ1JBLFNBRFE7O0FBR3ZCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxNQURUO0FBRUUsWUFBUSxFQUFFQSxTQUFTLENBQUNDLFNBRnRCO0FBR0UsWUFBUSxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsUUFIekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFDRSxXQUFPLE1BRFQ7QUFFRSxZQUFRLEVBQUVILFNBQVMsQ0FBQ0MsU0FGdEI7QUFHRSxZQUFRLEVBQUVGLEtBQUssQ0FBQ0ssTUFBTixDQUFhRCxRQUh6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFXRTtBQUNFLFdBQU8sTUFEVDtBQUVFLFlBQVEsRUFBRUgsU0FBUyxDQUFDQyxTQUZ0QjtBQUdFLFlBQVEsRUFBRUYsS0FBSyxDQUFDTSxNQUFOLENBQWFGLFFBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRTtBQUNFLFdBQU8sTUFEVDtBQUVFLFlBQVEsRUFBRUgsU0FBUyxDQUFDQyxTQUZ0QjtBQUdFLFlBQVEsRUFBRUYsS0FBSyxDQUFDTyxNQUFOLENBQWFILFFBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQXdCRCxDQTNCRDs7R0FBTVIsSztVQUN5QkUsMkQ7OztNQUR6QkYsSzs7QUE2Qk4sSUFBTVksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUFPLENBQ0wsTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBa0IsYUFBUyxFQUFFLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOENBQUQ7QUFBVSxZQUFRLEVBQUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURLLENBQVA7QUFRRCxDQVREOztNQUFNRCxTO0FBV1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BpZWNlLmUzNDE1NWM0MmY3MjQzZWYwNzE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VMb2FkZXIgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWVzaCB2aXNpYmxlIHBvc2l0aW9uPXtbMCwgMCwgMF19IHJvdGF0aW9uPXtbMCwgMCwgMF19PlxyXG4gICAgICA8c3BoZXJlR2VvbWV0cnkgYXR0YWNoPVwiZ2VvbWV0cnlcIiBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cclxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsXHJcbiAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxyXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgIHRyYW5zcGFyZW50XHJcbiAgICAgICAgb3BhY2l0eT17MC42fVxyXG4gICAgICAgIHJvdWdobmVzcz17MX1cclxuICAgICAgICBtZXRhbG5lc3M9ezB9XHJcbiAgICAgIC8+XHJcbiAgICA8L21lc2g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUGllY2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vZGVzLCBtYXRlcmlhbHMgfSA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCBcImdsYi9zY2VuZS5nbHRmXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGdyb3VwPlxyXG4gICAgICA8bWVzaFxyXG4gICAgICAgIHZpc2libGVcclxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLlNjZW5lUm9vdH1cclxuICAgICAgICBnZW9tZXRyeT17bm9kZXMubWVzaF8wLmdlb21ldHJ5fVxyXG4gICAgICAvPlxyXG4gICAgICA8bWVzaFxyXG4gICAgICAgIHZpc2libGVcclxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLlNjZW5lUm9vdH1cclxuICAgICAgICBnZW9tZXRyeT17bm9kZXMubWVzaF8xLmdlb21ldHJ5fVxyXG4gICAgICAvPlxyXG4gICAgICA8bWVzaFxyXG4gICAgICAgIHZpc2libGVcclxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLlNjZW5lUm9vdH1cclxuICAgICAgICBnZW9tZXRyeT17bm9kZXMubWVzaF8zLmdlb21ldHJ5fVxyXG4gICAgICAvPlxyXG4gICAgICA8bWVzaFxyXG4gICAgICAgIHZpc2libGVcclxuICAgICAgICBtYXRlcmlhbD17bWF0ZXJpYWxzLlNjZW5lUm9vdH1cclxuICAgICAgICBnZW9tZXRyeT17bm9kZXMubWVzaF80Lmdlb21ldHJ5fVxyXG4gICAgICAvPlxyXG4gICAgPC9ncm91cD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmlyZHNQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICA8Q2FudmFzIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzE3MTcxN1wiIH19PlxyXG4gICAgICA8ZGlyZWN0aW9uYWxMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cclxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGluZyAvPn0+XHJcbiAgICAgICAgPFBpZWNlIC8+XHJcbiAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICA8L0NhbnZhcz4sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpcmRzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==