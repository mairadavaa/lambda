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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setImage(e.target.files[0]);\n        console.log(image, \"zaa\");\n    };\n    const getUserAccount = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: image.name,\n            type: image.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(jpegUrl);\n        console.log(image.name);\n        console.log(image.type);\n    };\n    const getImageurl = async ()=>{\n        console.log(\"url\");\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(imageUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: getUserAccount,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageurl,\n                children: \"Get Image url\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"uXZn/RofnNv4JulEplHnkc8NJ5M=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFJWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBUUosMkNBQWM7SUFDN0MsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQVFQLDJDQUFjO0lBRW5ELE1BQU1RLGVBQWdCLENBQUNDLElBQVc7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJOLFNBQVNLLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFMUJDLFFBQVFDLEdBQUcsQ0FBQ1gsT0FBTTtJQUN0QjtJQUdBLE1BQU1ZLGlCQUFpQixPQUFPTixJQUFXO1FBQ3JDQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1NLE1BQU0sTUFBTWYsa0RBQVUsQ0FBQyxtRUFBbUU7WUFDNUZpQixLQUFLZixNQUFNZ0IsSUFBSTtZQUNmQyxNQUFNakIsTUFBTWlCLElBQUk7UUFDcEI7UUFFQSxNQUFNQyxVQUFVTCxJQUFJTSxJQUFJLENBQUNDLE9BQU87UUFDaENoQixZQUFZYztRQUNaUixRQUFRQyxHQUFHLENBQUNPO1FBQ1pSLFFBQVFDLEdBQUcsQ0FBQ1gsTUFBTWdCLElBQUk7UUFDdEJOLFFBQVFDLEdBQUcsQ0FBQ1gsTUFBTWlCLElBQUk7SUFDMUI7SUFDQSxNQUFNSSxjQUFjLFVBQVc7UUFDM0JYLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1XLFdBQVcsTUFBTXhCLGlEQUFTLENBQUNLO0lBRXJDO0lBQ0EscUJBQ0ksOERBQUNxQjs7MEJBQ0csOERBQUNDO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFBTVYsTUFBSztnQkFBT1csVUFBVXZCOzs7Ozs7MEJBRTdCLDhEQUFDd0I7Z0JBQU9aLE1BQUs7Z0JBQVNhLFNBQVNsQjswQkFBZ0I7Ozs7OzswQkFDL0MsOERBQUNpQjtnQkFBT0MsU0FBU1Q7MEJBQWE7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0dBekN1QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbWFnZS50c3g/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExvZ2luX2RhdGEgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZXMoKSB7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcbiAgICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXTogYW55ID0gUmVhY3QudXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gIChlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UsJ3phYScpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGdldFVzZXJBY2NvdW50ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3dkZWpidzRvNWQuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L3Bvc3RcIiwge1xuICAgICAgICAgICAga2V5OiBpbWFnZS5uYW1lLFxuICAgICAgICAgICAgdHlwZTogaW1hZ2UudHlwZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBqcGVnVXJsID0gdXJsLmRhdGEubWVzc2FnZVxuICAgICAgICBzZXRJbWFnZVVybChqcGVnVXJsKVxuICAgICAgICBjb25zb2xlLmxvZyhqcGVnVXJsKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS5uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZS50eXBlKVxuICAgIH1cbiAgICBjb25zdCBnZXRJbWFnZXVybCA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcInVybFwiLCApXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGltYWdlVXJsKVxuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+ZGFpbHktZmFjZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtnZXRVc2VyQWNjb3VudH0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEltYWdldXJsfT5HZXQgSW1hZ2UgdXJsPC9idXR0b24+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkltYWdlcyIsImltYWdlIiwic2V0SW1hZ2UiLCJ1c2VTdGF0ZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyQWNjb3VudCIsInVybCIsInBvc3QiLCJrZXkiLCJuYW1lIiwidHlwZSIsImpwZWdVcmwiLCJkYXRhIiwibWVzc2FnZSIsImdldEltYWdldXJsIiwicmVzcG9uc2UiLCJwdXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});