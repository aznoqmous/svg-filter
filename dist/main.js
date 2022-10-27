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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Builder)\n/* harmony export */ });\n/* harmony import */ var _svg_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-filter */ \"./src/svg-filter.js\");\n/* harmony import */ var _filter_blend_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-blend-builder */ \"./src/example/filter-blend-builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n/* harmony import */ var _filter_color_matrix_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-color-matrix-builder */ \"./src/example/filter-color-matrix-builder.js\");\n/* harmony import */ var _filter_composite_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-composite-builder */ \"./src/example/filter-composite-builder.js\");\n/* harmony import */ var _filter_diffuse_lighting_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-diffuse-lighting-builder */ \"./src/example/filter-diffuse-lighting-builder.js\");\n/* harmony import */ var _filter_displacement_map_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-displacement-map-builder */ \"./src/example/filter-displacement-map-builder.js\");\n/* harmony import */ var _filter_gaussian_blur_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-gaussian-blur-builder */ \"./src/example/filter-gaussian-blur-builder.js\");\n/* harmony import */ var _filter_hue_rotate_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-hue-rotate-builder */ \"./src/example/filter-hue-rotate-builder.js\");\n/* harmony import */ var _filter_luminance_to_alpha_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-luminance-to-alpha-builder */ \"./src/example/filter-luminance-to-alpha-builder.js\");\n/* harmony import */ var _filter_morphology_builder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-morphology-builder */ \"./src/example/filter-morphology-builder.js\");\n/* harmony import */ var _filter_offset_builder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter-offset-builder */ \"./src/example/filter-offset-builder.js\");\n/* harmony import */ var _filter_saturate_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter-saturate-builder */ \"./src/example/filter-saturate-builder.js\");\n/* harmony import */ var _filter_specular_lighting_builder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter-specular-lighting-builder */ \"./src/example/filter-specular-lighting-builder.js\");\n/* harmony import */ var _filter_turbulence_builder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter-turbulence-builder */ \"./src/example/filter-turbulence-builder.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Builder {\r\n    constructor(testElement){\r\n        this.constructor._instance = this\r\n        this.testName = \"testFilter\"\r\n        this.testElement = testElement\r\n        this.build()\r\n        this.bind()\r\n        this.filterBuilderTypes = [\r\n            _filter_gaussian_blur_builder__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n            _filter_color_matrix_builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n            _filter_offset_builder__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n            _filter_specular_lighting_builder__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\r\n            _filter_diffuse_lighting_builder__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n            _filter_composite_builder__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n            _filter_blend_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n            _filter_turbulence_builder__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\r\n            _filter_displacement_map_builder__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n            _filter_saturate_builder__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\r\n            _filter_hue_rotate_builder__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n            _filter_luminance_to_alpha_builder__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\r\n            _filter_morphology_builder__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\r\n        ]\r\n        this.filterBuilderLabels = this.filterBuilderTypes.map(c => (new c()).label)\r\n        this.filterBuilders = []\r\n    }\r\n\r\n    get filters(){\r\n        return this.filterBuilders.map(fb => fb.filter)\r\n    }\r\n\r\n    build(){\r\n        this.svgFilter = new _svg_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"testFilter\")\r\n        \r\n        this.container = document.querySelector('.container')\r\n        this.svgNameInput = this.container.querySelector('[name=\"name\"')\r\n        this.template = this.container.querySelector('template')\r\n        this.filtersContainer = this.container.querySelector('.filters')\r\n        this.addButton = this.container.querySelector('.add')\r\n        this.resultContainer = document.querySelector('.resultHTML')\r\n    }\r\n    bind(){\r\n        this.svgNameInput.addEventListener('input', ()=>{\r\n            this.updateResult()\r\n        })\r\n        this.addButton.addEventListener('click', (e)=> {\r\n            e.preventDefault()\r\n            this.addFilterBuilder()\r\n        })\r\n    }\r\n\r\n\r\n    removeFilterBuilder(filterBuilder){\r\n        this.filterBuilders.splice(this.filterBuilders.indexOf(filterBuilder), 1)\r\n    }\r\n\r\n    addFilterBuilder(){\r\n        let filterBuilder = new _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n        filterBuilder.loadBuilder(this.filterBuilderTypes[0])\r\n        filterBuilder.build()\r\n        this.filterBuilders.push(filterBuilder)\r\n        this.filtersContainer.appendChild(filterBuilder.element)\r\n\r\n        this.filterBuilders.map(fb => fb.updateFilterSelectors())\r\n        this.update()\r\n    }\r\n\r\n    getFilterBuilderByLabel(label){\r\n        return this.filterBuilderTypes[this.filterBuilderLabels.indexOf(label)]\r\n    }\r\n\r\n    getFilterByName(filterName){\r\n        let match = this.filters.filter(f => f.name == filterName)\r\n        return match.length ? match[0] : null\r\n    }\r\n\r\n    update(){\r\n        this.filterBuilders.map(fb => fb.update())\r\n\r\n        this.svgFilter.setFilters(this.filters)\r\n\r\n        this.updateResult()\r\n    }\r\n\r\n    updateResult(){\r\n        this.svgFilter.name = this.svgNameInput.value.replace(/[^A-z0-9_]/g, \"\")\r\n\r\n        let indent = 0\r\n        let fill = \"    \"\r\n        let html = this.svgFilter.svg.outerHTML.replace(/&/g, \"&amp;\")\r\n        .replace(/\\>\\</g, \">_newline_<\")\r\n        .split(\"_newline_\")\r\n        .map(line => {\r\n            let add = !line.match(/^\\<\\//)\r\n            if(!add) indent--\r\n            line = Array(indent).fill(fill).join('') + line\r\n            if(add) indent++\r\n            return line\r\n        })\r\n        .join('\\r\\n')\r\n        html = html.replace(/</g, \"&lt;\")\r\n        .replace(/>/g, \"&gt;\")\r\n        .replace(/\"/g, \"&quot;\")\r\n        .replace(/'/g, \"&#39;\")\r\n        this.resultContainer.innerHTML = html\r\n        this.svgFilter.name = this.testName\r\n    }\r\n\r\n    reorderBuilders(){\r\n        this.filterBuilders = [...this.filtersContainer.children].map(element => element.filterBuilder)\r\n        this.update()\r\n    }\r\n\r\n    createElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElement(tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n\r\n    createSelect(objKeyValues, parent=null){\r\n        let select = this.createElement('select', {}, parent)\r\n        Object.keys(objKeyValues).map((key, i) => {\r\n            select.add(new Option(objKeyValues[key], key, !i,!i))\r\n        })\r\n        return select\r\n    }\r\n\r\n\r\n    static get Instance(){\r\n        if(!this._instance) this._instance = new this()\r\n        return this._instance\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/builder.js?");

