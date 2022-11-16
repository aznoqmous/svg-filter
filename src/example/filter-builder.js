import SvgFilter from "../svg-filter"
import Builder from "./builder"
import GraphBox from "./GraphBox"
import SourceGraphicBuilder from "./source-graphic-builder"
import WorkSpace from "./WorkSpace"

export default class FilterBuilder extends EventTarget {
    constructor(label, filterClass=null, fieldsConfiguration={}){
        super()
        this.label = label
        this.class = filterClass
        this.inputFilterName = null
        this.fieldsConfiguration = fieldsConfiguration
        this.inputs = []
    }

    build(){
        this.element = document.createElement('form')
        this.element.filterBuilder = this
        this.element.className = "filter"
        this.element.innerHTML = Builder.Instance.template.innerHTML
        this.element.typeSelect = this.element.querySelector('[name="type"]')
        this.settings = this.element.querySelector('.settings')
        this.previewContainer = this.element.querySelector('.preview')
        
        this.name = this.element.querySelector('.name')
        this.name.innerHTML = this.label
        
        Builder.Instance.filterBuilderLabels.map((label,i) => {
            this.element.typeSelect.add(new Option(label, i, this.label == label, this.label == label))
        })
        this.element.typeSelect.addEventListener('change', ()=>{
            let selectedOption = this.element.typeSelect.selectedOptions[0]
            this.loadBuilder(Builder.Instance.filterBuilderTypes[selectedOption.value])
            this.render()
            Builder.Instance.update()
        })
        
        this.GraphBox = new GraphBox(WorkSpace.Instance.selectable, this.element, [], [])
        this.inputsContainer = Builder.Instance.createElement("div", { class: "inputs"}, this.element)
        this.outputsContainer = Builder.Instance.createElement("div", { class: "outputs"}, this.element)
        
        
        this.toggle = this.element.querySelector('.label i')
        this.toggle.addEventListener('click', ()=>{
            this.element.classList.toggle('closed')
            this.GraphBox.update()
        })

        this.render()

        this.buildInputs()
        this.updateInputs()
        this.buildOutput()
    }

    buildInputs(){
        let existingInputs = [...this.inputsContainer.children]
        let existingInputKeys = existingInputs.map(i => i.key)
        let fields = this.getFilterInputFields()
        let fieldKeys = fields.map(f => f.key)
        let removedFields = fields.filter(f => !fieldKeys.includes(f.key))
        let newFields = fields.filter(f => !existingInputKeys.includes(f.key))
        
        removedFields.map(f => this.removeFieldInput(f))

        newFields.map(f => this.addFieldInput(f))
    }

    updateInputs(){
        ;[...this.inputsContainer.children].map(input => this.updateInput(input))
    }

    removeFieldInput(field){
        field.input.remove()
        if(field.input.Link) field.input.Link.remove()
        this.inputs.slice(this.inputs.indexOf(field.input), 1)
    }

    addFieldInput(field){
        let input = Builder.Instance.createElement('i', {class: "input"}, this.inputsContainer)
        this.GraphBox.addInput(input)
        input.key = field.key
        field.input = input
        input.addEventListener('link', (data)=>{
            this.updateInput(input)
        })
        this.inputs.push(input)
        return input
    }

    updateInput(input){
        if(!input || !this.fields[input.key]) return;
        this.fields[input.key].value = this.getLinkedFilterName(input)
        Builder.Instance.reorderBuilders()
        Builder.Instance.update()
        this.updatePreview()
    }

    getLinkedOutput(input){
        return input.Link?.output
    }

    getLinkedFilterName(input){
        let output = this.getLinkedOutput(input)
        if(output?.GraphBox?.element.filterBuilder.constructor == SourceGraphicBuilder){
            return output.key
        } 
        return output?.GraphBox?.element.filterBuilder.filter.name
    }
    
    buildOutput(){
        this.output = Builder.Instance.createElement('i', { class: "output" }, this.outputsContainer)
        this.bindOutput(this.output)
        this.GraphBox.addOutput(this.output)
    }
    bindOutput(output){
        let startLinks = 0
        output.addEventListener('dragstart', ()=>{
            startLinks = output.Links?.length || 0
        })
        output.addEventListener('dragend', ()=>{
            let endLinks = output.Links?.length || 0
            if(startLinks == endLinks) {
                setTimeout(()=> Builder.Instance.showFilterSelect(this))
            }
        })
    }

    setFilter(filterClass){
        if(!filterClass) return;
        if(this.filter) this.filter = new filterClass(this.filter.name)
        else this.filter = new filterClass()
    }

    loadBuilder(filterBuilderClass){
        let builder = new filterBuilderClass()
        this.class = filterBuilderClass
        this.label = Builder.Instance.filterBuilderLabels[Builder.Instance.filterBuilderTypes.indexOf(this.class)]
        this.fieldsConfiguration = builder.fieldsConfiguration
        this.fields = {}

        Object.getOwnPropertyNames(filterBuilderClass.prototype)
        .map(property => {
            if(property == "constructor") return;
            this[property] = filterBuilderClass.prototype[property]
        })

        this.setFilter(builder.class)
    }

