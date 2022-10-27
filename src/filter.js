import Utils from "./utils"

export default class Filter {
    constructor(type="feGaussianBlur", attributes={}, name=null){
        this.name = name || Utils.getUuid("filter")
        this.attributes = attributes
        this.element = this.createSVGElement(type, attributes)
        this.element.setAttribute('result', this.name)

        this._inFilter = null
    }

    set in(filter){
        this._inFilter = filter
        if(!filter) this.element.removeAttribute('in')
        else this.element.setAttribute('in', filter.name)
    }
    
    get in(){
        return this._inFilter
    }

    addFilter(filter){
        this.element.appendChild(filter.element)
    }

    createSVGElement(tagName, attributes={}, parent=null){
        let element = document.createElementNS("http://www.w3.org/2000/svg", tagName)
        for(let key in attributes) element.setAttribute(key, attributes[key])
        if(parent) parent.appendChild(element)
        return element
    }
}