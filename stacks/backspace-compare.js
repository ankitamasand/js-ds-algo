const backspaceCompare = (s, t) => {
    return handleCharAndBackspace(s) === handleCharAndBackspace(t)
}

const handleCharAndBackspace = (str) => {
    let n = str.length
    if (!n) return ""
    let stack = []
    let top = -1
    let result = ''

    for (let i = 0; i < n; i++) {
        if (str.charAt(i) === '#') {
            if (top >= 0) {
                stack.pop()
                top -= 1
            }
        } else {
            stack.push(str.charAt(i))
            top += 1
        }
    }

    while (top >= 0) {
        result = stack[top] + result
        top -= 1
    }

    return result
}

export default backspaceCompare
