import Vector2 from "./Vector2";

export default class Screen {
    static get size(){
        return new Vector2(window.innerWidth, window.innerHeight)
    }
}