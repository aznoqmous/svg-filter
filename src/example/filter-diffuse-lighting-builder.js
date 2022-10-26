import FilterDiffuseLighting from "../filter-diffuse-lighting";
import FilterPointLight from "../filter-point-light";
import FilterSpotLight from "../filter-spot-light";
import Builder from "./builder";
import FilterBuilder from "./filter-builder";

export default class FilterDiffuseLightingBuilder extends FilterBuilder
{
    constructor(){
        super("Diffuse Lighting", FilterDiffuseLighting)
    }

    render(){
        this.lights = {
            point: new FilterPointLight(this.filter.name + "_point"),
            spot: new FilterSpotLight(this.filter.name + "_spot") 
        }
        super.render()

        this.lightingColorInput = this.createInput({
            type: "text",
            value: this.filter.lightingColor
        })
        this.surfaceScaleInput = this.createInput({
            type: "number",
            value: this.filter.surfaceScale,
            step: 0.1
        })
        this.diffuseConstantInput = this.createInput({
            type: "number",
            value: this.filter.diffuseConstant,
            step: 0.1
        })

        this.lightSelect = Builder.Instance.createSelect(
            Object.fromEntries(Object.keys(this.lights).map(key=> [key,key])),
            this.settings
        )
        this.lightSelect.addEventListener('change', ()=> {
            this.buildLightSettings()
            Builder.Instance.update()
        })
        this.buildLightSettings()
    }

    buildLightSettings(){
        this.filter.setLight(this.lights[this.lightSelect.selectedOptions[0].value])

        if(this.lightSettings) this.lightSettings.remove()

        this.lightSettings = Builder.Instance.createElement("div", {}, this.settings)
        this.lightInputs = {}
        this.lightInputs.x = this.createInput({
            type: "number",
            value: this.filter.light.x
        }, this.lightSettings)
        this.lightInputs.y = this.createInput({
            type: "number",
            value: this.filter.light.y
        }, this.lightSettings)
        this.lightInputs.z = this.createInput({
            type: "number",
            value: this.filter.light.z
        }, this.lightSettings)
        
        if(this.filter.light == this.lights.spot){
            this.lightInputs.limitingConeAngle =  this.createInput({
                type: "number",
                value: this.filter.light.limitingConeAngle,
                step: 0.5
            }, this.lightSettings)
        }
    }

    update(){
        super.update()

        this.filter.lightingColor = this.lightingColorInput.value
        this.filter.surfaceScale = this.surfaceScaleInput.value
        this.filter.diffuseConstant = this.diffuseConstantInput.value

        this.filter.light.x = this.lightInputs.x.value
        this.filter.light.y = this.lightInputs.y.value
        this.filter.light.z = this.lightInputs.z.value

        if(this.lightInputs.limitingConeAngle) this.filter.light.limitingConeAngle = this.lightInputs.limitingConeAngle.value
    }
}