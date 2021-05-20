let users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];


function takeRightWhile(array, pred){
    let newArray = []
    if(typeof pred === 'function'){
        for(let item in array){
                if(pred(array[item])){
                    newArray.push(array[item][Object.getOwnPropertyNames(array[item])[0]])
                }
        }
    }
    return newArray
}

console.log(takeRightWhile(users, function(o) { return !o.active; }))
