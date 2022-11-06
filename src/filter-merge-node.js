import Filter from "./filter";

export default class FilterMerge extends Filter {
    constructor(name, input){
        super("feBlend", {
            in: input
        }, name)
    }
}