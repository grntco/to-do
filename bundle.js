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
    /* Add task button colors */
    --accent-bg-color: #bfdbfe;
    --accent-txt-color: #3b82f6;
    --accent-hover-bg-color: #93c5fd;
    --accent-hover-txt-color: #2563eb;
}

.dark-mode {
    --primary-bg-color: #111827;
    --secondary-bg-color: #030712;
    --hover-bg-color: #1f2937;
    --primary-txt-color: #f9fafb;
    --secondary-txt-color: #9ca3af;
    --primary-border-color: #1f2937;
}

/* Generic system styles */

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

button {
    border: none;
    font-family: var(--primary-font);
    font-weight: 500;
    font-size: 1rem;
    border-radius: 4px;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-txt-color);
}

button:hover {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
    cursor: pointer;
}

.icon-btn {
    font-size: 1.2rem;
    padding: 4px;
    display: flex;
    align-items: center;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

/* Nav Bar */

nav {
    display: flex;
    align-items: center;
    padding: 0px 48px;
    gap: 8px;
    height: 4rem;
    background-color: var(--secondary-bg-color);
    border-bottom: 1px solid var(--primary-border-color);
}

nav .left-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
}

nav img {
    height: 2.2rem;
    border-radius: 50%;
}

/* Main Container */

.main-container {
    height: 100%;
    width: 100%;
    display: flex;
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

.collapse {
    position: absolute;
    left: -336px;
}

.sidebar .view-list-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar .btns-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar .btns-container button {
    font-size: 1.2rem;
    padding: 4px 8px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;
}

.sidebar .btns-container button span {
    font-size: 0.8rem;
    margin-left: auto;
}

.sidebar .projects-heading {
    display: flex;
    flex-direction: row;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--primary-border-color);
}

.sidebar .projects-heading .icon-btn { /* Probs change to id here since only one */
    margin-left: auto;
}

/* Main View Content */

.view-container {
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 8px;
    position: relative; /* For modals */
}

/* Tasks */

.tasks-container {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.task {
    display: flex;
    gap: 16px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--primary-border-color);
}

.task:hover {
    cursor: pointer;
}

.task .complete-btn, .complete-btn:hover  {
    background: none;
}

.task .primary-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-left: 4px solid var(--primary-border-color);
    padding-left: 8px;
}

.task .description {
    font-size: 0.8rem;
    color: var(--secondary-txt-color);
}

.task .meta-container {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 8px;
    margin-left: auto;
    margin-bottom: auto;
}

.task .meta-tag {
    width: max-content;
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 500;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-txt-color);
}

.task .high-priority {
    background-color: var(--high-priority-bg-color);
    color: var(--high-priority-txt-color);
}

.task .med-priority {    
    background-color: var(--med-priority-bg-color);
    color: var(--med-priority-txt-color);
}

.task .low-priority {    
    background-color: var(--low-priority-bg-color);
    color: var(--low-priority-txt-color);
}

#add-task-btn {
    padding: 4px 8px;
    background: none;
    display: flex;
    gap: 4px;
    align-items: center;
}

/* FORMS AND MODALS */

/* All forms */

form fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

form input[type="text"] {
    outline: none;
    border: none;
    background: none;
    font-size: 1rem;
    color: var(--primary-txt-color);
}

form input[type="text"]::placeholder {
    color: var(--secondary-txt-color);
}

form .textarea {
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

form .textarea[contenteditable]:empty::before {
    content: "Task description";
    color: var(--secondary-txt-color);
    font-size: 0.8rem;
    font-family: var(--primary-font);
}

form select, form input[type="date"] {
    outline: none;
    border: none;
    font-family: var(--primary-font);
    font-size: 1rem;
    border-radius: 4px;
    font-weight: 500;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-txt-color);
}

form select {
    padding: 2px 4px;
}

form input[type="date"] {
    padding: 4px 6px;
}

form select:focus, form input[type="date"]:focus {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
}

form select:hover, form input[type="date"]:hover {
    background-color: var(--hover-bg-color);
    color: var(--primary-txt-color);
    cursor: pointer;
}

form .btns-container {
    display: flex;
    justify-content: end;
    gap: 8px;
    margin-top: auto;
    margin-left: auto;
}

form .btns-container button {
    padding: 4px 8px;
    border: 1px solid var(--primary-border-color);
}

form .create-btn {
    background-color: var(--accent-bg-color);
    color: var(--accent-txt-color);
}

form .create-btn:hover {
    background-color: var(--accent-hover-bg-color);
    color: var(--accent-hover-txt-color);
}

/* New task form */

.new-task-form-container {
    border: 1px solid var(--primary-border-color);
    border-radius: 4px;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.new-task-form-container form {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.new-task-form-container form .meta-input-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

/* Modals */
.modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    align-items: center;
    justify-content: center;
}

.modal form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    border-radius: 4px;
    width: 336px;
    min-height: 240px;
    background-color: var(--primary-bg-color);
    border: 1px solid var(--primary-border-color);
}

