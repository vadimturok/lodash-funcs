const array = ['a', 'b', 'c', 'd', 'e', 'f']


function chunk(array, size){
    let newArray = []
    const len = Math.ceil(array.length / size)
    for(let i = 0; i < len; i++){
        newArray[i] = array.slice(0, size)
        for(let j = 0; j < size; j++){
            array.shift()
        }
    }
    return newArray
}

console.log(chunk(array, 5))