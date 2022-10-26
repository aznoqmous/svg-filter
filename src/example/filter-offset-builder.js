import FilterOffset from "../filter-offset";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterOffsetBuilder extends FilterBuilder
{
    constructor(){
        super("Offset", FilterOffset)
    }

    render(settings){
        super.render(settings)
        settings.inputXValue = Builder.Instance.createElement('input', {
            type: "number",
            value: 15
        }, settings)
        settings.inputXValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
        settings.inputYValue = Builder.Instance.createElement('input', {
            type: "number",
            value: 15
        }, settings)
        settings.inputYValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
    }

    update(filter, settings, index){
        super.update(filter, settings, index)
        filter.x = settings.inputXValue.value || 0
        filter.y = settings.inputYValue.value || 0
    }
}