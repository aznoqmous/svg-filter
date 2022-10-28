import Filter from "./filter";

export default class FilterOffset extends Filter {
    constructor(name, dx=10, dy=10){
        super("feOffset", {
            dx, dy
        }, name)
    }

    set x(v){
        this.element.setAttribute("dx", v)
    }

    get x(){
        return parseFloat(this.element.getAttribute("dx"))
    }
    
    set y(v){
        this.element.setAttribute("dy", v)
    }

    get y(){
        return parseFloat(this.element.getAttribute("dy"))
    }
}