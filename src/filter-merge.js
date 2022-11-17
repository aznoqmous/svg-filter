import Filter from "./filter";

export default class FilterMerge extends Filter {
    constructor(name){
        super("feMerge", {}, name)
    }

    createSVGElement(tagName, attributes={}, parent=null){
        return super.createSVGElement(tagName, attributes, parent)
    }
}