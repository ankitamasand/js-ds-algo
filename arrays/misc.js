/* https://leetcode.com/problems/n-repeated-element-in-size-2n-array/ */

/* This can be simply done using hashmap or a set
But if you're required to not use any data structure, then the following idea can be used:

Since the repeating element is present n times in a 2N length array, this means that element is present at the most one time adjacent to itself or they are present at alternative positions
*/
const repeatedNTimes = (arr) => {

    let n = arr.length

    /* Checking if the repeated element is placed at adjacent positions */
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i+1]) {
            return arr[i]
        }
    }

    /* If the repeated element is not placed at adjacent positions, it is guranteed that these elements are placed at alternative positions in the array.
    It is required to only run this loop to compare the first two elements with the last two elements.
    */

    for (let i = 0; i < 2; i++) {
        if (arr[i] === arr[n-1] || arr[i] === arr[n-2]) {
            return arr[i]
        }
    }
}


export const isArmstrong = (N) => {
    let temp = N
    let digits = N.toString().length
    let rem = 0
    let result = 0

    while (N > 0) {
        rem = N % 10
        console.log('rem', rem)
        result += Math.pow(rem, digits)
        N = Math.floor(N/10)
    }

    return result === temp
}

export const largestUniqueNumber = (A) => {
    if (!A.length) return -1
    if (A.length === 1) return A[0]

    let map = new Map()
    let n = A.length

    for (let i = 0; i < n; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) + 1)
        } else {
            map.set(A[i], 1)
        }
    }

    console.log('map', map)

    let sortedMapKeys = [ ...map.keys() ].sort( (a, b) => b - a)
    console.log('sortedMapKeys', sortedMapKeys)

    for (let i = 0; i < sortedMapKeys.length; i++) {
        if (map.get(sortedMapKeys[i]) === 1) {
            return sortedMapKeys[i]
        }
    }

    return -1

    /* repeatedNTimes sum can also be done in-place. First sort the array in descending order and then return the element that is not repeated at consecutive position. */
}

let cache = {}

export const tribonacci = (n) => {

    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    if (cache[n]) {
        return cache[n]
    }

    let result = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
    cache[n] = result
    return result
}

export default repeatedNTimes
