import Filter from "./filter";

export default class FilterTurbulence extends Filter {
    constructor(name, baseFrequency=0.05, numOctaves=2){
        super("feTurbulence", {
            baseFrequency, 
            numOctaves,
            type: "turbulence",
            seed: 0
        }, name)
    }

    get baseFrequency(){
        return this.element.getAttribute('baseFrequency')
    }
    set baseFrequency(v){
        this.element.setAttribute('baseFrequency', v)
    }
    
    get baseFrequencyX(){
        let splitted = this.baseFrequency.split(',')
        return parseFloat(splitted[0])
    }
    set baseFrequencyX(v){
        this.baseFrequency = `${v},${this.baseFrequencyY}`
    }

    get baseFrequencyY(){
        let splitted = this.baseFrequency.split(',')
        if(splitted.length > 1) return parseFloat(splitted[1])
        return parseFloat(splitted[0])
    }
    set baseFrequencyY(v){
        this.baseFrequency = `${this.baseFrequencyX},${v}`
    }
    
    get numOctaves(){
        return this.element.getAttribute('numOctaves')
    }
    set numOctaves(v){
        this.element.setAttribute('numOctaves', v)
    }
    
    get type(){
        return this.element.getAttribute('type')
    }
    set type(v){
        this.element.setAttribute('type', v)
    }

    get seed(){
        return this.element.getAttribute('seed')
    }
    set seed(v){
        this.element.setAttribute('seed', v)
    }
}