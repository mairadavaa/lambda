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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Images() {\n    _s();\n    const [file, setFile] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [photoUrls, setPhotoUrls] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setFile(e.target.files[0]);\n        console.log(\"zaa\");\n    };\n    const getImageUrl = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: file.name,\n            type: file.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(file.name);\n        console.log(file.type);\n    };\n    const sendImage = async ()=>{\n        console.log(\"url\", imageUrl);\n        // const formdata = new FormData()\n        // formdata.append(\"file\", imageUrl)\n        const res = await fetch(imageUrl, {\n            body: file,\n            method: \"PUT\"\n        });\n        console.log(res);\n    };\n    const photoImage = async ()=>{\n        const photos = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/listBucket\");\n        const photoUrls = photos.data.message;\n        setPhotoUrls(photoUrls);\n        console.log(photoUrls);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageUrl,\n                children: \"getImageUrl\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: sendImage,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: photoImage,\n                children: \"Photo\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/lambda/loginAWS/src/pages/image.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"kzDWTP6XDjoVqSYsOUChtQwff78=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFLWCxTQUFTRSxTQUFTOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBUUosMkNBQWM7SUFDM0MsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQVFQLDJDQUFjO0lBQ25ELE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFRVCwyQ0FBYztJQUVyRCxNQUFNVSxlQUFlLENBQUNDLElBQVc7UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJSLFFBQVFPLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFekJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUdBLE1BQU1DLGNBQWMsT0FBT04sSUFBVztRQUNsQ0EsRUFBRUMsY0FBYztRQUNoQixNQUFNTSxNQUFNLE1BQU1qQixrREFBVSxDQUFDLG1FQUFtRTtZQUM1Rm1CLEtBQUtqQixLQUFLa0IsSUFBSTtZQUNkQyxNQUFNbkIsS0FBS21CLElBQUk7UUFDbkI7UUFFQSxNQUFNQyxVQUFVTCxJQUFJTSxJQUFJLENBQUNDLE9BQU87UUFDaENsQixZQUFZZ0I7UUFFWlIsUUFBUUMsR0FBRyxDQUFDYixLQUFLa0IsSUFBSTtRQUNyQk4sUUFBUUMsR0FBRyxDQUFDYixLQUFLbUIsSUFBSTtJQUN6QjtJQUNBLE1BQU1JLFlBQVksVUFBWTtRQUMxQlgsUUFBUUMsR0FBRyxDQUFDLE9BQU9WO1FBRW5CLGtDQUFrQztRQUNsQyxvQ0FBb0M7UUFDcEMsTUFBTXFCLE1BQU0sTUFBTUMsTUFBTXRCLFVBQVU7WUFBRXVCLE1BQU0xQjtZQUFNMkIsUUFBUTtRQUFNO1FBQzlEZixRQUFRQyxHQUFHLENBQUNXO0lBSWhCO0lBQ0EsTUFBTUksYUFBYSxVQUFZO1FBQzNCLE1BQU1DLFNBQVMsTUFBTS9CLGlEQUFTLENBQUU7UUFDaEMsTUFBTU8sWUFBWXdCLE9BQU9SLElBQUksQ0FBQ0MsT0FBTztRQUNyQ2hCLGFBQWFEO1FBRWJPLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDaEI7SUFDQSxxQkFDSSw4REFBQzBCOzswQkFDRyw4REFBQ0M7Z0JBQU1DLFNBQVE7MEJBQVE7Ozs7OzswQkFDdkIsOERBQUNDO2dCQUFNZixNQUFLO2dCQUFPZ0IsVUFBVTVCOzs7Ozs7MEJBRTdCLDhEQUFDNkI7Z0JBQU9DLFNBQVN2QjswQkFBYTs7Ozs7OzBCQUM5Qiw4REFBQ3NCO2dCQUFPakIsTUFBSztnQkFBU2tCLFNBQVNkOzBCQUFXOzs7Ozs7MEJBQzFDLDhEQUFDYTtnQkFBT0MsU0FBU1Q7MEJBQVk7Ozs7Ozs7Ozs7OztBQW9CekMsQ0FBQztHQXZFdUI3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW1hZ2UudHN4P2I0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBMb2dpbl9kYXRhIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZXMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcbiAgICBjb25zdCBbcGhvdG9VcmxzLCBzZXRQaG90b1VybHNdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCd6YWEnKVxuICAgIH1cblxuXG4gICAgY29uc3QgZ2V0SW1hZ2VVcmwgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vd2RlamJ3NG81ZC5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvcG9zdFwiLCB7XG4gICAgICAgICAgICBrZXk6IGZpbGUubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBqcGVnVXJsID0gdXJsLmRhdGEubWVzc2FnZVxuICAgICAgICBzZXRJbWFnZVVybChqcGVnVXJsKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUubmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coZmlsZS50eXBlKVxuICAgIH1cbiAgICBjb25zdCBzZW5kSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXJsXCIsIGltYWdlVXJsKVxuXG4gICAgICAgIC8vIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgLy8gZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZVVybClcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwsIHsgYm9keTogZmlsZSwgbWV0aG9kOiBcIlBVVFwiIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuXG5cbiAgICB9XG4gICAgY29uc3QgcGhvdG9JbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGhvdG9zID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3dkZWpidzRvNWQuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L2xpc3RCdWNrZXRgKVxuICAgICAgICBjb25zdCBwaG90b1VybHMgPSBwaG90b3MuZGF0YS5tZXNzYWdlXG4gICAgICAgIHNldFBob3RvVXJscyhwaG90b1VybHMpXG5cbiAgICAgICAgY29uc29sZS5sb2cocGhvdG9VcmxzKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdFwiPmRhaWx5LWZhY2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRJbWFnZVVybH0+Z2V0SW1hZ2VVcmw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3NlbmRJbWFnZX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Bob3RvSW1hZ2V9PlBob3RvPC9idXR0b24+XG4gICAgICAgICAgICB7Lyoge3Bob3RvVXJscz8ubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSB7ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfSl9ICovfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiSW1hZ2VzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJwaG90b1VybHMiLCJzZXRQaG90b1VybHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbWFnZVVybCIsInVybCIsInBvc3QiLCJrZXkiLCJuYW1lIiwidHlwZSIsImpwZWdVcmwiLCJkYXRhIiwibWVzc2FnZSIsInNlbmRJbWFnZSIsInJlcyIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsInBob3RvSW1hZ2UiLCJwaG90b3MiLCJnZXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n"));

/***/ })

});