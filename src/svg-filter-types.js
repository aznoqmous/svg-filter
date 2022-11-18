import FilterMergeNode from "./filter-merge-node";
import FilterBlend from "./filter-blend";
import FilterColorMatrix from "./filter-color-matrix";
import FilterComposite from "./filter-composite";
import FilterDiffuseLighting from "./filter-diffuse-lighting";
import FilterDisplacementMap from "./filter-displacement-map";
import FilterGaussianBlur from "./filter-gaussian-blur";
import FilterHueRotate from "./filter-hue-rotate";
import FilterLuminanceToAlpha from "./filter-luminance-to-alpha";
import FilterMerge from "./filter-merge";
import FilterMorphology from "./filter-morphology";
import FilterOffset from "./filter-offset";
import FilterPointLight from "./filter-point-light";
import FilterSaturate from "./filter-saturate";
import FilterSpecularLighting from "./filter-specular-lighting";
import FilterSpotLight from "./filter-spot-light";
import FilterTurbulence from "./filter-turbulence";
import FilterFlood from "./filter-flood";
import FilterConvolveMatrix from "./filter-convolve-matrix";
import FilterImage from "./filter-image";
import FilterTile from "./filter-tile";

export const SvgFilterTypes = [
    FilterBlend,
    FilterColorMatrix,
    FilterConvolveMatrix,
    FilterComposite,
    FilterDiffuseLighting,
    FilterSpecularLighting,
    FilterDisplacementMap,
    FilterGaussianBlur,
    FilterHueRotate,
    FilterLuminanceToAlpha,
    FilterMorphology,
    FilterOffset,
    FilterPointLight,
    FilterSaturate,
    FilterSpecularLighting,
    FilterSpotLight,
    FilterTurbulence,
    FilterMerge,
    FilterMergeNode,
    FilterFlood,
    FilterImage,
    FilterTile
]

export class SvgFilterTypesManager {
    static getFiltersByTagName(tagName){
        return SvgFilterTypes.map(f => new f()).filter(f => f.element.tagName == tagName)
    }
}