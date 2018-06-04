/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/animations.js":
/*!**************************!*\
  !*** ./js/animations.js ***!
  \**************************/
/*! exports provided: animationHeroAttack, animationHeroWalk, animationEnemyWalk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationHeroAttack\", function() { return animationHeroAttack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationHeroWalk\", function() { return animationHeroWalk; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animationEnemyWalk\", function() { return animationEnemyWalk; });\n/* harmony import */ var _classes_Part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Part */ \"./js/classes/Part.js\");\n/* harmony import */ var _classes_Frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Frame */ \"./js/classes/Frame.js\");\n/* harmony import */ var _classes_AnimationInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/AnimationInfo */ \"./js/classes/AnimationInfo.js\");\n\r\n\r\n\r\n\r\n// *************************************** Create Hero attack animation *********************************************************************\r\n\r\nconst frameHeroAttack1 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroAttack1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroLeft', 35, 70, 0));\r\nframeHeroAttack1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 35, 70, 0));\r\nframeHeroAttack1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 75, 40, 0));\r\nframeHeroAttack1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroRight', 35, 70, 0));\r\n\r\n\r\n\r\nconst frameHeroAttack2 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroAttack2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 40, 70, 0));\r\nframeHeroAttack2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 85, 40, 0));\r\n\r\n\r\nconst frameHeroAttack3 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroAttack3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 40, 70, 0));\r\nframeHeroAttack3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 95, 40, 0));\r\n\r\n\r\nconst animationHeroAttack = new _classes_AnimationInfo__WEBPACK_IMPORTED_MODULE_2__[\"AnimationInfo\"]('attack');\r\n\r\nanimationHeroAttack.frames.push(frameHeroAttack1);\r\nanimationHeroAttack.frames.push(frameHeroAttack2);\r\nanimationHeroAttack.frames.push(frameHeroAttack3);\r\n\r\n\r\n// ***************************************** Create Hero walk animation *********************************************************************\r\n\r\nconst frameHeroWalk1 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroLeft', 203, 137, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroLeft', 212, 88, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroLeft', 190, 195, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 105, 115, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroRight', 160, 195, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 115, 40, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroRight', 125, 137, 0));\r\nframeHeroWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroRight', 140, 150, 0));\r\n\r\n\r\nconst frameHeroWalk2 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroLeft', 220, 127, -60));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroLeft', 188, 35, -60));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroLeft', 190, 195, 0));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 105, 110, 0));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroRight', 170, 200, -25));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 115, 40, -5));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroRight', 115, 137, 20));\r\nframeHeroWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroRight', 115, 150, 10));\r\n\r\n\r\nconst frameHeroWalk3 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroLeft', 203, 137, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroLeft', 212, 88, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroLeft', 190, 195, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 105, 115, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroRight', 160, 195, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 115, 40, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroRight', 125, 137, 0));\r\nframeHeroWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroRight', 140, 150, 0));\r\n\r\nconst frameHeroWalk4 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroLeft', 195, 137, 20));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroLeft', 200,105, 20));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroLeft', 195, 188, -25));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyHero', 105, 110, 0));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legHeroRight', 160, 195, 0));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headHero', 115, 40, -5));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armHeroRight', 145, 135, -60));\r\nframeHeroWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponHeroRight', 160, 140, -5));\r\n\r\n\r\nconst animationHeroWalk = new _classes_AnimationInfo__WEBPACK_IMPORTED_MODULE_2__[\"AnimationInfo\"]('walk');\r\n\r\nanimationHeroWalk.frames.push(frameHeroWalk1);\r\nanimationHeroWalk.frames.push(frameHeroWalk2);\r\nanimationHeroWalk.frames.push(frameHeroWalk3);\r\nanimationHeroWalk.frames.push(frameHeroWalk4);\r\n\r\n\r\n\r\n// ****************************************** Create Enemy walk animation ************************************************************\r\n\r\nconst frameEnemyWalk1 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armLeftEnemy', 118, 95, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponLeftEnemy', 25, 120, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legLeftEnemy', 160, 187, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legRightEnemy', 193, 187, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyEnemy', 135, 62, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headEnemy', 110, 10, 0));\r\nframeEnemyWalk1.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armRightEnemy', 225, 87, 0));\r\n\r\n\r\n\r\nconst frameEnemyWalk2 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armLeftEnemy', 105, 85, -30));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponLeftEnemy', 12, 80, -30));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legLeftEnemy', 160, 187, 0));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legRightEnemy', 185, 187, -25));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyEnemy', 135, 60, 0));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headEnemy', 105, 10, 0));\r\nframeEnemyWalk2.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armRightEnemy', 240, 80, 20));\r\n\r\n\r\nconst frameEnemyWalk3 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armLeftEnemy', 118, 95, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponLeftEnemy', 25, 120, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legLeftEnemy', 160, 187, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legRightEnemy', 193, 187, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyEnemy', 135, 62, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headEnemy', 110, 10, 0));\r\nframeEnemyWalk3.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armRightEnemy', 225, 87, 0));\r\n\r\nconst frameEnemyWalk4 = new _classes_Frame__WEBPACK_IMPORTED_MODULE_1__[\"Frame\"]();\r\n\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armLeftEnemy', 115, 95, 10));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('weaponLeftEnemy', 27, 128, 10));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legLeftEnemy', 155, 187, -25));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('legRightEnemy', 193, 187, 0));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('bodyEnemy', 135, 60, 0));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('headEnemy', 105, 10, 0));\r\nframeEnemyWalk4.parts.push(new _classes_Part__WEBPACK_IMPORTED_MODULE_0__[\"Part\"]('armRightEnemy', 208, 87, -30));\r\n\r\n\r\nconst animationEnemyWalk = new _classes_AnimationInfo__WEBPACK_IMPORTED_MODULE_2__[\"AnimationInfo\"]('walk');\r\n\r\nanimationEnemyWalk.frames.push(frameEnemyWalk1);\r\nanimationEnemyWalk.frames.push(frameEnemyWalk2);\r\nanimationEnemyWalk.frames.push(frameEnemyWalk3);\r\nanimationEnemyWalk.frames.push(frameEnemyWalk4);\r\n\r\n\n\n//# sourceURL=webpack:///./js/animations.js?");

