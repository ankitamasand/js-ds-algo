const validateStackSequences = (pushed, popped) => {
    let stack = []
    let top = -1
    let j = 0

    pushed.forEach(x => {
        stack.push(x)
        top += 1
        while (top >=0 && j < popped.length && stack[top] === popped[j]) {
            stack.pop()
            top -= 1
            j += 1
        }
    })
    return j === popped.length
}


export default validateStackSequences
