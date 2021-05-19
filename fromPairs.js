function fromPairs(array){
    let newObject = {}
    for(let i = 0; i < array.length; i++){
        newObject[String(array[i][0])] = array[i][1]
    }
    return newObject
}

console.log(fromPairs([['vadim', 17], ['misha', 18]]))
