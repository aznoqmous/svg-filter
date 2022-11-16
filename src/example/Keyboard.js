export default class Keyboard {
    
    static bind(){
        this.keys = {}
        window.addEventListener('keydown', (e)=> this.keys[e.key] = true)
        window.addEventListener('keyup', (e)=> this.keys[e.key] = false)
    }

    static bindKey(key, keydownCallback=null, keyupCallback=null){
        if(keydownCallback) window.addEventListener('keydown', (e)=>{
            if(e.key === key) keydownCallback(e)
        })
        if(keyupCallback) window.addEventListener('keyup', (e)=>{
            if(e.key === key) keyupCallback(e)
        })
    }
    static isDown(key){
        return !this.isUp(key)
    }
    static isUp(key){
        return !this.keys[key]
    }
}