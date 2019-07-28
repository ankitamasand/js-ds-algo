const mirrorTree = (root) => {

    if (root.left === null && root.right === null) {
        return
    }

    if (root.left) {
        mirrorTree(root.left)
    }

    if (root.right) {
        mirrorTree(root.right)
    }

    let temp = root.left
    root.left = root.right
    root.right = root.left

    return root

}

export default mirrorTree
