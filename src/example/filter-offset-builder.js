import FilterOffset from "../filter-offset";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterOffsetBuilder extends FilterBuilder
{
    constructor(){
        super("Offset", FilterOffset, {
            x: {},
            y: {}
        })
    }
}