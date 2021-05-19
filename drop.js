function drop(array, number){
    let newArray = []
    if(typeof number === 'undefined'){
        newArray = array.slice(1, array.length+1)
    }else{
        newArray = array.slice(number, array.length+1)
    }
    return newArray
}

console.log(drop([1,2,3,4,5], 4))
