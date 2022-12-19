import FilterConvolveMatrix from "../filter-convolve-matrix";
import FilterBuilder from "./filter-builder";

export default class FilterConvolveMatrixBuilder extends FilterBuilder
{
    constructor(){
        super("Convolve Matrix", FilterConvolveMatrix, {
            in: {
                element: "select",
                type: "filter"
            },
            kernelMatrix: {
                element: "table",
                type: "number",
                columns: ()=> this.filter ? Array(this.filter.columns).fill('') : [],
                rows: ()=> this.filter ? Array(this.filter.rows).fill('') : [],
                value: ()=> this.filter ? Array(this.filter.columns).fill('').map(c => Array(this.filter.rows).fill(0).join(',')).join(',').split(',') : ""
            }
        }, "apps")
    }
    onUpdate(){
        let values = [...this.fields.kernelMatrix.querySelectorAll('input')].map(input => input.value)
        this.filter.kernelMatrix = values
    }

}