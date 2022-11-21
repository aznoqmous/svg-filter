import FilterFunc from "../filter-func";
import FilterBuilder from "./filter-builder";

export default class FilterFuncBuilder extends FilterBuilder
{
    constructor(tagName="feFuncR"){
        super("Component", FilterFunc, {
            type: {
                element: "select",
                options: {
                    identity: "identity",
                    table: "table",
                    discrete: "discrete",
                    linear: "linear",
                    gamma: "gamma"
                }
            },
            tableValues: {
                value: "",
                show: {
                    type: "table|discrete"
                }
            },
            slope: {
                value: 1,
                show: {
                    type: "linear"
                }
            },
            intercept: {
                value: 0,
                show: {
                    type: "linear"
                }
            },
            amplitude:
            {
                value: 1,
                show: {
                    type: "gamma"
                }
            },
            exponent: {
                value: 1,
                show: {
                    type: "gamma"
                }
            },
            offset: {
                value: 0,
                show: {
                    type: "gamma"
                }
            }
        })

        this.tagName = tagName
        this.filter = new FilterFunc(null, this.tagName)
    }
    
    render(){
        super.render()
        this.fields.type.addEventListener('input', ()=>{
            this.updateFields()
        })
    }

    createField(key, config){
        let field = super.createField(key, config)
        field.addEventListener('input', ()=> this.update())
        return field
    }

    setFilter(filterClass){
        if(!filterClass) return;
        if(this.filter) this.filter = new filterClass(this.filter.name, this.tagName)
        else this.filter = new filterClass(this.filter.name, this.tagName)
    }

    buildPreview(){}
    updatePreview(){}

}