var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

function findIndex(array, callback){
    let index = 0
    if(typeof callback === 'function'){
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                return i
            }
        }
    }else if(Array.isArray(callback)){
        for(let i = 0; i < array.length; i++){
            for(let j = 0; j < callback.length; j++){
                for(let prop in array[i]){
                    if(j % 2 === 0){
                       if(array[i][prop] === callback[j+1]){
                           return i
                       } 
                    }
                }
            }
        }

    }else if(typeof callback === 'object'){
        for(let i = 0; i < array.length; i++){
            index = 0
            for(let prop in array[i]){
                for(let prop2 in callback){
                    if(array[i][prop] === callback[prop2]){
                        index++
                    }
                    if(index === 2){
                        return i
                    }
                }
            }
        }
    }
}

console.log(findIndex(users, { 'user': 'fred', 'active': false }))