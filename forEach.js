function forEach(array, callback){
    if(typeof array === 'object'){
        for(let i in array){
            callback(array[i], i)
        }
        return
    }
    for(let i of array){
        callback(i)
    }
}

forEach({'a': 3, 'b': 45}, function (value, key){
    console.log(value)
})