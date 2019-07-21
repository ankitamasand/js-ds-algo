const selectionSort = (arr) => {
    let n = arr.length
    console.log('Unsorted array', arr)

    for (let i = 0; i < n; i++) {

        minIndex = i

        for (let j = minIndex + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        console.log('minIndex', minIndex)

        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

export default selectionSort
