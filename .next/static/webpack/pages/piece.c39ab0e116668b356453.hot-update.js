webpackHotUpdate_N_E("pages/piece",{

/***/ "./pages/piece.js":
/*!************************!*\
  !*** ./pages/piece.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");


var _this = undefined,
    _jsxFileName = "G:\\Personal Projects\\VisiontoSpace Website\\pages\\piece.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; */

/* const loader = new GLTFLoader();

loader.load(
  "/glb/piece.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
); */

var GLTFLoader;

var Piece = function Piece(_ref) {
  _s();

  var speed = _ref.speed,
      factor = _ref.factor,
      nodes = _ref.nodes,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["speed", "factor", "nodes"]);

  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useLoader"])(GLTFLoader, url);
  var group = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  return __jsx("group", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("scene", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("mesh", {
    visible: true,
    geometry: nodes.Default.geometry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
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
      columnNumber: 11
    }
  }))));
};

_s(Piece, "PRh1HofwSJVIuOJGNpWCmCUMMno=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useLoader"]];
});

_c = Piece;

var PiecePage = function PiecePage(props) {
  _s2();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    GLTFLoader = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js").GLTFLoader;
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["Canvas"], {
    camera: {
      position: [0, 0, 35]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("ambientLight", {
    intensity: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("pointLight", {
    position: [40, 40, 40],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(Piece, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))));
};

_s2(PiecePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = PiecePage;
/* harmony default export */ __webpack_exports__["default"] = (PiecePage);

var _c, _c2;

$RefreshReg$(_c, "Piece");
$RefreshReg$(_c2, "PiecePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiR0xURkxvYWRlciIsIlBpZWNlIiwic3BlZWQiLCJmYWN0b3IiLCJub2RlcyIsInByb3BzIiwiZ2x0ZiIsInVzZUxvYWRlciIsInVybCIsImdyb3VwIiwidXNlUmVmIiwiRGVmYXVsdCIsImdlb21ldHJ5IiwiUGllY2VQYWdlIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsVUFBSjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQVpDLEtBQVk7O0FBQ3BELE1BQU1DLElBQUksR0FBR0MsbUVBQVMsQ0FBQ1AsVUFBRCxFQUFhUSxHQUFiLENBQXRCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxFQUFwQjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFdBQU8sTUFBYjtBQUFjLFlBQVEsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsU0FBSyxFQUFDLE9BRlI7QUFHRSxhQUFTLEVBQUUsR0FIYjtBQUlFLGFBQVMsRUFBRSxHQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERjtBQWNELENBbEJEOztHQUFNWCxLO1VBQ1NNLDJEOzs7S0FEVE4sSzs7QUFvQk4sSUFBTVksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1IsS0FBRCxFQUFXO0FBQUE7O0FBQzNCUyx5REFBUyxDQUFDLFlBQU07QUFDZGQsY0FBVSxHQUFHZSxtQkFBTyxDQUFDLHNHQUFELENBQVAsQ0FBaURmLFVBQTlEO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQ0UsbUVBQ0UsTUFBQyx3REFBRDtBQUFRLFVBQU0sRUFBRTtBQUFFZ0IsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQO0FBQVosS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQWMsYUFBUyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVksWUFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsOENBQUQ7QUFBVSxZQUFRLEVBQUUsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixDQURGLENBREY7QUFXRCxDQWZEOztJQUFNSCxTOztNQUFBQSxTO0FBaUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waWVjZS5jMzlhYjBlMTE2NjY4YjM1NjQ1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZUxvYWRlciB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xyXG4vKiBpbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjsgKi9cclxuXHJcbi8qIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcblxyXG5sb2FkZXIubG9hZChcclxuICBcIi9nbGIvcGllY2UuZ2xiXCIsXHJcbiAgZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcclxuICB9LFxyXG4gIHVuZGVmaW5lZCxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuKTsgKi9cclxuXHJcbmxldCBHTFRGTG9hZGVyO1xyXG5cclxuY29uc3QgUGllY2UgPSAoeyBzcGVlZCwgZmFjdG9yLCBub2RlcywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGdsdGYgPSB1c2VMb2FkZXIoR0xURkxvYWRlciwgdXJsKTtcclxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGdyb3VwPlxyXG4gICAgICA8c2NlbmU+XHJcbiAgICAgICAgPG1lc2ggdmlzaWJsZSBnZW9tZXRyeT17bm9kZXMuRGVmYXVsdC5nZW9tZXRyeX0+XHJcbiAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcclxuICAgICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgcm91Z2huZXNzPXswLjN9XHJcbiAgICAgICAgICAgIG1ldGFsbmVzcz17MC4zfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L21lc2g+XHJcbiAgICAgIDwvc2NlbmU+XHJcbiAgICA8L2dyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQaWVjZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgR0xURkxvYWRlciA9IHJlcXVpcmUoXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCIpLkdMVEZMb2FkZXI7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FudmFzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDAsIDM1XSB9fT5cclxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17Mn0gLz5cclxuICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17WzQwLCA0MCwgNDBdfSAvPlxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICA8UGllY2UgLz5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0NhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWVjZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=