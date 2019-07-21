import { swapElementsInArr } from './utils'

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

    if (!start && !end) {
        start = 0
        end = arr.length - 1
    }

    if (start < end) {
        let pIndex = partition(arr, start, end)
        quickSort(arr, start, pIndex - 1)
        quickSort(arr, pIndex + 1, end)
    }

    return arr
}

export default quickSort
