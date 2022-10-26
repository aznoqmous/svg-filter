import FilterOffset from "../filter-offset";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterOffsetBuilder extends FilterBuilder
{
    constructor(){
        super("Offset", FilterOffset)
    }

    render(){
        super.render()
        this.settings.inputXValue = Builder.Instance.createElement('input', {
            type: "number",
            value: 15
        }, this.settings)
        this.settings.inputXValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
        this.settings.inputYValue = Builder.Instance.createElement('input', {
            type: "number",
            value: 15
        }, this.settings)
        this.settings.inputYValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
    }

    update(){
        super.update()
        this.filter.x = this.settings.inputXValue.value || 0
        this.filter.y = this.settings.inputYValue.value || 0
    }
}