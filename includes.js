function includes(array, value, index){
    if(typeof array === 'object'){
        let newArray = Object.values(array)
        for(let i of newArray){
            if(i === value) return true
        }
        return false
    }
    if(typeof index === 'undefined'){
        for(let i of array){
            if(value === i)
                return true
        }
        return false
    }else{
        for(let i = index; i < array.length; i++){
            if(array[i] === value) return true
        }
        return false
    }
}

console.log(includes({ 'a': 1, 'b': 2 }, 3));