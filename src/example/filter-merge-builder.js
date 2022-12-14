import FilterMergeNode from "../filter-merge-node";
import FilterMerge from "../filter-merge";
import FilterBuilder from "./filter-builder";
import Builder from "./builder";

export default class FilterMergeBuilder extends FilterBuilder
{
    constructor(){
        super("Merge", FilterMerge, {}, "call_merge")
    }

    render(){
        this.inputFilters = {}
        this.filter.filters.map(() => {
            this.addInputFieldDefinition()
        })
        
        super.render()
        this.filter.filters.map((filter,i) => {
            let input = this.inputs[i]
            let source = Builder.Instance.getFilterBuilderByName(filter.element.getAttribute('in'))
            source.connectTo(this, input.key)
        })
    
        this.clearFilters()

    }

    addInputFieldDefinition(){
        this.inputsIndex = this.inputsIndex || 1
        let fieldKey = `in${this.inputsIndex}`
        this.inputsIndex++
        this.fieldsConfiguration[fieldKey] = {
            element: "select",
            type: "filter"
        }
    }

    unbindFieldInput(field){
        if(!field.input.Link) return;
        this.removeFieldInput(field)
    }

    removeFieldInput(field){
        super.removeFieldInput(field)
        delete this.fieldsConfiguration[field.key]
        delete this.fields[field.key]
        delete this.inputFilters[field.key]
        this.updateFields()
        this.buildInputs()
        this.clearFilters()
        this.update()
        this.GraphBox.update()
    }

    addInputField(){
        this.addInputFieldDefinition()
        this.updateFields()
        this.buildInputs()
    }

    updateInput(input){
        if(this.inputFilters[input.key]) this.filter.removeFilter(this.inputFilters[input.key])
        let filter = new FilterMergeNode(this.getLinkedFilterName(input))
        this.inputFilters[input.key] = filter
        this.filter.addFilter(filter)
        super.updateInput(input)
    }

    update(){
        super.update()
        if(this.isAllInputConnected) this.addInputField()
    }

    clearFilters(){
        let removedFilters = this.filter.filters.filter(f => !Object.values(this.inputFilters).includes(f))
        removedFilters.map(f => this.filter.removeFilter(f))
    }
}