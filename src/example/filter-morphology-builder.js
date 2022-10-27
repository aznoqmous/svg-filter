import FilterMorphology from "../filter-morphology";
import FilterBuilder from "./filter-builder";

export default class FilterMorphologyBuilder extends FilterBuilder {
    constructor(){
        super("Morphology", FilterMorphology, {
            operator: {
                element: "select",
                options: {
                    erode: "erode",
                    dilate: "dilate"
                }
            },
            radius: {
                step: 0.5
            }
        })
    }
}