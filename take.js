function take(array, n){
    if(typeof n === 'undefined')
        return array.slice(0, 1)
    else return array.slice(0, n)
}

console.log(take([1,2,3], 0))