const rightSideView = (root) => {

    if (!root) return []

    let q = []
    q.push(root)

    let size = 0
    let result = []
    let level = 0

    while (q.length) {
        let size = q.length
        level += 1

        while (size > 0) {
            let node = q.shift()
            size -= 1

            result[level - 1] = node.val

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    return result
}

export default rightSideView
