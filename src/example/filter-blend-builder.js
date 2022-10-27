import FilterBlend from "../filter-blend";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterBlendBuilder extends FilterBuilder
{
    constructor(){
        super("Blend", FilterBlend, {
            in: {
                element: "select",
                type: "filter"
            },
            in2: {
                element: "select",
                type: "filter"
            }
        })
    }
}