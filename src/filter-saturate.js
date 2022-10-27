import Filter from "./filter";

export default class FilterSaturate extends Filter {
    constructor(name, values=0.2){
        super("feColorMatrix", {
            type: "saturate",
            values
        }, name)
    }

    set value(v){
        this.element.setAttribute('values', v)
    }
    get value(){
        return this.element.getAttribute('values')
    }
}