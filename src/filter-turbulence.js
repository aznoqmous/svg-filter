import Filter from "./filter";

export default class FilterTurbulence extends Filter {
    constructor(name, baseFrequency=0.05, numOctaves=2){
        super("feTurbulence", {
            baseFrequency, numOctaves
        }, name)
    }

    set baseFrequency(v){
        this.element.setAttribute('baseFrequency', v)
    }

    get baseFrequency(){
        return this.element.getAttribute('baseFrequency')
    }

    set numOctaves(v){
        this.element.setAttribute('numOctaves', v)
    }

    get numOctaves(){
        return this.element.getAttribute('numOctaves')
    }
}