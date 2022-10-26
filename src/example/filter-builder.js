import Builder from "./builder"
import Draggable from "./draggable"

export default class FilterBuilder {
    constructor(label, filterClass=null){
        this.class = filterClass
        this.label = label
        this.inputFilterName = null
    }
    
    build(){
        this.element = document.createElement('form')
        this.element.filterBuilder = this
        this.element.className = "filter"
        this.element.innerHTML = Builder.Instance.template.innerHTML
        this.element.typeSelect = this.element.querySelector('[name="type"]')
        this.settings = this.element.querySelector('.settings')
        this.drag = this.element.querySelector('.drag')

        let draggable = Draggable.bind(this.drag, this.element)
        this.element.addEventListener('dragend', ()=>{
            Builder.Instance.reorderBuilders()
        })

        this.name = this.element.querySelector('.name')
        this.name.innerHTML = this.filter.name
        
        Builder.Instance.filterBuilderLabels.map((label,i) => {
            this.element.typeSelect.add(new Option(label, i, !i))
        })
        this.element.typeSelect.addEventListener('change', ()=>{
            let selectedOption = this.element.typeSelect.selectedOptions[0]
            this.loadBuilder(Builder.Instance.filterBuilderTypes[selectedOption.value])
            this.render()
            Builder.Instance.update()
        })
        this.element.querySelector('.delete').addEventListener('click', ()=>{
            this.element.remove()
            Builder.Instance.removeFilterBuilder(this)
            Builder.Instance.filterBuilders.map(fb => fb.updateInputSelector())
            Builder.Instance.update()
        })

        this.render()
    }

    setFilter(filterClass){
        if(!filterClass) return;
        if(this.filter) this.filter = new filterClass(this.filter.name)
        else this.filter = new filterClass()
    }

    loadBuilder(filterBuilderClass){
        let builder = new filterBuilderClass()
        this.render = filterBuilderClass.prototype.render
        this.update = filterBuilderClass.prototype.update
        this.buildLightSettings = filterBuilderClass.prototype.buildLightSettings
        this.setFilter(builder.class)
    }

    render(){
        this.settings.innerHTML = ""
        this.inInput = this.createInputSelector(this.settings)
        this.inInput.addEventListener('change', ()=> Builder.Instance.update())
    }

    update(){
        let selected = this.inInput.selectedOptions[0].value
        let inputFilter = Builder.Instance.getFilterByName(this.inInput.selectedOptions[0].value)
        if(selected == "SourceGraphic")  this.filter.element.setAttribute('in', "SourceGraphic")
        else this.filter.in = inputFilter
    }

    createInputSelector(parent=null){
        let element = Builder.Instance.createElement("select", {}, parent)
        let values = [
            "", "SourceGraphic",
            ...Builder.Instance.filters
            .map(f => f.name)
            .filter(name => name != this.filter.name)
        ]
        values
        .map(value => {
            element.add(new Option(value, value))
        })
        return element
    }

    updateInputSelector(){
        let selected = this.inInput ? this.inInput.selectedOptions[0].value : null
        this.inInput.innerHTML = ""
        let values = [
            "", "SourceGraphic",
            ...Builder.Instance.filters
            .map(f => f.name)
            .filter(name => name != this.filter.name)
        ]
        values
        .map(value => {
            this.inInput.add(new Option(value, value, value == selected, value == selected))
        })
    }

    createInput(attributes={}, parent=null){
        let input = Builder.Instance.createElement('input', attributes, parent || this.settings)
        input.addEventListener('input', ()=> Builder.Instance.update())
        return input
    }
}