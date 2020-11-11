webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
var _jsxFileName = "G:\\Personal Projects\\VisiontoSpace Website\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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

function Loading() {
  return __jsx("mesh", {
    visible: true,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("sphereGeometry", {
    attach: "geometry",
    args: [1, 16, 16],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}
/* let GLTFLoader;

const Piece = ({ speed, factor, url, ...props }) => {
  const gltf = useLoader(GLTFLoader, url);
  const group = useRef();

  return (
    <group>
      <scene>
        <mesh visible geometry={nodes.Default.geometry}>
          <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
      </scene>
    </group>
  );
}; */


_c = Loading;

function PiecePage() {
  _s();

  var group = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useLoader = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFLoader"], "glb/piece.glb"),
      nodes = _useLoader.nodes; // useFrame will run outside of react in animation frames to optimize updates.


  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(function () {
    group.current.rotation.y += 0.004;
  });
  return (// Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
    __jsx("group", {
      ref: group,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    }, __jsx("mesh", {
      visible: true,
      geometry: nodes.Default.geometry,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx("meshStandardMaterial", {
      attach: "material",
      color: "white",
      roughness: 0.3,
      metalness: 0.3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    })))
  );
}

_s(PiecePage, "jBVbd/tFxs+8u6rPQgIfM3s4mR0=", false, function () {
  return [react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"], react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"]];
});

_c2 = PiecePage;
/* harmony default export */ __webpack_exports__["default"] = (PiecePage);

var _c, _c2;

$RefreshReg$(_c, "Loading");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTG9hZGluZyIsIlBpZWNlUGFnZSIsImdyb3VwIiwidXNlUmVmIiwidXNlTG9hZGVyIiwiR0xURkxvYWRlciIsIm5vZGVzIiwidXNlRnJhbWUiLCJjdXJyZW50Iiwicm90YXRpb24iLCJ5IiwiRGVmYXVsdCIsImdlb21ldHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsU0FDRTtBQUFNLFdBQU8sTUFBYjtBQUFjLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF4QjtBQUFtQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQWdCLFVBQU0sRUFBQyxVQUF2QjtBQUFrQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxVQUFNLEVBQUMsVUFEVDtBQUVFLFNBQUssRUFBQyxPQUZSO0FBR0UsZUFBVyxNQUhiO0FBSUUsV0FBTyxFQUFFLEdBSlg7QUFLRSxhQUFTLEVBQUUsQ0FMYjtBQU1FLGFBQVMsRUFBRSxDQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBYUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQXBDU0EsTzs7QUFzQ1QsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUNuQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCOztBQURtQixtQkFFREMsbUVBQVMsQ0FBQ0MsZ0ZBQUQsRUFBYSxlQUFiLENBRlI7QUFBQSxNQUVYQyxLQUZXLGNBRVhBLEtBRlcsRUFHbkI7OztBQUNBQyxvRUFBUSxDQUFDLFlBQU07QUFDYkwsU0FBSyxDQUFDTSxPQUFOLENBQWNDLFFBQWQsQ0FBdUJDLENBQXZCLElBQTRCLEtBQTVCO0FBQ0QsR0FGTyxDQUFSO0FBR0EsU0FDRTtBQUNBO0FBQU8sU0FBRyxFQUFFUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGFBQU8sTUFBYjtBQUFjLGNBQVEsRUFBRUksS0FBSyxDQUFDSyxPQUFOLENBQWNDLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFlBQU0sRUFBQyxVQURUO0FBRUUsV0FBSyxFQUFDLE9BRlI7QUFHRSxlQUFTLEVBQUUsR0FIYjtBQUlFLGVBQVMsRUFBRSxHQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBRkY7QUFhRDs7R0FwQlFYLFM7VUFFV0csMkQsRUFFbEJHLDBEOzs7TUFKT04sUztBQXNCTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTc0NzgyM2JiNWU2YzhhYTA5NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZUxvYWRlciB9IGZyb20gXCJyZWFjdC10aHJlZS1maWJlclwiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyXCI7XG5cbi8qIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5cbmxvYWRlci5sb2FkKFxuICBcIi9nbGIvcGllY2UuZ2xiXCIsXG4gIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICB9LFxuICB1bmRlZmluZWQsXG4gIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG4pOyAqL1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxtZXNoIHZpc2libGUgcG9zaXRpb249e1swLCAwLCAwXX0gcm90YXRpb249e1swLCAwLCAwXX0+XG4gICAgICA8c3BoZXJlR2VvbWV0cnkgYXR0YWNoPVwiZ2VvbWV0cnlcIiBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxuICAgICAgICBhdHRhY2g9XCJtYXRlcmlhbFwiXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICBvcGFjaXR5PXswLjZ9XG4gICAgICAgIHJvdWdobmVzcz17MX1cbiAgICAgICAgbWV0YWxuZXNzPXswfVxuICAgICAgLz5cbiAgICA8L21lc2g+XG4gICk7XG59XG5cbi8qIGxldCBHTFRGTG9hZGVyO1xuXG5jb25zdCBQaWVjZSA9ICh7IHNwZWVkLCBmYWN0b3IsIHVybCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBnbHRmID0gdXNlTG9hZGVyKEdMVEZMb2FkZXIsIHVybCk7XG4gIGNvbnN0IGdyb3VwID0gdXNlUmVmKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Z3JvdXA+XG4gICAgICA8c2NlbmU+XG4gICAgICAgIDxtZXNoIHZpc2libGUgZ2VvbWV0cnk9e25vZGVzLkRlZmF1bHQuZ2VvbWV0cnl9PlxuICAgICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxuICAgICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICByb3VnaG5lc3M9ezAuM31cbiAgICAgICAgICAgIG1ldGFsbmVzcz17MC4zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICAgIDwvc2NlbmU+XG4gICAgPC9ncm91cD5cbiAgKTtcbn07ICovXG5cbmZ1bmN0aW9uIFBpZWNlUGFnZSgpIHtcbiAgY29uc3QgZ3JvdXAgPSB1c2VSZWYoKTtcbiAgY29uc3QgeyBub2RlcyB9ID0gdXNlTG9hZGVyKEdMVEZMb2FkZXIsIFwiZ2xiL3BpZWNlLmdsYlwiKTtcbiAgLy8gdXNlRnJhbWUgd2lsbCBydW4gb3V0c2lkZSBvZiByZWFjdCBpbiBhbmltYXRpb24gZnJhbWVzIHRvIG9wdGltaXplIHVwZGF0ZXMuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBncm91cC5jdXJyZW50LnJvdGF0aW9uLnkgKz0gMC4wMDQ7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIC8vIEFkZCBhIHJlZiB0byB0aGUgZ3JvdXAuIFRoaXMgZ2l2ZXMgdXMgYSBob29rIHRvIG1hbmlwdWxhdGUgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBnZW9tZXRyeSBpbiB0aGUgdXNlRnJhbWUgY2FsbGJhY2suXG4gICAgPGdyb3VwIHJlZj17Z3JvdXB9PlxuICAgICAgPG1lc2ggdmlzaWJsZSBnZW9tZXRyeT17bm9kZXMuRGVmYXVsdC5nZW9tZXRyeX0+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbFxuICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICByb3VnaG5lc3M9ezAuM31cbiAgICAgICAgICBtZXRhbG5lc3M9ezAuM31cbiAgICAgICAgLz5cbiAgICAgIDwvbWVzaD5cbiAgICA8L2dyb3VwPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaWVjZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9