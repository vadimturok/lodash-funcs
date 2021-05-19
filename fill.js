let array = [1,2,3]

function fill(array, value, start, end){
    if(typeof start === 'undefined' && typeof end === 'undefined'){
        return array.map(item => item = value)
    }else{
        for(let i = start; i < end; i++){
            array[i] = value
        }
        return array
    }
}

console.log(fill(array, 'a', 0, 2  ))

