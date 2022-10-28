import Builder from "./builder"
import GraphBox from "./GraphBox"

export default class ResultBuilder {

    constructor(){
    }

    build(){
        this.element = Builder.Instance.createElement("div", { class: "filter result"}, Builder.Instance.filtersContainer)
        this.element.filterBuilder = this
        this.previewContainer = Builder.Instance.createElement("div", {class:"preview"}, this.element)
        this.inputsContainer = Builder.Instance.createElement("div", { class: "inputs"}, this.element)
        this.GraphBox = new GraphBox(Builder.Instance.selectable, this.element, [], [])
        this.input = Builder.Instance.createElement('i', {class: "input"}, this.inputsContainer)
        this.GraphBox.addInput(this.input)

        this.updatePreview()

        this.input.addEventListener('link', ()=> {
            Builder.Instance.reorderBuilders()
        })
    }

    updatePreview(){
        this.previewElement = Builder.Instance.testElement.cloneNode(true)
        this.previewElement.style.filter = `url(#${Builder.Instance.testName})`
        this.previewContainer.appendChild(this.previewElement)
    }

    getPreviousFilters(){
        let index = Builder.Instance.filters.map(f => f.name).indexOf(this.filter.name)
        if(index == -1) return Builder.Instance.filters
        return Builder.Instance.filters.slice(0, index)
    }
}