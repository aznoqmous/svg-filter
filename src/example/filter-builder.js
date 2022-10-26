import Builder from "./builder"

export default class FilterBuilder {
    constructor(label, filterClass){
        this.class = filterClass
        this.label = label

        this.inputFilterName = null
    }

    render(settings){
        /*let inputSelector = this.createInputSelector(settings)
        inputSelector.addEventListener('change', ()=>{
            this.inputFilterName = inputSelector.selectedOptions[0].value
            Builder.Instance.update()
        })*/
    }

    update(filter, settings, index){
        /*let inputFilter = Builder.Instance.getFilterByName(this.inputFilterName)
        if(inputFilter) filter.in = inputFilter*/
    }

    createInputSelector(parent=null){
        let element = Builder.Instance.createElement("select", {}, parent)
        Builder.Instance.filters.map(filter => {
            element.add(new Option(filter.name, filter.name))
        })
        return element
    }
}