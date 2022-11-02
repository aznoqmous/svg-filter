import FilterComposite from "../filter-composite";
import FilterFlood from "../filter-flood";
import FilterBuilder from "./filter-builder";

export default class FilterFloodBuilder extends FilterBuilder
{
    constructor(){
        super("Fill", FilterFlood, {
            floodColor: {
                type: "text"
            },
            floodOpacity: {
                step: 0.1
            }
        })
    }
}