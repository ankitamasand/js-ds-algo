const leafSimilar = (root1, root2) => {

    let leaves1 = []
    let leaves2 = []

    const dfs = (root, leaves) => {

        if (root.left === null && root.right === null) {
            leaves.push(root.val)
            return
        }

        if (root.left) {
            dfs(root.left, leaves)
        }

        if (root.right) {
            dfs(root.right, leaves)
        }

    }

    dfs(root1, leaves1)
    dfs(root2, leaves2)

    /* Checking if the two arrays leaves1 and leaves2 are equal */
    return leaves1.length === leaves2.length && leaves1.every((element, index) => element === leaves2[index])
}

export default leafSimilar
