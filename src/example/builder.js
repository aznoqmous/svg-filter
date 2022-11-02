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
import Mouse from "./Mouse"
import ResultBuilder from "./result-builder"
import Selectable from "./Selectable"
import SourceGraphicBuilder from "./source-graphic-builder"
import Vector2 from "./Vector2"

export default class Builder {
    constructor(testElement){
        this.constructor._instance = this
        this.testName = "testFilter"
        this.testElement = testElement
        this.filterBuilderTypes = [
            FilterGaussianBlurBuilder,
            FilterOffsetBuilder,
            
            /* Blend */
            FilterCompositeBuilder,
            FilterBlendBuilder,

            /* Lighting */
            //FilterSpecularLightingBuilder,
            //FilterDiffuseLightingBuilder,

            FilterTurbulenceBuilder,
            FilterDisplacementMapBuilder,

            FilterColorMatrixBuilder,
            FilterSaturateBuilder,
            FilterHueRotateBuilder,
            FilterLuminanceToAlphaBuilder,
            
            /* Dilate / Erode */
            FilterMorphologyBuilder
        ]
        this.filterBuilderLabels = this.filterBuilderTypes.map(c => (new c()).label)
        this.filterBuilders = []
        this.build()
        this.bind()
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
        this.selectable = new Selectable(this.filtersContainer, {
            selectBox: {
                size: "3px",
                color: "#aaa",
                style: "dashed",
                radius: "3px"
            }
        })
        this.addButton = this.container.querySelector('.add')
        this.resultContainer = document.querySelector('.resultHTML')

        this.sourceGraphicBuilder = new SourceGraphicBuilder()
        this.sourceGraphicBuilder.build()
        this.resultBuilder = new ResultBuilder()
        this.resultBuilder.build()

        this.buildFilterSelect()
        this.hideFilterSelect()
    }

    bind(){
        window.addEventListener('keydown', (e)=>{
            if(e.key == "Delete" || e.key == "BackSpace"){
                if(this.selectable.selectedElements.length){
                    this.selectable.selectedElements.map(e => {
                        e.filterBuilder.delete()
                    })
                }
            }
            if(e.key == " "){
                e.preventDefault()
                this.showFilterSelect()
            }
        })
        
        window.addEventListener('click', ()=>{
            this.hideFilterSelect()
        })
        this.svgNameInput.addEventListener('input', ()=>{
            this.updateResult()
        })
        this.addButton.addEventListener('click', (e)=> {
            e.preventDefault()
            this.addFilterBuilder()
        })
    }

    buildFilterSelect(){
        this.filterSelect = this.createElement('ul', {class:"filter-select"}, this.container)
        this.filterBuilderLabels.map((label, i)=> {
            let filter = this.createElement("li", {"data-key": i}, this.filterSelect)
            filter.innerHTML = label
            filter.addEventListener('click', ()=>{
                console.log(label)
                this.addFilterBuilder(Mouse.position, this.filterBuilderTypes[i])
            })
        })
    }
    showFilterSelect(){
        let mousePosition = Mouse.position;
        this.filterSelect.style.left = mousePosition.x+"px"
        this.filterSelect.style.top = mousePosition.y+"px"
        this.filterSelect.style.display = null
    }
    hideFilterSelect(){
        this.filterSelect.style.display = "none"
    }

    
    removeFilterBuilder(filterBuilder){
        this.filterBuilders.splice(this.filterBuilders.indexOf(filterBuilder), 1)
    }

    addFilterBuilder(position=null, filterBuilderType=null){
        if(!position) position = new Vector2()
        if(!filterBuilderType) filterBuilderType = this.filterBuilderTypes[0]
        let filterBuilder = new FilterBuilder()
        filterBuilder.loadBuilder(filterBuilderType)
        filterBuilder.build()
        this.filterBuilders.push(filterBuilder)
        this.filtersContainer.appendChild(filterBuilder.element)
        
        this.filterBuilders.map(fb => fb.updateFilterSelectors())
        this.update()
        this.reorderBuilders()
        
        filterBuilder.GraphBox.Draggable.setPosition(position)
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
        let tree = this.treeWalk(this.resultBuilder)
        this.filterBuilders = tree.reverse()
        this.update()
    }

    treeWalk(current, currentTree=[], level=0){
        let inputs = current.GraphBox?.inputs
        if(!inputs && !inputs.length) return currentTree
        let fbs = inputs.map(i => i.Link?.output?.GraphBox?.element?.filterBuilder).filter(i => i)
        fbs.map(fb => {
            if(fb.constructor == SourceGraphicBuilder) return;
            fb.level = level
            currentTree.push(fb)
            return this.treeWalk(fb, currentTree, level+1)
        })
        return currentTree
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