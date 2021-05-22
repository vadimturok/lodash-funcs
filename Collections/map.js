const obj = {
    name: 'Vadim',
    age: 17,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vadim'],
    ['age', 17],
    ['job', 'Fullstack']
]
/*
function entries(object){
    let newArray = []
    let array = []
    Object.keys(object).map(e => {
        array[0] = e
        array[1] = object[e]
        newArray.push(array)
        array = []
    })
    return newArray
}

console.log(entries(obj));*/

const map = new Map(entries)
console.log(map)