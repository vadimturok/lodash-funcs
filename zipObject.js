function zipObject(...array){
    let resultObject = {}
    let newArray = []
    if(array.length > 2)
        return 'Only two arrays allowed'
    for(let j = 0; j < array[0].length; j++){
        for(let i = 0; i < array.length; i++){
            newArray.push(array[i][j])
        }
        resultObject[newArray[0]] = newArray[1]
        newArray = []
    }
    return resultObject
}

console.log(zipObject(['a', 'b', 'name'], [1, 2, 'Vadim']));