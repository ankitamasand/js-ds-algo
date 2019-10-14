/* Method I - Sorting an array and checking. This will take O(nlogn) time */
/* Method II - Add positive elements in a set and then iterate through the set to find the first missing positive integer */


/* Check this solution later */
const firstMissingPositive = (nums) => {
    let n = nums.length
    if (!n) return nums
    let counter = 1
    nums = nums.sort((a, b) => a - b)
    let i = 1
    while (i < n) {
        if (nums[i-1] > i) return i
        i += 1
    }

    return i
}

export const firstMissingPositive2 = (nums) => {
    console.log('ffsfsfs')
    let n = nums.length
    let result = 1
    if (!n) return result
    let s = new Set()

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            s.add(nums[i])
        }
    }

    console.log('s', s)

    let counter = 0
    while (counter < s.size) {
        counter += 1
        if (!s.has(counter)) return counter
    }

    return counter + 1
}

export default firstMissingPositive
