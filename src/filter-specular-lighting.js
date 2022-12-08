import Filter from "./filter"

export default class FilterSpecularLighting extends Filter {
    constructor(name, 
        lightingColor="#FFF", 
        surfaceScale=5, 
        specularConstant=0.75, 
        specularExponent=20
    ){
        super("feSpecularLighting", {
            lightingColor,
            surfaceScale,
            specularConstant,
            specularExponent
        }, name)
        this.light = null
    }

    setLight(filter){
        this.light = filter
        this.element.innerHTML = ""
        this.addFilter(filter)
    }

    set lightingColor(v){
        this.element.setAttribute('lightingColor', v)
    }

    get lightingColor(){
        return this.element.getAttribute('lightingColor')
    }

    set surfaceScale(v){
        this.element.setAttribute('surfaceScale', v)
    }

    get surfaceScale(){
        return this.element.getAttribute('surfaceScale')
    }

    set specularConstant(v){
        this.element.setAttribute('specularConstant', v)
    }

    get specularConstant(){
        return this.element.getAttribute('specularConstant')
    }

    set specularExponent(v){
        this.element.setAttribute('specularExponent', v)
    }

    get specularExponent(){
        return this.element.getAttribute('specularExponent')
    }


}