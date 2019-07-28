const reverseList = (head) => {

    let prev = null
    let current = head

    while (current) {
        let ahead = current.next
        current.next = prev
        prev = current
        current = ahead
    }

    /* prev is now the head node */
    return prev
}