/***/ }),

/***/ "./src/example/draggable.js":
/*!**********************************!*\
  !*** ./src/example/draggable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Draggable)\n/* harmony export */ });\nclass Draggable{\r\n    constructor(dragElement, draggableElement=null){\r\n        this.dragElement = dragElement\r\n        this.draggableElement = draggableElement || dragElement\r\n        \r\n        this.build()\r\n        this.bind()\r\n    }\r\n    \r\n    get parent(){\r\n        return this.draggableElement.parentElement\r\n    }\r\n\r\n    build(){\r\n        this.draggableElement.style.userSelect = \"none\"\r\n    }\r\n\r\n    bind(){\r\n        this.dragElement.addEventListener('mousedown', (e)=>{\r\n            this.startDrag(e)\r\n        })\r\n        window.addEventListener('mouseup', (e)=>{\r\n            this.endDrag(e)\r\n        })\r\n        window.addEventListener('mousemove', (e)=>{\r\n            if(this.isDragging) this.handleDrag(e)\r\n        })\r\n    }\r\n\r\n    startDrag(e){\r\n        if(this.isDragging) return;\r\n        this.isDragging = true\r\n        this.update()\r\n        this.draggableElement.dispatchEvent(new Event('dragstart'))\r\n    }\r\n\r\n    endDrag(e){\r\n        if(!this.isDragging) return;\r\n        this.isDragging = false\r\n        this.draggableElement.dispatchEvent(new Event('dragend'))\r\n    }\r\n\r\n    handleDrag(e){\r\n        let prev = this.previousSibling\r\n        let next = this.nextSibling\r\n        if(prev && prev.getBoundingClientRect().bottom > e.pageY){\r\n            return this.moveUp()\r\n        }\r\n        if(next && next.getBoundingClientRect().top < e.pageY){\r\n            return this.moveDown()\r\n        }\r\n    }\r\n\r\n    moveUp(){\r\n        this.parent.insertBefore(this.draggableElement, this.previousSibling)\r\n        this.update()\r\n    }\r\n\r\n    moveDown(){\r\n        this.parent.insertBefore(this.nextSibling, this.draggableElement)\r\n        this.update()\r\n    }\r\n\r\n    update(){\r\n        this.updateSiblings()\r\n        this.updateIndex()\r\n    }\r\n\r\n    updateSiblings(){\r\n        this.siblings = [...this.draggableElement.parentElement.children]\r\n    }\r\n\r\n    updateIndex(){\r\n        this.index = this.siblings.indexOf(this.draggableElement)\r\n    }\r\n\r\n    get previousSibling(){\r\n        return this.siblings[this.index-1]\r\n    }\r\n\r\n    get nextSibling(){\r\n        return this.siblings[this.index+1]\r\n    }\r\n\r\n    static bind(dragElement, draggableElement=null){\r\n        return new Draggable(dragElement, draggableElement)\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/draggable.js?");

/***/ }),

/***/ "./src/example/filter-blend-builder.js":
/*!*********************************************!*\
  !*** ./src/example/filter-blend-builder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBlendBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_blend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-blend */ \"./src/filter-blend.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterBlendBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Blend\", _filter_blend__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            in: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            in2: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-blend-builder.js?");

/***/ }),

