const swapPairs = (head) => {
    if (!head) return head
    if (!head.next) return head // There should be atleast two nodes to swap in pairs
    let prev = head
    head = head.next
    let current = head
    let temp = null

    while (current !== null) {
        let ahead = current.next
        current.next = prev
        prev.next = ahead
        if (temp) {
            temp.next = current
        }
        current = ahead.next
        temp = prev
        prev = ahead
    }
}
