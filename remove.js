let array = [1,2,3,4]

function remove(array, func){
    let newArray = array.filter(item => func(item))
    array.map(item => {
        if(func(item)) array.splice(array.indexOf(item), 1)
    })
    return newArray
}

console.log(remove(array, function(o){
    return o % 2 === 0
}))
console.log(array)