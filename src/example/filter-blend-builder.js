import FilterBlend from "../filter-blend";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterBlendBuilder extends FilterBuilder
{
    constructor(){
        super("Blend", FilterBlend)
    }

    render(){
        super.render()
        this.in2Input = this.createInputSelector(this.settings)
        this.in2Input.addEventListener('change', ()=> Builder.Instance.update())
    }

    update(){
        super.update()

        let selected = this.in2Input.selectedOptions[0].value
        let inputFilter = Builder.Instance.getFilterByName(this.in2Input.selectedOptions[0].value)
        if(selected == "SourceGraphic")  this.filter.element.setAttribute('in2', "SourceGraphic")
        else this.filter.in2 = inputFilter
    }

    updateInputSelector(){
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