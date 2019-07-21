const reverseArr = (arr) => {
    let n = arr.length
    let newArr = []

    for (let i = n - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    return newArr
}

const bubbleSort = (arr) => {
    let n = arr.length
    console.log('Unsorted array', arr)
    for (let i = 0; i < n; i++) {

        /* swapsDone and noOfSwaps are flags and are used to improve the performance of this algorithm. swapsDone checks if array is sorted and so no more swaps are required and noOfSwaps checks if array is in the reverse order */

        let swapsDone = 0
        let noOfSwaps = 0

        for (let j = 0; j < n-i; j++) {

            console.log('Comparison between', i, j+1, j)

            if (arr[j+1] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapsDone = 1
                noOfSwaps += 1
            }
        }

        if (swapsDone === 0) {
            break
        }

        if (noOfSwaps === n - 1) {
            arr = [ ...reverseArr(arr) ]
        }
    }
    return arr
}

export default bubbleSort
