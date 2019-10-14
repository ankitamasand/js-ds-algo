const maxLevelSum = (root) => {

    if (!root) return 0

    let q = [root]
    let level = 0
    let sum = 0
    let maxSum = 0
    let result = 0
    let count = 0

    while (q.length > 0) {
        sum = 0
        count = q.length
        level += 1

        while (count > 0) {
            let node = q.pop()
            sum += node.val

            if (node.left !== null) {
                q.push(node.left)
            }

            if (node.right !== null) {
                q.push(node.right)
            }

            count -= 1
        }

        if (sum > maxSum) {
            maxSum = sum
            result = level
        }
    }

    return result
}

export default maxLevelSum
