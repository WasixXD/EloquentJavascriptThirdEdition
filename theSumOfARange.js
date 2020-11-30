function range(start, end, step=1) {
    let arrayNumbers = []
    
    if(start > end) {
        for(let i = start; i >= end; i-= Math.abs(step)) {
            arrayNumbers.push(i)
        }
    } else {
        for(let i = start; i <= end;i+=step) {
            arrayNumbers.push(i)
        }
    }
    return arrayNumbers
}


function sum(array) {
    return array.reduce((accumalator, number) => accumalator+= number) 
}


console.log(range(10, 0, -2))