const binaryTree = {
    value: 6,
    left: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 1
            }
        },
        right: {
            value: 7
        }
    },
    right: {
        value: 10,
        left: {
            value: 4,
        },
        right: {
            value: 5,
            right: {
                value: 2
            }
        }
    }
}

function sumTree(tree){
    let sum = 0
    sum += tree.value
    if(tree.left)
        sum += sumTree(tree.left)
    if(tree.right)
        sum += sumTree(tree.right)
    return sum

}

console.log(sumTree(binaryTree));