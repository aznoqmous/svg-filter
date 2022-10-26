import Filter from "./filter";

export default class FilterOffset extends Filter {
    constructor(dx=0, dy=0){
        super("feOffset", {
            dx, dy
        })
    }

    set x(v){
        this.element.setAttribute("dx", v)
    }

    get x(){
        return this.element.getAttribute("dx")
    }
    
    set y(v){
        this.element.setAttribute("dy", v)
    }

    get y(){
        return this.element.getAttribute("dy")
    }
}