/***/ "./src/example/filter-builder.js":
/*!***************************************!*\
  !*** ./src/example/filter-builder.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBuilder)\n/* harmony export */ });\n/* harmony import */ var _svg_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-filter */ \"./src/svg-filter.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ \"./src/example/draggable.js\");\n\r\n\r\n\r\n\r\nclass FilterBuilder {\r\n    constructor(label, filterClass=null, fieldsConfiguration={}){\r\n        this.label = label\r\n        this.class = filterClass\r\n        this.inputFilterName = null\r\n        this.fieldsConfiguration = fieldsConfiguration\r\n    }\r\n    \r\n    build(){\r\n        this.element = document.createElement('form')\r\n        this.element.filterBuilder = this\r\n        this.element.className = \"filter\"\r\n        this.element.innerHTML = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.template.innerHTML\r\n        this.element.typeSelect = this.element.querySelector('[name=\"type\"]')\r\n        this.settings = this.element.querySelector('.settings')\r\n        this.previewContainer = this.element.querySelector('.preview')\r\n        this.drag = this.element.querySelector('.drag')\r\n\r\n        _draggable__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this.drag, this.element)\r\n        this.element.addEventListener('dragstart', ()=>{\r\n            this.element.style.opacity = 0.5\r\n        })\r\n        this.element.addEventListener('dragend', ()=>{\r\n            this.element.style.opacity = 1\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.reorderBuilders()\r\n        })\r\n\r\n        this.name = this.element.querySelector('.name')\r\n        this.name.innerHTML = this.filter.name\r\n        \r\n        _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filterBuilderLabels.map((label,i) => {\r\n            this.element.typeSelect.add(new Option(label, i, !i))\r\n        })\r\n        this.element.typeSelect.addEventListener('change', ()=>{\r\n            let selectedOption = this.element.typeSelect.selectedOptions[0]\r\n            this.loadBuilder(_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filterBuilderTypes[selectedOption.value])\r\n            this.render()\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n        this.element.querySelector('.delete').addEventListener('click', ()=>{\r\n            this.element.remove()\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.removeFilterBuilder(this)\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filterBuilders.map(fb => fb.updateFilterSelectors())\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n\r\n        this.render()\r\n    }\r\n\r\n    setFilter(filterClass){\r\n        if(!filterClass) return;\r\n        if(this.filter) this.filter = new filterClass(this.filter.name)\r\n        else this.filter = new filterClass()\r\n    }\r\n\r\n    loadBuilder(filterBuilderClass){\r\n        let builder = new filterBuilderClass()\r\n        this.render = filterBuilderClass.prototype.render\r\n        this.update = filterBuilderClass.prototype.update\r\n        this.onUpdate = filterBuilderClass.prototype.onUpdate\r\n        this.buildLightSettings = filterBuilderClass.prototype.buildLightSettings\r\n        this.fieldsConfiguration = builder.fieldsConfiguration\r\n        this.fields = {}\r\n        this.setFilter(builder.class)\r\n    }\r\n\r\n    render(){\r\n        this.buildPreview()\r\n\r\n        this.settings.innerHTML = \"\"\r\n\r\n        /* Generate filter fields */\r\n        this.fields = {}\r\n        Object.keys(this.fieldsConfiguration).map(key => {\r\n            let config = this.fieldsConfiguration[key]\r\n            this.fields[key] = this.createField(key, config)\r\n        })\r\n    }\r\n\r\n    update(){\r\n        Object.keys(this.fields).map(key => {\r\n            let config = this.fields[key].config\r\n            let value = this.getFieldValue(this.fields[key])\r\n            if(config.type == \"filter\"){\r\n                if(!value) return this.filter.element.removeAttribute(key)\r\n                if(!value.name) return this.filter.element.setAttribute(key, value)\r\n            }\r\n            this.filter[key] = value\r\n        })\r\n        console.log(\"UPDATE\")\r\n        this.onUpdate()\r\n        this.updatePreview()\r\n    }\r\n\r\n    onUpdate(){\r\n        // do your things\r\n    }\r\n\r\n    createInputSelector(parent=null){\r\n        let element = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement(\"select\", {}, parent)\r\n        let values = [\r\n            \"\", \"SourceGraphic\",\r\n            ..._builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters.map(f => f.name)\r\n            .filter(name => name != this.filter.name)\r\n        ]\r\n        values\r\n        .map(value => {\r\n            element.add(new Option(value, value))\r\n        })\r\n        return element\r\n    }\r\n\r\n    updateFilterSelectors(){\r\n        Object.values(this.fields).filter(f => f.config.type == \"filter\")\r\n        .map(field => {\r\n            let selected = field.selectedOptions[0].value\r\n            field.config.value = selected\r\n            this.setFilterSelectorOptions(field)\r\n        })\r\n    }\r\n\r\n    createInput(attributes={}, parent=null){\r\n        let input = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('input', attributes, parent || this.settings)\r\n        input.addEventListener('input', ()=> _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update())\r\n        return input\r\n    }\r\n\r\n    createField(key, config){\r\n        let container = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('div', {class: \"input-group\"}, this.settings)\r\n        let label = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('strong', {}, container)\r\n        label.innerHTML = key\r\n        let attributes = Object.assign({\r\n            element: \"input\",\r\n            type: \"number\",\r\n            step: 1\r\n        }, config)\r\n        let tagName = attributes.element\r\n        delete attributes.tagName\r\n\r\n        let element = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement(tagName, attributes, container)\r\n        element.addEventListener('input', ()=> _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update())\r\n        element.value = this.filter[key]\r\n        element.config = config\r\n        element.key = key\r\n        switch(tagName){\r\n            case \"select\":\r\n                this.setFilterSelectorOptions(element)\r\n            default:\r\n                break;\r\n        }\r\n        return element\r\n    }\r\n\r\n    setFilterSelectorOptions(element){\r\n        element.innerHTML = \"\"\r\n        let config = element.config\r\n        if(config.type == \"filter\") config.options = this.getFilterSelectorValues()\r\n        Object.keys(config.options).map((key, i) => {\r\n            let value = config.options[key]\r\n            let selected = config.value ? config.value == value : !i\r\n            element.add(new Option(value, key, selected, selected))\r\n        })\r\n    }\r\n\r\n    getFieldValue(field){\r\n        if(field.config.isTypeSelector){\r\n            let value = field.selectedOptions.length ? field.selectedOptions[0].value : null\r\n            return _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.getFilterByName(value)\r\n        }\r\n        \r\n        let value;\r\n        switch(field.tagName){\r\n            case \"select\":\r\n                value = field.selectedOptions.length ? field.selectedOptions[0].value : null\r\n                break;\r\n            default:\r\n                value = field.value\r\n                break;\r\n        }\r\n        return value;\r\n    }\r\n\r\n    getFilterSelectorValues(){\r\n        return Object.fromEntries(\r\n            [\r\n                \"\", \r\n                \"SourceGraphic\",\r\n                ..._builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters.map(f => f.name)\r\n            ]\r\n            .filter(name => name != this.filter.name)\r\n            .map(name => [name, name])\r\n        )\r\n    }\r\n\r\n    buildPreview(){\r\n        this.svgFilter = new _svg_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.filter.name + \"_preview\")\r\n        this.updatePreview()\r\n    }\r\n\r\n    updatePreview(){\r\n        this.previewContainer.innerHTML = \"\"\r\n        this.previewElement = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.testElement.cloneNode(true)\r\n        this.previewElement.style.filter = `url(#${this.filter.name + \"_preview\"})`\r\n        this.previewContainer.appendChild(this.previewElement)\r\n        let filters = this.getPreviousFilters()\r\n        filters.push(this.filter)\r\n        console.log(filters)\r\n        this.svgFilter.filters.innerHTML = \"\"\r\n        this.svgFilter.addFilterClones(filters)\r\n        this.previewContainer.appendChild(this.svgFilter.svg)\r\n    }\r\n\r\n    getPreviousFilters(){\r\n        let index = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters.map(f => f.name).indexOf(this.filter.name)\r\n        if(index == -1) return _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters\r\n        return _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.filters.slice(0, index)\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-builder.js?");

/***/ }),

