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

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactLoad\": () => (/* binding */ contactLoad)\n/* harmony export */ });\n\r\nconst contactLoad = (content) => {\r\n    content.innerHTML = \"\";\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('text-center');\r\n    title.textContent = 'Contact';\r\n\r\n    const telephone = document.createElement('h3');\r\n    telephone.classList.add('text-center');\r\n    telephone.innerHTML = 'Telefono<br>(11) 1234 5678';\r\n\r\n    content.appendChild(title);\r\n    content.appendChild(telephone);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n\r\n\r\n\r\n \r\nconst content = document.getElementById('content');\r\nconst pageHead = document.getElementById('header');\r\n\r\nconst headLogo = document.createElement('img');\r\nheadLogo.setAttribute('src', 'img/logo_head.jpg');\r\npageHead.appendChild(headLogo);\r\n\r\n// Nav Tabs creation\r\nconst navTabs = document.createElement('nav');\r\nnavTabs.classList.add('nav');\r\nnavTabs.classList.add('nav-pills');\r\nnavTabs.classList.add('nav-justified');\r\n\r\nconst sections = ['Home', 'Menu', 'Contact'];\r\n\r\nsections.forEach( (item) => {\r\n    const link = document.createElement('p');\r\n    link.classList.add('nav-link');\r\n    link.setAttribute('id', item);\r\n    link.textContent = item;\r\n    \r\n    navTabs.appendChild(link);\r\n})\r\n\r\npageHead.appendChild(navTabs);\r\n\r\n// Nav tabs event listeners\r\nconst homeTab = document.getElementById('Home');\r\nconst menuTab = document.getElementById('Menu');\r\nconst contactTab = document.getElementById('Contact');\r\nconst tabs = document.querySelectorAll('.nav-link');\r\n\r\nfunction deleteActiveClass(tabs) {\r\n    tabs.forEach( (tab) => {\r\n        tab.classList.remove('active');\r\n    })\r\n}\r\n\r\nhomeTab.addEventListener('click', () => { \r\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(content);\r\n    deleteActiveClass(tabs);\r\n    homeTab.classList.add('active'); \r\n});\r\nmenuTab.addEventListener('click', () => { \r\n    (0,_menu_load__WEBPACK_IMPORTED_MODULE_1__.menuLoad)(content);\r\n    deleteActiveClass(tabs);\r\n    menuTab.classList.add('active');\r\n});\r\ncontactTab.addEventListener('click', () => { \r\n    (0,_contact_load__WEBPACK_IMPORTED_MODULE_2__.contactLoad)(content);\r\n    deleteActiveClass(tabs);\r\n    contactTab.classList.add('active');\r\n});\r\n\r\n// Home Page default load\r\nhomeTab.classList.add('active'); \r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(content);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\n\r\nfunction menuLoad(content) {\r\n    content.innerHTML = \"\";\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Menu';\r\n    content.appendChild(title);\r\n\r\n    const Menu = [{'foto': 'img/menu/cazuela_mariscos.jpg', 'nombre': 'Cazuela de Mariscos', 'precio': 500}, \r\n    {'foto': 'img/menu/lomo_champiñon.jpg', 'nombre': 'Lomo al Champiñon', 'precio': 600}, \r\n    {'foto': 'img/menu/paella.jpg', 'nombre': 'Paella', 'precio': 650}, \r\n    {'foto': 'img/menu/rissotto_langostinos.jpg', 'nombre': 'Rissotto de Langostinos', 'precio': 700}];\r\n\r\n    Menu.forEach((element) => {\r\n\r\n        const card = document.createElement('div');\r\n        card.classList.add('card');\r\n        card.classList.add('text-center');\r\n        card.setAttribute('style', 'width: 18rem;');\r\n\r\n        const cardImage = document.createElement('img');\r\n        cardImage.setAttribute('src', element['foto']);\r\n\r\n        const cardBody = document.createElement('div');\r\n        cardBody.classList.add('card-body');\r\n\r\n        const cardTitle = document.createElement('h5');\r\n        cardTitle.classList.add('card-title');\r\n        cardTitle.textContent = element['nombre'];\r\n\r\n        const cardText = document.createElement('h6');\r\n        cardText.classList.add('card-text');\r\n        cardText.textContent = `$ ${element['precio']}`;\r\n\r\n        cardBody.appendChild(cardTitle);\r\n        cardBody.appendChild(cardText);\r\n        card.appendChild(cardImage);\r\n        card.appendChild(cardBody);\r\n        content.appendChild(card);\r\n    });\r\n\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu-load.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n\r\nfunction pageLoad(content) {\r\n    // const content = document.getElementById('content');\r\n\r\n    content.innerHTML = \"\";\r\n\r\n    const carousel = document.createElement('div');\r\n    carousel.setAttribute('id', 'carousel');\r\n    carousel.classList.add('carousel');\r\n    carousel.classList.add('slide');\r\n    carousel.setAttribute('data-bs-ride', 'carousel');\r\n\r\n    const carouselInner = document.createElement('div');\r\n    carouselInner.classList.add('carousel-inner');\r\n\r\n    const carouselIndicators = document.createElement('div');\r\n    carouselIndicators.classList.add('carousel-indicators');\r\n\r\n    const images = ['img/foto-afuera2.jpg', 'img/restaurant.jpg', 'img/foto-pizarra.jpg']\r\n    images.forEach((image, i) => {\r\n        let carouselItem = document.createElement('div');\r\n        carouselItem.classList.add('carousel-item');\r\n        carouselItem.setAttribute('data-bs-interval', '2000');\r\n        \r\n        let carouselIndicatorsButton = document.createElement('button');\r\n        carouselIndicatorsButton.setAttribute('type', 'button');\r\n        carouselIndicatorsButton.setAttribute('data-bs-target', '#carousel');\r\n        carouselIndicatorsButton.setAttribute('data-bs-slide-to', i);\r\n        carouselIndicatorsButton.setAttribute('aria-label', `Slide ${i + 1}`);\r\n\r\n        if (i === 0) {\r\n            carouselItem.classList.add('active');\r\n            carouselIndicatorsButton.setAttribute('aria-current', 'true');\r\n            carouselIndicatorsButton.classList.add('active');\r\n        }\r\n\r\n        let carouselImage = document.createElement('img');\r\n        carouselImage.setAttribute('src', image);\r\n        carouselImage.classList.add('d-block');\r\n        carouselImage.classList.add('w-100');\r\n\r\n        carouselIndicators.appendChild(carouselIndicatorsButton);\r\n        carouselItem.appendChild(carouselImage);\r\n        carouselInner.appendChild(carouselItem);\r\n    })\r\n    \r\n    const carouselControlPrev = document.createElement('button');\r\n    carouselControlPrev.classList.add('carousel-control-prev');\r\n    carouselControlPrev.setAttribute('type', 'button');\r\n    carouselControlPrev.setAttribute('data-bs-target', '#carousel');\r\n    carouselControlPrev.setAttribute('data-bs-slide', 'prev')\r\n    const carouselControlPrevSpan = document.createElement('span');\r\n    carouselControlPrevSpan.classList.add('carousel-control-prev-icon');\r\n    carouselControlPrevSpan.setAttribute('aria-hidden', 'true');\r\n\r\n    const carouselControlNext = document.createElement('button');\r\n    carouselControlNext.classList.add('carousel-control-next');\r\n    carouselControlNext.setAttribute('type', 'button');\r\n    carouselControlNext.setAttribute('data-bs-target', '#carousel');\r\n    carouselControlNext.setAttribute('data-bs-slide', 'next')\r\n    const carouselControlNextSpan = document.createElement('span');\r\n    carouselControlNextSpan.classList.add('carousel-control-next-icon');\r\n    carouselControlNextSpan.setAttribute('aria-hidden', 'true');\r\n\r\n    carousel.appendChild(carouselIndicators);\r\n    carousel.appendChild(carouselInner);\r\n    carouselControlPrev.appendChild(carouselControlPrevSpan);\r\n    carousel.appendChild(carouselControlPrev);\r\n    carouselControlNext.appendChild(carouselControlNextSpan);\r\n    carousel.appendChild(carouselControlNext);\r\n\r\n    content.appendChild(carousel);\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/page-load.js?");

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