/***/ }),

/***/ "./js/classes/AnimationInfo.js":
/*!*************************************!*\
  !*** ./js/classes/AnimationInfo.js ***!
  \*************************************/
/*! exports provided: AnimationInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimationInfo\", function() { return AnimationInfo; });\nclass AnimationInfo {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.frames = [];\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/AnimationInfo.js?");

/***/ }),

/***/ "./js/classes/Enemy.js":
/*!*****************************!*\
  !*** ./js/classes/Enemy.js ***!
  \*****************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ \"./js/classes/Hero.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ \"./js/animations.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./js/constants.js\");\n\r\n\r\n\r\n\r\nclass Enemy extends _Hero__WEBPACK_IMPORTED_MODULE_0__[\"Hero\"] {\r\n    constructor() {\r\n        super();\r\n        this.context = _constants__WEBPACK_IMPORTED_MODULE_2__[\"ctx2\"];\r\n        this.animation = _animations__WEBPACK_IMPORTED_MODULE_1__[\"animationEnemyWalk\"];\r\n    }\r\n    \r\n    draw() {\r\n        this.context.clearRect(0, 0, 1600, 800);\r\n        if (this.currentCountFrame === this.animation.frames.length) {\r\n            this.currentCountFrame = 0;\r\n        }\r\n        const frame = this.animation.frames[this.currentCountFrame];\r\n       \r\n        frame.parts.forEach(\r\n            (item, i) => {\r\n                const currView = this.view[item.name];\r\n                \r\n                this.context.save();\r\n                \r\n                this.context.translate(this.x + item.x, this.y + item.y);\r\n                \r\n                this.context.translate(currView.width / 10, currView.height / 10);\r\n               \r\n                this.context.scale(-1,1);\r\n                this.context.rotate(item.rotation * _constants__WEBPACK_IMPORTED_MODULE_2__[\"TO_RADIANS\"]);\r\n                \r\n                this.context.drawImage(currView, -currView.width / 10, -currView.height / 10, currView.width / 5, currView.height / 5);\r\n                this.context.restore();\r\n            }\r\n        )\r\n        this.currentCountFrame ++;  \r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/Enemy.js?");

/***/ }),

