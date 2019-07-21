import Node from './node'

class LinkedList {

    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst (data) {
        const node = new Node(data)
        if (this.head) {
            let temp = this.head
            node.next = temp
        }
        this.head = node
        this.size += 1
    }

    insertLast (data) {
        if (!this.head) {
            return this.insertFirst(data)
        }

        let current = this.head

        while(current.next) {
            current = current.next
        }

        current.next = new Node(data, null)
        this.size += 1
    }

    insertAtIndex (data, index) {
        if (index < 0 || index > this.size) {
            return
        }

        if (index === 0) {
            return this.insertFirst(data)
        }

        let current = this.head
        let currentIndex = 0
        let previous

        while (currentIndex < index) {
            previous = current
            current = current.next
            currentIndex += 1
        }

        const node = new Node(data)
        previous.next = node
        node.next = current
        this.size += 1
    }

    getAtIndex (index) {
        if (index < 0 || index > this.size) {
            return
        }

        let currentIndex = 0
        let current = this.head

        while (currentIndex < index) {
            current = current.next
            currentIndex += 1
        }

        if (current) {
            console.log(`Element at index ${index} - ${current.data}`)
        }
    }

    getIndexOfNode (data) {
        let currentIndex = 0
        let current = this.head

        while(current.next) {
            if (current.data === data) {
                console.log(`Index of node ${data} is ${currentIndex}`)
                break
            }
            currentIndex += 1
            current = current.next
        }
    }

    deleteList () {
        this.head = null
    }

    removeAt (index) {
        if (index < 0 || index > this.size) {
            return
        }

        let current = this.head
        let currentIndex = 0

        if (index === 0) {
            this.head = current.next
            return
        }

        let previous
        while (currentIndex < index) {
            previous = current
            current = current.next
            currentIndex += 1
        }

        if (current) {
            previous.next = current.next
        }
    }

    printListData () {
        if (!this.head) return null

        let current = this.head

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

export default LinkedList
