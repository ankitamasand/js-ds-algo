const removeNthFromEnd = (head, n) => {

    let prev = null
    let current = head
    let ahead = head
    let currentIndex = 0

    while (currentIndex < n) {
        ahead = ahead.next
        currentIndex += 1
    }

    while (ahead) {
        prev = current
        current = current.next
        ahead = ahead.next
    }

    /* current will now point to the node that is to be removed */
    prev.next = current.next
    current.next = null

    return head
}
