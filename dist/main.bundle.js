"use strict";
(self["webpackChunkjavasccript_capstone"] = self["webpackChunkjavasccript_capstone"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _modules_getcategory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _modules_addhtmllikes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);







let URL = '';
const category = document.querySelector('.input-category');

category.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && category.value) {
    e.preventDefault();
    const query = category.value;
    URL = `${_modules_api_js__WEBPACK_IMPORTED_MODULE_2__["default"].API}${query}`;
    (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__["default"])(URL, query);
    category.value = '';
    localStorage.setItem('myquery', JSON.stringify(query));
  }
});

const loadData = () => {
  const showCategory = (0,_modules_getcategory_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  URL = `${_modules_api_js__WEBPACK_IMPORTED_MODULE_2__["default"].API}${showCategory}`;
  (0,_modules_show_js__WEBPACK_IMPORTED_MODULE_1__["default"])(URL, showCategory);
};

loadData();

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    _modules_addComment_js__WEBPACK_IMPORTED_MODULE_4__["default"].postLikes(e.target.id);
    (0,_modules_addhtmllikes_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.id);
  }
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  } // For old IE

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
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font: \"Poppins\", sans-serif;\r\n  --bgwhite: #fff;\r\n  --bgcontact: #6070ff;\r\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  --bgbrown: #e5e5e5;\r\n  --bgreen: green;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--font);\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin: 20px 0;\r\n}\r\n\r\nheader i {\r\n  /* max-width: 60px; */\r\n  margin: 0 64px 0 0;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  margin: 0 16px;\r\n  font-size: x-large;\r\n  color: black;\r\n}\r\n\r\n.show-menu a {\r\n  font-weight: bold;\r\n  color: #2f4f4f;\r\n}\r\n\r\n.fa-tv {\r\n  font-size: 40px;\r\n  color: #2f4f4f;\r\n}\r\n\r\n.categories {\r\n  display: flex;\r\n}\r\n\r\n.show-counter {\r\n  width: 160px;\r\n  padding: 8px 16px;\r\n  font-weight: bold;\r\n  font-size: small;\r\n  align-self: center;\r\n  margin-left: 32px;\r\n  background-color: #2f4f4f;\r\n  box-shadow: 2px 2px #2f4f4f;\r\n  border-radius: 4px;\r\n  border: none;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.input-category {\r\n  width: 250px;\r\n  padding: 8px 16px;\r\n  font-size: larger;\r\n  font-weight: bold;\r\n  background-color: #2f4f4f;\r\n  box-shadow: 2px 2px #2f4f4f;\r\n  border-radius: 4px;\r\n  border: none;\r\n  margin-right: 32px;\r\n  color: #fff;\r\n}\r\n\r\n.input-category::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.show-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: 96vw;\r\n  margin: 16px 8vw;\r\n}\r\n\r\n.show-item {\r\n  width: 230px;\r\n\r\n  /* padding: 15px; */\r\n  margin: 15px;\r\n\r\n  /* margin: 24px 3vw; */\r\n  box-shadow: var(--box-shadow);\r\n\r\n  /* border: 1px solid var(--bgbrown); */\r\n}\r\n\r\n.show-item img {\r\n  width: 100%;\r\n}\r\n\r\n.show-info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n}\r\n\r\n.show-info p {\r\n  font-weight: bold;\r\n  font-family: var(--font);\r\n}\r\n\r\n.summary {\r\n  padding: 10px;\r\n  text-align: justify;\r\n  height: 96px;\r\n}\r\n\r\n.summary p {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton {\r\n  width: 200px;\r\n\r\n  /* border: 2px solid black; */\r\n\r\n  /* font-size: larger;\r\n  font-weight: bold; */\r\n  outline: none;\r\n  background-color: var(--bgbrown);\r\n  box-shadow: 1px 2px var(--bgbrown);\r\n  border-radius: 4px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter div {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #2f4f4f;\r\n  padding: 10px;\r\n}\r\n\r\n.popupflex {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 4%;\r\n  padding: 10px;\r\n}\r\n\r\n.popupflex img {\r\n  width: 20vh;\r\n}\r\n\r\n.popupflex ul li {\r\n  list-style-type: none;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.successMsg {\r\n  color: var(--bgreen);\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n/********************** MODAL SECTION ****************************/\r\n.popup_modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n.popup_modal_content {\r\n  background-color: #fefefe;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 60%;\r\n  height: auto;\r\n  border-radius: 8px;\r\n}\r\n\r\n/* The Close Button */\r\n.close_modal {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close_modal:hover,\r\n.close_modal:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/********************** END OF MODAL SECTION ****************************/\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf35a3216754460b0e5c.png";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _addhtmlshows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _displayshowcounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);




