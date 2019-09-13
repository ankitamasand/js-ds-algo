const isMajorityElement = (nums, target) => {
    let n = nums.length
    let midIndex = Math.ceil(n/2)
    if (nums[midIndex] !== target) return false
    let i = 0
    let j = n - 1

    while (i < midIndex && nums[i] !== target) {
        i++
    }

    while (j > midIndex && nums[j] !== target) {
        j--
    }

   if (j - i + 1 === midIndex) return true
    return false
}

export default isMajorityElement
