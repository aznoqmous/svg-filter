import FilterGaussianBlur from "../filter-gaussian-blur";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterGaussianBlurBuilder extends FilterBuilder
{
    constructor(){
        super("Gaussian Blur", FilterGaussianBlur, {
            in: {
                element: "select",
                type: "filter"
            },
            blur: {}
        }, 'blur_on')
    }
}