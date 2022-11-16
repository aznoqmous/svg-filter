import Builder from "./builder"
import GraphBox from "./GraphBox"
import WorkSpace from "./WorkSpace"

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
        this.GraphBox = new GraphBox(WorkSpace.Instance.selectable, this.element, [], [])
        
        let outputValues = ["SourceGraphic", "SourceAlpha"] 
        
        this.outputs = []
        outputValues.map(value => {
            let outputHolder = Builder.Instance.createElement("div", {class: "output-holder"}, this.outputsContainer)
            let outputLabel = Builder.Instance.createElement("strong", {}, outputHolder)
            outputLabel.innerHTML = value
            let output = Builder.Instance.createElement('i', { class: "output"}, outputHolder)
            output.key = value
            this.outputs.push(output)
            this.bindOutput(output)
            this.GraphBox.addOutput(output)
        })

        this.fileInput = Builder.Instance.createElement('input', {type: "file"}, this.previewContainer)
        this.fileInput.addEventListener('change', (e)=>{
            this.handleFileSelect(this.fileInput.files[this.fileInput.files.length-1])
        })
    }
    handleFileSelect(file){
        let reader = new FileReader()
        reader.onprogress = (e)=>{
            console.log((Math.floor(e.loaded / e.total ) * 100).toFixed(2) + '%')
        }
        reader.onloadend = (e)=>{
            if (e.target.readyState == FileReader.DONE) {
                let image = document.createElement('img')
                image.src = e.srcElement.result
                Builder.Instance.setTestElement(image)
            }
        }
        reader.readAsDataURL(file)
    }

    bindOutput(output){
        let startLinks = 0
        output.addEventListener('dragstart', ()=>{
            startLinks = output.Links?.length || 0
        })
        output.addEventListener('dragend', ()=>{
            let endLinks = output.Links?.length || 0
            if(startLinks == endLinks) {
                this.selectedOutput = output
                setTimeout(()=> Builder.Instance.showFilterSelect(this))
            }
        })
    }
    connectTo(filterBuilder, key="in"){
        this.GraphBox.link(this.selectedOutput, filterBuilder.getInputByKey(key))
    }
}