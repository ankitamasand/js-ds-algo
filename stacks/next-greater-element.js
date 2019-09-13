/* https://leetcode.com/problems/next-greater-element-i/ */

const nextGreaterElement = (nums1, nums2) => {
    if (!nums1.length) return []
    let map = findNextGreater(nums2)
    return nums1.map (n => map.get(n))
}

const findNextGreater = (nums) => {
    let stack = [nums[0]]
    let top = 0
    let map = new Map()
    let n = nums.length

    for (let i = 1; i < n; i++) {
        let topElement = stack[top]

        if (nums[i] > topElement) {
            while (top >= 0 && nums[i] > topElement) {
                map.set(stack[top], nums[i])
                stack.pop()
                top -= 1
                topElement = stack[top]
            }
        }

        stack.push(nums[i])
        top += 1
    }

    while (top >= 0) {
        map.set(stack[top], -1)
        top -= 1
    }

    return map
}

export default nextGreaterElement
