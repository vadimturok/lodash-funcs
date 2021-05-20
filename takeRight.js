function takeRight(array, n){
    if(typeof n === 'undefined')
        return array.slice(array.length-1, array.length)
    if(n >= array.length)
        return array
    else return array.slice(array.length-n, array.length+1)
}

console.log(takeRight([1,2,3], 0))