import Filter from "./filter";

export default class FilterColorMatrix extends Filter {
    constructor(values=[]){
        super("feColorMatrix", {
            mode: "matrix",
            values: values.join(' ')
        })
    }

    set values(v){
        this.element.setAttribute('values', v.join(' '))
    }
    get values(){
        return this.element.getAttribute('values').split(' ')
    }
}