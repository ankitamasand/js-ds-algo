const minDeletionSize = (arr) => {

    let n = arr.length
    let d = 0

    if (!arr.length) return d

    let strSize = arr[0].length

    for (let j = 0; j < strSize; j++) {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i].charCodeAt(j) > arr[i+1].charCodeAt(j)) {
                d += 1
                break
            }
        }
    }

    return d
}
