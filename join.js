function join(array, char){
    let str = ''
    for(let i = 0; i < array.length; i++){
        if(i === array.length-1) str += array[i]
        else str += array[i] + char
    }
    return str
}

console.log(join([1,2,3], '~'))