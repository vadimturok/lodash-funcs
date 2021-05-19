var array = ['a', 'b', 'c', 'a', 'b', 'c'];

function pullAll(array, arrayToDel){
    return array.filter(element => !arrayToDel.includes(element))
}

console.log(pullAll(array, ['a', 'c']))