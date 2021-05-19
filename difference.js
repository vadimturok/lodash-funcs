function difference(array, exclude){
    let newArray = []
    let isPresent = false
    for(let i = 0; i < array.length; i++){
        isPresent = false
        for(let j = 0; j < exclude.length; j++){
            if(array[i] === exclude[j]){
                isPresent = true
                break
            }
        }
        if(!isPresent){
            newArray.push(array[i])
        }
    }
    return newArray
} 

console.log(difference([2,1, 6, 4], [2,3, 4]))