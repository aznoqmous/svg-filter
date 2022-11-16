import Builder from "../builder";
import Popup from "./Popup";

export default class PopupImport extends Popup
{
    static strTemplate = "popup-import"

    bind(){
        super.bind()
        this.textarea = this.template.element.querySelector('textarea')
        this.template.element.querySelector('button').addEventListener('click', ()=>{
            Builder.Instance.importFromHTML(this.textarea.value)
            this.close()
        })
    }
}