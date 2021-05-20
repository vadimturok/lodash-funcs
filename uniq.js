function uniq(array){
    return array.filter((v,i,a) => a.indexOf(v) === i)
}

console.log(uniq([2, 3, 3, 1, 1, 45, 23, 23]));