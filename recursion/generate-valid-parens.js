export const generateParenthesis = (n) => {
    let output = []
    helper(n, 1, 0, "(", output)
    return output
}

const helper = (n, openCount, closeCount, str, output) => {
    if (str.length === 2*n) {
        output.push(str)
        return
    }
    if (openCount < n) {
        helper(n, openCount+1, closeCount, str+"(", output)
    }

    if (closeCount < openCount) {
        helper(n, openCount, closeCount+1, str+")", output)
    }
}
