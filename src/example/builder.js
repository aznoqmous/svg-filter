import SvgFilter from "../svg-filter"
import FilterBlendBuilder from "./filter-blend-builder"
import FilterBuilder from "./filter-builder"
import FilterColorMatrixBuilder from "./filter-color-matrix-builder"
import FilterCompositeBuilder from "./filter-composite-builder"
import FilterDiffuseLightingBuilder from "./filter-diffuse-lighting-builder"
import FilterDisplacementMapBuilder from "./filter-displacement-map-builder"
import FilterGaussianBlurBuilder from "./filter-gaussian-blur-builder"
import FilterHueRotateBuilder from "./filter-hue-rotate-builder"
import FilterLuminanceToAlphaBuilder from "./filter-luminance-to-alpha-builder"
import FilterMorphologyBuilder from "./filter-morphology-builder"
import FilterOffsetBuilder from "./filter-offset-builder"
import FilterSaturateBuilder from "./filter-saturate-builder"
import FilterSpecularLightingBuilder from "./filter-specular-lighting-builder"
import FilterTurbulenceBuilder from "./filter-turbulence-builder"

export default class Builder {
    constructor(testElement){
        this.constructor._instance = this
        this.testName = "testFilter"
        this.testElement = testElement
        this.build()
        this.bind()
        this.filterBuilderTypes = [
            FilterGaussianBlurBuilder,
            FilterColorMatrixBuilder,
            FilterOffsetBuilder,
            FilterSpecularLightingBuilder,
            FilterDiffuseLightingBuilder,
            FilterCompositeBuilder,
            FilterBlendBuilder,
            FilterTurbulenceBuilder,
            FilterDisplacementMapBuilder,
            FilterSaturateBuilder,
            FilterHueRotateBuilder,
            FilterLuminanceToAlphaBuilder,
            FilterMorphologyBuilder
        ]
        this.filterBuilderLabels = this.filterBuilderTypes.map(c => (new c()).label)
        this.filterBuilders = []
    }

    get filters(){
        return this.filterBuilders.map(fb => fb.filter)
    }

    build(){
        this.svgFilter = new SvgFilter("testFilter")
        
        this.container = document.querySelector('.container')
        this.svgNameInput = this.container.querySelector('[name="name"')
        this.template = this.container.querySelector('template')
        this.filtersContainer = this.container.querySelector('.filters')
        this.addButton = this.container.querySelector('.add')
        this.resultContainer = document.querySelector('.resultHTML')
    }
    bind(){
        this.svgNameInput.addEventListener('input', ()=>{
            this.updateResult()
        })
        this.addButton.addEventListener('click', (e)=> {
            e.preventDefault()
            this.addFilterBuilder()
        })
    }


    removeFilterBuilder(filterBuilder){
        this.filterBuilders.splice(this.filterBuilders.indexOf(filterBuilder), 1)
    }

    addFilterBuilder(){
        let filterBuilder = new FilterBuilder()
        filterBuilder.loadBuilder(this.filterBuilderTypes[0])
        filterBuilder.build()
        this.filterBuilders.push(filterBuilder)
        this.filtersContainer.appendChild(filterBuilder.element)

        this.filterBuilders.map(fb => fb.updateFilterSelectors())
        this.update()
    }

    getFilterBuilderByLabel(label){
        return this.filterBuilderTypes[this.filterBuilderLabels.indexOf(label)]
    }

    getFilterByName(filterName){
        let match = this.filters.filter(f => f.name == filterName)
        return match.length ? match[0] : null
    }

    update(){
        this.filterBuilders.map(fb => fb.update())

        this.svgFilter.setFilters(this.filters)

        this.updateResult()
    }

    updateResult(){
        this.svgFilter.name = this.svgNameInput.value.replace(/[^A-z0-9_]/g, "")

        let indent = 0
        let fill = "    "
        let html = this.svgFilter.svg.outerHTML.replace(/&/g, "&amp;")
        .replace(/\>\</g, ">_newline_<")
        .split("_newline_")
        .map(line => {
            let add = !line.match(/^\<\//)
            if(!add) indent--
            line = Array(indent).fill(fill).join('') + line
            if(add) indent++
            return line
        })
        .join('\r\n')
        html = html.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        this.resultContainer.innerHTML = html
        this.svgFilter.name = this.testName
    }

    reorderBuilders(){
        this.filterBuilders = [...this.filtersContainer.children].map(element => element.filterBuilder)
        this.update()
    }

    createElement(tagName, attributes={}, parent=null){
        let element = document.createElement(tagName)
        for(let key in attributes) element.setAttribute(key, attributes[key])
        if(parent) parent.appendChild(element)
        return element
    }

    createSelect(objKeyValues, parent=null){
        let select = this.createElement('select', {}, parent)
        Object.keys(objKeyValues).map((key, i) => {
            select.add(new Option(objKeyValues[key], key, !i,!i))
        })
        return select
    }


    static get Instance(){
        if(!this._instance) this._instance = new this()
        return this._instance
    }

}