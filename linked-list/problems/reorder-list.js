const reorderList = (head) => {

    if (!head) return head
    if (!head.next) return head

    let arr = []

    let current = head

    while (current) {
        arr.push(current)
        current = current.next
    }

    let i = 1
    let j = arr.length - 1

    current = head

    while (i < j) {
        current.next = arr[j]
        current = current.next

        current.next = arr[i]
        current = current.next

        i += 1
        j -= 1
    }

    if (i === j) {
        current.next = arr[i]
        current = current.next
    }
    current.next = null
    return head
}

export default reorderList
