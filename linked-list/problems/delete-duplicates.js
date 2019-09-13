const deleteDuplicates = (head) => {
    if (!head) return null

    /* If there is only element in the linkedlist */
    if (!head.next) return head

    let current = head
    let ahead = head.next

    while (ahead !== null) {
        if (current.val === ahead.val) {
            ahead = ahead.next
        } else {
            current.next = ahead
            current = ahead
            ahead = ahead.next
        }
    }
    current.next = null
}

export default deleteDuplicates

/* https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/ */

const deleteDuplicates2 = (head) => {
    if (!head) return null

    /* If there is only one element in the linkedlist */
    if (!head.next) return head

    let prev = new ListNode(null)
    prev.next = head
    let current = head

    while (current !== null) {
        if (current.next && current.val === current.next.val) {
            while (current && curent.val === current.next.val) {
                current = current.next
            }
            prev.next = current
        } else {
            prev = current
            current = current.next
        }
    }

    return prev.next
}
