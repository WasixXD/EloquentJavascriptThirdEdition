function countBs(string) {
    return countChar(string, "B")
}

function countChar(string, char) {
    let c = 0
    for(let i in string) {
        if(string[i] == char) {
            c++
        }
    }
    return `The letter ${char} appeared ${c} times`
}

console.log(countBs("Barbecue"))