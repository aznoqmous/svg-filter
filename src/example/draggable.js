import Builder from "./builder";
import Vector2 from "./Vector2";

export default class Draggable {
    constructor(element, opts={}){
        this.opts = Object.assign({
            parentBounds: false,
            gridSize: 0,
            auto: true
        }, opts)

        this.isActive = this.opts.auto

        this.element = element
        this.element.Draggable = this
        this.startPosition = new Vector2()
        this.currentOffset = new Vector2()
        this.mousePosition = new Vector2()
        this.bind()
    }

    bind(){
        this.element.addEventListener('mousedown', this.handleMouseDown.bind(this))
        window.addEventListener('mousemove', this.handleMouseMove.bind(this))
        window.addEventListener('mouseup', this.handleMouseUp.bind(this))
    }

    handleMouseDown(e){
        if(!this.isActive) return;
        if(e.target != this.element && (
            ['input','select','textarea'].includes(e.target.tagName.toLowerCase())
            || e.target.Draggable
        )) return;
        e.preventDefault()
        if(this.isDragging) return;
        this.startDrag(new Vector2(e.pageX, e.pageY))
    }

    handleMouseUp(){
        this.endDrag()
    }

    handleMouseMove(e){
        if(!this.isDragging) return;
        
        this.mousePosition = new Vector2(e.pageX, e.pageY)
        this.currentOffset = this.mousePosition.clone().substract(this.startPosition)
        
        this.setPosition(this.currentOffset)

        this.element.dispatchEvent(new Event('drag'))
    }

    update(){
        if(this.opts.parentBounds) this.updateBounds()
        this.setPosition(this.currentOffset)
    }

    setPosition(position){
        this.currentOffset = position
        if(this.opts.parentBounds && this.bounds) this.applyBounds(this.currentOffset)
        if(this.opts.gridSize) this.applyGridSize(this.currentOffset)
        this.applyCurrentOffset()
    }

    startDrag(position, dispatch=true){
        this.mousePosition = position
        this.startPosition = position.clone()
        this.startPosition.substract(this.currentOffset)
        this.isDragging = !dispatch
        if(this.isDragging) return;
        if(this.opts.parentBounds) this.updateBounds()
        this.isDragging = true
        this.element.style.zIndex = 10
        this.element.dispatchEvent(new Event('dragstart'))
    }
    endDrag(){
        if(!this.isDragging) return;
        this.isDragging = false
        this.element.style.zIndex = null
        this.element.dispatchEvent(new Event('dragend'))
    }

    updateBounds(){
        if(!this.element.parentElement) return;
        let offset = this.currentOffset
        
        this.resetPosition()
        let bounds = this.element.getBoundingClientRect()
        this.currentOffset = offset
        this.applyCurrentOffset()

        let parentBounds = this.element.parentElement.getBoundingClientRect()
        this.bounds = {
            min: {
                x: parentBounds.left - bounds.left, 
                y: parentBounds.top - bounds.top,
            }
        }
        this.bounds.max = {
            x: parentBounds.width - bounds.width + this.bounds.min.x,
            y: parentBounds.height - bounds.height + this.bounds.min.y,
        }
    }

    applyBounds(vector){
        vector.x = Math.max(vector.x, this.bounds.min.x)
        vector.y = Math.max(vector.y, this.bounds.min.y)
        vector.x = Math.min(vector.x, this.bounds.max.x)
        vector.y = Math.min(vector.y, this.bounds.max.y)
        return vector
    }

    applyGridSize(vector){
        vector.x = Math.floor(vector.x/this.opts.gridSize)*this.opts.gridSize
        vector.y = Math.floor(vector.y/this.opts.gridSize)*this.opts.gridSize
        return vector
    }

    resetPosition(){
        this.currentOffset = new Vector2()
        this.applyCurrentOffset()
    }

     applyCurrentOffset(){
        this.element.style.transform = 
        `translate(${this.currentOffset.x}px, ${this.currentOffset.y}px)`
    }
}