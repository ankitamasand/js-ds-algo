/* https://leetcode.com/problems/validate-binary-search-tree/ */

const isValidBSTHelper = (root, min, max) => {
    if (root === null) {
        return true
    }

    if (root.val > min
        && root.val < max
        && isValidBSTHelper(root.left, min, root.val)
        && isValidBSTHelper(root.right, root.val, max)) {
        return true
    }
    return false
}

const isValidBST = (root) => {
    return isValidBSTHelper(root, -Infinity, Infinity)
}
