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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack://task-events/./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/js/board.js\");\n/* harmony import */ var _goblin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goblin */ \"./src/js/goblin.js\");\n// TODO: write code here\n\n\nconst container = document.querySelector('.container');\nlet board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst goblin = new _goblin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nboard.draw();\ngoblin.changePosition();\ngoblin.goblinCatch(container);\n\n//# sourceURL=webpack://task-events/./src/js/app.js?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board {\n  constructor() {\n    this.size = 4;\n  }\n  draw() {\n    const container = document.querySelector('.container');\n    for (let i = 0; i < this.size * this.size; i++) {\n      const block = document.createElement('div');\n      block.classList.add('block');\n      container.appendChild(block);\n    }\n  }\n}\n\n//# sourceURL=webpack://task-events/./src/js/board.js?");

/***/ }),

/***/ "./src/js/goblin.js":
/*!**************************!*\
  !*** ./src/js/goblin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\nclass Goblin {\n  constructor() {\n    this.noCaught = 0;\n    this.caught = 0;\n  }\n  changePosition() {\n    const position = [...document.querySelectorAll('.block')];\n    let posGoblin = 0;\n    const gob = document.querySelector('.goblins');\n    let interval = setInterval(() => {\n      const random = Math.floor(Math.random() * position.length);\n      if (random !== posGoblin) {\n        position[posGoblin].classList.remove('goblin');\n        position[random].classList.add('goblin');\n        this.noCaught += 1;\n        posGoblin = random;\n        gob.innerText = `Пропустил: ${this.noCaught}`;\n      }\n      if (this.noCaught === 5) {\n        position[random].classList.remove('goblin');\n        alert('😤 Вы проиграли! 😤');\n        clearInterval(interval);\n        this.resetGame();\n        window.location.reload();\n      }\n      if (this.caught === 5) {\n        position[random].classList.remove('goblin');\n        alert('🏆 Вы победили! 🏆');\n        clearInterval(interval);\n        this.resetGame();\n        window.location.reload();\n      }\n    }, 1000);\n  }\n  goblinCatch(element) {\n    const points = document.querySelector('.points');\n    if (!points) {\n      console.error('Unable to find element');\n      return;\n    }\n    element.addEventListener('click', event => {\n      const e = event.target;\n      if (e.classList.contains('goblin')) {\n        e.classList.remove('goblin');\n        this.noCaught -= 1;\n        this.caught += 1;\n        points.innerText = `Поймал: ${this.caught}`;\n      }\n    });\n  }\n  resetGame() {\n    this.noCaught = 0;\n    this.caught = 0;\n  }\n}\n\n//# sourceURL=webpack://task-events/./src/js/goblin.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task-events/./src/css/style.css?");

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