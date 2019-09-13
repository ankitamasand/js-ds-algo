const addTwoNumbers = (l1, l2) => {
    let current1 = l1
    let current2 = l2
    let l3 = new ListNode(null)
    let current3 = l3
    let carry = 0

    while (current1 !== null && current2 !== null) {
        let value = carry + current1.val + current2.val
        current3.next = new ListNode(Math.floor(value % 10))
        carry = Math.floor(value / 10)
        current1 = current1.next
        current2 = current2.next
        current3 = current3.next
    }

    while (current1 !== null) {
        let value = carry + current1.val
        current3.next = new ListNode(Math.floor(value % 10))
        carry = Math.floor(value / 10)
        current1 = current1.next
        current3 = current3.next
    }

    while (current2 !== null) {
        let value = carry + current2.val
        current3.next = new ListNode(Math.floor(value % 10))
        carry = Math.floor(value / 10)
        current2 = current2.next
        current3 = current3.next
    }

    if (carry > 0) {
        current3.next = new ListNode(carry)
        carry = 0
    }

    return l3.next
}
