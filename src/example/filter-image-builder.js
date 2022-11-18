import FilterImage from "../filter-image";
import FilterBuilder from "./filter-builder";

export default class FilterImageBuilder extends FilterBuilder
{
    constructor(){
        super("Image", FilterImage, {
            href: {
                type: "text"
            },
            x: {},
            y: {},
            width: {},
            height: {}
        })
    }
}