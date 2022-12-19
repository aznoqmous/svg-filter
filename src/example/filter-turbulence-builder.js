import FilterTurbulence from "../filter-turbulence";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterTurbulenceBuilder extends FilterBuilder
{
    constructor(){
        super("Turbulence", FilterTurbulence, {
            baseFrequencyX: {
                step: 0.001
            },
            baseFrequencyY: {
                step: 0.001
            },
            numOctaves: {},
            seed: {},
            type: {
                element: "select",
                options: {
                    fractalNoise: "fractalNoise",
                    turbulence: "turbulence",
                }
            }
        }, "water")
    }
}