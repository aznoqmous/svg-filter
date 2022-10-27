import Filter from "./filter";

export default class FilterLuminanceToAlpha extends Filter {
    constructor(name){
        super("feColorMatrix", {
            type: "luminanceToAlpha",
        }, name)
    }
}