let array = []
let newArray = []

function randomNumber(min, max){
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}

for(let i = 0; i < 10_000; i++)
    array[i] = randomNumber(1,50)

function sortedUnique(array, start, end){
    if(array[start] === array[end]){
        if(newArray.includes(array[start])){
            return
        }
        return newArray.push(array[start])
    }   
    let index = Math.floor((start+end)/2)
    sortedUnique(array, start, index)
    sortedUnique(array, index+1, end)
}


function unique(array){ // the fastest
    return [...new Set(array)]
}

function unique2(array){
    return array.filter((v, i, a) => a.indexOf(v) === i)
}

console.log(unique(array))
