function arrayToList(array) {
    let allLists = []
    //Creating all the 'Branches'
    for(let i = 0; i < array.length; i++) {
        if(i == array.length - 1) {
            allLists.push({value: array[i], rest: null})
        } else {
            allLists.push({value: array[i], rest: {}})

        }
    }
    //joining them
    for(let i = 0; i < array.length - 1; i++) {
        allLists[i].rest = allLists[i + 1]
    }
    
    return allLists[0]
}

function listToArray(list) {
    let array = [] 
    while(list.rest !== null) {
        array.push(list.value)  
        var actually = list.rest
        list = actually     
       
    }
    array.push(actually.value)
    
    return array
}


//{value:1, rest: { value: 2, rest: { value: 3, rest: null } } } 

function prepend(element, list) {
    return {value: element, rest: list}
}



function nth(list, number) {
    let numbers = listToArray(list)
    if(numbers.indexOf(number) > -1) {
        return numbers.indexOf(number)
    }
    return undefined
}



console.log(listToArray({value:1, rest:{ value:2, rest: {value:3, rest: null}}}))