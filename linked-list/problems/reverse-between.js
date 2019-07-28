/* This has some issues, solve them later */

const reverseBetween = (head, m, n) => {

    let old = head
    let current = head
    let prev = head
    let currentIndex = 1
    let rStart = head

    if (m >= n || !head.next) return head

    while (currentIndex < m) {
        old = prev
        prev = prev.next
        currentIndex += 1
    }

    rStart = prev
    current = prev.next

    console.log('currentIndex', currentIndex)

    /* Reversing the list from m to n position */
    while (currentIndex < n) {
        let ahead = current.next
        current.next = prev
        prev = current
        current = ahead
        currentIndex += 1
    }

    old.next = prev

    while (current) {
        console.log('current', current)
        rStart.next = current
        current = current.next
        rStart = rStart.next
    }

    console.log('head', head)

    return head
}

export default reverseBetween
