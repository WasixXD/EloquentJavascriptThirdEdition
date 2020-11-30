function deepComparison(value1, value2) {
    if(value1 === value2) {
        return true
    }
    
    if(typeof value1 === "object" && typeof value2 === "object" && (value1 && value2) !== null) {
        let comparison = []
        for(let i in value1) {
            comparison.push(deepComparison(value1[i], value2[i]))
        }
        return comparison
    }
    return false 
}

console.log(deepComparison({value1:1, value2:3 }, {value1:3}))
