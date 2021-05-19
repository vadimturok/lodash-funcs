var array = [{ 'x': 1 }, {'x': 1}, { 'x': 2 }, { 'x': 3 }, {'x': 4}];

function pullAllBy(array, arrayToDel, iterate){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < arrayToDel.length; j++){
            Object.keys(array[i]).forEach(key => {
                Object.keys(arrayToDel[j]).forEach(key2 => {
                    if(key === iterate && key2 === iterate){
                        if(array[i][key] === arrayToDel[j][key]){
                            array.splice(i, 1)
                        }
                    }
                })
            })
        }
        
    }
    return array
}

console.log(pullAllBy(array, [{ 'x': 1, 'name': 4 }, { 'x': 3 }], 'x'))