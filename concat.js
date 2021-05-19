const array = [1]

function concat(array, ...elements){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
    for(let i = 0; i < elements.length; i++){
        newArray.push(elements[i])
    }
    return newArray
}

console.log(concat(array, 'ZZZ', 4, 123, 'Hello', [[6]]))