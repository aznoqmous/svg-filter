import Filter from "./filter"

export default class FilterTile extends Filter {
    constructor(name){
        super("feTile", {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, name)
    }
    
    set x(v){
        if(!v || v == "0") this.element.removeAttribute('x')
        else this.element.setAttribute('x', v)
    }
    get x(){
        return this.element.getAttribute('x')
    }
    set y(v){
        if(!v || v == "0") this.element.removeAttribute('y')
        else this.element.setAttribute('y', v)
    }
    get y(){
        return this.element.getAttribute('y')
    }
    set width(v){
        if(!v || v == "0") this.element.removeAttribute('width')
        else this.element.setAttribute('width', v)
    }
    get width(){
        return this.element.getAttribute('width')
    }
    set height(v){
        if(!v || v == "0") this.element.removeAttribute('height')
        else this.element.setAttribute('height', v)
    }
    get height(){
        return this.element.getAttribute('height')
    }
}