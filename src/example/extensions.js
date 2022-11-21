Array.prototype.min = function(){
    return this.reduce((prev,current)=> current < prev ? current : prev, 1_000_000_000)
}
Array.prototype.max = function(){
    return this.reduce((prev,current)=> current > prev ? current : prev, -1_000_000_000)
}
Array.prototype.average = function(){
    let total = 0
    this.map(v => total+=v)
    return total/this.length
}

window.isCallable = (value) => {
    return typeof value === 'function'
}
