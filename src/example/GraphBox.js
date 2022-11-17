import Draggable from "./Draggable"


export default class GraphBox extends EventTarget{
    
    static colorIndex = 0

    constructor(selectable, element, inputs, outputs){
        super()
        this.constructor.colorIndex += 360 / 3 + 33
        this.color = `hsl(${this.constructor.colorIndex}deg, 70%, 70%)`
        this.lineOptions = {
            color: this.color,
            size: 2,
            dropShadow: {
                dx: 0,
                dy: 1,
                blur: 1
            },
            dash: true,
            startSocket: 'right',
            endSocket: 'left'
        }
        
        this.selectable = selectable
        this.element = element
        this.element.style.setProperty("--color", this.color)
        this.inputs = [...inputs]
        this.outputs = [...outputs]

        this.registerInstance()
        this.bindElement()
        this.bindOutputs()
        this.bindInputs()
        this.bindElement()
    }

    bindElement(){
        this.Draggable = new Draggable(this.element, {
            parentBounds: false
        })
        this.element.addEventListener('dragstart', ()=>{
            if(!this.selectable.selectedElements.includes(this.element)) return;
            if(this.selectable.selectedElements.length) {
                this.selectable.selectedElements.map(e => {
                    if(this.element == e) return;
                    e.Draggable.startDrag(this.Draggable.mousePosition, false)
                })
            }
        })
        this.element.addEventListener('selectstart', ()=> this.element.classList.add('selected'))
        this.element.addEventListener('selectend', ()=> this.element.classList.remove('selected'))
        
    }

    addInput(input){
        if(this.inputs.includes(input)) return;
        this.inputs.push(input)
        this.bindInput(input)
    }

    bindInput(input){
        input.GraphBox = this
        input.addEventListener('mouseenter', ()=>{
            GraphBox.currentInput = input
        })
        input.addEventListener('mouseleave', ()=>{
            GraphBox.currentInput = null
        })
    }

    addOutput(output){
        if(this.outputs.includes(output)) return;
        this.outputs.push(output)
        this.bindOutput(output)
    }
    bindOutput(output){
        output.GraphBox = this
        new Draggable(output)
        let line;
        output.addEventListener('dragstart', ()=>{
            line = new LeaderLine(output.parentElement.parentElement, output, this.lineOptions)
            output.style.pointerEvents = "none"
            output.style.opacity = 0
        })
        output.addEventListener('drag', ()=>{
            if(line) line.position()
            if(GraphBox.currentInput && !this.inputs.includes(GraphBox.currentInput)) {
                this.link(output, GraphBox.currentInput)
            }
        })
        output.addEventListener('dragend', ()=>{
            if(line) line.remove()
            output.Draggable.resetPosition()
            output.style.pointerEvents = "all"
            output.style.opacity = 1
        })
    }

    bindInputs(){
        this.inputs.map(input => this.bindInput(input))
    }

    bindOutputs(){
        this.outputs.map(output => this.bindOutput(output))
    }

    link(output, input){
        input.style.setProperty('--color', this.color)
        new Link(input, output, this.color)
    }

    registerInstance(){
        if(!GraphBox.instances) GraphBox.instances = []
        if(!GraphBox.instances.includes(this)) GraphBox.instances.push(this)
    }

    update(){
        this.Draggable.update()
        this.inputs.map(input => input.Link?.updateLine())
        this.outputs.map(output => output.Links?.map(l => l.updateLine()))
    }
}

export class Link {
    constructor(input, output, color){
        this.lineOptions = {
            //color: '#2eb2ff',
            color,
            endPlug: 'behind',
            size: 2,
            dropShadow: {
                dx: 0,
                dy: 1,
                blur: 1
              },
            startSocket: 'right',
            endSocket: 'left'
        }

        this.input = input
        this.output = output
        this.build()
        this.bind()
        this.updateLine()
    }

    build(){
        if(this.input.Link) this.input.Link.remove()

        this.input.Link = this
        this.addOutputLink()

        this.Line = new LeaderLine(this.output, this.input, this.lineOptions)
    }

    bind(){
        this.callback = ()=> this.updateLine()
        this.input.dispatchEvent(new CustomEvent("link", {detail: {
            source: this.output
        }}))
        this.output.dispatchEvent(new CustomEvent("link", {detail: {
            source: this.input
        }}))
        this.input.classList.add('linked')
        this.output.classList.add('linked')
        this.output.Draggable.endDrag()
        this.output.GraphBox.element.addEventListener('drag', this.callback)
        this.input.GraphBox.element.addEventListener('drag', this.callback)
    }

    updateLine(){
        if(this.nextUpdate) {
            this.Line.hide()
            clearTimeout(this.nextUpdate)
        }
        this.nextUpdate = setTimeout(()=> {
            this.Line.position()
            this.Line.show()
        })
    }

    remove(){
        this.Line.remove()
        this.output.GraphBox.element.removeEventListener('drag', this.callback)
        this.input.GraphBox.element.removeEventListener('drag', this.callback)
        this.input.dispatchEvent(new CustomEvent("unlink", {detail: {
            source: this.output
        }}))
        this.output.dispatchEvent(new CustomEvent("unlink", {detail: {
            source: this.input
        }}))
        this.input.classList.remove('linked')
        delete this.input.Link
        this.removeOutputLink()
        if(!this.output.Links?.length) this.output.classList.remove('linked')
    }

    addOutputLink(){
        if(!this.output.Links) this.output.Links = []
        this.output.Links.push(this)
    }
    removeOutputLink(){
        this.output.Links.splice(this.output.Links.indexOf(this), 1)
    }
}