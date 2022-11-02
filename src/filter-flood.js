import Filter from "./filter";

export default class FilterFlood extends Filter {
    constructor(name, floodColor="red", floodOpacity=1){
        super("feFlood", {
            floodColor,
            floodOpacity
        }, name)
    }

    set floodColor(v){
        this.element.setAttribute('flood-color', v)
    }
    get floodColor(){
        return this.element.getAttribute('flood-color')
    }
    set floodOpacity(v){
        this.element.setAttribute('flood-opacity', v)
    }
    get floodOpacity(){
        return this.element.getAttribute('flood-opacity')
    }
}