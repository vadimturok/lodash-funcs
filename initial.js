function initial(array){
    let newArray = []
    for(let i = 0; i < array.length-1; i++){
        newArray.push(array[i])
    }
    return newArray
}  

console.log(initial([1,2,3,4]))