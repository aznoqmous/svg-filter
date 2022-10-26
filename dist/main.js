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

/***/ "./src/example/builder.js":
/*!********************************!*\
  !*** ./src/example/builder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Builder)\n/* harmony export */ });\n/* harmony import */ var _svg_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-filter */ \"./src/svg-filter.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _filter_blend_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-blend-builder */ \"./src/example/filter-blend-builder.js\");\n/* harmony import */ var _filter_color_matrix_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-color-matrix-builder */ \"./src/example/filter-color-matrix-builder.js\");\n/* harmony import */ var _filter_gaussian_blur_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-gaussian-blur-builder */ \"./src/example/filter-gaussian-blur-builder.js\");\n/* harmony import */ var _filter_offset_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-offset-builder */ \"./src/example/filter-offset-builder.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Builder {\r\n    constructor(){\r\n        this.constructor._instance = this\r\n        this.filters = []\r\n        this.testName = \"testFilter\"\r\n        this.build()\r\n        this.bind()\r\n        this.filterTypes = [\r\n            new _filter_gaussian_blur_builder__WEBPACK_IMPORTED_MODULE_4__[\"default\"](),\r\n            new _filter_color_matrix_builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"](),\r\n            new _filter_offset_builder__WEBPACK_IMPORTED_MODULE_5__[\"default\"](),\r\n            new _filter_blend_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n        ]\r\n    }\r\n\r\n    build(){\r\n        this.svgFilter = new _svg_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testFilter\")\r\n        \r\n        this.container = document.querySelector('.container')\r\n        this.svgNameInput = this.container.querySelector('[name=\"name\"')\r\n        this.template = this.container.querySelector('template')\r\n        this.filtersContainer = this.container.querySelector('.filters')\r\n        this.addButton = this.container.querySelector('.add')\r\n        this.resultContainer = document.querySelector('.resultHTML')\r\n    }\r\n    bind(){\r\n        this.svgNameInput.addEventListener('input', ()=>{\r\n            this.updateResult()\r\n        })\r\n        this.addButton.addEventListener('click', (e)=> {\r\n            e.preventDefault()\r\n            this.addFilter()\r\n        })\r\n    }\r\n\r\n    addFilter(){\r\n        let element = document.createElement('form')\r\n        element.className = \"filter\"\r\n        element.innerHTML = this.template.innerHTML\r\n        element.typeSelect = element.querySelector('[name=\"type\"]')\r\n        element.settingsElement = element.querySelector('.settings')\r\n\r\n        this.filterTypes.map((props,i) => {\r\n            element.typeSelect.add(new Option(props.label, props.label, !i))\r\n        })\r\n\r\n        element.typeSelect.addEventListener('change', ()=>{\r\n            this.renderElement(element)\r\n            this.update()\r\n        })\r\n\r\n        element.querySelector('.delete').addEventListener('click', ()=>{\r\n            element.remove()\r\n            this.update()\r\n        })\r\n\r\n        this.renderElement(element)\r\n\r\n        this.filtersContainer.appendChild(element)\r\n\r\n        this.update()\r\n    }\r\n\r\n    renderElement(element){\r\n        element.settingsElement.innerHTML = \"\"\r\n        let filterType = this.getFilterTypeByLabel(element.typeSelect.selectedOptions[0].value)\r\n        filterType.render(element.settingsElement)\r\n    }\r\n\r\n    getFilterTypeByLabel(label){\r\n        let match = this.filterTypes.filter(f => f.label == label)\r\n        return match.length ? match[0] : null\r\n    }\r\n\r\n    getFilterTypeByConstructor(constructorName){\r\n        let match = this.filterTypes.filter(f => f.class.name == constructorName)\r\n        return match.length ? match[0] : null\r\n    }\r\n\r\n    getFilterByName(name){\r\n        let match = this.filters.filter(f => f.name == constructorName)\r\n        return match.length ? match[0] : null\r\n    }\r\n\r\n    update(){\r\n        _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetUuids()\r\n        this.filters = []\r\n        this.lastFilter = null\r\n        this.svgFilter.filters.innerHTML = \"\"\r\n        ;[...this.filtersContainer.children].map((element,i) => {\r\n            let filterType = this.getFilterTypeByLabel(element.typeSelect.selectedOptions[0].value)\r\n            let filter = new filterType.class()\r\n            this.filters.push(filter)\r\n        })\r\n        ;[...this.filtersContainer.children].map((element,i) => {\r\n            let filter = this.filters[i]\r\n            let filterType = this.getFilterTypeByConstructor(filter.constructor.name)\r\n            filterType.update(filter, element.settingsElement, i)\r\n            this.svgFilter.filters.appendChild(filter.element)\r\n            this.lastFilter  = filter\r\n        })\r\n        this.updateResult()\r\n    }\r\n\r\n    updateResult(){\r\n        this.svgFilter.name = this.svgNameInput.value.replace(/[^A-z0-9_]/g, \"\")\r\n\r\n        let indent = 0\r\n        let fill = \"    \"\r\n        let html = this.svgFilter.svg.outerHTML.replace(/&/g, \"&amp;\")\r\n        .replace(/\\>\\</g, \">_newline_<\")\r\n        .split(\"_newline_\")\r\n        .map(line => {\r\n            let add = !line.match(/^\\<\\//)\r\n            if(!add) indent--\r\n            line = Array(indent).fill(fill).join('') + line\r\n            if(add) indent++\r\n            return line\r\n        })\r\n        .join('\\r\\n')\r\n        html = html.replace(/</g, \"&lt;\")\r\n        .replace(/>/g, \"&gt;\")\r\n        .replace(/\"/g, \"&quot;\")\r\n        .replace(/'/g, \"&#39;\")\r\n        this.resultContainer.innerHTML = html\r\n        this.svgFilter.name = this.testName\r\n    }\r\n\r\n    createElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElement(tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n\r\n    static get Instance(){\r\n        if(!this._instance) this._instance = new this()\r\n        return this._instance\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/builder.js?");

