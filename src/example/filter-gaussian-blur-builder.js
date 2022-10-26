import FilterGaussianBlur from "../filter-gaussian-blur";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterGaussianBlurBuilder extends FilterBuilder
{
    constructor(){
        super("Gaussian Blur", FilterGaussianBlur)
    }

    render(settings){
        super.render(settings)
        settings.inputValue = Builder.Instance.createElement('input', {
            type: "number",
            value: 15
        }, settings)
        settings.inputValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
    }

    update(filter, settings, index){
        super.update(filter, settings, index)
        filter.blur = settings.inputValue.value
    }
}