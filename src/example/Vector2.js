export default class Vector2 {
    constructor(x=0, y=0){
        this.x = x
        this.y = y
    }
    
    clone(){
        return new Vector2(this.x, this.y)
    }

    add(v){
        this.x += v.x
        this.y += v.y
        return this
    }

    substract(v){
        this.x -= v.x
        this.y -= v.y
        return this
    }

    abs(){
        this.x = Math.abs(this.x)
        this.y = Math.abs(this.y)
        return this
    }
}