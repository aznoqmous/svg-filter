export default class Template {
    constructor(strTemplate){
        this.strTemplate = strTemplate
        this.html = require(`./${strTemplate}.html`).default
        this.fragment = document.createRange().createContextualFragment(this.html)
        this.element = this.fragment.firstChild
    }
}