/* Given a sorted array, left rotate it by the input param pos. The elements before the pos index will come after the last element. */

const rotateByPos = (arr, pos) => {

    let n = arr.length

    /* Can be done in one line as well */
    // arr = [ ...arr.slice(pos + 1, n), ...arr.slice(0, pos + 1)]
    let tempArr = []
    let start = pos + 1

    for (let i = 0; i < n - 1 - pos; i++) {
        if (i <= pos) {
            tempArr.push(arr[i])
        }

        arr[i] = arr[start]
        start += 1
    }

    start = n - 1 - pos
    for (let i = 0; i < tempArr.length; i++) {
        arr[start] = tempArr[i]
        start += 1
    }

    return arr
}

/* Method 2 for the same problem using reversal algorithm */

const reverseArr = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start += 1
        end -= 1
    }
    console.log('arr', arr)
}

export const rotate = (arr, k) => {
    let n = arr.length
    k = k % n
    reverseArr(arr, 0, n - 1)
    reverseArr(arr, 0, k - 1)
    reverseArr(arr, k, n - 1)
    console.log('arr after rotate', arr)
}

export default rotateByPos
