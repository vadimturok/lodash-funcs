function zip(...array){
    let resultArray = []
    let newArray = []
    for(let j = 0; j < array[0].length; j++){
        for(let i = 0; i < array.length; i++){
            newArray.push(array[i][j])
        }
        resultArray.push(newArray)
        newArray = []
    }
    return resultArray
}

console.log(zip(['a', 'b', 'c'], [1, 2, 3], [true, false, true]));