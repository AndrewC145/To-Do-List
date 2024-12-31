/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ \"./src/userInterface.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.initializeUI)();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\nconst sidebar = document.querySelector(\".sidebar\");\r\nconst addTodoDialog = document.querySelector(\".add-todo-dialog\");\r\nconst projectDialog = document.querySelector(\".add-project-dialog\");\r\n\r\n\r\nfunction toggleSidebar() {\r\n  const mainContainer = document.querySelector(\".main-container\");\r\n  sidebar.classList.toggle(\"hidden\");\r\n  mainContainer.classList.toggle(\"full-width\");\r\n}\r\n\r\nfunction showAddTodoDialog() {\r\n  addTodoDialog.showModal();\r\n}\r\n\r\nfunction closeTodoDialog() {\r\n  addTodoDialog.close();\r\n}\r\n\r\nfunction showProjectDialog() {\r\n  projectDialog.showModal();\r\n}\r\n\r\nfunction closeProjectDialog() {\r\n  projectDialog.close();\r\n}\r\n\r\nfunction initializeUI() {\r\n  const toggleSidebarBtns = document.querySelectorAll(\".toggle-sidebar\");\r\n  const addTodoBtn = document.querySelector(\".add-todo\");\r\n  const cancelTodoBtn = document.querySelector(\".cancel-todo\");\r\n  const addTodoDialog = document.querySelector(\".add-todo-dialog\");\r\n  const addProjectBtn = document.querySelector(\".add-project\");\r\n  const cancelProjectBtn = document.querySelector(\".cancel-project\");\r\n\r\n  toggleSidebarBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", toggleSidebar);\r\n  });\r\n\r\n  addTodoBtn.addEventListener(\"click\", showAddTodoDialog);\r\n  cancelTodoBtn.addEventListener(\"click\", closeTodoDialog);\r\n\r\n  document.addEventListener(\"click\", (event) => {\r\n    if (event.target === addTodoDialog) {\r\n      closeTodoDialog();\r\n    }\r\n    if (event.target === projectDialog) {\r\n      closeProjectDialog();\r\n    }\r\n  });\r\n\r\n  addProjectBtn.addEventListener(\"click\", showProjectDialog);\r\n  cancelProjectBtn.addEventListener(\"click\", closeProjectDialog);\r\n\r\n}\n\n//# sourceURL=webpack:///./src/userInterface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;