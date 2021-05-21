function zipWith(func,...array){
    let resultArray = []
    let newArray = []
    let functionResult
    for(let j = 0; j < array[0].length; j++){
        for(let i = 0; i < array.length; i++){
            newArray.push(array[i][j])
        }
        functionResult = func(...newArray)
        resultArray.push(functionResult)
        newArray = []
    }
    return resultArray
}

console.log(zipWith(function (a,b,c){return a+b+c},[1, 2], [10, 20], [100, 200]));