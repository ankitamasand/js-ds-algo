const sortArrayByParityII = (arr) => {
    let n = arr.length
    let result = []

    let i = 0

    for (let element of arr) {
        if (element % 2 === 0) {
            result[i] = element
            i += 2
        }
    }

    i = 1

    for (let element of arr) {
        if (element % 2 !== 0) {
            result[i] = element
            i += 2
        }
    }

    return result
}
