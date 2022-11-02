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
            },
            values: {
                element: "table",
                type: "number",
                columns: ["R", "G", "B", "A", "1"],
                rows: ["R", "G", "B", "A"],
                value: [
                    1,0,0,0,0,
                    0,1,0,0,0,
                    0,0,1,0,0,
                    0,0,0,19,-10
                ]
            }
        })
    }
    onUpdate(){
        let values = [...this.fields.values.querySelectorAll('input')].map(input => input.value)
        this.filter.values = values
    }
}