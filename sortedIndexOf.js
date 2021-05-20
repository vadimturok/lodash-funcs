function recursiveBinarySearch(array, item, start, end){
    let middle = Math.floor((start+end)/2)
    if(item === array[middle])
        return middle
    if(item < array[middle])
        return recursiveBinarySearch(array, item, 0, middle)
    if(item > array[middle])
        return recursiveBinarySearch(array, item, middle, end)
}

function sortedIndexOf(array, item){
    return recursiveBinarySearch(array, item, 0, array.length)
}

console.log(sortedIndexOf([4, 5, 5, 5, 6, 6], 6))