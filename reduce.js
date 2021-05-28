function reduce(array, callback, initialValue){
    let result = initialValue
    if(typeof array === 'object'){
        for(let i in array){
            result = callback(initialValue, array[i], i)
        }
        return result
    }
    array.map(val => result += callback(initialValue, val))
    return result
}

console.log(reduce({'a': 1, 'b': 2, 'c': 1}, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}));