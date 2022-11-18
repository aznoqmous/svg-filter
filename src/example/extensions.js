Array.prototype.min = function(){
    return this.reduce((prev,current)=> current < prev ? current : prev, 1_000_000_000)
}
Array.prototype.max = function(){
    return this.reduce((prev,current)=> current > prev ? current : prev, -1_000_000_000)
}

window.isCallable = (value) => {
    return typeof value === 'function'
}
