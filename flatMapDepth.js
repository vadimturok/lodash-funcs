let newItem = []
function flatMapDeep(array, callback, times){
    let result = []
    for(let item of array){
        newItem = []
        let value = callback(item)
        if(Array.isArray(value)){
            value = flattenDeep(value, times)
            if(value.length >= 1){
                for(let val of value)
                    result.push(val)
            }
        }
    }
    return result
}

function flattenDeep(array, times){
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flattenDeep(array[i])
        }else{
            newItem.push(array[i])
        }
    }
    return newItem
}

function duplicate(n){
    return [[[n,n]]]
}
console.log(flatMapDeep([1,2], duplicate, 2))