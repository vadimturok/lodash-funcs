function pull(array){
   return array.filter(element => !Object.values(arguments).includes(element))
}

console.log(pull([1,2,3,4, 'b', 'a'], 'b','a'))