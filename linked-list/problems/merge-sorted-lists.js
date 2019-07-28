const mergeTwoLists = (l1, l2) => {
    let currentL1 = l1
    let currentL2 = l2

    let head = null
    let current = head

    while (currentL1 && currentL2) {
        let temp

        if (currentL1.val < currentL2.val) {
            temp = currentL1
            currentL1 = currentL1.next
        } else {
            temp = currentL2
            currentL2 = currentL2.next
        }

        if (!head) {
            head = temp
            current = head
        } else {
            current.next = temp
            current = current.next
        }
    }

    while (currentL1) {
        if (!head) {
            head = currentL1
            current = head
        } else {
            current.next = currentL1
            currentL1 = currentL1.next
            current = current.next
        }
    }

    while (currentL2) {
        if (!head) {
            head = currentL2
            current = head
        } else {
            current.next = currentL2
            currentL2 = currentL2.next
            current = current.next
        }
    }

    return head
}
