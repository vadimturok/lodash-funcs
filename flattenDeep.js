let newArray = []

function flattenDeep(array){
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flattenDeep(array[i])
        }else{
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(flattenDeep([1,2,[3, [4, [[12]]]]]))