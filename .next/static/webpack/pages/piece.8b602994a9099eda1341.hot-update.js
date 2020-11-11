webpackHotUpdate_N_E("pages/piece",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObservation.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserver.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/element.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/global.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/process.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js":
false,

/***/ "./node_modules/@juggle/resize-observer/lib/utils/scheduler.js":
false,

/***/ "./node_modules/debounce/index.js":
false,

/***/ "./node_modules/fast-deep-equal/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-merge-refs/dist/react-merge-refs.esm.js":
false,

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.development.js":
false,

/***/ "./node_modules/react-reconciler/index.js":
false,

/***/ "./node_modules/react-three-fiber/web.js":
false,

/***/ "./node_modules/react-use-measure/dist/web.js":
false,

/***/ "./node_modules/react/cjs/react.development.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/three/build/three.module.js":
false,

/***/ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js":
false,

/***/ "./node_modules/tiny-emitter/index.js":
false,

/***/ "./node_modules/use-asset/dist/index.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/piece.js":
/*!************************!*\
  !*** ./pages/piece.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waWVjZS44YjYwMjk5NGE5MDk5ZWRhMTM0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiJ9