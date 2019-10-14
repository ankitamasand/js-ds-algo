const firstWindowSum = (arr, start, end) => {
    let windowSum = 0
    for (let i = start; i < end; i++) {
        windowSum += arr[i]
    }
    return windowSum
}

const slidingWindow = (arr, k) => {
    let n = arr.length
    let windowSum = firstWindowSum(arr, 0, k)
    let maxWindowSum = windowSum
    let subArray = arr.slice(0, k)
    let start = 1
    let end = k

    while (end < n) {
        windowSum = windowSum - arr[start-1] + arr[end]
        if (windowSum > maxWindowSum) {
            maxWindowSum = windowSum
            subArray = arr.slice(start, end+1)
        }
        start += 1
        end += 1
    }

    console.log('Maximum sum', maxWindowSum)
    console.log('subArray', subArray)

}

export default slidingWindow
