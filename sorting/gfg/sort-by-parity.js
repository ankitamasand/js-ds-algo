import { swapElementsInArr } from '../utils'

const sortByParity = (arr) => {
    let n = arr.length
    let start = 0
    let end = n - 1

    while (start < end) {
        if (arr[start] % 2 === 0) {
            start++
        } else {
            while (end > start) {
                if (arr[end] % 2 === 0) {
                    let temp = arr[start]
                    arr[start] = arr[end]
                    arr[end] = temp
                    start +=1
                    break
                }
                end -= 1
            }
        }
    }

    return arr
}

export default sortByParity
