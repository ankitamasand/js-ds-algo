const removeDuplicates = (s) => {
    let n = s.length
    if (!n) return n
    let stack = [s.charAt(0)]
    let top = 0
    let result = ""

    for (let i = 1; i < n; i++) {
        let value = s.charAt(i)
        let topElement = stack[top]
        if (topElement === value) {
            while (top >= 0 && value === topElement) {
                stack.pop()
                top -= 1
                topElement = stack[top]
            }
        } else {
            stack.push(value)
            top += 1
        }
    }

    while (top >= 0) {
        result = result.concat(stack[top])
        top -= 1
    }

    return result
}

export default removeDuplicates
