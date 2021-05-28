function every(array, callback){
    if(callback === Boolean){
        for(let i = 0; i < array.length; i++){
            if(typeof array[i] !== 'boolean')
                return false
        }
        return true
    }
    if(Array.isArray(callback)){
        let isNotEqual = false
        for(let i = 0; i < array.length; i++){
            isNotEqual = false
            Object.keys(array[i]).map(key => {
                if(callback[0] === key){
                    if(callback[1] !== array[i][key]){
                        isNotEqual = true
                    }
                }
            })
            if(isNotEqual) return false
        }
        return true
    }
    if(typeof callback === 'string'){
        let isNotEqual = false
        for(let i = 0; i < array.length; i++){
            Object.keys(array[i]).map(key => {
                if(key === callback && !array[i][key]){
                    isNotEqual = true
                }
            })
            if(isNotEqual) return false
        }
        return true
    }
    if(typeof callback === 'object'){
        for(let i = 0; i < array.length; i++){
            if(JSON.stringify(array[i]) !== JSON.stringify(callback))
                return false
        }
        return true
    }

}

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barney',   'age': 40, 'active': true   }
];

console.log(every(users, 'active'));