.modal form h3 {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--primary-border-color);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n}\n\n:root {\n    --primary-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --primary-bg-color: #f9fafb;\n    --secondary-bg-color: #f3f4f6;\n    --hover-bg-color: #e5e7eb;\n    --primary-txt-color: #4b5563;\n    --secondary-txt-color: #9ca3af;\n    --primary-border-color: #e5e7eb;\n     /* Priority colors */\n    --high-priority-bg-color: #fecaca;\n    --high-priority-txt-color: #ef4444;\n    --med-priority-bg-color: #fde68a;\n    --med-priority-txt-color: #eab308;\n    --low-priority-bg-color: #bbf7d0;\n    --low-priority-txt-color: #22c55e;\n    /* Add task button colors */\n    --accent-bg-color: #bfdbfe;\n    --accent-txt-color: #3b82f6;\n    --accent-hover-bg-color: #93c5fd;\n    --accent-hover-txt-color: #2563eb;\n}\n\n.dark-mode {\n    --primary-bg-color: #111827;\n    --secondary-bg-color: #030712;\n    --hover-bg-color: #1f2937;\n    --primary-txt-color: #f9fafb;\n    --secondary-txt-color: #9ca3af;\n    --primary-border-color: #1f2937;\n}\n\n/* Generic system styles */\n\nbody {\n    font-family: var(--primary-font);\n    font-size: 16px;\n    background-color: var(--primary-bg-color);\n    color: var(--primary-txt-color);\n}\n\nh1, h2, h3 {\n    font-weight: 600;\n}\n\nh2 {\n    font-size: 2.2rem;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\nbutton {\n    border: none;\n    font-family: var(--primary-font);\n    font-weight: 500;\n    font-size: 1rem;\n    border-radius: 4px;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-txt-color);\n}\n\nbutton:hover {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\n.icon-btn {\n    font-size: 1.2rem;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n/* Nav Bar */\n\nnav {\n    display: flex;\n    align-items: center;\n    padding: 0px 48px;\n    gap: 8px;\n    height: 4rem;\n    background-color: var(--secondary-bg-color);\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\nnav .left-container {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-left: auto;\n}\n\nnav img {\n    height: 2.2rem;\n    border-radius: 50%;\n}\n\n/* Main Container */\n\n.main-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 48px;\n    padding: 48px;\n    height: 100%;\n    min-width: 336px;\n    background-color: var(--secondary-bg-color);\n}\n\n.collapse {\n    position: absolute;\n    left: -336px;\n}\n\n.sidebar .view-list-container {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.sidebar .btns-container {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.sidebar .btns-container button {\n    font-size: 1.2rem;\n    padding: 4px 8px;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.sidebar .btns-container button span {\n    font-size: 0.8rem;\n    margin-left: auto;\n}\n\n.sidebar .projects-heading {\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 8px;\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\n.sidebar .projects-heading .icon-btn { /* Probs change to id here since only one */\n    margin-left: auto;\n}\n\n/* Main View Content */\n\n.view-container {\n    padding: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    width: 100%;\n    gap: 8px;\n    position: relative; /* For modals */\n}\n\n/* Tasks */\n\n.tasks-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task {\n    display: flex;\n    gap: 16px;\n    padding: 12px 16px;\n    border-bottom: 1px solid var(--primary-border-color);\n}\n\n.task:hover {\n    cursor: pointer;\n}\n\n.task .complete-btn, .complete-btn:hover  {\n    background: none;\n}\n\n.task .primary-info {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    border-left: 4px solid var(--primary-border-color);\n    padding-left: 8px;\n}\n\n.task .description {\n    font-size: 0.8rem;\n    color: var(--secondary-txt-color);\n}\n\n.task .meta-container {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    gap: 8px;\n    margin-left: auto;\n    margin-bottom: auto;\n}\n\n.task .meta-tag {\n    width: max-content;\n    padding: 2px 4px;\n    border-radius: 4px;\n    font-weight: 500;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-txt-color);\n}\n\n.task .high-priority {\n    background-color: var(--high-priority-bg-color);\n    color: var(--high-priority-txt-color);\n}\n\n.task .med-priority {    \n    background-color: var(--med-priority-bg-color);\n    color: var(--med-priority-txt-color);\n}\n\n.task .low-priority {    \n    background-color: var(--low-priority-bg-color);\n    color: var(--low-priority-txt-color);\n}\n\n#add-task-btn {\n    padding: 4px 8px;\n    background: none;\n    display: flex;\n    gap: 4px;\n    align-items: center;\n}\n\n/* FORMS AND MODALS */\n\n/* All forms */\n\nform fieldset {\n    border: none;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\nform input[type=\"text\"] {\n    outline: none;\n    border: none;\n    background: none;\n    font-size: 1rem;\n    color: var(--primary-txt-color);\n}\n\nform input[type=\"text\"]::placeholder {\n    color: var(--secondary-txt-color);\n}\n\nform .textarea {\n    outline: none;\n    display: flex;\n    flex-wrap: wrap;\n    word-break: break-all;\n    overflow: hidden;\n    resize: none;\n    min-height: 40px;\n    line-height: 20px;\n    font-size: 0.8rem;\n    color: var(--primary-txt-color);\n    font-family: var(--primary-font);\n}\n\nform .textarea[contenteditable]:empty::before {\n    content: \"Task description\";\n    color: var(--secondary-txt-color);\n    font-size: 0.8rem;\n    font-family: var(--primary-font);\n}\n\nform select, form input[type=\"date\"] {\n    outline: none;\n    border: none;\n    font-family: var(--primary-font);\n    font-size: 1rem;\n    border-radius: 4px;\n    font-weight: 500;\n    background-color: var(--secondary-bg-color);\n    color: var(--secondary-txt-color);\n}\n\nform select {\n    padding: 2px 4px;\n}\n\nform input[type=\"date\"] {\n    padding: 4px 6px;\n}\n\nform select:focus, form input[type=\"date\"]:focus {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n}\n\nform select:hover, form input[type=\"date\"]:hover {\n    background-color: var(--hover-bg-color);\n    color: var(--primary-txt-color);\n    cursor: pointer;\n}\n\nform .btns-container {\n    display: flex;\n    justify-content: end;\n    gap: 8px;\n    margin-top: auto;\n    margin-left: auto;\n}\n\nform .btns-container button {\n    padding: 4px 8px;\n    border: 1px solid var(--primary-border-color);\n}\n\nform .create-btn {\n    background-color: var(--accent-bg-color);\n    color: var(--accent-txt-color);\n}\n\nform .create-btn:hover {\n    background-color: var(--accent-hover-bg-color);\n    color: var(--accent-hover-txt-color);\n}\n\n/* New task form */\n\n.new-task-form-container {\n    border: 1px solid var(--primary-border-color);\n    border-radius: 4px;\n    width: 100%;\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.new-task-form-container form {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.new-task-form-container form .meta-input-container {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n/* Modals */\n.modal {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 24px;\n    border-radius: 4px;\n    width: 336px;\n    min-height: 240px;\n    background-color: var(--primary-bg-color);\n    border: 1px solid var(--primary-border-color);\n}\n\n.modal form h3 {\n    padding-bottom: 8px;\n    border-bottom: 1px solid var(--primary-border-color);\n}"],"sourceRoot":""}]);
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

    getTasks() {
        return allTasks.filter(task => task.project === this.title);
    }
}

