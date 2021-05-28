function partition(array, callback){
    let newArray = [[], []]
    if(typeof callback === 'function'){
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                newArray[0].push(array[i])
            }else{
                newArray[1].push(array[i])
            }
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
            if(isFound) newArray[0].push(array[i])
            else newArray[1].push(array[i])
        }
        return newArray
    }
}


let users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

console.log(partition(users, { 'age': 1, 'active': false }));