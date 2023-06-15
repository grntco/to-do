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
/* harmony export */   d: () => (/* binding */ d),
/* harmony export */   mainContainer: () => (/* binding */ mainContainer)
/* harmony export */ });
const d = document;

const app = d.getElementById('app');

const mainContainer = app.appendChild(d.createElement('section'));
mainContainer.classList.add('main-container');






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





(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])().toggle();

console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.allTasks);
console.log(_modules_app__WEBPACK_IMPORTED_MODULE_1__.inbox);


const newProject = new _modules_app__WEBPACK_IMPORTED_MODULE_1__.Project ('Gym', 'Things to fill 8 hours with');

console.log(newProject.getTasks());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxtQkFBbUIsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsWUFBWSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxh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NkNBQVcsc0JBQXNCO0FBQ3ZJO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ25FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDc0Q7QUFDOUI7OztBQUc5Qyw0REFBYTs7QUFFYixZQUFZLGtEQUFRO0FBQ3BCLFlBQVksK0NBQUs7OztBQUdqQix1QkFBdUIsaURBQU87O0FBRTlCO0FBQ0EsWUFBWSwrQ0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tb2R1bGVzL21haW5WaWV3LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21vZHVsZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWZvbnQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogI2Y5ZmFmYjtcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogI2YzZjRmNjtcbiAgICAtLWhvdmVyLWJnLWNvbG9yOiAjZTVlN2ViO1xuICAgIC0tcHJpbWFyeS10eHQtY29sb3I6ICM0YjU1NjM7XG4gICAgLS1zZWNvbmRhcnktdHh0LWNvbG9yOiAjOWNhM2FmO1xuICAgIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6ICNlNWU3ZWI7XG4gICAgIC8qIFByaW9yaXR5IGNvbG9ycyAqL1xuICAgIC0taGlnaC1wcmlvcml0eS1iZy1jb2xvcjogI2ZlY2FjYTtcbiAgICAtLWhpZ2gtcHJpb3JpdHktdHh0LWNvbG9yOiAjZWY0NDQ0O1xuICAgIC0tbWVkLXByaW9yaXR5LWJnLWNvbG9yOiAjZmRlNjhhO1xuICAgIC0tbWVkLXByaW9yaXR5LXR4dC1jb2xvcjogI2VhYjMwODtcbiAgICAtLWxvdy1wcmlvcml0eS1iZy1jb2xvcjogI2JiZjdkMDtcbiAgICAtLWxvdy1wcmlvcml0eS10eHQtY29sb3I6ICMyMmM1NWU7XG4gICAgLyogQWRkIHRhc2sgYnV0dG9uIGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWJnLWNvbG9yOiAjYmZkYmZlO1xuICAgIC0tYWNjZW50LXR4dC1jb2xvcjogIzNiODJmNjtcbiAgICAtLWFjY2VudC1ob3Zlci1iZy1jb2xvcjogIzkzYzVmZDtcbiAgICAtLWFjY2VudC1ob3Zlci10eHQtY29sb3I6ICMyNTYzZWI7XG59XG5cbi5kYXJrLW1vZGUge1xuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogIzExMTgyNztcbiAgICAtLXNlY29uZGFyeS1iZy1jb2xvcjogIzAzMDcxMjtcbiAgICAtLWhvdmVyLWJnLWNvbG9yOiAjMWYyOTM3O1xuICAgIC0tcHJpbWFyeS10eHQtY29sb3I6ICNmOWZhZmI7XG4gICAgLS1zZWNvbmRhcnktdHh0LWNvbG9yOiAjOWNhM2FmO1xuICAgIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6ICMxZjI5Mzc7XG59XG5cbi8qIEdlbmVyaWMgc3lzdGVtIHN0eWxlcyAqL1xuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDIge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLWJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIE5hdiBCYXIgKi9cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDQ4cHg7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxubmF2IC5sZWZ0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5uYXYgaW1nIHtcbiAgICBoZWlnaHQ6IDIuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIE1haW4gQ29udGFpbmVyICovXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIFNpZGViYXIgKi9cblxuLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQ4cHg7XG4gICAgcGFkZGluZzogNDhweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xufVxuXG4uY29sbGFwc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzM2cHg7XG59XG5cbi5zaWRlYmFyIC52aWV3LWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5zaWRlYmFyIC5idG5zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc2lkZWJhciAuYnRucy1jb250YWluZXIgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc2lkZWJhciAuYnRucy1jb250YWluZXIgYnV0dG9uIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRpbmcgLmljb24tYnRuIHsgLyogUHJvYnMgY2hhbmdlIHRvIGlkIGhlcmUgc2luY2Ugb25seSBvbmUgKi9cbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLyogTWFpbiBWaWV3IENvbnRlbnQgKi9cblxuLnZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0OHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBGb3IgbW9kYWxzICovXG59XG5cbi8qIFRhc2tzICovXG5cbi50YXNrcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xufVxuXG4udGFzazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzayAuY29tcGxldGUtYnRuLCAuY29tcGxldGUtYnRuOmhvdmVyICB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnRhc2sgLnByaW1hcnktaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4udGFzayAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcbn1cblxuLnRhc2sgLm1ldGEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4udGFzayAubWV0YS10YWcge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xufVxuXG4udGFzayAuaGlnaC1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktdHh0LWNvbG9yKTtcbn1cblxuLnRhc2sgLm1lZC1wcmlvcml0eSB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eS10eHQtY29sb3IpO1xufVxuXG4udGFzayAubG93LXByaW9yaXR5IHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LXR4dC1jb2xvcik7XG59XG5cbiNhZGQtdGFzay1idG4ge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEZPUk1TIEFORCBNT0RBTFMgKi9cblxuLyogQWxsIGZvcm1zICovXG5cbmZvcm0gZmllbGRzZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG59XG5cbmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl06OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XG59XG5cbmZvcm0gLnRleHRhcmVhIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG59XG5cbmZvcm0gLnRleHRhcmVhW2NvbnRlbnRlZGl0YWJsZV06ZW1wdHk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJUYXNrIGRlc2NyaXB0aW9uXCI7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG5mb3JtIHNlbGVjdCwgZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xufVxuXG5mb3JtIHNlbGVjdCB7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbn1cblxuZm9ybSBzZWxlY3Q6Zm9jdXMsIGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xufVxuXG5mb3JtIHNlbGVjdDpob3ZlciwgZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXR4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb3JtIC5idG5zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5mb3JtIC5idG5zLWNvbnRhaW5lciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xufVxuXG5mb3JtIC5jcmVhdGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdHh0LWNvbG9yKTtcbn1cblxuZm9ybSAuY3JlYXRlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWhvdmVyLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWhvdmVyLXR4dC1jb2xvcik7XG59XG5cbi8qIE5ldyB0YXNrIGZvcm0gKi9cblxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xufVxuXG4ubmV3LXRhc2stZm9ybS1jb250YWluZXIgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xufVxuXG4ubmV3LXRhc2stZm9ybS1jb250YWluZXIgZm9ybSAubWV0YS1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDhweDtcbn1cblxuLyogTW9kYWxzICovXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9kYWwgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAzMzZweDtcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG59XG5cbi5tb2RhbCBmb3JtIGgzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLHNKQUFzSjtJQUN0SiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLCtCQUErQjtLQUM5QixvQkFBb0I7SUFDckIsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsMkJB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LHdDQUF3QztJQUN4Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsb0NBQW9DO0FBQ3hDOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvREFBb0Q7QUFDeERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktZm9udDogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogI2Y5ZmFmYjtcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICNmM2Y0ZjY7XFxuICAgIC0taG92ZXItYmctY29sb3I6ICNlNWU3ZWI7XFxuICAgIC0tcHJpbWFyeS10eHQtY29sb3I6ICM0YjU1NjM7XFxuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcXG4gICAgLS1wcmltYXJ5LWJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXG4gICAgIC8qIFByaW9yaXR5IGNvbG9ycyAqL1xcbiAgICAtLWhpZ2gtcHJpb3JpdHktYmctY29sb3I6ICNmZWNhY2E7XFxuICAgIC0taGlnaC1wcmlvcml0eS10eHQtY29sb3I6ICNlZjQ0NDQ7XFxuICAgIC0tbWVkLXByaW9yaXR5LWJnLWNvbG9yOiAjZmRlNjhhO1xcbiAgICAtLW1lZC1wcmlvcml0eS10eHQtY29sb3I6ICNlYWIzMDg7XFxuICAgIC0tbG93LXByaW9yaXR5LWJnLWNvbG9yOiAjYmJmN2QwO1xcbiAgICAtLWxvdy1wcmlvcml0eS10eHQtY29sb3I6ICMyMmM1NWU7XFxuICAgIC8qIEFkZCB0YXNrIGJ1dHRvbiBjb2xvcnMgKi9cXG4gICAgLS1hY2NlbnQtYmctY29sb3I6ICNiZmRiZmU7XFxuICAgIC0tYWNjZW50LXR4dC1jb2xvcjogIzNiODJmNjtcXG4gICAgLS1hY2NlbnQtaG92ZXItYmctY29sb3I6ICM5M2M1ZmQ7XFxuICAgIC0tYWNjZW50LWhvdmVyLXR4dC1jb2xvcjogIzI1NjNlYjtcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC0tcHJpbWFyeS1iZy1jb2xvcjogIzExMTgyNztcXG4gICAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMwMzA3MTI7XFxuICAgIC0taG92ZXItYmctY29sb3I6ICMxZjI5Mzc7XFxuICAgIC0tcHJpbWFyeS10eHQtY29sb3I6ICNmOWZhZmI7XFxuICAgIC0tc2Vjb25kYXJ5LXR4dC1jb2xvcjogIzljYTNhZjtcXG4gICAgLS1wcmltYXJ5LWJvcmRlci1jb2xvcjogIzFmMjkzNztcXG59XFxuXFxuLyogR2VuZXJpYyBzeXN0ZW0gc3R5bGVzICovXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBOYXYgQmFyICovXFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDQ4cHg7XFxuICAgIGdhcDogOHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxufVxcblxcbm5hdiAubGVmdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbm5hdiBpbWcge1xcbiAgICBoZWlnaHQ6IDIuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNDhweDtcXG4gICAgcGFkZGluZzogNDhweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDMzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3IpO1xcbn1cXG5cXG4uY29sbGFwc2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0zMzZweDtcXG59XFxuXFxuLnNpZGViYXIgLnZpZXctbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnNpZGViYXIgLmJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaWRlYmFyIC5idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zaWRlYmFyIC5idG5zLWNvbnRhaW5lciBidXR0b24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNpZGViYXIgLnByb2plY3RzLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdHMtaGVhZGluZyAuaWNvbi1idG4geyAvKiBQcm9icyBjaGFuZ2UgdG8gaWQgaGVyZSBzaW5jZSBvbmx5IG9uZSAqL1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyogTWFpbiBWaWV3IENvbnRlbnQgKi9cXG5cXG4udmlldy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA0OHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBGb3IgbW9kYWxzICovXFxufVxcblxcbi8qIFRhc2tzICovXFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2sgLmNvbXBsZXRlLWJ0biwgLmNvbXBsZXRlLWJ0bjpob3ZlciAge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4udGFzayAucHJpbWFyeS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuXFxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuLnRhc2sgLm1ldGEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4udGFzayAubWV0YS10YWcge1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG4udGFzayAuaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS10eHQtY29sb3IpO1xcbn1cXG5cXG4udGFzayAubWVkLXByaW9yaXR5IHsgICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZC1wcmlvcml0eS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWQtcHJpb3JpdHktdHh0LWNvbG9yKTtcXG59XFxuXFxuLnRhc2sgLmxvdy1wcmlvcml0eSB7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctcHJpb3JpdHktYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbG93LXByaW9yaXR5LXR4dC1jb2xvcik7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogRk9STVMgQU5EIE1PREFMUyAqL1xcblxcbi8qIEFsbCBmb3JtcyAqL1xcblxcbmZvcm0gZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxufVxcblxcbmZvcm0gLnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG59XFxuXFxuZm9ybSAudGV4dGFyZWFbY29udGVudGVkaXRhYmxlXTplbXB0eTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlRhc2sgZGVzY3JpcHRpb25cXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXR4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG59XFxuXFxuZm9ybSBzZWxlY3QsIGZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuZm9ybSBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDRweCA2cHg7XFxufVxcblxcbmZvcm0gc2VsZWN0OmZvY3VzLCBmb3JtIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdHh0LWNvbG9yKTtcXG59XFxuXFxuZm9ybSBzZWxlY3Q6aG92ZXIsIGZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10eHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gLmJ0bnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuZm9ybSAuYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5mb3JtIC5jcmVhdGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC10eHQtY29sb3IpO1xcbn1cXG5cXG5mb3JtIC5jcmVhdGUtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWhvdmVyLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1ob3Zlci10eHQtY29sb3IpO1xcbn1cXG5cXG4vKiBOZXcgdGFzayBmb3JtICovXFxuXFxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0tY29udGFpbmVyIGZvcm0gLm1ldGEtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi8qIE1vZGFscyAqL1xcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMzM2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSBoMyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFsbFRhc2tzID0gW107XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKF90aXRsZSwgX2Rlc2NyaXB0aW9uLCBfZHVlRGF0ZSwgX3ByaW9yaXR5LCBfcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gX3RpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gX3ByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBfcHJvamVjdDtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoX2R1ZURhdGUuc3BsaXQoJy0nKS5qb2luKCcsICcpKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIGFsbFRhc2tzLnB1c2godGhpcyk7XG4gICAgfTtcblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gYWxsVGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrID09PSB0aGlzKTtcbiAgICAgICAgYWxsVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgbWFya0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIG5lZWRlZCBmb3IgZGlzcGxheWluZyBwcm9qZWN0IG5hbWVzIG9uIERPTSwgb3RoZXJ3aXNlIGl0IGhhcyBubyB1c2VcbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKF90aXRsZSwgX2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBfdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gYWxsUHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0ID09PSB0aGlzKTtcbiAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gdGhpcy50aXRsZSk7XG4gICAgfVxufVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0d5bScsICdHZXQgc3dvbGUnKTtcbm5ld1Byb2plY3QuYWRkKCk7XG5cblxuXG5jb25zdCBuZXdUYXNrID0gbmV3IFRhc2soJ1dyaXRlIGJvb2snLCAnQXQgbGVhc3QgNTAgcGFnZXMnLCAnMjAyMy02LTEnLCAnSGlnaCcsICdHeW0nKTtcbm5ld1Rhc2suYWRkKCk7XG5jb25zdCBuZXdUYXNrMiA9IG5ldyBUYXNrKCdXcml0ZSBibG9nJywgJ0F0IGxlYXN0IDUwIHdvcmRzJywgJzIwMjMtNi0xJywgJ01lZGl1bScsICdXb3JrJyk7XG5uZXdUYXNrMi5hZGQoKTtcbmNvbnN0IG5ld1Rhc2szID0gbmV3IFRhc2soJ0RvIHB1bGx1cHMnLCAnQWltIGZvciAxMCcsICcyMDIzLTExLTEnLCAnTG93JywgJ0d5bScpO1xubmV3VGFzazMuYWRkKCk7XG5cbmNvbnN0IGluYm94ID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT09IHVuZGVmaW5lZCk7XG4vLyBjb25zdCB0b2RheVRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmR1ZURhdGUuaXNOb3coKSlcblxuZXhwb3J0IHsgYWxsVGFza3MsIFRhc2ssIGFsbFByb2plY3RzLCBQcm9qZWN0LCBpbmJveCB9IiwiY29uc3QgZCA9IGRvY3VtZW50O1xuXG5jb25zdCBhcHAgPSBkLmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGFwcC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSk7XG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG5cblxuXG5cbmV4cG9ydCB7IGQsIG1haW5Db250YWluZXIgfSIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBkLCBtYWluQ29udGFpbmVyIH0gZnJvbSBcIi4vbWFpblZpZXdcIjtcbi8vIEFsc28gbmVlZCBpbmJveCwgdG9kYXksIGFuZCB3ZWVrIHZpZXdzIHRhc2sgbnVtYmVycyB0byBkaXNwbGF5IGluIHRoZSBidXR0b25zXG4vLyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgY3JlYXRlVG9wVmlld0xpc3RDb250YWluZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRvcFZpZXdMaXN0Q29udGFpbmVyID0gc2lkZWJhci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdG9wVmlld0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlldy1saXN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0bnNDb250YWluZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBidG5zQ29udGFpbmVyID0gdG9wVmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBidG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluYm94Vmlld0J0biA9IGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICBpbmJveFZpZXdCdG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtaW5ib3hcIj48L2k+SW5ib3g8c3Bhbj4kezB9PC9zcGFuPmBcbiAgICAgICAgICAgIC8vIE5lZWQgaW5ib3hWaWV3Lmxlbmd0aFxuXG4gICAgICAgICAgICBjb25zdCB0b2RheVZpZXdCdG4gPSBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgdG9kYXlWaWV3QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLWRheVwiPjwvaT5Ub2RheTxzcGFuPiR7MH08L3NwYW4+YFxuICAgICAgICAgICAgLy8gTmVlZCB0b2RheVZpZXcubGVuZ3RoXG5cbiAgICAgICAgICAgIGNvbnN0IHdlZWtWaWV3QnRuID0gYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIHdlZWtWaWV3QnRuLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNhbGVuZGFyLXdlZWtcIj48L2k+V2VlazxzcGFuPiR7MH08L3NwYW4+YDtcbiAgICAgICAgICAgIC8vIE5lZWQgd2Vla1ZpZXcubGVuZ3RoXG5cbiAgICAgICAgfSkoKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHNWaWV3TGlzdENvbnRhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNWaWV3TGlzdENvbnRhaW5lciA9IHNpZGViYXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHByb2plY3RzVmlld0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlldy1saXN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RzSGVhZGluZyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzSGVhZGluZyA9IHByb2plY3RzVmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGluZycpO1xuXG4gICAgICAgICAgICBjb25zdCBoMyA9IHByb2plY3RzSGVhZGluZy5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2gzJykpO1xuICAgICAgICAgICAgaDMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgICAgICBjb25zdCBidG4gPSBwcm9qZWN0c0hlYWRpbmcuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaWNvbi1idG4nKTtcbiAgICAgICAgICAgIGJ0bi5pZCA9ICdhZGQtcHJvamVjdC1idG4nO1xuICAgICAgICAgICAgYnRuLnRpdGxlID0gJ0FkZCBuZXcgcHJvamVjdCc7XG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT5gOyBcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVCdG5zQ29udGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgYnRuc0NvbnRhaW5lciA9IHByb2plY3RzVmlld0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBidG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bnMtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1saXN0LWNoZWNrXCI+PC9pPiR7YWxsUHJvamVjdHNbaV0udGl0bGV9PHNwYW4+JHthbGxQcm9qZWN0c1tpXS5nZXRUYXNrcygpLmxlbmd0aH08L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCB0b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWRlYmFyO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBhbGxUYXNrcywgVGFzaywgYWxsUHJvamVjdHMsIFByb2plY3QsIGluYm94IH0gZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5pbXBvcnQgY3JlYXRlU2lkZWJhciBmcm9tICcuL21vZHVsZXMvc2lkZWJhcic7XG5cblxuY3JlYXRlU2lkZWJhcigpLnRvZ2dsZSgpO1xuXG5jb25zb2xlLmxvZyhhbGxUYXNrcyk7XG5jb25zb2xlLmxvZyhpbmJveCk7XG5cblxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0ICgnR3ltJywgJ1RoaW5ncyB0byBmaWxsIDggaG91cnMgd2l0aCcpO1xuXG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0LmdldFRhc2tzKCkpO1xuY29uc29sZS5sb2coaW5ib3gpO1xuLy8gbmV3VGFzazIuZGVsZXRlKCk7XG4vLyBjb25zb2xlLmxvZyhhbGxUYXNrcyk7XG5cbi8vIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgnR3ltJywgJ1RpbWUgdG8gZ2V0IGZpdCcpO1xuLy8gbmV3UHJvamVjdC5hZGQoKTtcbi8vIGNvbnN0IG5ld1Byb2plY3QyID0gbmV3IFByb2plY3QoJ1dvcmsnLCAnVGhpbmdzIGZvciB0aGUgc2xvZycpO1xuLy8gbmV3UHJvamVjdDIuYWRkKCk7XG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuLy8gbmV3UHJvamVjdC5kZWxldGUoKTtcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==