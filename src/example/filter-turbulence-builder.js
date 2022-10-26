import FilterTurbulence from "../filter-turbulence";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterTurbulenceBuilder extends FilterBuilder
{
    constructor(){
        super("Turbulence", FilterTurbulence)
    }

    render(){
        super.render()
        this.settings.baseFrequency = this.createInput({
            type: "number",
            value: this.filter.baseFrequency,
            step: 0.1
        }, this.settings)
        this.settings.numOctaves = this.createInput({
            type: "number",
            value: this.filter.numOctaves
        }, this.settings)
    }

    update(){
        super.update()
        this.filter.baseFrequency = this.settings.baseFrequency.value || 0
        this.filter.numOctaves = this.settings.numOctaves.value || 0
    }
}