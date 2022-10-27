import FilterSaturate from "../filter-saturate";
import FilterBuilder from "./filter-builder";

export default class FilterSaturateBuilder extends FilterBuilder {
    constructor(){
        super("Saturate", FilterSaturate, {
            value: {
                step: 10
            }
        })
    }
}