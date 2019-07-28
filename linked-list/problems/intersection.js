const getIntersectionNode = (headA, headB) => {
    let currentA = headA
    let currentB = headB

    let map = new Map()

    while (currentA) {
        map.set(currentA, currentA)
        currentA = currentA.next
    }

    while (currentB) {
        if (map.has(currentB)) {
            return map.get(currentB)
        }
        currentB = currentB.next
    }

    return 0
}