/***/ }),

/***/ "./src/example/filter-blend-builder.js":
/*!*********************************************!*\
  !*** ./src/example/filter-blend-builder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBlendBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-blend */ \"./src/filter-blend.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterBlendBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Blend\", _filter_blend__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n    update(filter, settings, index){\r\n        let filters = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters\r\n        if(filters.length > 1){\r\n            let in1 = filters[index-1]\r\n            filter.in = in1\r\n        }\r\n        if(filters.length > 2){\r\n            let in2 = filters[index-2]\r\n            filter.in2 = in2\r\n        }\r\n        else {\r\n            filter.element.setAttribute('in', \"SourceGraphic\")    \r\n        }\r\n        super.update(filter, settings, index)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/filter-blend-builder.js?");

/***/ }),

/***/ "./src/example/filter-builder.js":
/*!***************************************!*\
  !*** ./src/example/filter-builder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBuilder)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n\r\n\r\nclass FilterBuilder {\r\n    constructor(label, filterClass){\r\n        this.class = filterClass\r\n        this.label = label\r\n\r\n        this.inputFilterName = null\r\n    }\r\n\r\n    render(settings){\r\n        /*let inputSelector = this.createInputSelector(settings)\r\n        inputSelector.addEventListener('change', ()=>{\r\n            this.inputFilterName = inputSelector.selectedOptions[0].value\r\n            Builder.Instance.update()\r\n        })*/\r\n    }\r\n\r\n    update(filter, settings, index){\r\n        /*let inputFilter = Builder.Instance.getFilterByName(this.inputFilterName)\r\n        if(inputFilter) filter.in = inputFilter*/\r\n    }\r\n\r\n    createInputSelector(parent=null){\r\n        let element = _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Instance.createElement(\"select\", {}, parent)\r\n        _builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Instance.filters.map(filter => {\r\n            element.add(new Option(filter.name, filter.name))\r\n        })\r\n        return element\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/filter-builder.js?");

/***/ }),

/***/ "./src/example/filter-color-matrix-builder.js":
/*!****************************************************!*\
  !*** ./src/example/filter-color-matrix-builder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterColorMatrixBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_color_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-color-matrix */ \"./src/filter-color-matrix.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterColorMatrixBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Color Matrix\", _filter_color_matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n\r\n    render(settings){\r\n        super.render(settings)\r\n        settings.inputValue = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('textarea', {\r\n            type: \"number\"\r\n        }, settings)\r\n        settings.inputValue.value = [\r\n            1,0,0,0,0,\r\n            0,1,0,0,0,\r\n            0,0,1,0,0,\r\n            0,0,0,19,-10\r\n        ].join(' ')\r\n        settings.inputValue.addEventListener('input', ()=>{\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n    }\r\n\r\n    update(filter, settings, index){\r\n        super.update(filter, settings, index)\r\n        if(_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.lastFilter) filter.in = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.lastFilter\r\n        filter.values = settings.inputValue.value.split(' ')\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/filter-color-matrix-builder.js?");

/***/ }),

/***/ "./src/example/filter-gaussian-blur-builder.js":
/*!*****************************************************!*\
  !*** ./src/example/filter-gaussian-blur-builder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterGaussianBlurBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_gaussian_blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-gaussian-blur */ \"./src/filter-gaussian-blur.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterGaussianBlurBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Gaussian Blur\", _filter_gaussian_blur__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n\r\n    render(settings){\r\n        super.render(settings)\r\n        settings.inputValue = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('input', {\r\n            type: \"number\",\r\n            value: 15\r\n        }, settings)\r\n        settings.inputValue.addEventListener('input', ()=>{\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n    }\r\n\r\n    update(filter, settings, index){\r\n        super.update(filter, settings, index)\r\n        filter.blur = settings.inputValue.value\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/filter-gaussian-blur-builder.js?");

