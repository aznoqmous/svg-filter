import Filter from "./filter";

export default class FilterColorMatrix extends Filter {
    constructor(name, values=[]){
        super("feColorMatrix", {
            type: "matrix",
            values: values.join(' ')
        }, name)
    }

    set values(v){
        this.element.setAttribute('values', v.join(' '))
    }
    get values(){
        return this.element.getAttribute('values').split(' ')
    }
}