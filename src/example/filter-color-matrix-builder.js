import FilterColorMatrix from "../filter-color-matrix";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterColorMatrixBuilder extends FilterBuilder
{
    constructor(){
        super("Color Matrix", FilterColorMatrix, {
            in: {
                element: "select",
                type: "filter"
            }
        })
    }

    render(){
        super.render()
        this.settings.inputValue = Builder.Instance.createElement('textarea', {
            type: "number"
        }, this.settings)
        this.settings.inputValue.value = [
            1,0,0,0,0,
            0,1,0,0,0,
            0,0,1,0,0,
            0,0,0,19,-10
        ].join(' ')
        this.settings.inputValue.addEventListener('input', ()=>{
            Builder.Instance.update()
        })
    }

    onUpdate(){
        this.filter.values = this.settings.inputValue.value.split(' ')
    }
}