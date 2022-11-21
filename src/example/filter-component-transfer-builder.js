import FilterComponentTransfer from "../filter-component-transfer";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";
import FilterFuncBuilder from "./filter-func-builder";

export default class FilterComponentTransferBuilder extends FilterBuilder
{
    constructor(){
        super("Component Transfer", FilterComponentTransfer, {
            in: {
                element: "select",
                type: "filter"
            }
        })
    }
}