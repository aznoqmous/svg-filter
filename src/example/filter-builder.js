import SvgFilter from "../svg-filter"
import Builder from "./builder"
import Draggable from "./draggable"

export default class FilterBuilder {
    constructor(label, filterClass=null, fieldsConfiguration={}){
        this.label = label
        this.class = filterClass
        this.inputFilterName = null
        this.fieldsConfiguration = fieldsConfiguration
    }
    
    build(){
        this.element = document.createElement('form')
        this.element.filterBuilder = this
        this.element.className = "filter"
        this.element.innerHTML = Builder.Instance.template.innerHTML
        this.element.typeSelect = this.element.querySelector('[name="type"]')
        this.settings = this.element.querySelector('.settings')
        this.previewContainer = this.element.querySelector('.preview')
        this.drag = this.element.querySelector('.drag')

        Draggable.bind(this.drag, this.element)
        this.element.addEventListener('dragstart', ()=>{
            this.element.style.opacity = 0.5
        })
        this.element.addEventListener('dragend', ()=>{
            this.element.style.opacity = 1
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
            Builder.Instance.filterBuilders.map(fb => fb.updateFilterSelectors())
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
        this.onUpdate = filterBuilderClass.prototype.onUpdate
        this.buildLightSettings = filterBuilderClass.prototype.buildLightSettings
        this.fieldsConfiguration = builder.fieldsConfiguration
        this.fields = {}
        this.setFilter(builder.class)
    }

    render(){
        this.buildPreview()

        this.settings.innerHTML = ""

        /* Generate filter fields */
        this.fields = {}
        Object.keys(this.fieldsConfiguration).map(key => {
            let config = this.fieldsConfiguration[key]
            this.fields[key] = this.createField(key, config)
        })
    }

    update(){
        Object.keys(this.fields).map(key => {
            let config = this.fields[key].config
            let value = this.getFieldValue(this.fields[key])
            if(config.type == "filter"){
                if(!value) return this.filter.element.removeAttribute(key)
                if(!value.name) return this.filter.element.setAttribute(key, value)
            }
            this.filter[key] = value
        })
        console.log("UPDATE")
        this.onUpdate()
        this.updatePreview()
    }

    onUpdate(){
        // do your things
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

    updateFilterSelectors(){
        Object.values(this.fields).filter(f => f.config.type == "filter")
        .map(field => {
            let selected = field.selectedOptions[0].value
            field.config.value = selected
            this.setFilterSelectorOptions(field)
        })
    }

    createInput(attributes={}, parent=null){
        let input = Builder.Instance.createElement('input', attributes, parent || this.settings)
        input.addEventListener('input', ()=> Builder.Instance.update())
        return input
    }

    createField(key, config){
        let container = Builder.Instance.createElement('div', {class: "input-group"}, this.settings)
        let label = Builder.Instance.createElement('strong', {}, container)
        label.innerHTML = key
        let attributes = Object.assign({
            element: "input",
            type: "number",
            step: 1
        }, config)
        let tagName = attributes.element
        delete attributes.tagName

        let element = Builder.Instance.createElement(tagName, attributes, container)
        element.addEventListener('input', ()=> Builder.Instance.update())
        element.value = this.filter[key]
        element.config = config
        element.key = key
        switch(tagName){
            case "select":
                this.setFilterSelectorOptions(element)
            default:
                break;
        }
        return element
    }

    setFilterSelectorOptions(element){
        element.innerHTML = ""
        let config = element.config
        if(config.type == "filter") config.options = this.getFilterSelectorValues()
        Object.keys(config.options).map((key, i) => {
            let value = config.options[key]
            let selected = config.value ? config.value == value : !i
            element.add(new Option(value, key, selected, selected))
        })
    }

    getFieldValue(field){
        if(field.config.isTypeSelector){
            let value = field.selectedOptions.length ? field.selectedOptions[0].value : null
            return Builder.Instance.getFilterByName(value)
        }
        
        let value;
        switch(field.tagName){
            case "select":
                value = field.selectedOptions.length ? field.selectedOptions[0].value : null
                break;
            default:
                value = field.value
                break;
        }
        return value;
    }

    getFilterSelectorValues(){
        return Object.fromEntries(
            [
                "", 
                "SourceGraphic",
                ...Builder.Instance.filters
                .map(f => f.name)
            ]
            .filter(name => name != this.filter.name)
            .map(name => [name, name])
        )
    }

    buildPreview(){
        this.svgFilter = new SvgFilter(this.filter.name + "_preview")
        this.updatePreview()
    }

    updatePreview(){
        this.previewContainer.innerHTML = ""
        this.previewElement = Builder.Instance.testElement.cloneNode(true)
        this.previewElement.style.filter = `url(#${this.filter.name + "_preview"})`
        this.previewContainer.appendChild(this.previewElement)
        let filters = this.getPreviousFilters()
        filters.push(this.filter)
        console.log(filters)
        this.svgFilter.filters.innerHTML = ""
        this.svgFilter.addFilterClones(filters)
        this.previewContainer.appendChild(this.svgFilter.svg)
    }

    getPreviousFilters(){
        let index = Builder.Instance.filters.map(f => f.name).indexOf(this.filter.name)
        if(index == -1) return Builder.Instance.filters
        return Builder.Instance.filters.slice(0, index)
    }
}