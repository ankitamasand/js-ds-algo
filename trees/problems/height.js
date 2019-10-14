const treeHeight = (root) => {
    if (root === null) {
        return 0
    }

    let leftHeight = treeHeight(root.left)
    let rightHeight = treeHeight(root.right)

    return Math.max(leftHeight, rightHeight) + 1
}

export default treeHeight
