function countBy(array, func){
    let newObject = {}
    let counter = 0
    for(let i = 0; i < array.length; i++){
        let value = func(array[i])
        if(typeof newObject[value] === 'undefined') counter = 0
        newObject[value] = ++counter
    }
    return newObject
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));