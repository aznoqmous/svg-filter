let ids = {}
export default class Utils {
    static resetUuids(){
        ids = {}
    }
    static getUuid(string="element"){
        string = string + ""
        if(!ids[string]) ids[string] = 0
        ids[string]++
        return string+ids[string]
    }
}