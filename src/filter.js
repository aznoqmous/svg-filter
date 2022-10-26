import Utils from "./utils"

export default class Filter {
    constructor(type="feGaussianBlur", attributes={}){
        this.name = Utils.getUuid("filter")
        this.element = this.createSVGElement(type, attributes)
        this.element.setAttribute('result', this.name)

        this._inFilter = null
    }

    set in(filter){
        this._inFilter = filter
        this.element.setAttribute('in', filter.name)
    }
    
    get in(){
        return this._inFilter
    }

    createSVGElement(tagName, attributes={}, parent=null){
        let element = document.createElementNS("http://www.w3.org/2000/svg", tagName)
        for(let key in attributes) element.setAttribute(key, attributes[key])
        if(parent) parent.appendChild(element)
        return element
    }
}