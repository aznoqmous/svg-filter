import SvgFilter from "../svg-filter"
import Builder from "./builder"
import GraphBox from "./GraphBox"
import WorkSpace from "./WorkSpace"

export default class ResultBuilder {

    constructor(){
    }

    build(){
        this.element = Builder.Instance.createElement("div", { class: "filter result"}, Builder.Instance.filtersContainer)
        this.element.filterBuilder = this

        this.label = Builder.Instance.createElement('div', { class:"label"}, this.element)
        this.name = Builder.Instance.createElement('div', {class:"name"}, this.label)
        this.name.innerHTML = "Result"

        this.previewContainer = Builder.Instance.createElement("div", {class:"preview"}, this.element)
        this.inputsContainer = Builder.Instance.createElement("div", { class: "inputs"}, this.element)
        this.GraphBox = new GraphBox(WorkSpace.Instance.selectable, this.element, [], [])
        this.input = Builder.Instance.createElement('i', {class: "input"}, this.inputsContainer)
        this.GraphBox.addInput(this.input)

        this.fixedResultPreview = document.querySelector('.resultPreview .preview')
        this.buildPreview()
        this.input.addEventListener('link', ()=> {
            Builder.Instance.reorderBuilders()
            Builder.Instance.update()
        })

    }

    buildPreview(){
        this.svgFilter = new SvgFilter("result_preview")
        this.updatePreview()
    }
    updatePreview(){
        this.previewElement = Builder.Instance.testElement.cloneNode(true)
        this.previewElement.style.filter = `url(#result_preview)`
        this.previewContainer.innerHTML = ""
        this.previewContainer.appendChild(this.previewElement)

        let filters = this.getPreviousFilters()
        this.svgFilter.filters.innerHTML = ""
        this.svgFilter.addFilterClones(filters)
        this.previewContainer.appendChild(this.svgFilter.svg)


        this.fixedResultPreview.innerHTML = ""
        this.fixedResultPreview.appendChild(this.previewElement.cloneNode(true))
    }
    getPreviousFilters(){
        return Builder.Instance.treeWalk(this).map(fb => fb.filter)
    }
    getInputByKey(){
        return this.input
    }
}