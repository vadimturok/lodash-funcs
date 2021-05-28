function findLast(array, callback){
    let isFound = false
    let newArray = []
    if(Array.isArray(callback)){
        for(let i = array.length-1; i > 0; i--){
            isFound = false
            for(let key in array[i]){
                if(key === callback[0]){
                    if(callback[1] === array[i][key])
                        isFound = true
                }
                if(isFound) break
            }
            if(isFound) newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'function'){
        for(let i = array.length-1; i > 0; i--){
            if(callback(array[i]))
                newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'object'){
        for(let i = array.length-1; i > 0; i--){
            for(let prop in callback){
                for(let prop2 in array[i]){
                    if(prop === prop2){
                        if(array[i][prop] !== callback[prop]){
                            isFound = false
                        }else{
                            isFound = true
                        }
                    }
                }
                if(!isFound) break
            }
            if(isFound) newArray.push(array[i])
        }
        return newArray
    }
}

let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

console.log(findLast([1, 2, 3, 4], function(n) {
    return n % 2 === 1}))