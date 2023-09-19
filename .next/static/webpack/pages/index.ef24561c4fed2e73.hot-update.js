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

/***/ "./src/components/CalendarContainer.js":
/*!*********************************************!*\
  !*** ./src/components/CalendarContainer.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PictureFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PictureFrame */ \"./src/components/PictureFrame.js\");\n/* harmony import */ var _PoemContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PoemContainer */ \"./src/components/PoemContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CalendarContainer = ()=>{\n    _s();\n    const Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().getSeconds());\n    function refreshSeconds() {\n        setSeconds(new Date().getSeconds());\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timerId = setInterval(refreshSeconds, 1000);\n        return function cleanup() {\n            clearInterval(timerId);\n        };\n    }, []);\n    //the w-1/2 makes this flexible to an extent\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-4/5 flex-col items-center min-w-564 border-solid border-8 rounded-xl border-black p-3 bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"flex border-b-2 border-black w-auto justify-center sm:hidden\",\n                children: \"Crow Seconds\"\n            }, void 0, false, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"w-auto justify-center hidden sm:flex\",\n                children: \"Crow \"\n            }, void 0, false, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"border-b-2 border-black w-auto justify-center hidden sm:flex\",\n                children: \"Seconds \"\n            }, void 0, false, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PoemContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        seconds: seconds\n                    }, void 0, false, {\n                        fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PictureFrame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        seconds: seconds\n                    }, void 0, false, {\n                        fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tthornberryclass/coding2023/calendarapps/calendar-countup/src/components/CalendarContainer.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CalendarContainer, \"DSD+6U7/+C9RuOOsvNPu64EzC7I=\");\n_c = CalendarContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalendarContainer);\nvar _c;\n$RefreshReg$(_c, \"CalendarContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhckNvbnRhaW5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUQ7QUFDaEI7QUFDRTtBQUUzQyxNQUFNTSxvQkFBb0I7O0lBQ3hCLE1BQU1DLE1BQU1OLDZDQUFNQSxDQUFDO0lBQ25CLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJUSxPQUFPQyxVQUFVO0lBRTVELFNBQVNDO1FBQ1BILFdBQVcsSUFBSUMsT0FBT0MsVUFBVTtJQUNsQztJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFVBQVVDLFlBQVlGLGdCQUFnQjtRQUM1QyxPQUFPLFNBQVNHO1lBQ2RDLGNBQWNIO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNENBQTRDO0lBQzVDLHFCQUNFLDhEQUFDSTtRQUNEQyxXQUFVOzswQkFFUiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStEOzs7Ozs7MEJBQzdFLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBdUM7Ozs7OzswQkFDckQsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUErRDs7Ozs7OzBCQUM3RSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYixzREFBYUE7d0JBQUNHLFNBQVNBOzs7Ozs7a0NBQ3hCLDhEQUFDSixxREFBWUE7d0JBQUNJLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0FoQ01GO0tBQUFBO0FBa0NOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXJDb250YWluZXIuanM/Nzk3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQaWN0dXJlRnJhbWUgZnJvbSAnLi9QaWN0dXJlRnJhbWUnXG5pbXBvcnQgUG9lbUNvbnRhaW5lciBmcm9tICcuL1BvZW1Db250YWluZXInXG5cbmNvbnN0IENhbGVuZGFyQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpKTtcblxuICBmdW5jdGlvbiByZWZyZXNoU2Vjb25kcygpIHtcbiAgICBzZXRTZWNvbmRzKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKHJlZnJlc2hTZWNvbmRzLCAxMDAwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vdGhlIHctMS8yIG1ha2VzIHRoaXMgZmxleGlibGUgdG8gYW4gZXh0ZW50XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIGNsYXNzTmFtZT0ndy00LzUgZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi13LTU2NCBib3JkZXItc29saWQgYm9yZGVyLTggcm91bmRlZC14bCBib3JkZXItYmxhY2sgcC0zIGJnLXdoaXRlJz5cblxuICAgICAgPGgyIGNsYXNzTmFtZT0nZmxleCBib3JkZXItYi0yIGJvcmRlci1ibGFjayB3LWF1dG8ganVzdGlmeS1jZW50ZXIgc206aGlkZGVuJz5Dcm93IFNlY29uZHM8L2gyPlxuICAgICAgPGgyIGNsYXNzTmFtZT0ndy1hdXRvIGp1c3RpZnktY2VudGVyIGhpZGRlbiBzbTpmbGV4Jz5Dcm93IDwvaDI+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdib3JkZXItYi0yIGJvcmRlci1ibGFjayB3LWF1dG8ganVzdGlmeS1jZW50ZXIgaGlkZGVuIHNtOmZsZXgnPlNlY29uZHMgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICA8UG9lbUNvbnRhaW5lciBzZWNvbmRzPXtzZWNvbmRzfSAvPlxuICAgICAgICA8UGljdHVyZUZyYW1lIHNlY29uZHM9e3NlY29uZHN9IC8+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhckNvbnRhaW5lciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGljdHVyZUZyYW1lIiwiUG9lbUNvbnRhaW5lciIsIkNhbGVuZGFyQ29udGFpbmVyIiwiUmVmIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJEYXRlIiwiZ2V0U2Vjb25kcyIsInJlZnJlc2hTZWNvbmRzIiwidGltZXJJZCIsInNldEludGVydmFsIiwiY2xlYW51cCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CalendarContainer.js\n"));

/***/ })

});