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

/***/ "./src/pages/image.tsx":
/*!*****************************!*\
  !*** ./src/pages/image.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Images() {\n    _s();\n    const { data , setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__.Login_data);\n    const handleChange = (e)=>{\n        setData({\n            ...data,\n            [e.target.name]: e.target.value\n        });\n    };\n    function getUserAccount(e) {\n        console.log(data);\n        e.preventDefault();\n        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://vivc8rg09c.execute-api.us-east-1.amazonaws.com/dev/post\", data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: getUserAccount,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"image\",\n                name: \"key\",\n                onChange: (e)=>handleChange(e)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"image/type\",\n                onChange: (e)=>handleChange(e)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \"description\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"description\",\n                type: \"text\",\n                onChange: (e)=>handleChange(e)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \" email\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                type: \"email\",\n                onChange: (e)=>handleChange(e)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"last\",\n                children: \" email\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                type: \"email\",\n                onChange: (e)=>handleChange(e)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/time\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 29,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"/9Uve0IzYqEu/Tc0Slo2mcDuu7U=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFDRztBQUNtQjtBQUNiO0FBQ3BCLFNBQVNLLFNBQVM7O0lBQy9CLE1BQU0sRUFBQ0MsS0FBSSxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsaURBQVVBLENBQUNELHdEQUFVQTtJQUU5QyxNQUFNSyxlQUFlLENBQUNDLElBQVc7UUFDL0JGLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ0csRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFFckQ7SUFDQSxTQUFTQyxlQUFlSixDQUFNLEVBQUU7UUFDOUJLLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWkcsRUFBRU8sY0FBYztRQUNoQixPQUFPZixrREFBVSxDQUFFLG1FQUFrRUs7SUFDdkY7SUFDRSxxQkFDSSw4REFBQ1k7UUFBS0MsVUFBVU47OzBCQUNoQiw4REFBQ087Z0JBQU1DLFNBQVE7MEJBQVE7Ozs7OzswQkFDdkIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFRWixNQUFLO2dCQUFNYSxVQUFVLENBQUNmLElBQU1ELGFBQWFDOzs7Ozs7MEJBQzdELDhEQUFDYTtnQkFBTUMsTUFBSztnQkFBT1osTUFBSztnQkFBYWEsVUFBVSxDQUFDZixJQUFNRCxhQUFhQzs7Ozs7OzBCQUNuRSw4REFBQ1c7Z0JBQU1DLFNBQVE7MEJBQU87Ozs7OzswQkFDdEIsOERBQUNDO2dCQUFNWCxNQUFLO2dCQUFjWSxNQUFLO2dCQUFPQyxVQUFVLENBQUNmLElBQU1ELGFBQWFDOzs7Ozs7MEJBQ3BFLDhEQUFDVztnQkFBTUMsU0FBUTswQkFBTzs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQU1YLE1BQUs7Z0JBQVFZLE1BQUs7Z0JBQVFDLFVBQVUsQ0FBQ2YsSUFBTUQsYUFBYUM7Ozs7OzswQkFDL0QsOERBQUNXO2dCQUFNQyxTQUFROzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBTVgsTUFBSztnQkFBUVksTUFBSztnQkFBUUMsVUFBVSxDQUFDZixJQUFNRCxhQUFhQzs7Ozs7OzBCQUNsRSw4REFBQ1Asa0RBQUlBO2dCQUFDdUIsTUFBSzswQkFFUiw0RUFBQ0M7b0JBQU9ILE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCLENBQUM7R0E3QnVCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlLnRzeD9iNGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTG9naW5fZGF0YSB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlcygpIHtcbiAgY29uc3Qge2RhdGEsIHNldERhdGEgfSA9IHVzZUNvbnRleHQoTG9naW5fZGF0YSlcbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgXG4gIH1cbiAgZnVuY3Rpb24gZ2V0VXNlckFjY291bnQoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHBzOi8vdml2YzhyZzA5Yy5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvcG9zdGAsIGRhdGEgKTtcbiAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2dldFVzZXJBY2NvdW50fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPmRhaWx5LWZhY2U8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImltYWdlXCIgbmFtZT1cImtleVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW1hZ2UvdHlwZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj5kZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RcIj4gZW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPiBlbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gLz5cbiAgICAgPExpbmsgaHJlZj1cIi90aW1lXCI+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgIDwvTGluaz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJMaW5rIiwiTG9naW5fZGF0YSIsInVzZUNvbnRleHQiLCJJbWFnZXMiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJnZXRVc2VyQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});