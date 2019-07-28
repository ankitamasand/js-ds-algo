const isUnivalTree = (node) => {
    let value = node.data
    let unival = true

    const traverse = (node) => {
        if (!unival) return
        if (node.data !== value) {
            unival = false
        }

        if (node.left) {
            traverse(node.left)
        }

        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(node)
    return unival
}

export default isUnivalTree
