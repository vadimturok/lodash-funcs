var objects = [{ 'x': 4 }, { 'x': 5 }]

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

function sortedIndex(array, item, iterate){
    let newArray = []
    for(let i in array){
        for(let key in array[i]){
            if(key === iterate){
                newArray.push(array[i][key])
            }
        }
    }
    return recursiveBinarySearch(newArray, item[iterate], 0, newArray.length)
}

console.log(sortedIndex(objects, {'x': 5}, 'x'))