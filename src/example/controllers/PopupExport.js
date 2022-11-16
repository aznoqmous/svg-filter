import Builder from "../builder";
import Popup from "./Popup";

export default class PopupExport extends Popup
{
    static strTemplate = "popup-export"

    bind(){
        super.bind()
        this.input = this.template.element.querySelector('input#filterName')
        this.input.addEventListener('input', ()=>{
            Builder.Instance.svgFilter.name = this.input.value
            this.refresh()
        })
        this.input.value = Builder.Instance.svgFilter.name
        this.textarea = this.template.element.querySelector('textarea')
    }
    open(){
        this.refresh()
        super.open()
    }
    refresh(){
        let indent = 0
        let fill = "    "
        let html = Builder.Instance.svgFilter.svg.outerHTML.replace(/&/g, "&amp;")
        .replace(/\>\</g, ">_newline_<")
        .split("_newline_")
        .map(line => {
            let add = !line.match(/^\<\//)
            if(!add) indent--
            line = Array(indent).fill(fill).join('') + line
            if(add) indent++
            return line
        })
        .join('\r\n')
        html = html.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        this.textarea.innerHTML = html
    }
}