/***/ }),

/***/ "./src/example/filter-offset-builder.js":
/*!**********************************************!*\
  !*** ./src/example/filter-offset-builder.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterOffsetBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-offset */ \"./src/filter-offset.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterOffsetBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Offset\", _filter_offset__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n\r\n    render(settings){\r\n        super.render(settings)\r\n        settings.inputXValue = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('input', {\r\n            type: \"number\",\r\n            value: 15\r\n        }, settings)\r\n        settings.inputXValue.addEventListener('input', ()=>{\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n        settings.inputYValue = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('input', {\r\n            type: \"number\",\r\n            value: 15\r\n        }, settings)\r\n        settings.inputYValue.addEventListener('input', ()=>{\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n    }\r\n\r\n    update(filter, settings, index){\r\n        super.update(filter, settings, index)\r\n        filter.x = settings.inputXValue.value || 0\r\n        filter.y = settings.inputYValue.value || 0\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/example/filter-offset-builder.js?");

/***/ }),

/***/ "./src/filter-blend.js":
/*!*****************************!*\
  !*** ./src/filter-blend.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBlend)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterBlend extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(input, input2){\r\n        super(\"feBlend\", {\r\n            in: input,\r\n            in2: input2\r\n        })\r\n        this._in2Filter = null\r\n    }\r\n\r\n    set in2(filter){\r\n        this._in2Filter = filter\r\n        this.element.setAttribute('in2', filter.name)\r\n    }\r\n    \r\n    get in2(){\r\n        return this._in2Filter\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/filter-blend.js?");

/***/ }),

/***/ "./src/filter-color-matrix.js":
/*!************************************!*\
  !*** ./src/filter-color-matrix.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterColorMatrix)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterColorMatrix extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(values=[]){\r\n        super(\"feColorMatrix\", {\r\n            mode: \"matrix\",\r\n            values: values.join(' ')\r\n        })\r\n    }\r\n\r\n    set values(v){\r\n        this.element.setAttribute('values', v.join(' '))\r\n    }\r\n    get values(){\r\n        return this.element.getAttribute('values').split(' ')\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/filter-color-matrix.js?");

/***/ }),

/***/ "./src/filter-gaussian-blur.js":
/*!*************************************!*\
  !*** ./src/filter-gaussian-blur.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterGaussianBlur)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterGaussianBlur extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(value=10){\r\n        super(\"feGaussianBlur\", {\r\n            stdDeviation: value\r\n        }, true)\r\n    }\r\n    \r\n    set blur(v){\r\n        this.element.setAttribute('stdDeviation', v)\r\n    }\r\n\r\n    get blur(){\r\n        return this.element.getAttribute('stdDeviation')\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/filter-gaussian-blur.js?");

/***/ }),

