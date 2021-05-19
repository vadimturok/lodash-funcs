function intersection(array1, array2){
    const filteredArray = array1.filter(value => array2.includes(value))
    return filteredArray
}

console.log(intersection([2,1,3], [2,3]))

