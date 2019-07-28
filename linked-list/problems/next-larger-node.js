const getTopMost = (arr) => {
    if (!arr.length) return null
    return arr[arr.length - 1]
}

const nextLargerNodes = (head) => {

    let currentIndex = 0
    let current = head
    let nodeStack = []
    let nextGreater = []

    while (current) {
        let value = current.val
        let topElement = getTopMost(nodeStack)

        if (topElement !== null) {
            while (value > topElement.val) {
                nextGreater[topElement.index] = value
                nodeStack.pop()
                topElement = getTopMost(nodeStack)
            }
        }

        nodeStack.push({
            val: value,
            index: currentIndex
        })

        current = current.next
        currentIndex += 1
    }

    if (nodeStack.length > 0) {
        nextGreater = [ ...nextGreater, ...Array(nodeStack.length).fill(0) ]
    }

    return nextGreater
}
