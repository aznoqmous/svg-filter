import Builder from "./builder"
import Vector2 from "./Vector2"

export default class Selectable {
    constructor(element, opts={}){

        this.selectBoxOpts = Object.assign({
            size: "1px",
            color: "black",
            style: "solid",
            radius: null
        }, opts.selectBox || {})
        this.opts = Object.assign({
            selector: null
        }, opts)
        this.selector = this.opts.selector
        this.element = element
        this.build()
        this.bind()
        this.isActive = true
        this.selectedElements = []
    }

    get selectableElements(){
        let children = this.selector ? [...this.element.querySelectorAll(this.selector)] : [...this.element.children]
        return children.filter(e => e != this.selectBox)
    }

    build(){
        this.selectBox = document.createElement('div')
        this.selectBox.style.border = `${this.selectBoxOpts.size} ${this.selectBoxOpts.style} ${this.selectBoxOpts.color}`
        this.selectBox.style.borderRadius = this.selectBoxOpts.radius
        this.selectBox.style.position = "fixed"
        this.element.appendChild(this.selectBox)
        this.hideSelectBox()
    }
    bind(){
        this.element.addEventListener('mousedown', this.handleMouseDown.bind(this))
        window.addEventListener('mousemove', this.handleMouseMove.bind(this))
        window.addEventListener('mouseup', this.handleMouseUp.bind(this))
    }

    handleMouseDown(e){
        if(!this.isActive) return;
        let overlappingElements = this.selectableElements.filter(se => se.contains(e.target) || se == e.target)
        let targetElement =  overlappingElements.length ? overlappingElements[0] : null
        if(this.selectedElements.length && !targetElement) this.unselectAll()
        if(this.selectedElements.length && !this.selectedElements.includes(targetElement)) this.unselectAll()
        if(targetElement) return this.select(targetElement)

        e.preventDefault()
        if(this.isDragging) return;
        this.startDrag(new Vector2(e.pageX, e.pageY))
    }

    handleMouseUp(){
        this.endDrag()
    }

    handleMouseMove(e){
        if(!this.isDragging) return;
        let mousePosition = new Vector2(e.pageX, e.pageY)
        let x = Math.min(this.startPosition.x, mousePosition.x)
        let y = Math.min(this.startPosition.y, mousePosition.y)
        let size = mousePosition.substract(this.startPosition).abs()

        this.updateSelectBox(x,y,size)
        this.capture(x,y,size)
        this.element.dispatchEvent(new Event('drag'))
    }

    startDrag(position){
        this.startPosition = position
        this.isDragging = true
        this.element.dispatchEvent(new Event('dragstart'))
        this.updateClientRects()
        this.showSelectBox()
    }
    endDrag(){
        if(!this.isDragging) return;
        this.isDragging = false
        this.element.dispatchEvent(new Event('dragend'))
        this.hideSelectBox()
    }

    showSelectBox(){
        this.selectBox.style.display = null
    }
    hideSelectBox(){
        this.selectBox.style.display = "none"
        this.updateSelectBox(0, 0, new Vector2())
    }
    updateSelectBox(x,y,size){
        this.selectBox.style.left = x + "px"
        this.selectBox.style.top = y - window.scrollY + "px"
        this.selectBox.style.width = size.x + "px"
        this.selectBox.style.height = size.y + "px"
    }

    updateClientRects(){
        this.selectableElements.map(e => e.clientRect = e.getBoundingClientRect())
    }
    /* select/unselect elements in square */
    capture(x,y,size){
        y -= window.scrollY
        let newSelectedElements = this.selectableElements.filter(e => (
            e.clientRect.x + e.clientRect.width > x
            && e.clientRect.x < x + size.x
            && e.clientRect.y + e.clientRect.height > y
            && e.clientRect.y < y + size.y
        ))
        newSelectedElements.map(e => this.select(e))

        let unselectedElements = this.selectedElements.filter(e => !newSelectedElements.includes(e))
        unselectedElements.map(e => this.unselect(e))
    }

    select(element){
        element.dispatchEvent(new Event('selectstart'))
        if(!this.selectedElements.includes(element)) this.selectedElements.push(element)
    }
    unselect(element){
        element.dispatchEvent(new Event('selectend'))
        let index = this.selectedElements.indexOf(element)
        if(index >= 0) this.selectedElements.splice(index, 1)
    }
    unselectAll(){
        this.selectedElements.map(e => e.dispatchEvent(new Event('selectend')))
        this.selectedElements = []
    }

    addSelectable(element){
        this.selectableElements.push(element)
    }
    removeSelectable(element){
        let index = this.selectableElements.indexOf(element)
        if(index < 0) return
        this.selectableElements.splice(index, 1)
    }

}