import Builder from "./builder";
import Popup from "./controllers/Popup";
import PopupExport from "./controllers/PopupExport";
import PopupHelp from "./controllers/PopupHelp";
import PopupImport from "./controllers/PopupImport";
import PopupLiveTest from "./controllers/PopupLiveTest";
import WorkSpace from "./WorkSpace";

export default class Menu {
    constructor(){
        this.items = {
            rearrange: {
                icon: "reorder",
                title: "Rearrange",
                click: (e)=>{
                    Builder.Instance.reArrangeBuilders()
                }
            },
            alignLeft: {
                icon: "align_horizontal_left",
                title: "Align selected items to left",
                click: (e)=>{
                    WorkSpace.Instance.alignLeft()
                }
            },
            alignTop: {
                icon: "align_vertical_top",
                title: "Align selected items to top",
                click: (e)=>{
                    WorkSpace.Instance.alignTop()
                }
            },
            import: {
                label: "import",
                icon: 'file_upload',
                popup: PopupImport,
            },
            export: {
                label: "export",
                icon: 'file_download',
                popup: PopupExport,
            },
            reset: {
                label: "reset",
                icon: "delete",
                click: (e)=>{
                    Builder.Instance.reset()
                }
            },
            test: {
                label: "Test",
                icon: 'live_tv',
                popup: PopupLiveTest
            },
            help: {
                label: "",
                icon: 'help',
                popup: PopupHelp
            },
            
        }
        this.build()
    }

    build(){
        this.container = Builder.Instance.createElement('ul', { class: "actions" }, document.querySelector('header'))

        Object.values(this.items).map(i => {
            let item = Builder.Instance.createElement('li', {}, this.container)
            let icon = Builder.Instance.createElement('i', {class: "material-symbols-outlined"}, item)
            icon.innerHTML = i.icon
            if(i.label) item.innerHTML += i.label
            if(i.click) item.addEventListener('click', (e)=> i.click(e))
            if(i.popup) {
                i.popup = new i.popup()
                item.addEventListener('click', ()=> i.popup.open())
            }

        })
    }
}

