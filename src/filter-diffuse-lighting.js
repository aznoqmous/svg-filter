import Filter from "./filter"

export default class FilterDiffuseLighting extends Filter {
    constructor(name, lightingColor="#FFF", surfaceScale=1, diffuseConstant=1.5){
        super("feDiffuseLighting", {
            lightingColor,
            surfaceScale,
            diffuseConstant
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

    set diffuseConstant(v){
        this.element.setAttribute('diffuseConstant', v)
    }

    get diffuseConstant(){
        return this.element.getAttribute('diffuseConstant')
    }

}