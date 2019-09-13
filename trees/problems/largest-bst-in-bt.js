/* Implement this properly -- Find the largest binary search tree in a binary tree */

const isValidBST = (leftValue, rightValue) => {
    if (leftValue && rightValue && leftValue.isBST === true && rightValue.isBST === true) {
        if (root.data >= leftValue.max && root.data < rightValue.min) {
            return leftValue.size + rightValue.size + 1
        }

        return Math.max(leftValue.size, rightValue.size)
    }

    if (leftValue && leftValue.isBST === true) {
        if (root.data >= leftValue.max) {
            return leftValue.size + 1
        }
        return leftValue.size
    }

    if (rightValue && rightValue.isBST === true) {
        if (root.data < rightValue.min) {
            return rightValue.size + 1
        }
        return rightValue.size
    }
}

const findBST = (root) => {
    if (root === null) return 0
    let leftValue = largestSubtree(root.left)
    let rightValue = largestSubtree(root.right)

    console.log('leftValue', leftValue)
    console.log('rightValue', rightValue)

    if (leftValue && rightValue) {
        if (leftValue.isBST === true && rightValue.isBST === true) {
            if (root.data >= leftValue.max && root.data < rightValue.min) {
                return leftValue.size + rightValue.size + 1
            }
        }
    }

    if (leftValue) {
        if (leftValue.isBST === true && root.data >= leftValue.max) {
            return leftValue.size + 1
        } else {
            return leftValue.size
        }
    }
    if (rightValue) {
        if (rightValue.isBST === true && root.data < rightValue.min) {
            return rightValue.size + 1
        } else {
            return rightValue.size
        }
    }
}

const largestSubtree = (root) => {

    if (root === null) return 0
    if (root.left === null && root.right === null) {
        console.log('root.data', root.data)
        return {
            isBST: true,
            min: root.data,
            max: root.data,
            size: 1
        }
    }
    let leftValue = null
    let rightValue = null

    if (root.left) {
        leftValue = largestSubtree(root.left)
    }

    if (root.right) {
        rightValue = largestSubtree(root.right)
    }

    if (leftValue && rightValue) {
        if (leftValue.isBST === true && rightValue.isBST === true) {
            if (root.data >= leftValue.max && root.data < rightValue.min) {
                return {
                    isBST: true,
                    min: leftValue.min,
                    max: rightValue.max,
                    size: leftValue.size + rightValue.size + 1
                }
            }
        } else {
            return {
                isBST: false,
                min: leftValue.min,
                max: rightValue.max,
                size: Math.max(leftValue.size, rightValue.size)
            }
        }
    }

    if (leftValue) {
        if (leftValue.isBST === true && root.data >= leftValue.max) {
            return {
                isBST: true,
                min: leftValue.min,
                max: leftValue.max,
                size: leftValue.size + 1
            }
        } else {
            return {
                isBST: false,
                min: leftValue.min,
                max: leftValue.max,
                size: leftValue.size
            }
        }
    }
    if (rightValue) {
        if (rightValue.isBST === true && root.data < rightValue.min) {
            return {
                isBST: true,
                min: rightValue.min,
                max: rightValue.max,
                size: rightValue.size + 1
            }
        } else {
            return {
                isBST: false,
                min: rightValue.min,
                max: rightValue.max,
                size: rightValue.size
            }
        }
    }
}



export default findBST
