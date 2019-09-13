/* https://www.geeksforgeeks.org/given-two-unsorted-arrays-find-pairs-whose-sum-x/ */

/* Find pairs of numbers in unsorted arrays nums1 & nums2 whose sum is equal to x */

const pairsInUnsortedArrays = (nums1, nums2, x) => {
    let nums1Length = nums1.length
    let nums2Length = nums2.length
    if (!nums1Length || !nums2Length) return []
    let set = new Set()
    let pairs = []

    for (let i = 0; i < nums1.length; i++) {
        set.add(x-nums1[i])
    }

    console.log('set', set)

    for (let i = 0; i < nums2Length; i++) {
        if (set.has(nums2[i])) {
            pairs.push([nums2[i], x - nums2[i]])
        }
    }

    return pairs
}

export default pairsInUnsortedArrays
