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

  var scene = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"], "glb/scene.gltf");
  console.log(scene);
  return __jsx("group", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("mesh", {
    visible: true,
    geometry: scene.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 29,
      columnNumber: 9
    }
  })));
};

_s(Piece, "pgJzZU4dyZjKzekkk9lQHA8fcs0=", false, function () {
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
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("directionalLight", {
    intensity: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(Loading, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 27
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(Piece, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsIlBpZWNlIiwicHJvcHMiLCJzY2VuZSIsInVzZUxvYWRlciIsIkdMVEZMb2FkZXIiLCJjb25zb2xlIiwibG9nIiwiZ2VvbWV0cnkiLCJCaXJkc1BhZ2UiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0U7QUFBTSxXQUFPLE1BQWI7QUFBYyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBeEI7QUFBbUMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFnQixVQUFNLEVBQUMsVUFBdkI7QUFBa0MsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsVUFBTSxFQUFDLFVBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGVBQVcsTUFIYjtBQUlFLFdBQU8sRUFBRSxHQUpYO0FBS0UsYUFBUyxFQUFFLENBTGI7QUFNRSxhQUFTLEVBQUUsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQWFEOztLQWRRQSxPOztBQWdCVCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkIsTUFBTUMsS0FBSyxHQUFHQyxtRUFBUyxDQUFDQyxnRkFBRCxFQUFhLGdCQUFiLENBQXZCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxXQUFPLE1BQWI7QUFBYyxZQUFRLEVBQUVBLEtBQUssQ0FBQ0ssUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFDLFVBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBSUUsYUFBUyxFQUFFLEdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERjtBQVlELENBakJEOztHQUFNUCxLO1VBQ1VHLDJEOzs7TUFEVkgsSzs7QUFtQk4sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUFPLENBQ0wsTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBa0IsYUFBUyxFQUFFLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOENBQUQ7QUFBVSxZQUFRLEVBQUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURLLENBQVA7QUFRRCxDQVREOztNQUFNRCxTO0FBV1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BpZWNlLjAxMzJiZWM2ZDNlYTBiMzQ4NTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VMb2FkZXIgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWVzaCB2aXNpYmxlIHBvc2l0aW9uPXtbMCwgMCwgMF19IHJvdGF0aW9uPXtbMCwgMCwgMF19PlxyXG4gICAgICA8c3BoZXJlR2VvbWV0cnkgYXR0YWNoPVwiZ2VvbWV0cnlcIiBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cclxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsXHJcbiAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxyXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgIHRyYW5zcGFyZW50XHJcbiAgICAgICAgb3BhY2l0eT17MC42fVxyXG4gICAgICAgIHJvdWdobmVzcz17MX1cclxuICAgICAgICBtZXRhbG5lc3M9ezB9XHJcbiAgICAgIC8+XHJcbiAgICA8L21lc2g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUGllY2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzY2VuZSA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCBcImdsYi9zY2VuZS5nbHRmXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhzY2VuZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXA+XHJcbiAgICAgIDxtZXNoIHZpc2libGUgZ2VvbWV0cnk9e3NjZW5lLmdlb21ldHJ5fT5cclxuICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcclxuICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcclxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgcm91Z2huZXNzPXswLjN9XHJcbiAgICAgICAgICBtZXRhbG5lc3M9ezAuM31cclxuICAgICAgICAvPlxyXG4gICAgICA8L21lc2g+XHJcbiAgICA8L2dyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBCaXJkc1BhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIDxDYW52YXMgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMTcxNzE3XCIgfX0+XHJcbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MC41fSAvPlxyXG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkaW5nIC8+fT5cclxuICAgICAgICA8UGllY2UgLz5cclxuICAgICAgPC9TdXNwZW5zZT5cclxuICAgIDwvQ2FudmFzPixcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlyZHNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9