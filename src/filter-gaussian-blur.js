import Filter from "./filter";

export default class FilterGaussianBlur extends Filter {
    constructor(name, value=10){
        super("feGaussianBlur", {
            stdDeviation: value
        }, name)
    }
    
    set blur(v){
        this.element.setAttribute('stdDeviation', v)
    }

    get blur(){
        return parseFloat(this.element.getAttribute('stdDeviation'))
    }
}