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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [file, setFile] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setFile(e.target.files[0]);\n        console.log(\"zaa\");\n    };\n    const getImageUrl = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: file.name,\n            type: file.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(file.name);\n        console.log(file.type);\n    };\n    const sendImage = async ()=>{\n        console.log(\"url\", imageUrl);\n        const formdata = new FormData();\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"\".concat(imageUrl), formdata);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageUrl,\n                children: \"getImageUrl\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: sendImage,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"8orHLJxcs9nexEEDZTgZR6qicNY=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFJWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBUUosMkNBQWM7SUFDM0MsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQVFQLDJDQUFjO0lBRW5ELE1BQU1RLGVBQWdCLENBQUNDLElBQVc7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJOLFFBQVFLLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFekJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUdBLE1BQU1DLGNBQWMsT0FBT04sSUFBVztRQUNsQ0EsRUFBRUMsY0FBYztRQUNoQixNQUFNTSxNQUFNLE1BQU1mLGtEQUFVLENBQUMsbUVBQW1FO1lBQzVGaUIsS0FBS2YsS0FBS2dCLElBQUk7WUFDZEMsTUFBTWpCLEtBQUtpQixJQUFJO1FBQ25CO1FBRUEsTUFBTUMsVUFBVUwsSUFBSU0sSUFBSSxDQUFDQyxPQUFPO1FBQ2hDaEIsWUFBWWM7UUFFWlIsUUFBUUMsR0FBRyxDQUFDWCxLQUFLZ0IsSUFBSTtRQUNyQk4sUUFBUUMsR0FBRyxDQUFDWCxLQUFLaUIsSUFBSTtJQUN6QjtJQUNBLE1BQU1JLFlBQVksVUFBVztRQUN6QlgsUUFBUUMsR0FBRyxDQUFDLE9BQU9SO1FBRW5CLE1BQU1tQixXQUFXLElBQUlDO1FBQ3JCLE1BQU1DLFdBQVcsTUFBTTFCLGlEQUFTLENBQUMsR0FBWSxPQUFUSyxXQUFZbUI7SUFFcEQ7SUFDQSxxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQU1aLE1BQUs7Z0JBQU9hLFVBQVV6Qjs7Ozs7OzBCQUU3Qiw4REFBQzBCO2dCQUFRQyxTQUFTcEI7MEJBQWE7Ozs7OzswQkFDL0IsOERBQUNtQjtnQkFBT2QsTUFBSztnQkFBU2UsU0FBU1g7MEJBQVc7Ozs7Ozs7Ozs7OztBQUt0RCxDQUFDO0dBM0N1QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbWFnZS50c3g/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExvZ2luX2RhdGEgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZXMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ3phYScpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGdldEltYWdlVXJsID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3dkZWpidzRvNWQuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L3Bvc3RcIiwge1xuICAgICAgICAgICAga2V5OiBmaWxlLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QganBlZ1VybCA9IHVybC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgc2V0SW1hZ2VVcmwoanBlZ1VybClcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coZmlsZS5uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlLnR5cGUpXG4gICAgfVxuICAgIGNvbnN0IHNlbmRJbWFnZSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcInVybFwiLCBpbWFnZVVybClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7aW1hZ2VVcmx9YCwgZm9ybWRhdGEpXG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5kYWlseS1mYWNlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e2dldEltYWdlVXJsfT5nZXRJbWFnZVVybDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17c2VuZEltYWdlfT5TdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiSW1hZ2VzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbWFnZVVybCIsInVybCIsInBvc3QiLCJrZXkiLCJuYW1lIiwidHlwZSIsImpwZWdVcmwiLCJkYXRhIiwibWVzc2FnZSIsInNlbmRJbWFnZSIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJyZXNwb25zZSIsInB1dCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});