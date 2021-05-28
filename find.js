function find(array, callback){
    let isFound = false
    let newArray = []
    if(Array.isArray(callback)){
        for(let i = 0; i < array.length; i++){
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
        for(let i = 0; i < array.length; i++){
            if(callback(array[i]))
                newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'object'){
        for(let i = 0; i < array.length; i++){
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

console.log(find(users, ['age', 1]));