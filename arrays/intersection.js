/* https://leetcode.com/problems/intersection-of-two-arrays/ */

/* This approach uses sets and space compexity is O(n+m) */

const intersection = (nums1, nums2) => {
    let a = new Set(nums1)
    let b = new Set(nums2)

    let intersection = new Set(
        [...a].filter(x => b.has(x))
    )

    return [ ...intersection ]
}

export default intersection
