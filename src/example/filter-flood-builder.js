import FilterFlood from "../filter-flood";
import FilterBuilder from "./filter-builder";

export default class FilterFloodBuilder extends FilterBuilder
{
    constructor(){
        super("Flood", FilterFlood, {
            floodColor: {
                type: "text"
            },
            floodOpacity: {
                step: 0.1
            }
        })
    }
}