import Filter from "./filter";

export default class FilterMergeNode extends Filter {
    constructor(input){
        super("feMergeNode", {
            in: input
        }, "")
    }
}