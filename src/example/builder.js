import FilterImage from "../filter-image"
import SvgFilter from "../svg-filter"
import Utils from "../utils"
import PopupLiveTest from "./controllers/PopupLiveTest"
import Draggable from "./Draggable"
import FilterBlendBuilder from "./filter-blend-builder"
import FilterBuilder from "./filter-builder"
import FilterColorMatrixBuilder from "./filter-color-matrix-builder"
import FilterComponentTransferBuilder from "./filter-component-transfer-builder"
import FilterCompositeBuilder from "./filter-composite-builder"
import FilterConvolveMatrixBuilder from "./filter-convolve-matrix-builder"
import FilterDiffuseLightingBuilder from "./filter-diffuse-lighting-builder"
import FilterDisplacementMapBuilder from "./filter-displacement-map-builder"
import FilterFloodBuilder from "./filter-flood-builder"
import FilterGaussianBlurBuilder from "./filter-gaussian-blur-builder"
import FilterHueRotateBuilder from "./filter-hue-rotate-builder"
import FilterImageBuilder from "./filter-image-builder"
import FilterLuminanceToAlphaBuilder from "./filter-luminance-to-alpha-builder"
import FilterMergeBuilder from "./filter-merge-builder"
import FilterMorphologyBuilder from "./filter-morphology-builder"
import FilterOffsetBuilder from "./filter-offset-builder"
import FilterSaturateBuilder from "./filter-saturate-builder"
import FilterSpecularLightingBuilder from "./filter-specular-lighting-builder"
import FilterTileBuilder from "./filter-tile-builder"
import FilterTurbulenceBuilder from "./filter-turbulence-builder"
import GraphBox from "./GraphBox"
import Keyboard from "./Keyboard"
import Mouse from "./Mouse"
import ResultBuilder from "./result-builder"
import Selectable from "./Selectable"
import SourceGraphicBuilder from "./source-graphic-builder"
import Vector2 from "./Vector2"
import WorkSpace from "./WorkSpace"

export default class Builder {
    constructor(testElement){
        this.constructor._instance = this
        this.testName = "testFilter"
        this.testElement = testElement
        this.filterBuilderTypes = [
            FilterGaussianBlurBuilder,
            FilterOffsetBuilder,
            
            /* Matrices */
            FilterConvolveMatrixBuilder,
            FilterDisplacementMapBuilder,
            FilterColorMatrixBuilder,
            
            FilterHueRotateBuilder,
            FilterSaturateBuilder,
            FilterLuminanceToAlphaBuilder,
            
            /* Dilate / Erode */
            FilterMorphologyBuilder,
            
            /* Blend */
            FilterCompositeBuilder,
            FilterBlendBuilder,
            FilterMergeBuilder,
            
            /* Lighting */
            FilterSpecularLightingBuilder,
            FilterDiffuseLightingBuilder,
            
            /* Fills */
            FilterFloodBuilder,
            FilterImageBuilder,
            FilterTurbulenceBuilder,
            FilterTileBuilder,
            FilterComponentTransferBuilder
        ]
        this.filterBuilderLabels = []
        this.filterBuilderFilterClasses = []
        this.filterBuilderIcons = []
        this.filterBuilderTypes.map(c => {
            c = new c()
            this.filterBuilderLabels.push(c.label)
            this.filterBuilderFilterClasses.push(c.class)
            this.filterBuilderIcons.push(c.icon)
        })
        this.filterBuilders = []
        this.activeFilterBuilders = []
        this.build()
        this.bind()
    }

    get activeFilters(){
        return this.activeFilterBuilders.map(fb => fb.filter)
    }
    get filters(){
        return this.filterBuilders.map(fb => fb.filter)
    }

    build(){
        
        this.svgFilter = new SvgFilter("testFilter")
        
        this.container = document.querySelector('.container')
        this.workSpace = new WorkSpace(this.container)
        
        this.svgNameInput = this.container.querySelector('[name="name"]')
        this.template = this.container.querySelector('template')
        this.filtersContainer = this.container.querySelector('.filters')
        this.resultContainer = document.querySelector('.resultHTML')

        this.sourceGraphicBuilder = new SourceGraphicBuilder()
        this.sourceGraphicBuilder.build()
        this.resultBuilder = new ResultBuilder()
        this.resultBuilder.build()
        this.resultBuilder.GraphBox.Draggable.setPosition({x: window.innerWidth - 232, y: 0})

        this.buildFilterSelect()
        this.hideFilterSelect()
    }

