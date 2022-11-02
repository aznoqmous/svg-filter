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
                columns: ["X", "Y", "Z"],
                rows: ["X", "Y", "Z"],
                value: [
                    3, 0, 0,
                    0, 0, 0,
                    0, 0, -3
                ]
            }
        })
    }
    onUpdate(){
        let values = [...this.fields.kernelMatrix.querySelectorAll('input')].map(input => input.value)
        this.filter.kernelMatrix = values
    }
}