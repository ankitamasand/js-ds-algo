const topViewTraversal = (root) => {

    if (root === null) return

    let result = []
    let q = []
    let map = new Map()

    q.push({ node: root, dist: 0 })

    while (q.length) {
        let value = q.shift()
        let { node, dist } = value

        if (!map.has(dist)) {
            map.set(dist, node.data)
        }

        if (node.left) q.push({ node: node.left, dist: dist - 1 })
        if (node.right) q.push({ node: node.right, dist: dist + 1 })
    }

    let sortedKeys = [ ...map.keys() ].sort()

    sortedKeys.forEach(key => {
        result.push(map.get(key))
    })

    return result
}

export default topViewTraversal
