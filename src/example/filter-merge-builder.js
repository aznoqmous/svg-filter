import FilterMergeNode from "../filter-merge-node";
import FilterMerge from "../filter-merge";
import FilterBuilder from "./filter-builder";
import Builder from "./builder";

export default class FilterMergeBuilder extends FilterBuilder
{
    constructor(){
        super("Merge", FilterMerge, {})
    }

    render(){
        this.inputFilters = {}
        this.filter.filters.map(filter => {
            this.addInputFieldDefinition()
        })
        super.render()
        this.filter.filters.map((filter,i) => {
            let input = this.inputs[i]
            let source = Builder.Instance.getFilterBuilderByName(filter.element.getAttribute('in'))
            source.connectTo(this, input.key)
        })
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
}