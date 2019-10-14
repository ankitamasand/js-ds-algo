/* Method I - Using hash table */

const hasCycle = (head) => {

    /* There should be atleast two nodes in a linked list to have a cycle */
    if (!head) return false
    if (!head.next) return false

    let hashRef = new Set()
    let current = head

    while (current) {
        /* Reference is already present in hash, which means this node has been traversed already */
        if (hashRef.has(current)) return true

        hashRef.add(current) = 1
        current = current.next
    }
    return false
}

/* Method II - Two Pointers Approach */

const hasCycle = (head) => {

    /* There should be atleast two nodes in a linked list to have a cycle */
    if (!head) return false
    if (!head.next) return false

    let slow = head
    let fast = head.next

    while (slow != fast) {
        /* fast already reached the destination and won't come in the way of slow pointer */
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }

    return true
}
