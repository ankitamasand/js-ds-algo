const getPrefixSumArray = (arr) => {
    let psa = new Array(arr.length)
    psa[0] = arr[0]

    /* Building a prefix sum array */
    for (let i = 1; i < n; i++) {
        psa[i] = psa[i-1] + arr[i]
    }

    return psa
}

let psa = getPrefixSumArray()

const queries = (psa, l, r) => {
    if (l === 0) {
        return psa[r]
    }
    return psa[r] - psa[l - 1]
}

/* Example Array: [2, 8, 3, 9, 6, 5, 4]*/
queries(psa, 0, 2) // 13
queries(psa, 1, 3) // 20
queries(psa, 2, 6) // 27
