import Filter from "./filter"

export default class FilterSpotLight extends Filter {
    constructor(name, x=100,y=100,z=100,limitingConeAngle=5.5){
        super("feSpotLight", {
            x,y,z,limitingConeAngle
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

    set limitingConeAngle(v){
        this.element.setAttribute('limitingConeAngle', v)
    }

    get limitingConeAngle(){
        return this.element.getAttribute('limitingConeAngle')
    }
}