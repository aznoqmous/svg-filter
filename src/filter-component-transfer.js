import Filter from "./filter"

export default class FilterComponentTransfer extends Filter {
    constructor(name, input=null){
        super("feComponentTransfer", {
            in: input,
        }, name)
    }
}