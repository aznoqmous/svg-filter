import SvgFilter from "../svg-filter"
import Utils from "../utils"
import FilterBlendBuilder from "./filter-blend-builder"
import FilterColorMatrixBuilder from "./filter-color-matrix-builder"
import FilterGaussianBlurBuilder from "./filter-gaussian-blur-builder"
import FilterOffsetBuilder from "./filter-offset-builder"

export default class Builder {
    constructor(){
        this.constructor._instance = this
        this.filters = []
        this.testName = "testFilter"
        this.build()
        this.bind()
        this.filterTypes = [
            new FilterGaussianBlurBuilder(),
            new FilterColorMatrixBuilder(),
            new FilterOffsetBuilder(),
            new FilterBlendBuilder()
        ]
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
            this.addFilter()
        })
    }

    addFilter(){
        let element = document.createElement('form')
        element.className = "filter"
        element.innerHTML = this.template.innerHTML
        element.typeSelect = element.querySelector('[name="type"]')
        element.settingsElement = element.querySelector('.settings')

        this.filterTypes.map((props,i) => {
            element.typeSelect.add(new Option(props.label, props.label, !i))
        })

        element.typeSelect.addEventListener('change', ()=>{
            this.renderElement(element)
            this.update()
        })

        element.querySelector('.delete').addEventListener('click', ()=>{
            element.remove()
            this.update()
        })

        this.renderElement(element)

        this.filtersContainer.appendChild(element)

        this.update()
    }

    renderElement(element){
        element.settingsElement.innerHTML = ""
        let filterType = this.getFilterTypeByLabel(element.typeSelect.selectedOptions[0].value)
        filterType.render(element.settingsElement)
    }

    getFilterTypeByLabel(label){
        let match = this.filterTypes.filter(f => f.label == label)
        return match.length ? match[0] : null
    }

    getFilterTypeByConstructor(constructorName){
        let match = this.filterTypes.filter(f => f.class.name == constructorName)
        return match.length ? match[0] : null
    }

    getFilterByName(name){
        let match = this.filters.filter(f => f.name == constructorName)
        return match.length ? match[0] : null
    }

    update(){
        Utils.resetUuids()
        this.filters = []
        this.lastFilter = null
        this.svgFilter.filters.innerHTML = ""
        ;[...this.filtersContainer.children].map((element,i) => {
            let filterType = this.getFilterTypeByLabel(element.typeSelect.selectedOptions[0].value)
            let filter = new filterType.class()
            this.filters.push(filter)
        })
        ;[...this.filtersContainer.children].map((element,i) => {
            let filter = this.filters[i]
            let filterType = this.getFilterTypeByConstructor(filter.constructor.name)
            filterType.update(filter, element.settingsElement, i)
            this.svgFilter.filters.appendChild(filter.element)
            this.lastFilter  = filter
        })
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

    createElement(tagName, attributes={}, parent=null){
        let element = document.createElement(tagName)
        for(let key in attributes) element.setAttribute(key, attributes[key])
        if(parent) parent.appendChild(element)
        return element
    }

    static get Instance(){
        if(!this._instance) this._instance = new this()
        return this._instance
    }
}