/* Optimize this -- Try doing it without stack (https://leetcode.com/problems/remove-outermost-parentheses/) */

const removeOuterParentheses = (S) => {

    if (!S) return S
    let n = S.length
    let stack = new Array(n)
    let top = -1
    let extraOpens = 0
    let result = ''

    for (let i = 0; i < n; i++) {
        let paren = S.charAt(i)

        if (paren === '(') {
            stack.push(paren)
            top +=1
            continue
        }

        if (paren === ')') {
            if (top > 0) {
                while (top > 0) {
                    extraOpens += 1
                    result = result.concat(stack.pop())
                    top -= 1
                }
                extraOpens -= 1
                result = result.concat(paren)
            } else if (top === 0 && extraOpens > 0){
                extraOpens -= 1
                result = result.concat(paren)
            } else {
                stack.pop()
                top -= 1
            }
        }
    }

    return result
}

export default removeOuterParentheses
