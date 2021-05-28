function flatMap(array, callback){
    let newArray = []
    for(let item of array){
        let value = callback(item)
        if(Array.isArray(value)){
            newArray.push(...callback(item))
        }else{
            newArray.push(callback(item))
        }

    }
    return newArray
}


function duplicate(n){
    return [[n*n]]
}
console.log(flatMap([1,2], duplicate))