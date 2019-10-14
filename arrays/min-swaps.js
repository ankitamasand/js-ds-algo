const minSwaps = (data) => {
    let numOfOnes = 0
    let n = data.length
    let minSwaps = n

    for (let i = 0; i < n; i++) {
        if (data[i] === 1) numOfOnes++
    }

    if (numOfOnes === 1) return 0

    let swapsRequired = 0

    /* Counting the swaps required for the first window */
    for (let counter = 0; counter < numOfOnes; counter++) {
        if (data[counter] === 0) swapsRequired++
    }

    if (swapsRequired < minSwaps) {
        minSwaps = swapsRequired
    }

    let i = 1
    let j = numOfOnes

    while (i < j && j < n) {
        if (data[i] !== data[i-1]) {
            if (data[i] === 1 && data[i-1] === 0) {
                swapsRequired--
            } else {
                swapsRequired++
            }
        }

        if (data[j] !== data[j-1]) {
            if (data[j] === 1 && data[j-1] === 0) {
                swapsRequired--
            } else {
                swapsRequired++
            }
        }

        if (swapsRequired < minSwaps) {
            minSwaps = swapsRequired
        }

        i += 1
        j += 1
    }

    return minSwaps
}

export default minSwaps
