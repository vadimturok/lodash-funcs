function getRandomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min)) + min
}

function sample(array){
    return array[getRandomNumber(0, array.length)]
}

console.log(sample([1,2,3,4,5,6,7]))