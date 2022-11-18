import Filter from "./filter";

export default class FilterConvolveMatrix extends Filter {
    constructor(name, values=[]){
        super("feConvolveMatrix", {
            kernelMatrix: values.join(' '),
            order: "3,3"
        }, name)
    }

    get order(){
        return this.element.getAttribute('order')
    }
    set order(v){
        this.element.setAttribute('order', v)
    }

    get columns(){
        return parseInt(this.order.split(',')[0])
    }
    set columns(v){
        this.order = `${v},${this.rows}`
    }

    get rows(){
        return parseInt(this.order.split(',')[1])
    }
    set rows(v){
        this.order = `${this.columns},${v}`
    }

    set kernelMatrix(v){
        this.element.setAttribute('kernelMatrix', v.join(' '))
    }
    get kernelMatrix(){
        return this.element.getAttribute('kernelMatrix').split(' ')
    }
}