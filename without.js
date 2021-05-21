function without(array, ...values){
    let newArray = []
    let toArray = false
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < values.length; j++){
            if(array[i] !== values[j]){
                toArray = true
            }else{
                toArray = false
                break
            }
        }
        if(toArray){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(without([2, 1, 2, 3, 4, 3, 5, 6], 1, 2, 3));