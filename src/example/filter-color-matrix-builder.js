import FilterColorMatrix from "../filter-color-matrix";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterColorMatrixBuilder extends FilterBuilder
{
    constructor(){
        super("Color Matrix", FilterColorMatrix)
    }

    render(settings){
        super.render(settings)
        settings.inputValue = Builder.Instance.createElement('textarea', {
            type: "number"
        }, settings)
        settings.inputValue.value = [
            1,0,0,0,0,
            0,1,0,0,0,
            0,0,1,0,0,
            0,0,0,19,-10
        ].join(' ')
        settings.inputValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
    }

    update(filter, settings, index){
        super.update(filter, settings, index)
        if(Builder.Instance.lastFilter) filter.in = Builder.Instance.lastFilter
        filter.values = settings.inputValue.value.split(' ')
    }
}