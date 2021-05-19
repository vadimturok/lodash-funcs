function slice(array, start, end){
    let newArray = []
    for(let i = start; i < end; i++){
        newArray.push(array[i])
    }
    return newArray
}

console.log(slice([1,2,3,4,5], 0, 2))