    render(){
        this.buildPreview()
        this.settings.innerHTML = ""
        this.initFields()
        this.buildInputs()
    }
    initFields(){
        this.fields = {}
        Object.keys(this.fieldsConfiguration).map(key => {
            let config = this.fieldsConfiguration[key]
            this.fields[key] = this.createField(key, config)
        })
    }
    updateFields(){
        Object.keys(this.fieldsConfiguration).map(key => {
            let config = this.fieldsConfiguration[key]
            if(!this.fields[key]) this.fields[key] = this.createField(key, config)
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
        this.onUpdate()
        this.updatePreview()
    }

    onUpdate(){
        // do your things
    }

    updateFilterSelectors(){
        this.getFilterInputFields()
        .map(field => {
            let selected = field.selectedOptions[0]?.value
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
        let container = Builder.Instance.createElement('div', {class: `input-group`, "data-key":key}, this.settings)
        if(config.type == "filter") container.classList.add('input')
        let label = Builder.Instance.createElement('strong', {}, container)
        label.innerHTML = key
        let attributes = Object.assign({
            element: "input",
            type: "number",
            step: 1
        }, config)
        let tagName = attributes.element
        delete attributes.tagName
        delete attributes.element
        let element = Builder.Instance.createElement(tagName, attributes, container)
        element.addEventListener('input', ()=> Builder.Instance.update())
        element.value = this.filter[key]
        element.config = config
        element.key = key
        switch(tagName){
            case "select":
                this.setFilterSelectorOptions(element)
                break;
            case "table": 
                let cols = attributes.columns.length
                let rows = attributes.rows.length + 1
                let colTexts = ["", ...attributes.columns]
                let rowTexts = ["", ...attributes.rows]
                let currentIndex = 0
                for(let y = 0; y < rows; y++){
                    let row = Builder.Instance.createElement("tr", {}, element)
                    row.innerHTML = `<th>${rowTexts[y]}</th>`
                    if(!y) {
                        row.innerHTML += "<th>" + attributes.columns.join('</th><th>') + "</th>"
                        continue
                    }
                    for(let x = 0; x < cols; x++){
                        let cell = Builder.Instance.createElement('td', {}, row)
                        let input = Builder.Instance.createElement('input', attributes, cell)
                        input.value = attributes.value[currentIndex]
                        currentIndex++
                    }
                }
                break;
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
                "SourceAlpha",
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
        //if(!this.isAllInputConnected) return;
        this.previewElement = Builder.Instance.testElement.cloneNode(true)
        this.previewElement.style.filter = `url(#${this.filter.name + "_preview"})`
        this.previewContainer.appendChild(this.previewElement)
        let filters = this.getPreviousFilters()
        filters.push(this.filter)
        this.svgFilter.filters.innerHTML = ""
        this.svgFilter.addFilterClones(filters)
        this.previewContainer.appendChild(this.svgFilter.svg)
    }

    delete(){
        [...this.inputsContainer.children].map(i => i.Link ? i.Link.remove() : null)
        ;[...this.outputsContainer.children].map(i => {
            let links = i?.Links || []
            links.map(l => l.remove())
        })
        this.element.remove()
        Builder.Instance.removeFilterBuilder(this)
        Builder.Instance.filterBuilders.map(fb => fb.updateFilterSelectors())
        Builder.Instance.update()
    }

    getPreviousFilters(){
        return Builder.Instance.treeWalk(this).map(fb => fb.filter)
    }

    get isAllInputConnected(){
        return !Object.values(this.getFilterInputValues()).filter(v => !v).length
    }

    getFilterInputValues(){
        return Object.fromEntries(this.getFilterInputFields().map(f => [f.key, this.getFieldValue(f)]))
    }
    getFilterInputFields(){
        return Object.values(this.fields).filter(f => f.config.type == "filter")
    }
    getInputBuilders(){
        let inputs = this.GraphBox?.inputs
        return inputs.map(i => i.Link?.output?.GraphBox?.element?.filterBuilder).filter(i => i)
    }

    getInputByKey(key="in"){
        let matching = [...this.inputsContainer.children].filter(i => i.key == key)
        return matching.length ? matching[0] : null
    }

    connectTo(filterBuilder, key="in"){
        let filterInput = filterBuilder.getInputByKey(key)
        this.connectToInput(filterInput)
    }

    connectToInput(input){
        this.GraphBox.link(this.output, input)
    }

    maximize(){
        this.element.classList.remove('closed')
        this.GraphBox.update()
    }
    minimize(){
        this.element.classList.add('closed')
        this.GraphBox.update()
    }
}