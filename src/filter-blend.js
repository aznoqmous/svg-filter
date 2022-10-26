import Filter from "./filter";

export default class FilterBlend extends Filter {
    constructor(input, input2){
        super("feBlend", {
            in: input,
            in2: input2
        })
        this._in2Filter = null
    }

    set in2(filter){
        this._in2Filter = filter
        this.element.setAttribute('in2', filter.name)
    }
    
    get in2(){
        return this._in2Filter
    }
}