const peakIndexInMountainArray = (arr) => {

    if (!arr.length) return false
    if (arr.length < 3) return false
    let n = arr.length
    let peakIndex = 0
    for (let i = 1; i < n; i++, peakIndex++) {
        if (arr[peakIndex] > arr[i]) {
            return peakIndex
        }
    }
}

export default peakIndexInMountainArray
