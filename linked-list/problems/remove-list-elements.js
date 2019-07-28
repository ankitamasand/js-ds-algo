const removeElements = (head, val) => {

    let prev = null
    let current = head

    while (current) {

        if (head.val === val) {
            head = head.next
            current = head
            continue
        }

        if (current.val === val) {
            prev.next = current.next
            current.next = null
        }

        prev = current
        current = current.next
    }

    return head
}
