import FilterBlend from "../filter-blend";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterBlendBuilder extends FilterBuilder
{
    constructor(){
        super("Blend", FilterBlend)
    }
    update(filter, settings, index){
        let filters = Builder.Instance.filters
        if(filters.length > 1){
            let in1 = filters[index-1]
            filter.in = in1
        }
        if(filters.length > 2){
            let in2 = filters[index-2]
            filter.in2 = in2
        }
        else {
            filter.element.setAttribute('in', "SourceGraphic")    
        }
        super.update(filter, settings, index)
    }
}