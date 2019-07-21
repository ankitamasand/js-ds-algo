const merge = (leftArr, rightArr, arr) => {

    let leftArrLength = leftArr.length
    let rightArrLength = rightArr.length
    let i = 0
    let j = 0
    let k = 0

    while (i < leftArrLength && j < rightArrLength) {

        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i]
            i += 1
        } else {
            arr[k] = rightArr[j]
            j += 1
        }

        k += 1
    }

    /* Handling the remaining elements in both the arrays */

    while (i < leftArrLength) {
        arr[k] = leftArr[i]
        k += 1
        i += 1
    }

    while (j < rightArrLength) {
        arr[k] = rightArr[j]
        k += 1
        j += 1
    }

    return arr
}

const mergeSort = (arr) => {
    let n = arr.length

    if (n < 2) return

    let mid = n / 2

    /* The Array.prototype.slice function creates a new array with first parameter as the start index and second parameter as the end Index */

    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid, n)

    mergeSort(leftArr)
    mergeSort(rightArr)
    merge(leftArr, rightArr, arr)
}

export default mergeSort
