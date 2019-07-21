const insertionSort = (arr) => {
    let n = arr.length

    console.log('Unsorted array', arr)

    for (let i = 1; i < n; i++) {
        let elementToSort = arr[i]
        let currentElementIndex = i

        while (currentElementIndex > 0 && arr[currentElementIndex - 1] > elementToSort) {
            arr[currentElementIndex] = arr[currentElementIndex - 1]
            currentElementIndex -= 1
        }

        arr[currentElementIndex] = elementToSort
    }

    return arr
}

export default insertionSort
