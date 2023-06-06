/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root {
    --primary-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --primary-bg-color: #f9fafb;
    --secondary-bg-color: #f3f4f6;
    --hover-bg-color: #e5e7eb;
    --primary-txt-color: #4b5563;
    --secondary-txt-color: #9ca3af;
    --primary-border-color: #e5e7eb;
     /* Priority colors */
    --high-priority-bg-color: #fecaca;
    --high-priority-txt-color: #ef4444;
    --med-priority-bg-color: #fde68a;
    --med-priority-txt-color: #eab308;
    --low-priority-bg-color: #bbf7d0;
    --low-priority-txt-color: #22c55e;
}

.dark-mode {
    --primary-bg-color: #111827;
    --secondary-bg-color: #030712;
    --hover-bg-color: #1f2937;
    --primary-txt-color: #f9fafb;
    --secondary-txt-color: #9ca3af;
    --primary-border-color: #1f2937;
}

body {
    font-family: var(--primary-font);
    font-size: 16px;
    background-color: var(--primary-bg-color);
    color: var(--primary-txt-color);
}

h1, h2, h3 {
    font-weight: 600;
}

h2 {
    font-size: 2.2rem;
}

h3 {
    font-size: 1.2rem;
}

#content {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

nav {
    display: flex;
    align-items: center;
    padding: 0px 48px;
    gap: 16px;
    height: 4rem;
    background-color: var(--secondary-bg-color);
    border-bottom: 1px solid var(--primary-border-color);
}

.nav-right, .nav-left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-left {
    margin-left: auto;
}

nav button {
    font-size: 1.2rem;
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    color: var(--secondary-txt-color);
}


nav button i {
    /* font-size: 1.2rem; */
}

nav img {
    height: 2.2rem;
    border-radius: 50%;
}

nav button:hover {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
    cursor: pointer;
}

/* Sidebar */

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 48px;
    height: 100%;
    min-width: 336px;
    background-color: var(--secondary-bg-color);
}

.sidebar div {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sb-btn-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sb-btn {
    font-size: 1.2rem;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background: none;
    text-align: left;
    color: var(--secondary-txt-color);
    display: flex;
    align-items: center;
    gap: 8px;
}

.sb-btn i {
    padding-bottom: 2px;
}

.sb-btn span {
    font-size: 0.8rem;
    margin-left: auto;
}

.sb-btn:hover {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
    cursor: pointer;
}

.sb-projects-heading {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--primary-border-color);
}


.main-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr;
}

/* Main View Content */

.view-container {
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 8px;
    position: relative; /* For add-task-overlay */
    /* filter: blur(2px); */
}

.tasks-container {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.task {
    display: flex;
    /* align-items: center; */
    gap: 16px;
    padding: 12px;
    border-bottom: 1px solid var(--primary-border-color);
}

.task:hover {
    cursor: pointer;
}

.complete-task-btn {
    background: none;
    border: none;
}

.fa-regular.fa-circle {
    font-size: 1rem;
    color: var(--secondary-txt-color);
}

.fa-regular.fa-circle:hover {
    color: var(--primary-txt-color);
    cursor: pointer;
}

.task-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-left: 4px solid var(--primary-border-color);
    padding-left: 8px;
}

.task-description {
    font-size: 0.8rem;
    color: var(--secondary-txt-color);
}

.meta-tag-container {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 8px;
    margin-left: auto;
    margin-bottom: auto;
}

.meta-tag {
    width: max-content;
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 500;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-txt-color);
}

.high-priority {
    background-color: var(--high-priority-bg-color);
    color: var(--high-priority-txt-color);
}

.med-priority {    
    background-color: var(--med-priority-bg-color);
    color: var(--med-priority-txt-color);
}

.low-priority {    
    background-color: var(--low-priority-bg-color);
    color: var(--low-priority-txt-color);
}

#add-task-btn {
    display: flex;
    gap: 4px;
    align-items: center;
    border: none;
    background: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 1rem;
    font-family: var(--primary-font);
    color: var(--secondary-txt-color);
}

#add-task-btn:hover {
    color: var(--primary-txt-color);
    cursor: pointer;
}

/* .add-task-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--secondary-bg-color);
    opacity: 0.3;
} */

