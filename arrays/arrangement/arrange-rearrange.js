/* Arrange elements of an array in such a way that the elements at a odd place is smaller than all the elements before it and the element at an even place is greater is all the elements before it */

// sort and then rearrange

import mergeSort from '../sorting/mergeSort'

/* Check this again */
const rearrangeArr = (arr) => {
    const sortedArr = mergeSort([ ...arr ])
    let n = arr.length
    for (let i = 0; i < n; i++) {

        if ((i + 1) % 2 === 0) {
            arr[i] = sortedArr[i]
        } else {
            arr[i] = sortedArr[j]
        }
    }
}