    bind(){
        window.addEventListener('click', ()=>{
            this.hideFilterSelect()
        })
        this.container.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
            this.showFilterSelect()
        })
        this.svgNameInput.addEventListener('input', ()=>{
            this.updateResult()
        })
    }

    buildFilterSelect(){
        this.filterSelect = this.createElement('ul', {class:"filter-select"}, this.container)
        new Draggable(this.filterSelect)
        this.filterSelect.search = this.createElement('input', {
            type:"text",
            placeholder: "Search..."
        }, this.filterSelect)
        let filters = []
        this.filterBuilderLabels.map((label, i)=> {
            let filter = this.createElement("li", {"data-key": i}, this.filterSelect)
            filter.innerHTML = `<i class="material-symbols-outlined">${this.filterBuilderIcons[i]}</i><span>${label}</span>`
            filter.addEventListener('click', ()=>{
                this.addFilterBuilder(Mouse.position, this.filterBuilderTypes[i])
            })
            filters.push(filter)
        })
        this.filterSelect.search.addEventListener('keyup', (e)=>{
            if(e.key == "Enter"){
                this.filterSelect.search.value = ""
                this.addFilterBuilder(this.nextPosition, this.filterBuilderTypes[filters.indexOf(selectedFilter)])
                this.hideFilterSelect()
                return
            }
            if(e.key == "Escape"){
                this.filterSelect.search.value = ""
                this.hideFilterSelect()
                return
            }
            if(e.key == "ArrowDown"){
                selectedFilter = filters[filters.indexOf(selectedFilter) + 1]
                updateFilterSelect()
                return;
            }
            if(e.key == "ArrowUp"){
                selectedFilter = filters[filters.indexOf(selectedFilter) - 1]
                updateFilterSelect()
                return;
            }
            let matchingFilters = filters.filter(f => f.innerHTML.toLowerCase().match(this.filterSelect.search.value.toLowerCase()))
            selectedFilter = matchingFilters[0]
            filters.map(f => f.classList.add('hidden'))
            matchingFilters.map(f => f.classList.remove('hidden'))
            updateFilterSelect()
        })

        let selectedFilter = filters[0]
        const updateFilterSelect = ()=>{
            filters.map(f => {
                f.classList.toggle('selected', selectedFilter == f)
            })
        }
        updateFilterSelect()

    }
    showFilterSelect(futureConnection=null){
        let mousePosition = Mouse.position;
        this.filterSelect.style.left = mousePosition.x+"px"
        this.filterSelect.style.top = mousePosition.y+"px"

        this.filterSelect.style.display = null
        this.connectNextFilterBuilderTo = futureConnection
        this.nextPosition = mousePosition
        this.filterSelect.search.focus()
    }
    hideFilterSelect(){
        this.filterSelect.style.display = "none"
    }

    
    removeFilterBuilder(filterBuilder){
        this.filterBuilders.splice(this.filterBuilders.indexOf(filterBuilder), 1)
        this.reorderBuilders()
    }

    addFilterBuilder(position=null, filterBuilderType=null){
        if(!position) position = new Vector2()
        if(!filterBuilderType) filterBuilderType = this.filterBuilderTypes[0]
        let filterBuilder = new FilterBuilder()
        filterBuilder.loadBuilder(filterBuilderType)
        filterBuilder.build()
        this.filterBuilders.push(filterBuilder)
        this.filtersContainer.appendChild(filterBuilder.element)
        filterBuilder.GraphBox.update()
        
        this.filterBuilders.map(fb => fb.updateFilterSelectors())
        this.reorderBuilders()
        this.update()
        filterBuilder.GraphBox.Draggable.setPosition(position)

        if(this.connectNextFilterBuilderTo) {
            this.connectNextFilterBuilderTo.connectTo(filterBuilder)
        }
        return filterBuilder
    }

    dupplicateFilterBuilder(filterBuilder, position=null){
        if(!position) position = new Vector2()

        let clone  = filterBuilder.clone()
        clone.build()
        this.filterBuilders.push(clone)
        this.filtersContainer.appendChild(clone.element)

        clone.GraphBox.Draggable.setPosition(position)
        return clone
    }

    getFilterBuilderByClass(constructor){
        return this.filterBuilderTypes[this.filterBuilderFilterClasses.indexOf(constructor)]
    }

    getFilterBuilderByLabel(label){
        return this.filterBuilderTypes[this.filterBuilderLabels.indexOf(label)]
    }

    getFilterBuilderByName(filterName){
        let source =null;
        if(filterName == "SourceGraphic"){
            this.sourceGraphicBuilder.selectedOutput = this.sourceGraphicBuilder.outputs[0]
            source = this.sourceGraphicBuilder
        }
        if(filterName == "SourceAlpha"){
            this.sourceGraphicBuilder.selectedOutput = this.sourceGraphicBuilder.outputs[1]
            source = this.sourceGraphicBuilder
        }
        if(source) return source;

        let match = this.filterBuilders.filter(f => f.filter.name == filterName)
        return match.length ? match[0] : null
    }
    getFilterByName(filterName){
        let match = this.filters.filter(f => f.name == filterName)
        return match.length ? match[0] : null
    }

    update(){
        this.filterBuilders.map(fb => fb.update())
        this.resultBuilder.updatePreview()
        this.svgFilter.setFilters(this.activeFilters)
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

        PopupLiveTest.Instance.send()
    }

    reorderBuilders(){
        this.activeFilterBuilders = this.treeWalk(this.resultBuilder)
    }
    treeWalk(builder){
        return this.treeWalkStep(builder).sort((a,b)=> a.level < b.level ? 1 : -1)
    }
    treeWalkStep(current, currentTree=[], level=0){
        let inputs = current.GraphBox?.inputs
        if(!inputs && !inputs.length) return currentTree
        let fbs = inputs.map(i => i.Link?.output?.GraphBox?.element?.filterBuilder).filter(i => i)
        fbs.map(fb => {
            if(fb.constructor == SourceGraphicBuilder) return;
            if(currentTree.includes(fb)) {
                if(level > fb.level) fb.level = level
            }
            else {
                fb.level = level
                currentTree.push(fb)
            }
            currentTree = this.treeWalkStep(fb, currentTree, level+1)
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

    setTestElement(element){
        this.testElement = element
        let builders = [this.sourceGraphicBuilder, ...this.filterBuilders]
        builders.map(b => {
            let container = b.previewElement.parentElement
            let style = b.previewElement.getAttribute('style')
            b.previewElement.remove()
            b.previewElement = this.testElement.cloneNode(true)
            b.previewElement.style = style
            container.appendChild(b.previewElement)
        })
        this.resultBuilder.updatePreview()
    }

    reset(){
        while(this.filterBuilders.length) this.filterBuilders[0].delete()
        Utils.resetUuids()
        this.update()
    }

    importFromHTML(html){
        this.reset()
        let shadow = document.createElement('div')
        shadow.innerHTML = html
        let filtersHTML = [...shadow.querySelectorAll('filter > *')]
        filtersHTML.map(html => {
            let filter = this.svgFilter.addFilterFromHTML(html)
            let filterBuilder = this.getFilterBuilderByClass(filter.constructor)
            filterBuilder = this.addFilterBuilder(null, filterBuilder)
            filterBuilder.filter = filter
            filterBuilder.render()
        })
        filtersHTML.map((html, i)=>{
            if(html.tagName == "feMerge") return;
            let fb = this.filterBuilders[i]
            let inputs = Object.fromEntries(html.getAttributeNames().filter(a => a == "in" || a == "in2").map(k => [k, html.getAttribute(k)]))
            Object.keys(inputs).map(k => {
                let name = inputs[k]
                let source =  this.getFilterBuilderByName(name)
                if(source) source.connectTo(fb, k)
            })
        })
        let lastFilter = this.filterBuilders[this.filterBuilders.length-1]
        lastFilter.connectTo(this.resultBuilder)
        this.filterBuilders.map(fb => fb.minimize())
        this.reArrangeBuilders()
        setTimeout(()=> {
            window.scrollTo({
                left: 0,
                top: 0
              })
        })
    }

    reArrangeBuilders(){
        this.reorderBuilders()
        
        let levels = []
        this.activeFilterBuilders.reverse().map(fb => {
            if(fb.GraphBox.inputs.length){
                    let inputs = fb.GraphBox.inputs.filter(i => i.classList.contains('linked')).map(i => i.Link.output.GraphBox.element.filterBuilder)
                    fb.inputBuildersGroup = inputs
            }
            if(!levels[fb.level]) levels.push([])
            levels[fb.level].push(fb)
        })
        
        let parentRect = this.container.getBoundingClientRect()
        let sourceWidth = this.sourceGraphicBuilder.GraphBox.element.getBoundingClientRect().width + 30
        let resultWidth = this.resultBuilder.GraphBox.element.getBoundingClientRect().width + 30
        let usableWidth = parentRect.width - sourceWidth - resultWidth
        
        let filterWidth = 180 + 50
        let filterHeight = 180

        let maxLevel = this.filterBuilders.map(fb => fb.level).max()
        this.sourceGraphicBuilder.GraphBox.Draggable.setPosition(new Vector2(0,0))
        this.activeFilterBuilders.map((fb,i) => {
            fb.GraphBox.Draggable.setPosition(new Vector2(sourceWidth + (maxLevel-fb.level)*filterWidth, 0))
        })
        this.resultBuilder.GraphBox.Draggable.setPosition(new Vector2(sourceWidth + (maxLevel+1)*filterWidth, 0))

        levels.map((fbs,i) => {
            fbs.map((fb, y)=>{
                fb.GraphBox.Draggable.setPosition(new Vector2(fb.GraphBox.Draggable.currentOffset.x, y * filterHeight))
            })
        })

        this.filterBuilders.map(fb => fb.GraphBox.update())
    }

    static get Instance(){
        if(!this._instance) this._instance = new this()
        return this._instance
    }

}