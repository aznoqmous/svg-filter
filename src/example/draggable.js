export default class Draggable{
    constructor(dragElement, draggableElement=null){
        this.dragElement = dragElement
        this.draggableElement = draggableElement || dragElement
        
        this.build()
        this.bind()
    }
    
    get parent(){
        return this.draggableElement.parentElement
    }

    build(){
        this.draggableElement.style.userSelect = "none"
    }

    bind(){
        this.dragElement.addEventListener('mousedown', (e)=>{
            this.startDrag(e)
        })
        window.addEventListener('mouseup', (e)=>{
            this.endDrag(e)
        })
        window.addEventListener('mousemove', (e)=>{
            if(this.isDragging) this.handleDrag(e)
        })
    }

    startDrag(e){
        if(this.isDragging) return;
        this.isDragging = true
        this.update()
        this.draggableElement.dispatchEvent(new Event('dragstart'))
    }

    endDrag(e){
        if(!this.isDragging) return;
        this.isDragging = false
        this.draggableElement.dispatchEvent(new Event('dragend'))
    }

    handleDrag(e){
        let prev = this.previousSibling
        let next = this.nextSibling
        if(prev && prev.getBoundingClientRect().bottom > e.pageY){
            return this.moveUp()
        }
        if(next && next.getBoundingClientRect().top < e.pageY){
            return this.moveDown()
        }
    }

    moveUp(){
        this.parent.insertBefore(this.draggableElement, this.previousSibling)
        this.update()
    }

    moveDown(){
        this.parent.insertBefore(this.nextSibling, this.draggableElement)
        this.update()
    }

    update(){
        this.updateSiblings()
        this.updateIndex()
    }

    updateSiblings(){
        this.siblings = [...this.draggableElement.parentElement.children]
    }

    updateIndex(){
        this.index = this.siblings.indexOf(this.draggableElement)
    }

    get previousSibling(){
        return this.siblings[this.index-1]
    }

    get nextSibling(){
        return this.siblings[this.index+1]
    }

    static bind(dragElement, draggableElement=null){
        return new Draggable(dragElement, draggableElement)
    }
}