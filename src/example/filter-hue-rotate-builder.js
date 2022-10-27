import FilterHueRotate from "../filter-hue-rotate";
import FilterBuilder from "./filter-builder";

export default class FilterHueRotateBuilder extends FilterBuilder {
    constructor(){
        super("Hue Rotate", FilterHueRotate, {
            value: {}
        })
    }
}