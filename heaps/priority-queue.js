/* Helper Methods */
const parent = (i) => return Math.floor(i/2)
const leftChild = (i) => return i * 2
const rightChild = (i) => return i * 2 + 1

const comparatorFn = (a, b) => a > b

const top = 1

class PriorityQueue {

    constructor (comparatorFn=comparatorFn) {
        this.heap = [null]
        this.comparatorFn = comparatorFn
    }

    size () {
        return this.heap.length - 1
    }

    isEmpty () {
        return this.size() === 0
    }

    peek () {
        return this.heap[top]
    }

    push (value) {
        this.heap.push(value)
        this.heap.siftUp()
    }

    swap (i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    isGreater (i, j) {
        return this.comparatorFn(this.heap[i], this.heap[j])
    }

    siftUp () {
        let current = this.heap[this.heap.size()]

        while (current > 1 && this.isGreater(current, parent(current))) {
            this.heap.swap(current, parent(current))
            current = parent(current)
        }
    }

    pop () {
        
    }

}
