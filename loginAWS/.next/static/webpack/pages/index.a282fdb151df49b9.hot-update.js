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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setImage(e.target.files[0]);\n        console.log(image, \"zaa\");\n    };\n    const getUserAccount = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: image.name,\n            type: image.type\n        });\n        console.log(url.data.message);\n        console.log(image.name);\n        console.log(image.type);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: getUserAccount,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: get,\n                children: \"Get Image url\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"rw6qng99rwBYv/BMRhLONeRFue4=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFJWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBUUosMkNBQWM7SUFFN0MsTUFBTU0sZUFBZ0IsQ0FBQ0MsSUFBVztRQUM5QkEsRUFBRUMsY0FBYztRQUNoQkosU0FBU0csRUFBRUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUUxQkMsUUFBUUMsR0FBRyxDQUFDVCxPQUFNO0lBQ3RCO0lBR0EsTUFBTVUsaUJBQWlCLE9BQU9OLElBQVc7UUFDckNBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTU0sTUFBTSxNQUFNYixrREFBVSxDQUFDLG1FQUFtRTtZQUM1RmUsS0FBS2IsTUFBTWMsSUFBSTtZQUNmQyxNQUFNZixNQUFNZSxJQUFJO1FBQ3BCO1FBQ0FQLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSUssSUFBSSxDQUFDQyxPQUFPO1FBQzVCVCxRQUFRQyxHQUFHLENBQUNULE1BQU1jLElBQUk7UUFDdEJOLFFBQVFDLEdBQUcsQ0FBQ1QsTUFBTWUsSUFBSTtJQUMxQjtJQUNBLHFCQUNJLDhEQUFDRzs7MEJBQ0csOERBQUNDO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFBTU4sTUFBSztnQkFBT08sVUFBVW5COzs7Ozs7MEJBRTdCLDhEQUFDb0I7Z0JBQU9SLE1BQUs7Z0JBQVNTLFNBQVNkOzBCQUFnQjs7Ozs7OzBCQUMvQyw4REFBQ2E7Z0JBQU9DLFNBQVNDOzBCQUFLOzs7Ozs7Ozs7Ozs7QUFLbEMsQ0FBQztHQWhDdUIxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW1hZ2UudHN4P2I0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBMb2dpbl9kYXRhIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VzKCkge1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSwnemFhJylcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgZ2V0VXNlckFjY291bnQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vd2RlamJ3NG81ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvcG9zdFwiLCB7XG4gICAgICAgICAgICBrZXk6IGltYWdlLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBpbWFnZS50eXBlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh1cmwuZGF0YS5tZXNzYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS50eXBlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPmRhaWx5LWZhY2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17Z2V0VXNlckFjY291bnR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXR9PkdldCBJbWFnZSB1cmw8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiSW1hZ2VzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckFjY291bnQiLCJ1cmwiLCJwb3N0Iiwia2V5IiwibmFtZSIsInR5cGUiLCJkYXRhIiwibWVzc2FnZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});