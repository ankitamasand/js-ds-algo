const middleNode = (head) => {
    let currentPtr = head
    let nextPtr = head

    /* If there is only one node in the list */
    if (!head.next) return head

    while (nextPtr && nextPtr.next) {
        nextPtr = nextPtr.next ? nextPtr.next.next : null
        currentPtr = currentPtr.next
    }

    return currentPtr
}
