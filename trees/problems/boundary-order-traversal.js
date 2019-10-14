// https://www.youtube.com/watch?v=P3kaw87MFk4&list=PLjhq5EHRYAeLdh0xtn2v7wbQsVc8WAB2e&index=14

/*

---CHECK AGAIN---
Left side elements using DFS
Leaf nodes using DFS
Right side nodes in reverse order
*/

const boundaryOrder = (root) => {
    let result = []
    let leftNodes = getLeftNodesExceptLeaves(root, [])
    let leafNodes = getLeafNodes(root, [])
    let rightNodes = getRightNodes(root, [])
    result = [ ...leftNodes, ...leafNodes, ...rightNodes ]
    return result
}

const getLeftNodesExceptLeaves = (root, result) => {
    if (root === null) return result
    if (root.left === null && root.right === null) return result
    result.push(root.data)
    getLeftNodesExceptLeaves(root.left, result)
    return result
}

const getLeafNodes = (root, result) => {
    if (root === null) return result
    if (root.left === null && root.right === null) {
        result.push(root.data)
        return result
    }
    getLeafNodes(root.left, result)
    getLeafNodes(root.right, result)
    return result
}

const getRightNodes = (root, result=[]) => {
    if (root === null) return result
    if (root.left === null && root.right === null) return result
    getRightNodes(root.right, result)
    result.push(result.data)
    return result
}

export default boundaryOrder