const newProject = new Project('Gym', 'Get swole');
newProject.add();



const newTask = new Task('Write book', 'At least 50 pages', '2023-6-1', 'High', 'Gym');
newTask.add();
const newTask2 = new Task('Write blog', 'At least 50 words', '2023-6-1', 'Medium', 'Work');
newTask2.add();
const newTask3 = new Task('Do pullups', 'Aim for 10', '2023-11-1', 'Low', 'Gym');
newTask3.add();

const inbox = allTasks.filter((task) => task.project === undefined);
// const todayTasks = allTasks.filter((task) => task.dueDate.isNow())



/***/ }),

/***/ "./src/modules/mainView.js":
/*!*********************************!*\
  !*** ./src/modules/mainView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNav: () => (/* binding */ createNav),
/* harmony export */   createViewContainer: () => (/* binding */ createViewContainer),
/* harmony export */   d: () => (/* binding */ d),
/* harmony export */   mainContainer: () => (/* binding */ mainContainer)
/* harmony export */ });
const d = document;

const app = d.getElementById('app');

function createNav() {
    const nav = app.insertBefore(d.createElement('nav'), mainContainer);

    const sidebarBtn = nav.appendChild(d.createElement('button'));
    sidebarBtn.classList.add('icon-btn');
    sidebarBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    const h1 = nav.appendChild(d.createElement('h1'));
    h1.textContent = 'Todoit';

    const leftContainer = nav.appendChild(d.createElement('div'));
    leftContainer.classList.add('left-container');

    const themeBtn = leftContainer.appendChild(d.createElement('button'));
    themeBtn.classList.add('icon-btn');
    themeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;

    const profileImg = leftContainer.appendChild(d.createElement('img'));
    profileImg.src = './profile_lofi_generator profile < 1MB.png';
    profileImg.alt = 'profile image';

    return nav;
}

const mainContainer = app.appendChild(d.createElement('section'));
mainContainer.classList.add('main-container');

