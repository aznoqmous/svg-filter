import Filter from "./filter"

export default class FilterImage extends Filter {
    constructor(name, href){
        super("feImage", {
            href,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, name)
    }

    set href(v){
        this.element.setAttribute('href', v)
    }
    get href(){
        return this.element.getAttribute('href')
    }
    set x(v){
        this.element.setAttribute('x', v)
    }
    get x(){
        return this.element.getAttribute('x')
    }
    set y(v){
        this.element.setAttribute('y', v)
    }
    get y(){
        return this.element.getAttribute('y')
    }
    set width(v){
        this.element.setAttribute('width', v)
    }
    get width(){
        return this.element.getAttribute('width')
    }
    set height(v){
        this.element.setAttribute('height', v)
    }
    get height(){
        return this.element.getAttribute('height')
    }
}