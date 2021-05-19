function differenceBy(array, exclude, iterate){
    let newArray = []
    let isPresent = false
    if(typeof iterate === 'string'){
        for(let i = 0; i < array.length; i++){
            Object.values(array[i]).forEach(key => {
                isPresent = false
                for(let j = 0; j < exclude.length; j++){
                    Object.values(exclude[j]).forEach(val => {
                        if(key === val){
                            isPresent = true
                        }
                    })
                    if(!isPresent){
                        newArray.push(key)
                    }
                }
            })
        }
    }else{
        for(let i = 0; i < array.length; i++){
            isPresent = false
            for(let j = 0; j < exclude.length; j++){
                if(typeof iterate === 'function'){
                    array[i] = iterate(array[i])
                    exclude[j] = iterate(exclude[j])
                }
                if(array[i] === exclude[j]){
                    isPresent = true
                    break
                }
            }
            if(!isPresent){
                newArray.push(array[i])
            }
        }
    }
    return newArray
}

console.log(differenceBy([2.1, 4.5], [4.1, 3.2, 2.4], Math.floor))