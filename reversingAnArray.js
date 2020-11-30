function reverse(array) {
    let newArray = []
    for(let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

function reverseArrayinPlace(array) { // This is faster
    let newArray = []
    for(let i =0; i <= array.length - 1; i++) {
        newArray.unshift(array[i])
    }
    return newArray

}


console.log(reverse([1,2,3]))
console.log(reverseArrayinPlace([1,2,3])) 