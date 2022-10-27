import Filter from "./filter";

export default class FilterDisplacementMap extends Filter {
    constructor(name, input, input2, scale=10, xChannelSelector="R", yChannelSelector="G"){
        super("feDisplacementMap", {
            in: input,
            in2: input2,
            scale,
            xChannelSelector, 
            yChannelSelector
        }, name)
        this._in2Filter = null
    }

    set scale(v){
        this.element.setAttribute('scale', v)
    }

    get scale(){
        return this.element.getAttribute('scale')
    }

    set xChannelSelector(v){
        this.element.setAttribute('xChannelSelector', v)
    }

    get xChannelSelector(){
        return this.element.getAttribute('xChannelSelector')
    }

    set yChannelSelector(v){
        this.element.setAttribute('yChannelSelector', v)
    }

    get yChannelSelector(){
        return this.element.getAttribute('yChannelSelector')
    }

    set in2(filter){
        this._in2Filter = filter
        if(!filter) this.element.removeAttribute('in')
        else this.element.setAttribute('in2', filter.name)
    }
    
    get in2(){
        return this._in2Filter
    }
}