.add-task-form-container {
    border: 1px solid var(--primary-border-color);
    border-radius: 4px;
    width: 100%;
    padding: 24px;
}

.add-task-form-container form {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.task-info-input-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.task-info-input-container input[type="text"] {
    outline: none;
    border: none;
    background: none;
    font-size: 1rem;
    color: var(--primary-txt-color);
}

/* .task-info-input-container input[type="text"]::placeholder:hover {
    cursor: text;
} */

.task-info-input-container input[type="text"]::placeholder {
    color: var(--secondary-txt-color);
}

.textarea {
    outline: none;
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    overflow: hidden;
    resize: none;
    min-height: 40px;
    line-height: 20px;
    font-size: 0.8rem;
    color: var(--primary-txt-color);
    font-family: var(--primary-font);
}

.textarea[contenteditable]:empty::before {
    content: "Task description";
    color: var(--secondary-txt-color);
    font-size: 0.8rem;
    font-family: var(--primary-font);
}

.add-task-form-container .btns-container {
    /* border: 1px solid red; */
    display: flex;
    justify-content: end;
    gap: 8px;
}

.add-task-form-container .btns-container button {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 1rem;
    font-family: var(--primary-font);
    font-weight: 500;
    border: 1px solid var(--primary-border-color);
    background-color: var(--secondary-bg-color);
    color: var(--secondary-txt-color);
}

.add-task-form-container .btns-container button:hover {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\n:root {\n    --primary-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --primary-bg-color: #f9fafb;\n    --secondary-bg-color: #f3f4f6;\n    --hover-bg-color: #e5e7eb;\n    --primary-txt-color: #4b5563;\n    --secondary-txt-color: #9ca3af;\n    --primary-border-color: #e5e7eb;\n     /* Priority colors */\n    --high-priority-bg-color: #fecaca;\n    --high-priority-txt-color: #ef4444;\n    --med-priority-bg-color: #fde68a;\n    --med-priority-txt-color: #eab308;\n    --low-priority-bg-color: #bbf7d0;\n    --low-priority-txt-color: #22c55e;\n}\n\n.dark-mode {\n    --primary-bg-color: #111827;\n    --secondary-bg-color: #030712;\n    --hover-bg-color: #1f2937;\n    --primary-txt-color: #f9fafb;\n    --secondary-txt-color: #9ca3af;\n    --primary-border-color: #1f2937;\n}\n\nbody {\n    font-family: var(--primary-font);\n    font-size: 16px;\n    background-color: var(--primary-bg-color);\n    color: var(--primary-txt-color);\n}\n\nh1, h2, h3 {\n    font-weight: 600;\n}\n\nh2 {\n    font-size: 2.2rem;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    padding: 0px 48px;\n    gap: 16px;\n    height: 4rem;\n    background-color: var(--secondary-bg-color);\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\n.nav-right, .nav-left {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.nav-left {\n    margin-left: auto;\n}\n\nnav button {\n    font-size: 1.2rem;\n    padding: 4px;\n    border-radius: 4px;\n    border: none;\n    background: none;\n    display: flex;\n    align-items: center;\n    color: var(--secondary-txt-color);\n}\n\n\nnav button i {\n    /* font-size: 1.2rem; */\n}\n\nnav img {\n    height: 2.2rem;\n    border-radius: 50%;\n}\n\nnav button:hover {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 48px;\n    padding: 48px;\n    height: 100%;\n    min-width: 336px;\n    background-color: var(--secondary-bg-color);\n}\n\n.sidebar div {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.sb-btn-container {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.sb-btn {\n    font-size: 1.2rem;\n    padding: 4px 8px;\n    border-radius: 4px;\n    border: none;\n    background: none;\n    text-align: left;\n    color: var(--secondary-txt-color);\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.sb-btn i {\n    padding-bottom: 2px;\n}\n\n.sb-btn span {\n    font-size: 0.8rem;\n    margin-left: auto;\n}\n\n.sb-btn:hover {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\n.sb-projects-heading {\n    padding-bottom: 8px;\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\n\n.main-container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\n\n/* Main View Content */\n\n.view-container {\n    padding: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    width: 100%;\n    gap: 8px;\n    position: relative; /* For add-task-overlay */\n    /* filter: blur(2px); */\n}\n\n.tasks-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    /* align-items: center; */\n    gap: 16px;\n    padding: 12px;\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\n.task:hover {\n    cursor: pointer;\n}\n\n.complete-task-btn {\n    background: none;\n    border: none;\n}\n\n.fa-regular.fa-circle {\n    font-size: 1rem;\n    color: var(--secondary-txt-color);\n}\n\n.fa-regular.fa-circle:hover {\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\n.task-info {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    border-left: 4px solid var(--primary-border-color);\n    padding-left: 8px;\n}\n\n.task-description {\n    font-size: 0.8rem;\n    color: var(--secondary-txt-color);\n}\n\n.meta-tag-container {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    gap: 8px;\n    margin-left: auto;\n    margin-bottom: auto;\n}\n\n.meta-tag {\n    width: max-content;\n    padding: 2px 4px;\n    border-radius: 4px;\n    font-weight: 500;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-txt-color);\n}\n\n.high-priority {\n    background-color: var(--high-priority-bg-color);\n    color: var(--high-priority-txt-color);\n}\n\n.med-priority {    \n    background-color: var(--med-priority-bg-color);\n    color: var(--med-priority-txt-color);\n}\n\n.low-priority {    \n    background-color: var(--low-priority-bg-color);\n    color: var(--low-priority-txt-color);\n}\n\n#add-task-btn {\n    display: flex;\n    gap: 4px;\n    align-items: center;\n    border: none;\n    background: none;\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-family: var(--primary-font);\n    color: var(--secondary-txt-color);\n}\n\n#add-task-btn:hover {\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\n/* .add-task-overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: var(--secondary-bg-color);\n    opacity: 0.3;\n} */\n\n.add-task-form-container {\n    border: 1px solid var(--primary-border-color);\n    border-radius: 4px;\n    width: 100%;\n    padding: 24px;\n}\n\n.add-task-form-container form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.task-info-input-container {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.task-info-input-container input[type=\"text\"] {\n    outline: none;\n    border: none;\n    background: none;\n    font-size: 1rem;\n    color: var(--primary-txt-color);\n}\n\n/* .task-info-input-container input[type=\"text\"]::placeholder:hover {\n    cursor: text;\n} */\n\n.task-info-input-container input[type=\"text\"]::placeholder {\n    color: var(--secondary-txt-color);\n}\n\n.textarea {\n    outline: none;\n    display: flex;\n    flex-wrap: wrap;\n    word-break: break-all;\n    overflow: hidden;\n    resize: none;\n    min-height: 40px;\n    line-height: 20px;\n    font-size: 0.8rem;\n    color: var(--primary-txt-color);\n    font-family: var(--primary-font);\n}\n\n.textarea[contenteditable]:empty::before {\n    content: \"Task description\";\n    color: var(--secondary-txt-color);\n    font-size: 0.8rem;\n    font-family: var(--primary-font);\n}\n\n.add-task-form-container .btns-container {\n    /* border: 1px solid red; */\n    display: flex;\n    justify-content: end;\n    gap: 8px;\n}\n\n.add-task-form-container .btns-container button {\n    padding: 4px 8px;\n    border-radius: 4px;\n    font-size: 1rem;\n    font-family: var(--primary-font);\n    font-weight: 500;\n    border: 1px solid var(--primary-border-color);\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-txt-color);\n}\n\n.add-task-form-container .btns-container button:hover {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   allTasks: () => (/* binding */ allTasks),
/* harmony export */   inbox: () => (/* binding */ inbox)
/* harmony export */ });
const allTasks = [];

class Task {
    constructor(_title, _description, _dueDate, _priority, _project) {
        this.title = _title;
        this.description = _description;
        this.priority = _priority;
        this.project = _project;
        this.dueDate = new Date(_dueDate.split('-').join(', '));
        this.completed = false;
    }

    add() {
        allTasks.push(this);
    };

    delete() {
        let index = allTasks.findIndex((task) => task === this);
        allTasks.splice(index, 1);
    };

    markComplete() {
        this.completed = true;
    }
}

// This is needed for displaying project names on DOM, otherwise it has no use
const allProjects = [];

class Project {
    constructor(_title, _description) {
        this.title = _title;
        this.description = _description;
    }

    add() {
        allProjects.push(this);
    }

    delete() {
        let index = allProjects.findIndex((project) => project === this);
        allProjects.splice(index, 1);
    }
}

const newTask = new Task('Write book', 'At least 50 pages', '2023-6-1', 'High', 'Gym');
newTask.add();
const newTask2 = new Task('Write blog', 'At least 50 words', '2023-6-1', 'Medium', 'Work');
newTask2.add();
const newTask3 = new Task('Do pullups', 'Aim for 10', '2023-11-1', 'Low');
newTask3.add();

const inbox = allTasks.filter((task) => task.project === undefined);
// const todayTasks = allTasks.filter((task) => task.dueDate.isNow())



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ "./src/modules/app.js");



