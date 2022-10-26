import Filter from "./filter";

export default class FilterGaussianBlur extends Filter {
    constructor(value=10){
        super("feGaussianBlur", {
            stdDeviation: value
        }, true)
    }
    
    set blur(v){
        this.element.setAttribute('stdDeviation', v)
    }

    get blur(){
        return this.element.getAttribute('stdDeviation')
    }
}