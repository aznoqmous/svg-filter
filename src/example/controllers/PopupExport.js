import Builder from "../builder";
import Popup from "./Popup";

export default class PopupExport extends Popup
{
    static strTemplate = "popup-export"

    bind(){
        super.bind()
        this.input = this.template.element.querySelector('input#filterName')

        ;[...this.template.element.querySelectorAll('input,textarea,select')].map(input => {
            input.addEventListener('input', ()=>{
                Builder.Instance.svgFilter.name = this.input.value
                this.refresh()
            })
        })
        this.input.value = Builder.Instance.svgFilter.name
        this.textarea = this.template.element.querySelector('textarea')
    
        this.form = this.template.element.querySelector('form')
        this.minified = this.template.element.querySelector('#minified')
    }

    getOptions(){
        return Object.fromEntries(new FormData(this.form))
    }

    open(){
        this.refresh()
        super.open()
    }

    refresh(){
        let options = this.getOptions()
        Object.keys(options).map(k => {
            if(options[k])
            {
                Builder.Instance.svgFilter.filters.setAttribute(k, options[k])
                Builder.Instance.resultBuilder.svgFilter.filters.setAttribute(k, options[k])
            }
            else {
                Builder.Instance.svgFilter.filters.removeAttribute(k)
                Builder.Instance.resultBuilder.svgFilter.filters.removeAttribute(k)
            }
            
        })
        let indent = 0
        let fill = "    "
        let html = Builder.Instance.svgFilter.svg.outerHTML
        if(!this.minified.checked) {
            html = html.replace(/&/g, "&amp;")
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
        }
        
        html = html.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        this.textarea.innerHTML = html
    }
}