console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.allTasks);
console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.inbox);


// newTask2.delete();
// console.log(allTasks);

// const newProject = new Project('Gym', 'Time to get fit');
// newProject.add();
// const newProject2 = new Project('Work', 'Things for the slog');
// newProject2.add();
// console.log(newProject);
// console.log(allProjects);

// newProject.delete();
// console.log(allProjects);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FB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OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNzRDs7QUFFNUUsWUFBWSxrREFBUTtBQUNwQixZQUFZLCtDQUFLOzs7QUFHakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICNmOWZhZmI7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICNmM2Y0ZjY7XG4gICAgLS1ob3Zlci1iZy1jb2xvcjogI2U1ZTdlYjtcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjNGI1NTYzO1xuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcbiAgICAtLXByaW1hcnktYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xuICAgICAvKiBQcmlvcml0eSBjb2xvcnMgKi9cbiAgICAtLWhpZ2gtcHJpb3JpdHktYmctY29sb3I6ICNmZWNhY2E7XG4gICAgLS1oaWdoLXByaW9yaXR5LXR4dC1jb2xvcjogI2VmNDQ0NDtcbiAgICAtLW1lZC1wcmlvcml0eS1iZy1jb2xvcjogI2ZkZTY4YTtcbiAgICAtLW1lZC1wcmlvcml0eS10eHQtY29sb3I6ICNlYWIzMDg7XG4gICAgLS1sb3ctcHJpb3JpdHktYmctY29sb3I6ICNiYmY3ZDA7XG4gICAgLS1sb3ctcHJpb3JpdHktdHh0LWNvbG9yOiAjMjJjNTVlO1xufVxuXG4uZGFyay1tb2RlIHtcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICMxMTE4Mjc7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwMzA3MTI7XG4gICAgLS1ob3Zlci1iZy1jb2xvcjogIzFmMjkzNztcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZjlmYWZiO1xuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcbiAgICAtLXByaW1hcnktYm9yZGVyLWNvbG9yOiAjMWYyOTM3O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDQ4cHg7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG59XG5cbi5uYXYtcmlnaHQsIC5uYXYtbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4ubmF2LWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5uYXYgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cblxubmF2IGJ1dHRvbiBpIHtcbiAgICAvKiBmb250LXNpemU6IDEuMnJlbTsgKi9cbn1cblxubmF2IGltZyB7XG4gICAgaGVpZ2h0OiAyLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5uYXYgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFNpZGViYXIgKi9cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQ4cHg7XG4gICAgcGFkZGluZzogNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xufVxuXG4uc2lkZWJhciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNiLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNiLWJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc2ItYnRuIGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5zYi1idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zYi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNiLXByb2plY3RzLWhlYWRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcbn1cblxuLyogTWFpbiBWaWV3IENvbnRlbnQgKi9cblxuLnZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0OHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBGb3IgYWRkLXRhc2stb3ZlcmxheSAqL1xuICAgIC8qIGZpbHRlcjogYmx1cigycHgpOyAqL1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmZhLXJlZ3VsYXIuZmEtY2lyY2xlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xufVxuXG4uZmEtcmVndWxhci5mYS1jaXJjbGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbi5tZXRhLXRhZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5tZXRhLXRhZyB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS10eHQtY29sb3IpO1xufVxuXG4ubWVkLXByaW9yaXR5IHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5LXR4dC1jb2xvcik7XG59XG5cbi5sb3ctcHJpb3JpdHkgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktdHh0LWNvbG9yKTtcbn1cblxuI2FkZC10YXNrLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbiNhZGQtdGFzay1idG46aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAuYWRkLXRhc2stb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIG9wYWNpdHk6IDAuMztcbn0gKi9cblxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5hZGQtdGFzay1mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50YXNrLWluZm8taW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50YXNrLWluZm8taW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xufVxuXG4vKiAudGFzay1pbmZvLWlucHV0LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXTo6cGxhY2Vob2xkZXI6aG92ZXIge1xuICAgIGN1cnNvcjogdGV4dDtcbn0gKi9cblxuLnRhc2staW5mby1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbi50ZXh0YXJlYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG4udGV4dGFyZWFbY29udGVudGVkaXRhYmxlXTplbXB0eTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlRhc2sgZGVzY3JpcHRpb25cIjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG59XG5cbi5hZGQtdGFzay1mb3JtLWNvbnRhaW5lciAuYnRucy1jb250YWluZXIge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogOHB4O1xufVxuXG4uYWRkLXRhc2stZm9ybS1jb250YWluZXIgLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xufVxuXG4uYWRkLXRhc2stZm9ybS1jb250YWluZXIgLmJ0bnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxzSkFBc0o7SUFDdEosMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwrQkFBK0I7S0FDOUIsb0JBQW9CO0lBQ3JCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHlDQUF5QztJQUN6QywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJ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QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZm9udDogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogI2Y5ZmFmYjtcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICNmM2Y0ZjY7XFxuICAgIC0taG92ZXItYmctY29sb3I6ICNlNWU3ZWI7XFxuICAgIC0tcHJpbWFyeS10eHQtY29sb3I6ICM0YjU1NjM7XFxuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcXG4gICAgLS1wcmltYXJ5LWJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXG4gICAgIC8qIFByaW9yaXR5IGNvbG9ycyAqL1xcbiAgICAtLWhpZ2gtcHJpb3JpdHktYmctY29sb3I6ICNmZWNhY2E7XFxuICAgIC0taGlnaC1wcmlvcml0eS10eHQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIC0tbWVkLXByaW9yaXR5LWJnLWNvbG9yOiAjZmRlNjhhO1xcbiAgICAtLW1lZC1wcmlvcml0eS10eHQtY29sb3I6ICNlYWIzMDg7XFxuICAgIC0tbG93LXByaW9yaXR5LWJnLWNvbG9yOiAjYmJmN2QwO1xcbiAgICAtLWxvdy1wcmlvcml0eS10eHQtY29sb3I6ICMyMmM1NWU7XFxufVxcblxcbi5kYXJrLW1vZGUge1xcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICMxMTE4Mjc7XFxuICAgIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiAjMDMwNzEyO1xcbiAgICAtLWhvdmVyLWJnLWNvbG9yOiAjMWYyOTM3O1xcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZjlmYWZiO1xcbiAgICAtLXNlY29uZGFyeS10eHQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6ICMxZjI5Mzc7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDQ4cHg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ubmF2LXJpZ2h0LCAubmF2LWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm5hdi1sZWZ0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG5cXG5uYXYgYnV0dG9uIGkge1xcbiAgICAvKiBmb250LXNpemU6IDEuMnJlbTsgKi9cXG59XFxuXFxubmF2IGltZyB7XFxuICAgIGhlaWdodDogMi4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbm5hdiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0OHB4O1xcbiAgICBwYWRkaW5nOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxufVxcblxcbi5zaWRlYmFyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2ItYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2ItYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2ItYnRuIGkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uc2ItYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zYi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNiLXByb2plY3RzLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxufVxcblxcbi8qIE1haW4gVmlldyBDb250ZW50ICovXFxuXFxuLnZpZXctY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogRm9yIGFkZC10YXNrLW92ZXJsYXkgKi9cXG4gICAgLyogZmlsdGVyOiBibHVyKDJweCk7ICovXFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mYS1yZWd1bGFyLmZhLWNpcmNsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG4uZmEtcmVndWxhci5mYS1jaXJjbGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbi5tZXRhLXRhZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5tZXRhLXRhZyB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LXR4dC1jb2xvcik7XFxufVxcblxcbi5tZWQtcHJpb3JpdHkgeyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eS10eHQtY29sb3IpO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktdHh0LWNvbG9yKTtcXG59XFxuXFxuI2FkZC10YXNrLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAuYWRkLXRhc2stb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufSAqL1xcblxcbi5hZGQtdGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2staW5mby1pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLnRhc2staW5mby1pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbi8qIC50YXNrLWluZm8taW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufSAqL1xcblxcbi50YXNrLWluZm8taW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxufVxcblxcbi50ZXh0YXJlYVtjb250ZW50ZWRpdGFibGVdOmVtcHR5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiVGFzayBkZXNjcmlwdGlvblxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybS1jb250YWluZXIgLmJ0bnMtY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLWNvbnRhaW5lciAuYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVyIC5idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYWxsVGFza3MgPSBbXTtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IoX3RpdGxlLCBfZGVzY3JpcHRpb24sIF9kdWVEYXRlLCBfcHJpb3JpdHksIF9wcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBfdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBfcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IF9wcm9qZWN0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXcgRGF0ZShfZHVlRGF0ZS5zcGxpdCgnLScpLmpvaW4oJywgJykpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgYWxsVGFza3MucHVzaCh0aGlzKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSBhbGxUYXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2sgPT09IHRoaXMpO1xuICAgICAgICBhbGxUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBtYXJrQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIFRoaXMgaXMgbmVlZGVkIGZvciBkaXNwbGF5aW5nIHByb2plY3QgbmFtZXMgb24gRE9NLCBvdGhlcndpc2UgaXQgaGFzIG5vIHVzZVxuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoX3RpdGxlLCBfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSBhbGxQcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QgPT09IHRoaXMpO1xuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCdXcml0ZSBib29rJywgJ0F0IGxlYXN0IDUwIHBhZ2VzJywgJzIwMjMtNi0xJywgJ0hpZ2gnLCAnR3ltJyk7XG5uZXdUYXNrLmFkZCgpO1xuY29uc3QgbmV3VGFzazIgPSBuZXcgVGFzaygnV3JpdGUgYmxvZycsICdBdCBsZWFzdCA1MCB3b3JkcycsICcyMDIzLTYtMScsICdNZWRpdW0nLCAnV29yaycpO1xubmV3VGFzazIuYWRkKCk7XG5jb25zdCBuZXdUYXNrMyA9IG5ldyBUYXNrKCdEbyBwdWxsdXBzJywgJ0FpbSBmb3IgMTAnLCAnMjAyMy0xMS0xJywgJ0xvdycpO1xubmV3VGFzazMuYWRkKCk7XG5cbmNvbnN0IGluYm94ID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09IHVuZGVmaW5lZCk7XG4vLyBjb25zdCB0b2RheVRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmR1ZURhdGUuaXNOb3coKSlcblxuZXhwb3J0IHsgYWxsVGFza3MsIFRhc2ssIGFsbFByb2plY3RzLCBQcm9qZWN0LCBpbmJveCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgYWxsVGFza3MsIFRhc2ssIGFsbFByb2plY3RzLCBQcm9qZWN0LCBpbmJveCB9IGZyb20gJy4vbW9kdWxlcy9hcHAnO1xuXG5jb25zb2xlLmxvZyhhbGxUYXNrcyk7XG5jb25zb2xlLmxvZyhpbmJveCk7XG5cblxuLy8gbmV3VGFzazIuZGVsZXRlKCk7XG4vLyBjb25zb2xlLmxvZyhhbGxUYXNrcyk7XG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgnR3ltJywgJ1RpbWUgdG8gZ2V0IGZpdCcpO1xuLy8gbmV3UHJvamVjdC5hZGQoKTtcbi8vIGNvbnN0IG5ld1Byb2plY3QyID0gbmV3IFByb2plY3QoJ1dvcmsnLCAnVGhpbmdzIGZvciB0aGUgc2xvZycpO1xuLy8gbmV3UHJvamVjdDIuYWRkKCk7XG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuLy8gbmV3UHJvamVjdC5kZWxldGUoKTtcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==