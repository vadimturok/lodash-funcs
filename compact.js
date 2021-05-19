const array = ['a', 0, false, 'd', 'e', null, 'fg', ' ', 'df']

function compact(array){
    return array.filter(item => (item !== null && item != 0))
}

console.log(compact(array))