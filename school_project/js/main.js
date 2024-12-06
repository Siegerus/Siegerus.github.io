/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

//import $ from "jquery";

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__close").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("label.error").css("display", "none");
  });
  function closeModal(item) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__close").on("click", function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).removeClass("modal__overlay_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).removeClass("modal__item_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).removeClass("modal__form_active");
    });
  }
  closeModal(".modal__overlay");
  closeModal(".modal__item");
  closeModal(".modal__form");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".btn").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__form").addClass("modal__form_active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__overlay").addClass("modal__overlay_active");
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__overlay").click(function (e) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(".modal__overlay")) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__overlay").removeClass("modal__overlay_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__item").removeClass("modal__item_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__form").removeClass("modal__form_active");
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/start/start.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/start/start.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);



//const jqueryValidate = require("jquery-validation");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("form").submit(function (e) {
    e.preventDefault();
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).valid()) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: "POST",
      async: true,
      url: "mailer/smart.php",
      data: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).serialize()
    }).done(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("input").val("");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__item").addClass("modal__item_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__overlay").addClass("modal__overlay_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal__form").removeClass("modal__form_active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("form").trigger("reset");
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: "POST",
      async: true,
      url: "mailer/telegram/telegram.php",
      data: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).serialize()
    });
    return false;
  });
  function submitForms(form) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).validate({
      errorPlacement: function errorPlacement(error, element) {
        if (element.hasClass("start-feed-form__hidden_start")) {
          error.appendTo(".start-feed-form__error-box_start");
        } else if (element.hasClass("start-feed-form__hidden_modal")) {
          error.appendTo(".start-feed-form__error-box_modal");
        } else {
          error.insertAfter(element);
        }
      },
      ignore: "",
      rules: {
        user: {
          required: true,
          rangelength: [2, 23]
        },
        phone: {
          required: true,
          justnumber: true,
          rangelength: [10, 14]
        },
        email: {
          required: true,
          justmail: true,
          rangelength: [5, 30]
        },
        policy: {
          required: true
        }
      },
      messages: {
        user: {
          required: "Введите имя",
          rangelength: "Введите от 2 до 23 символов"
        },
        phone: {
          required: "Введите номер телефона",
          justnumber: "Укажите корректный номер телефона",
          rangelength: "Укажите корректный номер телефона"
        },
        email: {
          required: "Укажите адрес почты",
          justmail: "Некорректный адрес почты"
        },
        policy: {
          required: "Ознакомьтесь с политикой конфиденциальности"
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default().validator.addMethod("justmail", function (value, element) {
      return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test(value);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default().validator.addMethod("justnumber", function (value, element) {
      return this.optional(element) || /^[+-]?([0-9]*\\${delimiter})?[0-9]+$/.test(value);
    });
  }
  submitForms("#start-feed-form");
  submitForms("#modal__form");
});

/***/ }),

/***/ "./src/blocks/modules/targets/targets.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/targets/targets.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_jquery_src_jquery_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/jquery/src/jquery-global */ "./node_modules/jquery/src/jquery-global.js");
/* harmony import */ var mediaelement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mediaelement */ "./node_modules/mediaelement/full.js");
/* harmony import */ var mediaelement__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mediaelement__WEBPACK_IMPORTED_MODULE_2__);





jquery__WEBPACK_IMPORTED_MODULE_0___default()(".targets__player").mediaelementplayer({});

/* $(".targets__player").mediaelementplayer({
	
    success: function(mediaElement, originalNode, instance) {
    }
    

}); */

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_targets_targets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/targets/targets */ "./src/blocks/modules/targets/targets.js");
/* harmony import */ var _modules_start_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/start/start */ "./src/blocks/modules/start/start.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map