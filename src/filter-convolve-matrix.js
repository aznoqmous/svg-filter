import Filter from "./filter";

export default class FilterConvolveMatrix extends Filter {
    constructor(name, values=[]){
        super("feConvolveMatrix", {
            kernelMatrix: values.join(' ')
        }, name)
    }

    set kernelMatrix(v){
        this.element.setAttribute('kernelMatrix', v.join(' '))
    }
    get kernelMatrix(){
        return this.element.getAttribute('kernelMatrix').split(' ')
    }
}