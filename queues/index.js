class Queue {

    constructor () {
        this.collection = []
    }

    print () {
        console.log(this.collection)
    }

    enqueue (value) {
        this.collection.push(value)
    }

    dequeue () {
        this.collection.shift()
    }

    front () {
        return this.collection[0]
    }

    size () {
        return this.collection.length
    }

    isEmpty () {
        return this.collection.length === 0
    }
}
