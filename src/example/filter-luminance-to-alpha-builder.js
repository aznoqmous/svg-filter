import FilterLuminanceToAlpha from "../filter-luminance-to-alpha";
import FilterBuilder from "./filter-builder";

export default class FilterLuminanceToAlphaBuilder extends FilterBuilder {
    constructor(){
        super("Luminance to alpha", FilterLuminanceToAlpha)
    }
}