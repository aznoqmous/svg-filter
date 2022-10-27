import Filter from "./filter"

export default class FilterComposite extends Filter {
    constructor(name, operator="over", input=null, input2=null){
        super("feComposite", {
            operator, // over, in, out, atop, xor, arithmetic, lighter
            in: input,
            in2: input2,
            k1: 0,
            k2: 1,
            k3: 1,
            k4: 0
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

    set operator(v){
        this.element.setAttribute('operator', v)
    }

    get operator(){
        return this.element.getAttribute('operator')
    }
}