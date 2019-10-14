const productExceptSelf = (nums) => {
    if (!nums.length) return nums
    let n = nums.length

    let left = new Array(n)
    let result = new Array(n)

    left[0] = 1

    for (let i = 1; i < n; i++) {
        left[i] = left[i-1] * nums[i-1]
    }

    let aheadRightValue = 1
    result[n-1] = left[n-1] * aheadRightValue

    for (let j = n-2; j >= 0; j--) {
        let rightValue = aheadRightValue * nums[j+1]
        aheadRightValue = rightValue
        result[j] = left[j] * rightValue
    }

    return result
}

export default productExceptSelf
