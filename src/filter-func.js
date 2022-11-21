import Filter from "./filter";

export default class FilterFunc extends Filter {
    constructor(name, tagName="feFunc"){
        super(tagName, {
            type: "identity", // table, discrete, linear, gamma
        }, name)
    }

    set type(v){
        this.element.setAttribute('type', v)
    }
    get type(){
        return this.element.getAttribute('type')
    }

    set tableValues(v){
        this.element.setAttribute('tableValues', v)
    }
    get tableValues(){
        return this.element.getAttribute('tableValues')
    }
    
    set slope(v){
        this.element.setAttribute('slope', v)
    }
    get slope(){
        return this.element.getAttribute('slope')
    }

    set intercept(v){
        this.element.setAttribute('intercept', v)
    }
    get intercept(){
        return this.element.getAttribute('intercept')
    }

    set amplitude(v){
        this.element.setAttribute('amplitude', v)
    }
    get amplitude(){
        return this.element.getAttribute('amplitude')
    }

    set exponent(v){
        this.element.setAttribute('exponent', v)
    }
    get exponent(){
        return this.element.getAttribute('exponent')
    }

    set offset(v){
        this.element.setAttribute('offset', v)
    }
    get offset(){
        return this.element.getAttribute('offset')
    }
}