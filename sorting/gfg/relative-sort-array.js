const relativeSortArray = (arr1, arr2) => {

    let m = new Map()

    for (let i of arr1) {
        if (!m.has(i)) {
            m.set(i, 1)
        } else {
            m.set(i, m.get(i) + 1)
        }
    }

    for (let i of arr2) {
        let values = Array(m.get(i)).fill(i)
        result = [ ...result, ...values ]
        m.delete(i)
    }

    let sortedMap = Array.from(m).sort( (a, b) => a[0] - b[0])

    for (let i of sortedMap) {
        let values = Array(i[1]).fill(i[0])
        result = [ ...result, ...values]
    }

    return result
}
