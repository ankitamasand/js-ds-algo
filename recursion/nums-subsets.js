export const subsets = (nums) => {
    let output = []
    helper(nums, [], 0, output)
    return output
}

const helper = (nums, subset, i, output) => {
    if (i === nums.length) {
        output.push(subset)
        return
    }

    helper(nums, subset, i+1, output)
    let newSubset = [ ...subset ]
    newSubset.push(nums[i])
    helper(nums, newSubset, i+1, output)
}