/***/ "./js/classes/Frame.js":
/*!*****************************!*\
  !*** ./js/classes/Frame.js ***!
  \*****************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Frame\", function() { return Frame; });\n\r\nclass Frame {\r\n    constructor() {\r\n        this.parts = [];\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/Frame.js?");

/***/ }),

/***/ "./js/classes/Hero.js":
/*!****************************!*\
  !*** ./js/classes/Hero.js ***!
  \****************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ \"./js/animations.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./js/constants.js\");\n\r\n\r\n\r\n\r\nclass Hero {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.view;\r\n        this.currentCountFrame = 0;\r\n        this.animation = _animations__WEBPACK_IMPORTED_MODULE_0__[\"animationHeroWalk\"];\r\n        this.context = _constants__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"];\r\n        this.tick_count = 0;\r\n    }\r\n\r\n    setView(view) {\r\n        this.view = view;\r\n    }\r\n\r\n    play(animation) {\r\n        this.currentCountFrame = 0;\r\n        this.animation = animation;\r\n    }\r\n\r\n    draw() {\r\n        this.context.clearRect(0, 0, 1600, 800);\r\n        if (this.currentCountFrame === this.animation.frames.length) {\r\n            this.currentCountFrame = 0;\r\n        }\r\n        const frame = this.animation.frames[this.currentCountFrame];\r\n       \r\n        frame.parts.forEach(\r\n            (item, i) => {\r\n                const currView = this.view[item.name];\r\n                this.context.save();\r\n                \r\n                this.context.translate(this.x + item.x, this.y + item.y);\r\n                \r\n                this.context.translate(currView.width / 10, currView.height / 10);\r\n                \r\n                this.context.rotate(item.rotation * _constants__WEBPACK_IMPORTED_MODULE_1__[\"TO_RADIANS\"]);\r\n                \r\n                this.context.drawImage(currView, -currView.width / 10, -currView.height / 10, currView.width / 5, currView.height / 5);\r\n                this.context.restore();\r\n            }\r\n        )\r\n        this.currentCountFrame ++;  \r\n    }\r\n\r\n    tick() {\r\n        if (this.tick_count > 15) {\r\n            this.draw();\r\n            this.tick_count = 0;\r\n            requestAnimationFrame(this.tick.bind(this));\r\n        } else {\r\n            this.tick_count += 1;\r\n            requestAnimationFrame(this.tick.bind(this));\r\n        }\r\n    }\r\n\r\n    setPosition(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/Hero.js?");

/***/ }),

/***/ "./js/classes/Part.js":
/*!****************************!*\
  !*** ./js/classes/Part.js ***!
  \****************************/
/*! exports provided: Part */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Part\", function() { return Part; });\nclass Part {\r\n    constructor(name, x, y, rotation) {\r\n        this.name = name;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.rotation = rotation;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/Part.js?");

/***/ }),

/***/ "./js/classes/SpriteEnemyContainer.js":
/*!********************************************!*\
  !*** ./js/classes/SpriteEnemyContainer.js ***!
  \********************************************/
