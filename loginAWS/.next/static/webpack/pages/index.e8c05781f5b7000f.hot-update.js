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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setImage(e.target.files[0]);\n        console.log(image, \"zaa\");\n    };\n    const getUserAccount = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: image.name,\n            type: image.type\n        });\n        const imageUrl1 = url.data.message;\n        console.log(imageUrl1);\n        console.log(image.name);\n        console.log(image.type);\n    };\n    const getImageurl = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(imageUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: getUserAccount,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageurl,\n                children: \"Get Image url\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"rw6qng99rwBYv/BMRhLONeRFue4=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFJWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBUUosMkNBQWM7SUFFN0MsTUFBTU0sZUFBZ0IsQ0FBQ0MsSUFBVztRQUM5QkEsRUFBRUMsY0FBYztRQUNoQkosU0FBU0csRUFBRUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUUxQkMsUUFBUUMsR0FBRyxDQUFDVCxPQUFNO0lBQ3RCO0lBR0EsTUFBTVUsaUJBQWlCLE9BQU9OLElBQVc7UUFDckNBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTU0sTUFBTSxNQUFNYixrREFBVSxDQUFDLG1FQUFtRTtZQUM1RmUsS0FBS2IsTUFBTWMsSUFBSTtZQUNmQyxNQUFNZixNQUFNZSxJQUFJO1FBQ3BCO1FBRUEsTUFBTUMsWUFBV0wsSUFBSU0sSUFBSSxDQUFDQyxPQUFPO1FBQ2pDVixRQUFRQyxHQUFHLENBQUNPO1FBQ1pSLFFBQVFDLEdBQUcsQ0FBQ1QsTUFBTWMsSUFBSTtRQUN0Qk4sUUFBUUMsR0FBRyxDQUFDVCxNQUFNZSxJQUFJO0lBQzFCO0lBQ0EsTUFBTUksY0FBYyxVQUFXO1FBQzNCLE1BQU1DLFdBQVcsTUFBTXRCLGlEQUFTLENBQUNrQjtJQUVyQztJQUNBLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNDO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFBTVYsTUFBSztnQkFBT1csVUFBVXZCOzs7Ozs7MEJBRTdCLDhEQUFDd0I7Z0JBQU9aLE1BQUs7Z0JBQVNhLFNBQVNsQjswQkFBZ0I7Ozs7OzswQkFDL0MsOERBQUNpQjtnQkFBT0MsU0FBU1Q7MEJBQWE7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0dBdEN1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbWFnZS50c3g/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExvZ2luX2RhdGEgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZXMoKSB7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlLCd6YWEnKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBnZXRVc2VyQWNjb3VudCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly93ZGVqYnc0bzVkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9wb3N0XCIsIHtcbiAgICAgICAgICAgIGtleTogaW1hZ2UubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGltYWdlLnR5cGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSB1cmwuZGF0YS5tZXNzYWdlXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS50eXBlKVxuICAgIH1cbiAgICBjb25zdCBnZXRJbWFnZXVybCA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChpbWFnZVVybClcblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPmRhaWx5LWZhY2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17Z2V0VXNlckFjY291bnR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRJbWFnZXVybH0+R2V0IEltYWdlIHVybDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJJbWFnZXMiLCJpbWFnZSIsInNldEltYWdlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyQWNjb3VudCIsInVybCIsInBvc3QiLCJrZXkiLCJuYW1lIiwidHlwZSIsImltYWdlVXJsIiwiZGF0YSIsIm1lc3NhZ2UiLCJnZXRJbWFnZXVybCIsInJlc3BvbnNlIiwicHV0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});