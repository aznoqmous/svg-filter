import Filter from "./filter";

export default class FilterMorphology extends Filter
{
    constructor(name, operator="dilate", radius="1"){
        super("feMorphology", {
            operator, // dilate, erode
            radius
        })
    }

    set operator(v){
        this.element.setAttribute('operator', v)
    }
    get operator(){
        return this.element.getAttribute('operator')
    }

    set radius(v){
        this.element.setAttribute('radius', v)
    }
    get radius(){
        return this.element.getAttribute('radius')
    }
}