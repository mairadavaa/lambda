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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setImage(e.target.files[0]);\n        console.log(image, \"zaa\");\n    };\n    const getUserAccount = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: image.name,\n            type: image.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(image.name);\n        console.log(image.type);\n    };\n    const getImageurl = async ()=>{\n        console.log(\"url\", imageUrl);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"\".concat(im));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: getUserAccount,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageurl,\n                children: \"Get Image url\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"uXZn/RofnNv4JulEplHnkc8NJ5M=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFJWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBUUosMkNBQWM7SUFDN0MsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQVFQLDJDQUFjO0lBRW5ELE1BQU1RLGVBQWdCLENBQUNDLElBQVc7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJOLFNBQVNLLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFMUJDLFFBQVFDLEdBQUcsQ0FBQ1gsT0FBTTtJQUN0QjtJQUdBLE1BQU1ZLGlCQUFpQixPQUFPTixJQUFXO1FBQ3JDQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1NLE1BQU0sTUFBTWYsa0RBQVUsQ0FBQyxtRUFBbUU7WUFDNUZpQixLQUFLZixNQUFNZ0IsSUFBSTtZQUNmQyxNQUFNakIsTUFBTWlCLElBQUk7UUFDcEI7UUFFQSxNQUFNQyxVQUFVTCxJQUFJTSxJQUFJLENBQUNDLE9BQU87UUFDaENoQixZQUFZYztRQUVaUixRQUFRQyxHQUFHLENBQUNYLE1BQU1nQixJQUFJO1FBQ3RCTixRQUFRQyxHQUFHLENBQUNYLE1BQU1pQixJQUFJO0lBQzFCO0lBQ0EsTUFBTUksY0FBYyxVQUFXO1FBQzNCWCxRQUFRQyxHQUFHLENBQUMsT0FBT1I7UUFDbkIsTUFBTW1CLFdBQVcsTUFBTXhCLGlEQUFTLENBQUMsR0FBTSxPQUFIMEI7SUFFeEM7SUFDQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQU1YLE1BQUs7Z0JBQU9ZLFVBQVV4Qjs7Ozs7OzBCQUU3Qiw4REFBQ3lCO2dCQUFPYixNQUFLO2dCQUFTYyxTQUFTbkI7MEJBQWdCOzs7Ozs7MEJBQy9DLDhEQUFDa0I7Z0JBQU9DLFNBQVNWOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFLMUMsQ0FBQztHQXpDdUJ0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW1hZ2UudHN4P2I0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBMb2dpbl9kYXRhIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VzKCkge1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlLCd6YWEnKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBnZXRVc2VyQWNjb3VudCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly93ZGVqYnc0bzVkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9wb3N0XCIsIHtcbiAgICAgICAgICAgIGtleTogaW1hZ2UubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGltYWdlLnR5cGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QganBlZ1VybCA9IHVybC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgc2V0SW1hZ2VVcmwoanBlZ1VybClcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UubmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UudHlwZSlcbiAgICB9XG4gICAgY29uc3QgZ2V0SW1hZ2V1cmwgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cmxcIiwgaW1hZ2VVcmwpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke2ltfWApXG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5kYWlseS1mYWNlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2dldFVzZXJBY2NvdW50fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0SW1hZ2V1cmx9PkdldCBJbWFnZSB1cmw8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiSW1hZ2VzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJBY2NvdW50IiwidXJsIiwicG9zdCIsImtleSIsIm5hbWUiLCJ0eXBlIiwianBlZ1VybCIsImRhdGEiLCJtZXNzYWdlIiwiZ2V0SW1hZ2V1cmwiLCJyZXNwb25zZSIsInB1dCIsImltIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});