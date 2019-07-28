/* Find the pairs of numbers in a sorted array such that the sum of these two numbers is equal to the input parameter sum */

const findPairsOfSum = (arr, sum) => {

    let n = arr.length
    let start = 0
    let end = n - 1
    let pairs = []

    while (start < end) {
        if (arr[start] + arr[end] === sum) {
            pairs = [arr[start], arr[end]]
            return pairs
        } else if (arr[start] + arr[end] > sum) {
            end -= 1
        } else {
            start += 1
        }
    }

    return pairs
}

export default findPairsOfSum
