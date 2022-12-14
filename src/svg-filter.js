import FilterBlend from "./filter-blend"
import FilterFunc from "./filter-func"
import { SvgFilterTypes, SvgFilterTypesManager } from "./svg-filter-types"

export default class SvgFilter {
    constructor(name="customSvgFilter"){
        this.build()
        this.name = name
    }

    set name(value){
        this.filters.setAttribute('id', value)
    }
    get name(){
        return this.filters.getAttribute('id')
    }

    build(){
        this.svg = this.createSVGElement("svg")
        this.defs = this.createSVGElement("defs", {}, this.svg)
        this.filters = this.createSVGElement("filter", {}, this.defs)
        document.body.appendChild(this.svg)
    }

    createSVGElement(tagName, attributes={}, parent=null){
        let element = document.createElementNS("http://www.w3.org/2000/svg", tagName)
        for(let key in attributes) element.setAttribute(key, attributes[key])
        if(parent) parent.appendChild(element)
        return element
    }

    setFilters(filters=[]){
        this.filters.innerHTML = ""
        filters.map(filter => this.addFilter(filter))
    }
    addFilter(filter){
        this.filters.appendChild(filter.element)
    }

    addFilterClone(filter){
        this.filters.appendChild(filter.element.cloneNode(true))
    }
    addFilterClones(filters){
        filters.map(filter => this.addFilterClone(filter))
    }

    getFilterClassFromHTML(html){
        let filters = SvgFilterTypesManager.getFiltersByTagName(html.tagName)
        if(!filters.length) filters = SvgFilterTypesManager.getFilterByMatchingName(html.tagName)
        let filtersAttributes = filters.map(f => {
            return {
                f, 
                count: Object.keys(f.attributes).filter(k => html.getAttribute(k) == f.attributes[k]).length
            }
        })
        filtersAttributes = filtersAttributes.sort((a,b)=> a.count < b.count ? 1 : -1)
        return filtersAttributes[0].f
    }

    addFilterFromHTML(html){
        let filter = this.createFilterFromHTML(html)        
        this.addFilter(filter)
        return filter
    }
    
    createFilterFromHTML(html){
        let filter = this.getFilterClassFromHTML(html)
        if(filter.constructor === FilterFunc){
            filter = new FilterFunc(filter.name, html.tagName)
        }
        let attributes = html.getAttributeNames()
        attributes.map(attr => {
            let value = html.getAttribute(attr)
            if(attr == "xlink:href") return filter.element.setAttribute("href", value)
            if(attr == "result") filter.name = value
            if(value) filter.element.setAttribute(attr, value)
        })
        ;[...html.children].map(h => filter.addFilter(this.createFilterFromHTML(h)))
        return filter
    }
}