/***/ "./src/example/filter-color-matrix-builder.js":
/*!****************************************************!*\
  !*** ./src/example/filter-color-matrix-builder.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterColorMatrixBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_color_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-color-matrix */ \"./src/filter-color-matrix.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterColorMatrixBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Color Matrix\", _filter_color_matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            in: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            }\r\n        })\r\n    }\r\n\r\n    render(){\r\n        super.render()\r\n        this.settings.inputValue = _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.createElement('textarea', {\r\n            type: \"number\"\r\n        }, this.settings)\r\n        this.settings.inputValue.value = [\r\n            1,0,0,0,0,\r\n            0,1,0,0,0,\r\n            0,0,1,0,0,\r\n            0,0,0,19,-10\r\n        ].join(' ')\r\n        this.settings.inputValue.addEventListener('input', ()=>{\r\n            _builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Instance.update()\r\n        })\r\n    }\r\n\r\n    onUpdate(){\r\n        console.log(\"onUpdate\", this.settings.inputValue.value)\r\n        this.filter.values = this.settings.inputValue.value.split(' ')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-color-matrix-builder.js?");

/***/ }),

/***/ "./src/example/filter-composite-builder.js":
/*!*************************************************!*\
  !*** ./src/example/filter-composite-builder.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterCompositeBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_composite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-composite */ \"./src/filter-composite.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterCompositeBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Composite\", _filter_composite__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            in: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            in2: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            operator: {\r\n                element: \"select\",\r\n                options: {\r\n                    over: \"over\", \r\n                    in: \"in\", \r\n                    out: \"out\", \r\n                    atop: \"atop\", \r\n                    xor: \"xor\", \r\n                    arithmetic: \"arithmetic\", \r\n                    lighter: \"lighter\"\r\n                }\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-composite-builder.js?");

/***/ }),

/***/ "./src/example/filter-diffuse-lighting-builder.js":
/*!********************************************************!*\
  !*** ./src/example/filter-diffuse-lighting-builder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterDiffuseLightingBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_diffuse_lighting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-diffuse-lighting */ \"./src/filter-diffuse-lighting.js\");\n/* harmony import */ var _filter_point_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-point-light */ \"./src/filter-point-light.js\");\n/* harmony import */ var _filter_spot_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-spot-light */ \"./src/filter-spot-light.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass FilterDiffuseLightingBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Diffuse Lighting\", _filter_diffuse_lighting__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            lightingColor: {\r\n                type: \"text\"\r\n            },\r\n            surfaceScale: {\r\n                step: 0.1\r\n            },\r\n            diffuseConstant: {\r\n                step: 0.1\r\n            }\r\n        })\r\n    }\r\n\r\n    render(){\r\n        this.lights = {\r\n            point: new _filter_point_light__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.filter.name + \"_point\"),\r\n            spot: new _filter_spot_light__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.filter.name + \"_spot\") \r\n        }\r\n        super.render()\r\n\r\n        this.lightSelect = _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.createSelect(\r\n            Object.fromEntries(Object.keys(this.lights).map(key=> [key,key])),\r\n            this.settings\r\n        )\r\n        this.lightSelect.addEventListener('change', ()=> {\r\n            this.buildLightSettings()\r\n            _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.update()\r\n        })\r\n        this.buildLightSettings()\r\n    }\r\n\r\n    buildLightSettings(){\r\n        this.filter.setLight(this.lights[this.lightSelect.selectedOptions[0].value])\r\n\r\n        if(this.lightSettings) this.lightSettings.remove()\r\n\r\n        this.lightSettings = _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.createElement(\"div\", {}, this.settings)\r\n        this.lightInputs = {}\r\n        this.lightInputs.x = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.x\r\n        }, this.lightSettings)\r\n        this.lightInputs.y = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.y\r\n        }, this.lightSettings)\r\n        this.lightInputs.z = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.z\r\n        }, this.lightSettings)\r\n        \r\n        if(this.filter.light == this.lights.spot){\r\n            this.lightInputs.limitingConeAngle =  this.createInput({\r\n                type: \"number\",\r\n                value: this.filter.light.limitingConeAngle,\r\n                step: 0.5\r\n            }, this.lightSettings)\r\n        }\r\n    }\r\n\r\n    onUpdate(){\r\n        this.filter.light.x = this.lightInputs.x.value\r\n        this.filter.light.y = this.lightInputs.y.value\r\n        this.filter.light.z = this.lightInputs.z.value\r\n\r\n        if(this.lightInputs.limitingConeAngle) this.filter.light.limitingConeAngle = this.lightInputs.limitingConeAngle.value\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-diffuse-lighting-builder.js?");

/***/ }),

/***/ "./src/example/filter-displacement-map-builder.js":
/*!********************************************************!*\
  !*** ./src/example/filter-displacement-map-builder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterDisplacementMapBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_displacement_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-displacement-map */ \"./src/filter-displacement-map.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterDisplacementMapBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Displacement Map\", _filter_displacement_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            in: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            in2: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            scale: {},\r\n            xChannelSelector: {\r\n                type: \"text\"\r\n            },\r\n            yChannelSelector: {\r\n                type: \"text\"\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-displacement-map-builder.js?");

/***/ }),

/***/ "./src/example/filter-gaussian-blur-builder.js":
/*!*****************************************************!*\
  !*** ./src/example/filter-gaussian-blur-builder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterGaussianBlurBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_gaussian_blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-gaussian-blur */ \"./src/filter-gaussian-blur.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterGaussianBlurBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Gaussian Blur\", _filter_gaussian_blur__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            in: {\r\n                element: \"select\",\r\n                type: \"filter\"\r\n            },\r\n            blur: {}\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-gaussian-blur-builder.js?");

/***/ }),

/***/ "./src/example/filter-hue-rotate-builder.js":
/*!**************************************************!*\
  !*** ./src/example/filter-hue-rotate-builder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterHueRotateBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_hue_rotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-hue-rotate */ \"./src/filter-hue-rotate.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterHueRotateBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(){\r\n        super(\"Hue Rotate\", _filter_hue_rotate__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            value: {}\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-hue-rotate-builder.js?");

/***/ }),

/***/ "./src/example/filter-luminance-to-alpha-builder.js":
/*!**********************************************************!*\
  !*** ./src/example/filter-luminance-to-alpha-builder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterLuminanceToAlphaBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_luminance_to_alpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-luminance-to-alpha */ \"./src/filter-luminance-to-alpha.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterLuminanceToAlphaBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(){\r\n        super(\"Luminance to alpha\", _filter_luminance_to_alpha__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-luminance-to-alpha-builder.js?");

/***/ }),

