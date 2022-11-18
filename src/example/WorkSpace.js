import Builder from "./builder"
import Popup from "./controllers/Popup"
import GraphBox from "./GraphBox"
import Keyboard from "./Keyboard"
import Mouse from "./Mouse"
import Screen from "./Screen"
import Selectable from "./Selectable"
import Vector2 from "./Vector2"

export default class WorkSpace {
    constructor(container){
        this.constructor._instance = this

        this.container = container
        this.selectable = new Selectable(this.container, {
            selectBox: {
                size: "3px",
                color: "#aaa",
                style: "dashed",
                radius: "3px"
            },
            selector: ".filter"
        })
        this.zoom = 1
        this.effectiveZoom = 1
        this.offset = new Vector2()
        this.bind()
    }

    bind(){
        window.addEventListener('wheel', (e)=>{
            if(Popup.activePopup) return;
            if(e.deltaY > 0) this.zoomIn()
            else this.zoomOut()
        })

        window.addEventListener('keydown', (e)=>{
            if(Popup.activePopup) return;
            if(e.key == "Delete" || e.key == "Backspace"){
                if(this.selectable.selectedElements.length){
                    this.selectable.selectedElements.map(e => {
                        e.filterBuilder.delete()
                    })
                }
            }
            if(Keyboard.isDown("Control")){
                if(e.key == "c") this.copy()
                if(e.key == "v") this.paste()
            }
            
        })
        Keyboard.bindKey(' ', 
            ()=>{
                this.container.style.cursor = "grab"
            },
            ()=>{
                this.container.style.cursor = null
            }
        )
        this.container.addEventListener('mousedown', this.handleMouseDown.bind(this))
        this.container.addEventListener('mousemove', this.handleMouseMove.bind(this))
        this.container.addEventListener('mouseup', this.handleMouseUp.bind(this))
    }

    getEffectiveZoom(){
        return Math.pow(1.1, this.zoom-1)
    }
    applyTransform(){
        Builder.Instance.filtersContainer.style.transform = `scale(${this.effectiveZoom}) translate(${this.offset.x}px, ${this.offset.y}px)`
        GraphBox.instances.map(gb => gb.update())
    }

    zoomIn(){
        this.zoom++
        this.moveTowardMouse()
        this.effectiveZoom = this.getEffectiveZoom()
        this.moveTowardMouse()
        this.applyTransform()
    }

    zoomOut(){
        this.zoom--
        this.moveTowardMouse()
        this.effectiveZoom = this.getEffectiveZoom()
        this.moveTowardMouse()
        this.applyTransform()
    }

    moveTowardMouse(pow=1/20){
        let dist = Mouse.position
            .substract(Screen.size.divideBy(2))
            .divideBy(this.effectiveZoom)
        this.offset.substract(dist.multiplyBy(pow))
    }

    handleMouseDown(){
        if(Popup.activePopup) return;
        if(Keyboard.isUp(' ')) return;
        this.selectable.endDrag()
        this.selectable.isActive = false
        this.startDragPosition = Mouse.position.divideBy(this.effectiveZoom).substract(this.offset)
        this.isDragging = true
    }
    handleMouseMove(){
        if(Popup.activePopup) return;
        if(!this.isDragging) return;
        this.offset = Mouse.position.divideBy(this.effectiveZoom).substract(this.startDragPosition)
        this.applyTransform()
    }
    handleMouseUp(){
        if(Popup.activePopup) return;
        this.endDrag()
    }
    endDrag(){
        this.isDragging = false
        this.selectable.isActive = true
    }

    copy(){
        this.clipBoard = this.selectable.selectedElements.filter(e => e.tagName == "FORM")
    }
    paste(){
        if(!this.clipBoard || !this.clipBoard.length) return;
        let refPosition = this.clipBoard[0].Draggable.currentOffset
        console.log(refPosition)
        this.clipBoard.map(c => {
            let newPosition = c.Draggable.currentOffset.clone().substract(refPosition)
            let clone = Builder.Instance.dupplicateFilterBuilder(c.filterBuilder, Mouse.position)
            clone.GraphBox.Draggable.setPosition(newPosition.add(Mouse.position))
            c.filterBuilder.cloned = clone
        })
        this.clipBoard.map(c => {
            let inputs = c.filterBuilder.getInputBuilders()
            inputs.map(i => {
                if(i.cloned) i.cloned.connectTo(c.filterBuilder.cloned)
            })
        })
        this.selectable.unselectAll()
        this.clipBoard.map(c => {
            this.selectable.select(c.filterBuilder.cloned.element)
            c.filterBuilder.cloned = null
        })
    }

    static get Instance(){
        if(!this._instance) this._instance = new this()
        return this._instance
    }
}