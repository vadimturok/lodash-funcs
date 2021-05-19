function indexOf(array, value, start){
    if(start){
        for(let i = start; i < array.length; i++){
            if(array[i] === value) return i
        }
        return -1
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] === value) return i
    }
    return -1
}

console.log(indexOf([2,3,4,3,5], 3, 2))