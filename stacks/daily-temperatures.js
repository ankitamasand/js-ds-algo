/* https://leetcode.com/problems/daily-temperatures/ */

class Temperature {
    constructor (temp, index) {
        this.temp = temp
        this.index = index
    }
}

const dailyTemperatures = (T) => {
    let n = T.length
    if (!n) return []
    let result = new Array(n)
    let stack = [new Temperature(T[0], 0)]
    let top = 0
    let topElement

    for (let i = 1; i < n; i++) {
        topElement = stack[top]
        if (T[i] > topElement.temp) {
            while (top >= 0 && T[i] > topElement.temp) {
                result[topElement.index] = i - topElement.index
                stack.pop()
                top -= 1
                topElement = stack[top]
            }
        }
        stack.push(new Temperature(T[i], i))
        top += 1
    }

    while (top >= 0) {
        topElement = stack[top]
        result[topElement.index] = 0
        top -= 1
    }

    return result
}

export default dailyTemperatures
