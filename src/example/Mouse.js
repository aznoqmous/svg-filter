import Vector2 from "./Vector2"

export default class Mouse {
    static bind(){
        window.addEventListener('mousemove', (e)=>{
            this._position = new Vector2(e.pageX, e.pageY)
        })
    }

    static get position(){
        return this._position.clone()
    }
}