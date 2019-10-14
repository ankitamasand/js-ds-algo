const removeDuplicates = (arr) => {

    let n = arr.length
    let i = 0

    for (let j = 1; j < n; j++) {
        if (arr[j] !== arr[i]) {
            i += 1
            arr[i] = arr[j]
        }
    }

    return i + 1
}
