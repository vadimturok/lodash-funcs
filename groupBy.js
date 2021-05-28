function groupBy(array, prop){
    let obj = {}
    if(typeof prop === 'function'){
        for(let i of array){
            if(obj.hasOwnProperty(prop(i))){
                obj[prop(i)].push(i)
            }else{
                obj[prop(i)] = [i]
            }
        }
    }
    return obj
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))