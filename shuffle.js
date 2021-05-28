function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12]
shuffle(array)
console.log(array)