/***/ "./src/example/filter-morphology-builder.js":
/*!**************************************************!*\
  !*** ./src/example/filter-morphology-builder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterMorphologyBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_morphology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-morphology */ \"./src/filter-morphology.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterMorphologyBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(){\r\n        super(\"Morphology\", _filter_morphology__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            operator: {\r\n                element: \"select\",\r\n                options: {\r\n                    erode: \"erode\",\r\n                    dilate: \"dilate\"\r\n                }\r\n            },\r\n            radius: {\r\n                step: 0.5\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-morphology-builder.js?");

/***/ }),

/***/ "./src/example/filter-offset-builder.js":
/*!**********************************************!*\
  !*** ./src/example/filter-offset-builder.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterOffsetBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-offset */ \"./src/filter-offset.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterOffsetBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Offset\", _filter_offset__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            x: {},\r\n            y: {}\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-offset-builder.js?");

/***/ }),

/***/ "./src/example/filter-saturate-builder.js":
/*!************************************************!*\
  !*** ./src/example/filter-saturate-builder.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterSaturateBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_saturate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-saturate */ \"./src/filter-saturate.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\nclass FilterSaturateBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(){\r\n        super(\"Saturate\", _filter_saturate__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            value: {\r\n                step: 10\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-saturate-builder.js?");

/***/ }),

/***/ "./src/example/filter-specular-lighting-builder.js":
/*!*********************************************************!*\
  !*** ./src/example/filter-specular-lighting-builder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterSpecularLightingBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_point_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-point-light */ \"./src/filter-point-light.js\");\n/* harmony import */ var _filter_specular_lighting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-specular-lighting */ \"./src/filter-specular-lighting.js\");\n/* harmony import */ var _filter_spot_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-spot-light */ \"./src/filter-spot-light.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass FilterSpecularLightingBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Specular Lighting\", _filter_specular_lighting__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\r\n            lightingColor: {\r\n                type: \"text\"\r\n            },\r\n            surfaceScale: {},\r\n            specularConstant: {},\r\n            specularExponent: {}\r\n        })\r\n    }\r\n\r\n    render(){\r\n        this.lights = {\r\n            point: new _filter_point_light__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.filter.name + \"_point\"),\r\n            spot: new _filter_spot_light__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.filter.name + \"_spot\") \r\n        }\r\n        super.render()\r\n\r\n        this.lightSelect = _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.createSelect(\r\n            Object.fromEntries(Object.keys(this.lights).map(key=> [key,key])),\r\n            this.settings\r\n        )\r\n        this.lightSelect.addEventListener('change', ()=> {\r\n            this.buildLightSettings()\r\n            _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.update()\r\n        })\r\n        this.buildLightSettings()\r\n    }\r\n\r\n    buildLightSettings(){\r\n        this.filter.setLight(this.lights[this.lightSelect.selectedOptions[0].value])\r\n\r\n        if(this.lightSettings) this.lightSettings.remove()\r\n\r\n        this.lightSettings = _builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Instance.createElement(\"div\", {}, this.settings)\r\n        this.lightInputs = {}\r\n        this.lightInputs.x = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.x\r\n        }, this.lightSettings)\r\n        this.lightInputs.y = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.y\r\n        }, this.lightSettings)\r\n        this.lightInputs.z = this.createInput({\r\n            type: \"number\",\r\n            value: this.filter.light.z\r\n        }, this.lightSettings)\r\n        \r\n        if(this.filter.light == this.lights.spot){\r\n            this.lightInputs.limitingConeAngle =  this.createInput({\r\n                type: \"number\",\r\n                value: this.filter.light.limitingConeAngle,\r\n                step: 0.5\r\n            }, this.lightSettings)\r\n        }\r\n    }\r\n\r\n    onUpdate(){\r\n        this.filter.light.x = this.lightInputs.x.value\r\n        this.filter.light.y = this.lightInputs.y.value\r\n        this.filter.light.z = this.lightInputs.z.value\r\n\r\n        if(this.lightInputs.limitingConeAngle) this.filter.light.limitingConeAngle = this.lightInputs.limitingConeAngle.value\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-specular-lighting-builder.js?");

/***/ }),

/***/ "./src/example/filter-turbulence-builder.js":
/*!**************************************************!*\
  !*** ./src/example/filter-turbulence-builder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterTurbulenceBuilder)\n/* harmony export */ });\n/* harmony import */ var _filter_turbulence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-turbulence */ \"./src/filter-turbulence.js\");\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder */ \"./src/example/builder.js\");\n/* harmony import */ var _filter_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-builder */ \"./src/example/filter-builder.js\");\n\r\n\r\n\r\n\r\nclass FilterTurbulenceBuilder extends _filter_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n{\r\n    constructor(){\r\n        super(\"Turbulence\", _filter_turbulence__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n            baseFrequency: {\r\n                step: 0.001\r\n            },\r\n            numOctaves: {}\r\n        })\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/example/filter-turbulence-builder.js?");

/***/ }),

/***/ "./src/filter-blend.js":
/*!*****************************!*\
  !*** ./src/filter-blend.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterBlend)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterBlend extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, input, input2){\r\n        super(\"feBlend\", {\r\n            in: input,\r\n            in2: input2\r\n        }, name)\r\n        this._in2Filter = null\r\n    }\r\n\r\n    set in2(filter){\r\n        this._in2Filter = filter\r\n        if(!filter) this.element.removeAttribute('in')\r\n        else this.element.setAttribute('in2', filter.name)\r\n    }\r\n    \r\n    get in2(){\r\n        return this._in2Filter\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-blend.js?");

/***/ }),

/***/ "./src/filter-color-matrix.js":
/*!************************************!*\
  !*** ./src/filter-color-matrix.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterColorMatrix)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterColorMatrix extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, values=[]){\r\n        super(\"feColorMatrix\", {\r\n            type: \"matrix\",\r\n            values: values.join(' ')\r\n        }, name)\r\n    }\r\n\r\n    set values(v){\r\n        this.element.setAttribute('values', v.join(' '))\r\n    }\r\n    get values(){\r\n        return this.element.getAttribute('values').split(' ')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-color-matrix.js?");

/***/ }),

