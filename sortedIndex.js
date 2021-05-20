const array = [10,20,30,40,50,60,70,80,90,100,110,120]

function recursiveBinarySearch(array, item, start, end){
    let middle = Math.floor((start+end)/2)
    if(item === array[middle])
        return middle
    if(item < array[middle] && item > array[middle-1])
        return middle
    if(item < array[middle])
        return recursiveBinarySearch(array, item, 0, middle)
    if(item > array[middle])
        return recursiveBinarySearch(array, item, middle, end)
}

function sortedIndex(array, item){
    return recursiveBinarySearch(array, item, 0, array.length)
}

console.log(sortedIndex(array, 45))

