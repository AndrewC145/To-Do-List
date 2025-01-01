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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ \"./src/userInterface.js\");\n/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFunctions */ \"./src/todoFunctions.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_userInterface__WEBPACK_IMPORTED_MODULE_0__.initializeUI)();\r\n  (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_1__.initializeTodoFunctions)();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todoFunctions.js":
/*!******************************!*\
  !*** ./src/todoFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeTodoFunctions: () => (/* binding */ initializeTodoFunctions)\n/* harmony export */ });\nconst addTodoBtn = document.querySelector(\".submit-btn\");\r\nconst titleBox = document.querySelector(\".title-box\");\r\nconst descriptionBox = document.querySelector(\".description-box\");\r\nconst dateBox = document.querySelector(\".date-box\");\r\nconst priorityBox = document.querySelector(\".priority-box\");\r\nconst projectSelection = document.querySelector(\"#project-selection\");\r\n\r\nconst inbox = [];\r\nconst today = [];\r\nconst tomorrow = [];\r\nconst week = [];\r\nconst projects = [];\r\n\r\nclass Project {\r\n  constructor(title, description, date, priority, locationInbox) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.locationInbox = locationInbox;\r\n  }\r\n}\r\n\r\nfunction createTodos() {\r\n  const title = titleBox.value\r\n  const description = descriptionBox.value\r\n  const date = dateBox.value;\r\n  let priority = priorityBox.value;\r\n  const locationInbox = projectSelection.value;\r\n\r\n  if (title === \"\" || priority === \"Priority\") {\r\n    alert(\"Please fill out the proper fields\");\r\n  } else {\r\n    priority = priority.charAt(0).toUpperCase() + priority.slice(1);\r\n    const newTodo = new Project(title, description, date, priority, locationInbox);\r\n    inbox.push(newTodo);\r\n  }\r\n}\r\n\r\nfunction displayTodos() {\r\n  const todoSection = document.querySelector(\".todoSection\");\r\n  todoSection.innerHTML = \"\";\r\n\r\n  inbox.forEach(todo => {\r\n    const todoContainer = document.createElement(\"div\");\r\n    const todoItem = document.createElement(\"div\");\r\n    const todoHeader = document.createElement(\"div\");\r\n    const todoCheckbox = document.createElement(\"input\");\r\n    const todoTitle = document.createElement(\"h3\");\r\n    const todoPriority = document.createElement(\"span\");\r\n    const todoDate = document.createElement(\"h3\");\r\n    const todoBody = document.createElement(\"div\");\r\n    const todoDescription = document.createElement(\"p\");\r\n    const todoIcons = document.createElement(\"div\");\r\n    const todoEdit = document.createElement(\"button\");\r\n    const todoDelete = document.createElement(\"button\");\r\n    const todoEditIcon = document.createElement(\"img\");\r\n    const todoDeleteIcon = document.createElement(\"img\");\r\n\r\n    todoContainer.classList.add(\"todoContainer\");\r\n    todoItem.classList.add(\"todoList\");\r\n    todoHeader.classList.add(\"todoHeader\");\r\n    todoCheckbox.classList.add(\"check\");\r\n    todoTitle.classList.add(\"todoTitle\");\r\n    todoPriority.classList.add(\"todo-priority\");\r\n\r\n    if (todo.priority === \"High\") {\r\n      todoPriority.classList.add(\"high\");\r\n    } else if (todo.priority === \"Medium\") {\r\n      todoPriority.classList.add(\"medium\");\r\n    } else {\r\n      todoPriority.classList.add(\"low\");\r\n    }\r\n\r\n    todoDate.classList.add(\"date\");\r\n    todoBody.classList.add(\"todoBody\");\r\n    todoDescription.classList.add(\"todoDescription\");\r\n    todoIcons.classList.add(\"todoIcons\");\r\n    todoEdit.classList.add(\"todo-edit\");\r\n    todoDelete.classList.add(\"todo-trash\");\r\n\r\n    todoCheckbox.type = \"checkbox\";\r\n    todoTitle.textContent = todo.title;\r\n    todoPriority.textContent = todo.priority;\r\n    todoDate.textContent = todo.date;\r\n    todoDescription.textContent = todo.description;\r\n    todoEditIcon.src = \"../dist/svg/edit-3-svgrepo-com.svg\";\r\n    todoDeleteIcon.src = \"../dist/svg/trash-bin-minimalistic-svgrepo-com.svg\";\r\n\r\n    \r\n    todoEdit.appendChild(todoEditIcon);\r\n    todoDelete.appendChild(todoDeleteIcon);\r\n    todoIcons.appendChild(todoEdit);\r\n    todoIcons.appendChild(todoDelete);\r\n\r\n    todoBody.appendChild(todoDescription);\r\n    todoBody.appendChild(todoIcons);\r\n    \r\n    todoHeader.appendChild(todoCheckbox);\r\n    todoHeader.appendChild(todoTitle);\r\n    todoHeader.appendChild(todoPriority);\r\n    todoHeader.appendChild(todoDate);\r\n\r\n    todoItem.appendChild(todoHeader);\r\n    todoItem.appendChild(todoBody);\r\n    todoContainer.appendChild(todoItem);\r\n\r\n    todoSection.appendChild(todoContainer);\r\n  });\r\n}\r\n\r\nfunction clearInputs() {\r\n  titleBox.value = \"\";\r\n  descriptionBox.value = \"\";\r\n  dateBox.value = \"\";\r\n  priorityBox.value = \"Priority\";\r\n\r\n  document.querySelector(\".add-todo-dialog\").close();\r\n}\r\n\r\nfunction deleteTodos() {\r\n  const checkboxes = document.querySelectorAll(\".check\");\r\n  const todoDeleteBtns = document.querySelectorAll(\".todo-trash\");\r\n  const todoContainers = document.querySelectorAll(\".todoContainer\");\r\n\r\n  checkboxes.forEach((checkbox, index) => {\r\n    checkbox.addEventListener(\"click\", () => {\r\n      if (checkbox.checked) {\r\n        todoContainers[index].remove();\r\n        inbox.splice(index, 1);\r\n      }\r\n    });\r\n  });\r\n\r\n  todoDeleteBtns.forEach((btn, index) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      todoContainers[index].remove();\r\n      inbox.splice(index, 1);\r\n    })\r\n  })\r\n}\r\n\r\n\r\nfunction initializeTodoFunctions() {\r\n  addTodoBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    createTodos();\r\n    displayTodos();\r\n    clearInputs();\r\n    deleteTodos();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/todoFunctions.js?");

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