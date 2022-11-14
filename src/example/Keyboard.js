export default class Keyboard {
    
    static bind(){
        this.keys = {}
        window.addEventListener('keydown', (e)=> this.keys[e.key] = true)
        window.addEventListener('keyup', (e)=> this.keys[e.key] = false)
    }
    static isDown(key){
        return !this.isUp(key)
    }
    static isUp(key){
        return !this.keys[key]
    }
}