webpackHotUpdate_N_E("pages/birds",{

/***/ "./pages/birds.js":
/*!************************!*\
  !*** ./pages/birds.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");



var _this = undefined,
    _jsxFileName = "G:\\Personal Projects\\VisiontoSpace Website\\pages\\birds.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var GLTFLoader;

var Bird = function Bird(_ref) {
  _s();

  var speed = _ref.speed,
      factor = _ref.factor,
      url = _ref.url,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["speed", "factor", "url"]);

  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useLoader"])(GLTFLoader, url);
  var group = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return new three__WEBPACK_IMPORTED_MODULE_3__["AnimationMixer"]();
  }),
      mixer = _useState[0];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return void mixer.clipAction(gltf.animations[0], group.current).play();
  }, [gltf.animations, mixer]);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useFrame"])(function (state, delta) {
    group.current.rotation.y += Math.sin(delta * factor / 2) * Math.cos(delta * factor / 2) * 1.5;
    mixer.update(delta * speed);
  });
  return __jsx("group", {
    ref: group,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("scene", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "Scene"
  }, props, {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("bufferGeometry", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attach: "geometry"
  }, gltf.__$[1].geometry, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("meshStandardMaterial", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attach: "material"
  }, gltf.__$[1].material, {
    name: "Material_0_COLOR_0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })))));
};

_s(Bird, "+YLeu6OGcun+19X/HsCdLaLEp30=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useLoader"], react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useFrame"]];
});

_c = Bird;

var Birds = function Birds() {
  return new Array(5).fill().map(function (_, i) {
    var x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    var y = -10 + Math.random() * 20;
    var z = -5 + Math.random() * 10;
    var bird = ["stork", "parrot", "flamingo"][Math.round(Math.random() * 2)];
    var speed = bird === "stork" ? 0.5 : bird === "flamingo" ? 2 : 5;
    var factor = bird === "stork" ? 0.5 + Math.random() : bird === "flamingo" ? 0.25 + Math.random() : 1 + Math.random() - 0.5;
    return __jsx(Bird, {
      key: i,
      position: [x, y, z],
      rotation: [0, x > 0 ? Math.PI : 0, 0],
      speed: speed,
      factor: factor,
      url: "/glb/".concat(bird, ".glb"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    });
  });
};

_c2 = Birds;

var BirdsPage = function BirdsPage(props) {
  _s2();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    GLTFLoader = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js").GLTFLoader;
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["Canvas"], {
    camera: {
      position: [0, 0, 35]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("ambientLight", {
    intensity: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("pointLight", {
    position: [40, 40, 40],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(Birds, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }))));
};

_s2(BirdsPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = BirdsPage;
/* harmony default export */ __webpack_exports__["default"] = (BirdsPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "Bird");
$RefreshReg$(_c2, "Birds");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlyZHMuanMiXSwibmFtZXMiOlsiR0xURkxvYWRlciIsIkJpcmQiLCJzcGVlZCIsImZhY3RvciIsInVybCIsInByb3BzIiwiZ2x0ZiIsInVzZUxvYWRlciIsImdyb3VwIiwidXNlUmVmIiwidXNlU3RhdGUiLCJUSFJFRSIsIm1peGVyIiwidXNlRWZmZWN0IiwiY2xpcEFjdGlvbiIsImFuaW1hdGlvbnMiLCJjdXJyZW50IiwicGxheSIsInVzZUZyYW1lIiwic3RhdGUiLCJkZWx0YSIsInJvdGF0aW9uIiwieSIsIk1hdGgiLCJzaW4iLCJjb3MiLCJ1cGRhdGUiLCJfXyQiLCJtb3JwaFRhcmdldERpY3Rpb25hcnkiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiQmlyZHMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIngiLCJyYW5kb20iLCJyb3VuZCIsInoiLCJiaXJkIiwiUEkiLCJCaXJkc1BhZ2UiLCJyZXF1aXJlIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBSjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsTUFBNEIsUUFBNUJBLE1BQTRCO0FBQUEsTUFBcEJDLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2pELE1BQU1DLElBQUksR0FBR0MsbUVBQVMsQ0FBQ1AsVUFBRCxFQUFhSSxHQUFiLENBQXRCO0FBQ0EsTUFBTUksS0FBSyxHQUFHQyxvREFBTSxFQUFwQjs7QUFGaUQsa0JBR2pDQyxzREFBUSxDQUFDO0FBQUEsV0FBTSxJQUFJQyxvREFBSixFQUFOO0FBQUEsR0FBRCxDQUh5QjtBQUFBLE1BRzFDQyxLQUgwQzs7QUFJakRD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QUssRUFBTCxFQUFTLEVBQVQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw4Q0FBRDtBQUFVLFlBQVEsRUFBRSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBREYsQ0FERjtBQVdELENBZkQ7O0lBQU1GLFM7O01BQUFBLFM7QUFpQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JpcmRzLmNiNTg2YzVmN2FlY2Y5MDBkY2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lLCB1c2VMb2FkZXIgfSBmcm9tIFwicmVhY3QtdGhyZWUtZmliZXJcIjtcblxubGV0IEdMVEZMb2FkZXI7XG5cbmNvbnN0IEJpcmQgPSAoeyBzcGVlZCwgZmFjdG9yLCB1cmwsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgZ2x0ZiA9IHVzZUxvYWRlcihHTFRGTG9hZGVyLCB1cmwpO1xuICBjb25zdCBncm91cCA9IHVzZVJlZigpO1xuICBjb25zdCBbbWl4ZXJdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKCkpO1xuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gdm9pZCBtaXhlci5jbGlwQWN0aW9uKGdsdGYuYW5pbWF0aW9uc1swXSwgZ3JvdXAuY3VycmVudCkucGxheSgpLFxuICAgIFtnbHRmLmFuaW1hdGlvbnMsIG1peGVyXVxuICApO1xuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgZ3JvdXAuY3VycmVudC5yb3RhdGlvbi55ICs9XG4gICAgICBNYXRoLnNpbigoZGVsdGEgKiBmYWN0b3IpIC8gMikgKiBNYXRoLmNvcygoZGVsdGEgKiBmYWN0b3IpIC8gMikgKiAxLjU7XG4gICAgbWl4ZXIudXBkYXRlKGRlbHRhICogc3BlZWQpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Z3JvdXAgcmVmPXtncm91cH0+XG4gICAgICA8c2NlbmUgbmFtZT1cIlNjZW5lXCIgey4uLnByb3BzfT5cbiAgICAgICAgPG1lc2hcbiAgICAgICAgICBuYW1lPVwiT2JqZWN0XzBcIlxuICAgICAgICAgIG1vcnBoVGFyZ2V0RGljdGlvbmFyeT17Z2x0Zi5fXyRbMV0ubW9ycGhUYXJnZXREaWN0aW9uYXJ5fVxuICAgICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17Z2x0Zi5fXyRbMV0ubW9ycGhUYXJnZXRJbmZsdWVuY2VzfVxuICAgICAgICAgIHJvdGF0aW9uPXtbMS41NzA3OTY0NjExNTM3NTc3LCAwLCAwXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidWZmZXJHZW9tZXRyeSBhdHRhY2g9XCJnZW9tZXRyeVwiIHsuLi5nbHRmLl9fJFsxXS5nZW9tZXRyeX0gLz5cbiAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWxcbiAgICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICAgIHsuLi5nbHRmLl9fJFsxXS5tYXRlcmlhbH1cbiAgICAgICAgICAgIG5hbWU9XCJNYXRlcmlhbF8wX0NPTE9SXzBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICAgIDwvc2NlbmU+XG4gICAgPC9ncm91cD5cbiAgKTtcbn07XG5cbmNvbnN0IEJpcmRzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IEFycmF5KDUpLmZpbGwoKS5tYXAoKF8sIGkpID0+IHtcbiAgICBjb25zdCB4ID0gKDE1ICsgTWF0aC5yYW5kb20oKSAqIDMwKSAqIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gLTEgOiAxKTtcbiAgICBjb25zdCB5ID0gLTEwICsgTWF0aC5yYW5kb20oKSAqIDIwO1xuICAgIGNvbnN0IHogPSAtNSArIE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICBjb25zdCBiaXJkID0gW1wic3RvcmtcIiwgXCJwYXJyb3RcIiwgXCJmbGFtaW5nb1wiXVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgbGV0IHNwZWVkID0gYmlyZCA9PT0gXCJzdG9ya1wiID8gMC41IDogYmlyZCA9PT0gXCJmbGFtaW5nb1wiID8gMiA6IDU7XG4gICAgbGV0IGZhY3RvciA9XG4gICAgICBiaXJkID09PSBcInN0b3JrXCJcbiAgICAgICAgPyAwLjUgKyBNYXRoLnJhbmRvbSgpXG4gICAgICAgIDogYmlyZCA9PT0gXCJmbGFtaW5nb1wiXG4gICAgICAgID8gMC4yNSArIE1hdGgucmFuZG9tKClcbiAgICAgICAgOiAxICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICByZXR1cm4gKFxuICAgICAgPEJpcmRcbiAgICAgICAga2V5PXtpfVxuICAgICAgICBwb3NpdGlvbj17W3gsIHksIHpdfVxuICAgICAgICByb3RhdGlvbj17WzAsIHggPiAwID8gTWF0aC5QSSA6IDAsIDBdfVxuICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgIGZhY3Rvcj17ZmFjdG9yfVxuICAgICAgICB1cmw9e2AvZ2xiLyR7YmlyZH0uZ2xiYH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBCaXJkc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBHTFRGTG9hZGVyID0gcmVxdWlyZShcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIikuR0xURkxvYWRlcjtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FudmFzIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDAsIDM1XSB9fT5cbiAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezJ9IC8+XG4gICAgICAgIDxwb2ludExpZ2h0IHBvc2l0aW9uPXtbNDAsIDQwLCA0MF19IC8+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgICAgPEJpcmRzIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8L0NhbnZhcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpcmRzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=