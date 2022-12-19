import FilterComposite from "../filter-composite";
import FilterBuilder from "./filter-builder";

export default class FilterCompositeBuilder extends FilterBuilder
{
    constructor(){
        super("Composite", FilterComposite, {
            in: {
                element: "select",
                type: "filter"
            },
            in2: {
                element: "select",
                type: "filter"
            },
            operator: {
                element: "select",
                options: {
                    over: "over", 
                    in: "in", 
                    out: "out", 
                    atop: "atop", 
                    xor: "xor", 
                    arithmetic: "arithmetic", 
                    lighter: "lighter"
                }
            }
        }, "join_left")
    }
}