import { swapElementsInArr } from '../utils'

/* METHOD 1 */
const sortByFrequency = (arr) => {
    console.log('unsorted arr', arr)
    let n = arr.length
    let sortedArr = quickSort([ ...arr ], 0, n-1)
    let frequencyArr = []

    /* Initializing the 2D array */

    for (let i = 0; i < n; i++) {
        if (!frequencyArr[i]) {
            frequencyArr[i] = []
        }

        /* We're storing the index at position 0, count at position 1 and value at position 2 */

        frequencyArr[i][0] = i
        frequencyArr[i][1] = 0
        frequencyArr[i][2] = sortedArr[i]
    }

    /* Calculating the count of values in 2D array */

    for (let i = 1; i < n; i++) {
        if (frequencyArr[i][2] === frequencyArr[i-1][2]) {
            frequencyArr[i][1] = frequencyArr[i][1] + frequencyArr[i-1][1] + 1
            frequencyArr[i-1][1] = -1
        } else {
            frequencyArr[i][1] = 1
        }
    }

    console.log('frequencyArr', frequencyArr)

    /* Sorting by frequency */

    for (let i = n - 1; i >= 0; i--) {
        let index = 0
        if (frequencyArr[i][1] != -1) {
            for (let j = 0; j < frequencyArr[i][1]; j++) {
                arr[index] = frequencyArr[i][2]
                index += 1
            }
        }
    }

    return arr
}

const partition = (arr, start, end) => {

    let pivot = arr[end]
    let pIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            swapElementsInArr(arr, i, pIndex)
            pIndex += 1
        }
    }

    swapElementsInArr(arr, pIndex, end)
    return pIndex
}

const quickSort = (arr, start, end) => {

    if (start < end) {
        let pIndex = partition(arr, start, end)
        quickSort(arr, start, pIndex - 1)
        quickSort(arr, pIndex + 1, end)
    }
    return arr
}

export default sortByFrequency
