function getRandomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min)) + min
}

function sampleSize(array, size){
    let newArray = []
    let random = getRandomNumber(0, array.length)
    for(let i = 0; i < size; i++){
        while(newArray.includes(array[random])){
            random = getRandomNumber(0, array.length)
        }
        newArray.push(array[random])
    }
    return newArray
}

console.log(sampleSize(['foo', 'bar', 'bzz', 'bb'], 4))