/***/ "./src/filter-composite.js":
/*!*********************************!*\
  !*** ./src/filter-composite.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterComposite)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterComposite extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, operator=\"over\", input=null, input2=null){\r\n        super(\"feComposite\", {\r\n            operator, // over, in, out, atop, xor, arithmetic, lighter\r\n            in: input,\r\n            in2: input2,\r\n            k1: 0,\r\n            k2: 1,\r\n            k3: 1,\r\n            k4: 0\r\n        }, name)\r\n        this._in2Filter = null\r\n    }\r\n\r\n    set in2(filter){\r\n        this._in2Filter = filter\r\n        if(!filter) this.element.removeAttribute('in')\r\n        else this.element.setAttribute('in2', filter.name)\r\n    }\r\n    \r\n    get in2(){\r\n        return this._in2Filter\r\n    }\r\n\r\n    set operator(v){\r\n        this.element.setAttribute('operator', v)\r\n    }\r\n\r\n    get operator(){\r\n        return this.element.getAttribute('operator')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-composite.js?");

/***/ }),

/***/ "./src/filter-diffuse-lighting.js":
/*!****************************************!*\
  !*** ./src/filter-diffuse-lighting.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterDiffuseLighting)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterDiffuseLighting extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, lightingColor=\"#FFF\", surfaceScale=1, diffuseConstant=1.5){\r\n        super(\"feDiffuseLighting\", {\r\n            lightingColor,\r\n            surfaceScale,\r\n            diffuseConstant\r\n        }, name)\r\n        this.light = null\r\n    }\r\n\r\n    setLight(filter){\r\n        this.light = filter\r\n        this.element.innerHTML = \"\"\r\n        this.addFilter(filter)\r\n    }\r\n\r\n    set lightingColor(v){\r\n        this.element.setAttribute('lightingColor', v)\r\n    }\r\n\r\n    get lightingColor(){\r\n        return this.element.getAttribute('lightingColor')\r\n    }\r\n\r\n    set surfaceScale(v){\r\n        this.element.setAttribute('surfaceScale', v)\r\n    }\r\n\r\n    get surfaceScale(){\r\n        return this.element.getAttribute('surfaceScale')\r\n    }\r\n\r\n    set diffuseConstant(v){\r\n        this.element.setAttribute('diffuseConstant', v)\r\n    }\r\n\r\n    get diffuseConstant(){\r\n        return this.element.getAttribute('diffuseConstant')\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-diffuse-lighting.js?");

/***/ }),

/***/ "./src/filter-displacement-map.js":
/*!****************************************!*\
  !*** ./src/filter-displacement-map.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterDisplacementMap)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterDisplacementMap extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, input, input2, scale=10, xChannelSelector=\"R\", yChannelSelector=\"G\"){\r\n        super(\"feDisplacementMap\", {\r\n            in: input,\r\n            in2: input2,\r\n            scale,\r\n            xChannelSelector, \r\n            yChannelSelector\r\n        }, name)\r\n        this._in2Filter = null\r\n    }\r\n\r\n    set scale(v){\r\n        this.element.setAttribute('scale', v)\r\n    }\r\n\r\n    get scale(){\r\n        return this.element.getAttribute('scale')\r\n    }\r\n\r\n    set xChannelSelector(v){\r\n        this.element.setAttribute('xChannelSelector', v)\r\n    }\r\n\r\n    get xChannelSelector(){\r\n        return this.element.getAttribute('xChannelSelector')\r\n    }\r\n\r\n    set yChannelSelector(v){\r\n        this.element.setAttribute('yChannelSelector', v)\r\n    }\r\n\r\n    get yChannelSelector(){\r\n        return this.element.getAttribute('yChannelSelector')\r\n    }\r\n\r\n    set in2(filter){\r\n        this._in2Filter = filter\r\n        if(!filter) this.element.removeAttribute('in')\r\n        else this.element.setAttribute('in2', filter.name)\r\n    }\r\n    \r\n    get in2(){\r\n        return this._in2Filter\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-displacement-map.js?");

/***/ }),

/***/ "./src/filter-gaussian-blur.js":
/*!*************************************!*\
  !*** ./src/filter-gaussian-blur.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterGaussianBlur)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterGaussianBlur extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, value=10){\r\n        super(\"feGaussianBlur\", {\r\n            stdDeviation: value\r\n        }, name)\r\n    }\r\n    \r\n    set blur(v){\r\n        this.element.setAttribute('stdDeviation', v)\r\n    }\r\n\r\n    get blur(){\r\n        return parseFloat(this.element.getAttribute('stdDeviation'))\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-gaussian-blur.js?");

/***/ }),

/***/ "./src/filter-hue-rotate.js":
/*!**********************************!*\
  !*** ./src/filter-hue-rotate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterHueRotate)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterHueRotate extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, values=0.2){\r\n        super(\"feColorMatrix\", {\r\n            type: \"hueRotate\",\r\n            values\r\n        }, name)\r\n    }\r\n\r\n    set value(v){\r\n        this.element.setAttribute('values', v)\r\n    }\r\n    get value(){\r\n        return this.element.getAttribute('values')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-hue-rotate.js?");

/***/ }),

/***/ "./src/filter-luminance-to-alpha.js":
/*!******************************************!*\
  !*** ./src/filter-luminance-to-alpha.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterLuminanceToAlpha)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterLuminanceToAlpha extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name){\r\n        super(\"feColorMatrix\", {\r\n            type: \"luminanceToAlpha\",\r\n        }, name)\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-luminance-to-alpha.js?");

/***/ }),

/***/ "./src/filter-morphology.js":
/*!**********************************!*\
  !*** ./src/filter-morphology.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterMorphology)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterMorphology extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n{\r\n    constructor(name, operator=\"dilate\", radius=\"1\"){\r\n        super(\"feMorphology\", {\r\n            operator, // dilate, erode\r\n            radius\r\n        })\r\n    }\r\n\r\n    set operator(v){\r\n        this.element.setAttribute('operator', v)\r\n    }\r\n    get operator(){\r\n        return this.element.getAttribute('operator')\r\n    }\r\n\r\n    set radius(v){\r\n        this.element.setAttribute('radius', v)\r\n    }\r\n    get radius(){\r\n        return this.element.getAttribute('radius')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-morphology.js?");

/***/ }),

