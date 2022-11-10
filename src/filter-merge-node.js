import Filter from "./filter";

export default class FilterMergeNode extends Filter {
    constructor(name, input){
        super("feMergeNode", {
            in: input
        }, name)
    }
}