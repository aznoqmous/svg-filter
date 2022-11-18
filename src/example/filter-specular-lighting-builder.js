import FilterPointLight from "../filter-point-light";
import FilterSpecularLighting from "../filter-specular-lighting";
import FilterSpotLight from "../filter-spot-light";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterSpecularLightingBuilder extends FilterBuilder
{
    constructor(){
        super("Specular Lighting", FilterSpecularLighting, {
            in: {
                element: "select",
                type: "filter"
            },
            lightingColor: {
                type: "text"
            },
            surfaceScale: {},
            specularConstant: {},
            specularExponent: {}
        })
    }

    render(){
        this.lights = {
            point: new FilterPointLight(this.filter.name + "_point"),
            spot: new FilterSpotLight(this.filter.name + "_spot") 
        }
        this.fieldsConfiguration.lightSelect = {
            element: "select",
            options: {
                point: "point",
                spot: "spot"
            }
        }
        super.render()
    }
    update(){
        this.buildLightSettings()
        super.update()
    }

    buildLightSettings(){
        if(this.filter.light === this.lights[this.getFieldValue(this.fields.lightSelect)]) return;
        this.filter.setLight(this.lights[this.getFieldValue(this.fields.lightSelect)])

        if(this.lightSettings) this.lightSettings.remove()

        this.lightSettings = Builder.Instance.createElement("div", {}, this.settings)
        this.lightInputs = {}
        this.lightInputs.x = this.createLightField("x", {
            type: "number",
            value: this.filter.light.x
        }, this.lightSettings)
        this.lightInputs.y = this.createLightField("y", {
            type: "number",
            value: this.filter.light.y
        }, this.lightSettings)
        this.lightInputs.z = this.createLightField("z", {
            type: "number",
            value: this.filter.light.z
        }, this.lightSettings)
        
        if(this.filter.light == this.lights.spot){
            this.lightInputs.limitingConeAngle =  this.createLightField("limitingConeAngle", {
                type: "number",
                value: this.filter.light.limitingConeAngle,
                step: 0.5
            }, this.lightSettings)
        }
    }

    createLightField(key, config, parent=null){
        let container = Builder.Instance.createElement('div', {class: `input-group`}, parent)
        let label = Builder.Instance.createElement('strong', {}, container)
        label.innerHTML = key
        let input = this.createInput(config, container)
        return input
    }

    onUpdate(){
        this.filter.light.x = this.lightInputs.x.value
        this.filter.light.y = this.lightInputs.y.value
        this.filter.light.z = this.lightInputs.z.value

        if(this.lightInputs.limitingConeAngle) this.filter.light.limitingConeAngle = this.lightInputs.limitingConeAngle.value
    }
}