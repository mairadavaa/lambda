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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [file, setFile] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setFile(e.target.files[0]);\n        console.log(\"zaa\");\n    };\n    const getImageUrl = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: file.name,\n            type: file.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(file.name);\n        console.log(file.type);\n    };\n    const sendImage = async ()=>{\n        console.log(\"url\", imageUrl);\n        // const formdata = new FormData()\n        // formdata.append(\"file\", imageUrl)\n        const res = await fetch(imageUrl, {\n            body: file,\n            method: \"PUT\"\n        });\n        console.log(res);\n    };\n    const photoImage = async ()=>{\n        const photos = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\");\n        console.log(photos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageUrl,\n                children: \"getImageUrl\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: sendImage,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: photoImage,\n                children: \"Photo\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"8orHLJxcs9nexEEDZTgZR6qicNY=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFLWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBUUosMkNBQWM7SUFDM0MsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQVFQLDJDQUFjO0lBRW5ELE1BQU1RLGVBQWUsQ0FBQ0MsSUFBVztRQUM3QkEsRUFBRUMsY0FBYztRQUNoQk4sUUFBUUssRUFBRUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUV6QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBR0EsTUFBTUMsY0FBYyxPQUFPTixJQUFXO1FBQ2xDQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1NLE1BQU0sTUFBTWYsa0RBQVUsQ0FBQyxtRUFBbUU7WUFDNUZpQixLQUFLZixLQUFLZ0IsSUFBSTtZQUNkQyxNQUFNakIsS0FBS2lCLElBQUk7UUFDbkI7UUFFQSxNQUFNQyxVQUFVTCxJQUFJTSxJQUFJLENBQUNDLE9BQU87UUFDaENoQixZQUFZYztRQUVaUixRQUFRQyxHQUFHLENBQUNYLEtBQUtnQixJQUFJO1FBQ3JCTixRQUFRQyxHQUFHLENBQUNYLEtBQUtpQixJQUFJO0lBQ3pCO0lBQ0EsTUFBTUksWUFBWSxVQUFZO1FBQzFCWCxRQUFRQyxHQUFHLENBQUMsT0FBT1I7UUFFbkIsa0NBQWtDO1FBQ2xDLG9DQUFvQztRQUNwQyxNQUFNbUIsTUFBTSxNQUFNQyxNQUFNcEIsVUFBVTtZQUFFcUIsTUFBTXhCO1lBQU15QixRQUFRO1FBQU07UUFDOURmLFFBQVFDLEdBQUcsQ0FBQ1c7SUFJaEI7SUFDQSxNQUFNSSxhQUFhLFVBQVc7UUFDeEIsTUFBTUMsU0FBUSxNQUFNN0IsaURBQVMsQ0FBQztRQUM5QlksUUFBUUMsR0FBRyxDQUFDZ0I7SUFDbEI7SUFDQSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBUTs7Ozs7OzBCQUN2Qiw4REFBQ0M7Z0JBQU1mLE1BQUs7Z0JBQU9nQixVQUFVNUI7Ozs7OzswQkFFN0IsOERBQUM2QjtnQkFBT0MsU0FBU3ZCOzBCQUFhOzs7Ozs7MEJBQzlCLDhEQUFDc0I7Z0JBQU9qQixNQUFLO2dCQUFTa0IsU0FBU2Q7MEJBQVc7Ozs7OzswQkFDMUMsOERBQUNhO2dCQUFPQyxTQUFTVDswQkFBWTs7Ozs7Ozs7Ozs7O0FBa0J6QyxDQUFDO0dBakV1QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbWFnZS50c3g/YjRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IExvZ2luX2RhdGEgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlcygpIHtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcbiAgICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXTogYW55ID0gUmVhY3QudXNlU3RhdGUoKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSlcblxuICAgICAgICBjb25zb2xlLmxvZygnemFhJylcbiAgICB9XG5cblxuICAgIGNvbnN0IGdldEltYWdlVXJsID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3dkZWpidzRvNWQuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L3Bvc3RcIiwge1xuICAgICAgICAgICAga2V5OiBmaWxlLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QganBlZ1VybCA9IHVybC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgc2V0SW1hZ2VVcmwoanBlZ1VybClcblxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlLm5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUudHlwZSlcbiAgICB9XG4gICAgY29uc3Qgc2VuZEltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVybFwiLCBpbWFnZVVybClcblxuICAgICAgICAvLyBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIC8vIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2VVcmwpXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGltYWdlVXJsLCB7IGJvZHk6IGZpbGUsIG1ldGhvZDogXCJQVVRcIiB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG5cblxuXG4gICAgfVxuICAgIGNvbnN0IHBob3RvSW1hZ2UgPSBhc3luYyAoKSA9PntcbiAgICAgICAgICBjb25zdCBwaG90b3M9IGF3YWl0IGF4aW9zLmdldChcIlwiKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHBob3RvcylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5kYWlseS1mYWNlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0SW1hZ2VVcmx9PmdldEltYWdlVXJsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtzZW5kSW1hZ2V9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwaG90b0ltYWdlfT5QaG90bzwvYnV0dG9uPlxuICAgICAgICAgICB7LyogeyAgcGhvdG9zLm1hcCgoZWwuaW5kZXgpPT57XG4gICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0gYCR7ZWx9YFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDY4cHgpIDEwMHZ3LFxuICAgICAgICAgICAgICAgICAgICAgICAgIChtYXgtd2lkdGg6IDEyMDBweCkgNTB2dyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAzM3Z3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKVxuICAgICAgICAgICB9KX0gKi99XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJJbWFnZXMiLCJmaWxlIiwic2V0RmlsZSIsInVzZVN0YXRlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImdldEltYWdlVXJsIiwidXJsIiwicG9zdCIsImtleSIsIm5hbWUiLCJ0eXBlIiwianBlZ1VybCIsImRhdGEiLCJtZXNzYWdlIiwic2VuZEltYWdlIiwicmVzIiwiZmV0Y2giLCJib2R5IiwibWV0aG9kIiwicGhvdG9JbWFnZSIsInBob3RvcyIsImdldCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});