function createViewContainer(view) {
    // view is an object, such as a project, that contains the title, description, and tasks
    const viewContainer = mainContainer.appendChild(d.createElement('div'));
    viewContainer.classList.add('view-container');

    const viewName = viewContainer.appendChild(d.createElement('h2'));
    viewName.id = 'view-name'; //maybe don't need this...
    viewName.textContent = view.title;

    const viewDescription = viewContainer.appendChild(d.createElement('p'));
    viewDescription.id = 'view-description'; //maybe don't need this...
    viewDescription.textContent = view.description;

    const createTasksContainer = (function() {
        const tasksContainer = viewContainer.appendChild(d.createElement('div'));
        tasksContainer.classList.add('tasks-container');

        const createTasks = (function() {
            for (let i = 0; i < view.getTasks().length; i++) {
                let taskObj = view.getTasks()[i];

                const taskCard = tasksContainer.appendChild(d.createElement('div'));
                taskCard.classList.add('task');

                const completeBtn = taskCard.appendChild(d.createElement('button'));
                completeBtn.classList.add('complete-btn');
                completeBtn.innerHTML = `<i class="fa-regular fa-circle"></i>`;

                const createPrimaryInfo = (function() {
                    const primaryInfo = taskCard.appendChild(d.createElement('div'));
                    primaryInfo.classList.add('primary-info');

                    const name = primaryInfo.appendChild(d.createElement('div'));
                    name.classList.add('name');
                    name.textContent = taskObj.title;

                    const description = primaryInfo.appendChild(d.createElement('div'));
                    description.classList.add('description');
                    description.textContent = taskObj.description;

                })();

                const createMetaContainer = (function() {
                    const metaContainer = taskCard.appendChild(d.createElement('ul'));
                    metaContainer.classList.add('meta-container');
    
                    const priorityTag = metaContainer.appendChild(d.createElement('li'));
                    priorityTag.classList.add('meta-tag');
                    // priorityTag.classList.add('') how to add priorty class? with switch?
                    priorityTag.textContent = taskObj.priority;
    
                    const projectTag = metaContainer.appendChild(d.createElement('li'));
                    projectTag.classList.add('meta-tag');
                    projectTag.textContent = taskObj.project;
                    
                    const dueDateTag = metaContainer.appendChild(d.createElement('li'));
                    dueDateTag.classList.add('meta-tag');
                    dueDateTag.textContent = taskObj.dueDate;
                })();
            } 
        })();
    })();

    const addTaskBtn = viewContainer.appendChild(d.createElement('button'));
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Add Task`;

    return viewContainer;
}




/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/modules/app.js");
/* harmony import */ var _mainView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainView */ "./src/modules/mainView.js");


// Also need inbox, today, and week views task numbers to display in the buttons
// 

function createSidebar() {

    const sidebar = _mainView__WEBPACK_IMPORTED_MODULE_1__.mainContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
    sidebar.classList.add('sidebar');

    const createTopViewListContainer = (function() {
        const topViewListContainer = sidebar.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
        topViewListContainer.classList.add('view-list-container');

        const createBtnsContainer = (function() {
            const btnsContainer = topViewListContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            const inboxViewBtn = btnsContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('button'));
            inboxViewBtn.innerHTML = `<i class="fa-solid fa-inbox"></i>Inbox<span>${0}</span>`
            // Need inboxView.length

            const todayViewBtn = btnsContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('button'));
            todayViewBtn.innerHTML = `<i class="fa-solid fa-calendar-day"></i>Today<span>${0}</span>`
            // Need todayView.length

            const weekViewBtn = btnsContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('button'));
            weekViewBtn.innerHTML = `<i class="fa-solid fa-calendar-week"></i>Week<span>${0}</span>`;
            // Need weekView.length

        })();
    })();

    const createProjectsViewListContainer = (function() {
        const projectsViewListContainer = sidebar.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
        projectsViewListContainer.classList.add('view-list-container');

        const createProjectsHeading = (function() {
            const projectsHeading = projectsViewListContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
            projectsHeading.classList.add('projects-heading');

            const h3 = projectsHeading.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('h3'));
            h3.textContent = 'Projects';

            const btn = projectsHeading.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('button'));
            btn.classList.add('icon-btn');
            btn.id = 'add-project-btn';
            btn.title = 'Add new project';
            btn.innerHTML = `<i class="fa-solid fa-plus"></i>`; 
        })();

        const createBtnsContainer = (function() {
            const btnsContainer = projectsViewListContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('div'));
            btnsContainer.classList.add('btns-container');

            for (let i = 0; i < _app__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
                const btn = btnsContainer.appendChild(_mainView__WEBPACK_IMPORTED_MODULE_1__.d.createElement('button'));
                btn.innerHTML = `<i class="fa-solid fa-list-check"></i>${_app__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].title}<span>${_app__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].getTasks().length}</span>`
            }
        })();
    })();

    const toggle = function() {
        sidebar.classList.toggle('collapse');
    }

    return sidebar;
};

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
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_mainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainView */ "./src/modules/mainView.js");






const newProject = new _modules_app__WEBPACK_IMPORTED_MODULE_1__.Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());


(0,_modules_mainView__WEBPACK_IMPORTED_MODULE_3__.createNav)();
(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_mainView__WEBPACK_IMPORTED_MODULE_3__.createViewContainer)(newProject);



console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.allTasks);
console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.inbox);

console.log(newProject.getTasks());
console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.inbox);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxtQkFBbUIsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsWUFBWSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFdBQVcsNkpBQTZKLGtDQUFrQyxvQ0FBb0MsZ0NBQWdDLG1DQUFtQyxxQ0FBcUMsc0NBQXNDLG9FQUFvRSx5Q0FBeUMsdUNBQXVDLHdDQUF3Qyx1Q0FBdUMsd0NBQXdDLG1FQUFtRSxrQ0FBa0MsdUNBQXVDLHdDQUF3QyxHQUFHLGdCQUFnQixrQ0FBa0Msb0NBQW9DLGdDQUFnQyxtQ0FBbUMscUNBQXFDLHNDQUFzQyxHQUFHLHlDQUF5Qyx1Q0FBdUMsc0JBQXNCLGdEQUFnRCxzQ0FBc0MsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRyxRQUFRLHdCQUF3QixHQUFHLFlBQVksbUJBQW1CLHVDQUF1Qyx1QkFBdUIsc0JBQXNCLHlCQUF5QixrREFBa0Qsd0NBQXdDLEdBQUcsa0JBQWtCLDhDQUE4QyxzQ0FBc0Msc0JBQXNCLEdBQUcsZUFBZSx3QkFBd0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcsMEJBQTBCLG9CQUFvQiwwQkFBMEIsd0JBQXdCLGVBQWUsbUJBQW1CLGtEQUFrRCwyREFBMkQsR0FBRyx5QkFBeUIsb0JBQW9CLDBCQUEwQixlQUFlLHdCQUF3QixHQUFHLGFBQWEscUJBQXFCLHlCQUF5QixHQUFHLDZDQUE2QyxtQkFBbUIsa0JBQWtCLG9CQUFvQixHQUFHLCtCQUErQixvQkFBb0IsNkJBQTZCLGdCQUFnQixvQkFBb0IsbUJBQW1CLHVCQUF1QixrREFBa0QsR0FBRyxlQUFlLHlCQUF5QixtQkFBbUIsR0FBRyxtQ0FBbUMsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsOEJBQThCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLHFDQUFxQyx3QkFBd0IsdUJBQXVCLHVCQUF1QixvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRywwQ0FBMEMsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyxvQkFBb0IsMEJBQTBCLDBCQUEwQiwyREFBMkQsR0FBRywyQ0FBMkMsb0VBQW9FLEdBQUcsZ0RBQWdELG9CQUFvQixvQkFBb0IsNkJBQTZCLHlCQUF5QixrQkFBa0IsZUFBZSwwQkFBMEIsbUJBQW1CLHFDQUFxQyxrQkFBa0Isb0JBQW9CLDZCQUE2QixHQUFHLFdBQVcsb0JBQW9CLGdCQUFnQix5QkFBeUIsMkRBQTJELEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLCtDQUErQyx1QkFBdUIsR0FBRyx5QkFBeUIsb0JBQW9CLDZCQUE2QixlQUFlLHlEQUF5RCx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLHdDQUF3QyxHQUFHLDJCQUEyQixvQkFBb0IsMEJBQTBCLHVCQUF1QixlQUFlLHdCQUF3QiwwQkFBMEIsR0FBRyxxQkFBcUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLGtEQUFrRCx3Q0FBd0MsR0FBRywwQkFBMEIsc0RBQXNELDRDQUE0QyxHQUFHLDZCQUE2QixxREFBcUQsMkNBQTJDLEdBQUcsNkJBQTZCLHFEQUFxRCwyQ0FBMkMsR0FBRyxtQkFBbUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsZUFBZSwwQkFBMEIsR0FBRyxnRUFBZ0UsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLCtCQUErQixvQkFBb0IsbUJBQW1CLHVCQUF1QixzQkFBc0Isc0NBQXNDLEdBQUcsNENBQTRDLHdDQUF3QyxHQUFHLG9CQUFvQixvQkFBb0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsdUJBQXVCLG1CQUFtQix1QkFBdUIsd0JBQXdCLHdCQUF3QixzQ0FBc0MsdUNBQXVDLEdBQUcsbURBQW1ELG9DQUFvQyx3Q0FBd0Msd0JBQXdCLHVDQUF1QyxHQUFHLDRDQUE0QyxvQkFBb0IsbUJBQW1CLHVDQUF1QyxzQkFBc0IseUJBQXlCLHVCQUF1QixrREFBa0Qsd0NBQXdDLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLCtCQUErQix1QkFBdUIsR0FBRyx3REFBd0QsOENBQThDLHNDQUFzQyxHQUFHLHdEQUF3RCw4Q0FBOEMsc0NBQXNDLHNCQUFzQixHQUFHLDBCQUEwQixvQkFBb0IsMkJBQTJCLGVBQWUsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyx1QkFBdUIsb0RBQW9ELEdBQUcsc0JBQXNCLCtDQUErQyxxQ0FBcUMsR0FBRyw0QkFBNEIscURBQXFELDJDQUEyQyxHQUFHLHFEQUFxRCxvREFBb0QseUJBQXlCLGtCQUFrQixvQkFBb0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsbUNBQW1DLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLHlEQUF5RCxvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRywwQkFBMEIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLGVBQWUsb0JBQW9CLHlCQUF5QixtQkFBbUIsd0JBQXdCLGdEQUFnRCxvREFBb0QsR0FBRyxvQkFBb0IsMEJBQTBCLDJEQUEyRCxHQUFHLG1CQUFtQjtBQUNscFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsYTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Hb0M7QUFDVTtBQUM5QztBQUNBOztBQUVlOztBQUVmLG9CQUFvQixvREFBYSxhQUFhLHdDQUFDO0FBQy9DOztBQUVBO0FBQ0EseURBQXlELHdDQUFDO0FBQzFEOztBQUVBO0FBQ0EsbUVBQW1FLHdDQUFDO0FBQ3BFOztBQUVBLDJEQUEyRCx3Q0FBQztBQUM1RCxvRkFBb0YsRUFBRTtBQUN0Rjs7QUFFQSwyREFBMkQsd0NBQUM7QUFDNUQsMkZBQTJGLEVBQUU7QUFDN0Y7O0FBRUEsMERBQTBELHdDQUFDO0FBQzNELDBGQUEwRixFQUFFO0FBQzVGOztBQUVBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0EsOERBQThELHdDQUFDO0FBQy9EOztBQUVBO0FBQ0EsMEVBQTBFLHdDQUFDO0FBQzNFOztBQUVBLG1EQUFtRCx3Q0FBQztBQUNwRDs7QUFFQSxvREFBb0Qsd0NBQUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0Esd0VBQXdFLHdDQUFDO0FBQ3pFOztBQUVBLDRCQUE0QixJQUFJLDZDQUFXLFNBQVM7QUFDcEQsc0RBQXNELHdDQUFDO0FBQ3ZELHlFQUF5RSw2Q0FBVyxVQUFVLFFBQVEsNkNBQVcsc0JBQXNCO0FBQ3ZJO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ25FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3NEO0FBQzlCO0FBQ3NCOzs7QUFHcEUsdUJBQXVCLGlEQUFPOztBQUU5Qjs7O0FBR0EsNERBQVM7QUFDVCw0REFBYTtBQUNiLHNFQUFtQjs7OztBQUluQixZQUFZLGtEQUFRO0FBQ3BCLFlBQVksK0NBQUs7O0FBRWpCO0FBQ0EsWUFBWSwrQ0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbW9kdWxlcy9tYWluVmlldy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1mb250OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICNmOWZhZmI7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICNmM2Y0ZjY7XG4gICAgLS1ob3Zlci1iZy1jb2xvcjogI2U1ZTdlYjtcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjNGI1NTYzO1xuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcbiAgICAtLXByaW1hcnktYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xuICAgICAvKiBQcmlvcml0eSBjb2xvcnMgKi9cbiAgICAtLWhpZ2gtcHJpb3JpdHktYmctY29sb3I6ICNmZWNhY2E7XG4gICAgLS1oaWdoLXByaW9yaXR5LXR4dC1jb2xvcjogI2VmNDQ0NDtcbiAgICAtLW1lZC1wcmlvcml0eS1iZy1jb2xvcjogI2ZkZTY4YTtcbiAgICAtLW1lZC1wcmlvcml0eS10eHQtY29sb3I6ICNlYWIzMDg7XG4gICAgLS1sb3ctcHJpb3JpdHktYmctY29sb3I6ICNiYmY3ZDA7XG4gICAgLS1sb3ctcHJpb3JpdHktdHh0LWNvbG9yOiAjMjJjNTVlO1xuICAgIC8qIEFkZCB0YXNrIGJ1dHRvbiBjb2xvcnMgKi9cbiAgICAtLWFjY2VudC1iZy1jb2xvcjogI2JmZGJmZTtcbiAgICAtLWFjY2VudC10eHQtY29sb3I6ICMzYjgyZjY7XG4gICAgLS1hY2NlbnQtaG92ZXItYmctY29sb3I6ICM5M2M1ZmQ7XG4gICAgLS1hY2NlbnQtaG92ZXItdHh0LWNvbG9yOiAjMjU2M2ViO1xufVxuXG4uZGFyay1tb2RlIHtcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICMxMTE4Mjc7XG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwMzA3MTI7XG4gICAgLS1ob3Zlci1iZy1jb2xvcjogIzFmMjkzNztcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZjlmYWZiO1xuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcbiAgICAtLXByaW1hcnktYm9yZGVyLWNvbG9yOiAjMWYyOTM3O1xufVxuXG4vKiBHZW5lcmljIHN5c3RlbSBzdHlsZXMgKi9cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhcHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBOYXYgQmFyICovXG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCA0OHB4O1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG59XG5cbm5hdiAubGVmdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxubmF2IGltZyB7XG4gICAgaGVpZ2h0OiAyLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBNYWluIENvbnRhaW5lciAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBTaWRlYmFyICovXG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0OHB4O1xuICAgIHBhZGRpbmc6IDQ4cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTMzNnB4O1xufVxuXG4uc2lkZWJhciAudmlldy1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc2lkZWJhciAuYnRucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNpZGViYXIgLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNpZGViYXIgLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG59XG5cbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkaW5nIC5pY29uLWJ0biB7IC8qIFByb2JzIGNoYW5nZSB0byBpZCBoZXJlIHNpbmNlIG9ubHkgb25lICovXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi8qIE1haW4gVmlldyBDb250ZW50ICovXG5cbi52aWV3LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogRm9yIG1vZGFscyAqL1xufVxuXG4vKiBUYXNrcyAqL1xuXG4udGFza3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxuLnRhc2s6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2sgLmNvbXBsZXRlLWJ0biwgLmNvbXBsZXRlLWJ0bjpob3ZlciAge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50YXNrIC5wcmltYXJ5LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbi50YXNrIC5tZXRhLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnRhc2sgLm1ldGEtdGFnIHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcbn1cblxuLnRhc2sgLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LXR4dC1jb2xvcik7XG59XG5cbi50YXNrIC5tZWQtcHJpb3JpdHkgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtcHJpb3JpdHktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tZWQtcHJpb3JpdHktdHh0LWNvbG9yKTtcbn1cblxuLnRhc2sgLmxvdy1wcmlvcml0eSB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS10eHQtY29sb3IpO1xufVxuXG4jYWRkLXRhc2stYnRuIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBGT1JNUyBBTkQgTU9EQUxTICovXG5cbi8qIEFsbCBmb3JtcyAqL1xuXG5mb3JtIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xufVxuXG5mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xufVxuXG5mb3JtIC50ZXh0YXJlYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG5mb3JtIC50ZXh0YXJlYVtjb250ZW50ZWRpdGFibGVdOmVtcHR5OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVGFzayBkZXNjcmlwdGlvblwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cblxuZm9ybSBzZWxlY3QsIGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcbn1cblxuZm9ybSBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG59XG5cbmZvcm0gc2VsZWN0OmZvY3VzLCBmb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbn1cblxuZm9ybSBzZWxlY3Q6aG92ZXIsIGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9ybSAuYnRucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuZm9ybSAuYnRucy1jb250YWluZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxuZm9ybSAuY3JlYXRlLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXR4dC1jb2xvcik7XG59XG5cbmZvcm0gLmNyZWF0ZS1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ob3Zlci1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ob3Zlci10eHQtY29sb3IpO1xufVxuXG4vKiBOZXcgdGFzayBmb3JtICovXG5cbi5uZXctdGFzay1mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIGZvcm0gLm1ldGEtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi8qIE1vZGFscyAqL1xuLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xufVxuXG4ubW9kYWwgZm9ybSBoMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxzSkFBc0o7SUFDdEosMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwrQkFBK0I7S0FDOUIsb0JBQW9CO0lBQ3JCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7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Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0RBQW9EO0FBQ3hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWZvbnQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICNmOWZhZmI7XFxuICAgIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiAjZjNmNGY2O1xcbiAgICAtLWhvdmVyLWJnLWNvbG9yOiAjZTVlN2ViO1xcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjNGI1NTYzO1xcbiAgICAtLXNlY29uZGFyeS10eHQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxuICAgICAvKiBQcmlvcml0eSBjb2xvcnMgKi9cXG4gICAgLS1oaWdoLXByaW9yaXR5LWJnLWNvbG9yOiAjZmVjYWNhO1xcbiAgICAtLWhpZ2gtcHJpb3JpdHktdHh0LWNvbG9yOiAjZWY0NDQ0O1xcbiAgICAtLW1lZC1wcmlvcml0eS1iZy1jb2xvcjogI2ZkZTY4YTtcXG4gICAgLS1tZWQtcHJpb3JpdHktdHh0LWNvbG9yOiAjZWFiMzA4O1xcbiAgICAtLWxvdy1wcmlvcml0eS1iZy1jb2xvcjogI2JiZjdkMDtcXG4gICAgLS1sb3ctcHJpb3JpdHktdHh0LWNvbG9yOiAjMjJjNTVlO1xcbiAgICAvKiBBZGQgdGFzayBidXR0b24gY29sb3JzICovXFxuICAgIC0tYWNjZW50LWJnLWNvbG9yOiAjYmZkYmZlO1xcbiAgICAtLWFjY2VudC10eHQtY29sb3I6ICMzYjgyZjY7XFxuICAgIC0tYWNjZW50LWhvdmVyLWJnLWNvbG9yOiAjOTNjNWZkO1xcbiAgICAtLWFjY2VudC1ob3Zlci10eHQtY29sb3I6ICMyNTYzZWI7XFxufVxcblxcbi5kYXJrLW1vZGUge1xcbiAgICAtLXByaW1hcnktYmctY29sb3I6ICMxMTE4Mjc7XFxuICAgIC0tc2Vjb25kYXJ5LWJnLWNvbG9yOiAjMDMwNzEyO1xcbiAgICAtLWhvdmVyLWJnLWNvbG9yOiAjMWYyOTM3O1xcbiAgICAtLXByaW1hcnktdHh0LWNvbG9yOiAjZjlmYWZiO1xcbiAgICAtLXNlY29uZGFyeS10eHQtY29sb3I6ICM5Y2EzYWY7XFxuICAgIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6ICMxZjI5Mzc7XFxufVxcblxcbi8qIEdlbmVyaWMgc3lzdGVtIHN0eWxlcyAqL1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1idG4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCA0OHB4O1xcbiAgICBnYXA6IDhweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5uYXYgLmxlZnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogTWFpbiBDb250YWluZXIgKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIHBhZGRpbmc6IDQ4cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG59XFxuXFxuLmNvbGxhcHNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMzM2cHg7XFxufVxcblxcbi5zaWRlYmFyIC52aWV3LWxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaWRlYmFyIC5idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhciAuYnRucy1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0cy1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRpbmcgLmljb24tYnRuIHsgLyogUHJvYnMgY2hhbmdlIHRvIGlkIGhlcmUgc2luY2Ugb25seSBvbmUgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qIE1haW4gVmlldyBDb250ZW50ICovXFxuXFxuLnZpZXctY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogRm9yIG1vZGFscyAqL1xcbn1cXG5cXG4vKiBUYXNrcyAqL1xcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrIC5jb21wbGV0ZS1idG4sIC5jb21wbGV0ZS1idG46aG92ZXIgIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnRhc2sgLnByaW1hcnktaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcblxcbi50YXNrIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbi50YXNrIC5tZXRhLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLnRhc2sgLm1ldGEtdGFnIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuLnRhc2sgLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktdHh0LWNvbG9yKTtcXG59XFxuXFxuLnRhc2sgLm1lZC1wcmlvcml0eSB7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtcHJpb3JpdHktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWVkLXByaW9yaXR5LXR4dC1jb2xvcik7XFxufVxcblxcbi50YXNrIC5sb3ctcHJpb3JpdHkgeyAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxvdy1wcmlvcml0eS10eHQtY29sb3IpO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEZPUk1TIEFORCBNT0RBTFMgKi9cXG5cXG4vKiBBbGwgZm9ybXMgKi9cXG5cXG5mb3JtIGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG5mb3JtIC50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxufVxcblxcbmZvcm0gLnRleHRhcmVhW2NvbnRlbnRlZGl0YWJsZV06ZW1wdHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJUYXNrIGRlc2NyaXB0aW9uXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxufVxcblxcbmZvcm0gc2VsZWN0LCBmb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbmZvcm0gc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xcbn1cXG5cXG5mb3JtIHNlbGVjdDpmb2N1cywgZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbmZvcm0gc2VsZWN0OmhvdmVyLCBmb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIC5idG5zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmZvcm0gLmJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuZm9ybSAuY3JlYXRlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdHh0LWNvbG9yKTtcXG59XFxuXFxuZm9ybSAuY3JlYXRlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1ob3Zlci1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXItdHh0LWNvbG9yKTtcXG59XFxuXFxuLyogTmV3IHRhc2sgZm9ybSAqL1xcblxcbi5uZXctdGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5uZXctdGFzay1mb3JtLWNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5uZXctdGFzay1mb3JtLWNvbnRhaW5lciBmb3JtIC5tZXRhLWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IDMzNnB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsIGZvcm0gaDMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhbGxUYXNrcyA9IFtdO1xuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihfdGl0bGUsIF9kZXNjcmlwdGlvbiwgX2R1ZURhdGUsIF9wcmlvcml0eSwgX3Byb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IF90aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IF9wcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gX3Byb2plY3Q7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKF9kdWVEYXRlLnNwbGl0KCctJykuam9pbignLCAnKSk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICBhbGxUYXNrcy5wdXNoKHRoaXMpO1xuICAgIH07XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFsbFRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzayA9PT0gdGhpcyk7XG4gICAgICAgIGFsbFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIG1hcmtDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuLy8gVGhpcyBpcyBuZWVkZWQgZm9yIGRpc3BsYXlpbmcgcHJvamVjdCBuYW1lcyBvbiBET00sIG90aGVyd2lzZSBpdCBoYXMgbm8gdXNlXG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihfdGl0bGUsIF9kZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gX3RpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaCh0aGlzKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gdGhpcyk7XG4gICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHRoaXMudGl0bGUpO1xuICAgIH1cbn1cblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdHeW0nLCAnR2V0IHN3b2xlJyk7XG5uZXdQcm9qZWN0LmFkZCgpO1xuXG5cblxuY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKCdXcml0ZSBib29rJywgJ0F0IGxlYXN0IDUwIHBhZ2VzJywgJzIwMjMtNi0xJywgJ0hpZ2gnLCAnR3ltJyk7XG5uZXdUYXNrLmFkZCgpO1xuY29uc3QgbmV3VGFzazIgPSBuZXcgVGFzaygnV3JpdGUgYmxvZycsICdBdCBsZWFzdCA1MCB3b3JkcycsICcyMDIzLTYtMScsICdNZWRpdW0nLCAnV29yaycpO1xubmV3VGFzazIuYWRkKCk7XG5jb25zdCBuZXdUYXNrMyA9IG5ldyBUYXNrKCdEbyBwdWxsdXBzJywgJ0FpbSBmb3IgMTAnLCAnMjAyMy0xMS0xJywgJ0xvdycsICdHeW0nKTtcbm5ld1Rhc2szLmFkZCgpO1xuXG5jb25zdCBpbmJveCA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSB1bmRlZmluZWQpO1xuLy8gY29uc3QgdG9kYXlUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5kdWVEYXRlLmlzTm93KCkpXG5cbmV4cG9ydCB7IGFsbFRhc2tzLCBUYXNrLCBhbGxQcm9qZWN0cywgUHJvamVjdCwgaW5ib3ggfSIsImNvbnN0IGQgPSBkb2N1bWVudDtcblxuY29uc3QgYXBwID0gZC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBhcHAuaW5zZXJ0QmVmb3JlKGQuY3JlYXRlRWxlbWVudCgnbmF2JyksIG1haW5Db250YWluZXIpO1xuXG4gICAgY29uc3Qgc2lkZWJhckJ0biA9IG5hdi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICBzaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoJ2ljb24tYnRuJyk7XG4gICAgc2lkZWJhckJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1iYXJzXCI+PC9pPmA7XG5cbiAgICBjb25zdCBoMSA9IG5hdi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2gxJykpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1RvZG9pdCc7XG5cbiAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gbmF2LmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGVmdC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRoZW1lQnRuID0gbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICB0aGVtZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uLWJ0bicpO1xuICAgIHRoZW1lQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtbW9vblwiPjwvaT5gO1xuXG4gICAgY29uc3QgcHJvZmlsZUltZyA9IGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdpbWcnKSk7XG4gICAgcHJvZmlsZUltZy5zcmMgPSAnLi9wcm9maWxlX2xvZmlfZ2VuZXJhdG9yIHByb2ZpbGUgPCAxTUIucG5nJztcbiAgICBwcm9maWxlSW1nLmFsdCA9ICdwcm9maWxlIGltYWdlJztcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBhcHAuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJykpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBjcmVhdGVWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICAvLyB2aWV3IGlzIGFuIG9iamVjdCwgc3VjaCBhcyBhIHByb2plY3QsIHRoYXQgY29udGFpbnMgdGhlIHRpdGxlLCBkZXNjcmlwdGlvbiwgYW5kIHRhc2tzXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgdmlld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWV3LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgdmlld05hbWUgPSB2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnaDInKSk7XG4gICAgdmlld05hbWUuaWQgPSAndmlldy1uYW1lJzsgLy9tYXliZSBkb24ndCBuZWVkIHRoaXMuLi5cbiAgICB2aWV3TmFtZS50ZXh0Q29udGVudCA9IHZpZXcudGl0bGU7XG5cbiAgICBjb25zdCB2aWV3RGVzY3JpcHRpb24gPSB2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB2aWV3RGVzY3JpcHRpb24uaWQgPSAndmlldy1kZXNjcmlwdGlvbic7IC8vbWF5YmUgZG9uJ3QgbmVlZCB0aGlzLi4uXG4gICAgdmlld0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdmlldy5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tzQ29udGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IHZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3LmdldFRhc2tzKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza09iaiA9IHZpZXcuZ2V0VGFza3MoKVtpXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tDYXJkID0gdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVCdG4gPSB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZVwiPjwvaT5gO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJpbWFyeUluZm8gPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW1hcnlJbmZvID0gdGFza0NhcmQuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlJbmZvLmNsYXNzTGlzdC5hZGQoJ3ByaW1hcnktaW5mbycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcmltYXJ5SW5mby5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJpbWFyeUluZm8uYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVNZXRhQ29udGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhQ29udGFpbmVyID0gdGFza0NhcmQuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCd1bCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZXRhLWNvbnRhaW5lcicpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eVRhZyA9IG1ldGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdsaScpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUYWcuY2xhc3NMaXN0LmFkZCgnbWV0YS10YWcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHlUYWcuY2xhc3NMaXN0LmFkZCgnJykgaG93IHRvIGFkZCBwcmlvcnR5IGNsYXNzPyB3aXRoIHN3aXRjaD9cbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUYWcudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByaW9yaXR5O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFnID0gbWV0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2xpJykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFnLmNsYXNzTGlzdC5hZGQoJ21ldGEtdGFnJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWcudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlVGFnID0gbWV0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2xpJykpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGFnLmNsYXNzTGlzdC5hZGQoJ21ldGEtdGFnJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUYWcudGV4dENvbnRlbnQgPSB0YXNrT2JqLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSB2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkLXRhc2stYnRuJztcbiAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIj48L2k+QWRkIFRhc2tgO1xuXG4gICAgcmV0dXJuIHZpZXdDb250YWluZXI7XG59XG5cblxuZXhwb3J0IHsgZCwgbWFpbkNvbnRhaW5lciwgY3JlYXRlTmF2LCBjcmVhdGVWaWV3Q29udGFpbmVyIH07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGQsIG1haW5Db250YWluZXIgfSBmcm9tIFwiLi9tYWluVmlld1wiO1xuLy8gQWxzbyBuZWVkIGluYm94LCB0b2RheSwgYW5kIHdlZWsgdmlld3MgdGFzayBudW1iZXJzIHRvIGRpc3BsYXkgaW4gdGhlIGJ1dHRvbnNcbi8vIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBjcmVhdGVUb3BWaWV3TGlzdENvbnRhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9wVmlld0xpc3RDb250YWluZXIgPSBzaWRlYmFyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0b3BWaWV3TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWV3LWxpc3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnRuc0NvbnRhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bnNDb250YWluZXIgPSB0b3BWaWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIGJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRucy1jb250YWluZXInKTtcblxuICAgICAgICAgICAgY29uc3QgaW5ib3hWaWV3QnRuID0gYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGluYm94Vmlld0J0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1pbmJveFwiPjwvaT5JbmJveDxzcGFuPiR7MH08L3NwYW4+YFxuICAgICAgICAgICAgLy8gTmVlZCBpbmJveFZpZXcubGVuZ3RoXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZGF5Vmlld0J0biA9IGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICB0b2RheVZpZXdCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItZGF5XCI+PC9pPlRvZGF5PHNwYW4+JHswfTwvc3Bhbj5gXG4gICAgICAgICAgICAvLyBOZWVkIHRvZGF5Vmlldy5sZW5ndGhcblxuICAgICAgICAgICAgY29uc3Qgd2Vla1ZpZXdCdG4gPSBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgd2Vla1ZpZXdCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2FsZW5kYXItd2Vla1wiPjwvaT5XZWVrPHNwYW4+JHswfTwvc3Bhbj5gO1xuICAgICAgICAgICAgLy8gTmVlZCB3ZWVrVmlldy5sZW5ndGhcblxuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0c1ZpZXdMaXN0Q29udGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c1ZpZXdMaXN0Q29udGFpbmVyID0gc2lkZWJhci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgcHJvamVjdHNWaWV3TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWV3LWxpc3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdHNIZWFkaW5nID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gcHJvamVjdHNWaWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIHByb2plY3RzSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkaW5nJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGgzID0gcHJvamVjdHNIZWFkaW5nLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnaDMnKSk7XG4gICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IHByb2plY3RzSGVhZGluZy5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uLWJ0bicpO1xuICAgICAgICAgICAgYnRuLmlkID0gJ2FkZC1wcm9qZWN0LWJ0bic7XG4gICAgICAgICAgICBidG4udGl0bGUgPSAnQWRkIG5ldyBwcm9qZWN0JztcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCI+PC9pPmA7IFxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0bnNDb250YWluZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBidG5zQ29udGFpbmVyID0gcHJvamVjdHNWaWV3TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIGJ0bnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRucy1jb250YWluZXInKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+JHthbGxQcm9qZWN0c1tpXS50aXRsZX08c3Bhbj4ke2FsbFByb2plY3RzW2ldLmdldFRhc2tzKCkubGVuZ3RofTwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZGViYXI7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGFsbFRhc2tzLCBUYXNrLCBhbGxQcm9qZWN0cywgUHJvamVjdCwgaW5ib3ggfSBmcm9tICcuL21vZHVsZXMvYXBwJztcbmltcG9ydCBjcmVhdGVTaWRlYmFyIGZyb20gJy4vbW9kdWxlcy9zaWRlYmFyJztcbmltcG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlVmlld0NvbnRhaW5lciB9IGZyb20gJy4vbW9kdWxlcy9tYWluVmlldyc7XG5cblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0ICgnR3ltJywgJ1RoaW5ncyB0byBmaWxsIDggaG91cnMgd2l0aCcpO1xuXG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0LmdldFRhc2tzKCkpO1xuXG5cbmNyZWF0ZU5hdigpO1xuY3JlYXRlU2lkZWJhcigpO1xuY3JlYXRlVmlld0NvbnRhaW5lcihuZXdQcm9qZWN0KTtcblxuXG5cbmNvbnNvbGUubG9nKGFsbFRhc2tzKTtcbmNvbnNvbGUubG9nKGluYm94KTtcblxuY29uc29sZS5sb2cobmV3UHJvamVjdC5nZXRUYXNrcygpKTtcbmNvbnNvbGUubG9nKGluYm94KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9