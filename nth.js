function nth(array, index){
    if(index < 0){
        index *= -1
        let num = array.length - index
        return array[num]
    }
    for(let i = 0; i < array.length; i++){
        if(i === index) return array[i]
    }
}

console.log(nth([1,2,3,4,5], 2))