/***/ "./src/filter-offset.js":
/*!******************************!*\
  !*** ./src/filter-offset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterOffset)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterOffset extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(dx=0, dy=0){\r\n        super(\"feOffset\", {\r\n            dx, dy\r\n        })\r\n    }\r\n\r\n    set x(v){\r\n        this.element.setAttribute(\"dx\", v)\r\n    }\r\n\r\n    get x(){\r\n        return this.element.getAttribute(\"dx\")\r\n    }\r\n    \r\n    set y(v){\r\n        this.element.setAttribute(\"dy\", v)\r\n    }\r\n\r\n    get y(){\r\n        return this.element.getAttribute(\"dy\")\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/filter-offset.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nclass Filter {\r\n    constructor(type=\"feGaussianBlur\", attributes={}){\r\n        this.name = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUuid(\"filter\")\r\n        this.element = this.createSVGElement(type, attributes)\r\n        this.element.setAttribute('result', this.name)\r\n\r\n        this._inFilter = null\r\n    }\r\n\r\n    set in(filter){\r\n        this._inFilter = filter\r\n        this.element.setAttribute('in', filter.name)\r\n    }\r\n    \r\n    get in(){\r\n        return this._inFilter\r\n    }\r\n\r\n    createSVGElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElementNS(\"http://www.w3.org/2000/svg\", tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blob)\n/* harmony export */ });\n/* harmony import */ var _example_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example/builder */ \"./src/example/builder.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n    new _example_builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    new Blob(document.querySelector('figure'))\r\n    //let svgFilter = new SvgFilter(\"testFilter\")\r\n\r\n    /*let gaussianBlur = new FilterGaussianBlur(10)\r\n    gaussianBlur.setIn(\"SourceGraphic\")\r\n    svgFilter.filters.appendChild(gaussianBlur.element)\r\n    \r\n    let colorMatrix = new FilterColorMatrix([\r\n        1, 0, 0, 0, 0,\r\n        0, 1, 0, 0, 0,\r\n        0, 0, 1, 0, 0,\r\n        0, 0, 0, 19, -10\r\n    ])\r\n    svgFilter.filters.appendChild(colorMatrix.element)\r\n\r\n    let blend = new Filter(\"feBlend\", {\r\n        in: \"SourceGrapphic\",\r\n        in2: colorMatrix.name\r\n    })\r\n    svgFilter.filters.appendChild(blend.element)*/\r\n\r\n\r\n})\r\n\r\nclass Blob {\r\n    constructor(container) {\r\n        this.container = container\r\n        this.build()\r\n\r\n        this.draw()\r\n    }\r\n\r\n    build(){\r\n        this.c = document.createElement('canvas')\r\n        this.container.appendChild(this.c)\r\n        const rect = this.c.getBoundingClientRect()\r\n        this.c.width = rect.width\r\n        this.c.height = rect.height\r\n        this.ctx = this.c.getContext('2d')\r\n\r\n        this.hiddenCanvas = document.createElement('canvas')\r\n        this.hiddenCtx = this.hiddenCanvas.getContext('2d')\r\n        this.hiddenCanvas.width = this.c.width\r\n        this.hiddenCanvas.height = this.c.height\r\n\r\n        let size = 0.5\r\n        this.circles = Array(20).fill({}).map(c => ({\r\n            x: Math.random() * this.c.width,\r\n            y: Math.random() * this.c.height,\r\n            speedX: (Math.random() * 2 - 1) * 0.2,\r\n            speedY: (Math.random() * 2 - 1) * 0.2,\r\n            size: (this.c.width / 5 * Math.random() + this.c.width / 10) * size,\r\n            color: `hsl(${Math.random()*100+120}deg, 70%, 70%)`\r\n        }))\r\n        this.ctx.fillStyle = \"red\"\r\n        this.loop()\r\n    }\r\n\r\n    clear(){\r\n        this.hiddenCtx.clearRect(0, 0, this.c.width, this.c.height)\r\n        this.ctx.clearRect(0, 0, this.c.width, this.c.height)\r\n    }\r\n\r\n    draw(){\r\n        this.clear()\r\n\r\n        this.circles.map(c => {\r\n            if(c.x < 0 || c.x > this.c.width) c.speedX = -c.speedX\r\n            if(c.y < 0 || c.y > this.c.height) c.speedY = -c.speedY\r\n\r\n            c.x += c.speedX\r\n            c.y += c.speedY\r\n            this.drawCircle(c.x,c.y, c.size, c.color)\r\n        })\r\n\r\n        this.ctx.drawImage(this.hiddenCanvas, 0, 0, this.c.width, this.c.height)\r\n    }\r\n\r\n    loop(){\r\n        this.draw()\r\n        requestAnimationFrame(this.loop.bind(this))\r\n    }\r\n\r\n    drawCircle(x, y, radius=50, color=\"red\"){\r\n        this.hiddenCtx.fillStyle = color\r\n        this.hiddenCtx.beginPath()\r\n        this.hiddenCtx.arc(x, y, radius, 0, 2*Math.PI)\r\n        this.hiddenCtx.fill()\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svg-filter.js":
/*!***************************!*\
  !*** ./src/svg-filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SvgFilter)\n/* harmony export */ });\nclass SvgFilter {\r\n    constructor(name=\"customSvgFilter\"){\r\n        this.build()\r\n        this.name = name\r\n    }\r\n\r\n    set name(value){\r\n        this.filters.setAttribute('id', value)\r\n    }\r\n    get name(){\r\n        return this.filters.getAttribute('id')\r\n    }\r\n\r\n    build(){\r\n        this.svg = this.createSVGElement(\"svg\")\r\n        this.defs = this.createSVGElement(\"defs\", {}, this.svg)\r\n        this.filters = this.createSVGElement(\"filter\", {}, this.defs)\r\n        document.body.appendChild(this.svg)\r\n    }\r\n\r\n    createSVGElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElementNS(\"http://www.w3.org/2000/svg\", tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/svg-filter.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utils)\n/* harmony export */ });\nlet ids = {}\r\nclass Utils {\r\n    static resetUuids(){\r\n        ids = {}\r\n    }\r\n    static getUuid(string=\"element\"){\r\n        string = string + \"\"\r\n        if(!ids[string]) ids[string] = 0\r\n        ids[string]++\r\n        return string+ids[string]\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

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