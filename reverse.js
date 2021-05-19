function reverse(array){
    for(let i = 0; i < array.length/2; i++){
        let temp = array[i]
        array[i] = array[array.length-i-1]
        array[array.length-i-1] = temp
    }
    return array
}

console.log(reverse([1,2,3,4,5,6]))