/***/ "./src/filter-offset.js":
/*!******************************!*\
  !*** ./src/filter-offset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterOffset)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterOffset extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, dx=0, dy=0){\r\n        super(\"feOffset\", {\r\n            dx, dy\r\n        }, name)\r\n    }\r\n\r\n    set x(v){\r\n        this.element.setAttribute(\"dx\", v)\r\n    }\r\n\r\n    get x(){\r\n        return parseFloat(this.element.getAttribute(\"dx\"))\r\n    }\r\n    \r\n    set y(v){\r\n        this.element.setAttribute(\"dy\", v)\r\n    }\r\n\r\n    get y(){\r\n        return parseFloat(this.element.getAttribute(\"dy\"))\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-offset.js?");

/***/ }),

/***/ "./src/filter-point-light.js":
/*!***********************************!*\
  !*** ./src/filter-point-light.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterPointLight)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterPointLight extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x=100,y=100,z=100){\r\n        super(\"fePointLight\", {\r\n            x,y,z\r\n        }, name)\r\n    }\r\n\r\n    set x(v){\r\n        this.element.setAttribute('x', v)\r\n    }\r\n\r\n    get x(){\r\n        return this.element.getAttribute('x')\r\n    }\r\n\r\n    set y(v){\r\n        this.element.setAttribute('y', v)\r\n    }\r\n\r\n    get y(){\r\n        return this.element.getAttribute('y')\r\n    }\r\n\r\n    set z(v){\r\n        this.element.setAttribute('z', v)\r\n    }\r\n\r\n    get z(){\r\n        return this.element.getAttribute('z')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-point-light.js?");

/***/ }),

/***/ "./src/filter-saturate.js":
/*!********************************!*\
  !*** ./src/filter-saturate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterSaturate)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterSaturate extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, values=0.2){\r\n        super(\"feColorMatrix\", {\r\n            type: \"saturate\",\r\n            values\r\n        }, name)\r\n    }\r\n\r\n    set value(v){\r\n        this.element.setAttribute('values', v)\r\n    }\r\n    get value(){\r\n        return this.element.getAttribute('values')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-saturate.js?");

/***/ }),

/***/ "./src/filter-specular-lighting.js":
/*!*****************************************!*\
  !*** ./src/filter-specular-lighting.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterSpecularLighting)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterSpecularLighting extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, lightingColor=\"#FFF\", surfaceScale=1, specularConstant=1.5, specularExponent=4){\r\n        super(\"feSpecularLighting\", {\r\n            lightingColor,\r\n            surfaceScale,\r\n            specularConstant,\r\n            specularExponent\r\n        }, name)\r\n        this.light = null\r\n    }\r\n\r\n    setLight(filter){\r\n        this.light = filter\r\n        this.element.innerHTML = \"\"\r\n        this.addFilter(filter)\r\n    }\r\n\r\n    set lightingColor(v){\r\n        this.element.setAttribute('lightingColor', v)\r\n    }\r\n\r\n    get lightingColor(){\r\n        return this.element.getAttribute('lightingColor')\r\n    }\r\n\r\n    set surfaceScale(v){\r\n        this.element.setAttribute('surfaceScale', v)\r\n    }\r\n\r\n    get surfaceScale(){\r\n        return this.element.getAttribute('surfaceScale')\r\n    }\r\n\r\n    set specularConstant(v){\r\n        this.element.setAttribute('specularConstant', v)\r\n    }\r\n\r\n    get specularConstant(){\r\n        return this.element.getAttribute('specularConstant')\r\n    }\r\n\r\n    set specularExponent(v){\r\n        this.element.setAttribute('specularExponent', v)\r\n    }\r\n\r\n    get specularExponent(){\r\n        return this.element.getAttribute('specularExponent')\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-specular-lighting.js?");

/***/ }),

/***/ "./src/filter-spot-light.js":
/*!**********************************!*\
  !*** ./src/filter-spot-light.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterSpotLight)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterSpotLight extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, x=100,y=100,z=100,limitingConeAngle=5.5){\r\n        super(\"feSpotLight\", {\r\n            x,y,z,limitingConeAngle\r\n        }, name)\r\n    }\r\n\r\n    set x(v){\r\n        this.element.setAttribute('x', v)\r\n    }\r\n\r\n    get x(){\r\n        return this.element.getAttribute('x')\r\n    }\r\n\r\n    set y(v){\r\n        this.element.setAttribute('y', v)\r\n    }\r\n\r\n    get y(){\r\n        return this.element.getAttribute('y')\r\n    }\r\n\r\n    set z(v){\r\n        this.element.setAttribute('z', v)\r\n    }\r\n\r\n    get z(){\r\n        return this.element.getAttribute('z')\r\n    }\r\n\r\n    set limitingConeAngle(v){\r\n        this.element.setAttribute('limitingConeAngle', v)\r\n    }\r\n\r\n    get limitingConeAngle(){\r\n        return this.element.getAttribute('limitingConeAngle')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-spot-light.js?");

/***/ }),

