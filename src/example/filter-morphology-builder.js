import FilterMorphology from "../filter-morphology";
import FilterBuilder from "./filter-builder";

export default class FilterMorphologyBuilder extends FilterBuilder {
    constructor(){
        super("Erode/Dilate", FilterMorphology, {
            in: {
                element: "select",
                type: "filter"
            },
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