const levelOrder = (root) => {
    let result = []

    if (!root) return result

    let bfsQueue = [root]
    let level = -1
    let size = 0

    const bfs = () => {
        while (bfsQueue.length > 0) {
            size = bfsQueue.length
            level += 1

            while (size > 0) {
                let node = bfsQueue.shift()
                size -= 1

                if (!result[level]) result[level] = []
                result[level].push(node.data)

                if (node.left) {
                    bfsQueue.push(node.left)
                }

                if (node.right) {
                    bfsQueue.push(node.right)
                }
            }
        }
    }

    bfs()
    return result
}

export default levelOrder
