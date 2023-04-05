/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5hd3MvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzJmZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/image.tsx":
/*!*****************************!*\
  !*** ./src/pages/image.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Images)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Images() {\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const [imageUrl, setImageUrl] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setImage(e.target.files[0]);\n        console.log(image, \"zaa\");\n    };\n    const getUserAccount = async (e)=>{\n        e.preventDefault();\n        const url = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://wdejbw4o5d.execute-api.us-east-1.amazonaws.com/dev/post\", {\n            key: image.name,\n            type: image.type\n        });\n        const jpegUrl = url.data.message;\n        setImageUrl(jpegUrl);\n        console.log(image.name);\n        console.log(image.type);\n    };\n    const getImageurl = async ()=>{\n        console.log(\"url\", imageUrl);\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(`${imageUrl}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"first\",\n                children: \"daily-face\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: getUserAccount,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getImageurl,\n                children: \"Get Image url\"\n            }, void 0, false, {\n                fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/image.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUlYLFNBQVNFLFNBQVM7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQVFKLDJDQUFjO0lBQzdDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFRUCwyQ0FBYztJQUVuRCxNQUFNUSxlQUFnQixDQUFDQyxJQUFXO1FBQzlCQSxFQUFFQyxjQUFjO1FBQ2hCTixTQUFTSyxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBRTFCQyxRQUFRQyxHQUFHLENBQUNYLE9BQU07SUFDdEI7SUFHQSxNQUFNWSxpQkFBaUIsT0FBT04sSUFBVztRQUNyQ0EsRUFBRUMsY0FBYztRQUNoQixNQUFNTSxNQUFNLE1BQU1mLGtEQUFVLENBQUMsbUVBQW1FO1lBQzVGaUIsS0FBS2YsTUFBTWdCLElBQUk7WUFDZkMsTUFBTWpCLE1BQU1pQixJQUFJO1FBQ3BCO1FBRUEsTUFBTUMsVUFBVUwsSUFBSU0sSUFBSSxDQUFDQyxPQUFPO1FBQ2hDaEIsWUFBWWM7UUFFWlIsUUFBUUMsR0FBRyxDQUFDWCxNQUFNZ0IsSUFBSTtRQUN0Qk4sUUFBUUMsR0FBRyxDQUFDWCxNQUFNaUIsSUFBSTtJQUMxQjtJQUNBLE1BQU1JLGNBQWMsVUFBVztRQUMzQlgsUUFBUUMsR0FBRyxDQUFDLE9BQU9SO1FBQ25CLE1BQU1tQixXQUFXLE1BQU14QixpREFBUyxDQUFDLENBQUMsRUFBRUssU0FBUyxDQUFDO0lBRWxEO0lBQ0EscUJBQ0ksOERBQUNxQjs7MEJBQ0csOERBQUNDO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFBTVYsTUFBSztnQkFBT1csVUFBVXZCOzs7Ozs7MEJBRTdCLDhEQUFDd0I7Z0JBQU9aLE1BQUs7Z0JBQVNhLFNBQVNsQjswQkFBZ0I7Ozs7OzswQkFDL0MsOERBQUNpQjtnQkFBT0MsU0FBU1Q7MEJBQWE7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9naW5hd3MvLi9zcmMvcGFnZXMvaW1hZ2UudHN4P2I0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBMb2dpbl9kYXRhIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VzKCkge1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdOiBhbnkgPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF06IGFueSA9IFJlYWN0LnVzZVN0YXRlKClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICAoZTogYW55KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSlcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGltYWdlLCd6YWEnKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBnZXRVc2VyQWNjb3VudCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly93ZGVqYnc0bzVkLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9wb3N0XCIsIHtcbiAgICAgICAgICAgIGtleTogaW1hZ2UubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGltYWdlLnR5cGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QganBlZ1VybCA9IHVybC5kYXRhLm1lc3NhZ2VcbiAgICAgICAgc2V0SW1hZ2VVcmwoanBlZ1VybClcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UubmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UudHlwZSlcbiAgICB9XG4gICAgY29uc3QgZ2V0SW1hZ2V1cmwgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cmxcIiwgaW1hZ2VVcmwpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke2ltYWdlVXJsfWApXG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RcIj5kYWlseS1mYWNlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2dldFVzZXJBY2NvdW50fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0SW1hZ2V1cmx9PkdldCBJbWFnZSB1cmw8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiSW1hZ2VzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJBY2NvdW50IiwidXJsIiwicG9zdCIsImtleSIsIm5hbWUiLCJ0eXBlIiwianBlZ1VybCIsImRhdGEiLCJtZXNzYWdlIiwiZ2V0SW1hZ2V1cmwiLCJyZXNwb25zZSIsInB1dCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/image.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ \"./src/pages/image.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_image__WEBPACK_IMPORTED_MODULE_1__]);\n_image__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/leap3-maira/Desktop/loginAWS/src/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFKMkM7QUFFckI7QUFJYixTQUFTRyxPQUFPO0lBQzdCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSiwwRUFBZ0I7a0JBQzFCLDRFQUFDQyw4Q0FBTUE7Ozs7Ozs7Ozs7QUFLakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ2luYXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhvbWVzIGZyb20gJy4vaG9tZSdcbmltcG9ydCBJbWFnZXMgZnJvbSAnLi9pbWFnZSdcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2VzLz5cbiAgICAgXG4gICAgICAgICB7LyogPEhvbWVzLz4gKi99XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiaW50ZXIiLCJzdHlsZXMiLCJJbWFnZXMiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();