import Filter from "./filter";

export default class FilterBlend extends Filter {
    constructor(name, input, input2){
        super("feBlend", {
            in: input,
            in2: input2
        }, name)
        this._in2Filter = null
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