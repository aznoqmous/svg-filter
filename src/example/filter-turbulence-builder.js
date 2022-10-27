import FilterTurbulence from "../filter-turbulence";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterTurbulenceBuilder extends FilterBuilder
{
    constructor(){
        super("Turbulence", FilterTurbulence, {
            baseFrequency: {
                step: 0.001
            },
            numOctaves: {}
        })
    }


}