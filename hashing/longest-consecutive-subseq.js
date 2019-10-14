/* https://www.geeksforgeeks.org/longest-consecutive-subsequence/ */

const countAhead = (s, element) => {
    let counter = 1
    while (counter < s.size) {
        if (s.has(element+counter)) {
            counter += 1
        } else {
            return counter
        }
    }
    return counter
}

const longestConsecutive = (nums) => {
    let n = nums.length
    if (!n) return 0

    let s = new Set(nums) // Storing all the numbers in the nums array in a set
    let subSeqLength = 0

    for (let element of s) {
        /* Finding the first element of the subsequence. An element is the first element if its consecutive previous element is not present in the set. */

        if (!s.has(element-1)) {
            let count = countAhead(s, element)
            subSeqLength = Math.max(count, subSeqLength)
        }
    }

    return subSeqLength
}

export default longestConsecutive
