import FilterBlend from "../filter-blend";
import FilterMerge from "../filter-merge";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterMergeBuilder extends FilterBuilder
{
    constructor(){
        super("Merge", FilterMerge, {})
    }
}