import Builder from "./builder"
import GraphBox from "./GraphBox"

export default class SourceGraphicBuilder {

    constructor(){
    }

    build(){
        this.element = Builder.Instance.createElement("div", { class: "filter source"}, Builder.Instance.filtersContainer)
        this.element.filterBuilder = this
        this.previewContainer = Builder.Instance.createElement("div", {class:"preview"}, this.element)
        this.previewElement = Builder.Instance.testElement.cloneNode(true)
        this.previewContainer.appendChild(this.previewElement)
        this.outputsContainer = Builder.Instance.createElement("div", { class: "outputs"}, this.element)
        this.GraphBox = new GraphBox(Builder.Instance.selectable, this.element, [], [])
        
        let outputValues = ["SourceGraphic", "SourceAlpha"] 
        
        outputValues.map(value => {
            let outputHolder = Builder.Instance.createElement("div", {class: "output-holder"}, this.outputsContainer)
            let outputLabel = Builder.Instance.createElement("strong", {}, outputHolder)
            outputLabel.innerHTML = value
            let output = Builder.Instance.createElement('i', { class: "output"}, outputHolder)
            output.key = value
            this.GraphBox.addOutput(output)
        })
        
    }
}