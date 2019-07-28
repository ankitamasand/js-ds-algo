const deleteNode = (head, node) => {
    let prev = null
    let current = head

    if (head.data === node) {
        head = head.next
        return
    }

    while (current) {
        if (current.data === node) {
            prev.next = current.next
        }
        prev = current
        current = current.next
    }
}

const inPlaceDelete = (node) => {
    node.data = node.next.data
    node.next = node.next.next
}
