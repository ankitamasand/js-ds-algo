const minAddToMakeValid = (s) => {
    let n = s.length
    if (!n) return 0
    let stack = []
    let top = -1
    let extras = 0

    for (let i = 0; i < n; i++) {
        let paren = s.charAt(i)

        if (paren === '(') {
            stack.push(paren)
            top += 1
            continue
        }

        if (paren === ')') {

            if (top < 0) {
                extras += 1
            } else {
                stack.pop()
                top -= 1
            }
        }
    }

    while (top >= 0) {
        extras += 1
        top -= 1
    }

    return extras
}

export default minAddToMakeValid
