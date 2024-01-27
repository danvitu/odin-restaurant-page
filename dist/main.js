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

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactsPage: () => (/* binding */ contactsPage)\n/* harmony export */ });\nconst contactsPage = () => {\n  const content = document.querySelector('#content');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Our contacts';\n  content.appendChild(h1);\n\n  const p = document.createElement('p');\n  p.textContent = 'Kuznetsovo village';\n  content.appendChild(p);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contacts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/contacts.js\");\n\n\n\n\nconst homeButton = document.querySelector('.home-btn');\nconst menuButton = document.querySelector('.menu-btn');\nconst contactsButton = document.querySelector('.contacts-btn');\nconst content = document.querySelector('#content');\n\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.mainPage)();\n\nhomeButton.addEventListener('click', () => {\n  content.textContent = '';\n  (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.mainPage)();\n});\n\nmenuButton.addEventListener('click', () => {\n  content.textContent = '';\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n});\n\ncontactsButton.addEventListener('click', () => {\n  content.textContent = '';\n  (0,_contacts__WEBPACK_IMPORTED_MODULE_2__.contactsPage)();\n});\n\nconsole.log('Everything in the right place');\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuPage = () => {\n  const content = document.querySelector('#content');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Our menu';\n  content.appendChild(h1);\n\n  const p = document.createElement('p');\n  p.textContent = 'Chicken wings';\n  content.appendChild(p);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainPage: () => (/* binding */ mainPage)\n/* harmony export */ });\nconst mainPage = () => {\n  const content = document.querySelector('#content');\n  \n  const h1 = document.createElement('h1');\n  h1.textContent = 'Petuh Grill bar in Kuznetsovo village';\n  content.appendChild(h1);\n\n  const img = document.createElement('img');\n  img.src = './img/beau-carpenter-jr55i362bMg-unsplash.jpg';\n  content.appendChild(img);\n\n  const p = document.createElement('p');\n  p.textContent = 'Welcome to our sizzling grill bar, where the aroma of perfectly seared steaks and the sound of crackling flames create an unforgettable dining experience. At our grill bar, we take pride in using only the finest cuts of meat, seasoned to perfection and grilled to your preference. Whether you\\'re a fan of juicy burgers, tender ribs, or succulent seafood, our diverse menu offers something to satisfy every craving.'\n  content.appendChild(p);\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pageload.js?");

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