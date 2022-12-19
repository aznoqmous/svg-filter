import FilterImage from "../filter-image";
import FilterBuilder from "./filter-builder";

export default class FilterImageBuilder extends FilterBuilder
{
    constructor(){
        super("Image", FilterImage, {
            href: {
                type: "file"
            },
            x: {},
            y: {},
            width: {},
            height: {}
        }, "image")
    }
    build(){
        super.build()
        this.addEventListener('fileLoaded', ()=>{
            let image = new Image()
            image.onload = ()=>{
                this.filter.width = image.naturalWidth
                this.filter.height = image.naturalHeight
                this.fields.width.value = image.naturalWidth
                this.fields.height.value = image.naturalHeight
                this.update()
            }
            image.src = this.fields.href._value
        })
    }
}
