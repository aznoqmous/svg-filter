import Builder from "../builder";
import Popup from "./Popup";

export default class PopupLiveTest extends Popup
{
    static strTemplate = "popup-live-test"

    bind(){
        super.bind()
        this.urlInput = this.template.element.querySelector('input#url')
        this.form = this.template.element.querySelector('form')
        
        this.code = this.template.element.querySelector('code')
        this.code.innerHTML = this.code.innerHTML.replace('{{origin}}', window.location.origin)

        this.popup = null
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault()
            this.popup = window.open(this.urlInput.value)
            this.popupURL = this.urlInput.value
        })
    }

    send(){
        if(!this.popup) return;
        this.popup.postMessage(Builder.Instance.svgFilter.svg.outerHTML, this.popupURL)
    }
}