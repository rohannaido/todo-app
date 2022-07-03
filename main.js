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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\nclass Project{\r\n    constructor(name){\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    getName(){\r\n        return this.name;\r\n    }\r\n\r\n    setName(newName){\r\n        this.name = newName;\r\n    }\r\n\r\n    addTask(task){\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-app/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor(title, description){\r\n        this.title = title;\r\n        this.description = description;\r\n    }\r\n\r\n    getTitle(){\r\n        return this.title;        \r\n    }\r\n\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n\r\n    setDescription(newDescription){\r\n        this.description = newDescription;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/Task.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList{\r\n    constructor(){\r\n        this.projects = [];\r\n        this.activeProject = this.getDefaultProject();\r\n    }\r\n    getDefaultProject(){\r\n        if (this.projects[0]){\r\n            return this.projects[0]\r\n        }\r\n    }\r\n    getProjects() {\r\n        return this.projects;\r\n    }\r\n    addProject(project){\r\n        \r\n        if(this.projects.find((projectItem) => (projectItem.getName() === project.getName()))){\r\n            return   \r\n        }\r\n        this.projects.push(project);\r\n    }\r\n    setActiveProject(project){\r\n        this.activeProject = project;\r\n    }\r\n    getActiveProject(){\r\n        return this.activeProject;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/TodoList.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoList\": () => (/* binding */ createTodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n\r\n\r\n\r\n\r\nconst createTodoList = () =>{\r\n    const todoList = document.createElement(\"div\");\r\n    todoList.classList.add(\"todolist-div\");\r\n    \r\n    todoList.appendChild(createSidebar());\r\n    todoList.appendChild(createTaskPanel());\r\n\r\n    return todoList;\r\n}\r\n\r\nconst updateSidebar = () => {\r\n    const sidebar = document.querySelector(\".sidebar-div div\");\r\n    sidebar.innerText = \"\";\r\n\r\n    sidebar.appendChild(createProjectList());\r\n\r\n}\r\n\r\nconst createSidebar = () => {\r\n    const sidebar = document.createElement(\"div\");\r\n    sidebar.classList.add(\"sidebar-div\");\r\n\r\n    const heading = document.createElement(\"h2\");\r\n    heading.innerText = \"Projects\";\r\n    heading.classList.add(\"sidebar-h2\");\r\n\r\n    sidebar.appendChild(heading);\r\n\r\n    const inputName = document.createElement(\"input\");\r\n    const inputButton = document.createElement(\"button\");\r\n\r\n    inputButton.innerText = \"Add\";\r\n    inputButton.addEventListener(\"click\", addProject);\r\n\r\n    sidebar.appendChild(inputName);\r\n    sidebar.appendChild(inputButton);\r\n\r\n    sidebar.appendChild(createProjectList());\r\n\r\n    return sidebar;\r\n}\r\n\r\n// TEST SAMPLE DATA\r\n\r\nconst myTodoList = new _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nfor(let j = 1; j < 6; j++){\r\n    const project1 = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"One Project \" + j);\r\n    for(let i = 0; i < 10; i++){\r\n        project1.addTask(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"taskasdf \" + j + \" -- \"+ i, \"dooo iiitt\"))\r\n    }\r\n\r\n    myTodoList.addProject(project1);\r\n}\r\n\r\nconst testProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"asdfasdf\");\r\ntestProject.addTask(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"asdfzvxc\", \"asdfzxvasdf\"));\r\n\r\nmyTodoList.addProject(testProject);\r\n\r\nconst createProjectList = () => {\r\n    \r\n    const projectListDiv = document.createElement(\"div\");\r\n    const projectList = document.createElement(\"ol\");\r\n\r\n    let listItem = document.createElement(\"li\");\r\n\r\n    for(const project of myTodoList.getProjects()){\r\n        listItem = document.createElement(\"li\");\r\n\r\n        listItem.innerText = project.getName();\r\n        listItem.addEventListener(\"click\", () => showProjectTasks(project));\r\n\r\n        projectList.appendChild(listItem);\r\n    }\r\n\r\n    projectListDiv.appendChild(projectList);\r\n\r\n    return projectListDiv;\r\n}\r\n\r\nconst addProject = (e) => {\r\n    const nameInput = document.querySelector(\".sidebar-div input\");\r\n    myTodoList.addProject(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameInput.value));\r\n    updateSidebar();\r\n}\r\n\r\nconst showProjectTasks = (project) => {\r\n    const taskListContainer = document.querySelector(\".task-list-div div\");\r\n    taskListContainer.innerText = \"\";\r\n\r\n    taskListContainer.appendChild(createTaskList(project));\r\n    myTodoList.setActiveProject(project);\r\n\r\n}\r\n\r\nconst createTaskPanel = () => {\r\n    const taskList = document.createElement(\"div\");\r\n    const taskListDiv = document.createElement(\"div\");\r\n    taskList.classList.add(\"task-list-div\");\r\n    \r\n    const input = document.createElement(\"input\");\r\n    const button = document.createElement(\"button\");\r\n    button.innerText = \"Add\"\r\n    button.addEventListener(\"click\", () => addTask());\r\n\r\n    taskList.appendChild(input);\r\n    taskList.appendChild(button);\r\n\r\n    const defaultTaskList = createTaskList(myTodoList.getDefaultProject());\r\n    taskListDiv.appendChild(defaultTaskList);\r\n    taskList.appendChild(taskListDiv);\r\n\r\n    return taskList;\r\n}\r\n\r\nconst addTask = () => {\r\n    const input = document.querySelector(\".task-list-div input\");\r\n    console.log(input.value);\r\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](input.value, \"\");\r\n    console.log(myTodoList.getActiveProject());\r\n    myTodoList.getActiveProject().addTask(newTask);\r\n    updateTaskList();\r\n\r\n}\r\n\r\nconst createTaskList = (project) => {\r\n    const taskList = document.createElement(\"ol\");\r\n\r\n    for(const task of project.getTasks()){\r\n        const listItem = document.createElement(\"li\");\r\n        listItem.innerText = task.getTitle();\r\n        taskList.appendChild(listItem);\r\n    }\r\n\r\n    return taskList;\r\n}\r\n\r\nconst updateTaskList = () => {\r\n    const taskList = document.querySelector(\".task-list-div div\");\r\n    taskList.innerText = \"\";\r\n\r\n    taskList.appendChild(createTaskList(myTodoList.getActiveProject()));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\r\n\r\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor(title, description){\r\n        this.title = title;\r\n        this.description = description;\r\n    }\r\n\r\n    getTitle(){\r\n        return this.title;        \r\n    }\r\n\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n\r\n    setDescription(newDescription){\r\n        this.description = newDescription;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/task.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\n\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement(\"header\");\r\n    const heading = document.createElement(\"h1\");\r\n    heading.innerText = \"ToDo App\"\r\n\r\n    header.appendChild(heading);\r\n    return header;\r\n\r\n}\r\n\r\nconst getTodo = () => {\r\n    const task1 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"TeST\", \"DECSSDFD\");\r\n    console.log(task1);\r\n    task1.getTitle();\r\n    const project1 = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"TESTProject\");\r\n    console.log(project1.getName());\r\n    project1.addTask(task1)\r\n    console.log(project1.getAllTasks());\r\n}\r\n\r\nconst createMain = () => {\r\n    const main = document.createElement(\"main\");\r\n    main.appendChild((0,_UI__WEBPACK_IMPORTED_MODULE_2__.createTodoList)());\r\n    return main;\r\n}\r\n\r\nconst createFooter = () => {\r\n    const footer = document.createElement(\"footer\");\r\n    const githubIcon = document.createElement(\"i\");\r\n    const githubLink = document.createElement(\"a\");\r\n\r\n    githubIcon.classList.add(\"fa-brands\");\r\n    githubIcon.classList.add(\"fa-github\")\r\n\r\n    footer.innerText = \"Copyright © 2022 rohannaido \";\r\n    githubLink.href = \"https://github.com/rohannaido\";\r\n    githubLink.target = \"_blank\"\r\n    githubLink.appendChild(githubIcon);\r\n    footer.appendChild(githubLink);\r\n    \r\n    return footer;\r\n}\r\n\r\nconst initializeWebpage = () => {\r\n    const content = document.querySelector(\"div#content\");\r\n    \r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createFooter());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebpage);\n\n//# sourceURL=webpack://todo-app/./src/webpage.js?");

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