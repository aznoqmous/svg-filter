import Filter from "./filter";

export default class FilterHueRotate extends Filter {
    constructor(name, values=90){
        super("feColorMatrix", {
            type: "hueRotate",
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