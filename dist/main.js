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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInputs: () => (/* binding */ clearInputs),\n/* harmony export */   initializeTodoFunctions: () => (/* binding */ initializeTodoFunctions)\n/* harmony export */ });\nconst addTodoBtn = document.querySelector(\".submit-btn\");\r\nconst titleBox = document.querySelector(\".title-box\");\r\nconst descriptionBox = document.querySelector(\".description-box\");\r\nconst dateBox = document.querySelector(\".date-box\");\r\nconst priorityBox = document.querySelector(\".priority-box\");\r\nconst projectSelection = document.querySelector(\"#project-selection\");\r\n\r\nconst inbox = [];\r\nconst today = [];\r\nconst tomorrow = [];\r\nconst week = [];\r\nconst projects = [];\r\n\r\nclass Project {\r\n  constructor(title, description, date, priority, locationInbox) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.locationInbox = locationInbox;\r\n  }\r\n}\r\n\r\nfunction formatDate(date) {\r\n  const year = date.getFullYear();\r\n  const month = String(date.getMonth() + 1).padStart(2, \"0\");\r\n  const day = String(date.getDate()).padStart(2, \"0\");\r\n  return `${year}-${month}-${day}`\r\n}\r\n\r\nfunction createTodos() {\r\n  const title = titleBox.value\r\n  const description = descriptionBox.value\r\n  const date = dateBox.value;\r\n  let priority = priorityBox.value;\r\n  const locationInbox = projectSelection.value;\r\n\r\n  let todaysDate = formatDate(new Date());\r\n  let tomorrowsDate = formatDate(new Date(Date.now() + 86400000));\r\n\r\n  if (title === \"\" || priority === \"Priority\" || !date) {\r\n    alert(\"Please fill out the required fields\");\r\n    return;\r\n  }\r\n\r\n  priority = priority.charAt(0).toUpperCase() + priority.slice(1);\r\n  const newTodo = new Project(title, description, date, priority, locationInbox);\r\n  inbox.push(newTodo);\r\n\r\n\r\n  if (date === todaysDate) {\r\n    today.push(newTodo);\r\n  } else if (date === tomorrowsDate) {\r\n    tomorrow.push(newTodo);\r\n  }\r\n\r\n  displayTodos(inbox);\r\n}\r\n\r\n\r\nfunction displayTodos(todos) {\r\n  const todoSection = document.querySelector(\".todoSection\");\r\n  todoSection.innerHTML = \"\";\r\n\r\n  if (!todos || todos.length === 0) {\r\n    todoSection.innerHTML = \"<h2>No todos to display</h2>\";\r\n    todoSection.style.color = \"white\";\r\n    return;\r\n  } \r\n\r\n  todos.forEach((todo, index) => {\r\n    const todoContainer = document.createElement(\"div\");\r\n    const todoItem = document.createElement(\"div\");\r\n    const todoHeader = document.createElement(\"div\");\r\n    const todoCheckbox = document.createElement(\"input\");\r\n    const todoTitle = document.createElement(\"h3\");\r\n    const todoPriority = document.createElement(\"span\");\r\n    const todoDate = document.createElement(\"h3\");\r\n    const todoBody = document.createElement(\"div\");\r\n    const todoDescription = document.createElement(\"p\");\r\n    const todoIcons = document.createElement(\"div\");\r\n    const todoDelete = document.createElement(\"button\");\r\n    const todoDeleteIcon = document.createElement(\"img\");\r\n\r\n    todoContainer.classList.add(\"todoContainer\");\r\n    todoItem.classList.add(\"todoList\");\r\n    todoHeader.classList.add(\"todoHeader\");\r\n    todoCheckbox.classList.add(\"check\");\r\n    todoTitle.classList.add(\"todoTitle\");\r\n    todoPriority.classList.add(\"todo-priority\");\r\n\r\n    if (todo.priority === \"High\") {\r\n      todoPriority.classList.add(\"high\");\r\n    } else if (todo.priority === \"Medium\") {\r\n      todoPriority.classList.add(\"medium\");\r\n    } else {\r\n      todoPriority.classList.add(\"low\");\r\n    }\r\n\r\n    todoDate.classList.add(\"date\");\r\n    todoBody.classList.add(\"todoBody\");\r\n    todoDescription.classList.add(\"todoDescription\");\r\n    todoIcons.classList.add(\"todoIcons\");\r\n    todoDelete.classList.add(\"todo-trash\");\r\n\r\n    todoCheckbox.type = \"checkbox\";\r\n    todoTitle.textContent = todo.title;\r\n    todoPriority.textContent = todo.priority;\r\n    todoDate.textContent = todo.date;\r\n    todoDescription.textContent = todo.description;\r\n    todoDeleteIcon.src = \"../dist/svg/trash-bin-minimalistic-svgrepo-com.svg\";\r\n\r\n    \r\n    todoDelete.appendChild(todoDeleteIcon);\r\n    todoIcons.appendChild(todoDelete);\r\n\r\n    todoBody.appendChild(todoDescription);\r\n    todoBody.appendChild(todoIcons);\r\n    \r\n    todoHeader.appendChild(todoCheckbox);\r\n    todoHeader.appendChild(todoTitle);\r\n    todoHeader.appendChild(todoPriority);\r\n    todoHeader.appendChild(todoDate);\r\n\r\n    todoItem.appendChild(todoHeader);\r\n    todoItem.appendChild(todoBody);\r\n    todoContainer.appendChild(todoItem);\r\n\r\n    todoSection.appendChild(todoContainer);\r\n\r\n\r\n    todoDelete.addEventListener(\"click\", () => {\r\n      todoContainer.remove();\r\n      todos.splice(index, 1);\r\n      const inboxIndex = inbox.findIndex((inboxTodo) => inboxTodo.title === todo.title);\r\n      if (inboxIndex !== -1) {\r\n        inbox.splice(inboxIndex, 1);\r\n      }\r\n      displayTodos(todos);\r\n    });\r\n    todoCheckbox.addEventListener(\"click\", () => {\r\n      if (todoCheckbox.checked) {\r\n        todoContainer.style.textDecoration = \"line-through\";\r\n        todoContainer.style.color = \"grey\";\r\n      } else {\r\n        todoContainer.style.textDecoration = \"none\";\r\n        todoContainer.style.color = \"black\";\r\n      }\r\n    })\r\n  });\r\n}\r\n\r\n// Bug: Deleting A todo from another inbox does not update the main inbox\r\n\r\nfunction clearInputs() {\r\n  titleBox.value = \"\";\r\n  descriptionBox.value = \"\";\r\n  dateBox.value = \"\";\r\n  priorityBox.value = \"Priority\";\r\n\r\n  document.querySelector(\".add-todo-dialog\").close();\r\n}\r\n\r\nfunction switchInboxes() {\r\n  const inboxBtn = document.querySelector(\".inbox-button\");\r\n  const todayBtn = document.querySelector(\".today-button\");\r\n  const tomorrowBtn = document.querySelector(\".tomorrow-button\");\r\n  const inboxName = document.querySelector(\".inboxName\");\r\n\r\n  inboxBtn.addEventListener(\"click\", () => {\r\n    inboxName.textContent = \"Inbox\";\r\n    displayTodos(inbox);\r\n  });\r\n\r\n  todayBtn.addEventListener(\"click\", () => {\r\n    inboxName.textContent = \"Today\";\r\n    displayTodos(today);\r\n  });\r\n\r\n  tomorrowBtn.addEventListener(\"click\", () => {\r\n    inboxName.textContent = \"Tomorrow\";\r\n    displayTodos(tomorrow);\r\n  });\r\n}\r\n\r\n\r\nfunction initializeTodoFunctions() {\r\n  displayTodos(inbox);\r\n  switchInboxes();\r\n  addTodoBtn.addEventListener(\"click\", (event) => {\r\n    event.preventDefault();\r\n    createTodos();\r\n    const selectedInbox = document.querySelector(\".inboxName\").textContent;\r\n    if (selectedInbox === \"Inbox\") {\r\n      displayTodos(inbox);\r\n    } else if (selectedInbox === \"Today\") {\r\n      displayTodos(today);\r\n    } else if (selectedInbox === \"Tomorrow\") {\r\n      displayTodos(tomorrow);\r\n    }\r\n    clearInputs();\r\n    console.log(inbox);\r\n    console.log(today);\r\n    console.log(tomorrow);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/todoFunctions.js?");

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\n/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFunctions */ \"./src/todoFunctions.js\");\n\r\n\r\nconst sidebar = document.querySelector(\".sidebar\");\r\nconst addTodoDialog = document.querySelector(\".add-todo-dialog\");\r\nconst projectDialog = document.querySelector(\".add-project-dialog\");\r\n\r\n\r\nfunction toggleSidebar() {\r\n  const mainContainer = document.querySelector(\".main-container\");\r\n  sidebar.classList.toggle(\"hidden\");\r\n  mainContainer.classList.toggle(\"full-width\");\r\n} \r\n\r\nfunction showAddTodoDialog() {\r\n  addTodoDialog.showModal();\r\n}\r\n\r\nfunction closeTodoDialog() {\r\n  addTodoDialog.close();\r\n  (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.clearInputs)();\r\n}\r\n\r\nfunction showProjectDialog() {\r\n  projectDialog.showModal();\r\n}\r\n\r\nfunction closeProjectDialog() {\r\n  projectDialog.close();\r\n}\r\n\r\nfunction initializeUI() {\r\n  const toggleSidebarBtns = document.querySelectorAll(\".toggle-sidebar\");\r\n  const addTodoBtn = document.querySelector(\".add-todo\");\r\n  const cancelTodoBtn = document.querySelector(\".cancel-todo\");\r\n  const addTodoDialog = document.querySelector(\".add-todo-dialog\");\r\n  const addProjectBtn = document.querySelector(\".add-project\");\r\n  const cancelProjectBtn = document.querySelector(\".cancel-project\");\r\n\r\n  toggleSidebarBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", toggleSidebar);\r\n  });\r\n\r\n  addTodoBtn.addEventListener(\"click\", showAddTodoDialog);\r\n  cancelTodoBtn.addEventListener(\"click\", closeTodoDialog);\r\n\r\n  document.addEventListener(\"click\", (event) => {\r\n    if (event.target === addTodoDialog) {\r\n      closeTodoDialog();\r\n    }\r\n    if (event.target === projectDialog) {\r\n      closeProjectDialog();\r\n    }\r\n  });\r\n\r\n  addProjectBtn.addEventListener(\"click\", showProjectDialog);\r\n  cancelProjectBtn.addEventListener(\"click\", closeProjectDialog);\r\n\r\n}\n\n//# sourceURL=webpack:///./src/userInterface.js?");

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