/* This is the first approach. */

// let Graph = function () {
//     this.storage = {}
//     this.size = 0
// }
//
// Graph.prototype.add = function (value) {
//     this.storage[value] = {}
//     this.size++
// }
//
// Graph.prototype.addConnection = function (from, to) {
//     this.storage[fr][to] = true
//     this.storage[to][fr] = true
// }
//
// Graph.prototype.removeConnection = function (from, to) {
//     delete this.storage[from][to]
//     delete this.storage[to][from]
// }
//
// Graph.prototype.hasConnection = function (target) {
//     return this.storage.hasOwnProperty(target)
// }
//
// Graph.prototype.remove = function (val) {
//     delete this.storage[val]
//     this.size--
//     for (let key in this.storage) {
//         if (this.storage[key][val]) {
//             delete this.storage[key][val]
//         }
//     }
// }


/* This is the second approach */


function GraphNode (val) {
    this.val = val
    this.edges = {}
}

function Graph () {
    this.vertices = {}
}

Graph.prototype.addVertex = function (val) {
    if (!this.vertices[val]) {
        this.vertices[val] = new GraphNode(val)
    }
}

Graph.prototype.removeVertex = function (val) {
    if (this.vertices[val]) {
        delete this.vertices[val]

        Object.keys(this.vertices).forEach((key, index) => {
            if (this.vertices[key].edges[val]) {
                delete this.vertices[key].edges[val]
            }
        })
    }
}

Graph.prototype.getVertex = function (val) {
    return this.vertices[val]
}

Graph.prototype.addEdge = function (start, end) {
    if (this.vertices[start] && this.vertices[end]) {
        if (this.vertices[start].edges[end]) {
            this.vertices[start].edges[end].weight += 1
        } else {
            this.vertices[start].edges[end] = {weight: 1}
        }
    }
}

Graph.prototype.removeEdge = function (start, end) {
    if (this.vertices[start] && this.vertices[end]) {
        if (this.vertices[start].edges[end]) {
            delete this.vertices[start].edges[end]
        }
    }
}

Graph.prototype.getEdge = function (start, end) {
    return this.vertices[start].edges[end] || null
}

Graph.prototype.neighbors = function (val) {
    return this.vertices[val] ? this.vertices[val].edges : null
}

export default Graph