/*! exports provided: SpriteEnemyContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpriteEnemyContainer\", function() { return SpriteEnemyContainer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./js/constants.js\");\n\r\n\r\n\r\nclass SpriteEnemyContainer {\r\n    constructor(armLeftEnemy, weaponLeftEnemy, legLeftEnemy, legRightEnemy, bodyEnemy, headEnemy, armRightEnemy) {\r\n        this.armLeftEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"armsLeftEnemySrc\"][armLeftEnemy]);\r\n        this.weaponLeftEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"weaponsLeftEnemySrc\"][weaponLeftEnemy]);\r\n        this.legLeftEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"legsLeftEnemySrc\"][legLeftEnemy]);\r\n        this.bodyEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"bodiesEnemySrc\"][bodyEnemy]);\r\n        this.legRightEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"legsRightEnemySrc\"][legRightEnemy]);\r\n        this.headEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"headsEnemySrc\"][headEnemy]);\r\n        this.armRightEnemy = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"armsRightEnemySrc\"][armRightEnemy]);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/SpriteEnemyContainer.js?");

/***/ }),

/***/ "./js/classes/SpriteHeroContainer.js":
/*!*******************************************!*\
  !*** ./js/classes/SpriteHeroContainer.js ***!
  \*******************************************/
/*! exports provided: SpriteHeroContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpriteHeroContainer\", function() { return SpriteHeroContainer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./js/constants.js\");\n\r\n\r\nclass SpriteHeroContainer {\r\n    constructor(armHeroLeft, weaponHeroLeft, legHeroLeft, legHeroRight, bodyHero, headHero, armHeroRight, weaponHeroRight) {\r\n        this.armHeroLeft = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"armsHeroLeftSrc\"][armHeroLeft]);\r\n        this.weaponHeroLeft = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"weaponHeroLeftSrc\"][weaponHeroLeft]);\r\n        this.legHeroLeft = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"legHeroLeftSrc\"][legHeroLeft]);\r\n        this.bodyHero = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"bodiesHeroSrs\"][bodyHero]);\r\n        this.legHeroRight = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"legHeroRightSrc\"][legHeroRight]);\r\n        this.headHero = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"headsHeroSrc\"][headHero]);\r\n        this.armHeroRight = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"armsHeroRightSrc\"][armHeroRight]);\r\n        this.weaponHeroRight = resources.get(_constants__WEBPACK_IMPORTED_MODULE_0__[\"weaponHeroRightSrc\"][weaponHeroRight]);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/classes/SpriteHeroContainer.js?");

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: canvas, ctx, canvas2, ctx2, TO_RADIANS, headsHeroSrc, bodiesHeroSrs, armsHeroLeftSrc, armsHeroRightSrc, legHeroLeftSrc, legHeroRightSrc, weaponHeroLeftSrc, weaponHeroRightSrc, headsEnemySrc, bodiesEnemySrc, armsLeftEnemySrc, armsRightEnemySrc, legsLeftEnemySrc, legsRightEnemySrc, weaponsLeftEnemySrc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas2\", function() { return canvas2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx2\", function() { return ctx2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TO_RADIANS\", function() { return TO_RADIANS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headsHeroSrc\", function() { return headsHeroSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodiesHeroSrs\", function() { return bodiesHeroSrs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"armsHeroLeftSrc\", function() { return armsHeroLeftSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"armsHeroRightSrc\", function() { return armsHeroRightSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legHeroLeftSrc\", function() { return legHeroLeftSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legHeroRightSrc\", function() { return legHeroRightSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weaponHeroLeftSrc\", function() { return weaponHeroLeftSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weaponHeroRightSrc\", function() { return weaponHeroRightSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headsEnemySrc\", function() { return headsEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodiesEnemySrc\", function() { return bodiesEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"armsLeftEnemySrc\", function() { return armsLeftEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"armsRightEnemySrc\", function() { return armsRightEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legsLeftEnemySrc\", function() { return legsLeftEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"legsRightEnemySrc\", function() { return legsRightEnemySrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weaponsLeftEnemySrc\", function() { return weaponsLeftEnemySrc; });\nconst canvas = document.getElementById(\"myCanvasHero\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst canvas2 = document.getElementById(\"myCanvasEnemy\");\r\nconst ctx2 = canvas2.getContext(\"2d\");\r\nconst TO_RADIANS = Math.PI/180; \r\nconst headsHeroSrc = ['testimages/hero/head/knight_head_1.png', 'testimages/hero/head/knight_head_2.png', 'testimages/hero/head/knight_head_3.png', 'testimages/hero/head/1_head.png'];\r\nconst bodiesHeroSrs = ['testimages/hero/body/knight_chest_1.png', 'testimages/hero/body/knight_chest_2.png', 'testimages/hero/body/knight_chest_3.png'];\r\nconst armsHeroLeftSrc = ['testimages/hero/armleft/knight_arm_left_1.png', 'testimages/hero/armleft/knight_arm_left_2.png', 'testimages/hero/armleft/knight_arm_left_3.png'];\r\nconst armsHeroRightSrc = ['testimages/hero/armright/knight_arm_right_1.png', 'testimages/hero/armright/knight_arm_right_2.png', 'testimages/hero/armright/knight_arm_right_3.png'];\r\nconst legHeroLeftSrc = ['testimages/hero/legleft/knight_leg_left_1.png', 'testimages/hero/legleft/knight_leg_left_2.png', 'testimages/hero/legleft/knight_leg_left_3.png'];\r\nconst legHeroRightSrc = ['testimages/hero/legright/knight_leg_right_1.png', 'testimages/hero/legright/knight_leg_right_2.png', 'testimages/hero/legright/knight_leg_right_3.png'];\r\nconst weaponHeroLeftSrc = ['testimages/hero/weaponleft/knight_weapon_left_1.png', 'testimages/hero/weaponleft/knight_weapon_left_2.png', 'testimages/hero/weaponleft/knight_weapon_left_3.png'];\r\nconst weaponHeroRightSrc = ['testimages/hero/weaponright/knight_weapon_right_1.png', 'testimages/hero/weaponright/knight_weapon_right_2.png', 'testimages/hero/weaponright/knight_weapon_right_3.png'];\r\n\r\nconst headsEnemySrc = ['testimages/enemy/head/orc_head_1.png', 'testimages/enemy/head/orc_head_2.png', 'testimages/enemy/head/orc_head_3.png'];\r\nconst bodiesEnemySrc = ['testimages/enemy/body/orc_chest_1.png', 'testimages/enemy/body/orc_chest_2.png', 'testimages/enemy/body/orc_chest_3.png'];\r\nconst armsLeftEnemySrc = ['testimages/enemy/armleft/orc_arm_left_1.png', 'testimages/enemy/armleft/orc_arm_left_2.png', 'testimages/enemy/armleft/orc_arm_left_3.png'];\r\nconst armsRightEnemySrc = ['testimages/enemy/armright/orc_arm_right_1.png', 'testimages/enemy/armright/orc_arm_right_2.png', 'testimages/enemy/armright/orc_arm_right_3.png'];\r\nconst legsLeftEnemySrc = ['testimages/enemy/legleft/orc_leg_left_1.png', 'testimages/enemy/legleft/orc_leg_left_2.png', 'testimages/enemy/legleft/orc_leg_left_3.png'];\r\nconst legsRightEnemySrc = ['testimages/enemy/legright/orc_leg_right_1.png', 'testimages/enemy/legright/orc_leg_right_2.png', 'testimages/enemy/legright/orc_leg_right_3.png'];\r\nconst weaponsLeftEnemySrc = ['testimages/enemy/weaponleft/orc_weapon_left_1.png', 'testimages/enemy/weaponleft/orc_weapon_left_2.png', 'testimages/enemy/weaponleft/orc_weapon_left_3.png'];\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/constants.js?");

/***/ }),