let imageArr = [];

const show = (URL) => {
  document.querySelectorAll('.show-item').forEach((e) => e.remove());
  const promiseShow = (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__.retrieveShow)(URL);

  promiseShow.then((show) => {
    show.forEach((e) => {
      if (e.show.image !== null) {
        imageArr.push(e.show.image);
        (0,_addhtmlshows_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.show.id, e.show.name, e.show.image.medium, e.show.summary);
      }
    });
    (0,_displayshowcounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(imageArr.length);
    imageArr = [];
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (show);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "retrieveShow": () => (/* binding */ retrieveShow)
/* harmony export */ });
const retrieveShow = async (URL) => {
  const response = await fetch(URL);
  const show = response.json();
  return show;
};

const postComment = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await res.text();
  return result;
};




/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _retrievelikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);





const truncate = (str, max, suffix) => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);

const ebModal = document.getElementById('mainModalArea');

const displayModal = (j) => {
  document.querySelector('#popup-section').innerHTML = 'Loading,please wait..';
  const promiseShow = (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__.retrieveShow)(`https://api.tvmaze.com/shows/${j}`);
  promiseShow.then((e) => {
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
  });
  ebModal.style.display = 'block';
};

const addhtmlShows = (id, name, image, summary) => {
  let mLikes = 0;
  const promiseLikes = (0,_retrievelikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_api_js__WEBPACK_IMPORTED_MODULE_3__["default"].Likes);
  promiseLikes.then((like) => {
    like.forEach((e) => {
      if (Number(e.item_id) === id) {
        mLikes = e.likes;
        if (e.item_id != null) {
          document.querySelectorAll('[data-id]').forEach((elem) => {
            if (Number(elem.getAttribute('data-id')) === id && elem.id === 'mylikes') {
              elem.innerHTML = `${mLikes} Likes`;
            }
          });
        }
      }
    });
  });

  const tx = summary !== null ? truncate(summary, 100, '...') : '<p>no summary</p>';
  const showContainer = document.querySelector('.show-container');
  const showItem = document.createElement('div');
  showItem.classList.add('show-item');
  showItem.innerHTML += `
    <img src="${image}" alt="Shows">
    <div class='show-info'>
      <p>${name}</p>
      <i class="fas fa-heart" id="${id}"> <small data-id="${id}" id='mylikes'>0 Likes</small></i>
    </div>
    <div class="summary"><em>${tx}</em></div>
    <button type="button" class="show_modal"  data-id="${id}">Comment</button>
    <button type="button" class="loaded" reserve-id="${id}">Reservation</button>
    `;
  showContainer.appendChild(showItem);

  document.querySelectorAll('.show_modal').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-id'))));
};

// Get the <span> element that closes the modal
const ebSpan = document.getElementsByClassName('close_modal')[0];

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function () {
  ebModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === ebModal) {
    ebModal.style.display = 'none';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addhtmlShows);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _retrieveshow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




