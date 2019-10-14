const parensMap = new Map()
parensMap.set('}', '{')
parensMap.set(')', '(')
parensMap.set(']', '[')

const isValid = (s) => {
    let n = s.length
    if (!n) return true
    let stack = []
    let top = -1

    for (let i = 0; i < n; i++) {
        let value = s.charAt(i)
        if (value === '(' || value === '[' || value === '{') {
            stack.push(value)
            top += 1
        }
        if (value === ')' || value === ']' || value === '}') {
            let topElement = stack[top]
            if (topElement === parensMap.get(value)) {
                stack.pop()
                top -= 1
            } else {
                return false
            }
        }
    }

    if (top === -1) return true
    return false
}

export default isValid
