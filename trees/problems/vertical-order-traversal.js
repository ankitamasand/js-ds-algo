const verticalOrderTraversal = (root) => {

    console.log('root', root)

    if (root === null) return

    let q = []
    let map = new Map()
    let result = []

    q.push({
        node: root,
        dist: 0
    })

    while (q.length > 0) {
        let currentNode = q.shift()
        let { dist, node } = currentNode

        if (map.has(dist)) {
            /* Appending the node data to an alreay existing array value against the key dist */
            map.get(dist).push(node.data)
        } else {
            map.set(dist, [node.data])
        }

        if (node.left) q.push({ node: node.left, dist: dist - 1 })
        if (node.right) q.push({ node: node.right, dist: dist + 1 })
    }

    /* Sorting the map based on the value of keys (Constructing a treemap) -- For now, sorting the keys (TBD)
    */

    let sortedKeys = [ ...map.keys() ].sort()

    sortedKeys.forEach (line => {
        result = result.concat(map.get(line))
    })

    return result
}

export default verticalOrderTraversal
