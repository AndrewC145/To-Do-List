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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInputs: () => (/* binding */ clearInputs),\n/* harmony export */   initializeTodoFunctions: () => (/* binding */ initializeTodoFunctions)\n/* harmony export */ });\n// Starting DOM Elements\r\nconst addTodoBtn = document.querySelector('.submit-btn');\r\nconst titleBox = document.querySelector('.title-box');\r\nconst descriptionBox = document.querySelector('.description-box');\r\nconst dateBox = document.querySelector('.date-box');\r\nconst priorityBox = document.querySelector('.priority-box');\r\nconst projectSelection = document.querySelector('#project-selection');\r\nconst submitProject = document.querySelector('.submit-project');\r\n\r\n// Global Inbox Arrays\r\nconst inbox = [];\r\nconst today = [];\r\nconst tomorrow = [];\r\nconst week = [];\r\nconst projects = [];\r\n\r\nfunction saveProjectsToLocalStorage() {\r\n  localStorage.setItem('inbox', JSON.stringify(inbox));\r\n  localStorage.setItem('today', JSON.stringify(today));\r\n  localStorage.setItem('tomorrow', JSON.stringify(tomorrow));\r\n  localStorage.setItem('week', JSON.stringify(week));\r\n  localStorage.setItem('projects', JSON.stringify(projects));\r\n}\r\n\r\nfunction getProjectsFromLocalStorage() {\r\n  const inboxData = JSON.parse(localStorage.getItem('inbox'));\r\n  const todayData = JSON.parse(localStorage.getItem('today'));\r\n  const tomorrowData = JSON.parse(localStorage.getItem('tomorrow'));\r\n  const weekData = JSON.parse(localStorage.getItem('week'));\r\n  const projectsData = JSON.parse(localStorage.getItem('projects'));\r\n\r\n  if (inboxData) {\r\n    inbox.push(...inboxData);\r\n  }\r\n  if (todayData) {\r\n    today.push(...todayData);\r\n  }\r\n  if (tomorrowData) {\r\n    tomorrow.push(...tomorrowData);\r\n  }\r\n  if (weekData) {\r\n    week.push(...weekData);\r\n  }\r\n  if (projectsData) {\r\n    projects.push(...projectsData);\r\n  }\r\n}\r\n\r\n// Class for Creating Todos\r\nclass Project {\r\n  constructor(title, description, date, priority, locationInbox) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.locationInbox = locationInbox;\r\n  }\r\n}\r\n\r\n// Class for Creating Projects in Project Section\r\nclass ProjectList {\r\n  constructor(title) {\r\n    this.title = title;\r\n    this.todos = [];\r\n  }\r\n}\r\n\r\n// Function to format date to yyyy-mm-dd\r\nfunction formatDate(date) {\r\n  const year = date.getFullYear();\r\n  const month = String(date.getMonth() + 1).padStart(2, '0');\r\n  const day = String(date.getDate()).padStart(2, '0');\r\n  return `${year}-${month}-${day}`;\r\n}\r\n\r\n// Function to Create Todos for Inbox arrays\r\nfunction createTodos() {\r\n  // Get values from input fields from add todo dialog\r\n  const title = titleBox.value;\r\n  const description = descriptionBox.value;\r\n  const date = dateBox.value;\r\n  let priority = priorityBox.value;\r\n  const locationInbox = projectSelection.value;\r\n\r\n  // Get current date, tomorrow's date, and a week from now\r\n  let todaysDate = formatDate(new Date());\r\n  let tomorrowsDate = formatDate(new Date(Date.now() + 86400000));\r\n  let weekDate = formatDate(new Date(Date.now() + 604800000));\r\n\r\n  if (title === '' || priority === 'Priority' || !date) {\r\n    alert('Please fill out the required fields');\r\n    return;\r\n  }\r\n\r\n  // Capitalize the First Letter of Each Priority\r\n  priority = priority.charAt(0).toUpperCase() + priority.slice(1);\r\n  const newTodo = new Project(\r\n    title,\r\n    description,\r\n    date,\r\n    priority,\r\n    locationInbox\r\n  );\r\n  inbox.push(newTodo); // Adds every todo to the main inbox array\r\n\r\n  // If the date is today, tomorrow, or a week from now, add the todo to the respective array\r\n  if (date === todaysDate) {\r\n    today.push(newTodo);\r\n  } else if (date === tomorrowsDate) {\r\n    tomorrow.push(newTodo);\r\n  } else if (date === weekDate) {\r\n    week.push(newTodo);\r\n  }\r\n\r\n  // Searches for the project with the same title as the locationInbox and adds the todo to that project\r\n  const project = projects.find((project) => project.title === locationInbox);\r\n  if (project) {\r\n    project.todos.push(newTodo);\r\n  }\r\n\r\n  saveProjectsToLocalStorage();\r\n\r\n  // Display the todos in the inbox\r\n  displayTodos(inbox);\r\n}\r\n\r\nfunction displayTodos(todos) {\r\n  // Get the todo section and clear it\r\n  const todoSection = document.querySelector('.todoSection');\r\n  todoSection.innerHTML = '';\r\n\r\n  if (!todos || todos.length === 0) {\r\n    todoSection.innerHTML = '<h2>No todos to display</h2>';\r\n    todoSection.style.color = 'white';\r\n    return;\r\n  }\r\n\r\n  // Loop through the todos and create the todo elements\r\n  todos.forEach((todo, index) => {\r\n    const todoContainer = document.createElement('div');\r\n    const todoItem = document.createElement('div');\r\n    const todoHeader = document.createElement('div');\r\n    const todoCheckbox = document.createElement('input');\r\n    const todoTitle = document.createElement('h3');\r\n    const todoPriority = document.createElement('span');\r\n    const todoDate = document.createElement('h3');\r\n    const todoBody = document.createElement('div');\r\n    const todoDescription = document.createElement('p');\r\n    const todoIcons = document.createElement('div');\r\n    const todoDelete = document.createElement('button');\r\n    const todoDeleteIcon = document.createElement('img');\r\n\r\n    todoContainer.classList.add('todoContainer');\r\n    todoItem.classList.add('todoList');\r\n    todoHeader.classList.add('todoHeader');\r\n    todoCheckbox.classList.add('check');\r\n    todoTitle.classList.add('todoTitle');\r\n    todoPriority.classList.add('todo-priority');\r\n\r\n    if (todo.priority === 'High') {\r\n      todoPriority.classList.add('high');\r\n    } else if (todo.priority === 'Medium') {\r\n      todoPriority.classList.add('medium');\r\n    } else {\r\n      todoPriority.classList.add('low');\r\n    }\r\n\r\n    todoDate.classList.add('date');\r\n    todoBody.classList.add('todoBody');\r\n    todoDescription.classList.add('todoDescription');\r\n    todoIcons.classList.add('todoIcons');\r\n    todoDelete.classList.add('todo-trash');\r\n\r\n    todoCheckbox.type = 'checkbox';\r\n    todoTitle.textContent = todo.title;\r\n    todoPriority.textContent = todo.priority;\r\n    todoDate.textContent = todo.date;\r\n    todoDescription.textContent = todo.description;\r\n    todoDeleteIcon.src = '../dist/svg/trash-bin-minimalistic-svgrepo-com.svg';\r\n\r\n    todoDelete.appendChild(todoDeleteIcon);\r\n    todoIcons.appendChild(todoDelete);\r\n\r\n    todoBody.appendChild(todoDescription);\r\n    todoBody.appendChild(todoIcons);\r\n\r\n    todoHeader.appendChild(todoCheckbox);\r\n    todoHeader.appendChild(todoTitle);\r\n    todoHeader.appendChild(todoPriority);\r\n    todoHeader.appendChild(todoDate);\r\n\r\n    todoItem.appendChild(todoHeader);\r\n    todoItem.appendChild(todoBody);\r\n    todoContainer.appendChild(todoItem);\r\n\r\n    todoSection.appendChild(todoContainer);\r\n\r\n    // When the delete button is clicked, remove the todo from the inbox array and display the updated todos\r\n    todoDelete.addEventListener('click', () => {\r\n      todoContainer.remove();\r\n      todos.splice(index, 1);\r\n\r\n      // Finds the index of the todo item in the array that matches the title of the todo item being deleted\r\n      const removeTodo = (array) => {\r\n        if (!array) return;\r\n        const index = array.findIndex(\r\n          (arrayTodo) => arrayTodo.title === todo.title\r\n        );\r\n        // If found, remove the todo item from the array\r\n        if (index !== -1) {\r\n          array.splice(index, 1);\r\n        }\r\n      };\r\n\r\n      // Ensures that the todo item is removed from all the inbox arrays\r\n      removeTodo(inbox);\r\n      removeTodo(today);\r\n      removeTodo(tomorrow);\r\n      removeTodo(week);\r\n\r\n      // Finds the project that matches the locationInbox of the todo item being deleted\r\n      const project = projects.find(\r\n        (project) => project.title === todo.locationInbox\r\n      );\r\n      // If found, remove the todo item from the project\r\n      if (project && project.todos) {\r\n        removeTodo(project.todos);\r\n      }\r\n\r\n      // Display the updated todos\r\n      displayTodos(todos);\r\n    });\r\n\r\n    // When the checkbox is clicked, add a line-through to the todo title and change the color to grey\r\n    todoCheckbox.addEventListener('click', () => {\r\n      if (todoCheckbox.checked) {\r\n        todoContainer.style.textDecoration = 'line-through';\r\n        todoContainer.style.color = 'grey';\r\n      } else {\r\n        todoContainer.style.textDecoration = 'none';\r\n        todoContainer.style.color = 'black';\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction clearInputs() {\r\n  titleBox.value = '';\r\n  descriptionBox.value = '';\r\n  dateBox.value = '';\r\n  priorityBox.value = 'Priority';\r\n\r\n  document.querySelector('.add-todo-dialog').close();\r\n}\r\n\r\nfunction switchInboxes() {\r\n  const inboxBtn = document.querySelector('.inbox-button');\r\n  const todayBtn = document.querySelector('.today-button');\r\n  const tomorrowBtn = document.querySelector('.tomorrow-button');\r\n  const weekBtn = document.querySelector('.week-button');\r\n  const inboxName = document.querySelector('.inboxName');\r\n\r\n  // When the respective inbox button is clicked, display the todos in the respective inbox\r\n  inboxBtn.addEventListener('click', () => {\r\n    inboxName.textContent = 'Inbox';\r\n    displayTodos(inbox);\r\n  });\r\n\r\n  todayBtn.addEventListener('click', () => {\r\n    inboxName.textContent = 'Today';\r\n    displayTodos(today);\r\n  });\r\n\r\n  tomorrowBtn.addEventListener('click', () => {\r\n    inboxName.textContent = 'Tomorrow';\r\n    displayTodos(tomorrow);\r\n  });\r\n\r\n  weekBtn.addEventListener('click', () => {\r\n    inboxName.textContent = 'Week';\r\n    displayTodos(week);\r\n  });\r\n}\r\n\r\nfunction createProject() {\r\n  const projectTitle = document.querySelector('.project-title-box').value;\r\n\r\n  // If at least one project with the same title exists, alert the user\r\n  if (projects.some((project) => project.title === projectTitle)) {\r\n    alert('Project already exists');\r\n    return;\r\n  }\r\n\r\n  if (projectTitle === '' || projectTitle.length > 24) {\r\n    alert('Please enter a valid project title');\r\n    return;\r\n  }\r\n\r\n  // Create a new project and add it to the projects array\r\n  const newProject = new ProjectList(projectTitle);\r\n  projects.push(newProject);\r\n\r\n  // Creates a new option in the project selection dropdown\r\n  const projectOption = document.createElement('option');\r\n  projectOption.textContent = projectTitle;\r\n  projectOption.value = projectTitle;\r\n  projectSelection.appendChild(projectOption);\r\n\r\n  // Create a new project container and add it to the project section\r\n  const projectContainer = document.createElement('div');\r\n  const projectButton = document.createElement('button');\r\n  const projectIcon = document.createElement('div');\r\n  const deleteProject = document.createElement('button');\r\n  const deleteIcon = document.createElement('img');\r\n  const projectSection = document.querySelector('.projects-section');\r\n\r\n  projectContainer.classList.add('project');\r\n  projectButton.classList.add('project-button');\r\n  projectIcon.classList.add('project-icons');\r\n  deleteProject.classList.add('delete-project');\r\n\r\n  projectButton.textContent = projectTitle;\r\n  deleteIcon.src = '../dist/svg/trash-bin-minimalistic-svgrepo-com.svg';\r\n  deleteProject.appendChild(deleteIcon);\r\n\r\n  projectIcon.appendChild(deleteProject);\r\n  projectContainer.appendChild(projectButton);\r\n  projectContainer.appendChild(projectIcon);\r\n  projectSection.appendChild(projectContainer);\r\n\r\n  // When the project button is clicked, display the todos in the respective project\r\n  projectButton.addEventListener('click', () => {\r\n    const inboxName = document.querySelector('.inboxName');\r\n    inboxName.textContent = projectTitle;\r\n    displayTodos(newProject.todos);\r\n  });\r\n}\r\n\r\nfunction deleteProject() {\r\n  const deleteProjectButtons = document.querySelectorAll('.delete-project');\r\n\r\n  deleteProjectButtons.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n      // Get the project container and the project title\r\n      let projectContainer = button.parentElement.parentElement;\r\n      const projectTitle =\r\n        projectContainer.querySelector('.project-button').textContent;\r\n\r\n      // Remove the project container from the project section DOM\r\n      projectContainer.remove();\r\n\r\n      // Find the project with the same title as the project being deleted\r\n      const projectIndex = projects.findIndex(\r\n        (project) => project.title === projectTitle\r\n      );\r\n      if (projectIndex !== -1) {\r\n        const deletedProject = projects.splice(projectIndex, 1)[0];\r\n\r\n        // Remove the todos from the respective inbox arrays\r\n        const removeTodoFromInboxes = (todo) => {\r\n          const removeFromArray = (array) => {\r\n            const index = array.findIndex(\r\n              (arrayTodo) => arrayTodo.title === todo.title\r\n            );\r\n            if (index !== -1) {\r\n              array.splice(index, 1);\r\n            }\r\n          };\r\n\r\n          // Remove the todo from other inbox arrays\r\n          removeFromArray(inbox);\r\n          removeFromArray(today);\r\n          removeFromArray(tomorrow);\r\n          removeFromArray(week);\r\n        };\r\n\r\n        deletedProject.todos.forEach(removeTodoFromInboxes);\r\n      }\r\n\r\n      // Remove the project from the project selection dropdown\r\n      const projectSelection = document.querySelector('#project-selection');\r\n      const projectOption = Array.from(projectSelection.options).find(\r\n        (option) => option.textContent === projectTitle\r\n      );\r\n      if (projectOption) {\r\n        projectOption.remove();\r\n      }\r\n\r\n      // If the inbox name is the same as the project being deleted, display the inbox todos\r\n      const inboxName = document.querySelector('.inboxName').textContent;\r\n      if (inboxName === projectTitle) {\r\n        document.querySelector('.inboxName').textContent = 'Inbox';\r\n        displayTodos(inbox);\r\n      }\r\n\r\n      saveProjectsToLocalStorage();\r\n\r\n      // Refresh other todo inboxes\r\n      refreshTodos();\r\n    });\r\n  });\r\n}\r\n\r\nfunction refreshTodos() {\r\n  const selectedInbox = document.querySelector('.inboxName').textContent;\r\n  if (selectedInbox === 'Inbox') {\r\n    displayTodos(inbox);\r\n  } else if (selectedInbox === 'Today') {\r\n    displayTodos(today);\r\n  } else if (selectedInbox === 'Tomorrow') {\r\n    displayTodos(tomorrow);\r\n  } else if (selectedInbox === 'Week') {\r\n    displayTodos(week);\r\n  } else {\r\n    const project = projects.find((project) => project.title === selectedInbox);\r\n    displayTodos(project.todos);\r\n  }\r\n}\r\n\r\nfunction initializeTodoFunctions() {\r\n  getProjectsFromLocalStorage();\r\n  displayTodos(inbox);\r\n  switchInboxes();\r\n  addTodoBtn.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    createTodos();\r\n    clearInputs();\r\n    refreshTodos();\r\n  });\r\n  submitProject.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    createProject();\r\n    deleteProject();\r\n    console.log(projects);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/todoFunctions.js?");

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\n/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFunctions */ \"./src/todoFunctions.js\");\n\r\n\r\nconst sidebar = document.querySelector('.sidebar');\r\nconst addTodoDialog = document.querySelector('.add-todo-dialog');\r\nconst projectDialog = document.querySelector('.add-project-dialog');\r\nconst projectTitle = document.querySelector('.project-title-box');\r\n\r\nfunction toggleSidebar() {\r\n  const mainContainer = document.querySelector('.main-container');\r\n  sidebar.classList.toggle('hidden');\r\n  mainContainer.classList.toggle('full-width');\r\n}\r\n\r\nfunction showAddTodoDialog() {\r\n  addTodoDialog.showModal();\r\n}\r\n\r\nfunction closeTodoDialog() {\r\n  addTodoDialog.close();\r\n  (0,_todoFunctions__WEBPACK_IMPORTED_MODULE_0__.clearInputs)();\r\n}\r\n\r\nfunction showProjectDialog() {\r\n  projectDialog.showModal();\r\n  projectTitle.value = '';\r\n}\r\n\r\nfunction closeProjectDialog() {\r\n  projectDialog.close();\r\n}\r\n\r\nfunction initializeUI() {\r\n  const toggleSidebarBtns = document.querySelectorAll('.toggle-sidebar');\r\n  const addTodoBtn = document.querySelector('.add-todo');\r\n  const cancelTodoBtn = document.querySelector('.cancel-todo');\r\n  const addTodoDialog = document.querySelector('.add-todo-dialog');\r\n  const addProjectDialog = document.querySelector('.add-project');\r\n  const cancelProjectBtn = document.querySelector('.cancel-project');\r\n  const submitProjectBtn = document.querySelector('.submit-project');\r\n\r\n  toggleSidebarBtns.forEach((btn) => {\r\n    btn.addEventListener('click', toggleSidebar);\r\n  });\r\n\r\n  addTodoBtn.addEventListener('click', showAddTodoDialog);\r\n  cancelTodoBtn.addEventListener('click', closeTodoDialog);\r\n\r\n  document.addEventListener('click', (event) => {\r\n    if (event.target === addTodoDialog) {\r\n      closeTodoDialog();\r\n    }\r\n    if (event.target === projectDialog) {\r\n      closeProjectDialog();\r\n    }\r\n  });\r\n\r\n  addProjectDialog.addEventListener('click', showProjectDialog);\r\n  cancelProjectBtn.addEventListener('click', closeProjectDialog);\r\n  submitProjectBtn.addEventListener('click', closeProjectDialog);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/userInterface.js?");

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