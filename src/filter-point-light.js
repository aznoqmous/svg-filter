import Filter from "./filter";

export default class FilterPointLight extends Filter {
    constructor(name, x=100,y=100,z=100){
        super("fePointLight", {
            x,y,z
        }, name)
    }

    set x(v){
        this.element.setAttribute('x', v)
    }

    get x(){
        return this.element.getAttribute('x')
    }

    set y(v){
        this.element.setAttribute('y', v)
    }

    get y(){
        return this.element.getAttribute('y')
    }

    set z(v){
        this.element.setAttribute('z', v)
    }

    get z(){
        return this.element.getAttribute('z')
    }
}