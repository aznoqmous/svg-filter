import FilterBlend from "../filter-blend";
import FilterDisplacementMap from "../filter-displacement-map";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterDisplacementMapBuilder extends FilterBuilder
{
    constructor(){
        super("Displacement Map", FilterDisplacementMap)
    }

    render(){
        super.render()
        this.in2Input = this.createInputSelector(this.settings)
        this.in2Input.addEventListener('change', ()=> Builder.Instance.update())
        
        this.settings.scale = this.createInput({
            type: "number",
            value: this.filter.scale
        }, this.settings)
        this.settings.xChannelSelector = this.createInput({
            type: "text",
            value: this.filter.xChannelSelector
        }, this.settings)
        this.settings.yChannelSelector = this.createInput({
            type: "text",
            value: this.filter.yChannelSelector
        }, this.settings)
    }

    update(){
        super.update()

        let selected = this.in2Input.selectedOptions[0].value
        let inputFilter = Builder.Instance.getFilterByName(this.in2Input.selectedOptions[0].value)
        if(selected == "SourceGraphic")  this.filter.element.setAttribute('in2', "SourceGraphic")
        else this.filter.in2 = inputFilter

        this.filter.scale = this.settings.scale.value || 0
        this.filter.xChannelSelector = this.settings.xChannelSelector.value || 0
        this.filter.yChannelSelector = this.settings.yChannelSelector.value || 0
    }

    updateInputSelector(){
        super.updateInputSelector()
        let selected = this.in2Input ? this.in2Input.selectedOptions[0].value : null
        this.in2Input.innerHTML = ""
        let values = [
            "", "SourceGraphic",
            ...Builder.Instance.filters
            .map(f => f.name)
            .filter(name => name != this.filter.name)
        ]
        values
        .map(value => {
            this.in2Input.add(new Option(value, value, value == selected, value == selected))
        })
    }
}