import FilterComposite from "../filter-composite";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterCompositeBuilder extends FilterBuilder
{
    constructor(){
        super("Composite", FilterComposite)
    }

    render(){
        super.render()
        this.in2Input = this.createInputSelector(this.settings)
        this.in2Input.addEventListener('change', ()=> Builder.Instance.update())

        this.operatorSelect = Builder.Instance.createSelect({
            over: "over", 
            in: "in", 
            out: "out", 
            atop: "atop", 
            xor: "xor", 
            arithmetic: "arithmetic", 
            lighter: "lighter"
        }, this.settings)
        this.operatorSelect.addEventListener('change', ()=> Builder.Instance.update())
    }

    update(){
        super.update()

        let selected = this.in2Input.selectedOptions[0].value
        let inputFilter = Builder.Instance.getFilterByName(this.in2Input.selectedOptions[0].value)
        if(selected == "SourceGraphic")  this.filter.element.setAttribute('in2', "SourceGraphic")
        else this.filter.in2 = inputFilter

        this.filter.operator = this.operatorSelect.selectedOptions[0].value
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