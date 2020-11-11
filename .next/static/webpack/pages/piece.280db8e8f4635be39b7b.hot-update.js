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
      url = _ref.url,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["speed", "factor", "url"]);

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
    url: "/glb/".concat(piece, ".glb"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGllY2UuanMiXSwibmFtZXMiOlsiR0xURkxvYWRlciIsIlBpZWNlIiwic3BlZWQiLCJmYWN0b3IiLCJ1cmwiLCJwcm9wcyIsImdsdGYiLCJ1c2VMb2FkZXIiLCJncm91cCIsInVzZVJlZiIsIm5vZGVzIiwiRGVmYXVsdCIsImdlb21ldHJ5IiwiUGllY2VQYWdlIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsInBvc2l0aW9uIiwicGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxVQUFKOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNDO0FBQUE7O0FBQUEsTUFBbkNDLEtBQW1DLFFBQW5DQSxLQUFtQztBQUFBLE1BQTVCQyxNQUE0QixRQUE1QkEsTUFBNEI7QUFBQSxNQUFwQkMsR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsTUFBWkMsS0FBWTs7QUFDbEQsTUFBTUMsSUFBSSxHQUFHQyxtRUFBUyxDQUFDUCxVQUFELEVBQWFJLEdBQWIsQ0FBdEI7QUFDQSxNQUFNSSxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sV0FBTyxNQUFiO0FBQWMsWUFBUSxFQUFFQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFDLFVBRFQ7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBSUUsYUFBUyxFQUFFLEdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGO0FBY0QsQ0FsQkQ7O0dBQU1YLEs7VUFDU00sMkQ7OztLQURUTixLOztBQW9CTixJQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixLQUFELEVBQVc7QUFBQTs7QUFDM0JTLHlEQUFTLENBQUMsWUFBTTtBQUNkZCxjQUFVLEdBQUdlLG1CQUFPLENBQUMsc0dBQUQsQ0FBUCxDQUFpRGYsVUFBOUQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsU0FDRSxtRUFDRSxNQUFDLHdEQUFEO0FBQVEsVUFBTSxFQUFFO0FBQUVnQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVA7QUFBWixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBYyxhQUFTLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBWSxZQUFRLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFVLFlBQVEsRUFBRSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sT0FBRyxpQkFBVUMsS0FBVixTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBREYsQ0FERjtBQVdELENBZkQ7O0lBQU1KLFM7O01BQUFBLFM7QUFpQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BpZWNlLjI4MGRiOGU4ZjQ2MzViZTM5YjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQ2FudmFzLCB1c2VGcmFtZSwgdXNlTG9hZGVyIH0gZnJvbSBcInJlYWN0LXRocmVlLWZpYmVyXCI7XHJcbi8qIGltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiOyAqL1xyXG5cclxuLyogY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuXHJcbmxvYWRlci5sb2FkKFxyXG4gIFwiL2dsYi9waWVjZS5nbGJcIixcclxuICBmdW5jdGlvbiAoZ2x0Zikge1xyXG4gICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xyXG4gIH0sXHJcbiAgdW5kZWZpbmVkLFxyXG4gIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG4pOyAqL1xyXG5cclxubGV0IEdMVEZMb2FkZXI7XHJcblxyXG5jb25zdCBQaWVjZSA9ICh7IHNwZWVkLCBmYWN0b3IsIHVybCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGdsdGYgPSB1c2VMb2FkZXIoR0xURkxvYWRlciwgdXJsKTtcclxuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGdyb3VwPlxyXG4gICAgICA8c2NlbmU+XHJcbiAgICAgICAgPG1lc2ggdmlzaWJsZSBnZW9tZXRyeT17bm9kZXMuRGVmYXVsdC5nZW9tZXRyeX0+XHJcbiAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcclxuICAgICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgcm91Z2huZXNzPXswLjN9XHJcbiAgICAgICAgICAgIG1ldGFsbmVzcz17MC4zfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L21lc2g+XHJcbiAgICAgIDwvc2NlbmU+XHJcbiAgICA8L2dyb3VwPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQaWVjZVBhZ2UgPSAocHJvcHMpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgR0xURkxvYWRlciA9IHJlcXVpcmUoXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCIpLkdMVEZMb2FkZXI7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FudmFzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDAsIDM1XSB9fT5cclxuICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17Mn0gLz5cclxuICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17WzQwLCA0MCwgNDBdfSAvPlxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XHJcbiAgICAgICAgICA8UGllY2UgdXJsPXtgL2dsYi8ke3BpZWNlfS5nbGJgfSAvPlxyXG4gICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgIDwvQ2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpZWNlUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==