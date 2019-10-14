const increasingBST = (node) => {

    let result = []
    const inorderTraversal = (node) => {
        if (node.left) {
            inorderTraversal(node.left)
        }
        result.push(node)
        if (node.right) {
            inorderTraversal(node.right)
        }
    }
    inorderTraversal(node)

    console.log('result here', result)

    let root = result[0]
    node = result[0]
    console.log('result', result)
    for (let i = 1; i < result.length; i++) {
        node.right = result[i]
        node.left = null
        node = node.right
    }

    console.log('increasingBST', node)
    return root
}

export default increasingBST
