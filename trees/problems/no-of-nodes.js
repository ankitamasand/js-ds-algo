/* You can also use BFS to implement this iteratively */

export const numberOfNodes = (root) => {
    if (root === null) return 0

    let countL = inOrderTraversal(root.left)
    let countR = inOrderTraversal(root.right)
    return countL + countR + 1
}

export const numberOfLeafNodes = (root) => {
    if (root === null) return 0

    if (root.left === null && root.right === null) return 1

    let countL = numberOfLeafNodes(root.left)
    let countR = numberOfLeafNodes(root.right)

    return countL + countR
}
