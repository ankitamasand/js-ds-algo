/* An equilibrium point in an array is such that the sum of elements on its left is equal to the sum of elements on its right */

/* Method 1 - using prefix and suffix array, this requires O(n) extra space and time complexity is O(n) */

const hasEquilibrium = (arr) => {
    let n = arr.length
    let prefixSum = [arr[0]]
    let suffixSum = [arr[n-1]]

    console.log('suffixSum', suffixSum)

    for (let i = 1, j = n-2; i < n; i++, j--) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
        suffixSum[i] = suffixSum[i - 1] + arr[j]
    }

    console.log('prefixSum', prefixSum)
    console.log('suffixSum', suffixSum)
}

export default hasEquilibrium
