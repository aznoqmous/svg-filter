import FilterDisplacementMap from "../filter-displacement-map";
import FilterBuilder from "./filter-builder";

export default class FilterDisplacementMapBuilder extends FilterBuilder
{
    constructor(){
        super("Displacement Map", FilterDisplacementMap, {
            in: {
                element: "select",
                type: "filter"
            },
            in2: {
                element: "select",
                type: "filter"
            },
            scale: {},
            xChannelSelector: {
                type: "text"
            },
            yChannelSelector: {
                type: "text"
            }
        })
    }
}