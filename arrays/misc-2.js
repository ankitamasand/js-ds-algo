/* https://leetcode.com/problems/non-decreasing-array/ -- Not solved yet (Check again!) */

export const checkPossibility = (nums) => {
    if (!nums.length) return true
    let n = nums.length
    let count = 0

    for (let i = 1; i < n && count < 2; i++) {
        if (nums[i] < nums[i-1]) {
            count += 1
            if (nums[i-2] <= nums[i]) {
                nums[i-1] = nums[i]
            } else {
                nums[i] = nums[i-1]
            }
        }
    }

    return count <= 1
}

/* https://leetcode.com/problems/monotonic-array/ */

export const isMonotonic = (arr) => {
    let n = arr.length
    if (!arr.length) return true
    let min = arr[0]
    let max = arr[0]
    let ismonotoneincre = true
    let ismonotonedecre = true

    for (let i = 1; i < n; i++) {
        if (arr[i] < max) {
            ismonotoneincre = false
            break
        }
        max = arr[i]
    }

    if (!ismonotoneincre) {
        for (let i = 1; i < n; i++) {
            if (arr[i] > min) {
                ismonotonedecre = false
                break
            }
            min = arr[i]
        }
    } else {
        ismonotonedecre = false
    }

    return ismonotoneincre || ismonotonedecre
}

/* https://leetcode.com/problems/array-partition-i/ */

export const arrayPairSum = (arr) => {
    if (!arr.length) return 0
    arr = arr.sort((a, b) => a - b)
    let n = arr.length
    let sum = 0
    for (let i = 0; i < n; i+=2) {
        sum += Math.min(arr[i], arr[i+1])
    }

    return sum
}

/* https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/ */
export const findDisappearedNumbers = (arr) => {
    let n = arr.length
    let result = []
    for (let i = 0; i < n; i++) {
        let value = Math.abs(arr[i])
        arr[value-1] = -Math.abs(arr[value-1])
    }
    console.log('arr', arr)

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            result.push(i+1)
        }
    }

    return result
}