/***/ "./src/filter-turbulence.js":
/*!**********************************!*\
  !*** ./src/filter-turbulence.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterTurbulence)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n\r\n\r\nclass FilterTurbulence extends _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, baseFrequency=0.05, numOctaves=2){\r\n        super(\"feTurbulence\", {\r\n            baseFrequency, numOctaves\r\n        }, name)\r\n    }\r\n\r\n    set baseFrequency(v){\r\n        this.element.setAttribute('baseFrequency', v)\r\n    }\r\n\r\n    get baseFrequency(){\r\n        return this.element.getAttribute('baseFrequency')\r\n    }\r\n\r\n    set numOctaves(v){\r\n        this.element.setAttribute('numOctaves', v)\r\n    }\r\n\r\n    get numOctaves(){\r\n        return this.element.getAttribute('numOctaves')\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter-turbulence.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nclass Filter {\r\n    constructor(type=\"feGaussianBlur\", attributes={}, name=null){\r\n        this.name = name || _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUuid(\"filter\")\r\n        this.attributes = attributes\r\n        this.element = this.createSVGElement(type, attributes)\r\n        this.element.setAttribute('result', this.name)\r\n\r\n        this._inFilter = null\r\n    }\r\n\r\n    set in(filter){\r\n        this._inFilter = filter\r\n        if(!filter) this.element.removeAttribute('in')\r\n        else this.element.setAttribute('in', filter.name)\r\n    }\r\n    \r\n    get in(){\r\n        return this._inFilter\r\n    }\r\n\r\n    addFilter(filter){\r\n        this.element.appendChild(filter.element)\r\n    }\r\n\r\n    createSVGElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElementNS(\"http://www.w3.org/2000/svg\", tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blob)\n/* harmony export */ });\n/* harmony import */ var _example_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example/builder */ \"./src/example/builder.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n    new _example_builder__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelectorAll('.examples > img')[1])\r\n    new Blob(document.querySelector('figure'))\r\n    //let svgFilter = new SvgFilter(\"testFilter\")\r\n\r\n    /*let gaussianBlur = new FilterGaussianBlur(10)\r\n    gaussianBlur.setIn(\"SourceGraphic\")\r\n    svgFilter.filters.appendChild(gaussianBlur.element)\r\n    \r\n    let colorMatrix = new FilterColorMatrix([\r\n        1, 0, 0, 0, 0,\r\n        0, 1, 0, 0, 0,\r\n        0, 0, 1, 0, 0,\r\n        0, 0, 0, 19, -10\r\n    ])\r\n    svgFilter.filters.appendChild(colorMatrix.element)\r\n\r\n    let blend = new Filter(\"feBlend\", {\r\n        in: \"SourceGrapphic\",\r\n        in2: colorMatrix.name\r\n    })\r\n    svgFilter.filters.appendChild(blend.element)*/\r\n\r\n\r\n})\r\n\r\nclass Blob {\r\n    constructor(container) {\r\n        this.container = container\r\n        this.build()\r\n\r\n        this.draw()\r\n    }\r\n\r\n    build(){\r\n        this.c = document.createElement('canvas')\r\n        this.container.appendChild(this.c)\r\n        const rect = this.c.getBoundingClientRect()\r\n        this.c.width = rect.width\r\n        this.c.height = rect.height\r\n        this.ctx = this.c.getContext('2d')\r\n\r\n        this.hiddenCanvas = document.createElement('canvas')\r\n        this.hiddenCtx = this.hiddenCanvas.getContext('2d')\r\n        this.hiddenCanvas.width = this.c.width\r\n        this.hiddenCanvas.height = this.c.height\r\n\r\n        let size = 0.5\r\n        this.circles = Array(20).fill({}).map(c => ({\r\n            x: Math.random() * this.c.width,\r\n            y: Math.random() * this.c.height,\r\n            speedX: (Math.random() * 2 - 1) * 0.2,\r\n            speedY: (Math.random() * 2 - 1) * 0.2,\r\n            size: (this.c.width / 5 * Math.random() + this.c.width / 10) * size,\r\n            color: `hsl(${Math.random()*100+120}deg, 70%, 70%)`\r\n        }))\r\n        this.ctx.fillStyle = \"red\"\r\n        this.loop()\r\n    }\r\n\r\n    clear(){\r\n        this.hiddenCtx.clearRect(0, 0, this.c.width, this.c.height)\r\n        this.ctx.clearRect(0, 0, this.c.width, this.c.height)\r\n    }\r\n\r\n    draw(){\r\n        this.clear()\r\n\r\n        this.circles.map(c => {\r\n            if(c.x < 0 || c.x > this.c.width) c.speedX = -c.speedX\r\n            if(c.y < 0 || c.y > this.c.height) c.speedY = -c.speedY\r\n\r\n            c.x += c.speedX\r\n            c.y += c.speedY\r\n            this.drawCircle(c.x,c.y, c.size, c.color)\r\n        })\r\n\r\n        this.ctx.drawImage(this.hiddenCanvas, 0, 0, this.c.width, this.c.height)\r\n    }\r\n\r\n    loop(){\r\n        this.draw()\r\n        requestAnimationFrame(this.loop.bind(this))\r\n    }\r\n\r\n    drawCircle(x, y, radius=50, color=\"red\"){\r\n        this.hiddenCtx.fillStyle = color\r\n        this.hiddenCtx.beginPath()\r\n        this.hiddenCtx.arc(x, y, radius, 0, 2*Math.PI)\r\n        this.hiddenCtx.fill()\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/index.js?");

/***/ }),

/***/ "./src/svg-filter.js":
/*!***************************!*\
  !*** ./src/svg-filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SvgFilter)\n/* harmony export */ });\nclass SvgFilter {\r\n    constructor(name=\"customSvgFilter\"){\r\n        this.build()\r\n        this.name = name\r\n    }\r\n\r\n    set name(value){\r\n        this.filters.setAttribute('id', value)\r\n    }\r\n    get name(){\r\n        return this.filters.getAttribute('id')\r\n    }\r\n\r\n    build(){\r\n        this.svg = this.createSVGElement(\"svg\")\r\n        this.defs = this.createSVGElement(\"defs\", {}, this.svg)\r\n        this.filters = this.createSVGElement(\"filter\", {}, this.defs)\r\n        document.body.appendChild(this.svg)\r\n    }\r\n\r\n    createSVGElement(tagName, attributes={}, parent=null){\r\n        let element = document.createElementNS(\"http://www.w3.org/2000/svg\", tagName)\r\n        for(let key in attributes) element.setAttribute(key, attributes[key])\r\n        if(parent) parent.appendChild(element)\r\n        return element\r\n    }\r\n\r\n    setFilters(filters=[]){\r\n        this.filters.innerHTML = \"\"\r\n        filters.map(filter => this.addFilter(filter))\r\n    }\r\n    addFilter(filter){\r\n        this.filters.appendChild(filter.element)\r\n    }\r\n\r\n    addFilterClone(filter){\r\n        this.filters.appendChild(filter.element.cloneNode(true))\r\n    }\r\n    addFilterClones(filters){\r\n        filters.map(filter => this.addFilterClone(filter))\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/svg-filter.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utils)\n/* harmony export */ });\nlet ids = {}\r\nclass Utils {\r\n    static resetUuids(){\r\n        ids = {}\r\n    }\r\n    static getUuid(string=\"element\"){\r\n        string = string + \"\"\r\n        if(!ids[string]) ids[string] = 0\r\n        ids[string]++\r\n        return string+ids[string]\r\n    }\r\n}\n\n//# sourceURL=webpack://svg-filter/./src/utils.js?");

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