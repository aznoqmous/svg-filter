import Draggable from "../Draggable"
import Template from "../templates/Template"

export default class Popup {

    static strTemplate = "popup"

    constructor(){
        Popup.registerInstance(this)
        
        this.template = new Template(this.constructor.strTemplate)
        this.bind()
    }

    bind(){
        this.template.element.querySelector('.header i').addEventListener('click', ()=>{
            this.close()
        })
    }

    open(){
        Popup.closeAllPopups()
        if(!this.template.parentElement) document.body.appendChild(this.template.element)
        this.template.element.classList.add('active')
    }
    close(){
        this.template.element.classList.remove('active')
        this.template.element.remove()
    }

    static get activePopup(){
        let activePopups = this.instances.filter(popup => popup.template.element.classList.contains('active'))
        return activePopups.length ? activePopups[0] : null
    }

    static registerInstance(popup){
        if(!this.instances) this.instances = []
        this.instances.push(popup)
    }
    static closeAllPopups(){
        this.instances.map(i => i.close())
    }
    
}