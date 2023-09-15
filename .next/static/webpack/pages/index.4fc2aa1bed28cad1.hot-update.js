"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PictureFrame.js":
/*!****************************************!*\
  !*** ./src/components/PictureFrame.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_lightbulb_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/lightbulb.png */ \"./public/lightbulb.png\");\n/* harmony import */ var _public_0crows_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/0crows.png */ \"./public/0crows.png\");\n/* harmony import */ var _scripts_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/scripts/tools */ \"./src/scripts/tools.js\");\n\n\n\n\n\n\nconst PictureFrame = (param)=>{\n    let { seconds } = param;\n    if (seconds === 0) {\n        seconds = \"00\";\n    } else if (seconds < 10) {\n        seconds = \"0\".concat(seconds);\n    } else {\n        seconds += \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-auto p-4 max-w-xs justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: (0,_scripts_tools__WEBPACK_IMPORTED_MODULE_5__.supplyPhoto)(seconds[0]),\n                alt: \"number of seconds in crows: ones\",\n                className: \"flex h-full w-1/3 mr-2 border-4 border-black sm:rounded-xl rounded-2xl\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/PictureFrame.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: (0,_scripts_tools__WEBPACK_IMPORTED_MODULE_5__.supplyPhoto)(seconds[1]),\n                alt: \"number of seconds in crows: ones\",\n                className: \"flex h-full w-1/3 ml-2 border-4 border-black sm:rounded-xl rounded-2xl\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/PictureFrame.js\",\n                lineNumber: 23,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/PictureFrame.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PictureFrame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PictureFrame);\nvar _c;\n$RefreshReg$(_c, \"PictureFrame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QaWN0dXJlRnJhbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDTDtBQUN5QjtBQUNMO0FBQ0E7QUFFN0MsTUFBTUssZUFBZTtRQUFDLEVBQUNDLE9BQU8sRUFBQztJQUM3QixJQUFJQSxZQUFZLEdBQUc7UUFDakJBLFVBQVU7SUFDWixPQUFPLElBQUlBLFVBQVUsSUFBSTtRQUN2QkEsVUFBVSxJQUFZLE9BQVJBO0lBQ2hCLE9BQU87UUFDTEEsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUixtREFBS0E7Z0JBQUNTLEtBQUtMLDJEQUFXQSxDQUFDRSxPQUFPLENBQUMsRUFBRTtnQkFDeEJJLEtBQUk7Z0JBQ0pGLFdBQVU7Z0JBQ1ZHLFFBQVE7Ozs7OzswQkFFViw4REFBQ1gsbURBQUtBO2dCQUFDUyxLQUFLTCwyREFBV0EsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDSSxLQUFJO2dCQUNKRixXQUFVO2dCQUNWRyxRQUFROzs7Ozs7Ozs7Ozs7QUFJdEI7S0F2Qk1OO0FBeUJOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BpY3R1cmVGcmFtZS5qcz9iZWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxpZ2h0YnVsYiBmcm9tICcuLi8uLi9wdWJsaWMvbGlnaHRidWxiLnBuZydcbmltcG9ydCBub0Nyb3dzIGZyb20gJy4uLy4uL3B1YmxpYy8wY3Jvd3MucG5nJ1xuaW1wb3J0IHsgc3VwcGx5UGhvdG8gfSBmcm9tICdAL3NjcmlwdHMvdG9vbHMnXG5cbmNvbnN0IFBpY3R1cmVGcmFtZSA9ICh7c2Vjb25kc30pID0+IHtcbiAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICBzZWNvbmRzID0gXCIwMFwiO1xuICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgIHNlY29uZHMgPSBgMCR7c2Vjb25kc31gXG4gIH0gZWxzZSB7XG4gICAgc2Vjb25kcyArPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwgaC1hdXRvIHAtNCBtYXgtdy14cyBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICA8SW1hZ2Ugc3JjPXtzdXBwbHlQaG90byhzZWNvbmRzWzBdKX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJudW1iZXIgb2Ygc2Vjb25kcyBpbiBjcm93czogb25lc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy0xLzMgbXItMiBib3JkZXItNCBib3JkZXItYmxhY2sgc206cm91bmRlZC14bCByb3VuZGVkLTJ4bFwiXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c3VwcGx5UGhvdG8oc2Vjb25kc1sxXSl9XG4gICAgICAgICAgICAgIGFsdD1cIm51bWJlciBvZiBzZWNvbmRzIGluIGNyb3dzOiBvbmVzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy0xLzMgbWwtMiBib3JkZXItNCBib3JkZXItYmxhY2sgc206cm91bmRlZC14bCByb3VuZGVkLTJ4bFwiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVGcmFtZSJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwibGlnaHRidWxiIiwibm9Dcm93cyIsInN1cHBseVBob3RvIiwiUGljdHVyZUZyYW1lIiwic2Vjb25kcyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PictureFrame.js\n"));

/***/ })

});