/***/ "./js/resources.js":
/*!*************************!*\
  !*** ./js/resources.js ***!
  \*************************/
/*! exports provided: res */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"res\", function() { return res; });\nconst res = (function() {\r\n    var resourceCache = {};\r\n    var loading = [];\r\n    var readyCallbacks = [];\r\n\r\n    // Load an image url or an array of image urls\r\n    function load(urlOrArr) {\r\n        if(urlOrArr instanceof Array) {\r\n            urlOrArr.forEach(function(url) {\r\n                _load(url);\r\n            });\r\n        }\r\n        else {\r\n            _load(urlOrArr);\r\n        }\r\n    }\r\n\r\n    function _load(url) {\r\n        if(resourceCache[url]) {\r\n            return resourceCache[url];\r\n        }\r\n        else {\r\n            var img = new Image();\r\n            img.onload = function() {\r\n                resourceCache[url] = img;\r\n\r\n                if(isReady()) {\r\n                    readyCallbacks.forEach(function(func) { func(); });\r\n                }\r\n            };\r\n            resourceCache[url] = false;\r\n            img.src = url;\r\n        }\r\n    }\r\n\r\n    function get(url) {\r\n        return resourceCache[url];\r\n    }\r\n\r\n    function isReady() {\r\n        var ready = true;\r\n        for(var k in resourceCache) {\r\n            if(resourceCache.hasOwnProperty(k) &&\r\n               !resourceCache[k]) {\r\n                ready = false;\r\n            }\r\n        }\r\n        return ready;\r\n    }\r\n\r\n    function onReady(func) {\r\n        readyCallbacks.push(func);\r\n    }\r\n\r\n    window.resources = { \r\n        load: load,\r\n        get: get,\r\n        onReady: onReady,\r\n        isReady: isReady\r\n    };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./js/resources.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ \"./js/animations.js\");\n/* harmony import */ var _classes_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Hero */ \"./js/classes/Hero.js\");\n/* harmony import */ var _classes_Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Enemy */ \"./js/classes/Enemy.js\");\n/* harmony import */ var _classes_SpriteHeroContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/SpriteHeroContainer */ \"./js/classes/SpriteHeroContainer.js\");\n/* harmony import */ var _classes_SpriteEnemyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/SpriteEnemyContainer */ \"./js/classes/SpriteEnemyContainer.js\");\n/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources */ \"./js/resources.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nresources.load(_constants__WEBPACK_IMPORTED_MODULE_6__[\"headsHeroSrc\"].concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"bodiesHeroSrs\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"armsHeroLeftSrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"armsHeroRightSrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"legHeroLeftSrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"legHeroRightSrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"weaponHeroLeftSrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"weaponHeroRightSrc\"]));\r\nresources.load(_constants__WEBPACK_IMPORTED_MODULE_6__[\"headsEnemySrc\"].concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"bodiesEnemySrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"armsLeftEnemySrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"armsRightEnemySrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"legsLeftEnemySrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"legsRightEnemySrc\"]).concat(_constants__WEBPACK_IMPORTED_MODULE_6__[\"weaponsLeftEnemySrc\"]));\r\n\r\nresources.onReady(\r\n    () => {\r\n        const gnom = new _classes_Hero__WEBPACK_IMPORTED_MODULE_1__[\"Hero\"]('Fred');\r\n        const view1 = new _classes_SpriteHeroContainer__WEBPACK_IMPORTED_MODULE_3__[\"SpriteHeroContainer\"](0, 0, 0, 0, 0, 0, 0, 0);\r\n        gnom.setView(view1);\r\n        gnom.setPosition(100, 500);\r\n        gnom.draw();\r\n        gnom.tick();\r\n       \r\n        const gnom2 = new _classes_Enemy__WEBPACK_IMPORTED_MODULE_2__[\"Enemy\"]('Jimmy');\r\n        const view2 = new _classes_SpriteEnemyContainer__WEBPACK_IMPORTED_MODULE_4__[\"SpriteEnemyContainer\"](0, 0, 0, 0, 1, 1, 1);\r\n        \r\n        gnom2.setView(view2);\r\n        gnom2.setPosition(600, 500);\r\n        gnom2.draw();\r\n        gnom2.tick();\r\n    }\r\n);\r\n\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });