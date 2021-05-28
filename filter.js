function filter(array, callback){
    let newArray = []
    let isFound = false
    if(Array.isArray(callback)){
        let isEqual = false
        for(let i = 0; i < array.length; i++){
            isEqual = false
            Object.keys(array[i]).map(key => {
                if(callback[0] === key){
                    if(callback[1] === array[i][key]){
                        isEqual = true
                    }
                }
            })
            if(isEqual) newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'string'){
        let isEqual = false
        for(let i = 0; i < array.length; i++){
            isEqual = false
            Object.keys(array[i]).map(key => {
                if(key === callback && array[i][key]){
                    isEqual = true
                }
            })
            if(isEqual) newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'object'){
        for(let i = 0; i < array.length; i++){
            for(let prop in callback){
                for(let prop2 in array[i]){
                    if(prop === prop2){
                        if(callback[prop] !== array[i][prop]) isFound = false
                        else isFound = true
                    }
                }
                if(!isFound) break
            }
            if(isFound) newArray.push(array[i])
        }
        return newArray
    }
    if(typeof callback === 'function'){
        for(let i = 0; i < array.length; i++){
            if(callback(array[i])){
                newArray.push(array[i])
            }
        }
        return newArray
    }
}

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 36, 'active': false }
];

console.log(filter(users, 'active'));