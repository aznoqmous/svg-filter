import FilterTile from "../filter-tile";
import FilterBuilder from "./filter-builder";

export default class FilterTileBuilder extends FilterBuilder
{
    constructor(){
        super("Tile", FilterTile, {
            in: {
                element: "select",
                type: "filter"
            },
            x: {},
            y: {},
            width: {},
            height: {}
        })
    }
}