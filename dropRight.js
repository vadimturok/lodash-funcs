function drop(array, number){
    let newArray = []
    if(typeof number === 'undefined'){
        newArray = array.slice(0, array.length)
    }else{
        newArray = array.slice(0, array.length-number)
    }
    return newArray
}

console.log(drop([1,2,3], 0))