function pullAt(array, arrayToDel){
    return array.filter(element => arrayToDel.includes(array.indexOf(element)))
}

var array = ['a', 'b', 'c', 'd'];

console.log(pullAt(array, [1,3]))