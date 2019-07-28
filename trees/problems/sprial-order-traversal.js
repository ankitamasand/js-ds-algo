const spriralOrderTraversal = (root) => {

    let s1 = []
    let s2 = []
    let result = []
    let node

    console.log('root here', root)

    s1.push(root)

    while (s1.length > 0 || s2.length > 0) {
        while (s1.length > 0) {
            node = s1.pop()
            if (node.left !== null) {
                s2.push(node.left)
            }
            if (node.right !== null) {
                s2.push(node.right)
            }
            result.push(node.data)
        }

        while (s2.length > 0) {
            node = s2.pop()
            if (node.right !== null) {
                s1.push(node.right)
            }
            if (node.left !== null) {
                s1.push(node.left)
            }
            result.push(node.data)
        }
    }

    console.log('result', result)
    return result
}

export default spriralOrderTraversal
