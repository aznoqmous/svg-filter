import FilterGaussianBlur from "../filter-gaussian-blur";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterGaussianBlurBuilder extends FilterBuilder
{
    constructor(){
        super("Gaussian Blur", FilterGaussianBlur)
    }

    render(){
        super.render()
        this.settings.inputValue = this.createInput({
            value: 10,
            type: "number"
        })
    }

    update(){
        super.update()
        this.filter.blur = this.settings.inputValue.value
    }
}