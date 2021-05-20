function unzip(array){
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

let zipped = zip(['a', 'b'], [1, 2], [true, false]);
console.log(unzip(zipped));