const popupForm = (e) => {
  const promiseShow = (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_1__.retrieveShow)(`${_api_js__WEBPACK_IMPORTED_MODULE_2__["default"].Cmt}${e.id}`);
  let commentLength = 0;

  let content = '';
  promiseShow.then((show) => {
    commentLength = show.length;

    if (show.length > 0) {
      content = `<h5>Comment (${commentLength})</h5> <hr/>`;
      show.forEach((e) => {
        content += `<p><b><small> ${e.creation_date}: </small></b>   ${e.comment} <small>by: ${e.username}</small></p>`;
        return true;
      });
    }
    document.getElementById('listComment').innerHTML = content;
  });

  document.querySelector('#popup-section').innerHTML = `<div class="pop-container">
    <h2>${e.name} </h2><hr/>
    <div class="popupflex">
    <img src="${e.image.medium}" />
    <ul>
        <li><b>status:</b> ${e.status}</li>
        <li><b>date:</b> ${e.premiered}</li>
        <li><b>Time:</b> ${e.schedule.time} - ${e.schedule.days}</li>
        <li><b>Weight:</b> ${e.weight}</li>
        <li><b>Genre:</b> ${e.genres}</li>
    </ul>
  
    </div>
    <form class="commentForm" id="commentForm">
    <div id="successMsg"></div>
    <label for="name">Your Name</label>
    <input type="text" id="username" name="username" maxlength="30" placeholder="Enter your name" required />
     
    <label for="name">Your Insight</label>
    <textarea row="40" cols="10" name="sendcomment" id="sendcomment" required></textarea> 
    <input type="hidden" name="item_id" id="item_id" value="${e.id}" />
    <input type="hidden" name="type" id="type" value="comments" />
    <input type="submit" value="SubmitForm"/>
    </form>
    </div>
   
    <div id="listComment"></div>
    `;

  // Posting the form element
  const cForm = document.getElementById('commentForm');
  const itemID = document.getElementById('item_id');
  const commentPost = document.getElementById('sendcomment');
  const urlComment = document.getElementById('type');
  const username = document.getElementById('username');
  const msg = document.getElementById('successMsg');

  cForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const sendData = await _addComment_js__WEBPACK_IMPORTED_MODULE_0__["default"].pushCommentToApi(itemID.value, username.value, commentPost.value, urlComment.value);
    if (sendData === 'Created') {
      msg.textContent = 'Comment Sucessfully Added';
      content = '';
      // Consult the show API again and update the html content
      const promiseShowUpdated = (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_1__.retrieveShow)(`${_api_js__WEBPACK_IMPORTED_MODULE_2__["default"].Cmt}${itemID.value}`);
      promiseShowUpdated.then((show) => {
        commentLength = show.length;
        content = `<h5>Comment (${commentLength})</h5> <hr/>`;
        show.forEach((e) => {
          content += `<p><b><small> ${e.creation_date}: </small></b>   ${e.comment} <small>by: ${e.username}</small></p>`;
        });
        document.getElementById('listComment').innerHTML = content;
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupForm);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



class AddComment {
    static pushCommentToApi = async (itemID, username, commentPost, urlComment) => {
      const mbody = {
        item_id: itemID,
        username,
        comment: commentPost,
      };
      const postApiCall = await (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(`${_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].Inv + urlComment}`, mbody);
      return postApiCall;
    }

    static postLikes = async (itemID) => {
      const mbody = {
        item_id: itemID,
      };
      const postLike = await (0,_retrieveshow_js__WEBPACK_IMPORTED_MODULE_0__.postComment)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/likes/', mbody);
      return postLike;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddComment);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  API: 'https://api.tvmaze.com/search/shows?q=',
  Inv: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/',
  Cmt: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/comments?item_id=',
  Likes: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi//apps/x1XZKjTp3JZIGC168Q0T/likes/',
});


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const retrieveLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/likes/');
  const likes = response.json();
  return likes;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveLikes);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showCounter = (shows) => {
  document.querySelector('.show-counter').innerHTML = `Found (${shows})`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCounter);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCategory = () => {
  const category = JSON.parse(localStorage.getItem('myquery'));
  return category;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategory);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrievelikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



const addhtmlLikes = (id) => {
  let mLikes = 0;
  const promiseLikes = (0,_retrievelikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"].Likes);
  promiseLikes.then((like) => {
    like.forEach((e) => {
      if (Number(e.item_id) === Number(id)) {
        mLikes = e.likes + 1;
        document.querySelectorAll('[data-id]').forEach((elem) => {
          if (Number(elem.getAttribute('data-id')) === Number(id) && elem.id === 'mylikes') {
            elem.innerHTML = `${mLikes} Likes`;
          }
        });
      }
      if (mLikes === 0) {
        document.querySelectorAll('[data-id]').forEach((elem) => {
          if (Number(elem.getAttribute('data-id')) === Number(id) && elem.id === 'mylikes') {
            elem.innerHTML = '1 Likes';
          }
        });
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addhtmlLikes);


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);