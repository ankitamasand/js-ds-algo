const sortedSquares = (arr) => {
    let n = arr.length
    let j = 0

    while (j < n && arr[j] < 0)
        j++

    let i = j - 1
    let result = []

    while (i >= 0 && j < n) {
        if (arr[i]*arr[i] < arr[j]*arr[j]) {
            result.push(arr[i]*arr[i])
            i -= 1
        } else {
            result.push(arr[j]*arr[j])
            j += 1
        }
    }

    while (i >= 0) {
        result.push(arr[i]*arr[i])
        i -= 1
    }

    while (j < n) {
        result.push(arr[j]*arr[j])
        j += 1
    }

    return sortedSquares

}
